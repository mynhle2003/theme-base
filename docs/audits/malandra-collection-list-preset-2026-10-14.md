# Collection list preset — 2026-10-14

Applied the requested build-preset skill. References: Figma file `7BbUHDzKGaMGMkyRpu0YZ8`, desktop `52325:1292` and mobile `52393:9054`; both design-context responses and screenshots inspected.

Changed only the existing Collection list section preset in `sections/collection-list.liquid` and the `categories` instance in `templates/index.json`. Other working-tree changes were preserved. No implementation, global settings, resource selection, store write, upload or push.

Composition: existing static Header → Heading, Collection list items → Collection card → Collection card title. Shop By Category uses heading-lg (34/30 desktop/mobile); cards use heading-md (26/22), a 6:7 ratio, centered below-image titles and inline body-xs product counts. Removed the separate count description. White scheme-1, 20px content top padding, zero other content padding. Three desktop columns, one mobile column with native next-slide preview, 16px gaps. Header/body gap 48/36px, section padding 10px top and 80/56px bottom. Navigation and pagination disabled in both views; inactive pagination spacing retained as 48/36px. Section preset and homepage instance share the same configuration.

Validation: preset IDs, select values, range bounds/steps and nested allow-lists passed; Theme Check: zero errors, six pre-existing ExcessiveSettingsCount warnings; git diff --check passed. Desktop/mobile responsive implementation was inspected. Preview port 9301 was closed, so no rendered storefront or Theme Editor verification was performed. Starting preview uploads a development theme and requires separate deployment authorization under build-preset.

Remaining gaps:
- Resources remain unselected, yielding six native placeholders instead of Figma’s three named collections and jewelry images. Names and counts are dynamic; the reference has Necklace 24, Earrings 18, Bracelet 20. Media/resource work was not requested.
- Mobile reference card width is 256px at a 375px viewport. The existing next-slide preview uses 1.2 slides and cannot set a fixed 256px width; with 343px available width and 16px gap, native slide width is about 283px. Custom implementation was not added.
- Count padding is fixed at 6px and its color uses 70% of the heading color; Figma uses a 4px gap and text color #636363. Existing controls cannot change these.
- Header max-width remains the supported 770px step versus 768px in Figma. Actual typography, cropping, wrapping and dimensions need rendered comparison after resource assignment. Global typography uses the theme’s existing responsive scale.

## Media assignment completed

Used setup-store/store-content-media on 2026-10-14. Exact three Figma source photos uploaded as AVIF and assigned to dedicated Necklace / Earrings / Bracelet Malandra collections on layouthub-template-v2.myshopify.com. Reused existing category products only, excluding unrelated products. Bound handles in section preset and homepage local configuration; hid the ` Malandra` title suffix. Images and Online Store publication read back successfully. Shopify collection images are JPG derivatives, while uploaded Files sources are AVIF. Actual product counts are 4/3/2, compared with 24/18/20 in Figma. Prior unselected-resource gap is resolved. Theme Check: zero errors, six existing warnings; diff check passed. No theme deployment or rendered storefront verification. Receipt: malandra-collection-list-media-2026-10-14.json.
