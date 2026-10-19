# Collection tabs preset — 2026-10-19

Requested skills: agents-build-themes build/preset/build-preset and setup-store/store-content-media. Branch: theme/zevra-theme. Figma file bH9A5237I07NWt19Cua9gL, desktop 47062:13287, mobile 47230:15718; both detailed contexts and screenshots inspected.

Local scope: existing Collection tabs preset and templates/index.json editors_pick. Preserved original translation name/category, instance IDs, shared catalog and unrelated Press edits. No Liquid/CSS/JS implementation changes.

Mapping: vertical composition puts header left/tabs right above four desktop columns; mobile centered header/tabs and one column with next-card preview. Existing 40/28px composition gaps, 8px card gaps, 96/56px bottom padding retained. Pagination desktop spacing 48px per requested skill convention, mobile24px. Existing bottom icon-only long-arrow navigation retained. Increased max_products5→8 so both existing collections render all their products and resource-driven View all remains hidden, as in the reference. Added explicit static header (eyebrow + heading), tab-layout and View all slots to Add section preset so it reproduces the configured instance.

Store readback: layouthub-template-v2.myshopify.com, USD. Reused Best Sellers Mara gid://shopify/Collection/535347364139 (best-sellers-mara,6 products) and New Arrivals Mara gid://shopify/Collection/535340908843 (new-arrivals-mara,8 products). Best Sellers first four match Figma order/titles/prices: Roma Leather Melon - Blue3700, Spy Small - pale sage green3700, Vanity - Rose4400, Peekaboo Soft - Beige3700. Existing Shopify CDN image references retained; no uploads or catalog mutations needed/performed. Detailed variant/gallery/stock/swatch metadata not audited or changed; card-level variant names differ from the design in places.

Verification: schema setting IDs/options/range steps, nested block schemas, preset-instance settings parity and unchanged pre-schema implementation passed. Theme Check0 errors/6 warnings; git diff --check passed. Existing localhost9300 preview rendered vertical layout, centered mobile copy, product cards, images and hidden View all at327px. New in interaction updated aria-selected, hid first panel and showed second panel; its first four images loaded. Existing development preview process supplied the page; no manual CLI push/publish or Theme Editor save invoked. No commit.

Remaining visual gaps/unverified:
- Exact1920px desktop and375px mobile rendering not verified; browser offered327px viewport without resize capability.
- Product card titles inherit uppercase global styling versus Figma title case. Kept global settings unchanged to avoid unrelated card changes.
- Pagination remains visible on mobile: existing show_pagination_on_desktop gates markup for both viewports, with no independent mobile switch.
- Existing bottom arrows occupy a separate row at opposite edges; Figma has both arrows together at the right end of the progress bar. No existing composition control.
- Native next-slide preview width, product image crop, swatch geometry and progress fraction may differ; no CSS/custom logic added.
- Preset renders all6/8 products to suppress View all; initial desktop progress fraction may differ from Figma. No extra catalog items inferred from the bar.
- Theme Editor add/remove/reorder/save/reload lifecycle not exercised. No full catalog setup or pixel-parity claim.

## Pagination follow-up — 2026-10-19

User authorized a Zevra-only implementation change. The prior mobile pagination gap is superseded: Collection tabs now has independent desktop/mobile visibility; Add section preset and editors_pick both set desktop true/mobile false. See pagination-visibility-2026-10-19.md for scope and validation. Other original visual gaps remain.

## Bottom controls follow-up — 2026-10-19

The previous arrow-position gap is superseded by explicit theme-only custom: per-tab footer puts Progress bar and grouped right-side arrows on one line; Bullets uses centered pagination between opposite-side arrows. Controls48px, gap8px, progress gutter32px, desktop footer spacing40px; Add section/homepage agree. Browser confirmed aligned progress centers and native Next enabling Previous. Bullets layout and tab selection were exercised. No JS changes; existing native carousel binding handles per-tab controls. Theme Check0 errors/6 warnings;20 targeted tests pass. Mobile visual QA remains unverified.

## Visual re-audit — 2026-10-19

Read-only comparison of the supplied desktop/mobile Figma contexts and screenshots against current localhost9300 at1265px. No theme implementation, template or store changes made during this audit. Desktop1920px/mobile375px exact viewport comparison remains unverified.

Confirmed remaining differences:

| Area | Figma | Current preview |
| --- | --- | --- |
| Section heading | Urbanist32px/400,38.4px line-height,2px tracking | Font/size/weight/line-height match; tracking -0.8px |
| Eyebrow |14px/400,2px tracking |14px/500,2px tracking |
| Product title |16px/500,24px line-height, title case |16px/400,22.4px line-height, uppercase |
| Product price |14px,21px line-height,0.2px tracking |16px,24px line-height,normal tracking |
| Card content padding | Desktop top16px, horizontal/bottom20px; mobile top12px, horizontal/bottom16px | Desktop20px on every side; mobile not rendered in this audit |
| Product imagery | Specific scale/placement for each bag; first three source images vertically offset | Centered cover images; silhouette scale/placement differs visibly, especially Spy/Vanity. Current assets are existing catalog images; exact source crop is not applied |
| Badge | New on Peekaboo Soft - Beige | No badge on any of first four cards |
| Swatches | Selected-color inset outline; Spy order peach/yellow/green | All first-four-card inputs initially unchecked, no selected inset; Spy order green/peach/yellow |
| Arrow artwork |24px icons; disabled previous opacity30% |20px icons; previous opacity60%;48px buttons and8px spacing correct |
| Progress fraction | Supplied frame approximately52.6% | Initial transform scaleX0.333333, from actual6-product carousel pages |
| Progress track | Solid#e6e6e6 | Body#6c6c6c at20% alpha, approximately#e2e2e2 over white |

Confirmed matches: first four product order and displayed prices; Urbanist family; four desktop columns with8px card gap; left heading/right tabs; tab14px/500/0.6px; section heading32px; composition/footer gaps40px; bottom padding96px; progress and grouped right arrows share one line; active fill#181818. Bullets follows main's32×8px active pill and8×8px inactive dots (verified previous step), while Figma section itself specifies Progress bar.

Mobile source requires centered heading/tabs,280px cards at375px viewport, next-card peek, no pagination/navigation and56px bottom padding. Existing preview uses1.2 slides per view; at343px container with8px gap its calculated card width is approximately284.5px, a source-based predicted discrepancy requiring375px viewport confirmation. No mobile pixel-parity claim.

Product card price follow-up: theme-only custom now uses body-sm14px,21px line-height,0.2px tracking. Computed styles verified on four storefront product cards; prior price-size gap resolved. Theme Check0 errors/6 existing warnings.

Product card title follow-up: requested theme-only typography applied to shared .product-card__title: weight500, line-height1.5, zero tracking, capitalize casing; existing16px desktop/mobile values retained. Theme Check0 errors/6 inherited warnings; git diff --check passes. Live browser verification blocked because local browser use is disabled in Work settings; computed styles not reverified in this step.
