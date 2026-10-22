const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const source = fs.readFileSync('assets/timeline-list.js', 'utf8');
const update = source.slice(source.indexOf('const updatePaginationProgress ='), source.indexOf('const scrollActiveControlIntoView ='));

function position(mode, index, rectangles) {
  const values = new Map();
  const list = { querySelectorAll: () => [] };
  const state = {
    root: {
      dataset: { timelineNavigationPosition: mode },
      querySelector: () => list,
      style: { setProperty: (key, value) => values.set(key, value) },
    },
    swiper: { realIndex: index },
  };
  const items = rectangles.map(([slideLeft, headingLeft]) => ({
    getBoundingClientRect: () => ({ left: slideLeft }),
    querySelector: () => ({ querySelector: () => ({ getBoundingClientRect: () => ({ left: headingLeft }) }) }),
  }));
  vm.runInNewContext(`${update}\nupdatePaginationProgress(state, items);`, { state, items });
  return values.get('--timeline-list-story-start');
}

test('story alignment cancels page position and in-flight slide transforms', () => {
  assert.equal(position('content_bottom', 0, [[160, 1024]]), '864px');
  assert.equal(position('content_bottom', 0, [[-450, 414]]), '864px');
});

test('story alignment follows the selected slide and its own content inset', () => {
  assert.equal(position('content_bottom', 1, [[0, 864], [1616, 2428]]), '812px');
});

test('existing navigation modes do not receive a story-position override', () => {
  for (const mode of ['inside', 'outside']) assert.equal(position(mode, 0, [[0, 864]]), undefined);
});
