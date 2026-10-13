const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
const engine = new (loadLiquid())({ fs: {
  resolve: (_root, file) => path.resolve(__dirname, '../snippets', `${file}.liquid`),
  exists: async (file) => fs.existsSync(file),
  readFile: async (file) => stripShopifyMetadata(fs.readFileSync(file, 'utf8')),
} });
engine.registerFilter('t', key => key);
const source = stripShopifyMetadata(fs.readFileSync(path.join(__dirname, '../snippets/product-badges.liquid'), 'utf8'));
const render = (tags, overrides = {}) => engine.parseAndRender(source, {
  product: { available: true, price: 100, compare_at_price_max: 100, tags, collections: [] },
  settings: {}, context: 'product-card', show_tags: true, ...overrides,
});
const tones = html => [...html.matchAll(/class="product-badge product-badge--([^"]+)"/g)].map(match => match[1]);

test('status tags do not duplicate badges or consume the custom tag limit', async () => {
  const html = await render(['Sale', 'soldout', 'Sold out', 'sold-out', 'badge: Sale', 'New', 'Second', 'Third']);
  assert.deepEqual(tones(html), ['tag', 'tag-secondary', 'tag']);
  assert.match(html, /New/);
  assert.match(html, /Third/);
  assert.doesNotMatch(html, /Sale|soldout|Sold out|sold-out/);
});

test('disabled, empty and blank-only card tags omit empty badge wrappers', async () => {
  for (const html of [await render(['New'], { show_tags: false }), await render([]), await render([' ', 'badge:', 'BADGE:  '])]) {
    assert.equal(html.trim(), '');
  }
});

test('card tags strip legacy prefixes, escape HTML and stop after three nonempty labels', async () => {
  const html = await render([' ', 'BADGE: New', '<script>alert(1)</script>', 'Third', 'Fourth'], {
    settings: { badge_custom_enabled: true }, show_manual_badges: true,
  });
  assert.deepEqual(tones(html), ['tag', 'tag-secondary', 'tag']);
  assert.match(html, /New/);
  assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
  assert.doesNotMatch(html, /BADGE:|Fourth|product-badge--manual|<script>/);
});

test('tags coexist with status badges and sold out retains precedence over sale', async () => {
  const product = { available: false, price: 100, compare_at_price_max: 200, tags: ['New'] };
  assert.deepEqual(tones(await render([], { product })), ['sold-out', 'tag']);
  assert.deepEqual(tones(await render([], { product: { ...product, available: true } })), ['sale', 'tag']);
  assert.deepEqual(tones(await render([], { product, show_sale_badge: false, show_sold_out_badge: false })), ['tag']);
});

test('product-page manual tags retain prefix-only behavior independently of Show tags', async () => {
  const html = await render(['Grouping', 'badge: Limited'], {
    context: 'product-page', show_tags: false, show_manual_badges: true,
    settings: { badge_custom_enabled: true },
  });
  assert.deepEqual(tones(html), ['manual']);
  assert.match(html, /Limited/);
  assert.doesNotMatch(html, /Grouping|product-badge--tag/);
});
