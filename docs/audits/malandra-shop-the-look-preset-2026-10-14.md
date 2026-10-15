# Shop the look preset — 2026-10-14

Applied the user-requested build-preset skill from agents-build-themes. Figma file `7BbUHDzKGaMGMkyRpu0YZ8`: desktop `52008:18936` (1920px wide, square 960px media column), mobile `52393:9083` (375px wide, 375px square media). Both design-context responses and screenshots inspected. Configuration-only scope; no media/resource work requested.

Changed the existing preset in `sections/shop-the-look-section.liquid` and only the `statement_stacks` instance in `templates/index.json`. Existing unrelated working-tree changes preserved. Reused static Image, Header → Eyebrow + Heading, Shop the look products → three Shop the look product blocks. No Liquid/CSS/JS implementation or global settings changed; no store writes, uploads, deployment or publication.

Mapping and configuration:
- Full width without padding, equal desktop columns, media left, zero desktop column gap. Mobile media first, square image on both devices, 48px between image and heading. Existing scheme-4 matches #F9F9F9 background, #181818 heading and #636363 text.
- Centered “Shop the look” eyebrow and “Statement Stacks” heading; 8px internal gap. Heading uses existing lg responsive typography (34px desktop / 30px mobile). Header max-width 770px is the nearest supported setting to 768px. Header bottom padding supplies the 40px desktop / 36px mobile heading-to-card gap. Mobile section bottom padding is 48px.
- One carousel card in both views; next-slide previews disabled. Secondary chevron navigation always visible on desktop and natively hidden on mobile. Progress bar enabled on both devices, width 220px, spacing 56px desktop / 28px mobile.
- Hotspot centers rounded to supported integer percentages: desktop (45,59), (42,81), (62,62); mobile (43,60), (62,62), (62,62). Third mobile position shares the second position because the reference shows only two dots, while the three desktop products cannot have independent mobile hotspot visibility.
- Image and product selectors remain unset in both preset and template. Removed the unrelated Elara resource bindings from the section preset. Product name and price use dynamic product data, so the Figma ring title and $25.00 cannot be configured using existing text controls.

Validation: section and nested block setting IDs, select options, range bounds/steps and allowed types passed. Section schema outside presets and all implementation bytes remain unchanged. Theme Check inspected 365 files: zero errors, six pre-existing ExcessiveSettingsCount warnings. `git diff --check` passed. Responsive CSS and resource-placeholder behavior inspected. Preview port 9301 is closed; no rendered desktop/mobile or Theme Editor verification performed. Starting a Shopify development preview uploads theme files, which requires separate deployment authorization under the invoked skill.

Remaining visible gaps (custom follow-up unimplemented):
- Reference model/ring imagery and product content are absent until resource assignment; native placeholders render instead. Unassigned-product hotspots only render in Theme Editor, not the storefront.
- Desktop card width is fixed by existing implementation at a maximum 384px versus 370px in Figma; mobile fills the available content width (about 343px) versus centered 256px in Figma. No list/card width control exists.
- Product information inherits global left alignment versus centered title/price in Figma. The block has no local alignment override; global settings were preserved.
- Desktop content has fixed responsive padding and vertical centering; precise overall height and navigation placement need rendered verification with real resources. No content padding or navigation-distance controls exist in this section.
- Mobile reference has two distinct hotspots versus three desktop products. Existing show_hotspot setting applies to both viewports; the third shares the second mobile coordinate, with possible active-ring differences.
- Existing heading mobile scale is 30px versus design-context nominal 34px; global typography was preserved. Eyebrow renders with the existing body font (Figtree).

## Media follow-up

User subsequently authorized media/resource work and requested a suitable existing store product for the second card. Uploaded malandra-shop-the-look.avif (READY), reused Tennis Eternity Stacking Ring and Fine Diamond Signet Ring, and bound both in the local preset/homepage. Composition now has two product blocks; the earlier three-hotspot mobile gap is superseded. Fine Diamond Signet Ring is a stylistic alternative, not an exact animal-ring match. Source cover cropping may differ from Figma top alignment. Details and catalog limitations are in malandra-shop-the-look-media-2026-10-14.json. No theme push or publication.

## Hotspot and store focal-point correction

User explicitly requested the image focal point in Shopify media, not a code override. Saved `malandra-shop-the-look.avif` (MediaImage 46619142979883) in Shopify Files and reloaded: focal marker DOM reads `left: 50%; top: 50%;`. Storefront image reads `object-position: 50% 50%` from Shopify image metadata. No implementation override added.

Figma MCP quota exhausted; inspected the linked desktop/mobile designs through Figma browser inspector and rendered canvas. Desktop image is 960×960, background 100%×111.534% at y=-1.363px; mobile is 375×375 at y=-0.532px. Desktop visible dots: active layer 52008:18943 at left409/bottom371.556, and visible container layer 52081:17033 at left574/bottom346.556. Layer 52008:18941 at left383/bottom161.556 is behind the image and must not supply the second visible hotspot. Mobile active layer 52393:9089 at left139/bottom124.667; default layer 52393:9099 at right126/bottom124.667. Centers account for active 50px and default 36px outer boxes.

Centered cover cropping moves the jewelry up about 5.625% compared with the Figma near-top crop. Updated supported whole-percent coordinates to stay anchored to the same jewelry: desktop (45,53), (62,56); mobile (44,54), (62,56). Both section preset and homepage statement_stacks use identical values. Restored desktop image to existing ratio_1_1 setting, matching the square Figma canvas and preventing fill-height content from changing hotspot geometry. Mobile remains square.

Read-only web verification on existing 9301 preview at 1920×1080 and 375×812: image loaded with centered focal point, desktop image 952.5×952.5 and mobile image 360×360 (native scrollbar reserves viewport space). Both visible dots land on the jewelry. Hotspot buttons exercised. Existing dev watcher synchronized local changes; no explicit push, publication, or Theme Editor save. Preset/template consistency and range checks passed. Theme Check: 377 files, zero errors, five existing settings-count warnings. git diff --check passed.

Evidence: /private/tmp/shop-look-desktop.jpg, /private/tmp/shop-look-mobile.jpg, /private/tmp/shop-look-media-center.jpg. Other section/content fidelity gaps documented above remain outside this hotspot correction.
