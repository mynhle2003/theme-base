# Image cards preset — 2026-10-14

Used the requested build-preset skill from agents-build-themes and figma-design-to-code. Inspected high-fidelity design context and screenshots for file 7BbUHDzKGaMGMkyRpu0YZ8, desktop 52634:20790 and mobile 52641:25232.

Changed only the existing preset in sections/image-cards.liquid and the new_collections instance in templates/index.json. Preserved other sections including opal_edits and all pre-existing changes. No implementation, global settings, new schema controls, media uploads or explicit deployment commands.

Configuration mapping:
- Existing image-cards → two image-card blocks, equal desktop columns and vertical mobile flow; full width without padding; zero gaps and section padding; auto section height; both cards use native 5:4 aspect ratio, square corners, no overlay and no sticky content.
- First card: bottom center, scheme-1; 56px desktop padding; 40px mobile vertical and 56px horizontal padding. Header → eyebrow “SALE UP TO 20%” and heading “Opalus Drop Bracelets”, centered with 10px desktop / 12px mobile gap. 24px gap from header to tertiary “Shop sale” button, without icon.
- Second card: centered, scheme-3 white heading/button; 56px padding; existing lg heading “Gemstones New Collections”; 24px heading-to-tertiary “Discover more” gap, without icon.
- Image and URL selectors remain unset; media/content work was not explicitly requested. Buttons remain disabled without destinations.

Validation:
- Preset and template recursively passed setting-ID, allowed child type, select-option and range/step checks.
- Section implementation and schema outside presets preserved; other homepage instances and section order preserved.
- Shopify CLI Theme Check passed with zero errors and six existing ExcessiveSettingsCount warnings. git diff --check passed.
- Shopify toolkit validator could not run because its installation lacks @shopify/theme-check-common; CLI Theme Check used instead.
- Existing preview at http://127.0.0.1:9301 displayed “Failed to Upload Theme Files”: collection-list.liquid preset contains an id on a non-static heading block. This unrelated upload error blocks rendered desktop/mobile and Theme Editor verification. No preview process started, restarted or repaired in this task. Existing preview synchronization is managed outside this task; deployment success is not asserted.

Remaining gaps; custom follow-up unimplemented:
- Figma jewelry/model images absent; native placeholders render until media assignment. Exact crop cannot be verified without assets.
- Figma mobile second heading is “Constellation Collections”, while desktop is “Gemstones New Collections”. Existing heading has a shared text control; desktop wording retained on both.
- Existing global md heading scale is 26px desktop / 22px mobile versus 26px / 24px Figma; lg is 34px / 30px versus 34px / 32px Figma. Preserved global typography rather than adding custom controls.
- Mobile nominal second heading/button spacing is 24px; desktop also 24px. Exact line wrapping, padding geometry and overflow await rendered verification with images.

## Media assignment — 2026-10-14

User requested exact Figma image assignment. Downloaded and visually inspected the original bracelet (1440×1440) and model (960×1200) assets, converted to AVIF at quality 90 and decoded both outputs. Uploaded the two Files to verified store layouthub-template-v2.myshopify.com. Readback confirmed READY, dimensions, alt text and permanent CDN URLs. Bound verified shopify://shop_images references to image and mobile_image in both the existing section preset and only homepage new_collections. Other compositions preserved. Receipt: malandra-image-cards-media-2026-10-14.json.

Theme Check: zero errors, six existing warnings. No deployment command or store theme configuration mutation performed. Images are assigned; earlier missing-media gap is resolved. Exact Figma crop remains unverified: the current block uses native object-fit cover and offers no local crop-position setting; Figma uses differing vertical offsets. Original assets preserved without editing. Rendered desktop/mobile verification is still blocked by the previously observed unrelated collection-list upload error.

## Crop correction — 2026-10-14

User requested downloading the already-cropped Figma images. Supersedes original-image bindings and the previous crop-position gap. Exported only isolated Image nodes (no headings/buttons): desktop 52634:20797 / 52634:20804 at 960×768, mobile 52641:25239 / 52641:25246 at 768×615 (Figma raster rounding from nominal 614.4px). Visually inspected all four crops against the supplied references. Converted to AVIF quality 95, decoded outputs and uploaded four dedicated Files. Readback confirmed all READY with expected dimensions. Bound separate image/mobile_image references in existing preset and homepage new_collections only. Original Files retained. No implementation edits or deployment commands. Theme Check zero errors, six existing warnings; diff check passed. Receipt: malandra-image-cards-crop-2026-10-14.json. Full storefront/Theme Editor verification remains unavailable due to the previously observed unrelated collection-list upload error.
