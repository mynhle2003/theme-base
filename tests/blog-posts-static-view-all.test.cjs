const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
const Liquid = loadLiquid();
const slot = stripShopifyMetadata(fs.readFileSync('snippets/section-content-slot.liquid', 'utf8'));
const engine = new Liquid({templates: {'section-content-slot': slot}});
const list = stripShopifyMetadata(fs.readFileSync('blocks/blog-list.liquid', 'utf8')).split('{% capture blog_list_items_content %}')[0].replace(/{% render[\s\S]*?%}/g, '');
const section = stripShopifyMetadata(fs.readFileSync('sections/blog-posts.liquid', 'utf8'))
 .replace(/{% content_for 'block', type: 'blog-list'[^%]*%}/g, '{{ list_output }}')
 .replace(/{% content_for 'block', type: 'view-all-button'[^%]*%}/g, '<a data-test-view-all>View more</a>')
 .replace(/{% content_for[^%]*%}/g, '');
function render(count, limit, selected = true, hidden = false) {
 const blog = selected ? {handle: 'kinetra', articles_count: count, articles: []} : null;
 const listOutput = hidden ? '' : engine.parseAndRenderSync(list, {
  section: {settings: {blog}}, block: {settings: {max_posts: limit}}, use_section_blog: true
 });
 return engine.parseAndRenderSync(section, {section: {settings: {blog}, blocks: []}, list_output: listOutput});
}
test('static list absent from section.blocks: 4 posts with max 3 shows View more', () => {
 assert.match(render(4, 3), /data-test-view-all/);
});
test('equal, below, missing blog and hidden static list omit View more', () => {
 for (const n of [0, 2, 3]) assert.doesNotMatch(render(n, 3), /data-test-view-all/);
 assert.doesNotMatch(render(4, 3, false), /data-test-view-all/);
 assert.doesNotMatch(render(4, 3, true, true), /data-test-view-all/);
});
test('normalized fallback limit is respected instead of assuming three', () => {
 for (const v of [undefined, 0, 99]) {
  assert.doesNotMatch(render(4, v), /data-test-view-all/);
  assert.match(render(5, v), /data-test-view-all/);
 }
 assert.doesNotMatch(render(4, 5), /data-test-view-all/);
 assert.match(render(6, 5), /data-test-view-all/);
});
