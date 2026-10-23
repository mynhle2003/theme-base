const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function fixture({ reduced = false } = {}) {
  const events = new Map();
  const animations = [];
  const classes = () => {
    const values = new Set();
    return { add: value => values.add(value), remove: value => values.delete(value),
      contains: value => values.has(value), toggle(value, enabled) { enabled ? values.add(value) : values.delete(value); } };
  };
  const slides = Array.from({ length: 3 }, () => ({
    dataset: {}, classList: classes(), attributes: {}, style: { removeProperty() {} },
    setAttribute(name, value) { this.attributes[name] = value; }, querySelector() { return null; },
    animate() {
      let resolve;
      let reject;
      const animation = { cancelled: false, finished: new Promise((yes, no) => { resolve = yes; reject = no; }),
        finish() { resolve(); }, cancel() { this.cancelled = true; reject(new Error('cancelled')); } };
      animations.push(animation);
      return animation;
    },
  }));
  const buttons = slides.map(() => ({
    style: { setProperty() {} }, classList: classes(), attributes: {}, listeners: {},
    querySelector() { return null; }, closest() { return null; },
    setAttribute(name, value) { this.attributes[name] = value; },
    addEventListener(name, listener) { this.listeners[name] = listener; }, focus() {},
  }));
  const root = {
    dataset: { carouselMode: 'reveal' }, classList: classes(),
    matches: selector => selector === '[data-carousel-block]',
    querySelector() { return null; }, dispatchEvent() {},
    querySelectorAll(selector) {
      return selector === '[data-carousel-slide]' ? slides : selector === '[data-carousel-pagination-button]' ? buttons : [];
    },
  };
  const source = fs.readFileSync('assets/carousel-runtime.js', 'utf8')
    .replace(/^import .*;\n/gm, '').replace('export const createCarouselRuntime', 'globalThis.createCarouselRuntime');
  const context = vm.createContext({
    document: { readyState: 'loading', addEventListener: (name, listener) => events.set(name, listener) },
    window: { matchMedia: () => ({ matches: reduced }), addEventListener() {} },
    AbortController, CustomEvent: class {},
  });
  vm.runInContext(source, context);
  const initialize = context.createCarouselRuntime({ rootSelector: '[data-carousel-block]', slideSelector: '.press-item' });
  initialize(root);
  return { root, slides, buttons, animations, events, initialize };
}

const flush = async () => { for (let i = 0; i < 8; i++) await Promise.resolve(); };

test('Press releases finished effects and keeps the selected quote and logo in sync on return', async () => {
  const h = fixture();
  for (const index of [1, 2, 0, 1]) {
    const start = h.animations.length;
    const transition = h.buttons[index].listeners.click();
    h.animations[start].finish();
    await flush();
    h.animations[start + 1].finish();
    await transition;
    assert.ok(h.animations.every(animation => animation.cancelled));
    h.slides.forEach((slide, i) => {
      assert.equal(slide.classList.contains('is-selected'), i === index);
      assert.equal(slide.attributes['aria-hidden'], String(i !== index));
      assert.equal(h.buttons[i].attributes['aria-current'], String(i === index));
    });
  }
});

test('Press rapid selections settle on the latest requested item', async () => {
  const h = fixture();
  const transition = h.buttons[1].listeners.click();
  h.buttons[2].listeners.click();
  for (let i = 0; i < 4; i++) { h.animations[i].finish(); await flush(); }
  await transition;
  assert.equal(h.slides[2].classList.contains('is-selected'), true);
  assert.ok(h.animations.every(animation => animation.cancelled));
});

test('Press unload cancels an in-flight transition and can initialize again', async () => {
  const h = fixture();
  const transition = h.buttons[1].listeners.click();
  h.events.get('shopify:section:unload')({ target: h.root });
  await transition;
  assert.equal(h.animations[0].cancelled, true);
  h.initialize(h.root);
  assert.equal(h.slides[0].classList.contains('is-selected'), true);
});

test('Press reduced motion selects directly without animation effects', async () => {
  const h = fixture({ reduced: true });
  await h.buttons[2].listeners.click();
  assert.equal(h.animations.length, 0);
  assert.equal(h.slides[2].classList.contains('is-selected'), true);
});
