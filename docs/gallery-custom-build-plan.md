# Gallery (custom) — configuration-only preset

Skill: `skills/figma-preset-section-builder/SKILL.md`.

- Placement: homepage after Icon with text; section type `gallery-custom`.
- References: desktop Figma 46028:7301 (1920 × 448), mobile 46240:8880 (375 × 256).
- Mapping: existing Gallery shell → Carousel → five Slide blocks → square Image blocks in Figma order.
- Existing controls: full width without padding, zero gaps/padding at both breakpoints, square image ratios and radius; four desktop columns and one mobile column; navigation, autoplay and pagination disabled.
- Pagination stored padding: 48px desktop / 36px mobile; both hidden, so no visible pagination spacing.
- Media: retains five Shopify Files image-picker references under the user's explicit request to upload AVIF images. No new media selection/upload during this rebuild.
- Boundary: only existing preset and homepage configuration are changed. Previous custom strip markup/CSS/settings and image fallback have been removed. Section/block implementation and non-preset schema match their original versions.

## Remaining visual gaps

- Figma uses 448px fixed desktop tiles; existing carousel divides available width into four equal columns (480px at 1920px).
- Figma uses 256px mobile tiles and reveals the next image; existing carousel supports one or two whole mobile columns (375px square with one column at 375px), without a mobile partial-slide control.
- Fixed responsive pixel widths and mobile partial-slide behavior would require custom implementation; neither is implemented.
- Isolated browser QA with the existing carousel CSS/JavaScript and equivalent block markup: 1920px viewport renders four 480px square images; 375px viewport renders one 375px square image. All five images decode and page width has no horizontal overflow.
- Theme Check: 0 errors, 35 warnings. Customization check and diff whitespace check pass. Implementation and schema outside presets match the original section.
- Live storefront/Theme Editor verification remains pending.

## Shopify Files upload ledger — 2026-10-05

Store: `layouthub-template-v2.myshopify.com`. Five new files created; preflight found no matching gallery filenames. Files read back as READY. Deletion is not part of this operation. No theme push or publication.

| Filename | Media ID | CDN URL |
| --- | --- | --- |
| essen-gallery-1.avif | `gid://shopify/MediaImage/46369383776555` | https://cdn.shopify.com/s/files/1/1024/2192/2091/files/essen-gallery-1.avif?v=1791169209 |
| essen-gallery-2.avif | `gid://shopify/MediaImage/46369391411499` | https://cdn.shopify.com/s/files/1/1024/2192/2091/files/essen-gallery-2.avif?v=1791169215 |
| essen-gallery-3.avif | `gid://shopify/MediaImage/46369400258859` | https://cdn.shopify.com/s/files/1/1024/2192/2091/files/essen-gallery-3.avif?v=1791169220 |
| essen-gallery-4.avif | `gid://shopify/MediaImage/46369408188715` | https://cdn.shopify.com/s/files/1/1024/2192/2091/files/essen-gallery-4.avif?v=1791169225 |
| essen-gallery-5.avif | `gid://shopify/MediaImage/46369416511787` | https://cdn.shopify.com/s/files/1/1024/2192/2091/files/essen-gallery-5.avif?v=1791169229 |
