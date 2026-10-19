# Scrolling cards preset — 2026-10-19

Request: replace the three homepage Image text split layout instances with Arche-style scrolling cards and teach build-preset the routing.

## Design mapping

Figma file `bH9A5237I07NWt19Cua9gL`, desktop `47062:14686`, mobile `47230:15732`. Both design contexts and screenshots inspected. Desktop annotation explicitly requests containers 2 and 3 scrolling upwards.

- One `scrolling-cards` section, three `scrolling-card` blocks; empty static header.
- Desktop: 1600px container, 64px image/content gap, 64px content inset, 4:3 images, vertically centered content, 96px section padding and card gap.
- Mobile: image then content, 28px gap, no content inset, 56px outside padding, 64px card gap, sticky disabled to keep long copy readable.
- Preserve existing three Shopify image references, text, and button links. No new media/store content requested or uploaded.
- Arche fade/scale runtime adopted with viewport-centered sticky tops, ResizeObserver and editor cleanup. Default effect remains scale for older instances; new homepage/preset selects fade.
- Preset named `Scrolling cards`, category `Media`; no separate Custom section implementation.

## Validation

- Template order, removal of exactly three old instances, nested block setting IDs/options/ranges: passed.
- JavaScript syntax: passed (`node --check`).
- `git diff --check`: passed in both repositories.
- Theme Check: zero errors, six existing warnings outside changed scrolling files.
- Existing Zevra watcher on port 9300 accepted the updated scrolling schema after correcting range step to 2 (101 values).
- Visual desktop/mobile and Theme Editor lifecycle QA remain blocked: preview displays an existing `sections/press.liquid` upload error, `press-quotes` has undefined setting `logo_position`. Do not claim pixel parity, asset geometry validation or interactive runtime QA until that preview issue is resolved.

## Known configuration approximation

Mobile Figma row gaps total 64px between rows 1/2 and 2/3. Preset uses one consistent 64px card gap. Existing referenced images are preserved; identity/geometry against the Figma originals has not been verified in rendered output due to the preview blocker.
