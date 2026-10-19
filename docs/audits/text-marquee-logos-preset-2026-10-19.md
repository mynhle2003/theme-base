# Text marquee (custom) — logo preset

Sources: Figma bH9A5237I07NWt19Cua9gL desktop 47062:14259, mobile 47230:15767. Both design contexts and screenshots inspected.

Restored the default Custom section preset exactly from local main. Replaced the existing named Text marquee (custom) Add section preset with the ten-logo composition previously stored in the default preset. Preserved Image comparison (custom).

Replaced homepage brand_logos with text_marquee_logos at the same order position, named Text marquee (custom). Initially reused all ten existing Shopify image references in order. Preserved the separate scrolling_values instance and all other homepage content. Initial pass did not upload media; follow-up below replaces image references. No store theme configuration writes performed.

Composition: Custom section > marquee > ten _marquee-image blocks. Full bleed; top padding desktop 96px/mobile 56px; bottom padding zero; gap 16px on both viewports; mobile image width 96px. Parallax explicitly disabled. Existing marquee animation retained.

Known configuration gap: desktop image width uses 188px rather than Figma 186px because the existing range accepts multiples of 4. Original image ratio retained. Image pixels, rendered crop geometry, and actual browser desktop/mobile output were not verified; no exact visual-match claim. No implementation/schema-setting changes made.

Validation: default preset equals main; unique preset names; nested block allow-lists, setting IDs/options/range steps pass. Shopify Theme Check: zero errors, six existing ExcessiveSettingsCount warnings in unrelated blocks. git diff --check passes. No commit or explicit push/publication performed.

## Image ratio correction

User requested image fidelity correction. Downloaded all ten original image assets from the supplied Figma context and prepared transparent 744×372 (2:1) AVIF canvases, applying the source slot scale/position/crop transforms. Marc Jacobs retains contain fitting as specified in Figma. No logo redraw or AI generation. Inspected the complete decoded contact sheet.

Uploaded ten separately named zevra-marquee-*-2x1.avif files to the verified layouthub-template-v2 store. Replaced references only in the named logo preset and text_marquee_logos homepage instance; Original ratio now resolves to 2:1 naturally. Downloaded and decoded every returned Shopify CDN image: all ten are 744×372. Source hashes/transforms and upload/CDN readback receipt: text-marquee-logos-media-2026-10-19.json. Old logo files and other consumers remain intact.

The earlier image-ratio/crop gap is resolved by prepared assets. Desktop slot remains 188×94 due to range-step limits versus design 186×93; mobile slot is 96×48. Actual storefront/browser verification is still pending. Theme Check after reference updates: zero errors, six existing warnings.
