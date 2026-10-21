# Variant picker Figma QA — 2026-10-20

Scope: existing Featured product / product variant block. Homepage and preset use existing options wherever available. Collection template unchanged by this task.

Sources: Figma file yTXlAfT0miBGgRuuYM4OMp, desktop 48063:10282, mobile 48096:20308. Figma MCP quota exhausted; native Chrome used for source inspection and ruler SVG export.

## Options and custom presentation

| Detail | Implementation / evidence |
| --- | --- |
| Color swatches | Existing global color style, 32px desktop/mobile, 1:1, pill radius, border selection; custom selected border uses heading token |
| Sizes | Existing button picker, 40px height, square radius, 8px item gap; custom minimum width52px and padding16px, row292px for 5 sizes |
| Typography | Existing block caption md / value sm options; body tracking fallback; inline font/size/tracking overrides retained |
| Caption | Color retains selected value; other option captions show name only; accessible fieldset legend retained |
| Input outline | Existing Input style=outline and border width1; block-level alias resolves after body style override |
| Size guide | Existing page `size-guide` (verified page178401739051), modal600 desktop / bottom sheet mobile; original Figma ruler SVG |
| Sold out | Native availability retained; diagonal follows source, uses border token |

## Browser evidence

Preview http://127.0.0.1:9300/#shopify-section-template--28476595634475__featured_product_YkjKMT, development theme192119800107, store layouthub-template-v2.myshopify.com.

- Desktop screenshot: `output/variant-picker-2026-10-20/desktop.png`.
- Mobile iPhone SE375×667 screenshot: `output/variant-picker-2026-10-20/mobile.png`. Five sizes fit on one row; Size guide aligns on label row.
- Mobile Size guide: `output/variant-picker-2026-10-20/mobile-size-guide.png`. Open and Close verified; desktop open and Escape close also verified.
- Desktop size L and mobile M selection checked via native accessibility radio state. Mobile Gray updates caption to Color: Gray, selected radio, and availability (S becomes available). Restored Black before handoff.
- Native Chrome emulation initially retained an abnormal zoom state; reset emulation and used iPhone SE preset to verify375px. No screenshot taken during the abnormal state is used as evidence.

## Checks and remaining differences

- Theme Check: 0 errors, 7 warnings in working tree.
- Product/media, swatch/caption/guide, and overlay tests: 13 pass; one unrelated existing Quantity test fails because its expected exact label class/visibility no longer matches the current quantity implementation. This task does not change that snippet or test.
- `git diff --check`: pass.
- Catalog swatch order is Black → Gray; source is Gray → Black. No catalog reorder or visual-only DOM reorder introduced.
- This checks the picker, not the full Featured product typography/composition, accelerated checkout CTA, or the entire Theme Editor lifecycle. No claim of full-section pixel identity.
- No new Admin resource mutation or explicit theme push/publish in this task. Existing development preview reflected the edited files. Read-only theme settings pull matched local settings exactly; temporary copy is under `/tmp/virelle-picker-remote`.
