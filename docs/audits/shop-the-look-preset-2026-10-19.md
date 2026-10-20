# Shop the look preset — Virelle

References: desktop Figma yTXlAfT0miBGgRuuYM4OMp / 48002:2312 (1920px); mobile 48096:9438 (768px). Both design contexts and screenshots inspected.

Changed only the existing Shop the look preset in sections/shop-the-look-section.liquid and homepage instance shop_the_look_section_mhb9aq in templates/index.json. Original translated name/category retained. Existing _shop-the-look-image, header, eyebrow, heading, text, shop-the-look-products and two shop-the-look-product blocks reused. Existing product handles preserved; no new media selected or uploaded. Image picker remains unset.

## Mapping

- Full width without side padding, zero column gap, media right / mobile first; scheme-3 already supplies #181818.
- Square media at both sizes; no outer desktop padding. Mobile header top padding 64px and section bottom padding 64px.
- Centered header, square eyebrow icon, unchanged H2 scale, exact description copy. Header gaps 8px; header bottom padding 48px desktop / 40px mobile.
- One-column carousel, desktop outside chevrons, progress bar both viewports, top spacing 40px desktop / 24px mobile. Minimum supported progress width 100px selected.
- Enabled both hotspots: desktop (69%,36%), (40%,70%); mobile overrides (69%,34%), (40%,70%). Measured centers: desktop (661,341), (387,676) in 960px image; mobile (531,258), (308,535) in 768px image. Rounded to integer schema step. These are provisional slot coordinates: missing photo prevents source/crop compensation or anchor validation. Store focal point was not mutated or read back.

## Verification and gaps

Reloaded the existing port-9300 preview, which reflected updated description and hotspots. At 1920px viewport (1905px after scrollbar), media and content each measured 952.5px, media square; card width 384px. At 375px viewport, media 360px square precedes content, card width 328px, navigation hidden. Both hotspot buttons are present and clickable; carousel active-index assertion was inconclusive, so click-to-card synchronization is not claimed verified. Temporary viewport overrides reset.

Material gaps left unimplemented under build-preset boundaries:

- Figma mobile frame is 768px, but native theme switches to desktop at 768px. Preview at that exact width remains two columns (376.5px each). No setting controls breakpoint. Stacking confirmed only below 768px.
- Lifestyle image is unset and renders a placeholder; photo crop, focal point and hotspot anchoring cannot be verified. Existing product imagery/resources are retained; photo background, badge, title typography and quick-action presentation differ from Figma.
- Figma card is 294px wide at desktop and supplied mobile size. Native one-column width caps at 384px desktop and fills available width on mobile; no width setting exists.
- Progress minimum is 100px versus Figma 80px. Existing pagination thickness and colors retained.
- Header supports one shared gap rather than separate 8px eyebrow/title and 12px description gaps. Existing typography and square icon geometry retained.
- Native content horizontal padding, navigation positions, hotspot active appearance and card styling remain implementation-owned. No new CSS, JS, Liquid markup, schema controls, or global theme changes were introduced.

Theme Check: 0 errors, 7 warnings in current worktree. Configuration checks passed for setting IDs, options and range steps. Implementation and schema outside presets unchanged against before-edit snapshot; unrelated homepage sections and order unchanged. Scoped git diff --check passed. Interactive Theme Editor add/save/reload not tested. No explicit push, publish, Theme Editor save, store mutation, commit or Git push performed; existing dev preview reused.

Before-edit copies: /tmp/virelle-shop-look-before. Theme Check output: /tmp/virelle-shop-look-theme-check.json.


## Requested media and product-image follow-up

Uploaded original Figma lifestyle image as a real AVIF (1444 × 1444), after baking the verified crop transform from nodes 48002:2321 / 48096:9442 into the asset. Source PNG was 1520 × 1521. Shopify readback confirmed READY, image/avif and expected dimensions. Both preset and homepage desktop/mobile pickers now use shopify://shop_images/virelle-shop-the-look.avif. Focal point saved in Shopify Files at image center; after reload storefront image style read back object-position:50.0% 50.0%. No code override added.

Hotspot coordinates remain desktop (69,36)/(40,70), mobile (69,34)/(40,70), now anchored to the actual square image. Desktop screenshot confirmed first dot on sports bra, second on leggings. Mobile measured centers 68.9974%/33.9974% and 40%/70%. Clicks selected the matching SoftMotion Sports Bra and Effortless Seamless Leggings cards, confirmed by data-shop-the-look-active. Existing 768px breakpoint gap remains.

User also flagged the first product image and hover image. Original Figma front and back PNGs have transparency; composited the original images over Figma #f5f5f5 and encoded real AVIF at 1440 × 1800. Uploaded prepared images and replaced the content of existing MediaImage 46714028327211 (front) and 46714030063915 (back). This retains product gallery order and existing variant references, and affects this product wherever those images are used. No other product content changed. Existing .png URLs retain their filenames; they do not establish the decoder format. Independent get_product readback confirmed updated image versions and alt text.

Front image and lifestyle visually checked in the existing preview at 1920px; mobile at 375px. Hover-image replacement succeeded and readback confirmed its updated version, but the final browser verification timed out twice; the revised hover state was not visually confirmed. Temporary viewport was reset after completed responsive checks, though the later timed-out attempt requested 1920px again and its reset could not be confirmed.

Receipt: docs/audits/shop-the-look-media-2026-10-19.json. Prepared sources: output/shop-the-look/. Screenshots: /tmp/virelle-shop-the-look-desktop-final.png and /tmp/virelle-shop-the-look-mobile-final.png (captured before hover replacement). Current Theme Check has 0 errors; warning count is recorded in /tmp/shop-the-look-media-theme-check.json. No explicit theme push/publish, Theme Editor preset save, commit or Git push. Existing development watcher reflected local picker configuration.


## Option-first layout customization and pagination upload fix

Owner authorized custom layout after existing controls. See theme-customizations/virelle-theme.md → Shop the look calibration for the setting/CSS ownership mapping. Saved progress values are now 100 in both template and section preset, schema minimum remains 100, and runtime calibrates that value to the Figma 80px. This supersedes the earlier minimum-width gap. Card width, navigation rail/centering, title missing attributes and mobile quick-add geometry have scoped Virelle CSS; existing ratios/sizes/gaps, navigation choice and pagination spacing remain settings. Global current settings select Heading title font, Icon quick-add and non-full-width action. No store content changes in this pass.

Theme Check: 0 errors, 8 current working-tree warnings. Schema/JSON and saved range values pass. Preview cannot be checked because local browser use is disabled in Work settings. Thus card/navigation visual matching and interactive behavior after these new styles remain unverified. No explicit push or publish.


### Correction: use the actual Max width minimum of 80px

Owner clarified that the existing Max width control itself must allow 80px. Updated shop-the-look-products schema minimum and Liquid bounds to 80, removed the 100-to-80 render conversion, and saved 80 in both section preset and homepage instance. Other values now render exactly as configured. Earlier descriptions of the conversion are superseded. The preview upload error came from a stale store block schema; the changed block schema must synchronize before or together with its preset/template consumers. No explicit deploy was performed.
