# Shop the look — Kinetra, 2026-10-21

Requested: use build-preset to configure Shop the look from desktop Figma48190:17713 and mobile48249:14796, immediately above Icon with text (custom). Only local preset/template configuration is authorized. No media/content setup, new implementation, store configuration save or deployment was requested.

## Evidence

- Figma MCP get_design_context on48190:17713 returned missing edit access, not quota exhaustion.
- CUA/Chrome beae.com existing exact mobile tab48249:14796 was read. Properties: section1169px tall, top/bottom spacing tokens12 (48px), gap token16 (64px). Zoom-to-selection screenshot shows square photo → Inspiration / Matching sets / Buy 3 products & get25% off → swipe product cards → Add all to cart. Subsequent desktop navigation was blocked by Work settings disabling local browser use; no workaround was attempted.
- Desktop evidence uses the existing Figma export `/Users/beae/Downloads/Homepage 2.png`, supported by the prior verified node survey in `docs/theme-init/kinetra-theme.md`:1920×1078 section, image left and three products right. Analysis crop `/tmp/kinetra-matching-desktop-reference.png` is reference evidence only, never implementation media. Export image slot x50,width886,height886 with96px outer vertical padding; three239px cards with20px gaps in the content rail. Desktop body content uses the existing inner padding, not new CSS.
- Visible products: SoftMotion Sports Bra, Unified Double Layer Shorts, AirMove Jacket. Existing Shop the look uses shared Product card, not Bundle product controls. It has no local variant selectors, discount logic or Add all to cart control.

## Changes

- Updated the existing original-name/category Add section preset in `sections/shop-the-look-section.liquid`; exactly one Shop the look preset. All implementation and schema outside presets match before-task snapshots.
- Reused and enabled `shop_the_look_section_mhb9aq` in `templates/index.json`, moving it immediately before `icon_text_cards_qT6mLV`. Every other section and its relative order are unchanged. The unrelated legacy `index.spinel-sync.json` template was not requested and remains untouched.
- Full width with native page margins, left media / mobile first, square desktop/mobile image, scheme-1, desktop column gap50px and outer padding96px; mobile image/content gap32px and outer padding48px. Mobile image-to-product area includes32px header bottom spacing; exact total64px image-to-main-content structure cannot be represented by the single native content flow without visual QA.
- Native Header → Eyebrow with built-in square icon, Heading “Matching sets”, Text “Buy3 products & get25% off”. Removed inherited white decorative square block from this composition and used the existing scheme-aware eyebrow icon. Header gap8px, bottom padding48 desktop /32 mobile. No new SVG or implementation asset.
- Existing Shop the look products carousel:3 columns desktop /1 mobile,20px/12px gaps, no navigation/pagination. Three slots. Existing bra handle retained; unrelated leggings reference cleared and blank third jacket slot added. Target shorts/jacket resources remain unselected.
- Removed the old Virelle outdoor-photo picker references from this target; the Kinetra seated-model photo is unselected. No new media was chosen, fetched or uploaded. No focal point mutation.
- Desktop dot centers measured from the square export slot:bra≈(41,36),shorts≈(61,65),jacket≈(76,30). Mobile visible screenshot:shorts≈(62,67),jacket≈(73,19). Bra mobile center keeps desktop(41,36) provisionally because it is not visibly exposed in this mobile screenshot. Coordinates are integer-step approximations; without source media and crop readback, they are not verified anchors. Native hotspot visibility has no per-device override, another gap for hidden mobile layers.

## Validation and gaps

PASS: JSON parsing; existing select/range values; placement directly above benefits; no unrelated homepage section/config changes; schema outside presets and Liquid/CSS/JS unchanged; scoped diff whitespace check. Shopify CLI Theme Check:0 errors,8 existing warnings. Output `/tmp/kinetra-shop-look-theme-check.json`. Before-task copies `/tmp/kinetra-shop-look-before/`.

Not verified: final storefront desktop1920/mobile375, effective image geometry, hotspot click-to-product association, Theme Editor add/duplicate/reorder/save/reload. Browser access is disabled. Existing watcher may reflect local edits; no explicit push, publication, Theme Editor save, commit or Git push was performed.

Material unimplemented gaps under build-preset:

1. Exact Kinetra photo and shorts/jacket resources remain unselected; placeholders will render. Existing bra selection is retained, not newly selected. Media setup was not explicitly requested. Skill Scope: “Do not choose or fetch products, images, or videos unless the user explicitly requests media work.”
2. Figma variant dropdowns and Add all to cart are unavailable in Shop the look. No bundle discount is configured; the25% copy is visual reference text only. Building these controls would require a separate implementation request. Skill: “Do not add, rename, or replace section/block implementations.”
3. Figma mobile shows a next-card preview; Shop the look has integer columns only and no preview setting. Native1-column swipe is selected. Native inner mobile padding also narrows the product rail relative to the reference.
4. No independent text-gap control for8px eyebrow/title and12px title/body; native shared8px selected. Product card appearance and all shared theme settings remain unchanged.
5. Hotspot popup styling/visibility, mobile hidden bra hotspot, focal point, actual crop and anchor accuracy need source media and browser verification. No claim of full Figma equivalence.

Skill source: `/Users/beae/Documents/GitHub/Layouthub v2/agents-build-themes/skills/build/preset/build-preset/SKILL.md`.

## Media/product follow-up — authorized by owner

Owner requested completing the image and products through store-content-media, and explicitly reiterated: use Computer Use for Figma and remember this preference. Recorded preference: native Computer Use is an accepted read-only Figma fallback; do not ask again for permission to switch to it in this task.

Read-only preflight confirmed the connected destination is `layouthub-template-v2.myshopify.com`, USD, on branch `theme/kinetra-theme`. Exact product-title search found only the existing SoftMotion Sports Bra (`gid://shopify/Product/15435303518507`, handle `virelle-softmotion-sports-bra`). Broader Unified/AirMove search found Unified High Waisted Shorts, a different product; it was not substituted for Unified Double Layer Shorts. No exact AirMove Jacket match. No products or media were created/changed in this preflight.

Source-media access remains blocked: browser tab Computer Use reports local browser use disabled in Work settings. After the owner's explicit native Computer Use instruction, native Google Chrome access was attempted by bundle ID and app name; both returned Computer Use timeout. The app inventory confirms Chrome is running, so this is a control-connection failure, not a claim that Chrome is closed or Figma denied UI access. Figma MCP is unavailable in the current tool inventory. No external Figma API, credential extraction or settings workaround was used.

Inspected the existing Downloads image inventory and relevant temporary source assets. The original Kinetra matching-set lifestyle photo and the exact shorts/jacket catalog images were not located there. Existing full-page reference exports contain UI and cannot be cropped into implementation media. A targeted Shopify Files filename lookup returned no matching files; this does not prove every store image was exhaustively inspected.

Pending source access: original lifestyle photo and three product-source slots, exact color/category data, original catalog media for the two missing products, then source-backed product setup (visible reference price45USD, Black/M; no invented compare-at price), AVIF uploads, focal-point readback, local reference binding and preview. Original bra resource stays preserved. No placeholder product was created merely to claim completion; no unrelated store resources, templates or implementation were modified.

## Completed media and products — 2026-10-22

The owner-authorized media/product work is now complete. Source downloads were recovered through the existing Chrome/beae.com Figma UI. Original image layers: lifestyle48190:17716 (`3cab0a58d7c739f0ceb7bb16531935fb2b71c418`), shorts48218:12871 (`eed7cb8f76488fceecbef3dbc8475ef8a92c1c4f`), jacket48218:12897 (`2d4c1e0bd3cd76ef0f72b378ab42059aa7604d21`). Download links and screenshots were read through the supported UI; no Figma API/token workaround. Source files and final media are retained in `output/shop-the-look-media/`.

- Lifestyle: original2400×3600 photograph cropped to `(0,850)-(2400,3250)`, encoded as1600×1600 AVIF, uploaded as `kinetra-matching-sets.avif`, MediaImage46752405979435. The crop was visually compared with the clean Figma layer export preview; export download did not fire, so the crop is an approximation rather than a numeric transform readback. The original photo, not a screenshot, supplies every pixel. Desktop/mobile use the same square asset; native image object-position reads50%50%. No manual store focal-point override was made.
- Unified Double Layer Shorts: Product15445245624619, handle `kinetra-unified-double-layer-shorts`; AirMove Jacket: Product15445253226795, handle `kinetra-airmove-jacket`. Both ACTIVE and published to Online Store322604237099, taxonomy Activewear Shorts/Jackets, no tags, Black/M,45USD, inventory20 at verified Shop location117337850155. Compare-at price left unset because Figma provides no source for it; no bundle discount was created.
- Both new products have4 READY image/avif files: original Figma catalog → generated lifestyle → generated side → generated detail. Supplementary images were created by the skill-required gpt-6-luna/max image agent and visually checked against the source; these are synthesized supporting views, not additional original Figma photos. No unseen-back construction was claimed. Each has description, existing `custom.summary`, Color linked to `shopify.color-pattern` and existing Black metaobject628802519339, and variant `custom.secondary_image` pointing to its lifestyle. The original bra resource already has5 images and was reused unchanged.
- Both local Add section preset and homepage instance now contain all3 product handles and the permanent Shopify lifestyle reference. Instance remains immediately above Icon with text (custom). Unrelated sections, implementation, global settings and legacy sync template were preserved.

### Final verification

- Shopify live readback confirms both products' publication, category, linked Color option, summary, secondary image,45USD, compareAtPrice null,20 stock, all4 gallery files READY with MIME image/avif, and original catalog first. Readback receipt: `shop-the-look-readback-2026-10-22.json`; provenance/upload manifest: `shop-the-look-media-2026-10-22.json`.
- Existing local preview9300 reflected configuration through its already-running dev watcher. At desktop1920px (1905px content width), native image was877.5px square, with3 product cards and native centered image position. All source and hover images loaded. At375px mobile (360px content width due desktop scrollbar), image328px square, image-first stacking and1-card carousel; no horizontal section overflow. Mobile dot centers measured(41,36),(62,67),(73,19), within range-step rounding.
- Clicked all3 visible hotspot buttons on both desktop/mobile: selected IDs15435303518507,15445245624619,15445253226795 matched bra/shorts/jacket. Restored first card and reset the temporary viewport. Saved screenshots: `output/shop-the-look-media/desktop-final.jpg`, `mobile-final.jpg`.
- JSON/schema parse, resource/composition parity between registered preset and homepage, placement and diff whitespace pass. Shopify CLI Theme Check0 errors/8 inherited warnings, `/tmp/kinetra-shop-look-media-theme-check.json`. No implementation code or schema controls changed in this follow-up.

Existing preset-only layout gaps remain: no inline variant dropdowns/Add all to cart/bundle25% logic, no mobile next-card preview or per-device hotspot visibility, native card alignment/badge and inner-padding differences, shared header gap. Source media/product gaps are resolved. Theme Editor add/save/duplicate/reload testing was not performed. No explicit theme push, theme publication, Theme Editor Save, Git commit or Git push. New product content publication is separate from theme deployment.
