const { test, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
const root = fs.mkdtempSync(path.join(os.tmpdir(), 'icon-text-borders-'));
after(() => fs.rmSync(root, { recursive: true, force: true }));
for (const name of ['layout-flow-group-style', 'size-style']) {
  fs.writeFileSync(path.join(root, `${name}.liquid`), stripShopifyMetadata(fs.readFileSync(`snippets/${name}.liquid`, 'utf8')));
}
const engine = new (loadLiquid())({ root, extname: '.liquid' });
const source = (name) => stripShopifyMetadata(fs.readFileSync(`blocks/${name}.liquid`, 'utf8')).replace(/{%\s*content_for 'blocks'\s*%}/g, '{{ children }}');
const template = JSON.parse(fs.readFileSync('templates/index.json', 'utf8').replace(/^\/\*[\s\S]*?\*\//, ''));
const sectionConfig = Object.values(template.sections).find((section) => section.type === 'icon-with-text-custom');
const grid = Object.values(sectionConfig.blocks).find((block) => block.type === 'grid');

test('real homepage groups emit border-joining metadata without section.type', async () => {
  // Liquid section exposes id/settings/blocks, but no type property.
  const section = { id: 'template--123__icon_with_text_custom', settings: sectionConfig.settings };
  const children = [];
  for (const id of grid.block_order) {
    const html = await engine.parseAndRender(source('group'), { section, block: grid.blocks[id] });
    assert.match(html, /group--width-mobile-fill/);
    children.push(html);
  }
  const html = await engine.parseAndRender(source('grid'), { section, block: grid, children: children.join('') });
  for (const [name, value] of [['columns-desktop', 4], ['columns-tablet', 2], ['columns-mobile', 1], ['gap-desktop', 0], ['gap-mobile', 0]]) {
    assert.ok(html.includes(`data-${name}="${value}"`));
  }
});
