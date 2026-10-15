const instances = new WeakMap();
const listSelector = '[data-product-list], [data-collection-tab-panel]';

const clearDetachedSlideState = (item) => {
  item.classList.remove('swiper-slide', 'swiper-slide-active', 'swiper-slide-next', 'swiper-slide-prev', 'swiper-slide-visible', 'swiper-slide-fully-visible');
  item.removeAttribute('role');
  item.removeAttribute('aria-label');
  item.removeAttribute('aria-roledescription');
  item.style.width = '';
  item.style.marginRight = '';
  item.style.marginLeft = '';
};

const initialize = (list) => {
  if (instances.has(list)) return;
  const host = list.querySelector('[data-product-list-mobile-promos]');
  const cards = [...list.querySelectorAll('[data-product-list-promo-item]')]
    .filter((item) => item.closest(listSelector) === list);
  if (!host || !cards.length) return;

  const entries = cards.map((item) => {
    const anchor = document.createComment('promo-card-position');
    item.before(anchor);
    return { item, anchor, slide: item.classList.contains('swiper-slide') };
  });
  const isCollectionTab = list.matches('[data-collection-tab-panel]');
  const query = window.matchMedia('(max-width: 767.98px)');
  let resetFrame = null;
  const update = () => {
    const carousel = list.querySelector('[data-product-carousel]');
    const swiper = carousel?.swiper;
    const activeItem = swiper?.slides?.[swiper.activeIndex];
    const detached = [];
    entries.forEach(({ item, anchor, slide }) => {
      const onTop = query.matches
        ? item.querySelector('[data-promo-mobile-top="true"]')
        : isCollectionTab && item.querySelector('[data-promo-desktop-top="true"]');
      if (onTop) {
        clearDetachedSlideState(item);
        detached.push(item);
        host.append(item);
      } else {
        item.classList.toggle('swiper-slide', slide);
        anchor.after(item);
      }
    });
    if (isCollectionTab) {
      list.dataset.promoDesktopDetached = String(!query.matches && host.children.length > 0);
    }
    if (swiper && !swiper.destroyed) {
      swiper.update();
      const index = [...swiper.slides].indexOf(activeItem);
      swiper.slideTo(Math.max(0, index), 0);
    }
    // The first update can still touch the old cached Swiper slide array.
    detached.forEach(clearDetachedSlideState);
    if (resetFrame !== null) window.cancelAnimationFrame(resetFrame);
    // Swiper A11y may label its initial slide snapshot on the next tick.
    resetFrame = window.requestAnimationFrame(() => {
      resetFrame = null;
      if (instances.has(list)) detached.forEach(clearDetachedSlideState);
    });
  };
  const select = (event) => {
    const item = event.target.closest?.('[data-product-list-promo-item]');
    if (!item || !list.contains(item)) return;
    const carousel = list.querySelector('[data-product-carousel]');
    const swiper = carousel?.swiper;
    if (host.contains(item)) item.scrollIntoView({ block: 'nearest' });
    else if (swiper && !swiper.destroyed) {
      const index = [...swiper.slides].indexOf(item);
      if (index < 0) return;
      // Selecting a visible card must not make its configured slot look like slot 1.
      const bounds = carousel.getBoundingClientRect();
      const cardBounds = item.getBoundingClientRect();
      if (cardBounds.left >= bounds.left - 1 && cardBounds.right <= bounds.right + 1) return;
      const visibleCount = Math.max(1, Math.floor(Number(swiper.params.slidesPerView) || 1));
      const target = index < swiper.activeIndex ? index : Math.max(0, index - visibleCount + 1);
      swiper.slideTo(target, 0);
    }
  };
  query.addEventListener('change', update);
  list.addEventListener('shopify:block:select', select);
  instances.set(list, { entries, query, update, select, cancelReset: () => {
    if (resetFrame !== null) window.cancelAnimationFrame(resetFrame);
  } });
  update();
};

export const initializeThemeModule = (root = document) => {
  if (root.matches?.(listSelector)) initialize(root);
  root.querySelectorAll?.(listSelector).forEach(initialize);
};

const destroy = (list) => {
  const state = instances.get(list);
  if (!state) return;
  state.cancelReset();
  delete list.dataset.promoDesktopDetached;
  state.query.removeEventListener('change', state.update);
  list.removeEventListener('shopify:block:select', state.select);
  state.entries.forEach(({ item, anchor, slide }) => {
    item.classList.toggle('swiper-slide', slide);
    anchor.after(item);
    anchor.remove();
  });
  instances.delete(list);
};

document.addEventListener('shopify:section:load', (event) => initializeThemeModule(event.target));
document.addEventListener('shopify:section:unload', (event) => {
  if (event.target.matches?.(listSelector)) destroy(event.target);
  event.target.querySelectorAll?.(listSelector).forEach(destroy);
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initializeThemeModule(), { once: true });
} else initializeThemeModule();
