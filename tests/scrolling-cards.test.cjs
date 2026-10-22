const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function fixture({ mobile = false, reduced = false, height = 400, effect = 'fade', stickyMobile = false } = {}) {
  class Target {
    constructor() { this.events = new Map(); }
    addEventListener(type, fn) { if (!this.events.has(type)) this.events.set(type, new Set()); this.events.get(type).add(fn); }
    removeEventListener(type, fn) { this.events.get(type)?.delete(fn); }
    emit(type, target = this) { this.events.get(type)?.forEach(fn => fn({ target })); }
  }
  const style = () => ({ removeProperty(key) { delete this[key]; }, setProperty(key, value) { this[key] = value; } });
  class Root extends Target {
    constructor() {
      super(); this.dataset = { stackEffect: effect, stickyMobile: String(stickyMobile) }; this.style = style();
      this.cards = [0, 1, 2].map(i => ({ style: style(), offsetHeight: height, top: 300 + i * (height + 192), getBoundingClientRect() { return { top: this.top }; } }));
    }
    querySelectorAll() { return this.cards; }
    getBoundingClientRect() { return { top: 0, bottom: 2000 }; }
    contains(el) { return el === this.focus; }
    removeAttribute(name) { delete this.dataset[name.replace(/^data-/, '').replace(/-([a-z])/g, (_, c) => c.toUpperCase())]; }
    matches() { return true; }
    closest() { return this; }
  }
  const root = new Root();
  const other = new Root();
  const win = new Target();
  const doc = new Target();
  doc.readyState = 'complete'; doc.activeElement = null;
  doc.querySelectorAll = () => [root, other];
  const queries = [Object.assign(new Target(), { matches: mobile }), Object.assign(new Target(), { matches: reduced })];
  win.matchMedia = q => queries[q.includes('reduced') ? 1 : 0];
  win.innerHeight = 1000;
  win.getComputedStyle = () => ({ getPropertyValue: () => '60px' });
  const frames = new Map(); let frameId = 0;
  win.requestAnimationFrame = fn => { frames.set(++frameId, fn); return frameId; };
  win.cancelAnimationFrame = id => frames.delete(id);
  const observers = [];
  class ResizeObserver { constructor(fn) { this.fn = fn; this.disconnected = false; observers.push(this); } observe() {} disconnect() { this.disconnected = true; } }
  const source = fs.readFileSync('assets/scrolling-cards.js', 'utf8').replace('export function initializeThemeModule', 'function initializeThemeModule');
  const ctx = { window: win, document: doc, HTMLElement: Root, ResizeObserver };
  vm.createContext(ctx); vm.runInContext(source, ctx);
  const flush = () => { const callbacks = [...frames.values()]; frames.clear(); callbacks.forEach(fn => fn()); };
  flush();
  return { root, other, win, doc, queries, observers, ctx, flush };
}

test('fade crossfades successive cards and scale remains selectable', () => {
  const f = fixture();
  f.root.cards[1].top = 500;
  f.win.emit('scroll'); f.flush();
  assert.equal(Number(f.root.cards[0].style.opacity), 0.5);
  assert.equal(Number(f.root.cards[1].style.opacity), 0.5);
  f.root.dataset.stackEffect = 'scale'; f.win.emit('scroll'); f.flush();
  assert.match(f.root.cards[0].style.transform, /scale\(0.950\)/);
  assert.equal(f.root.cards[0].style.opacity, undefined);
});

test('mobile flow, reduced motion, and oversized cards reset all effects', () => {
  for (const options of [{ mobile: true }, { reduced: true }, { height: 950 }]) {
    const f = fixture(options);
    assert.equal(f.root.dataset.stickyActive, 'false');
    for (const card of f.root.cards) { assert.equal(card.style.opacity, undefined); assert.equal(card.style.transform, undefined); }
  }
  const f = fixture({ mobile: true, stickyMobile: true });
  assert.equal(f.root.dataset.stickyActive, 'true');
});

test('focus and editor selection reveal content, deselection resumes sticky', () => {
  const f = fixture();
  f.root.focus = {}; f.doc.activeElement = f.root.focus;
  f.root.emit('focusin'); f.flush(); assert.equal(f.root.dataset.stickyActive, 'false');
  f.doc.activeElement = null; f.root.emit('focusout'); f.flush(); assert.equal(f.root.dataset.stickyActive, 'true');
  f.doc.emit('shopify:block:select', f.root); f.flush(); assert.equal(f.root.dataset.stickyActive, 'false');
  f.doc.emit('shopify:block:deselect', f.root); f.flush(); assert.equal(f.root.dataset.stickyActive, 'true');
});

test('reinitialization replaces observers and listeners, unload affects only its instance', () => {
  const f = fixture();
  const count = f.win.events.get('scroll').size;
  vm.runInContext('initializeThemeModule(document)', f.ctx); f.flush();
  assert.equal(f.win.events.get('scroll').size, count);
  assert.equal(f.root.events.get('focusin').size, 1);
  assert.equal(f.observers[0].disconnected, true);
  f.doc.emit('shopify:section:unload', { querySelectorAll: () => [f.root] });
  assert.equal(f.win.events.get('scroll').size, count - 1);
  assert.equal(f.root.dataset.stickyActive, undefined);
  assert.equal(f.other.dataset.stickyActive, 'true');
});

test('resize and breakpoint changes recalculate safe sticky geometry', () => {
  const f = fixture();
  assert.equal(f.root.cards[0].style['--scrolling-card-sticky-top'], '300px');
  f.root.cards[0].offsetHeight = 980; f.observers[0].fn(); f.flush();
  assert.equal(f.root.dataset.stickyActive, 'false');
  f.root.cards[0].offsetHeight = 400; f.observers[0].fn(); f.flush();
  assert.equal(f.root.dataset.stickyActive, 'true');
  f.queries[0].matches = true; f.queries[0].emit('change'); f.flush();
  assert.equal(f.root.dataset.stickyActive, 'false');
});
