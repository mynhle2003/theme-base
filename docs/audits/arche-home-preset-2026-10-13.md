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
| Materials hero | `materials_hero` / `hero` + `group` → `marquee` → `_marquee-heading` | Existing background reused; custom 64px marquee headings; tertiary Explore now; calibrated Medium 700px minimum | Custom 32px marquee headings; calibrated Medium 500px minimum |
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
| Materials hero 700px desktop / 500px mobile, with exact top/bottom distribution | Hero Medium is calibrated to 700px desktop / 500px mobile; spacers approximate the content distribution; existing background reused | Hero does not expose independent top/bottom slots. Content may expand the minimum height; exact distribution remains approximate. See `arche-hero-preset-2026-10-13.md`. |
| News articles in two full-width rows, media on the right at desktop; Figma article titles/authors/dates | Native Blog list shows 2 desktop columns and media on the left, stacking media first on mobile. Copy comes from the already selected blog. | Blog list's minimum desktop column count is 2; Blog card has no media-order setting. Resource article copy cannot be rewritten through a page preset. |
| Exactly four desktop / two mobile gallery images visible, responsive to viewport | Marquee retains six selected images, with 462px desktop / 182px mobile slots. At reference widths the intended visible counts are approximated. | Marquee exposes fixed pixel widths, not viewport-driven column counts; mobile ideal width 181.5px was rounded to 182px. |
| Disabled static children survive adding a preset | The actual home template preserves disabled Header/Eyebrow/Text/accelerated-checkout states. Disabled nodes in schema presets are represented with empty content/settings. | Shopify schema presets reject the `disabled` property. In particular, accelerated checkout visibility may need to be disabled in Theme Editor after adding the Featured product preset. |

These gaps are documented, not implemented with custom code. A visual match is not certified until the unselected media and storefront/Theme Editor verification are completed.


## Authorized media and custom block update — 2026-10-13

The owner subsequently requested the preset label `Images card (custom)`, root `@theme` support for sections whose resolved section/preset name contains `(custom)`, and binding the three Figma collection-card images. These later instructions supersede the original configuration-only media/allow-list exclusions for this scope.

- Bound the verified AVIF Files `arche-collection-top-half-outfit`, `arche-collection-bottom-half-outfit` and `arche-collection-the-footwear` to `image_cards → cards → card_1/card_2/card_3 → card.settings.image` and the matching three preset cards in `sections/custom-section.liquid`. Mobile uses the desktop image fallback, matching the Figma source. File IDs and CDN URLs are in the ignored `.shopify/media/arche-collection-list/receipt.json`.
- Renamed the first custom-section preset to `Images card (custom)`. The section schema title remains Custom section; the requested name applies to the add-section preset.
- Changed root block allow-lists in custom-section, gallery-custom, icon-with-text-custom, text-marquee-custom, promo-grid-custom, contact-form-custom and image-comparison-custom to `@theme`. Comparison-table and both testimonial custom sections already accepted `@theme`; existing app support is retained. Nested block allow-lists and placement remain unchanged. The shared rule is in the build-theme Section Contract and local theme-customization-policy.
- Verified unpublished Arche draft `192282820907` on `layouthub-template-v2.myshopify.com`. Pulled the eight remote files into an ignored audit directory, applied only requested schema/media fields to those copies, uploaded seven schemas first and homepage separately with explicit theme/only/nodelete, then pulled and compared all eight files semantically. Other remote composition/settings and Liquid/CSS/JS are preserved; no publication or Git commit/push.
- Browser: fresh Theme Editor session shows all three desktop card images and the first mobile image after reload; Save is disabled. Root Add block exposes public block groups beyond the former allow-list. Full add/duplicate/reorder lifecycle and every arbitrary theme block's resource context were not exercised.
- Validation: all section schemas and home JSON parse; git diff --check passes. Theme Check has 0 errors / 12 warnings (five settings-count and seven scoped CSS warnings in unrelated product blocks). `check-custom arche-theme` reports the existing local collection-tabs implementation is not recorded in its customization table; that unrelated implementation was not uploaded by this task.
- Essen transfer is documented under `ARCHE-ESSEN-CUSTOM-SECTIONS-001` in `docs/variant-updates/arche-to-essen.md`, pending. No code/store changes were made to Essen, and Arche preset names/images are excluded from that transfer.


## New release catalog and preset follow-up — 2026-10-13

The user confirmed desktop `46306:2086` and mobile `46339:2274` as the target after the initial request named Hotspot: Product callout. These nodes are New release; the separate `shop_the_look` hotspot section was not changed. Applied the supplied build-preset and store-content-media skills.

- Uploaded the exact square Figma banner source as verified 1000 × 1000 AVIF, `arche-new-release-banner.avif` (MediaImage `46593806893355`). Bound it to the existing Banner block, the existing Featured collection: Banner preset and the new collection image.
- Audited existing collections: Trending this week - Essen contains four products; New collection - Essen contains nine with a different order. No Arche collection existed. Created Online Store manual collection [New release Arche](https://admin.shopify.com/store/layouthub-template-v2/collections/535127621931), handle `new-release-arche`, without changing Essen collection membership.
- Reused all six existing Figma products, ordered SH 04 Sand → ST 02 Black → TS 01 Regular Anthracite → SH 01 Blueberry → LT 07 White / Blueberry → TP 01 Straight Black. No duplicate products or invented compare-at prices. Preserved stock and variants.
- Added the missing `custom.material` display values Premium Nappa and Punti di Roma to LT 07 and TP 01; read back both values and verified the storefront text.
- Changed only the target instance and existing section preset: banner/resource binding, desktop row gap 28 → 32px and mobile column gap 8 → 12px. Retained 24px desktop columns, 24px mobile rows, 40/36px section gaps and 96/56px bottom padding. No Liquid/CSS/JS implementation or global settings changes.
- Existing Shopify theme dev synchronized local configuration to unpublished Arche draft `192282820907`. A stale editor save raised a customization conflict; refreshed to current saved data instead of overriding concurrent changes. Reload verified banner, New release Arche and 32/12px controls with Save disabled.
- Desktop at 1920px and mobile at 375px: seven images loaded; square banner at left / above grid; two product columns; correct titles, prices, order and material. Desktop content viewport is 1905px and mobile 360px because Chrome reserves a 15px scrollbar. Proof and IDs are in ignored `.shopify/media/arche-new-release/receipt.json`, `desktop-proof.png`, `mobile-proof.png`.
- Validation: all section schemas and home JSON parse; requested preset settings use existing IDs/options; skill frontmatter/reference links and git diff whitespace pass. Theme Check: 0 errors / 12 existing warnings. No publication, Git commit or Git push.

Remaining differences within the configuration-only boundary: mobile uses one 36px shared gap for both heading-to-banner and banner-to-grid (Figma requests 36px then 32px); New badge is missing, Sale badge style differs, and mobile quick-add buttons remain visible because these are shared Theme Settings. Card text spacing/weight and badge geometry also use shared tokens. Existing product galleries were reused; this task does not certify four images per product or full catalog enrichment. Figma MCP View-seat call limit prevented the final TP 01 raw-source export; its reference screenshot and loaded storefront image were compared.

Updated the source setup-store skill and its Collections reference: authorized Figma setup may create a template-specific collection when no corresponding collection exists, after duplicate/membership audit; audit-only requests remain read-only and collection creation does not authorize theme publication.


### Square-image seam trial — 2026-10-13

Owner requested trying media dimensions before changing Image card CSS. The temporary 1px CSS bleed was fully reverted locally and on draft (readback verified). Generated three center-cropped 592×592 AVIF images from the preserved Figma sources; uploaded, bound to homepage/preset and read back. The thin dark top seam remains visible with these square images in desktop preview, so changing dimensions alone has not fixed it. Current draft retains square trial images and original CSS. Receipt and screenshot: ignored `.shopify/media/arche-collection-list/receipt.json` and `square-preview.png`.


### Final seam fix and naming — 2026-10-13

Owner subsequently authorized the scoped Image card CSS bleed. Draft block readback verifies inset -1px and width/height +2px; desktop and mobile 375px previews no longer show the dark top seam. Original square trial images remain. Variant update `ARCHE-ESSEN-IMAGE-CARD-001` is pending; every receiving variant must reproduce its defect/gap before applying any documented update.

Final requested preset label: `Image cards: carousel (custom)`. Per the owner clarification, only the preset name changes; section schema name stays `t:general.custom_section` (Custom section). The `(custom)` preset retains root `@theme` support.

Homepage instance `image_cards.name` is now `Image cards: carousel (custom)` per owner request; section schema title remains Custom section. Media, settings, block IDs and order are unchanged.
