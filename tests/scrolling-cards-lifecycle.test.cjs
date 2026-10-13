const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function fixture() {
  const events = new Map();
  const listeners = new Map();
  const frames = new Map();
  let frameId = 0;
  class Element {}
  const mediaQuery = { matches: false, addEventListener() {}, removeEventListener() {} };
  const context = {
    HTMLElement: Element,
    window: {
      innerHeight: 800,
      matchMedia: () => mediaQuery,
      addEventListener(name, fn) {
        if (!listeners.has(name)) listeners.set(name, new Set());
        listeners.get(name).add(fn);
      },
      removeEventListener: (name, fn) => listeners.get(name)?.delete(fn),
      requestAnimationFrame(fn) { frames.set(++frameId, fn); return frameId; },
      cancelAnimationFrame: id => frames.delete(id),
    },
    document: {
      readyState: 'complete',
      querySelectorAll: () => [],
      addEventListener: (name, fn) => events.set(name, fn),
    },
  };
  vm.runInNewContext(fs.readFileSync('assets/scrolling-cards.js', 'utf8').replace('export function', 'function'), context);
  const root = new Element();
  const cards = [0, 1].map(index => {
    const properties = new Map();
    return { offsetHeight: 400, properties, getBoundingClientRect: () => ({ top: 200 + index * 400 }),
      style: { setProperty: (name, value) => properties.set(name, value), removeProperty: name => properties.delete(name) } };
  });
  root.matches = selector => selector === '[data-scrolling-cards]';
  root.querySelectorAll = selector => selector.startsWith(':scope') ? cards : [];
  root.getBoundingClientRect = () => ({ top: 200, bottom: 1000 });
  root.dataset = { stackEffect: 'fade', stickyMobile: 'true' };
  return { context, root, cards, events, listeners, frames, tick() {
    const pending = [...frames.values()]; frames.clear(); pending.forEach(fn => fn());
  } };
}

test('lazy module initializes inserted scrolling cards and keeps one listener per instance', () => {
  const h = fixture();
  assert.equal(h.frames.size, 0);
  h.context.initializeThemeModule(h.root);
  h.context.initializeThemeModule(h.root);
  assert.equal(h.listeners.get('scroll').size, 1);
  assert.equal(h.frames.size, 1);
  h.tick();
  assert.equal(h.cards[0].properties.get('--scrolling-card-sticky-top'), '200px');
  assert.equal(h.cards[0].style.opacity, '1');
  assert.equal(h.cards[1].style.opacity, '0');
});

test('editor unload cancels pending frames, removes listeners and allows reload', () => {
  const h = fixture();
  h.context.initializeThemeModule(h.root);
  h.events.get('shopify:section:unload')({ target: h.root });
  assert.equal(h.frames.size, 0);
  assert.equal(h.listeners.get('scroll').size, 0);
  assert.ok(h.cards.every(card => !card.properties.has('--scrolling-card-sticky-top')));
  h.events.get('shopify:section:load')({ target: h.root });
  assert.equal(h.listeners.get('scroll').size, 1);
  assert.equal(h.frames.size, 1);
});


test('another asset version reuses the controller and its editor listeners', () => {
  const h = fixture();
  h.context.initializeThemeModule(h.root);
  const unload = h.events.get('shopify:section:unload');
  const otherVersion = { ...h.context };
  vm.runInNewContext(fs.readFileSync('assets/scrolling-cards.js', 'utf8').replace('export function', 'function'), otherVersion);
  assert.equal(h.events.get('shopify:section:unload'), unload);
  otherVersion.initializeThemeModule(h.root);
  assert.equal(h.listeners.get('scroll').size, 1);
  assert.equal(h.frames.size, 1);
});
