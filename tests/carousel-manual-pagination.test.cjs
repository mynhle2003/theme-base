const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function fixture(type) {
  const element = () => {
    const classes = new Set();
    return { dataset: {}, attributes: {}, style: {}, children: [],
      classList: { add: (...items) => items.forEach(x => classes.add(x)), remove: (...items) => items.forEach(x => classes.delete(x)), toggle: (x, enabled) => enabled ? classes.add(x) : classes.delete(x), contains: x => classes.has(x) },
      setAttribute(key, value) { this.attributes[key] = value; },
      replaceChildren(...children) { this.children = children; },
      querySelector() { return this.children[0]; },
      querySelectorAll() { return this.children; },
      contains(child) { return this.children.includes(child); },
      closest() { return this; },
      addEventListener(event, callback, { signal }) { this.click = callback; signal.addEventListener('abort', () => { this.click = null; }); }
    };
  };
  const pagination = element(); pagination.dataset.paginationType = type;
  const events = new Map(); const calls = [];
  const swiper = { el: { id: 'carousel-example' }, activeIndex: 4, params: { speed: 600, a11y: { paginationBulletMessage: 'Slide {{index}}' } },
    on: (name, fn) => events.set(name, fn), off: name => events.delete(name), slideTo: (...args) => calls.push(args) };
  const source = fs.readFileSync('assets/carousel-runtime.js', 'utf8');
  const fn = source.slice(source.indexOf('const createManualPagination ='), source.indexOf('const prefersReducedMotion ='));
  const create = vm.runInNewContext(`${fn}; createManualPagination`, { AbortController, document: { createElement: element } });
  const dispose = create(pagination, swiper, { slideCount: 4, logicalIndex: index => index % 4, originalIndex: index => Number(index) + 4 });
  return { pagination, swiper, events, calls, dispose };
}

for (const type of ['dots', 'bullets']) {
  test(`${type}: manual loop targets originals, updates accessible active state and cleans up`, () => {
    const f = fixture(type);
    assert.equal(f.pagination.children.length, 4);
    assert.equal(f.pagination.children[0].attributes['aria-current'], 'true');
    assert.equal(f.pagination.children[3].attributes['aria-controls'], 'carousel-example');
    assert.equal(f.pagination.children[3].attributes['aria-label'], 'Slide 4');
    const click = () => f.pagination.click({ target: f.pagination.children[3], preventDefault() {} });
    click(); assert.deepEqual(f.calls, [[7, 600]]);
    f.swiper.animating = true; click(); assert.equal(f.calls.length, 1);
    f.swiper.animating = false; f.swiper.activeIndex = 7;
    f.events.get('activeIndexChange slideChangeTransitionEnd')();
    assert.equal(f.pagination.children[3].attributes['aria-current'], 'true');
    assert.equal(f.pagination.children[0].attributes['aria-current'], 'false');
    f.dispose(); assert.equal(f.events.size, 0); assert.equal(f.pagination.children.length, 0); assert.equal(f.pagination.click, null);
  });
}
test('progress bar keeps its manual-loop behavior', () => {
  const f = fixture('progress_bar');
  assert.equal(f.pagination.children[0].style.transform, 'scaleX(0.25)');
  f.swiper.activeIndex = 7; f.events.get('activeIndexChange slideChangeTransitionEnd')();
  assert.equal(f.pagination.children[0].style.transform, 'scaleX(1)');
  f.dispose(); assert.equal(f.events.size, 0);
});
