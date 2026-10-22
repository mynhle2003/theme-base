const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const schema = name => JSON.parse(read(name).match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
const Liquid = loadLiquid();
const engine = new Liquid();
const translations = JSON.parse(read('locales/en.default.json').replace(/^[\s\S]*?(?=\{)/, ''));
engine.registerFilter('t', key => key.split('.').reduce((value, part) => value?.[part], translations) || key);
engine.registerFilter('date', () => '1800000000');
const timer = stripShopifyMetadata(read('blocks/countdown-timer.liquid')).replace(/{% javascript %}[\s\S]*?{% endjavascript %}/, '');
const renderTimer = style => engine.parseAndRender(timer, {
  block: { id: 'timer', settings: { style, type: 'recurring', duration_hours: 12, duration_minutes: 18, show_background: false } },
  section: { id: 'campaign' }, request: { design_mode: false }
});

test('compact timer uses localized short labels without separators and preserves other timer styles', async () => {
  const compact = await renderTimer('with_labels_compact');
  assert.match(compact, /data-countdown-duration="44280"/);
  assert.equal((compact.match(/data-countdown-unit="/g) || []).length, 4);
  for (const label of ['Days', 'Hrs', 'Mins', 'Secs']) assert.match(compact, new RegExp('data-countdown-label>' + label + '<'));
  assert.doesNotMatch(compact, /class="countdown-timer__separator/);
  const standard = await renderTimer('with_labels');
  assert.match(standard, /data-countdown-label>Hours</);
  assert.doesNotMatch(standard, /class="countdown-timer__separator/);
  const colon = await renderTimer('with_labels_colon');
  assert.equal((colon.match(/class="countdown-timer__separator/g) || []).length, 3);
  assert.doesNotMatch(await renderTimer('numbers_only'), /data-countdown-label>/);
});

test('fixed outer slots and private marquee allow-list survive preset/template composition', () => {
  const source = read('sections/countdown-with-marquee.liquid');
  const definition = schema('sections/countdown-with-marquee.liquid');
  assert.doesNotMatch(source, /content_for 'blocks'/);
  assert.deepEqual([...source.matchAll(/content_for 'block', type: '([^']+)', id: '([^']+)'/g)].map(m => [m[1],m[2]]), [['_countdown-marquee','marquee-left'],['group','content'],['_countdown-marquee','marquee-right']]);
  const instance = JSON.parse(read('templates/index.json').replace(/^[\s\S]*?(?=\{)/, '')).sections.virelle_flash_sale;
  assert.equal(instance.type, 'countdown-with-marquee');
  assert.equal(instance.block_order, undefined);
  for (const block of definition.presets[0].blocks) {
    assert.equal(block.static, true);
    assert.equal(instance.blocks[block.id].static, true);
    assert.equal(instance.blocks[block.id].type, block.type);
  }
  const marquee = schema('blocks/_countdown-marquee.liquid');
  assert.deepEqual(marquee.blocks.map(b => b.type), ['_marquee-heading','_marquee-text','eyebrow']);
  assert.equal(marquee.presets, undefined);
});

test('standard and private marquee share one renderer with editor attributes on the correct root', async () => {
  assert.match(read('blocks/marquee.liquid'), /render 'marquee-render'/);
  assert.match(read('blocks/_countdown-marquee.liquid'), /render 'marquee-render'/);
  const source = stripShopifyMetadata(read('snippets/marquee-render.liquid')).replace(/{% javascript %}[\s\S]*?{% endjavascript %}/, '');
  const context = { block: { settings: {}, shopify_attributes: 'data-editor="source"' }, children: '<div>Campaign</div>' };
  const common = await engine.parseAndRender(source, context);
  assert.equal((common.match(/data-editor="source"/g) || []).length, 1);
  assert.match(common, /<div>Campaign<\/div>/);
  const rail = await engine.parseAndRender(source, {...context, suppress_editor_attributes: true});
  assert.doesNotMatch(rail, /data-editor="source"/);
});

test('responsive allocation collapses timer gaps before parent spacing and restores the Figma layout', () => {
  const vm = require('node:vm');
  const source = read('sections/countdown-with-marquee.liquid');
  const helper = source.match(/function countdownGroupFit[\s\S]*?(?=\n    class CountdownMarqueeLayout)/)[0];
  const context = {};
  vm.createContext(context);
  vm.runInContext(helper, context);
  const fit = available => context.countdownGroupFit(available, 268, 80);
  // Enough for two equal columns, the full64px timer gap and the80px parent gap.
  assert.equal(fit(1000).gap, 80);
  assert.equal(fit(1000).stacked, false);
  // Timer compresses within its half-column while the parent remains at80px.
  const narrow = fit(800);
  assert.equal(narrow.gap, 80);
  assert.equal(narrow.stacked, false);
  assert.ok(((800 - narrow.gap) / 2 - 268) / 3 < 64);
  // Only once the four units exhaust their internal gaps does parent spacing shrink.
  assert.equal(fit(600).gap, 64);
  assert.equal((600 - fit(600).gap) / 2, 268);
  assert.equal(fit(536).gap, 0);
  assert.equal(fit(536).stacked, false);
  assert.equal(fit(535).stacked, true);
  assert.equal(fit(1000).gap, 80);
});
