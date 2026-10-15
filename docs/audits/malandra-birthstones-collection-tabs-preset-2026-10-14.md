# Collection tabs preset — 2026-10-14

Applied the requested [build-preset skill](/Users/beae/Documents/GitHub/Layouthub%20v2/agents-build-themes/skills/build/preset/build-preset/SKILL.md) to the second featured collection region, not the existing NECKLACES / NEW IN / BRACELETS region.

References: [desktop 52812:12080](https://www.figma.com/design/7BbUHDzKGaMGMkyRpu0YZ8/Malandra?node-id=52812-12080&m=dev), [mobile 52393:9100](https://www.figma.com/design/7BbUHDzKGaMGMkyRpu0YZ8/Malandra?node-id=52393-9100&m=dev).

Figma MCP design-context requests were rejected by the account's View seat call limit. Read-only browser inspection of both exact nodes supplied the reference screenshots and visible Inspect properties instead. This is preset configuration using existing code; no new implementation or assets were derived from an unavailable design-context response.

## Configuration

Added `Collection tabs` to `sections/collection-tabs.liquid` presets and `birthstones_tabs` to `templates/index.json`, immediately after `statement_stacks`. The preset display name follows the user's requested name; Birthstones is its content, not a naming suffix. The added composition preserves unrelated homepage instances. The section schema was updated concurrently during this task; the Birthstones preset was reapplied to that latest schema without restoring older unrelated presets.

| Region | Existing control / composition |
| --- | --- |
| Heading and supporting copy | Static `header`, dynamic `heading` and `text`; Semi-Precious Birthstones; The ultimate sentimental souvenir, made from 14k gold and semi-precious stones. Native lg heading (34px desktop / 30px mobile in current global settings) |
| Tabs | Static `tab-layout`, underline, body font, 14px custom size, 32px gaps; RINGS / NECKLACES / EARRINGS |
| Desktop cards | Each `collection-tab` contains a static `product-card` and a `promo-card` at slot 1; 4 columns, max 3 products, 10px product gap |
| Banner copy | For Effortless Glow; Radiant, versatile, classic: your everyday essential.; SHOP NOW; scheme-3 for white copy / white button; bottom-left content |
| Mobile | 1 product column with next-slide preview; native `show_on_top_mobile` moves the active tab's promo above its product carousel |
| Section spacing | Figma Inspect: 1920px desktop width, 80px top/bottom; 375px mobile width, 56px top/bottom. Existing full-width section with 80/56 padding |
| Carousel controls | Desktop hover navigation with icon-only chevrons; progress bar enabled, 260px cap; pagination spacing 48px desktop / 36px mobile |

Three independent promo blocks mirror the same banner copy across tabs. Merchants can assign matching desktop/mobile imagery to each. All new image and collection selectors remain unselected; no media/content creation was requested. The banner button uses the existing All collections/products destination `shopify://collections/all`, pending a campaign-specific destination. Existing collection references in the first Collection tabs section are untouched.

## Validation

- Theme Check: 0 errors, 5 existing ExcessiveSettingsCount warnings in unrelated blocks.
- Configuration validation: setting IDs, select options, range bounds/steps, checkboxes, child allow-lists, static slots, and dynamic block order passed for the new preset and instance.
- The initial edit passed preservation checks for existing presets, schema definitions, implementation and unrelated instances. After a concurrent section-schema update removed the new preset, reapplied only Birthstones to the latest schema and verified preset/template parity and homepage placement.
- `git diff --check` passed.
- Read both Figma references and inspected native desktop/mobile CSS and promo relocation behavior. The only local preview listener belongs to `shopify-theme-base`, not this checkout. No new development-theme upload was started. Storefront geometry, tab interactions and Theme Editor lifecycle for the new instance are not visually verified.
- No commit, push, publish or store configuration save was performed. No height calibration or custom implementation was added.

## Remaining gaps

| Figma expectation | Current native behavior / missing control |
| --- | --- |
| Desktop title left, tabs right on the same controls row | Vertical/left layout keeps title and tabs in the same left column; no separate header/tab placement control. Horizontal layout would put all controls beside the product grid and is less suitable |
| Mobile title is Birthstones, desktop is Semi-Precious Birthstones | Heading has one text setting; desktop copy is retained at both widths |
| Desktop heading approximately 40px, mobile approximately 28px | Native lg scale is 34/30px; custom heading size has no independent mobile font-size control |
| Exact portrait photograph and Figma jewelry products, prices, swatches and sale state | New image/collection pickers are empty; native placeholders remain until separately requested resource work |
| Banner matches the exact desktop height and full-width mobile image ratio; tight gap to carousel | Promo uses native stretching/minimum height (360px on mobile) and a fixed 24px mobile promo-to-list margin; no image ratio, independent height or margin setting |
| Exact 256px mobile product media width within a 343px content area | Existing one-column carousel with fixed next-slide preview behavior; no exact card-width control |
| Campaign-specific SHOP NOW destination | Uses All destination until the intended URL/resource is supplied |
| Verified rendered match at both reference widths | Requires a preview containing the new local composition and populated resources |

Custom follow-up is unimplemented under build-preset's instruction: “do not edit Liquid/HTML outside {% schema %}, CSS, JavaScript, snippets, custom CSS fields, or global theme settings to chase visual fidelity.”

## Authorized desktop Promo card customization — 2026-10-15

The owner separately authorized theme-specific implementation for Promo cards in Collection tabs, referencing Figma `52812:12085`. Added `show_on_top_desktop` immediately before `show_on_top_mobile`, default false. Only the Collection tab context activates its desktop flag. On desktop, selected promos move into a fixed first column beside the products; on mobile the existing mobile checkbox acts independently. Multiple pinned promos stack in that column. Existing Product list runtime remains mobile-only; because Promo card is a shared block, its schema displays the desktop control with an explicit Collection-tab-only note.

Enabled this option for all three promo cards in the requested Collection tabs preset and its `birthstones_tabs` homepage instance. Set three desktop product columns; the fixed promo occupies an additional equal-width column. Preset name remains **Collection tabs** and the homepage instance remains immediately below Shop the look. Image/collection references remain as they were.

Implementation: `blocks/promo-card.liquid`, `blocks/collection-tab.liquid`, `assets/product-list-promos.js`. Preserve the customizations recorded in `docs/theme-customizations/malandra-theme.md` during base updates.

Validation: 13 tests passed, covering independent breakpoint flags, old mobile-only cards, Product list isolation, initialization/unload/reload and deferred-tab regressions. JavaScript syntax and whitespace checks passed. A local browser fixture using the actual changed panel CSS and promo relocation module measured a 1824px desktop row with a 448.5px fixed banner and 448.5px product cards, separated by 10px, at a 1920px viewport. At 375px the banner is 343px wide, above the products, with no page overflow. This fixture checks layout geometry and DOM relocation; it does not substitute for populated Shopify storefront / Theme Editor visual QA. Figma MCP remained quota-limited; read-only browser Inspect confirmed a 1824px row with a 10px gap and separate Banner / Cards groups. Existing media and typography differences remain outside this focused custom change. No upload, deployment, commit or push.

### Desktop detachment correction — 2026-10-15

Removed the requested explanatory `info` text from the desktop checkbox. Removed
the Liquid `section.type` gate, which incorrectly kept the desktop data flag
false when Shopify's section context did not supply that property. The flag now
reads the checkbox directly; runtime ownership still limits desktop relocation
to Collection tab panels. Detached wrappers lose slide classes, sizing and A11y
slide labels, including delayed labels from Swiper's initial snapshot. Deferred
cleanup is canceled on breakpoint changes/unload.

Verified with the real repository Swiper and pagination modules in a local
fixture: six product slides, no promo inside the Swiper root; clicking Next moved
the first product from x=506.5 to x=47.83 while the banner stayed at x=48. The
260px progress bar center was x=1189.25, exactly the product carousel center. On
mobile the promo remained above the carousel and pagination stayed centered in
the carousel. This replaces the earlier simplified fixture's coverage; deployed
Shopify storefront and Theme Editor visual QA remain unperformed.

### Sticky product carousel for stacked promos — 2026-10-15

Owner requested keeping the product carousel reachable when multiple desktop
promos are detached. Scoped sticky positioning to the detached desktop panel's
direct carousel child, with the sticky-header height offset and `align-self: start`.
The panel bounds the sticky travel; mobile retains its existing relative position.
Local browser fixture with three promos and the actual Swiper modules measured
a 932px panel and a 514px carousel. At scrollY=475 the carousel top stayed at 0px;
after the panel passed, the carousel bottom matched the panel bottom. Swiper
products still advanced and pagination stayed centered in the product column.
Mobile computed position remained relative. No deployment.

### Tab layout and View all footer — 2026-10-15

Owner authorized customizing Tab layout to the existing Figma reference and
moving View all beneath the content. The vertical/left desktop controls now
place header copy left and navigation right on one row. Existing tab block
desktop/mobile gap values now control navigation column spacing in this section.
View all retains its static ID and active-collection URL handling, but its actual
DOM slot follows the product list. It always centers on desktop, including the
horizontal composition, and follows Mobile alignment on mobile. Empty and
mobile-hidden actions do not reserve a footer gap. Existing block width/padding
and mobile hide controls are retained; no preset or template data changed.

Browser fixture using the actual section, Tab layout and View all styles verified
desktop header-left/tabs-right alignment and a centered footer after the product
list at 1920px. At 375px, button left edge=16px for left alignment, center=187.49px
for center alignment, right edge=359px for right alignment, with no page overflow.
Horizontal desktop composition also centered View all after the product list.
This resolves the previously documented desktop header/tab placement gap. No
deployed storefront or Theme Editor visual claim is made.

### Tab position mapping correction — 2026-10-15

Owner clarified desktop Tab position: Right = header left/tabs right (Figma);
Left = tabs left/header right, with header copy right-aligned; Center = header
and tabs stacked and centered. Scoped the mapping to the vertical desktop
composition, preserving Mobile alignment and the separate centered View all
footer. Header flex sizing supports existing width-fill settings without
forcing tabs to a new row; headerless navigation keeps its chosen alignment.
Set the matching Collection tabs preset and Birthstones homepage instance to
Right. Desktop browser fixture verified all three mappings; the centered header
and tabs measured the same x=960px center at a 1920px viewport.
