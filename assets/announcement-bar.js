const states = new WeakMap();
const selector = '[data-announcement-bar]';
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const setFocusableState = (element) => {
  element.setAttribute('aria-hidden', 'true');
  element.querySelectorAll('a, button, input, select, textarea, [tabindex]').forEach((focusable) => {
    focusable.setAttribute('tabindex', '-1');
  });
};

const disableEntranceAnimation = (element) => {
  element.classList.remove('motion-block');
  element.querySelectorAll('.motion-block').forEach((motionElement) => motionElement.classList.remove('motion-block'));
};

const copyToClipboard = async (value) => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch (error) {
      // Fall back to the legacy API when clipboard permissions are unavailable.
    }
  }
  if (typeof document.execCommand !== 'function') throw new Error('Clipboard is unavailable');
  const input = document.createElement('textarea');
  input.value = value;
  input.setAttribute('readonly', '');
  input.style.position = 'fixed';
  input.style.opacity = '0';
  document.body.append(input);
  input.select();
  input.setSelectionRange(0, input.value.length);
  const copied = document.execCommand('copy');
  input.remove();
  if (!copied) throw new Error('Clipboard copy failed');
};

const initCopyInteraction = (root) => {
  let copyTimer = 0;
  const setCopyIcon = (button, copied) => {
    const copyIcon = button.querySelector('[data-copy-icon-copy]');
    const checkIcon = button.querySelector('[data-copy-icon-check]');
    if (copyIcon) copyIcon.hidden = copied;
    if (checkIcon) checkIcon.hidden = !copied;
    button.dataset.copied = String(copied);
  };
  const onClick = async (event) => {
    const button = event.target.closest?.('[data-discount-code-copy]');
    if (!button || !root.contains(button)) return;
    const value = button.dataset.discountCode;
    if (!value) return;
    try {
      await copyToClipboard(value);
      const status = root.querySelector('[data-discount-code-status]');
      if (status) status.textContent = 'Discount code copied';
      setCopyIcon(button, true);
      window.clearTimeout(copyTimer);
      copyTimer = window.setTimeout(() => {
        setCopyIcon(button, false);
        if (status) status.textContent = '';
      }, 2000);
    } catch (error) {
      // Clipboard access can be denied in preview contexts; keep the button usable.
    }
  };
  root.addEventListener('click', onClick);
  return { onClick, clearCopyTimer: () => window.clearTimeout(copyTimer) };
};

const sanitizeEditorAttributes = (element) => {
  [element, ...element.querySelectorAll('*')].forEach((node) => {
    [...node.attributes].forEach((attribute) => {
      if (attribute.name.startsWith('data-shopify-editor') || attribute.name.startsWith('data-shopify-block')) node.removeAttribute(attribute.name);
    });
    if (node.id?.startsWith('shopify-block-')) node.removeAttribute('id');
  });
  return element;
};

const initSlider = (root, slides, track) => {
  if (slides.length < 2) root.classList.add('announcement-bar--single');
  let activeIndex = 0;
  let visualIndex = 0;
  let slideHeight = 0;
  let isAnimating = false;
  let lastMoveAt = 0;
  let firstClone = null;
  const transitionDuration = () => {
    const duration = parseFloat(getComputedStyle(track).transitionDuration || '0');
    return Number.isFinite(duration) ? duration * 1000 : 420;
  };
  const measureSlideHeight = (slide) => {
    const clone = slide.cloneNode(true);
    clone.dataset.announcementActive = 'false';
    clone.setAttribute('aria-hidden', 'true');
    clone.style.position = 'relative';
    clone.style.inset = 'auto';
    clone.style.width = '100%';
    clone.style.flex = '0 0 auto';
    clone.style.height = 'auto';
    clone.style.minHeight = '0';
    clone.style.visibility = 'hidden';
    clone.style.opacity = '0';
    clone.style.pointerEvents = 'none';
    track.append(clone);
    const height = clone.scrollHeight || clone.offsetHeight;
    clone.remove();
    return height;
  };
  const syncSize = () => {
    const activeSlide = slides[activeIndex];
    if (!activeSlide) return;
    slideHeight = Math.max(...slides.map(measureSlideHeight), 0);
    root.style.setProperty('--announcement-slider-height', `${slideHeight}px`);
    track.style.setProperty('--announcement-slider-offset', `${visualIndex * slideHeight}px`);
  };
  const setActive = (index, state = 'active') => {
    activeIndex = index;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === activeIndex;
      slide.dataset.announcementActive = String(active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
      slide.dataset.announcementState = active ? state : 'idle';
    });
    syncSize();
  };
  const move = (direction) => {
    const now = Date.now();
    if (isAnimating || slides.length < 2 || now - lastMoveAt < 900) return;
    if (direction < 0 && activeIndex === 0) return;
    lastMoveAt = now;
    const previousIndex = activeIndex;
    const nextIndex = activeIndex + direction;
    const isLoop = direction > 0 && nextIndex === slides.length;
    const nextSlide = isLoop ? firstClone : slides[nextIndex];
    if (!nextSlide) return;
    isAnimating = true;
    root.classList.add('announcement-bar--slider-moving');
    visualIndex = nextIndex;
    slides[previousIndex].dataset.announcementState = 'exit';
    nextSlide.dataset.announcementActive = 'true';
    nextSlide.dataset.announcementState = 'enter';
    nextSlide.setAttribute('aria-hidden', 'false');
    track.style.setProperty('--announcement-slider-offset', `${nextIndex * slideHeight}px`);
    window.setTimeout(() => {
      if (isLoop) {
        track.classList.add('announcement-bar--slider-reset');
        visualIndex = 0;
        track.style.setProperty('--announcement-slider-offset', '0px');
        nextSlide.dataset.announcementActive = 'false';
        nextSlide.setAttribute('aria-hidden', 'true');
        window.requestAnimationFrame(() => track.classList.remove('announcement-bar--slider-reset'));
        setActive(0);
      } else {
        visualIndex = nextIndex;
        setActive(nextIndex);
      }
      nextSlide.dataset.announcementState = 'active';
      root.classList.remove('announcement-bar--slider-moving');
      isAnimating = false;
    }, transitionDuration());
  };
  const previous = root.querySelector('[data-announcement-previous]');
  const next = root.querySelector('[data-announcement-next]');
  const onPrevious = (event) => { event.preventDefault(); event.stopImmediatePropagation(); stop(); move(-1); restart(); };
  const onNext = (event) => { event.preventDefault(); event.stopImmediatePropagation(); stop(); move(1); restart(); };
  const autoplayDelay = Number(root.dataset.announcementAutoplay) || 0;
  const pauseOnHover = root.dataset.announcementPauseOnHover !== 'false';
  let isHovered = false;
  let isFocused = false;
  let timer = 0;
  const stop = () => {
    if (timer) window.clearTimeout(timer);
    timer = 0;
  };
  const restart = () => {
    stop();
    if (slides.length < 2 || autoplayDelay <= 0 || reducedMotion() || (pauseOnHover && (isHovered || isFocused))) return;
    timer = window.setTimeout(() => {
      move(1);
      restart();
    }, autoplayDelay);
  };
  const pause = (event) => {
    if (!pauseOnHover) return;
    if (event.type === 'mouseenter') isHovered = true;
    if (event.type === 'focusin') isFocused = true;
    stop();
  };
  const resume = (event) => {
    if (!pauseOnHover) return;
    if (event.type === 'mouseleave') isHovered = false;
    if (event.type === 'focusout') isFocused = false;
    restart();
  };
  const resizeObserver = new ResizeObserver(syncSize);
  slides.forEach((slide) => resizeObserver.observe(slide));
  previous?.addEventListener('click', onPrevious);
  next?.addEventListener('click', onNext);
  if (pauseOnHover) {
    root.addEventListener('mouseenter', pause);
    root.addEventListener('mouseleave', resume);
    root.addEventListener('focusin', pause);
    root.addEventListener('focusout', resume);
  }
  firstClone = slides.length > 1 ? sanitizeEditorAttributes(slides[0].cloneNode(true)) : null;
  if (firstClone) {
    firstClone.dataset.announcementActive = 'false';
    firstClone.dataset.announcementState = 'idle';
    firstClone.setAttribute('aria-hidden', 'true');
    firstClone.setAttribute('inert', '');
    track.append(firstClone);
  }
  setActive(0);
  restart();
  return { previous, next, onPrevious, onNext, stop, pause, resume, pauseOnHover, resizeObserver, firstClone };
};

const initScrolling = (root, track) => {
  const clones = [];
  if (Number(root.dataset.announcementSpeed) === 0) return { clones };
  const viewport = root.querySelector('[data-announcement-viewport]');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let destroyed = false;
  let measuredLayout = '';
  const originalSlides = () => [...track.children].filter((slide) => !slide.hasAttribute('data-announcement-clone'));
  const observeMutations = () => mutationObserver.observe(track, {
    attributes: true, childList: true, characterData: true, subtree: true,
  });
  const layoutSignature = () => [
    viewport?.clientWidth || 0,
    getComputedStyle(track).columnGap,
    ...originalSlides().map((slide) => {
      const style = getComputedStyle(slide);
      return [slide.getBoundingClientRect().width, style.marginLeft, style.marginRight].join(',');
    }),
  ].join(':');
  const scrollingAnimation = () => track.getAnimations().find((animation) => animation.animationName?.startsWith('announcement-scroll-'));

  const syncClones = () => {
    if (destroyed) return;
    mutationObserver.disconnect();
    const previousAnimation = scrollingAnimation();
    const previousDuration = Number(previousAnimation?.effect?.getComputedTiming().duration);
    const previousPhase = previousDuration && previousAnimation.currentTime !== null ? Number(previousAnimation.currentTime) / previousDuration : 0;
    clones.forEach((clone) => clone.remove());
    clones.length = 0;
    const originals = originalSlides();
    const slides = originals.filter((slide) => slide.getClientRects().length && slide.getBoundingClientRect().width > 0);
    resizeObserver.disconnect();
    resizeObserver.observe(viewport || track);
    originals.forEach((slide) => resizeObserver.observe(slide));
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    // Include the trailing gap: one cycle ends at the next original sequence.
    const distance = slides.reduce((width, slide) => {
      const style = getComputedStyle(slide);
      return width + slide.getBoundingClientRect().width + (parseFloat(style.marginLeft) || 0) + (parseFloat(style.marginRight) || 0) + gap;
    }, 0);
    measuredLayout = layoutSignature();
    if (!slides.length || distance <= 0 || !viewport?.clientWidth || motion.matches) {
      root.classList.remove('announcement-bar--ready');
      track.style.removeProperty('--announcement-bar-loop-distance');
      track.style.removeProperty('--announcement-bar-duration');
      observeMutations();
      return;
    }

    const copyCount = Math.max(1, Math.ceil((viewport.clientWidth + gap) / distance));
    const fragment = document.createDocumentFragment();
    for (let set = 0; set < copyCount; set += 1) {
      slides.forEach((slide) => {
        const clone = sanitizeEditorAttributes(slide.cloneNode(true));
        disableEntranceAnimation(clone);
        setFocusableState(clone);
        clone.setAttribute('inert', '');
        clone.dataset.announcementClone = 'true';
        fragment.appendChild(clone);
        clones.push(clone);
      });
    }
    track.appendChild(fragment);
    const speed = Math.max(0.1, Math.min(2, Number(root.dataset.announcementSpeed) || 1));
    const duration = distance / (60 * speed);
    track.style.setProperty('--announcement-bar-loop-distance', `${distance}px`);
    track.style.setProperty('--announcement-bar-duration', `${duration}s`);
    root.classList.add('announcement-bar--ready');
    const animation = scrollingAnimation();
    if (animation && previousAnimation) animation.currentTime = previousPhase * duration * 1000;
    observeMutations();
  };

  const scheduleSync = () => {
    if (destroyed || frame) return;
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      syncClones();
    });
  };
  const mutationObserver = new MutationObserver((mutations) => {
    if (mutations.some((mutation) => {
      const element = mutation.target.nodeType === 1 ? mutation.target : mutation.target.parentElement;
      if (element?.closest('[data-announcement-clone]')) return false;
      if (element?.closest('[data-discount-code-status]')) return false;
      if (mutation.type === 'attributes') {
        if (mutation.target === track) return false;
        if (mutation.attributeName.startsWith('data-shopify-editor')) return false;
      }
      return true;
    })) scheduleSync();
  });
  const resizeObserver = new ResizeObserver(() => {
    if (layoutSignature() !== measuredLayout) scheduleSync();
  });
  motion.addEventListener('change', scheduleSync);
  document.fonts?.ready.then(() => {
    if (!destroyed && layoutSignature() !== measuredLayout) scheduleSync();
  });
  syncClones();
  return {
    clones, resizeObserver, mutationObserver,
    destroyScrolling: () => {
      destroyed = true;
      if (frame) window.cancelAnimationFrame(frame);
      motion.removeEventListener('change', scheduleSync);
      track.style.removeProperty('--announcement-bar-loop-distance');
      track.style.removeProperty('--announcement-bar-duration');
    },
  };
};

const init = (root) => {
  if (!(root instanceof HTMLElement) || states.has(root)) return;
  const track = root.querySelector('[data-announcement-track]');
  if (!track) return;
  const slides = Array.from(track.children);
  const sliderState = root.dataset.announcementType === 'slider' ? initSlider(root, slides, track) : { previous: null, next: null, onPrevious: null, onNext: null };
  const scrollingState = root.dataset.announcementType === 'scrolling' ? initScrolling(root, track) : { clones: [], resizeObserver: null, mutationObserver: null };
  const copyState = initCopyInteraction(root);
  root.dataset.announcementInitialized = 'true';
  states.set(root, {
    track,
    ...sliderState,
    ...scrollingState,
    ...copyState,
    sliderResizeObserver: sliderState.resizeObserver,
    scrollingResizeObserver: scrollingState.resizeObserver,
  });
};

const destroy = (root) => {
  const state = states.get(root);
  if (!state) return;
  state.previous?.removeEventListener('click', state.onPrevious);
  state.next?.removeEventListener('click', state.onNext);
  state.onClick && root.removeEventListener('click', state.onClick);
  state.clearCopyTimer?.();
  state.stop?.();
  state.sliderResizeObserver?.disconnect();
  if (state.pauseOnHover) {
    root.removeEventListener('mouseenter', state.pause);
    root.removeEventListener('mouseleave', state.resume);
    root.removeEventListener('focusin', state.pause);
    root.removeEventListener('focusout', state.resume);
  }
  state.destroyScrolling?.();
  state.scrollingResizeObserver?.disconnect();
  state.mutationObserver?.disconnect();
  state.clones?.forEach((clone) => clone.remove());
  state.firstClone?.remove();
  delete root.dataset.announcementInitialized;
  root.classList.remove('announcement-bar--ready', 'announcement-bar--single', 'announcement-bar--slider-moving');
  states.delete(root);
};

const initWithin = (root = document) => {
  if (root.matches?.(selector)) init(root);
  root.querySelectorAll?.(selector).forEach(init);
};
const destroyWithin = (root) => {
  if (root.matches?.(selector)) destroy(root);
  root.querySelectorAll?.(selector).forEach(destroy);
};

document.addEventListener('shopify:section:load', (event) => initWithin(event.target));
document.addEventListener('shopify:section:unload', (event) => destroyWithin(event.target));
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initWithin(), { once: true });
else initWithin();
