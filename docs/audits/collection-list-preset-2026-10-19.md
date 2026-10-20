# Collection list preset — Virelle — 2026-10-19

Sources: Figma file yTXlAfT0miBGgRuuYM4OMp, desktop 48007:10342 (1920px), mobile 48096:25966 (375px). Both high-fidelity design contexts and screenshots inspected using build-preset and figma-design-to-code.

## Configuration

Updated only the existing Collection list schema preset and homepage virelle_activity instance. Retained original name t:general.collection_list and category t:general.collections, verified against main. Reused header with eyebrow and heading; collection-list-items with static collection-card/title and dynamic collection-card-button. Section width page_width (1600px global cap), scheme-3, centered desktop/mobile, top padding96/48, bottom0/0, composition gap48/32. Header gap8/8, square eyebrow icon, copy Collection list / Shop by activity. Carousel3/1 columns, next-slide preview enabled, gap12/8, outside primary chevron navigation always visible on desktop, pagination hidden, stored pagination padding48/24, autoplay off. Card centered on-image, square corners, custom ratio0.9, content gap16/8, desktop padding40 vertical/32 horizontal, mobile32/24. Title lg/H3, product count hidden. Shop now uses existing tertiary button, arrow_up_right16px. Section View all has no destination and does not render.

Preset and homepage composition/settings are recursively synchronized. Existing collection selectors remain unset; media/content work was not explicitly requested. Six native placeholder collections render, with generic resource-derived titles. Shop now is configured but requires a collection URL outside design mode. No store content mutation, Theme Editor save, explicit theme push/publish, commit or Git push was performed. Existing development watcher was reused; its automatic uploads reflected local edits. Other concurrent working-tree edits, including unrelated homepage instances, were retained.

## Verification

- Configuration validator passed existing setting IDs, select options, range min/max/step, block allow-lists, recursive preset-instance equivalence, unchanged implementation and unchanged schema outside presets.
- Shopify native preview accepted the preset after removing IDs from dynamic blocks (IDs remain only on static schema slots; template instances retain their IDs).
- Theme Check: zero errors, six existing warnings (five ExcessiveSettingsCount and css-variables LiquidComplexity). Whitespace check passed.
- Native Chrome preview inspected at mobile375x812: centered eyebrow/heading, dark background, one card plus next-card preview, no pagination/arrows, top48/bottom0 and gap32. First card measured272px wide with a scrollbar reducing document width to360px; Figma card304px in375px frame. Placeholder imagery remains.
- Desktop1920x1080 runtime measurements: container1600px, gap48, H2 font48px, first card493.33px, adjacent gap12; positions confirmed three cards plus next preview. Desktop visual inspection was partial; mobile visual inspection completed with placeholders. Temporary viewport override reset.
- Theme Editor lifecycle, resource-backed CTA/link behavior and actual collection images were not exercised.

## Remaining gaps — unimplemented

1. Figma Running / Tennis / Yoga / Fitness titles and imagery require selected collection resources; pickers remain unset. No assets downloaded or uploaded. Shop now is hidden in storefront placeholder state because it requires collection.url.
2. Figma ratio600:700 is0.85714; custom ratio step0.1 only supports nearest0.9 (native portrait0.8 is further away). Result is slightly shorter.
3. Outside navigation reserves horizontal space, so cards measure493.33px instead of525.33px in Figma. Existing mobile peek formula also differs from the target304px card width. No independent exact-width control is available.
4. Figma arrow is a48px square overlapping the right edge and has no visible disabled previous arrow; existing shared navigation uses round buttons and displays its disabled previous arrow. No local control changes shape/disabled visibility.
5. Figma eyebrow has a filled8px square; existing eyebrow square is hollow. Current global H2 is48/30 versus target50/30. Global typography was retained because changing it affects unrelated sections.
6. Existing on-image gradient reaches65% black and covers the content area, versus Figma full-image gradient ending30%; no overlay setting is available. Existing collection-card content text alignment does not separately center its fit-width button wrapper; resource-backed CTA centering remains unverified.

No Liquid/CSS/JS implementation was changed to close these gaps. Before-edit snapshots: /tmp/virelle-collection-list-before/.

## Requested media follow-up

The subsequent image-only request is complete: uploaded four Figma photographs as AVIF to Shopify Files, created Running/Tennis/Yoga/Fitness Virelle collections with those images, and bound their verified handles to both local preset and homepage instance. Shopify collection image copies are JPG. Native desktop1920/mobile375 previews confirm images and Shop now links; the previous placeholder/hidden-CTA gap is resolved. Activity collections intentionally have no products. Titles retain the required Virelle suffix; the existing crop/ratio, gradient, card widths and CTA alignment gaps remain. Full receipts: collection-list-media-2026-10-19.json.
