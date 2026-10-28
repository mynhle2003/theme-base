const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

// Exercise the actual relocation module with a small DOM supporting node moves.
function fixture({desktop = true, mobile = true, tab = true, small = false} = {}) {
  class Element {
    constructor(kind, flags = {}) { this.kind = kind; this.flags = flags; this.children = []; this.dataset = {}; this.style = {}; this.classes = new Set(); this.listeners = new Map();
      this.classList = {contains: x => this.classes.has(x), remove: (...names) => names.forEach(x => this.classes.delete(x)), toggle: (x, on) => on ? this.classes.add(x) : this.classes.delete(x)};
    }
    append(node) { node.remove(); this.children.push(node); node.parent = this; }
    remove() { if (this.parent) this.parent.children.splice(this.parent.children.indexOf(this), 1); this.parent = null; }
    before(node) { node.remove(); const parent = this.parent; parent.children.splice(parent.children.indexOf(this), 0, node); node.parent = parent; }
    after(node) { node.remove(); const parent = this.parent; parent.children.splice(parent.children.indexOf(this) + 1, 0, node); node.parent = parent; }
    matches(selector) { return this.kind === 'list' && (selector.includes(',') || (tab && selector === '[data-collection-tab-panel]')); }
    closest() { let n = this; while (n && n.kind !== 'list') n = n.parent; return n; }
    querySelector(selector) {
      if (this.kind === 'list' && selector === '[data-product-list-mobile-promos]') return host;
      if (this.kind === 'list' && selector === '[data-product-carousel]') return carousel;
      if (this.kind === 'item' && selector === '[data-promo-desktop-top="true"]') return desktop ? this : null;
      if (this.kind === 'item' && selector === '[data-promo-mobile-top="true"]') return mobile ? this : null;
      return null;
    }
    querySelectorAll() { return this.kind === 'list' ? [item] : []; }
    removeAttribute(name) { delete this.flags[name]; }
    addEventListener(name, fn) { this.listeners.set(name, fn); }
    removeEventListener(name) { this.listeners.delete(name); }
  }
  const list = new Element('list'), host = new Element('host'), track = new Element('track'), item = new Element('item'), product = new Element('product');
  list.append(host); list.append(track); track.append(item); track.append(product); item.classes.add('swiper-slide'); item.classes.add('swiper-slide-active'); item.flags['aria-label'] = '1 / 7';
  let updates = 0;
  const carousel = {swiper: {slides: [item, product], activeIndex: 1, params: {slidesPerView: 3}, update() { updates++; }, slideTo(index) { this.activeIndex = index; }}};
  const query = {matches: small, addEventListener(name, fn) { this.change = fn; }, removeEventListener() { this.change = null; }};
  const events = {};
  const document = {readyState: 'loading', createComment: () => new Element('anchor'), addEventListener(name, fn) { events[name] = fn; }};
  const frames = new Map(); let frameID = 0;
  const context = vm.createContext({document, window: {matchMedia: () => query, requestAnimationFrame: fn => { frames.set(++frameID, fn); return frameID; }, cancelAnimationFrame: id => frames.delete(id)}});
  const source = fs.readFileSync('assets/product-list-promos.js', 'utf8').replace('export const initializeThemeModule', 'const initializeThemeModule');
  vm.runInContext(source + '\nthis.init = initializeThemeModule;', context);
  context.init(list);
  return {list, host, track, item, product, query, context, events, updates: () => updates, frames, flushFrames() { const pending = [...frames.values()]; frames.clear(); pending.forEach(fn => fn()); }};
}

test('desktop Collection tab pins promo outside carousel; mobile checkbox is independent', () => {
  const f = fixture({mobile: false});
  assert.equal(f.item.parent, f.host); assert.equal(f.item.classList.contains('swiper-slide'), false);
  assert.equal(f.item.classList.contains('swiper-slide-active'), false); assert.equal(f.item.flags['aria-label'], undefined);
  assert.equal(f.list.dataset.promoDesktopDetached, 'true');
  f.query.matches = true; f.query.change();
  assert.equal(f.item.parent, f.track); assert.equal(f.track.children.indexOf(f.item) < f.track.children.indexOf(f.product), true);
  assert.equal(f.item.classList.contains('swiper-slide'), true); assert.equal(f.list.dataset.promoDesktopDetached, 'false');
  f.query.matches = false; f.query.change(); assert.equal(f.item.parent, f.host);
});

test('legacy mobile-only promo remains in desktop slot and moves on mobile', () => {
  const f = fixture({desktop: false}); assert.equal(f.item.parent, f.track);
  f.query.matches = true; f.query.change(); assert.equal(f.item.parent, f.host);
  f.query.matches = false; f.query.change(); assert.equal(f.item.parent, f.track);
});

test('Product list detaches desktop promo and keeps mobile flag independent', () => {
  const f = fixture({tab: false, mobile: false});
  assert.equal(f.item.parent, f.host);
  assert.equal(f.item.classList.contains('swiper-slide'), false);
  assert.equal(f.list.dataset.promoDesktopDetached, 'true');
  f.query.matches = true; f.query.change();
  assert.equal(f.item.parent, f.track);
  assert.equal(f.item.classList.contains('swiper-slide'), true);
  assert.equal(f.list.dataset.promoDesktopDetached, 'false');
  f.query.matches = false; f.query.change(); assert.equal(f.item.parent, f.host);
});

test('Product list with desktop flag off retains its configured slide position', () => {
  const f = fixture({tab: false, desktop: false});
  assert.equal(f.item.parent, f.track);
  assert.equal(f.list.dataset.promoDesktopDetached, 'false');
  f.query.matches = true; f.query.change(); assert.equal(f.item.parent, f.host);
  f.query.matches = false; f.query.change(); assert.equal(f.item.parent, f.track);
});

test('initialization is idempotent; unload restores original slot and allows reload', () => {
  const f = fixture(); const updates = f.updates();
  f.context.init(f.list); assert.equal(f.updates(), updates);
  f.events['shopify:section:unload']({target: f.list});
  assert.equal(f.item.parent, f.track); assert.equal(f.track.children.length, 2);
  assert.equal(f.query.change, null); assert.equal(f.list.dataset.promoDesktopDetached, undefined);
  f.context.init(f.list); assert.equal(f.item.parent, f.host);
});

test('desktop setting renders its flag without relying on a section.type property', async () => {
  const {loadLiquid} = require('./helpers/liquid-engine.cjs');
  const engine = new (loadLiquid())();
  const source = fs.readFileSync('blocks/promo-card.liquid', 'utf8');
  const normalization = source.match(/{%- liquid[\s\S]*?-%}/)[0];
  const template = normalization + '{{ promo_desktop_top }}';
  const section = {settings: {columns_desktop: '3'}};
  assert.equal((await engine.parseAndRender(template, {section, block: {settings: {show_on_top_desktop: true}}})).trim(), 'true');
  assert.equal((await engine.parseAndRender(template, {section, block: {settings: {show_on_top_desktop: false}}})).trim(), 'false');
  assert.equal((await engine.parseAndRender(template, {section, block: {settings: {}}})).trim(), 'false');
});


test('late Swiper labels are cleared; pending cleanup cannot strip a restored slide', () => {
  const f = fixture({mobile: false});
  f.item.classes.add('swiper-slide-active'); f.item.flags['aria-label'] = '1 / 7';
  f.flushFrames();
  assert.equal(f.item.classList.contains('swiper-slide-active'), false);
  assert.equal(f.item.flags['aria-label'], undefined);
  f.query.matches = false; f.query.change();
  f.query.matches = true; f.query.change();
  f.flushFrames();
  assert.equal(f.item.parent, f.track); assert.equal(f.item.classList.contains('swiper-slide'), true);
  f.events['shopify:section:unload']({target: f.list}); assert.equal(f.frames.size, 0);
});
