const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function fixture() {
  const source = fs.readFileSync('assets/slideshow.js', 'utf8');
  const clock = source.slice(source.indexOf('const startAutoplay ='), source.indexOf('const bindNavigation ='));
  let frame, viewport;
  const listeners = new Map();
  const swiperEvents = new Map();
  let writes = 0, slides = 0;
  const pagination = { dataset: new Proxy({}, { set(target, key, value) { writes++; target[key] = value; return true; } }) };
  const root = {
    dataset: { autoplay: 'true', autoplayDelay: '3000' },
    querySelector: () => pagination,
    addEventListener(name, handler) { listeners.set(name, handler); },
    contains: () => false,
  };
  const swiper = {
    realIndex: 0, isLocked: false, animating: false,
    on(name, handler) { swiperEvents.set(name, handler); }, off() {},
    slideNext() { slides++; this.realIndex++; swiperEvents.get('activeIndexChange realIndexChange')(); },
  };
  const document = { readyState: 'complete', hidden: false, addEventListener(name, handler) { listeners.set(name, handler); } };
  const motion = { matches: false, addEventListener() {} };
  const context = {
    root, swiper, document, AbortController, reducedMotion: () => motion.matches,
    window: {
      matchMedia: () => motion,
      setTimeout(callback) { frame = callback; return 1; },
      clearTimeout() { frame = null; },
      addEventListener(name, handler) { listeners.set(name, handler); },
      IntersectionObserver: true,
    },
    IntersectionObserver: class {
      constructor(callback) { viewport = callback; } observe() {} disconnect() {}
    },
  };
  vm.runInNewContext(`${clock}\nthis.autoplay = startAutoplay(root, swiper, null);`, context);
  return {
    pagination, document, autoplay: context.autoplay,
    tick(now) { const callback = frame; frame = null; callback?.(now); },
    fire(name, event = {}) { listeners.get(name)?.(event); },
    viewport(visible) { viewport([{ isIntersecting: visible }]); },
    get writes() { return writes; }, get slides() { return slides; },
  };
}

test('autoplay advances slides without per-frame style/dataset writes', () => {
  const f = fixture();
  f.tick(0);
  const writes = f.writes;
  for (let now = 16; now < 3000; now += 16) f.tick(now);
  assert.equal(f.writes, writes);
  assert.equal(f.pagination.dataset.autoplayClock, 'running');
  f.tick(3000);
  assert.equal(f.slides, 1);
  f.autoplay.destroy();
  assert.equal(f.pagination.dataset.autoplayClock, undefined);
});

test('hover, hidden tabs and offscreen slides pause both progress and elapsed time', () => {
  const f = fixture();
  f.tick(0); f.tick(1000);
  f.fire('mouseenter'); f.tick(1100); f.tick(9000);
  assert.equal(f.pagination.dataset.autoplayClock, 'paused');
  assert.equal(f.slides, 0);
  f.fire('mouseleave'); f.tick(9100); f.tick(10100);
  f.document.hidden = true; f.fire('visibilitychange');
  assert.equal(f.pagination.dataset.autoplayClock, 'paused');
  f.document.hidden = false; f.fire('visibilitychange'); f.tick(20000);
  f.viewport(false);
  assert.equal(f.pagination.dataset.autoplayClock, 'paused');
  f.viewport(true); f.tick(30000); f.tick(31000);
  assert.equal(f.slides, 1);
  f.autoplay.destroy();
});
