# Collection list preset — 2026-10-16

Applied build-preset configuration-only workflow. Fresh Figma design context and screenshots: desktop 47015:19682, mobile 47228:13906, file bH9A5237I07NWt19Cua9gL. No media work or deployment requested.

Updated only presets in sections/collection-list.liquid and the existing crafted_journeys instance in templates/index.json. Retained original translated preset name/category from main and other homepage instances. Existing unrelated working-tree changes preserved.

## Mapping

- Collection list section → static header (eyebrow + heading), view-all-button, collection-list-items → static collection-card → title + description.
- Existing grid: three desktop columns, one mobile column; 8px desktop column gap, 32px mobile card gap. Existing shared layout puts the action beside the desktop header and after the mobile cards.
- Preserved top padding 96px desktop / 56px mobile, bottom 0, desktop left/mobile center alignment, desktop header gap 40px. Changed mobile section gap from 32px to 28px.
- Card content top padding 24px and title/description gap 6px replace default 16px top padding and previous 12px content gap.
- Description uses md body size (16px); card title uses md heading token (24px desktop / 18px mobile) instead of sm (18px / 16px).
- Image ratio uses existing custom option 0.9, nearest allowed 0.1 step to 600/700. Previous portrait option was 0.8.

## Remaining gaps

- No collection resources selected: current implementation produces six placeholder cards, rather than the three Figma collections. Actual images, titles, descriptions and counts 4/3/5 require collection resources; title and description blocks have no manual text controls. No assets fetched or uploaded, and no resource references invented.
- Figma image ratio is 0.857143; the nearest supported ratio is 0.9. At 343px width this gives approximately 381px height versus 400px in Figma.
- Responsive heading token gives card title 24px desktop versus Figma 20px; mobile 18px matches. Custom font size would lose responsive sizing. Section heading resolves h2 to 32/24px as designed.
- Global heading tracking and line-height differ from Figma in places; no preset-level controls exist. Global typography unchanged.
- Explore collections link remains unselected pending a destination.
- Localhost:9300 refused connection. Desktop/mobile behavior reviewed in Liquid/CSS; rendered visual verification remains pending. No watcher, store push, or Theme Editor save performed.

## Validation

Preset and target instance setting IDs, option values and range steps validated against their section and nested block schemas. Original name/category retained; one preset registered. git diff --check passed. Shopify Theme Check completed with zero errors and six warnings in existing unrelated code.

## Follow-up — Essen ratio controls

The user subsequently authorized implementation changes to mirror Essen ratio options and replace scalar Custom ratios with W/H. The homepage Crafted for journeys instance now uses exact W=6/H=7; the prior 0.9 image-ratio gap above is resolved for that instance. See mara-image-ratios-essen-2026-10-16.md for migration, implementation records and validation. Media/resource and visual-preview limitations remain.
