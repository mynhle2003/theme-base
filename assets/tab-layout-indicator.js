const selector = '.tab-layout--sliding_line[data-tab-layout]';
const instances = new WeakMap();

const initialize = (layout) => {
  if (instances.has(layout)) return;
  const navigation = layout.querySelector('[data-tab-navigation]');
  if (!navigation) return;
  const controller = new AbortController();
  let hovered = null;
  let focused = null;
  let frame = 0;
  let alive = true;
  const render = () => {
    frame = 0;
    if (!alive) return;
    const selected = navigation.querySelector('[aria-selected="true"]');
    const target = [hovered, focused, selected].find(node => node && navigation.contains(node));
    const vertical = getComputedStyle(navigation).flexDirection === 'column';
    navigation.setAttribute('aria-orientation', vertical ? 'vertical' : 'horizontal');
    if (!target || navigation.hidden || !target.getClientRects().length) {
      delete navigation.dataset.indicatorReady;
      return;
    }
    const track = navigation.getBoundingClientRect();
    const tab = target.getBoundingClientRect();
    const x = vertical ? 0 : tab.left - track.left - navigation.clientLeft + navigation.scrollLeft;
    const y = vertical ? tab.top - track.top - navigation.clientTop + navigation.scrollTop : navigation.clientHeight - 2;
    navigation.style.setProperty('--tab-indicator-x', `${x}px`);
    navigation.style.setProperty('--tab-indicator-y', `${y}px`);
    navigation.style.setProperty('--tab-indicator-width', `${vertical ? 2 : tab.width}px`);
    navigation.style.setProperty('--tab-indicator-height', `${vertical ? tab.height : 2}px`);
    navigation.dataset.indicatorReady = 'true';
  };
  const schedule = () => {
    if (alive && !frame) frame = requestAnimationFrame(render);
  };
  const trigger = (event) => {
    const node = event.target instanceof Element ? event.target.closest('[data-collection-tab-trigger]') : null;
    return node && navigation.contains(node) ? node : null;
  };
  navigation.addEventListener('pointerover', event => {
    if (event.pointerType === 'touch') return;
    hovered = trigger(event);
    schedule();
  }, {signal: controller.signal});
  navigation.addEventListener('pointerleave', () => { hovered = null; schedule(); }, {signal: controller.signal});
  navigation.addEventListener('focusin', event => { focused = trigger(event); schedule(); }, {signal: controller.signal});
  navigation.addEventListener('focusout', event => {
    focused = event.relatedTarget instanceof Element ? event.relatedTarget.closest('[data-collection-tab-trigger]') : null;
    schedule();
  }, {signal: controller.signal});
  // Horizontal sections expose an actual vertical tablist on desktop.
  navigation.addEventListener('keydown', event => {
    if (!['ArrowUp', 'ArrowDown'].includes(event.key) || getComputedStyle(navigation).flexDirection !== 'column') return;
    const current = trigger(event);
    if (!current) return;
    event.preventDefault();
    const tabs = Array.from(navigation.querySelectorAll('[data-collection-tab-trigger]'));
    const index = (tabs.indexOf(current) + (event.key === 'ArrowDown' ? 1 : -1) + tabs.length) % tabs.length;
    tabs[index]?.focus();
    tabs[index]?.click();
  }, {signal: controller.signal});
  const observer = new MutationObserver(schedule);
  observer.observe(navigation, {childList: true, subtree: true, attributes: true, attributeFilter: ['aria-selected', 'hidden']});
  const resize = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(schedule);
  resize?.observe(navigation);
  resize?.observe(layout);
  window.addEventListener('resize', schedule, {signal: controller.signal});
  document.fonts?.ready.then(schedule);
  instances.set(layout, () => {
    alive = false;
    controller.abort();
    observer.disconnect();
    resize?.disconnect();
    cancelAnimationFrame(frame);
    delete navigation.dataset.indicatorReady;
    navigation.removeAttribute('aria-orientation');
    instances.delete(layout);
  });
  schedule();
};
const visit = (root, callback) => {
  if (root.matches?.(selector)) callback(root);
  root.querySelectorAll?.(selector).forEach(callback);
};
document.addEventListener('shopify:section:load', event => visit(event.target, initialize));
document.addEventListener('shopify:section:unload', event => visit(event.target, layout => instances.get(layout)?.()));
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => visit(document, initialize), {once: true});
else visit(document, initialize);
