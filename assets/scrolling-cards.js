const runtimeKey = Symbol.for('theme.scrollingCards');
const runtime = window[runtimeKey] ||= (() => {
  const states = new WeakMap();
  const selector = '[data-scrolling-cards]';
  const mobileQuery = window.matchMedia('(max-width: 767.98px)');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

  const isMobileStickyDisabled = (root) => mobileQuery.matches && root.dataset.stickyMobile !== 'true';

  const resetEffects = (cards) => {
    cards.forEach((card) => {
      card.style.removeProperty('transform');
      card.style.removeProperty('opacity');
    });
  };

  const destroy = (root) => {
    const state = states.get(root);
    if (!state) return;

    window.removeEventListener('scroll', state.schedule);
    window.removeEventListener('resize', state.schedule);
    mobileQuery.removeEventListener('change', state.schedule);
    reducedMotionQuery.removeEventListener('change', state.schedule);
    if (state.frame) window.cancelAnimationFrame(state.frame);
    state.resizeObserver?.disconnect();
    resetEffects(state.cards);
    state.cards.forEach((card) => card.style.removeProperty('--scrolling-card-sticky-top'));
    states.delete(root);
  };

  const init = (root) => {
    if (!(root instanceof HTMLElement)) return;
    destroy(root);

    const cards = Array.from(root.querySelectorAll(':scope > .scrolling-cards__items > .scrolling-card'));
    if (!cards.length) return;

    const state = {
      cards,
      frame: 0,
      resizeObserver: null,
      schedule: null
    };

    const update = () => {
      state.frame = 0;

      const stickyTops = cards.map((card) => (window.innerHeight - card.offsetHeight) / 2);
      cards.forEach((card, index) => {
        card.style.setProperty('--scrolling-card-sticky-top', stickyTops[index] + 'px');
      });

      if (isMobileStickyDisabled(root) || reducedMotionQuery.matches) {
        resetEffects(cards);
        return;
      }

      const rootBounds = root.getBoundingClientRect();
      const stickyTop = Math.min(...stickyTops);
      const sectionIsOutsideViewport = rootBounds.bottom <= stickyTop || rootBounds.top >= window.innerHeight;
      if (sectionIsOutsideViewport) {
        resetEffects(cards);
        return;
      }

      let activeIndex = 0;
      cards.forEach((card, index) => {
        if (card.getBoundingClientRect().top <= stickyTops[index] + 1) activeIndex = index;
      });

      const activeCard = cards[activeIndex];
      const nextCard = cards[activeIndex + 1];
      const activeCardHeight = Math.max(activeCard?.offsetHeight || 1, 1);
      const nextCardTop = nextCard?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const transitionStart = stickyTops[activeIndex] + activeCardHeight;
      const transitionDistance = Math.max(transitionStart - (stickyTops[activeIndex + 1] ?? 0), 1);
      const transitionProgress = nextCard
        ? clamp((transitionStart - nextCardTop) / transitionDistance)
        : 0;

      if (root.dataset.stackEffect === 'fade') {
        cards.forEach((card, index) => {
          card.style.removeProperty('transform');
          if (index < activeIndex) {
            card.style.opacity = '0';
          } else if (index === activeIndex) {
            card.style.opacity = String(1 - transitionProgress);
          } else if (index === activeIndex + 1 && nextCard) {
            card.style.opacity = String(transitionProgress);
          } else {
            card.style.removeProperty('opacity');
          }
        });
        return;
      }

      cards.forEach((card, index) => {
        card.style.removeProperty('opacity');
        let scale = 1;
        if (index < activeIndex) {
          scale = 1 - Math.min((activeIndex - index) * 0.1, 0.3);
        } else if (index === activeIndex) {
          scale = 1 - transitionProgress * 0.1;
        }
        card.style.transform = 'translateZ(0) scale(' + scale.toFixed(3) + ')';
      });
    };

    state.schedule = () => {
      if (state.frame) return;
      state.frame = window.requestAnimationFrame(update);
    };

    states.set(root, state);
    if (typeof ResizeObserver !== 'undefined') {
      state.resizeObserver = new ResizeObserver(state.schedule);
      cards.forEach((card) => state.resizeObserver.observe(card));
    }
    window.addEventListener('scroll', state.schedule, { passive: true });
    window.addEventListener('resize', state.schedule, { passive: true });
    mobileQuery.addEventListener('change', state.schedule);
    reducedMotionQuery.addEventListener('change', state.schedule);
    state.schedule();
  };

  const initWithin = (root = document) => {
    if (root.matches?.(selector)) init(root);
    root.querySelectorAll?.(selector).forEach(init);
  };

  const destroyWithin = (root) => {
    if (root.matches?.(selector)) destroy(root);
    root.querySelectorAll?.(selector).forEach(destroy);
  };

  const initialize = () => initWithin();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }

  document.addEventListener('shopify:section:load', (event) => initWithin(event.target));
  document.addEventListener('shopify:section:unload', (event) => destroyWithin(event.target));
  document.addEventListener('shopify:section:select', (event) => initWithin(event.target));
  document.addEventListener('shopify:block:select', (event) => {
    const root = event.target.closest?.(selector);
    if (root) init(root);
  });

  return { initialize: initWithin };
})();

export function initializeThemeModule(root = document) {
  runtime.initialize(root);
}
