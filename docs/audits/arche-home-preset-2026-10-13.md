# Arche home preset — Figma configuration review

Date: 2026-10-13. Branch: `theme/arche-theme`.

## Scope and reference

Applied the user-supplied `agents-build-themes/skills/build/preset/build-preset/SKILL.md`. This is a configuration rebuild using existing implementations. No new sections, blocks, settings, Liquid markup, CSS, JavaScript, global settings, image downloads, store uploads, commits, or publication.

- Desktop: [46306:2048](https://www.figma.com/design/v6iKvP4OuW3y0A9bbxel5U/Essen?node-id=46306-2048), 1920 × 12305.
- Mobile: [46339:2235](https://www.figma.com/design/v6iKvP4OuW3y0A9bbxel5U/Essen?node-id=46339-2235), 375 × 10030.
- Evidence: full high-fidelity design context and screenshots for both frames; desktop/mobile dimensions confirmed by the screenshot tool.
- Per the user's follow-up, all section schema names and original preset names are preserved. No `Arche home:` names remain. Updated the first existing preset for each used section type; other presets remain unchanged. The three editorial instances share the existing Image text split layout type; its preset represents the first instance.

## Composition mapping

`templates/index.json` now contains 15 section instances for the 12 Figma regions. The three editorial rows and separate product heading account for the additional instances.

| Figma region | Template key / existing section type | Desktop configuration | Mobile configuration |
| --- | --- | --- | --- |
| Slideshow | `slideshow` / `slideshow` | Medium 950px; centered heading; tertiary Shop now; bullets; existing three slide media | Medium 800px; centered copy and bullets |
| Featured collection tabs | `collection_tabs` / `collection-tabs` | Horizontal section with vertical left tabs; 4 cards; 8px product gap; 96px section spacing | Horizontal tab navigation; 2 cards; 8px gap; 56px section spacing; progress pagination |
| Three collection cards | `image_cards` / `custom-section` + `carousel` → `slide` → `image-card` | 3 square cards; 24px gap; centered heading and Shop now | 1 square card per swipe; 16px gap; progress pagination |
| New release | `new_release` / `featured-collection-banner` | Header; left square Banner; 6 products in 2 columns; 40px section gap | Banner above products; 2-column product grid; 36px gap |
| Hotspot | `shop_the_look` / `hotspot` + static `product-callout` | Reuses selected shop-the-look image; 2 product hotspots; no overlay copy | Separate hotspot positions; adapt height |
| Press | `press` / `press` + static `press-quotes` | Centered eyebrow and 24px quote; 768px content width; three logo slots | Same quote hierarchy with inherited 20px typography; 100px logo slots |
| Three dark image/text rows | `editorial_1`…`editorial_3` / `image-text-split-layout` | Page width; #111 background; text left/image right; 64px column gap; 40px headings; Shop our collection | All three rows stack in reading order; 32px gap; 32px headings; 56px section spacing |
| Item of the week | `featured_product_heading` / `rich-text`, then `featured_product` / `featured-product` | Heading then existing product, two media items, details and buy controls; 64px media/details gap | Existing two-item media carousel and commerce controls; 36px heading-to-product spacing |
| Four service cards | `icon_with_text_custom` / `icon-with-text-custom` + `grid` → `group` | 4 columns; white background; individual borders; 24px icons; 18px headings | 1 column; 40px vertical/24px horizontal card padding; inherited 16px headings |
| Materials hero | `materials_hero` / `hero` + `group` → `marquee` → `_marquee-heading` | Existing background reused; custom 64px marquee headings; tertiary Explore now; Medium 720px minimum | Custom 32px marquee headings; Small 480px minimum |
| Our news | `blog_posts` / `blog-posts` + `blog-list` → `blog-card` | Existing selected blog; 2 articles; horizontal image/content cards; description and Read more | 1 column; card media stacks above content |
| Everyday looks | `gallery_custom` / `gallery-custom` + heading and existing image `marquee` | Heading; 40px content gap; 462px square images; 24px image gap; retained existing six images | 36px content gap; 182px images; 12px image gap; native scrolling |

## Configuration checks

- Validated 277 section/block configurations across the home template and updated schema presets: existing setting IDs, select options, range bounds/steps, checkbox types, child allow-lists including explicit static block calls, dynamic order, and block/section limits. Passed.
- All section names and preset names match their previous values. Existing schema definitions, options, limits, placement guards, and non-preset schema fields remain identical. Passed.
- Every changed Liquid file is unchanged outside `{% schema %}`. Passed.
- `shopify theme check --path . --output json`: **0 errors, 5 existing warnings**. Warnings concern excessive setting counts in unchanged `_bundle-summary`, `_comparison-table-features`, `carousel`, `comparison-table-column`, and `editorial-text` blocks.
- `node theme-base check-custom arche-theme`: customization record covers 129 existing custom files. No new implementation customization needed.
- `git diff --check`: passed.
- Existing slideshow fixed scales are already 950px desktop / 800px mobile at Medium, matching the supplied Figma sections. No height calibration or customization-record edit was needed.

Desktop/mobile behavior was reviewed against each Figma frame and the existing responsive Liquid/CSS contracts. **Storefront rendering, overflow, exact wrapping and Theme Editor add/duplicate/save/reload were not verified**: the local preview at `127.0.0.1:9292` was inaccessible. No preview/upload was started as part of this configuration-only task.

## Remaining visible gaps — custom follow-up unimplemented

| Figma expectation | Current configuration / existing behavior | Missing control or constraint |
| --- | --- | --- |
| Exact reference photos, product imagery and press logos | Existing media/data references retained for equivalent regions. Third collection card, New release banner, three editorial images and three press logos are unset. All reusable presets leave resource selectors unset. | Selecting/fetching reference media is outside the requested preset skill scope. Existing images are not asserted to match Figma. |
| Slideshow arrows beside the pagination | Native arrows sit at the horizontal sides and are hidden on mobile. Bullets provide the closest native pagination shape. | No bottom inline-arrow positioning control. |
| Slideshow heading 64px desktop / 32px mobile | Existing XL heading token is 64px desktop / 40px mobile. | Shared Heading has no independent mobile font-size setting. Global typography was not changed. |
| Left-border vertical tabs; no desktop collection pagination but visible mobile progress | Native underline tabs with vertical desktop navigation. Pagination remains enabled to preserve the required mobile bar; stored padding is 48px desktop / 36px mobile. | Tab controls do not expose the reference's left-border style. `show_pagination_on_desktop` gates markup for both viewports, so it cannot independently hide desktop pagination. |
| Precise New release banner proportions and card data | Square banner with 2-column, 6-product native grid; existing collection reused | Banner/grid split and product source are governed by the existing section; no new media/data selected. |
| Exact hotspot image crop, popup placement and coordinates | Existing image with desktop/mobile position settings; coordinates approximate the design slot | Exact geometry requires the final reference media and rendered viewport comparison. |
| All three editorial images and precise text wrapping | Native split layouts with unset square media, 64px desktop text inset and 40px/32px headings | Existing page-width token and final selected images determine final geometry. No global width changes or image selection. |
| Four Iconsax service symbols; shared thin seams | Native library truck, arrow-left, chat-bubble and check icons; each group has its own border | Exact symbols require custom icons. Border setting applies to all four sides, so adjacent desktop cards have double seams. |
| Materials hero 700px desktop / 500px mobile, with exact top/bottom distribution | Native Medium 720px / Small 480px minimum heights; spacers approximate the content distribution; existing background reused | Hero does not expose pixel heights or independent top/bottom slots. Only slideshow height calibration is allowed by this skill. Content may expand the minimum height. |
| News articles in two full-width rows, media on the right at desktop; Figma article titles/authors/dates | Native Blog list shows 2 desktop columns and media on the left, stacking media first on mobile. Copy comes from the already selected blog. | Blog list's minimum desktop column count is 2; Blog card has no media-order setting. Resource article copy cannot be rewritten through a page preset. |
| Exactly four desktop / two mobile gallery images visible, responsive to viewport | Marquee retains six selected images, with 462px desktop / 182px mobile slots. At reference widths the intended visible counts are approximated. | Marquee exposes fixed pixel widths, not viewport-driven column counts; mobile ideal width 181.5px was rounded to 182px. |
| Disabled static children survive adding a preset | The actual home template preserves disabled Header/Eyebrow/Text/accelerated-checkout states. Disabled nodes in schema presets are represented with empty content/settings. | Shopify schema presets reject the `disabled` property. In particular, accelerated checkout visibility may need to be disabled in Theme Editor after adding the Featured product preset. |

These gaps are documented, not implemented with custom code. A visual match is not certified until the unselected media and storefront/Theme Editor verification are completed.
