# Rich text preset review — 2026-10-15

Requested workflow: `agents-build-themes/skills/build/preset/build-preset/SKILL.md`. Configuration only; no media work or deployment requested.

Compared fresh Figma design context and screenshots for desktop `47015:20496` and mobile `47228:13886` in file `bH9A5237I07NWt19Cua9gL`.

The existing working-tree preset already implements the closest available configuration. No section, template, global settings, media reference, or implementation was changed during this review.

| Design | Existing preset and homepage instance |
| --- | --- |
| Rich text, centered, white background | `rich-text`, scheme-1, centered; required static eyebrow/heading/text empty |
| Four phrases with three inline bags | One `editorial-text` block with exact copy and `[img1]`–`[img3]` markers |
| Urbanist regular, 44px desktop / 28px mobile, line-height 1.2, uppercase | Existing global display typography already supplies these values |
| Top padding 96px / 56px; bottom 0 | Exact section settings |
| Desktop content max-width 1024px | 1020px, nearest permitted 20px step |
| Image widths 112px / 62px | 110px / 60px, nearest permitted 10px step |

## Remaining gaps

- Only the existing first image reference `shopify://shop_images/mara-editorial-bag-1.avif` is selected. Slots 2/3 remain disabled and unselected. Their markers are removed by Liquid on the storefront. The first image's store availability and geometry were not reverified. No new media selected, downloaded, or uploaded.
- Figma uses wrapping flex items with desktop column/row gaps 16px/20px and mobile 6px/12px. The current block uses inline text/images; it has no phrase gap or phrase keep-together controls. Exact two-row desktop and four-row mobile wrapping is unverified.
- Figma tracking is 2px; the existing display token is -1.28px. No block tracking setting exists, and global typography is outside this preset task.
- Figma image boxes are 112×80px desktop and 62×44px mobile with individual crop transforms. Existing inline images have automatic height with no ratio/crop setting.
- Storefront visual comparison remains pending: localhost:9300 refused connection. No preview watcher or theme push was started.

## Validation

- Original preset name `t:general.rich_text` retained and unique; base `main` has no category for this preset, so none added.
- Preset and `templates/index.json` instance `rich_text_story` have matching section and editorial settings. Homepage instance is currently enabled.
- All configured setting IDs, select options, and range values validated against current section/block schemas.
- Shopify Theme Check: 0 errors, 6 existing warnings (settings count in bundle summary, comparison features/column, editorial text, group; complexity in css-variables).
- Full Figma fidelity remains incomplete because of the media and control gaps above.

## Media completion — 2026-10-15

User requested the remaining two images. Successfully retrieved original Figma PNGs and node exports for `47028:23188` / `47028:23191`. Prepared transparent 1120×800 AVIFs using the source fill transforms; visually inspected and decoded both. Uploaded `mara-editorial-bag-2.avif` (MediaImage 46660335993131) and `mara-editorial-bag-3.avif` (MediaImage 46660335960363) to layouthub-template-v2.myshopify.com. Shopify file editor dimensions, thumbnails, permanent CDN links and saved Vietnamese alt text verified. Enabled and bound both slots in the section preset and homepage instance. Earlier missing-image statements above describe the pre-upload review and are now resolved. No manual theme push or Theme Editor configuration save performed; any independently running preview watcher was not managed in this task.
