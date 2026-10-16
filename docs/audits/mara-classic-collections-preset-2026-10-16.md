# Collection list — second homepage instance

Figma file bH9A5237I07NWt19Cua9gL: desktop 47015:22239 (1920px), mobile 47228:13933 (375px). Both design contexts and screenshots inspected. Configuration-only build-preset workflow; no media work, store save, or deployment.

Changed the existing classic_collections instance in templates/index.json and replaced the single default preset in sections/collection-list.liquid with this current Figma composition. Original translated name/category retained. crafted_journeys and every other homepage instance preserved. Implementation and non-preset schema unchanged.

## Mapping

- Collection list: full width with existing page margins; desktop left/mobile center. Padding 96px desktop and 56px mobile, both ends. Header-to-list/action gaps 40px desktop and 28px mobile.
- Static header: eyebrow “Form. Function. Finesse.”, heading “Classic collections”, existing responsive h2 token, 12px internal gap.
- Static view-all-button: “Shop all”, text style, no icon, native desktop header placement/mobile below-list placement.
- Static collection-list-items: carousel, 5 desktop columns, 1 mobile column with next-slide preview, 8px gaps. Desktop slide preview off. Navigation/pagination off on both viewports; inactive pagination spacing 48px desktop /24px mobile.
- Shared static collection-card: landscape (1.3333) media, below-image left-aligned content, square corners, existing scheme-2 (#F6F6F6). Content padding 20px desktop /16px mobile. Title/description gap 4px desktop /2px mobile. Title custom size 16px; separate product-count description md (16px).

## Gaps and verification limits

- Collection picker remains empty as required by preset-only scope: six placeholder cards replace the five actual Figma collections. Images, names, and counts 6/5/8/5/3 require collection resource setup. No assets fetched or resource handles invented.
- Mobile runtime's existing preview setting uses 1.2 slides, producing approximately 284.5px cards within 343px versus Figma 212px. No fractional column/slide width setting exists; left unchanged at the closest existing one-column preview configuration.
- Global typography tracking/line-height may differ; no global settings or implementation changed. Shop all destination remains unselected.
- Local preview ports 9292 and 9300 refused connections. Responsive layout reviewed in Liquid/CSS/runtime, but rendered browser and Theme Editor lifecycle verification remain pending. No watcher started.

## Validation

Existing setting IDs, option values and numeric ranges/steps validated recursively for the target composition. Confirmed all other homepage sections unchanged and schema outside presets unchanged. git diff --check passed. Shopify Theme Check: zero errors, six warnings in unrelated existing files (_bundle-summary, _comparison-table-features, comparison-table-column, editorial-text, group, css-variables).

## Media follow-up

User requested Figma images. Five exact source images downloaded and encoded as AVIF with ffmpeg; each decoded successfully. All five uploaded into Shopify Files and AVIF processing confirmed in Admin picker. Four collections saved and creation confirmed: Shoulder Bags Mara, Top Handle Bags Mara, Evening Bags Mara, Mini Bags Mara. Their verified handles are bound in the local preset and classic_collections instance. All remain empty (0 products); Figma counts are not reproduced. Crossbody collection creation and permanent CDN URL/focal-point readback remain pending because local browser use was disabled in Work settings during execution. No theme deployment or Theme Editor save performed. See mara-classic-collections-media-2026-10-16.json.

Preset validation correction: removed IDs from dynamic eyebrow, heading, and description blocks. Static blocks retain both ID and static:true. Recursive invariant check passes. Theme Check after this correction: zero errors, six existing warnings.

## Completed crop update

All five collections now exist and their handles are bound to the default preset and second homepage instance. User authorized image cropping. Exact original Figma sources cropped to 4:3 with per-image Figma vertical offsets (483/550/322/170/626 source pixels), extending the matching #F6F6F6 canvas where necessary. All five AVIF files uploaded; collection update and get_collection readback confirm new permanent collection JPG URLs. Shopify converts collection images to JPG; AVIF Files originals retained. Receipt: mara-classic-collections-crop-2026-10-16.json. Earlier pending Crossbody/media statuses above are superseded.

Full layout is not yet an exact match: mobile preview uses 1.2 slides instead of 212px cards; names include Mara suffix; counts remain 0 because products are empty; global type metrics may differ. Browser control is disabled and latest localhost request returned HTTP 500, so no rendered visual pass is claimed. Final Theme Check: zero errors, six existing warnings; preset static ID invariant and diff whitespace pass.
