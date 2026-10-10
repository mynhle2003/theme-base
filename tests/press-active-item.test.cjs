const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const classes = () => {
  const values = new Set();
  return { add: (...names) => names.forEach(name => values.add(name)),
    remove: (...names) => names.forEach(name => values.delete(name)),
    contains: name => values.has(name),
    toggle(name, enabled) { enabled ? values.add(name) : values.delete(name); } };
};

function quoteFixture(type = 'slide-bottom') {
  let onMutation, onIntersection;
  const items = [false, true].map(hidden => ({
    hidden, matches: selector => selector.includes('.press-item'),
  }));
  const headings = items.map(item => ({
    item, dataset: { blockAnimation: type, animationDelay: '100' },
    classList: classes(), isConnected: true, played: 0, frames: [],
    matches: () => true, contains: () => false,
    closest: selector => selector.includes('[aria-hidden="true"]') && item.hidden ? item : null,
    getClientRects: () => [{}],
    getBoundingClientRect: () => ({ top: 10, bottom: 100, left: 0, right: 200 }),
    animate(frames) { this.played++; this.frames.push(frames); return { finished: new Promise(() => {}), cancel() {} }; },
  }));
  items.forEach(item => { item.contains = element => element.item === item; });
  const root = { querySelectorAll: () => headings, contains: element => headings.includes(element), addEventListener() {} };
  class Observer { constructor(fn) { onIntersection = fn; } observe() {} unobserve() {} }
  vm.runInNewContext(fs.readFileSync('assets/block-animations.js', 'utf8'), {
    window: { IntersectionObserver: Observer }, IntersectionObserver: Observer,
    MutationObserver: class { constructor(fn) { onMutation = fn; } observe() {} },
    document: { documentElement: { classList: classes() }, activeElement: null,
      querySelectorAll: () => [root], addEventListener() {} },
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    innerHeight: 800, innerWidth: 1200, AbortController, clearTimeout, setTimeout,
  });
  const select = index => {
    items.forEach((item, i) => { item.hidden = i !== index; });
    onMutation(items.map(target => ({ type: 'attributes', attributeName: 'aria-hidden', target })));
    assert(!headings[index].classList.contains('reveal-pending'));
  };
  return { headings, select, intersect: () => onIntersection([{ target: headings[1], isIntersecting: true }]) };
}

test('Press reveals a newly selected quote even after its intersection callback ran while hidden', () => {
  const { headings, select, intersect } = quoteFixture();
  intersect();
  assert.equal(headings[1].played, 0);
  assert(headings[1].classList.contains('reveal-pending'));
  select(1);
  assert.equal(headings[1].played, 1);
  select(0);
  assert.equal(headings[0].played, 2);
  select(1);
  assert.equal(headings[1].played, 2);
});

test('Press plays slide-bottom only for a block that selects that animation type', () => {
  const animated = quoteFixture('slide-bottom');
  animated.select(1);
  assert.equal(animated.headings[1].frames[0][0].transform, 'translateY(20px)');
  const disabled = quoteFixture('none');
  disabled.select(1); disabled.select(0);
  assert(disabled.headings.every(heading => heading.played === 0));
});

function carouselFixture() {
  const pending = [];
  const slides = Array.from({ length: 3 }, () => ({
    dataset: {}, classList: classes(), attributes: {}, animations: [],
    style: { removeProperty() {} }, querySelector: () => null,
    setAttribute(name, value) { this.attributes[name] = value; },
    animate(frames) {
      let resolve;
      const animation = { finished: new Promise(done => { resolve = done; }), cancelled: false,
        cancel() { this.cancelled = true; }, finish() { resolve(); }, frames };
      this.animations.push(animation); pending.push(animation); return animation;
    },
  }));
  const buttons = slides.map(() => ({ dataset: {}, classList: classes(), attributes: {},
    querySelector: () => null, closest: () => null, addEventListener() {},
    setAttribute(name, value) { this.attributes[name] = value; } }));
  const root = { dataset: {}, classList: classes(), dispatchEvent() {},
    querySelector: () => null,
    querySelectorAll: selector => selector.includes('pagination') ? buttons : slides };
  const source = fs.readFileSync('assets/carousel-block.js', 'utf8');
  const reveal = source.slice(source.indexOf('const initializeReveal ='), source.indexOf('\nconst initialize ='));
  const context = { instances: new WeakMap(), number: (value, fallback) => Number.isFinite(Number(value)) ? Number(value) : fallback,
    prefersReducedMotion: () => false, AbortController,
    CustomEvent: class { constructor(name, options) { this.type = name; this.detail = options.detail; } } };
  vm.createContext(context);
  vm.runInContext(reveal + '\nglobalThis.init = initializeReveal;', context);
  context.init(root);
  return { state: context.instances.get(root), slides, buttons, pending };
}

test('Press releases finished fade effects before returning to an active item', async () => {
  const h = carouselFixture();
  const finish = async () => { h.pending.shift().finish(); await new Promise(setImmediate); };
  const switching = h.state.goTo(1);
  await finish(); await finish(); await switching;
  assert(h.slides.every(slide => slide.animations.every(animation =>
    animation.frames.every(frame => !('transform' in frame)))));
  assert(h.slides[0].animations.every(animation => animation.cancelled));
  assert(h.slides[1].animations.every(animation => animation.cancelled));
  await h.state.goTo(0, { immediate: true });
  assert(h.slides[0].classList.contains('is-selected'));
  assert.equal(h.slides[0].attributes['aria-hidden'], 'false');
  assert.equal(h.buttons[0].attributes['aria-current'], 'true');
});

test('Press settles rapid selections on the last requested item without retaining opacity effects', async () => {
  const h = carouselFixture();
  const switching = h.state.goTo(1);
  h.state.goTo(2);
  h.state.goTo(0);
  for (let i = 0; i < 4; i++) { h.pending.shift().finish(); await new Promise(setImmediate); }
  await switching;
  assert.equal(h.state.currentIndex, 0);
  assert.equal(h.slides.filter(slide => slide.classList.contains('is-selected')).length, 1);
  assert(h.slides.every(slide => slide.animations.every(animation => animation.cancelled)));
});
