# Mara Gallery full width strip — 2026-10-16

Figma desktop `47015:20289`, mobile `47260:13564`, file `bH9A5237I07NWt19Cua9gL`.

Mara-specific checkbox `show_first_on_mobile` follows Open link in new tab, defaults false. Its class applies order -1 below 768px; desktop merchant order is preserved. Mobile feature spans both columns, uses content height and 64px outer vertical padding plus preset group 16px padding (80px total each side). Other image tiles remain square. Single DOM, no JavaScript or editor lifecycle changes.

Section Add preset and homepage community_gallery enable the option. Desktop sequence: image 1, image 2, feature, image 3, image 4. Group uses 16px gap, 24px horizontal /16px vertical padding; heading uses shared xl/H2 typography and local 2px tracking. Follow us reuses tertiary button. Destination remains unset because no social URL was supplied.

Four exact Figma image sources downloaded under output/gallery-strip, visually inspected and uploaded to verified layouthub-template-v2.myshopify.com. Permanent image-picker references: shopify://shop_images/mara-community-gallery-1.png through mara-community-gallery-4.png. Source dimensions:1080x1080,1440x1800,1080x1350,1638x2048. Shopify MediaImage IDs:46675494175019,46675505021227,46675512099115,46675519275307. Local source files are not for release.

Validation: Gallery schema JSON and preset/homepage assertions pass; git diff --check passes. Final full shopify theme check --fail-level error:0 errors /6 ExcessiveSettingsCount warnings (_bundle-summary, _comparison-table-features, comparison-table-column, editorial-text, group, image-comparison). Earlier run saw transient unrelated errors during concurrent workspace edits; final run passed. Toolkit validator unavailable: bundled @shopify/theme-check-common dependency missing; CLI Theme Check used as fallback.

Actual storefront/Theme Editor visual verification blocked by existing localhost:9300 Upload Errors screen: config/settings_schema.json, Section 1: settings is not a valid attribute. No screenshot or runtime geometry claimed. No manual theme push, publication, commit or Git push. Existing unrelated workspace changes preserved.

## Mobile order correction

Browser reproduction at 375px confirmed order -1 but feature height 0px: block stylesheet loaded later and overrode the equal-specificity mobile content rule with position absolute and padding 0. Increased mobile content selector specificity by anchoring it to the strip grid; this preserves content-driven height independently of stylesheet load order.

Verified development storefront in browser after correction: at375px viewport, feature order -1 and height228.80px; image rows follow below. Screenshot output/gallery-strip/mobile-order-fixed.png. At1920px viewport all five tiles retain order0, same top edge and381px square geometry (scrollbar leaves1905px layout width). Full Theme Check0 errors /6 existing settings-count warnings; git diff --check passes. No Theme Editor save or manual push.
