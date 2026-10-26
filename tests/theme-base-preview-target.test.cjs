const test = require('node:test');
const assert = require('node:assert/strict');
const { parseStartArgs, validateTargetTheme } = require('../scripts/theme-base-preview.cjs');

const themes = [
  { id: 101, name: 'Norden', role: 'unpublished' },
  { id: 102, name: 'Live', role: 'live' },
  { id: 103, name: 'Shared development', role: 'development' },
];

test('preview accepts an explicit draft ID or a request to create a new draft', () => {
  assert.deepEqual(parseStartArgs(['--store', 'example.myshopify.com', '--theme', '101']), {
    store: 'example.myshopify.com', themeId: '101',
  });
  assert.equal(parseStartArgs(['--theme', 'new']).themeId, 'new');
  assert.throws(() => parseStartArgs(['--theme']), /ID\|new/);
  assert.throws(() => parseStartArgs(['--theme', '101', '--theme', '102']), /một lần/);
});

test('preview refuses live, shared development and unknown targets before upload', () => {
  assert.equal(validateTargetTheme('101', themes), themes[0]);
  assert.throws(() => validateTargetTheme('102', themes), /role live/);
  assert.throws(() => validateTargetTheme('103', themes), /role development/);
  assert.throws(() => validateTargetTheme('999', themes), /không có trên store/);
  assert.throws(() => validateTargetTheme('Norden', themes), /dạng số/);
  assert.throws(() => validateTargetTheme('0', themes), /dạng số/);
});
