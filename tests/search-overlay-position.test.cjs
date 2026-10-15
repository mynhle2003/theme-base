const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('sections/search-overlay.liquid', 'utf8');
const helper = source.match(/  const getHeaderBottom = \(header\) => \{[\s\S]*?\n  \};/)[0];
const getHeaderBottom = vm.runInNewContext(`${helper}\ngetHeaderBottom`);
test('transparent header uses its visible surface rather than zero-height section wrapper', () => {
  const surface = { getBoundingClientRect: () => ({ bottom: 112, height: 76 }) };
  assert.equal(getHeaderBottom({ querySelector: () => surface, getBoundingClientRect: () => ({ bottom: 0, height: 0 }) }), 112);
});
test('revealing sticky header reserves its full height before its transform settles', () => {
  const surface = { getBoundingClientRect: () => ({ bottom: 0, height: 76 }) };
  assert.equal(getHeaderBottom({ querySelector: () => surface }), 76);
});
test('missing header keeps search at the viewport top', () => assert.equal(getHeaderBottom(null), 0));
