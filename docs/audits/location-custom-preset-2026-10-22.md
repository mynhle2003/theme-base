# Store location — Custom section preset

Date: 2026-10-22

## Scope and source

Replaced only `templates/index.json` → `kinetra_locations` from `location-map` to `custom-section`, preserving its position in template order. Updated the default `Custom section` preset in `sections/custom-section.liquid`; retained all named presets and all non-preset schema/implementation content.

Requested Figma file: `yTXlAfT0miBGgRuuYM4OMp`. Desktop link `48002:1657` opened the page survey rather than selecting the map. Located the map under Kinetra → Homepage 2: `48190:17028`, container `48190:17029`, row `48190:17030`, content `48190:17031`, cities `48190:17035`. Mobile: `48249:15888`, container `48249:15889`.

Evidence read through CUA/Chrome, profile email verified as minhle@beae.com. Figma MCP was initially absent; after tools became available, its context call returned Unknown tool. No Figma design was modified.

## Composition mapping

- Custom section: page width, scheme-3, desktop padding 0/96, mobile 48/48.
- Horizontal Group: gap 56 desktop, vertical mobile with gap 40.
- Content Group: desktop left alignment, mobile centered; header-to-cities gap 48/40.
- Header: square eyebrow, Store location H2, existing xl role, gap 16/12.
- Cities: three Groups in Sydney / Ho Chi Minh City / London order, gaps 36/32 between groups and 12 within each group. City titles use existing md heading role with semantic H3.
- Each city has a tertiary Get directions link with arrow_up_right, URL-encoded Google Maps search, and new-tab behavior.
- Image block reuses `shopify://shop_images/kinetra-locations-mall.avif`. Desktop custom width 58%, square crop; mobile fill width, 4:3 crop. No media uploaded.

## Verification

- Desktop browser viewport 1935×1200, document content width 1920. Composition width 1600, text width 616, gap 56, image 928×928, section height 1024. Left content vertically centered; all three locations and links visible.
- Mobile responsive flow inspected at browser width 375 (document width 360) and 390 (document width 375), height 1100. Centered copy, London address wraps, image follows content, 4:3 frame. At document width 360 image is 328×246. Frame should be 343×257.25 at document width 375; screenshot capture has a scrollbar/viewport discrepancy, so exact mobile frame-size parity remains unverified.
- Image source loaded successfully from existing mall AVIF (natural 960×640); desktop subject landmarks (ceiling, central display, escalators and floor) and mobile composition inspected against Figma. Existing image reused without editing source or focal data.
- All three link hrefs retain api=1 and the correct distinct encoded address. No external map navigation was needed.
- Local validation: all setting IDs/options/ranges, child allow-lists and block orders pass. Other template instances and named presets unchanged; no location-map instance remains in index.json.
- `git diff --check`: pass.
- `shopify theme check --output json`: 0 errors, 8 warnings in existing unrelated blocks/snippets; no offenses in modified files.
- Shopify toolkit validator could not start: missing dependency `@shopify/theme-check-common`. Shopify CLI Theme Check and direct composition validation were used.

## Remaining preset-only differences

- Existing xl typography computes to 50px desktop / 30px mobile; Figma screenshot typography appears slightly smaller. Existing typography was retained; no global role or CSS changed based on this single section.
- Existing square eyebrow icon renders outlined while Figma shows a filled square. Existing button arrow icon has a different visual size. No icon implementation was edited.
- Desktop city list uses existing heading/body/button metrics, so total text height and vertical centering differ slightly from Figma's 509px content group.
- Exact Add section insertion, duplication and save/reload lifecycle were not exercised through Theme Editor. Preset registration/category and placement were checked from schema. No Theme Editor Save, push, publish or commit performed.

Screenshots: `output/location-preset/desktop.jpg`, `output/location-preset/mobile.jpg`. Desktop DOM evidence: `output/location-preset/desktop-measurements.json`.

## Follow-up: measured spacing from Figma Inspect

User requested exact spacing inspection. Figma MCP returned View-seat rate limit; continued through the authorized Chrome Properties/Inspect fallback. Read resolved pixel values directly from visible property rows' variable-pill tooltips, rather than assuming a multiplier from token names.

| Region | Desktop Figma / preset | Mobile Figma / preset |
| --- | --- | --- |
| Section top / bottom padding | 0 / 96px | 48 / 48px |
| Content ↔ image | 56px | 40px |
| Eyebrow ↔ heading | 8px | 8px |
| Header ↔ cities | 48px | 32px |
| Between cities | 36px | 32px |
| Within each city | 16px | 12px |

Changes: header gaps 16/12 → 8/8; mobile header-to-list 40 → 32; desktop city gaps 12 → 16. Updated both the default Custom section preset and kinetra_locations template instance. Other settings/content retained.

Desktop inspected groups: Content (header) Hug 89px, gap token 2 = 8px; Content left Hug 509px, token 12 = 48px; Frame 58780 Hug 372px, token 9 = 36px; each Tab Horizontal Hug 100px, token 4 = 16px; Row token 14 = 56px.
Mobile inspected groups: Map padding token 12 = 48px; Container and Row token 10 = 40px; Content left Hug 461px token 8 = 32px; header Content Hug 65px token 2 = 8px; cities Hug 364px token 8 = 32px; city token 3 = 12px.

Rendered verification at document widths 1920 and 375: computed gaps match all entries. Geometry measurements between every city's immediate child blocks confirm 16/16px desktop and 12/12px mobile. Evidence: output/location-preset/spacing-verification.json, desktop-spacing.jpg, mobile-spacing.jpg, figma-desktop-inspect.jpg, figma-mobile-inspect.jpg.

Correction to earlier typography observation: the inspected desktop title has a 60px line box and 120% line height, consistent with the existing 50px title. The earlier claim that this title was larger than Figma was based on appearance and is withdrawn. This follow-up changes spacing only; remaining typography details have not been fully audited.
