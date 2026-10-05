'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { reconcileThemeSchema } = require('../scripts/theme-base-sync.cjs');

test('quantity block adds blank label and optional colors without inventing preset values', () => {
  const liquid = fs.readFileSync(path.join(__dirname, '../blocks/product-buy-quantity.liquid'), 'utf8');
  const source = JSON.parse(liquid.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
  const theme = { ...source, settings: [], presets: [{ name: 'Quantity', settings: { style: 'custom' } }] };
  const before = JSON.stringify(theme);
  const result = reconcileThemeSchema('blocks/product-buy-quantity.liquid', { schema: theme }, { schema: source });
  assert.equal(JSON.stringify(theme), before);
  assert.deepEqual(result.schema.settings, source.settings.filter(setting => setting.id));
  for (const id of ['label', 'background_color', 'text_color', 'border_color']) {
    assert.equal(Object.hasOwn(result.schema.presets[0].settings, id), false);
    const added = result.added.find(setting => setting.id === id);
    assert.equal(added.hasDefault, false);
    assert.equal(added.presetCount, 0);
    assert.match(added.defaultNote, /unset/);
  }
  assert.deepEqual(result.schema.presets[0].settings, { style: 'custom', border_thickness: 1, corner_radius: 4 });
  assert.deepEqual(result.blockingDifferences, []);
});

test('explicit defaults including false and zero reach presets without overwriting theme values', () => {
  const settings = [
    { type: 'text', id: 'label', default: 'Quantity' },
    { type: 'checkbox', id: 'enabled', default: false },
    { type: 'range', id: 'spacing', default: 0 },
  ];
  const result = reconcileThemeSchema('blocks/example.liquid',
    { schema: { settings: [], presets: [{ settings: { label: 'Custom' } }] } },
    { schema: { settings } });
  assert.deepEqual(result.schema.presets[0].settings, { label: 'Custom', enabled: false, spacing: 0 });
});

test('missing defaults for controls remain blocked and functional changes still require review', () => {
  for (const type of ['range', 'select', 'checkbox', 'unknown']) {
    assert.throws(() => reconcileThemeSchema('blocks/example.liquid',
      { schema: { settings: [] } },
      { schema: { settings: [{ type, id: 'value' }] } }), /chưa khai báo default/);
  }
  const result = reconcileThemeSchema('blocks/example.liquid',
    { schema: { settings: [{ type: 'text', id: 'label' }] } },
    { schema: { settings: [{ type: 'select', id: 'label', default: 'a', options: [{ value: 'a' }] }] } });
  assert.equal(result.blockingDifferences.length, 1);
  assert.equal(result.schema.settings[0].type, 'text');
});

test('URL and resource picker settings continue to stay unset', () => {
  for (const type of ['url', 'image_picker', 'color_background']) {
    const result = reconcileThemeSchema('blocks/example.liquid',
      { schema: { settings: [], presets: [{ settings: {} }] } },
      { schema: { settings: [{ type, id: 'value' }] } });
    assert.deepEqual(result.schema.presets[0].settings, {});
    assert.equal(result.added[0].hasDefault, false);
  }
});
