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
  let transitionTimer = 0;
  let resetFrame = 0;
  let sizeFrame = 0;
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
    return clone;
  };
  const syncSize = () => {
    const activeSlide = slides[activeIndex];
    if (!activeSlide) return;
    // Insert all measurement copies before reading layout once for the batch.
    const measurements = slides.map(measureSlideHeight);
    const fragment = document.createDocumentFragment();
    measurements.forEach((clone) => fragment.append(clone));
    track.append(fragment);
    const nextHeight = Math.max(...measurements.map((clone) => clone.scrollHeight || clone.offsetHeight), 0);
    measurements.forEach((clone) => clone.remove());
    if (nextHeight !== slideHeight) {
      slideHeight = nextHeight;
      root.style.setProperty('--announcement-slider-height', `${slideHeight}px`);
    }
    track.style.setProperty('--announcement-slider-offset', `${visualIndex * slideHeight}px`);
  };
  const scheduleSize = () => {
    if (sizeFrame) return;
    sizeFrame = window.requestAnimationFrame(() => {
      sizeFrame = 0;
      syncSize();
    });
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
    track.style.setProperty('--announcement-slider-offset', `${visualIndex * slideHeight}px`);
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
    transitionTimer = window.setTimeout(() => {
      transitionTimer = 0;
      if (isLoop) {
        track.classList.add('announcement-bar--slider-reset');
        visualIndex = 0;
        track.style.setProperty('--announcement-slider-offset', '0px');
        nextSlide.dataset.announcementActive = 'false';
        nextSlide.setAttribute('aria-hidden', 'true');
        resetFrame = window.requestAnimationFrame(() => {
          resetFrame = 0;
          track.classList.remove('announcement-bar--slider-reset');
        });
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
    if (event.type === 'focusout') isFocused = root.contains(event.relatedTarget);
    restart();
  };
  const resizeObserver = new ResizeObserver(scheduleSize);
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
  syncSize();
  restart();
  const cancelPending = () => {
    window.clearTimeout(transitionTimer);
    window.cancelAnimationFrame(resetFrame);
    window.cancelAnimationFrame(sizeFrame);
    track.classList.remove('announcement-bar--slider-reset');
  };
  return { cancelPending, previous, next, onPrevious, onNext, stop, pause, resume, pauseOnHover, resizeObserver, firstClone };
};

const initScrolling = (root, track) => {
  if (Number(root.dataset.announcementSpeed) === 0 || reducedMotion()) return { clones: [], resizeObserver: null, mutationObserver: null };
  const viewport = root.querySelector('[data-announcement-viewport]');
  let clones = [];
  let isSyncing = false;
  let mutationObserver;
  let syncFrame = 0;

  const syncClones = () => {
    if (isSyncing) return;
    isSyncing = true;
    mutationObserver?.disconnect();
    clones.forEach((clone) => clone.remove());
    const originalSlides = [...track.children].filter((slide) => !slide.hasAttribute('data-announcement-clone'));
    clones.length = 0;
    if (originalSlides.length === 0) {
      isSyncing = false;
      return;
    }

    const appendCloneSet = () => {
      const fragment = document.createDocumentFragment();
      originalSlides.forEach((slide) => {
        const clone = sanitizeEditorAttributes(slide.cloneNode(true));
        disableEntranceAnimation(clone);
        setFocusableState(clone);
        clone.dataset.announcementClone = 'true';
        clone.inert = true;
        fragment.append(clone);
        clones.push(clone);
      });
      return fragment;
    };

    track.append(appendCloneSet());
    const firstClone = clones[0];
    const loopDistance = firstClone.getBoundingClientRect().left - track.getBoundingClientRect().left;
    // Each extra set adds one loop distance; calculate before inserting.
    const extraSets = loopDistance > 0
      ? Math.min(99, Math.max(0, Math.ceil(((viewport?.clientWidth || 0) + loopDistance - track.scrollWidth) / loopDistance)))
      : 0;
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < extraSets; index += 1) fragment.append(appendCloneSet());
    track.append(fragment);
    track.style.setProperty('--announcement-bar-loop-distance', `${loopDistance}px`);
    root.classList.add('announcement-bar--ready');
    mutationObserver?.observe(track, { attributes: true, childList: true, subtree: true });
    isSyncing = false;
  };

  const scheduleSync = () => {
    if (syncFrame) return;
    syncFrame = window.requestAnimationFrame(() => {
      syncFrame = 0;
      syncClones();
    });
  };
  mutationObserver = new MutationObserver((mutations) => {
    if (mutations.some((mutation) => {
      if (mutation.type === 'attributes' && (mutation.attributeName === 'class' || mutation.attributeName === 'style')) return false;
      if (mutation.type === 'attributes' && mutation.attributeName.startsWith('data-shopify-editor')) return false;
      return !mutation.target.closest?.('[data-announcement-clone]');
    })) scheduleSync();
  });

  const resizeObserver = new ResizeObserver(scheduleSync);
  resizeObserver.observe(viewport || track);
  syncClones();
  return { clones, resizeObserver, mutationObserver, cancelSync: () => window.cancelAnimationFrame(syncFrame) };
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
  state.cancelPending?.();
  state.cancelSync?.();
  state.sliderResizeObserver?.disconnect();
  if (state.pauseOnHover) {
    root.removeEventListener('mouseenter', state.pause);
    root.removeEventListener('mouseleave', state.resume);
    root.removeEventListener('focusin', state.pause);
    root.removeEventListener('focusout', state.resume);
  }
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
