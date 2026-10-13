# Arche — Hotspot: Product callout

Date: 2026-10-13. Branch: `theme/arche-theme`.

## Reference and configuration

- Desktop Figma `v6iKvP4OuW3y0A9bbxel5U`, node `46306:2102`: 1920px section, 1824px media width, 2100:900 media ratio → 781.714286px media height; bottom padding 96px.
- Mobile node `46339:2290`: 375px section, 343px media width, 400:300 media ratio → 257.25px media height; bottom padding 56px.
- Current MCP requests were rate-limited. Reused saved high-fidelity Figma responses `/private/tmp/arche-figma-0.txt` and `/private/tmp/arche-figma-1.txt` containing the exact nodes and asset mapping; mobile browser inspection confirms 343 × 257.25 and 56px bottom padding.
- Existing section `hotspot`, static block `product-callout`, two existing `hotspot` children. Updated first existing section preset and `templates/index.json` → `shop_the_look`; original names, schema controls and composition retained.
- Selected existing Medium choices, transparent overlay, no copy, Plus icons, click behavior, `quick view` action label. Existing `content_padding_mobile=0` removes the empty mobile content panel's default 48px height.
- Hotspot centers (integer percentages permitted by schema): shirt desktop (60,34), mobile (63,37); trousers desktop (32,54), mobile (32,57). Source centers: desktop (1089,266.94) and (585,424.94); mobile (217,94.5) and (110,145.5).
- Existing store products: `ts-03-essence-long-sleeve-blueberry` ($99 visible in storefront) and `tp-01-essence-straight-chocolate-2-0` (existing chocolate trousers). No products created or catalog data changed.

## Height calibration — not custom

Owner explicitly classifies calibration of existing height options as theme configuration, not custom. Updated build-preset skill and its height reference accordingly. No `(custom)` naming or Customizations entry added for this calibration.

Only the fixed min-height scale is overridden in `sections/hotspot.liquid`, scoped under `.hotspot-section`; shared Product callout mappings, Adapt, Full screen, markup and JS stay intact.

| Viewport | Previous XS / S / M / L / XL (px at 10px root) | Calibrated XS / S / M / L / XL (px) |
| --- | --- | --- |
| Desktop | 420 / 560 / 720 / 900 / 1080 | 456 / 608 / 781.714 / 977 / 1173 |
| Mobile | 400 / 480 / 620 / 760 / 900 | 166 / 199 / 257.25 / 315 / 373 |

Scale is proportional to the existing Medium value, rounded to practical units; strict increasing order retained. On base update, review upstream mappings before preserving this section's calibrated scale. The existing `theme-base check-custom` implementation still classifies any non-schema CSS change as custom and reports `sections/hotspot.liquid`; this classification incompatibility is unresolved, not a passed check. No change to sync tooling was included in this section task.

## Media receipt

Store: `layouthub-template-v2.myshopify.com`. Draft preview theme: `Arche template (Minhle)`, ID `192282820907`.

Original Figma media asset: `437e3.png`, decoded 1024 × 683. Converted actual AVIF with centered object-cover crops matching the design slots; desktop 1008 × 432 (7:3), mobile 900 × 675 (4:3). Decoder verification passed before upload.

| File | Shopify MediaImage ID | Verified |
| --- | --- | --- |
| arche-hotspot-desktop.avif | 46594582675755 | AVIF, 1008 × 432, 82.34kB; Files editor and storefront load |
| arche-hotspot-mobile.avif | 46594582708523 | AVIF, 900 × 675, 104.71kB; Files editor and storefront load |

Permanent observed URLs:
- https://layouthub-template-v2.myshopify.com/cdn/shop/files/arche-hotspot-desktop.avif?v=1791860521
- https://layouthub-template-v2.myshopify.com/cdn/shop/files/arche-hotspot-mobile.avif?v=1791860522

Added alt text to both files: “Man wearing a light long-sleeve top and dark trousers, seated on an outdoor bench”. Preset and template use permanent Shopify image references, not temporary Figma URLs.

## Verification and pending sync

- Theme Check: 0 errors; warnings recorded in temporary check output. No hotspot offenses.
- Schema controls and calibrated fixed scales validated; git diff whitespace check passed.
- Draft rendered medium media height 781.703125px desktop and 257.25px mobile; both matching assets loaded. Chrome's 15px scrollbar reduces actual content widths at the 1920/375 outer viewport overrides. Desktop screenshot: `/private/tmp/arche-hotspot-desktop-preview.jpg`.
- Native Plus hotspots visible. Figma icons are 28px while native controls are larger; existing schema has no icon-size control. Popup placement/style and initial active state remain native behavior.
- **Latest local product selection and mobile padding change are not confirmed on draft.** Existing preview watcher uploaded an earlier iteration, then failed with “currently available CLI credentials are invalid”. Preview still showed old product references and the 48px empty mobile panel. Final local preset/template are correct; final remote readback and popup interaction checks remain pending CLI reauthentication/sync. No explicit theme push, publication or commit performed.

## Verified draft sync after reauthentication — 2026-10-13

- User requested continuation after reauthentication. Shopify theme list confirmed Arche `192282820907` remains unpublished on the same store.
- Narrow `theme push --only sections/hotspot.liquid --only templates/index.json --nodelete` succeeded. No publish or commit. Readback pull saved under `/private/tmp/arche-hotspot-readback`. Section file exactly matches local. Hotspot instance semantically matches local; Shopify removes its empty root block_order during normalization.
- Remote final settings: both AVIF refs, Medium desktop/mobile, content_padding_mobile 0, correct TS 03 and chocolate trouser product handles, and calibrated coordinates.
- Mobile rendered media 257.25px, empty content panel 0px, total section 313.25px (including 56px bottom padding). Desktop media 781.703125px, total section 877.703125px (including 96px bottom padding). Both images load.
- Click interactions passed: shirt popup TS 03 Essence Long Sleeve Blueberry, $99.00; trousers popup TP 01 Essence Straight Chocolate 2.0, $149.00; existing quick view link visible. Desktop shirt popup opens after viewport change.
- Screenshots: `/private/tmp/arche-hotspot-mobile-verified.jpg`, `/private/tmp/arche-hotspot-desktop-verified.jpg`. Temporary viewport override reset.
- This resolves the authentication/sync and remote popup verification pending items above. The separately documented custom-checker classification incompatibility remains; no custom record was added for height calibration.

## Image coverage fix — 2026-10-13

Owner reported a black band below the image in Theme Editor. Reproduced in the editor screenshot and at 1280px storefront viewport: media/background/picture were 781.703125px high, but picture > img was only 501.203125px at 1169px media width. The background scheme (#111) showed through the remaining area. Previous verification measured the media wrapper only, so it missed the child geometry failure.

Added height: 100% to the existing image selectors in assets/component-product-callout.css so the picture image covers the chosen media height with existing object-fit: cover. This fixes image geometry, not the calibration numbers. Narrow push of that asset to draft 192282820907 succeeded. At 1280px, image and media now both measure 781.703125px. Theme Check: 0 errors; diff whitespace check passed.

- Final Theme Editor visual verification: newly opened editor loaded successfully; desktop selected Product callout shows image covering the complete frame with no exposed black band. Mobile editor also shows no band below media. Screenshot: `/private/tmp/arche-hotspot-editor-fixed.jpg`. Remote CSS readback exactly matches local.

## Owner-requested custom Dot and mobile bottom sheet — 2026-10-13

- Existing Icon=Dot customized using original Figma da50c.svg (28 × 28 viewport, r8 white 8px ring with transparent center). Scoped to Hotspot: Product callout. Visible SVG dimensions verified 28 × 28; interaction target 44px. Two staggered expanding rings use existing product-callout-hotspot-ring animation. Reduced-motion rules retained.
- First section preset and saved shop_the_look instance use Dot.
- Mobile <=767.98px: native modal dialog attached to body, bottom-aligned, existing product data/card content, handle, localized Close button, backdrop, safe-area bottom padding. Original tooltip remains hidden. Desktop popover preserved.
- Browser checks passed at 375px: one dialog, :modal true, focus trapped inside, scroll lock on open; Close restores focus/ARIA/scroll, Escape and backdrop close, resize to desktop closes sheet. Bottom edge exactly812 at 812px viewport. TS03 card displays $99; trousers card previously checked $149. Desktop opens original DIV popover.
- Controllers retain WeakMap ownership, abort listeners, remove created dialog on section unload and close when breakpoint changes. Runtime source syntax checked. Editor add/remove/duplicate lifecycle has not been exercised in this iteration.
- Five implementation files read back exactly match local; remote instance Dot confirmed. Narrow uploads only to unpublished Arche 192282820907; no publication or commit.
- Theme Check 0 errors; customization checker passes with133 recorded paths. Dedicated Shopify skill validator could not run because bundled @shopify/theme-check-common dependency is missing; CLI Theme Check used. Documentation search script also lacked network connectivity; this implementation reuses verified repository Liquid patterns.
- Screenshots: /private/tmp/arche-hotspot-dot-bottom-sheet.jpg and /private/tmp/arche-hotspot-dot-desktop.jpg. Temporary viewport reset.

### Mobile sheet three-column layout — 2026-10-13

Owner requested theme-specific mobile CSS: larger ratio-preserving image, horizontal image/content/button columns, and no mobile border. Scoped overrides in component-product-callout.css under max-width767.98px and .product-callout__sheet. Card grid80px / minmax(0,1fr) /76px; details use display:contents to place the existing action in the third column without markup/runtime changes. Image width80px, height:auto, object-fit:contain; product title wraps, card border/shadow removed and action border0. Desktop unchanged.

Pushed only the CSS asset to unpublished Arche192282820907. Verified375px columns80/155/76, card border0, image80×96;320px columns80/100/76 with scrollWidth equal to sheet width (no horizontal overflow). Theme Check0 errors. Screenshot: /private/tmp/arche-hotspot-mobile-three-columns.jpg.

### Centered mobile items and Button Style binding — 2026-10-13

Owner requested items centered, matching desktop/mobile action style, and fixing Button Style. Existing parent button_style previously affected only the optional callout content button, not product-card action. Product callout now emits its normalized style through data-product-callout-button-style; scoped hotspot runtime applies existing theme btn classes and Tertiary underline markup to product actions before cloning into the sheet. Shared theme color/border/hover tokens now control both surfaces; removed mobile's hard-coded black treatment. Legacy action styling remains for non-btn links outside this scoped composition.

Mobile grid has symmetric flexible top/bottom rows around title/price, with image/action spanning rows and align-self:center. Optional category gets its own centered content group. Card border/shadow stay removed. Preset/instance Style=Tertiary preserves the reference link treatment.

Verified actual Theme Editor Primary renders black theme button, Secondary renders the theme's light-gray button, Tertiary renders underline link; restored Tertiary and Save is disabled (no leftover editor changes). Mobile375px screenshot confirms vertically centered image/content/button and matching Tertiary classes, transparent background. All five implementation files match remote readback. Theme Check0 errors, JS syntax and diff check pass. Screenshots: /private/tmp/arche-hotspot-mobile-centered-button.jpg and /private/tmp/arche-hotspot-button-style-editor.jpg. Narrow push to Arche draft192282820907; no publish/commit.

### Figma desktop tooltip with option-first configuration — 2026-10-13

Owner requests: custom desktop tooltip to Figma, prefer existing options in preset before hard-coded CSS, and prioritize a single-line mobile Quick view.

Existing controls set in preset and instance: show_product_type=false, show_product_image=true, show_price=true, product_link_label=quick view, section and hotspot color schemes scheme-1, parent button_style=tertiary. Current Dot and mobile bottom-sheet settings retained. No new schema controls.

Only missing local controls use scoped custom CSS: desktop tooltip344px wide, padding/gap12px, portrait image80×100px, title14px medium/line-height1.5, price14px, sharp borderless card without shadow. Button continues to use theme variants and their global styling; its Tertiary desktop label scale is14px as in Figma. Original pointer asset35a8d.svg is rendered in snippets/hotspot-tooltip-pointer.liquid, with exact source root dimensions preserved. Runtime aligns pointer with hotspot center after edge clamping, rotates for top placement; pointer excluded from mobile dialog clone.

Mobile third column=max-content and Quick view text nowrap; image stays80px, center content can wrap. At320px columns80/94.89/81.11, no horizontal overflow and button on one line. Button retains44px minimum tap height; card stays borderless.

Desktop rendered tooltip343.998px during entrance, padding12px, image80×100, pointer32×21 wrapper and zero card border. Theme Check0 errors; custom checker passes134 recorded paths. Five implementation files match remote readback and target template existing options verified. Narrow pushes to unpublished Arche192282820907 only. No publish/commit. Screenshots: /private/tmp/arche-tooltip-figma-desktop.jpg and /private/tmp/arche-tooltip-mobile-nowrap.jpg.
