const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('assets/hero.js', 'utf8');
function fixture(observerSupported = true, reduced = false) {
  class Element {}
  const hero = new Element();
  hero.dataset = { heroParallax: 'vertical' };
  let reads = 0;
  hero.getBoundingClientRect = () => { reads++; return { top: 0, height: 500, width: 1000 }; };
  const media = new Element();
  media.style = { transform: '', removeProperty() { this.transform = ''; } };
  hero.querySelector = selector => selector === '[data-hero-media]' ? media : hero;
  const root = { querySelectorAll: () => [hero] };
  const document = new EventTarget();
  document.readyState = 'complete';
  document.querySelectorAll = root.querySelectorAll;
  const motion = new EventTarget();
  motion.matches = reduced;
  const frames = new Map();
  let frameId = 0;
  const observers = [];
  const window = new EventTarget();
  Object.assign(window, { innerHeight: 800, matchMedia: () => motion,
    requestAnimationFrame(callback) { frames.set(++frameId, callback); return frameId; },
    cancelAnimationFrame(id) { frames.delete(id); },
  });
  class Observer {
    constructor(callback) { this.callback = callback; observers.push(this); }
    observe(target) { this.target = target; }
    disconnect() { this.disconnected = true; }
  }
  if (observerSupported) window.IntersectionObserver = Observer;
  vm.runInNewContext(source, { window, document, HTMLElement: Element, IntersectionObserver: Observer });
  return { window, motion, media, frames, observers, reads: () => reads,
    flush() { const callbacks = [...frames.values()]; frames.clear(); callbacks.forEach(callback => callback()); },
    lifecycle(type) { const event = new Event(type); Object.defineProperty(event, 'target', { value: root }); document.dispatchEvent(event); },
  };
}
test('offscreen heroes skip animation frames and layout reads, visible heroes coalesce scroll updates', () => {
  const f = fixture();
  f.window.dispatchEvent(new Event('scroll'));
  assert.equal(f.frames.size, 0);
  assert.equal(f.reads(), 0);
  f.observers[0].callback([{ isIntersecting: true }]);
  f.window.dispatchEvent(new Event('scroll'));
  assert.equal(f.frames.size, 1);
  f.flush();
  assert.equal(f.reads(), 1);
  assert.ok(f.media.style.transform);
  f.observers[0].callback([{ isIntersecting: false }]);
  f.window.dispatchEvent(new Event('scroll'));
  f.flush();
  assert.equal(f.reads(), 1);
});
test('reduced motion resets transforms and unload removes observers, frames and listeners', () => {
  const f = fixture();
  f.observers[0].callback([{ isIntersecting: true }]);
  f.flush();
  f.motion.matches = true;
  f.motion.dispatchEvent(new Event('change'));
  assert.equal(f.media.style.transform, '');
  f.window.dispatchEvent(new Event('scroll'));
  assert.equal(f.frames.size, 0);
  f.motion.matches = false;
  f.motion.dispatchEvent(new Event('change'));
  assert.equal(f.frames.size, 1);
  f.lifecycle('shopify:section:unload');
  assert.equal(f.frames.size, 0);
  assert.equal(f.observers[0].disconnected, true);
  f.window.dispatchEvent(new Event('scroll'));
  f.motion.dispatchEvent(new Event('change'));
  assert.equal(f.frames.size, 0);
  f.lifecycle('shopify:section:load');
  f.lifecycle('shopify:section:load');
  assert.equal(f.observers.length, 2);
});
test('without IntersectionObserver parallax still works; reduced motion avoids initial work', () => {
  const f = fixture(false);
  assert.equal(f.frames.size, 1);
  f.flush();
  assert.equal(f.reads(), 1);
  const reduced = fixture(false, true);
  assert.equal(reduced.frames.size, 0);
  assert.equal(reduced.reads(), 0);
});
