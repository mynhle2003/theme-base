# Collection list — Zevra setup and preset

Source: Figma bH9A5237I07NWt19Cua9gL, desktop 47062:13183 (1920px), mobile 47260:13376 (375px). Both design contexts and screenshots were inspected in this chat. Applied store-content-media first, then build-preset. No new section or block type retained.

## Store content

- Confirmed store: layouthub-template-v2.myshopify.com. Six dedicated manual Zevra collections avoid modifying existing Mara collection images or membership.
- Exact card order: Crossbody Bags, Work Bags, Mini Bags, Top Handle Bags, Shoulder Bags, Evening Bags.
- All six have exactly three relevant existing bag products. Admin get_collection readback and storefront Collection Card title counts both return 3 for every collection. Existing product prices, publication, inventory and variants were not modified; no products were created.
- Six exact Figma PNG assets were converted to real AVIF and decoded successfully before upload. Shopify Files retains permanent AVIF URLs; Shopify converted collection images to JPG. All six collection images load in the storefront.
- IDs, handles, source-file URLs, permanent collection image URLs and product IDs are in collection-list-setup-2026-10-19.json. The six media entries were appended to docs/theme-init/zevra-media.json.

## Existing composition

- Updated only classic_collections in templates/index.json and the single original Collection list preset in sections/collection-list.liquid. Original translated name/category retained. Other homepage instances and template order preserved; section implementation and non-preset schema unchanged in this setup/preset step.
- Existing header: eyebrow + h2, 12px internal gap; Explore collections links to /collections through the existing View all button, beside the header on desktop and after the grid on mobile.
- Existing Collection list items: Grid, desktop Mixed sizes, two large first cards and four smaller cards per subsequent row. Desktop column gap 8px and row gap 40px; mobile one column and 24px gap. Carousel controls inactive and absent from rendered output.
- Existing Collection Card: 3:2 media, centered below-image title/count, square corners; content top padding 24px desktop / 8px mobile, other card padding 0. Title custom 20px, product count body Small (14px).
- Section full width with global margins; top padding 96px desktop / 56px mobile, bottom 0; header/body gap 40px desktop / 28px mobile.

## Verification

- Shopify Theme Check: 0 errors, 7 pre-existing warnings. Recursive schema validation passed for all preset setting IDs, enum values, range steps and nested block files. git diff --check passed.
- Live development preview at localhost:9300: all six permanent images, links and counts verified. Desktop grid computed four equal tracks, 8px column gap / 40px row gap; first two cards 900.5px wide, lower four 446.25px; image ratio 1.5. Browser scrollbar reserves 15px from the 1920px viewport.
- Mobile at viewport 375px: one column, 24px gap, section top padding 56px, all six counts 3, image ratio 1.5 and no grid overflow. This desktop browser reserves 15px for its scrollbar, so effective content is 360px and cards 328px rather than the scrollbar-free Figma card width 343px. Temporary viewport override reset after checks.
- Preview screenshots: /tmp/zevra-collection-list/preset-desktop.png and /tmp/zevra-collection-list/preset-mobile.png. Native header remains visible in the desktop screenshot.
- No Theme Editor save, direct theme API configuration write, explicit theme push or publication was performed. The already-running development preview consumed local changes.

## Remaining visual differences

- Collection titles include the Zevra suffix required by the setup-store naming convention; the existing shared title block has no manual per-collection display-title override.
- Figma card title is 20px desktop / 18px mobile. Existing custom title size applies 20px at both breakpoints; no separate mobile custom-size control exists. Global typography/letter spacing and the inherited title/count spacing remain unchanged.
- These gaps are intentionally recorded under [build-preset](../../../agents-build-themes/skills/build/preset/build-preset/SKILL.md), which instructs: "do not edit Liquid/HTML outside `{% schema %}`, CSS, JavaScript, snippets, custom CSS fields, to chase visual fidelity." No additional implementation changes were made during the preset step.
