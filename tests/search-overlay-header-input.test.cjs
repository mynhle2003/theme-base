const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('sections/search-overlay.liquid', 'utf8').split('{% javascript %}')[1].split('{% endjavascript %}')[0];
function fixture({ category = '', dataset = {}, resourceResults = {} } = {}) {
  const requests = [];
  const handlers = {}, timers = new Map(), attrs = () => ({});
  let timerId = 0;
  function element() {
    const node = new EventTarget();
    node.style = { setProperty() {} }; node.dataset = {}; node.attrs = attrs(); node.value = ''; node.hidden = false;
    node.setAttribute = (key, value) => { node.attrs[key] = value; };
    node.getAttribute = key => node.attrs[key];
    node.focus = () => { node.focused = true; };
    const classes = new Set();
    node.classList = { add: name => classes.add(name), remove: name => classes.delete(name), contains: name => classes.has(name), toggle(name, force) { force ? classes.add(name) : classes.delete(name); } };
    node.querySelectorAll = () => [];
    node.closest = () => null;
    return node;
  }
  const overlay = element(), input = element(), form = element(), results = element(), close = element(), backdrop = element(), header = element();
  const nodes = { '[data-search-overlay-input]': input, '[data-search-overlay-form]': form, '[data-search-overlay-results]': results, '[data-search-overlay-close]': close, '[data-search-overlay-backdrop]': backdrop };
  Object.assign(overlay.dataset, dataset);
  overlay.querySelector = selector => nodes[selector];
  overlay.matches = selector => selector === '[data-search-overlay]';
  overlay.hasAttribute = key => key === 'hidden' && overlay.hidden;
  let opened = false;
  const presentation = { calls: [], isOpen: () => opened, open(options) { opened = true; this.calls.push(options); }, close() { opened = false; overlay.dispatchEvent(new Event('close')); }, destroy() {} };
  header.matches = selector => selector.includes('[data-header-search-form]');
  header.closest = selector => selector.includes('[data-header-search-form]') ? header : null;
  header.form = { querySelector: () => ({ value: category }) };
  const document = { activeElement: header, documentElement: { lang: 'en' }, querySelector: selector => selector === '[data-search-overlay]' ? overlay : null, addEventListener(name, fn) { (handlers[name] ||= []).push(fn); }, dispatchEvent() {} };
  const window = { ThemeOverlay: { get: () => presentation }, addEventListener() {}, clearTimeout(id) { timers.delete(id); }, setTimeout(fn) { timers.set(++timerId, fn); return timerId; } };
  vm.runInNewContext(source, { window, document, Event, CustomEvent: class {}, AbortController, URLSearchParams, Intl, fetch: async url => { requests.push(url); return { ok: true, json: async () => ({ resources: { results: resourceResults } }) }; } });
  return { overlay, input, header, results, presentation, requests, async runRequest() { for (const fn of timers.values()) await fn(); timers.clear(); }, emit(name, target) { for (const fn of handlers[name] || []) fn({ target, preventDefault() {} }); } };
}
test('typing keeps focus in Header and hides the overlay input while predictive panel opens', () => {
  const f = fixture(); f.header.value = 'chair'; f.emit('input', f.header);
  assert.equal(f.presentation.isOpen(), true);
  assert.equal(f.presentation.calls[0].focus, false);
  assert.equal(f.input.hidden, true);
  assert.equal(f.input.focused, undefined);
  assert.equal(f.input.value, 'chair');
  assert.equal(f.overlay.classList.contains('search-overlay--inline-header'), true);
  assert.equal(f.overlay.attrs['aria-modal'], 'false');
});
test('clearing Header closes results and resets expanded state', () => {
  const f = fixture(); f.header.value = 'chair'; f.emit('input', f.header);
  f.header.value = ''; f.emit('input', f.header);
  assert.equal(f.presentation.isOpen(), false);
  assert.equal(f.header.attrs['aria-expanded'], 'false');
});
test('explicit icon search restores the overlay editor and focus', () => {
  const f = fixture(); f.header.value = 'chair'; f.emit('input', f.header);
  const trigger = { matches: () => false, closest: () => trigger };
  f.emit('click', trigger);
  assert.equal(f.input.hidden, false);
  assert.equal(f.input.focused, true);
  assert.equal(f.overlay.classList.contains('search-overlay--inline-header'), false);
  assert.equal(f.overlay.attrs['aria-modal'], 'true');
});

test('search type options still control predictive request resources', async () => {
  const f = fixture({ dataset: { showProducts: 'false', showCollections: 'false', showBlogPosts: 'false', showPages: 'false' } });
  f.header.value = 'chair'; f.emit('input', f.header); await f.runRequest();
  const params = new URLSearchParams(f.requests[0].split('?')[1]);
  assert.equal(params.get('resources[type]'), 'query');
});
test('View all keeps the configured shared button variant', async () => {
  const f = fixture({ dataset: { viewAllStyle: 'secondary', searchUrl: '/search' }, resourceResults: { products: Array.from({ length: 5 }, (_, index) => ({ title: `Chair ${index}`, url: '/products/chair', price: 100 })) } });
  f.header.value = 'chair'; f.emit('input', f.header); await f.runRequest();
  assert.match(f.results.innerHTML, /btn--secondary/);
});
test('closing results preserves the Header query and collapses its expanded state', () => {
  const f = fixture(); f.header.value = 'chair'; f.emit('input', f.header);
  f.presentation.close();
  assert.equal(f.header.value, 'chair');
  assert.equal(f.header.attrs['aria-expanded'], 'false');
  assert.equal(f.input.value, '');
});
test('standalone overlay retains its configured placeholder', () => {
  const f = fixture({ dataset: { placeholder: 'Find furniture' } });
  assert.equal(f.input.attrs.placeholder, 'Find furniture');
});
