<!-- theme-base-sync-state: {"sha":"89321f5ebbd78e1144eae1a31adbef4679bd9cd3"} -->
# Customization record: assen-theme

Theme branch: `theme/assen-theme`
Personal base at creation: `fa304936dd536d9d2d7ac46f9b2361947c955ce0`
Theme update source: this repository's `main` branch
Team base source for personal main: https://github.com/Chieu2507/shopify-theme-base (only `main` or `dev`)

Record every theme-specific change here before committing the code. During base updates, review any overlapping paths and describe the expected behavior before resolving.

## Customizations

| File/path | Base behavior | Theme-specific behavior | Reason | Update/merge rule |
| --- | --- | --- | --- | --- |
| `blocks/countdown-timer.liquid` | Countdown unit widths are measured from content; layout uses rem gaps/padding, minimum heights, muted labels and generic label tracking. | Essen With labels uses 112px cards/16px gaps on desktop and 72px cards/12px gaps on mobile, 16px vertical padding, 10px/15px labels with 2.4px tracking and full inherited text color; numbers use 1.2 line-height and -0.8px tracking. CSS owns labelled widths; other styles retain measured widths. | Match Essen desktop/mobile countdown design with explicit px geometry on this theme branch. | Preserve labelled-card CSS and runtime width exclusion; review upstream layout/typography/runtime overlaps before merging. Keep editor color and number-size settings functional. |
| `sections/slideshow.liquid` | Progress bar segments stretch across the content width, use a 4px gap, translucent tracks and a taller active segment, with shared desktop/mobile bottom offsets. | Only Progress bar uses Figma's 50px × 2px segments, 16px gap, solid #666 tracks, active-slide heading color fill and 40px visual bottom offset on desktop/mobile. Each segment retains a 24px click target; existing position settings and autoplay runtime remain in use. | Match Essen's Slideshow Segment progress pagination without changing Bullets, Numbers or other carousels. | Preserve scoped progress-bar styles; review upstream pagination markup/CSS and autoplay changes, then verify responsive alignment, keyboard focus, click targets, single-slide hiding and progress fill. |
| `blocks/icon.liquid` | Personal main accepts Icon width from 6px on desktop and 8px for the mobile override; smaller values fall back to 24px. | Assen accepts 4–100px for both desktop and mobile Icon width in schema and Liquid validation; default remains 24px. | Allow small decorative icons and custom SVG separators in this theme. | Preserve the 4px minimum in both schema ranges and Liquid guards; review upstream Icon sizing/mobile changes before merging and verify 4px, 100px, defaults and invalid-value fallbacks. |
| `sections/icon-with-text-custom.liquid` | No icon-with-text-custom section in personal main. | Custom icon/text section renders editable Grid blocks, supports page/full-width containers, optional background color or responsive cover image, and scoped inline CSS for alignment, content gap and vertical padding with optional mobile overrides below 768px. | Provide the Assen homepage icon-and-text composition with merchant-editable layout and background controls. | Preserve this local section and theme preset values; review changes to shared Grid/block contracts, container widths, color schemes and spacing before merging, and verify desktop/mobile layout and Theme Editor block behavior. |
| `sections/zoom-image-banner.liquid` | No zoom banner section in personal main. | Custom editorial image/text overlay matching Essen Figma desktop/mobile, 80px vertical spacing, a 768px content cap, shared Group/Header/Eyebrow/Heading/Button blocks and native scroll zoom controls. | Recreate the referenced custom section on the Assen homepage after Featured product. | Keep theme composition and image selections; review upstream changes to shared block contracts and background media before merging. |
| `blocks/scrolling-image.liquid` | No scrolling-image block in personal main. | Editable foreground image, optional mobile source, 550px desktop cap, 600:700 ratio, 10% overlay and responsive image snippet; mobile fills the section container. | Match the Figma foreground geometry without changing the global Image kernel. | Preserve this local block; reconcile shared image snippet changes and validate crop, alt text and editor attributes. |
| `assets/section-zoom-image-banner.css` | No dedicated zoom banner stylesheet. | Layers image and content in one grid, clips foreground zoom, inherits theme typography/buttons/schemes and mobile margins. | Match desktop/mobile layout while preserving shared tokens. | Keep scoped styles; check container and block class changes from main at desktop/mobile widths. |
| `assets/section-zoom-image-banner.js` | No dedicated zoom banner runtime. | Instance-local custom element reveals the foreground clip-path from 0% to 100% as the image enters the viewport and its center reaches viewport center, easing scale from 1.12 to 1. Uses native scrolling, time-based damping, visibility gating, reduced motion, editor selection reset and listener/observer cleanup. | Match the requested entry-to-center reveal and smooth scroll interaction across wheel, touch, keyboard and high refresh rates. | Preserve native scroll behavior; verify lifecycle and motion preferences when main changes runtime conventions. |

| `blocks/blog-card.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/carousel.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/collection-card.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/collection-thumbnail.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/first-card.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/image-card.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/image-comparison.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/image.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/press-item.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/product-callout-gallery.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/video.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `sections/image-text-stacked-bands.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `snippets/_overlay-media-ratio.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `snippets/css-variables.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. Navigation Rounded additionally maps to 6px instead of the shared 8px rounded token. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. Preserve the navigation-only 6px mapping; keep other radius tokens unchanged. |
| `snippets/image-ratio-value.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `snippets/product-card.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |


| `blocks/_product-media.liquid` | Desktop offers thumbnail rails/static grids; mobile offers one-image slider or thumbnails. | Adds Carousel 2 items to desktop and mobile layout with validated Liquid values and mobile pagination controls. Main gallery controls use the theme Figma long-arrow SVG. | Match Featured product Essen desktop/mobile media composition. | Preserve additive layout values and guards; review upstream media markup, variant filtering and schema changes. Preserve the long-arrow control rendering. |
| `assets/product-media.js` | Carousel shows one media except the existing Quick Add strip. | Two-item modes show up to two visible media, hide thumbnails and hide controls/pagination when there is no overflow; reuse Swiper, variant filtering, zoom and breakpoint lifecycle. | Enable two-image swiping and desktop arrows without changing other modes. | Review upstream gallery initialization/filtering/lifecycle changes and verify zero/one/two/many media and breakpoint rebuilds. |
| `assets/product-media.css` | Desktop non-thumbnail modes render static grids; mobile slider hides thumbnails. | Two-item desktop mode retains the Swiper flex rail and arrows; both two-item modes hide thumbnails and offer a horizontal two-item fallback without JS. Main product images use a 4:5 frame with cover cropping on desktop/mobile, excluding overlay galleries. | Preserve carousel geometry and access before runtime initialization. | Preserve scoped two-item selectors and exclusions from static rules; verify other gallery layouts and preserve the 4:5 main-image frame after upstream CSS changes. |

| `snippets/carousel-navigation-icon.liquid` | Long arrow uses a 24px viewBox and generic stroked paths. | Long arrow uses the exact two filled paths from the Figma 14px arrow-left asset, mirrors the next direction and inherits currentColor. Other icon options retain their paths. | Match Essen navigation SVG. | Preserve the long-arrow geometry, 14px size, inherited color and directional mirroring when merging upstream icon changes. |

### 2026-10-05 — Navigation Rounded and Figma arrow

- Reference: Figma file `v6iKvP4OuW3y0A9bbxel5U`, navigation `46132:465`; inspected authenticated Dev Mode properties: Rounded radius 6px, arrow asset 14 × 14px, 12px padding. Arrow source `46136:385` supplies the two exact filled SVG paths.
- `snippets/css-variables.liquid` maps only Navigation Rounded to 6px. Square, Slightly rounded, Pill and all other shared rounded tokens retain their current mappings.
- `snippets/carousel-navigation-icon.liquid` replaces `long_arrow` with the Figma SVG geometry. Color inherits the control's currentColor; Next mirrors the left arrow. The source paths already encode thickness and rounded endpoints, so this asset retains Figma geometry rather than using global stroke width.
- Product media main-gallery controls select `long_arrow` to use the same asset. Other existing long-arrow consumers receive the shared replacement; Chevron and Arrow choices remain available.
- Current theme settings and the saved theme preset select `radius_navigation: rounded`. This selection is configuration, not custom implementation.

### 2026-10-05 — Product media main-image ratio

- Owner request: main product images in Product media use a custom 4:5 ratio on this theme.
- `assets/product-media.css` frames main image figures at `4 / 5` and fills them with `object-fit: cover` at desktop/mobile widths. This applies to Featured product and the product-page Product media block; thumbnails, videos/models, lightbox and Quick Add/Quick View overlay ratios retain their existing contracts.
- Review upstream main-image and gallery CSS changes before merging; preserve the frame and cover crop. No schema or preset setting is added for this fixed theme customization.

### 2026-10-05 — Featured product Carousel 2 items

- References: Figma `v6iKvP4OuW3y0A9bbxel5U`, desktop `46002:6185`, mobile `46240:8732`; both visually inspected. Desktop shows two adjacent media with previous/next controls; mobile shows two adjacent media above the base progress bar.
- Plan: existing homepage Featured product supplies its selected product to the static Product media block. The block owns desktop/mobile layout; shared Swiper runtime owns movement and existing zoom/variant handling. No new section, block tree, data source or global design token is needed.
- Adds `carousel_two_items` to Desktop layout and mobile Layout style. Gap continues to use the block's desktop/mobile controls. Existing layout defaults remain unchanged.
- Everyday uniform preset and existing homepage instance select the new modes, disable next-slide preview, and select `mobile_pagination_type: progress_bar`. Pagination implementation remains unchanged from base; preset/template settings and locale labels are configuration, not custom code.
- Scope stays on `theme/assen-theme`. Preserve the pre-existing homepage blog `max_posts: 3` edit. No store upload, commit or push is included.
- Validation: Theme Check passed with zero errors (35 existing warnings), `git diff --check` and `check-custom assen-theme` passed. Production CSS/Swiper/runtime fixture verified a 1050px desktop rail with 521px slides and working Next/Previous controls; at 375px mobile the 343px rail shows two 167.5px slides, an existing 2px progress bar, hidden arrows and no page overflow. Automated gallery tests cover breakpoint rebuilds, hidden/one/two/many media, pagination and desktop pointer behavior. Live Shopify Theme Editor add/duplicate/save/reload was not exercised.

### 2026-10-05 — Zoom image banner

- Reference: Essen custom `sections/zoom-image-banner.liquid`; Figma file `v6iKvP4OuW3y0A9bbxel5U`, desktop `46136:5694`, mobile `46240:8812`.
- Placement: homepage immediately after `featured_product`. Both top-level blocks are editable; Group contains Header (Eyebrow + Heading) and Button. Maximum two top-level blocks. No resource context or app slot is required.
- Section owns composition, external spacing, background and scroll behavior; foreground block owns image source/ratio/width/overlay; shared blocks and Theme Settings own typography and buttons.
- Figma source images were converted to AVIF and uploaded to `layouthub-template-v2.myshopify.com` Files: `assen-zoom-background.avif` and `assen-zoom-portrait.avif`. Only the homepage instance selects the uploaded image picker references; the reusable section preset leaves all image pickers blank. No image assets are committed.
- Empty media uses the shared image placeholder. JavaScript disabled, reduced motion and selected editor blocks retain the full visible image at scale 1. Content stays in document order and the CTA remains keyboard accessible.
- Preset/template composition is recorded for context and is not classified as custom implementation.
- Reusable preset explicitly sets Group backdrop blur to `0` and height to `fit`, with no selected images. The homepage retains its AVIF selections.
- Store operation ledger: uploaded background MediaImage `46371151282475` and foreground MediaImage `46371153019179`; synchronized only the two new Liquid files, CSS/JS assets and `templates/index.json` to development theme `191894126891`. Schema uploaded before the initial homepage template. Subsequent corrections stayed within these five files. Final remote code, homepage instance and order were read back and matched local files. Existing homepage differences were only Shopify removing empty `block_order` arrays. Rollback scope is this homepage instance and these custom files; uploaded Files remain owned by the store.
- Validation: Theme Check passed with no errors (35 existing warnings); JavaScript syntax and `git diff --check` passed. Motion tests cover entry/center endpoints, reverse scrolling, instance isolation, reduced/disabled motion, editor selection and disconnect cleanup. Storefront inspection confirmed both Shopify CDN images, desktop 550 × 641.66px, mobile 343 × 400.16px, 80px vertical padding, 40/32px headings and 44/40px buttons. Preview console had no errors.
- Whole-branch `check-custom assen-theme` still reports the pre-existing `sections/icon-with-text-custom.liquid` as undocumented. All four new implementation files are recorded above. Theme Editor add/duplicate/save lifecycle was not exercised manually; selection and teardown were verified in the runtime tests.

### 2026-10-05 — Icon width minimum (theme custom)

- Owner request: allow a minimum Icon width of 4px specifically for `theme/assen-theme`.
- Implementation: `blocks/icon.liquid` changes desktop/mobile range minima and matching Liquid lower-bound guards to 4px. Maximum 100px, step 1px, default 24px and mobile inheritance stay as before. No changes to the shared icon snippet are required because this block supplies size through its own scoped CSS variables.
- Preset/template SVG selections are configuration; Scrolling Text Images remains 6px and Collection list remains 12px. Changing the minimum does not resize existing icons.
- During base updates, review this implementation overlap rather than replacing the theme block with main's version.

### 2026-10-05 — Slideshow Progress bar pagination

- Reference: Figma file `v6iKvP4OuW3y0A9bbxel5U`, desktop Slideshow `46002:5727` / pagination `46002:5738`, mobile Slideshow `46240:8475` / pagination `46240:8481`; both use the Segment progress component.
- Scope: local CSS in `sections/slideshow.liquid`, only for `pagination_type = progress_bar`. Three slides produce a centered 182px group (three 50px bars and two 16px gaps). Bars may shrink in narrow containers; desktop/mobile position settings continue to align the group.
- Visual tracks are 2px high, pill shaped and #666 (Figma Variant/Bg Bar). The fill inherits the active slide's heading color through the existing control scheme/runtime and existing autoplay clock. RTL fill grows from the right.
- All custom progress pagination dimensions use explicit `px` units as requested, so their Figma measurements do not depend on the root font size.
- The visual bars sit 40px above the slideshow edge on both breakpoints. Transparent 24px-high buttons expand pointer/touch access without changing that visual position; existing labels, aria-current, focus outline, clicks and single-slide hiding are preserved.
- No schema, template, shared carousel CSS or JavaScript changes are required. During future base updates, review the section implementation overlap rather than overwriting the theme-specific pagination.
- Validation: Theme Check passed with no errors (35 existing warnings); `git diff --check` and `node theme-base check-custom assen-theme` passed. A local browser fixture using the production stylesheet, Swiper and Slideshow modules verified 50px × 2px bars, 16px gaps and a 40px visual bottom offset at 1920px desktop and 375px mobile, with no mobile overflow. Click and Enter changed the active slide/aria-current, and keyboard focus retained a visible outline. Shopify Theme Editor lifecycle was not exercised in this CSS-only change; the store preview supervisor was stopped during validation.

### 2026-10-05 — Countdown timer Essen appearance

- Reference: Essen Figma desktop group `46110:5940`, Time `46110:5941`, number `46110:5942`, label `46110:5943`; mobile group `46240:8712`, Time `46240:8713`, number `46240:8714`, label `46240:8715`.
- With labels cards: desktop 112px wide, 16px gaps, 496px group; mobile 72px wide, 12px gaps, 324px group. Both have 16px vertical padding, no horizontal padding or number-to-label gap. Cards shrink equally if the available parent is narrower.
- Number typography retains the block's font-size setting and heading family; the homepage's existing H2 setting supplies Poppins 40px desktop/32px mobile. Line-height is 1.2 with -0.8px tracking. Labels use the body family, 10px size, 15px line-height, 2.4px tracking, uppercase and full inherited text color. Existing homepage custom colors supply white text and #333 cards; radius/background controls remain functional.
- CSS owns With labels widths; `syncUnitWidth` skips content measurement for this style so font loading, ticking and resize cannot override responsive card sizing. Timer modes, localized labels, announcements and custom-element lifecycle retain their existing behavior. Inline and inline-superscript retain their own appearance.
- Scope: custom implementation only in this theme's `blocks/countdown-timer.liquid`; no changes to personal main or shared typography. Countdown's content Group uses `width: fit` in both the section preset and homepage template, as requested. These composition settings are configuration rather than custom implementation.
- Validation: Theme Check passed with zero errors (35 warnings), JavaScript syntax check, `git diff --check` and `check-custom assen-theme` passed. A local fixture using the block's production CSS/runtime verified 112 × 95px cards at 1920px; 72 × 85.39px cards, 12px gaps and 324px group at 375px; equal shrinking to 63px cards at 320px without page overflow. Live Shopify Theme Editor was not exercised.

### 2026-10-05 — Essen media ratio options and presets

- Owner request: audit ratio options on this theme branch, add missing 4:5 and 5:4 choices, and align the homepage presets with the inspected Figma desktop/mobile. Image/video media selectors are covered; color/variant swatch geometry is outside this image-crop request.
- Existing `portrait` already maps to 4:5, so it is retained. Add `ratio_5_4` with 1.25 rendering to media selectors; numeric Collections with tabs uses `1.25`. Collection thumbnails retain portrait 2:3 and gain explicit `ratio_4_5` and `ratio_5_4`. Numeric custom ratios in Scrolling image remain available.
- Render changes include shared image/overlay ratio resolvers, global product-card CSS variables and crop dimensions, image-card/collection-thumbnail CSS, and desktop/mobile Liquid mappings and validation. Existing `_product-media` customization additionally supports 5:4 thumbnail ratios. Schema-only consumers and presets are configuration, not implementation customizations.
- Figma evidence: desktop Featured collection 438 × 547.5; mobile 165.5 × 206.88; collection card desktop 453 × 566.25 and mobile 169.5 × 211.88. All use 4:5. The large desktop collection composition measures 741 × 950 (approximately 4:5); the first card fills the row height determined by the second card.
- Following the owner correction, the first Image card uses desktop `fill` in both the existing homepage and reusable section preset; the second card stays desktop 4:5. Both mobile cards remain 4:5. Global product-card ratio and Collection list already select portrait 4:5. Blog remains 4:3, Gallery and Shop the look large image remain 1:1, and Zoom foreground remains 6:7. Slideshow uses existing viewport height controls rather than a crop-ratio selector.
- Scope: `theme/assen-theme`; preserve pre-existing Carousel 2 items, product-media controls and blog max-posts changes. No commit/push included.
- Validation: 26 media selectors expose both requested ratios without duplicate values; 229 Liquid schemas and edited JSON validate. 54 actual Liquid render checks pass for desktop/mobile 4:5, 5:4 and existing square values; 27 focused overlay/banner tests pass. Theme Check passes with zero errors and 35 existing warnings; diff whitespace check passes.
- Existing `theme-settings` Footer social-link test also fails on a HEAD-only fixture and is unrelated to ratio changes. Whole-branch custom check currently reports concurrent, non-ratio edits without records: `assets/carousel-block.js`, `assets/slideshow.js`, `blocks/blog-list.liquid`, `blocks/collection-list-items.liquid`, `blocks/collection-tab.liquid`, `blocks/product-list.liquid`, `sections/hotspot-full-width-carousel.liquid`, `snippets/product-collection-grid.liquid`, `snippets/swiper-carousel.liquid`. All implementation paths changed for ratio support are recorded above. Live Theme Editor lifecycle was not exercised in this local schema/preset change.

## Base update decisions

| Base commit | Files reviewed | Decision and reason | Approved by/date |
| --- | --- | --- | --- |

## Base sync history

### 2026-10-05 — Update from personal main

- Previous main commit: `020c10f081adeda038ec99ef7b307ffc7d46ab07`
- Updated through main commit: `89321f5ebbd78e1144eae1a31adbef4679bd9cd3`
- Main commits included: 3
- Included main commits:
  - `1edc4f43ef37eb328c8f58e005d34a24295695e3` — chore(base): update base with 32 upstream commits through 6eacf7b7
  - `d426df565afbdec2a15c5305f0bcecac6b8a7b88` — fix(sync): preserve blank optional setting defaults
  - `89321f5ebbd78e1144eae1a31adbef4679bd9cd3` — fix(sync): allow option label changes without blocking updates
- Change summary:

```text
assets/cart-drawer.css                             |   1 +
 assets/collections-with-tabs.js                    |  16 +
 assets/component-overlay.css                       |   2 +
 assets/component-pagination.css                    | 161 +++++++++
 assets/critical.css                                | 260 ++++++--------
 assets/product-information.css                     |   8 -
 assets/product-media.css                           |  25 ++
 assets/product-media.js                            |   4 +-
 assets/section-collection.css                      | 152 +-------
 blocks/_collection-pagination.liquid               |  45 +--
 blocks/_header-menu.liquid                         |   6 +
 blocks/_product-media.liquid                       |  33 +-
 blocks/blog-archive-list.liquid                    |  19 +-
 blocks/blog-list.liquid                            |  13 +-
 blocks/blog-meta.liquid                            | 106 +++---
 blocks/blog-tag-filter.liquid                      | 232 +++++++++++++
 blocks/blog-title.liquid                           | 170 +++++++++
 blocks/collections-with-tabs-item.liquid           |   8 +-
 blocks/comments.liquid                             | 130 +++----
 blocks/content.liquid                              |   4 +-
 blocks/featured-image.liquid                       |  35 +-
 blocks/featured-post.liquid                        | 210 ++++++++---
 blocks/image-card.liquid                           |   2 +-
 blocks/pagination.liquid                           |  78 ++++-
 blocks/previous-and-next-posts.liquid              |  94 +++--
 blocks/product-buy-quantity.liquid                 |   8 +-
 blocks/tags-and-sharing.liquid                     |  28 +-
 docs/audits/article-reference-2026-10-05.md        |  26 ++
 docs/audits/blog-reference-2026-10-05.md           |  69 ++++
 .../collections-with-tabs-color-2026-10-05.md      |  33 ++
 docs/theme-customization-policy.md                 |   4 +-
 locales/en.default.json                            |  24 +-
 locales/en.default.schema.json                     |   4 +-
 scripts/theme-base-sync.cjs                        |  34 +-
 sections/article.liquid                            |  88 ++++-
 sections/blog-posts.liquid                         |  18 +
 sections/blog.liquid                               | 216 +++++++-----
 sections/collections-with-tabs.liquid              |  37 +-
 sections/featured-collection.liquid                |  19 +
 sections/related-posts.liquid                      | 386 +++++++++++++++++++++
 snippets/css-variables.liquid                      |   4 +-
 snippets/heading-size-token.liquid                 |  15 +
 snippets/media-card.liquid                         |   3 +-
 snippets/pagination-pages.liquid                   |  45 +++
 snippets/product-card-swatches.liquid              |  24 +-
 snippets/swatch-option.liquid                      |  31 ++
 snippets/swatch.liquid                             |   6 +-
 snippets/variant-picker.liquid                     | 101 +++---
 templates/blog.json                                |  11 +-
 tests/blog-archive.test.cjs                        |  79 +++++
 tests/blog-heading-schema.test.cjs                 |  33 ++
 tests/collections-with-tabs-color.test.cjs         |  75 ++++
 tests/product-controls.test.cjs                    | 102 ++++++
 tests/product-media-pagination.test.cjs            |  79 +++++
 tests/theme-base-sync.test.cjs                     |  80 +++++
 55 files changed, 2705 insertions(+), 791 deletions(-)
```


### 2026-10-05 — Update from personal main

- Previous main commit: `0eee77c2125c6fffe1a1c07566b2b534cad3c5ad`
- Updated through main commit: `020c10f081adeda038ec99ef7b307ffc7d46ab07`
- Main commits included: 1
- Included main commits:
  - `020c10f081adeda038ec99ef7b307ffc7d46ab07` — chore(base): update base with 2 upstream commits through 22b24b6b
- Change summary:

```text
assets/product-media.js              |   4 +-
 blocks/marquee.liquid                | 255 ++++++++++++++++++++++++++---------
 sections/text-marquee-custom.liquid  |  73 +++-------
 tests/product-media-pointer.test.cjs |  85 ++++++++++++
 4 files changed, 295 insertions(+), 122 deletions(-)
```


### 2026-10-05 — Update from personal main

- Previous main commit: `ed7468aa59d460c2d86cee8b7035487d1bb88bf8`
- Updated through main commit: `0eee77c2125c6fffe1a1c07566b2b534cad3c5ad`
- Main commits included: 6
- Included main commits:
  - `912e638889f2623658e6c63b44a83cb8f9ba64c9` — chore(base): update base with 14 upstream commits through 823f0b09
  - `497695b2f50993d3194f9b5f3aff6803ee10276b` — feat(sync): auto-push safe theme updates
  - `8a0e66d3ada9c00b072001e67c1919fd68c5d69b` — fix(sync): use normalized schema base for theme merges
  - `12ad4d12f0221c3e7fb1456e4db68b79b39c93e9` — fix(sync): allow settings without Shopify defaults
  - `733f16ea01962231dcf90add8f90599ee3afa735` — fix(sync): stream large diff patches to disk
  - `0eee77c2125c6fffe1a1c07566b2b534cad3c5ad` — fix(sync): stream full review diffs without buffering
- Change summary:

```text
assets/bundle-builder.js                       |  69 ++-
 assets/button-loading.js                       |  28 +
 assets/component-bouncing-dots.css             |   5 +
 assets/critical.css                            |  51 +-
 assets/editorial-text.js                       |  97 ++++
 assets/quick-add.js                            |  36 +-
 assets/quick-view.js                           |  28 +-
 assets/section-parallax.css                    | 167 ++++++
 assets/section-parallax.js                     | 175 ++++++
 blocks/_bundle-product-list.liquid             | 189 ++++++-
 blocks/_bundle-summary.liquid                  | 511 ++++++++++++++++--
 blocks/_collection-breadcrumb.liquid           |  45 +-
 blocks/_collection-columns.liquid              | 108 +++-
 blocks/_collection-count.liquid                |  10 +-
 blocks/_collection-pagination.liquid           |  35 +-
 blocks/_collection-products.liquid             |  15 +-
 blocks/_collection-sort.liquid                 |  15 +-
 blocks/_collection-toolbar.liquid              | 106 +++-
 blocks/_column.liquid                          |  98 +++-
 blocks/_header-account.liquid                  |  70 ++-
 blocks/_header-cart.liquid                     |  30 +-
 blocks/_header-divider.liquid                  |  10 +-
 blocks/_header-localization.liquid             |  25 +-
 blocks/_header-logo.liquid                     |  10 +-
 blocks/_header-menu.liquid                     | 136 ++++-
 blocks/_header-search.liquid                   |  75 ++-
 blocks/_header-top.liquid                      |  47 +-
 blocks/_mega-menu-banner.liquid                | 476 ++++++++++++++---
 blocks/_mega-menu-banners.liquid               | 226 +++++++-
 blocks/_overlay-product-media.liquid           | 150 ++++--
 blocks/_product-collection-grid.liquid         |   4 +-
 blocks/_product-details.liquid                 | 149 ++++--
 blocks/_product-media.liquid                   |  95 +++-
 blocks/announcement-countdown-timer.liquid     | 276 +++++++++-
 blocks/announcement-text.liquid                |  63 ++-
 blocks/banner.liquid                           |  75 ++-
 blocks/blog-archive-list.liquid                |  32 +-
 blocks/blog-card-button.liquid                 |  25 +-
 blocks/blog-card-description.liquid            |  50 +-
 blocks/blog-card-meta.liquid                   | 175 ++++--
 blocks/blog-card-tag.liquid                    |  85 ++-
 blocks/blog-card-title.liquid                  |  90 +++-
 blocks/blog-card.liquid                        | 142 +++--
 blocks/blog-grid.liquid                        |  53 +-
 blocks/blog-list.liquid                        | 135 ++++-
 blocks/blog-meta.liquid                        | 209 +++++++-
 blocks/button-view-details.liquid              |  10 +-
 blocks/button.liquid                           |  45 +-
 blocks/buttons.liquid                          | 150 ++++--
 blocks/carousel.liquid                         | 253 +++++++--
 blocks/collection-background-item.liquid       |  70 ++-
 blocks/collection-card-button.liquid           |  45 +-
 blocks/collection-card-description.liquid      |  60 ++-
 blocks/collection-card-title.liquid            | 110 +++-
 blocks/collection-card.liquid                  | 301 ++++++++++-
 blocks/collection-list-items.liquid            | 125 ++++-
 blocks/collection-promo.liquid                 | 313 ++++++++---
 blocks/collection-tab.liquid                   |   4 +-
 blocks/collection-thumbnail.liquid             |  61 ++-
 blocks/collections-with-tabs-item.liquid       |  68 ++-
 blocks/comments.liquid                         | 180 ++++++-
 blocks/comparison-table-column.liquid          |  62 ++-
 blocks/contact-field.liquid                    |  30 +-
 blocks/contact-form.liquid                     | 432 +++++++++++----
 blocks/content.liquid                          |  21 +-
 blocks/countdown-timer.liquid                  | 190 +++++--
 blocks/discount-code.liquid                    | 161 +++++-
 blocks/divider.liquid                          |  60 ++-
 blocks/editorial-text.liquid                   | 702 +++++++++++++++++++++----
 blocks/email-signup.liquid                     |  90 +++-
 blocks/eyebrow.liquid                          |  40 +-
 blocks/faq_accordion.liquid                    | 497 ++++++++++++++++-
 blocks/faq_answer_text.liquid                  |   6 +-
 blocks/faq_category.liquid                     | 195 +++++--
 blocks/faq_item.liquid                         | 194 ++++++-
 blocks/featured-image.liquid                   | 136 ++++-
 blocks/featured-post.liquid                    | 310 ++++++++++-
 blocks/first-card.liquid                       | 134 ++++-
 blocks/gallery-grid.liquid                     | 216 +++++++-
 blocks/gallery-header-group.liquid             | 323 +++++++++---
 blocks/gallery-image.liquid                    | 218 +++++++-
 blocks/gallery-item.liquid                     | 113 +++-
 blocks/gallery-strip-feature-item.liquid       |  71 ++-
 blocks/gallery-strip-item.liquid               |  38 +-
 blocks/gallery-strip-overlay-group.liquid      | 101 +++-
 blocks/grid.liquid                             |  94 +++-
 blocks/group.liquid                            | 260 +++++++--
 blocks/header.liquid                           | 124 ++++-
 blocks/heading.liquid                          | 100 +++-
 blocks/icon.liquid                             | 175 ++++--
 blocks/image-card.liquid                       | 268 ++++++++--
 blocks/image-comparison.liquid                 | 190 +++++--
 blocks/image-text-card-grid-item.liquid        |  32 +-
 blocks/image-text-stacked-band.liquid          |  84 ++-
 blocks/image.liquid                            | 125 ++++-
 blocks/localization.liquid                     |  40 +-
 blocks/location-item.liquid                    | 145 ++++-
 blocks/location-list.liquid                    |  61 ++-
 blocks/logo.liquid                             |  20 +-
 blocks/marquee-item.liquid                     |  21 +-
 blocks/marquee.liquid                          |  89 +++-
 blocks/menu.liquid                             | 110 +++-
 blocks/pagination.liquid                       |  99 +++-
 blocks/parallax-item.liquid                    | 451 ++++++++++++++++
 blocks/policy-links.liquid                     |  30 +-
 blocks/popup.liquid                            |  16 +-
 blocks/press-item.liquid                       |  56 +-
 blocks/press-quotes.liquid                     |   6 +-
 blocks/previous-and-next-posts.liquid          | 116 +++-
 blocks/product-accordion.liquid                | 105 +++-
 blocks/product-buy-accelerated-checkout.liquid |  21 +-
 blocks/product-buy-add-to-cart.liquid          |  32 +-
 blocks/product-buy-quantity.liquid             |  85 ++-
 blocks/product-callout-gallery.liquid          | 135 ++++-
 blocks/product-callout.liquid                  | 427 ++++++++++++---
 blocks/product-card.liquid                     |  10 +-
 blocks/product-description.liquid              |  50 +-
 blocks/product-inventory.liquid                |  10 +-
 blocks/product-list-banner.liquid              |  14 +-
 blocks/product-list.liquid                     | 119 ++++-
 blocks/product-pickup-availability.liquid      | 202 +++++--
 blocks/product-price.liquid                    |  70 ++-
 blocks/product-recommendations.liquid          |  30 +-
 blocks/product-sticky-add-to-cart.liquid       |  56 +-
 blocks/product-title.liquid                    |  85 ++-
 blocks/product-variant-picker.liquid           |  30 +-
 blocks/row.liquid                              |  36 +-
 blocks/scroll-to.liquid                        |  25 +-
 blocks/scrolling-card.liquid                   | 163 +++++-
 blocks/shop-the-look-products.liquid           | 106 +++-
 blocks/slideshow-slide.liquid                  | 392 ++++++++++++--
 blocks/social-links.liquid                     |  30 +-
 blocks/spacer.liquid                           |  20 +-
 blocks/tab-layout.liquid                       |  70 ++-
 blocks/tabs-view-all-button.liquid             |  45 +-
 blocks/tags-and-sharing.liquid                 |  72 ++-
 blocks/testimonial-item.liquid                 | 218 ++++++--
 blocks/text.liquid                             |  80 ++-
 blocks/timeline-list.liquid                    |  20 +-
 blocks/video.liquid                            | 135 ++++-
 blocks/view-all-button.liquid                  | 116 +++-
 docs/parallax-section-build-plan.md            |  71 +++
 docs/theme-customization-policy.md             |  10 +
 scripts/theme-base-sync.cjs                    | 522 ++++++++++++++++--
 sections/404.liquid                            |   6 +-
 sections/announcement-bar.liquid               | 376 +++++++++++--
 sections/article.liquid                        | 137 ++++-
 sections/blog-posts.liquid                     |  63 ++-
 sections/blog.liquid                           |  37 +-
 sections/breadcrumbs.liquid                    |  61 ++-
 sections/bundle-builder.liquid                 | 200 ++++++-
 sections/cart-drawer.liquid                    |  34 +-
 sections/cart.liquid                           |   6 +-
 sections/collection-list-thumbnails.liquid     | 552 ++++++++++++++++++-
 sections/collection-list.liquid                | 109 +++-
 sections/collection-page-breadcrumb.liquid     | 202 ++++++-
 sections/collection-page-links.liquid          | 187 ++++++-
 sections/collection-tabs.liquid                | 182 +++++--
 sections/collections-with-background.liquid    | 562 +++++++++++++++++++-
 sections/collections-with-tabs.liquid          | 438 ++++++++++++++-
 sections/collections.liquid                    |  16 +-
 sections/contact-form-custom.liquid            |  49 +-
 sections/contact-information.liquid            | 182 ++++++-
 sections/countdown.liquid                      | 103 +++-
 sections/custom-section.liquid                 |  98 +++-
 sections/divider.liquid                        |  65 ++-
 sections/email-signup-dual-image.liquid        | 374 +++++++++++--
 sections/email-signup-form.liquid              |  54 +-
 sections/email-signup-single-image.liquid      |  74 ++-
 sections/faq-accordion.liquid                  | 347 ++++++++++--
 sections/faq-image-accordion.liquid            | 375 +++++++++++--
 sections/featured-blog-posts.liquid            |  63 ++-
 sections/featured-collection-banner.liquid     |  43 +-
 sections/featured-collection.liquid            |  58 +-
 sections/featured-product.liquid               |  39 +-
 sections/footer.liquid                         |  36 +-
 sections/gallery-carousel.liquid               | 323 ++++++++++--
 sections/gallery-custom.liquid                 | 184 +++++--
 sections/gallery-full-width-strip.liquid       | 234 +++++++--
 sections/gallery-image-grid.liquid             | 284 ++++++++--
 sections/header.liquid                         |  62 ++-
 sections/hero.liquid                           | 318 ++++++++---
 sections/hotspot-full-width-carousel.liquid    | 204 +++++--
 sections/hotspot.liquid                        |  44 +-
 sections/icon-text-cards.liquid                | 417 +++++++++++++--
 sections/icon-text-inline.liquid               | 124 ++++-
 sections/image-cards.liquid                    |  20 +-
 sections/image-comparison-custom.liquid        | 104 +++-
 sections/image-comparison-split-custom.liquid  | 192 +++++--
 sections/image-text-card-grid.liquid           | 223 +++++++-
 sections/image-text-split-layout.liquid        | 167 +++++-
 sections/image-text-stacked-bands.liquid       | 545 ++++++++++++++++---
 sections/location-list.liquid                  | 266 ++++++++--
 sections/location-map.liquid                   | 286 ++++++++--
 sections/page.liquid                           |   6 +-
 sections/parallax.liquid                       | 405 ++++++++++++++
 sections/password.liquid                       |   6 +-
 sections/press.liquid                          |  40 +-
 sections/product-information.liquid            |  44 +-
 sections/product.liquid                        |   6 +-
 sections/quick-add.liquid                      |  44 +-
 sections/quick-view.liquid                     |  44 +-
 sections/rich-text.liquid                      |  42 +-
 sections/scroll-reading-text.liquid            | 105 +++-
 sections/scrolling-cards.liquid                | 149 +++++-
 sections/scrolling-text-star-separator.liquid  | 458 ++++++++++++++--
 sections/search-overlay.liquid                 |  37 +-
 sections/search.liquid                         |   6 +-
 sections/shop-the-look-section.liquid          |  47 +-
 sections/slideshow.liquid                      | 418 +++++++++++++--
 sections/testimonial-carousel.liquid           | 429 ++++++++++++---
 sections/testimonials-background-custom.liquid |  99 +++-
 sections/testimonials-horizontal-custom.liquid |  59 ++-
 sections/text-marquee-custom.liquid            | 262 ++++++---
 snippets/swiper-navigation.liquid              |   2 +-
 snippets/theme-button.liquid                   |   2 +-
 tests/editorial-text.test.cjs                  |  49 ++
 217 files changed, 25054 insertions(+), 3990 deletions(-)
```


### 2026-10-02 — Update from personal main

- Previous main commit: `fa304936dd536d9d2d7ac46f9b2361947c955ce0`
- Updated through main commit: `ed7468aa59d460c2d86cee8b7035487d1bb88bf8`
- Main commits included: 2
- Included main commits:
  - `549a2fdacdad77d7dee674bad726dcc0db362e43` — fix(theme-base): track section and block code customizations
  - `ed7468aa59d460c2d86cee8b7035487d1bb88bf8` — fix(theme-base): preserve temporary git index for previews
- Change summary:

```text
docs/theme-customization-policy.md |  18 ++++++
 scripts/theme-base-sync.cjs        | 124 ++++++++++++++++++++++++++++++++-----
 2 files changed, 127 insertions(+), 15 deletions(-)
```

### Reviewed schema migration

Owner approved main schema for conflicts outside homepage. Updated Blog static heading to blog-title and added tag filter; migrated legacy typography tokens in non-homepage templates. Kept homepage index configuration, custom implementations, existing preset values and unconfirmed removed settings. Retained homepage product-media thumbnail visibility because this UI-only difference does not change runtime values.
