const { test, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { chromium } = require('playwright');
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
const columns = Object.values(sectionConfig.blocks).find((block) => block.type === 'columns');
const styles = ['columns', '_columns-column', 'group'].map(name => fs.readFileSync(`blocks/${name}.liquid`, 'utf8').match(/{% stylesheet %}([\s\S]*?){% endstylesheet %}/)[1]).join('\n') + fs.readFileSync('assets/section-icon-with-text-custom.css', 'utf8');
async function fixture({ desktop = 4, mobile = 1, horizontal = 0, vertical = 0, swipe = false, rounded = false, borderless = false } = {}) {
  const section = { id: 'icon_with_text_custom', settings: sectionConfig.settings };
  const children = [];
  for (let index = 0; index < 8; index++) {
    const block = structuredClone(columns.blocks[columns.block_order[index % 4]]);
    if (rounded) block.settings.corner_radius = 'rounded';
    if (borderless && index === 1) block.settings.border_thickness = 0;
    const icon = block.blocks.icon.settings.custom_icon;
    const content = block.blocks.content;
    const copy = Object.values(content.blocks).map(item => item.settings.text).join('');
    const group = await engine.parseAndRender(source('group'), { section, block: content, children: copy });
    children.push(await engine.parseAndRender(source('_columns-column'), { section, block, children: icon + group }));
  }
  const block = structuredClone(columns);
  Object.assign(block.settings, { columns_desktop: String(desktop), columns_mobile: String(mobile), gap_horizontal: horizontal, gap_vertical: vertical, gap_horizontal_mobile: horizontal, gap_vertical_mobile: vertical, enable_swipe_mobile: swipe });
  const html = await engine.parseAndRender(source('columns'), { section, block, children: children.join('') });
  return `<style>* { box-sizing:border-box } :root { --radius-square:0px; --radius-rounded:12px; --border-color:#e6e6e6; } ${styles}</style><div class="icon-with-text-custom__content">${html}</div>`;
}
test('homepage and preset put Icon and content Group directly in Column', () => {
  const schema = JSON.parse(fs.readFileSync('sections/icon-with-text-custom.liquid', 'utf8').match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
  const presetColumns = schema.presets[0].blocks[0].blocks;
  for (const block of [...Object.values(columns.blocks), ...presetColumns]) {
    assert.deepEqual(Object.values(block.blocks).map(child => child.type), ['icon', 'group']);
    assert.equal(block.settings.height, 'fill');
    assert.equal(block.settings.border_thickness, 1);
    assert.equal(block.settings.padding_top, 64);
    assert.equal(block.settings.padding_top_mobile, 40);
  }
});
test('rendered zero gaps and border color reach Columns/Column metadata', async () => {
  const html = await fixture();
  for (const name of ['gap-desktop', 'gap-mobile', 'gap-vertical-desktop', 'gap-vertical-mobile']) assert.ok(html.includes(`data-${name}="0"`));
  assert.ok(html.includes('data-column-border="1"'));
  assert.ok(html.includes('--group-border-color: #e6e6e6'));
});
test('browser joins flush borders per axis and breakpoint while preserving spaced, rounded, borderless and swipe cards', async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage();
    const cases = [
      ...[2, 3, 4, 5, 6].map(desktop => ({ width: 1440, desktop })),
      { width: 900, desktop: 4 },
      ...[1, 2].map(mobile => ({ width: 390, mobile })),
      { width: 1440, horizontal: 12 }, { width: 390, vertical: 12 },
      { width: 1440, rounded: true }, { width: 390, borderless: true },
      { width: 1440, swipe: true }, { width: 390, swipe: true },
    ];
    for (const options of cases) {
      await page.setViewportSize({ width: options.width, height: 900 });
      await page.setContent(await fixture(options));
      const borders = await page.locator('.columns-column').evaluateAll(nodes => nodes.map(node => {
        const s = getComputedStyle(node); const r = node.getBoundingClientRect();
        return { left: parseFloat(s.borderInlineStartWidth), top: parseFloat(s.borderBlockStartWidth), right: parseFloat(s.borderInlineEndWidth), bottom: parseFloat(s.borderBlockEndWidth), height: r.height, border: node.dataset.columnBorder };
      }));
      const count = options.width >= 768 ? (options.desktop || 4) : (options.mobile || 1);
      const join = !options.rounded && !options.borderless && !(options.width < 768 && options.swipe);
      for (const [index, b] of borders.entries()) {
        const normal = Number(b.border);
        assert.equal(b.left, join && !options.horizontal && index % count !== 0 ? 0 : normal, JSON.stringify(options));
        assert.equal(b.top, join && !options.vertical && index >= count ? 0 : normal, JSON.stringify(options));
        assert.equal(b.right, normal); assert.equal(b.bottom, normal);
      }
      for (let i = 1; i < count; i++) assert.ok(Math.abs(borders[i].height - borders[0].height) < 0.1);
      assert.equal(await page.locator('.columns-column > .group').count(), 8);
    }
  } finally { await browser.close(); }
});
