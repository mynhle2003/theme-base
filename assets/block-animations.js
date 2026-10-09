/* Entrance effects share one controller per Shopify section, never block layout. */
(() => {
  const key = Symbol.for('theme.blockAnimations');
  if (window[key]) return;
  window[key] = true;
  const boot = window[Symbol.for('theme.blockAnimationsBoot')];
  // A slow/failed asset may already have exposed the initial page. Do not
  // hide that content again; later editor renders still preview normally.
  let skipInitialAnimations = Boolean(boot?.expired);
  if (!skipInitialAnimations) document.documentElement.classList.add('block-animations-enabled');
  const selector = '[data-block-animation]';
  const controllers = new Map();
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const editor = Boolean(window.Shopify?.designMode);
  const enabled = () => !reduced.matches && getComputedStyle(document.documentElement).getPropertyValue('--motion-block-animations').trim() !== '0';
  const types = new Set(['fade', 'scale', 'slide-left', 'slide-right', 'slide-bottom', 'rotate-words']);
  const active = element => {
    if (!element.isConnected || !element.getClientRects().length || element.closest('[hidden], [aria-hidden="true"], [inert]')) return false;
    const slide = element.closest('.slideshow__swiper .swiper-slide');
    return !slide || slide.classList.contains('swiper-slide-active');
  };
  const inView = element => {
    const rect = (element.closest('.slideshow') || element).getBoundingClientRect();
    return rect.bottom > 0 && rect.top < innerHeight && rect.right > 0 && rect.left < innerWidth;
  };
  const splitWords = element => {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.textContent.trim() && !node.parentElement.closest('svg, script, style, .visually-hidden, [aria-hidden="true"], .reveal-word')) texts.push(node);
    }
    texts.forEach(node => {
      const fragment = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).filter(Boolean).forEach(part => {
        if (/^\s+$/.test(part)) fragment.append(document.createTextNode(part));
        else {
          const word = document.createElement('span');
          word.className = 'reveal-word';
          const text = document.createElement('span');
          text.className = 'reveal-word__text';
          text.textContent = part;
          word.append(text);
          fragment.append(word);
        }
      });
      node.replaceWith(fragment);
    });
  };
  const createController = root => {
    const nodes = new Map();
    const events = new AbortController();
    const stop = state => {
      if (state.refreshTimer != null) clearTimeout(state.refreshTimer);
      state.refreshTimer = null;
      state.animations.forEach(animation => animation.cancel()); state.animations = [];
      state.element.classList.remove('reveal-words-ready');
      state.element.classList.remove('reveal-words-animated');
    };
    const reveal = (element, immediate = false) => {
      const state = nodes.get(element);
      if (!state || state.played || (!immediate && !active(element))) return;
      if (state.refreshTimer != null) {
        if (!immediate) return;
        clearTimeout(state.refreshTimer); state.refreshTimer = null;
      }
      state.played = true;
      element.dataset.animationInitialized = 'true';
      element.classList.remove('reveal-pending');
      if (immediate || !enabled() || typeof element.animate !== 'function') return;
      const delay = Math.round(Math.max(0, Math.min(2000, Number(element.dataset.animationDelay) || 0)) / 50) * 50;
      const options = { duration: 500, delay, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', fill: 'backwards' };
      const from = { opacity: 0 };
      const transforms = { scale: 'scale(0.5)', 'slide-left': 'translateX(-20px)', 'slide-right': 'translateX(20px)', 'slide-bottom': 'translateY(20px)' };
      const endTransforms = { scale: 'scale(1)', 'slide-left': 'translateX(0)', 'slide-right': 'translateX(0)', 'slide-bottom': 'translateY(0)' };
      if (transforms[state.type]) from.transform = transforms[state.type];
      try {
        if (state.type === 'rotate-words') {
          element.style.setProperty('--block-animation-delay', `${delay}ms`);
          element.classList.add('reveal-words-ready');
          // Commit the reset state so the same CSS animation can replay.
          void element.offsetWidth;
          element.classList.add('reveal-words-animated');
        } else {
          const to = { opacity: 1 };
          if (endTransforms[state.type]) to.transform = endTransforms[state.type];
          state.animations.push(element.animate([from, to], options));
        }
        // Release compositing after completion so backdrop blur and hover transforms work.
        state.animations.forEach(animation => animation.finished.then(() => animation.cancel()).catch(() => {}));
      } catch { stop(state); }
    };
    const refresh = element => {
      const state = nodes.get(element);
      if (!state) return;
      stop(state); state.played = false;
      if (!enabled()) { reveal(element, true); return; }
      element.classList.add('reveal-pending');
      if (!active(element)) return;
      if (!editor) { reveal(element); return; }
      // Let the editor finish its settings render before restarting the effect.
      // A subsequent Type/Delay change cancels this pending refresh.
      state.refreshTimer = setTimeout(() => {
        state.refreshTimer = null;
        reveal(element);
      }, 20);
    };
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target); });
    }, { threshold: 0.05 }) : null;
    const remove = element => {
      const state = nodes.get(element);
      if (state) {
        stop(state);
        element.dataset.animationInitialized = 'true';
      }
      observer?.unobserve(element);
      nodes.delete(element);
      element.classList.remove('reveal-pending');
    };
    const scan = () => {
      nodes.forEach((state, element) => { if (!root.contains(element) || !element.matches(selector)) remove(element); });
      root.querySelectorAll(selector).forEach(element => {
        const type = element.dataset.blockAnimation;
        if (!types.has(type) || element.closest('.announcement-bar, .marquee, [data-multi-image]')) { remove(element); return; }
        const configuration = `${type}:${element.dataset.animationDelay}`;
        if (nodes.get(element)?.configuration === configuration) return;
        remove(element);
        if (type === 'rotate-words') splitWords(element);
        nodes.set(element, { element, type, configuration, played: false, animations: [], refreshTimer: null });
        if (skipInitialAnimations || !enabled() || !observer || typeof element.animate !== 'function' || element.contains(document.activeElement)) { reveal(element, true); return; }
        element.classList.add('reveal-pending');
        element.dataset.animationInitialized = 'true';
        observer.observe(element);
        if (active(element) && inView(element)) {
          if (editor) refresh(element);
          else reveal(element);
        }
      });
    };
    const mutations = new MutationObserver(records => {
      if (records.some(record => record.type === 'childList' || ['data-block-animation', 'data-animation-delay'].includes(record.attributeName))) scan();
      records.forEach(record => {
        if (record.type !== 'attributes' || !record.target.matches('[role="tabpanel"], .slideshow__swiper .swiper-slide')) return;
        nodes.forEach((state, element) => {
          if (!record.target.contains(element)) return;
          if (!active(element)) {
            stop(state); state.played = false;
            element.classList.toggle('reveal-pending', enabled());
          } else if (inView(element)) reveal(element);
        });
      });
    });
    const previewSelection = event => {
      nodes.forEach((state, element) => {
        if (!event.target.contains(element) && !element.contains(event.target)) return;
        // The editor reselects the block after a settings render. Preview its
        // chosen effect instead of cancelling it and marking it as played.
        refresh(element);
      });
    };
    const options = { signal: events.signal };
    root.addEventListener('shopify:block:select', previewSelection, options);
    root.addEventListener('shopify:section:select', previewSelection, options);
    root.addEventListener('focusin', event => {
      nodes.forEach((state, element) => {
        if (element.contains(event.target)) { stop(state); state.played = false; reveal(element, true); }
      });
    }, options);
    reduced.addEventListener('change', () => nodes.forEach((state, element) => {
      stop(state); state.played = false; reveal(element, true);
    }), options);
    scan();
    mutations.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden', 'aria-hidden', 'inert', 'class', 'data-block-animation', 'data-animation-delay'] });
    return { destroy() { events.abort(); mutations.disconnect(); observer?.disconnect(); nodes.forEach((state, element) => remove(element)); } };
  };
  const initialize = root => {
    if (controllers.has(root)) return;
    controllers.set(root, createController(root));
  };
  document.querySelectorAll('.shopify-section').forEach(initialize);
  skipInitialAnimations = false;
  document.documentElement.classList.add('block-animations-enabled');
  if (boot) clearTimeout(boot.timer);
  document.addEventListener('shopify:section:load', event => {
    if (!event.target.matches?.('.shopify-section')) return;
    controllers.get(event.target)?.destroy();
    controllers.delete(event.target);
    initialize(event.target);
  });
  document.addEventListener('shopify:section:unload', event => {
    controllers.get(event.target)?.destroy();
    controllers.delete(event.target);
  });
})();
