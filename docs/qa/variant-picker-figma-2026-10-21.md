# Variant picker — Figma QA, 2026-10-21

## Scope and source

Read-only visual QA using `agents-build-themes/skills/qa/qa-section/SKILL.md`. Target: Virelle checkout, homepage `templates/index.json`, instance `featured_product_YkjKMT`, block `product_variant_picker_qnk7Dt`. This does not verify the Add section preset or full Theme Editor lifecycle.

- Desktop: https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48063-10282 . Fresh MCP screenshot, natural size1920×940; PNG raster1920×941, saved as `output/variant-picker-qa-2026-10-21/figma-desktop.png`.
- Mobile: https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48096-20308 . MCP quota blocked this second read. Chrome UI confirmed selected Featured product / Mobile, frame375×1116.75, white background. Read at64% then100% canvas zoom; evidence `figma-mobile.png` and `figma-mobile-detail.png` in the same output directory.
- Preview: http://127.0.0.1:9300/ ; section anchor `#shopify-section-template--28476595634475__featured_product_YkjKMT`. Desktop preview observed live in Chrome. Mobile observed using iPhone SE375×667, toolbar zoom100%; `preview-mobile.png` is the stable final capture after resetting an inherited emulation zoom state.
- Fresh checks performed around08:11–08:25 Asia/Ho_Chi_Minh. Historical2026-10-20 measurements are distinguished below. No current computed-style or loaded-font API measurements are available because Browser is disabled. Native CUA intermittently changed windows or failed coordinate mapping; this limits precision, not evidence of a theme defect.

## Comparison

`matched` below means visual appearance/structure matched in the stated source and live output; it does not certify exact computed CSS metrics.

| Property | Figma | Actual | Difference | Status | Evidence |
| --- | --- | --- | --- | --- | --- |
| Color order | Gray → Black, Black selected | Black → Gray, Black selected | Two controls reversed | mismatch | Fresh desktop source; mobile source100%; live desktop/mobile |
| Swatch presentation | Round, selected Black with white inset and dark ring | Round, white inset and dark ring | No structural difference observed | matched | Fresh source/live images |
| Size controls | XS/S/M/L/XL, square outline, selected XS dark | Same labels/order/outline and selected XS dark | None observed in structure | matched | Source/live mobile and desktop |
| Size geometry | Prior Properties evidence52px minimum width /40px height, gap8px | Local CSS minimum52px/padding16px; current global height40px/gap8px; live row fits mobile | Exact current computed dimensions not read | unverified | Historical source properties; current source/config; live image is supporting visual evidence only |
| Size caption | “Size”, no selected-value suffix | “Size”, no suffix | None observed | matched | Fresh source/live images |
| Size guide alignment | Ruler + text on right of Size row | Same arrangement | None observed in alignment | matched | Source100% and live375px |
| Sold-out state | S disabled appearance with diagonal | S Sold out, diagonal present | Structure matches; precise stroke color/opacity not measured | matched | Fresh source/live images and native AX label |
| Typography precision | Labels, values and guide shown in source | Looks consistent in live render; md/sm block options retained | Font loaded, weight, line-height and tracking not independently measured | unverified | Native visual check + config only |
| Color caption spacing | Color: followed by Black | Same content; appears slightly tighter | Needs source gap and computed-style measurement before numeric finding | unverified | Full-size source and live screenshots; no claimed numeric delta |
| Exact scheme/native swatch colors | Heading/dark selection, gray swatch | Shared heading tokens; HTML native swatches rgb(24 24 24), rgb(203 203 203) | Source gray fill not freshly read from Properties | unverified | Fresh rendered HTML; local cascade; source screenshot not used as a HEX authority |

## Confirmed mismatch and cause

**Low visual impact, desktop/mobile:** swatch order is reversed. The shared picker iterates Shopify `product.options_with_values` / values; the fresh rendered HTML lists Black before Gray. This is product-option data order, not a failed selected state. Resolve via authorized product option reordering, or an explicitly designed local ordering setting; avoid a CSS-only reorder that separates visual and keyboard order. No data mutation performed during this QA.

## Adjacent Featured product observations

These belong to the full section, outside the picker change:

- **Mismatch, desktop/mobile:** Figma includes a second “BUY IT NOW” CTA. Preview omits it. The current product-buy-buttons block explicitly sets `show_accelerated_checkout:false`. The existing option is the appropriate control; actual dynamic checkout appearance also depends on Shopify context. Do not claim that enabling it alone guarantees the source button artwork.
- **Mismatch, desktop/mobile:** price appears dark in the supplied Figma and gray in preview. Current Product price output/cascade should be audited before any change; no exact source color or rendered computed value claimed here.
- Full section width, media crop, total height and column proportions are **unverified** at identical desktop CSS widths. The desktop native window screenshot was1920px wide with a visible scrollbar; exact CSS viewport/client width was not read. Do not calculate section deltas by directly overlaying that window screenshot with a1920px Figma frame.

## Outcome and limits

**Near match for picker structure; not a complete Figma match.** Confirmed remaining picker mismatch is swatch order. Exact typography/color/geometry remain unverified at computed-style precision. Full-section CTA and price also differ.

No theme/config/catalog edits, Save Theme Editor, push or publish were performed. Only this report and QA evidence were written. No Theme Check rerun was needed for this read-only review; previous0-error result is historical, not a new check. Runtime/editor release readiness is outside scope.
