# Mara — Shop the look: carousel banners

User-authorized theme-specific implementation, followed by local build-preset configuration. Sources: Figma file bH9A5237I07NWt19Cua9gL, desktop 47015:19975 and mobile 47228:14061. Both design contexts and screenshots inspected.

## Contract

- Content/commerce section in JSON templates; replaces only `shop_the_look` in `templates/index.json`. Existing Shop the look section and alternate template remain available.
- Section owns width, two-column layout, responsive order and spacing; static Header and Product list retain existing contracts. Static Banners owns ordered private Banner children. No app block slot.
- Banner uses existing `media-card` renderer and existing heading/button blocks, with no Padding group or width controls. Parent supplies content inset: 40px desktop, 24px vertical / 16px horizontal mobile. Banner owns media, ratio, overlay, color scheme and child composition.
- Product resources remain owned by existing `shop-the-look-product` blocks. Ordered pairing: product 1 → banner 1, etc. If banners are fewer than products, retain the final banner for remaining products. Empty banners render no content; empty/missing products use the existing placeholder behavior.
- Synchronization observes the shared product active attributes, so carousel arrows, swipe and product editor selection use the same state. Banner editor selection navigates the matching product when available. Observers and listeners are scoped per instance and cleaned on section unload; reloading initializes again.
- Inactive banners are inert and aria-hidden, hidden visually and excluded from pointer interaction. Videos in inactive banners are paused. Reduced motion removes fade transitions. Without JavaScript, first banner remains visible and other banners remain hidden.

## Preset mapping

Exact Add section preset: `Shop the look: carousel banners`; existing Shop the look category retained. Three editable placeholder pairs. Desktop uses equal columns, media right, zero column gap, 96px top spacing; mobile uses media first, zero section gap/top spacing, 56px product-area vertical padding and 240px product carousel width. Banner ratio is 5:4 on both devices. White banner scheme, gradient overlay, lg heading and tertiary CTA reproduce the reference hierarchy and copy.

Image and product selectors intentionally remain unselected under build-preset's media boundary. No media upload or product creation requested/performed. No temporary Figma URL is used by the implementation. Resource-dependent image crop, swatches, actual product title/price and exact content height therefore remain unverified against the design.

## Evidence

- Full `shopify theme check --fail-level error`: PASS, 376 files, 0 errors, 6 retained ExcessiveSettingsCount warnings in `_bundle-summary`, `_comparison-table-features`, `comparison-table-column`, `editorial-text`, `group`, and `image-comparison`.
- Preset and template traversal: all nested block types, setting IDs/options and private Banner control removals pass.
- Temporary Node harness: ordered state synchronization, inactive accessibility, banner editor selection and unload/reload pass. Harness is outside the repository; no test files changed.
- `node --check` for section JavaScript and `git diff --check`: pass.
- Existing localhost preview: desktop banner 632.5 × 506px and product width 384px; next navigation reaches the corresponding product/banner. Mobile viewport 498px (483px content after scrollbar), banner 483 × 386.39px, product width 240px, 56px gap from banner to product; swipe selects product/banner index 1 together. Mobile screenshot `/tmp/mara-look-banners-mobile.png`.
- Live Theme Editor add/duplicate/reorder/save/reload matrix and exact Figma viewport screenshot comparison remain unverified. Runtime lifecycle was checked in the harness.
- Shopify skill validator could not run because its installed package lacks `@shopify/theme-check-common`; CLI Theme Check and direct schema traversal used instead.

No commit or explicit theme push/publish performed. Existing running theme-dev preview reflects local file changes. Unrelated working-tree edits preserved.

## Follow-up: shared Banners controls

User requested the section prohibit adding any dynamic theme blocks. Removed its schema block allow-list; the three static slots remain. The Banners child allow-list still permits private Banner items. Banner retains only Content → Link and the complete Background group (media and overlay). Banners now owns Open link in new tab, Size/ratio/device, Content positioning/gap, Border and Appearance/color scheme. Existing preset/template values move from the first banner into Banners and are removed from child settings. Content child blocks remain individually editable.

The shared media-card renderer accepts opt-in inherit_presentation. Banners supplies presentation classes and scoped ratio/gap CSS, and inserts its shared link target into marked child links. Each Banner still owns media, link and overlay. Other callers keep their existing settings behavior. Shopify does not support passing arbitrary settings through dynamic content_for blocks; no unsupported context arguments remain. Schema ownership and preset/template migration assertions pass. Full Theme Check: 377 files, 0 errors, 6 existing settings-count warnings retained. git diff --check passes.

Live localhost HTML verified three banners use Banners scheme-3, bottom-left positioning, 5:4 ratio and shared 16px/12px content gaps. Upload-order errors cleared after dependent schemas synced.

## Media setup follow-up

User explicitly authorized image setup and creation of analogous products/images for items 2 and 3. Verified connected target layouthub-template-v2.myshopify.com, USD and Shop location 117337850155. Reused existing Peekaboo Soft - Beige (15429089427755), which already has four images; its prices, variants, tags and inventory were preserved. Uploaded original Figma banner as verified AVIF.

Created new Coffee and Sage Green products with source-matched USD 3,700 prices; no compare-at price invented because Figma has one price. Each new variant has 20 demo units, category aa-5-4, linked Color metaobject and custom.summary. Generated gallery workflow uses gpt-6-luna/max agents. Coffee has four READY AVIF assets, correct primary variant media and custom.secondary_image, and is published to Online Store. Receipt records readback.

Final visual browser verification is currently unavailable because local browser use is disabled in Work settings; localhost HTML checks remain available. Banners object-fit now aligns images to center top to retain the original portrait subject within the reference landscape slot.

Final readback: all three products ACTIVE and published to Online Store. Coffee and Sage Green each have four READY image/avif media in catalog/lifestyle/left/right order, 20 units, USD 3,700, linked Color, summary, correct variant primary image and secondary_image. All three local preset/template banner and product selectors are assigned. Beige was reused with its existing four PNG media unchanged. New media receipt: mara-shop-the-look-media-2026-10-16.json.

The obsolete closest.look_banners argument is fully removed; content_for blocks is called without context arguments. The preview sync later encountered invalid Shopify CLI credentials, so final bindings may not yet appear in the remote dev theme. Reauthentication/restart is required for that sync. No explicit theme push/publish or commit was performed. Final Theme Check has 0 errors and 6 retained settings-count warnings.

## Header and column alignment follow-up

Added the shared Heading child with text Shop the look to the fixed Header in both Add section preset and index template. Only the template Header is disabled, preserving its saved child for later enabling. Both media and product content align-self center in the parent grid; removed the product column full-row min-height that defeated intrinsic vertical centering. Mobile ordering and product-area padding remain in place.
