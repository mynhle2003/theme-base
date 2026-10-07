'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { reconcileThemeSchema } = require('../scripts/theme-base-sync.cjs');

test('quantity block adds blank label and optional colors without inventing preset values', () => {
  const liquid = fs.readFileSync(path.join(__dirname, '../blocks/product-buy-quantity.liquid'), 'utf8');
  const source = JSON.parse(liquid.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
  // Exercise unset semantics independently of this theme's Quantity label default.
  for (const setting of source.settings) {
    if (['label', 'background_color', 'text_color', 'border_color'].includes(setting.id)) delete setting.default;
  }
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

test('translated option labels are retained without blocking sync', () => {
  const setting = { type: 'select', id: 'tag', default: 'h1', options: [{ value: 'h1', label: 'H1' }] };
  const result = reconcileThemeSchema('blocks/example.liquid',
    { schema: { settings: [setting] } },
    { schema: { settings: [{ ...setting, options: [{ value: 'h1', label: 't:options.html_tag.h1' }] }] } });
  assert.deepEqual(result.blockingDifferences, []);
  assert.deepEqual(result.schema.settings[0], setting);
  assert.equal(result.presetChanges.length, 1);
});

test('changed option values still block sync even when labels are identical', () => {
  const setting = { type: 'select', id: 'size', default: 'h1', options: [{ value: 'h1', label: 'Large' }] };
  const result = reconcileThemeSchema('blocks/example.liquid',
    { schema: { settings: [setting] } },
    { schema: { settings: [{ ...setting, default: 'xl', options: [{ value: 'xl', label: 'Large' }] }] } });
  assert.equal(result.blockingDifferences.length, 1);
  assert.deepEqual(result.schema.settings[0], setting);
});

const { collectUsedThemeFiles, updateCompositionSettings } = require('../scripts/theme-base-sync.cjs');

test('usage includes nested blocks, groups, saved presets and static Liquid dependencies', () => {
  const files = {
    'templates/index.json': '/* generated */' + JSON.stringify({ sections: { hero: { type: 'hero', blocks: { text: { type: 'text', blocks: { link: { type: 'link' } } } } } } }),
    'sections/header-group.json': JSON.stringify({ sections: { header: { type: 'header' } } }),
    'config/settings_data.json': JSON.stringify({ presets: { custom: { sections: { footer: { type: 'footer' } } } } }),
    'layout/theme.liquid': "{% render 'layout-content' %}",
    'snippets/layout-content.liquid': "{% section 'static' %}",
    'sections/hero.liquid': `{% content_for 'block', type: 'static-text', id: 'text' %}{% schema %}{"blocks":[{"type":"allowed"},{"type":"@theme"}],"presets":[{"blocks":[{"type":"preset-block"}]}]}{% endschema %}`,
  };
  const used = collectUsedThemeFiles(Object.keys(files), file => files[file] ?? null);
  assert.deepEqual([...used].sort(), [
    'sections/hero.liquid', 'sections/header.liquid', 'sections/footer.liquid', 'sections/static.liquid',
    'blocks/text.liquid', 'blocks/link.liquid', 'blocks/static-text.liquid', 'blocks/allowed.liquid', 'blocks/preset-block.liquid',
  ].sort());
  assert.equal(used.has('sections/unused.liquid'), false);
  assert.throws(() => collectUsedThemeFiles(['templates/broken.json'], () => '{broken'), /Không đọc được JSON/);
});

test('only upstream removals are candidates; theme-only options survive', () => {
  const base = { schema: { settings: [{ type: 'text', id: 'removed' }] } };
  const theme = { schema: { settings: [...base.schema.settings, { type: 'text', id: 'custom' }] } };
  const result = reconcileThemeSchema('sections/hero.liquid', theme, { schema: { settings: [] } }, base);
  assert.deepEqual(result.removed.map(item => item.id), ['removed']);
  assert.deepEqual(result.schema.settings, theme.schema.settings);
});

test('saved composition and nested shared-block presets get defaults and only approved removals', () => {
  const additions = [
    { file: 'sections/hero.liquid', owner: 'section', id: 'enabled', hasDefault: true, defaultValue: false },
    { file: 'sections/hero.liquid', owner: 'block:inline', id: 'gap', hasDefault: true, defaultValue: 0 },
    { file: 'blocks/text.liquid', owner: 'self', id: 'label', hasDefault: true, defaultValue: 'Base' },
  ];
  const removals = [{ file: 'blocks/text.liquid', owner: 'self', id: 'old' }];
  const hero = { type: 'hero', settings: { custom: 'Keep' }, blocks: { inline: { type: 'inline', blocks: { text: { type: 'text', settings: { label: 'Custom', old: 'value' } } } } } };
  const composition = { sections: { hero, other: { type: 'other' } } };
  updateCompositionSettings(composition, additions, removals);
  assert.deepEqual(hero.settings, { custom: 'Keep', enabled: false });
  assert.deepEqual(hero.blocks.inline.settings, { gap: 0 });
  assert.deepEqual(hero.blocks.inline.blocks.text.settings, { label: 'Custom' });
  assert.deepEqual(composition.sections.other, { type: 'other' });
  const schema = { presets: [{ blocks: [{ type: 'text', settings: { old: 'value' } }] }] };
  updateCompositionSettings(schema, additions, removals, 'sections/hero.liquid');
  assert.deepEqual(schema.presets[0].blocks[0].settings, { label: 'Base' });
});

test('merge updates unused schemas wholesale but preserves used and custom schemas', () => {
  const os = require('node:os');
  const { execFileSync } = require('node:child_process');
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'theme-sync-test-'));
  const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
  const write = (file, value) => { fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true }); fs.writeFileSync(path.join(root, file), value); };
  const liquid = (label, settings, code = 'base') => `${code}\n{% schema %}\n${JSON.stringify({ name: label, settings, presets: [{ name: label, settings: { label } }] })}\n{% endschema %}`;
  const setting = { type: 'text', id: 'label', default: 'Base' };
  try {
    git('init', '-q'); git('config', 'user.email', 'test@example.com'); git('config', 'user.name', 'Test');
    write('scripts/theme-base-sync.cjs', fs.readFileSync(path.join(__dirname, '../scripts/theme-base-sync.cjs')));
    write('templates/index.json', JSON.stringify({ sections: { used: { type: 'used', settings: { label: 'Saved' } } } }));
    for (const name of ['used', 'unused', 'custom', 'deleted']) write(`sections/${name}.liquid`, liquid('Base', [setting]));
    git('add', '.'); git('commit', '-qm', 'base'); const base = git('rev-parse', 'HEAD');
    for (const name of ['used', 'unused', 'custom']) write(`sections/${name}.liquid`, liquid('Theme', [setting], name === 'custom' ? 'custom code' : 'base'));
    git('add', '.'); git('commit', '-qm', 'theme'); const theme = git('rev-parse', 'HEAD');
    git('checkout', '-q', base);
    for (const name of ['used', 'unused', 'custom']) write(`sections/${name}.liquid`, liquid('Main', [setting, { type: 'checkbox', id: 'enabled', default: false }]));
    git('rm', '-q', 'sections/deleted.liquid'); git('add', '.'); git('commit', '-qm', 'source'); const source = git('rev-parse', 'HEAD');
    const sync = require(path.join(root, 'scripts/theme-base-sync.cjs'));
    const tree = sync.buildThemeMergeTree(base, theme, source, 'test', 'docs/base-update-history.md');
    const result = sync.composeThemeResultTree(tree, theme, source, base);
    const schema = name => JSON.parse(git('show', `${result.tree}:sections/${name}.liquid`).match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
    assert.equal(schema('unused').name, 'Main');
    assert.equal(schema('unused').presets[0].name, 'Main');
    assert.equal(schema('used').presets[0].name, 'Theme');
    assert.equal(schema('custom').presets[0].name, 'Theme');
    assert.deepEqual(JSON.parse(git('show', `${result.tree}:templates/index.json`)).sections.used.settings, { label: 'Saved', enabled: false });
    assert.match(git('show', `${result.tree}:sections/custom.liquid`), /^custom code/);
    assert.equal(git('ls-tree', result.tree, 'sections/deleted.liquid'), '');
    assert.deepEqual(result.blockingSchemaDifferences, []);
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});
