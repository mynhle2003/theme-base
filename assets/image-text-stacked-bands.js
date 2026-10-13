(() => {
  const selector = '[data-images-with-text-scroll]';
  const states = new WeakMap();

  const destroy = (root) => {
    const state = states.get(root);
    if (!state) return;
    state.resizeObserver?.disconnect();
    state.headerObserver?.disconnect();
    window.removeEventListener('resize', state.schedule);
    window.visualViewport?.removeEventListener('resize', state.schedule);
    if (state.frame) cancelAnimationFrame(state.frame);
    state.bands.forEach((band) => band.style.removeProperty('--band-sticky-top'));
    root.removeAttribute('data-editor-selection');
    states.delete(root);
  };

  const init = (root) => {
    destroy(root);
    const bands = Array.from(root.children).filter((child) => child.matches('[data-stacked-band]'));
    if (!bands.length) return;
    const state = { bands, frame: 0 };
    const measure = () => {
      state.frame = 0;
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-sticky-height')) || 0;
      const geometry = bands.map((band) => {
        const layout = band.querySelector('[data-stacked-band-layout]');
        const style = getComputedStyle(band);
        const layoutHeight = layout?.getBoundingClientRect().height || 0;
        const paddingTop = parseFloat(style.paddingTop) || 0;
        const paddingBottom = parseFloat(style.paddingBottom) || 0;
        const centeredTop = headerHeight + Math.max(0, (viewportHeight - headerHeight - layoutHeight) / 2);
        const visibleBottomTop = viewportHeight - layoutHeight - paddingBottom;
        return { band, top: Math.min(centeredTop, visibleBottomTop) - paddingTop };
      });
      geometry.forEach(({ band, top }) => band.style.setProperty('--band-sticky-top', `${Math.round(top)}px`));
    };
    const schedule = () => {
      if (!state.frame) state.frame = requestAnimationFrame(measure);
    };
    state.schedule = schedule;
    if ('ResizeObserver' in window) {
      state.resizeObserver = new ResizeObserver(schedule);
      bands.forEach((band) => state.resizeObserver.observe(band));
      document.querySelectorAll('.section-header').forEach((header) => state.resizeObserver.observe(header));
    }
    state.headerObserver = new MutationObserver(schedule);
    state.headerObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
    window.addEventListener('resize', schedule, { passive: true });
    window.visualViewport?.addEventListener('resize', schedule, { passive: true });
    states.set(root, state);
    schedule();
  };

  const within = (target, action) => {
    if (target.matches?.(selector)) action(target);
    target.querySelectorAll?.(selector).forEach(action);
  };
  const selection = (event, selected) => {
    const root = event.target.closest?.(selector) || event.target.querySelector?.(selector);
    if (root) root.toggleAttribute('data-editor-selection', selected);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => within(document, init), { once: true });
  else within(document, init);
  document.addEventListener('shopify:section:load', (event) => within(event.target, init));
  document.addEventListener('shopify:section:unload', (event) => within(event.target, destroy));
  document.addEventListener('shopify:section:reorder', (event) => within(event.target, init));
  document.addEventListener('shopify:section:select', (event) => selection(event, true));
  document.addEventListener('shopify:section:deselect', (event) => selection(event, false));
  document.addEventListener('shopify:block:select', (event) => selection(event, true));
  document.addEventListener('shopify:block:deselect', (event) => selection(event, false));
})();
