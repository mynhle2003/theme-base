# Press preset — 2026-10-19

Sources: Figma bH9A5237I07NWt19Cua9gL, desktop 47062:15032 (1920px wide), mobile 47230:15700 (375px wide). Both high-fidelity contexts and screenshots inspected.

Configuration-only build using the requested build-preset skill. Updated the existing Press Add section preset, retaining its translation key and Trust & social proof category. Added templates/index.json instance `press` directly before `editors_pick` (Collection tabs). Left the archived index.spinel-sync template unchanged.

Mapping:
- Press: centered, 1024px maximum content width, white scheme-1; desktop vertical padding 144px, mobile 80px.
- Static press-quotes `quotes`: five press-item children in Michael Kors, BVLGARI, DIOR, JW Anderson, Marc Jacobs order; logo gap 16px, quote/logo spacing 32px desktop and 28px mobile. Autoplay disabled so supplied copy remains stable.
- Each item: supplied quote in heading lg/h3 and supplied description in a custom 16px heading/div. Press-item accepts heading children only. Repeated supplied copy across all five editable items because other slide copy was not supplied.
- Logo slots use existing 2:1 custom ratio; nearest valid schema widths are 185px desktop / 170px mobile versus Figma 186px / 168px. Image pickers were initially unset; the authorized media follow-up below now binds all five logos. No Figma temporary asset URLs saved.

Unimplemented Figma gaps:
- Existing Press always places quote before logos; Figma places logos first. No existing order control.
- Existing Press has logo pagination but no arrow/progress-bar controls. No existing setting can add the Figma navigation.
- Existing logo pagination scrolls naturally; centered DIOR initial state, edge fading and 60% inactive opacity cannot be configured (runtime selects first logo, inactive opacity 50%).
- Existing h3 scale is 28px desktop / 22px mobile versus Figma 26px / 22px. Global typography left unchanged to avoid altering unrelated sections. Description uses heading styling because body text is not an allowed child; exact body line height/tracking and content gap cannot be independently configured here.
- All five logos are now selected from verified existing Shopify Files; no claim of complete visual parity.

Validation: schema setting IDs, select options, range bounds/steps, nested block allow-lists, static quotes composition, preset/instance settings and immediate placement checked. Shopify Theme Check: zero errors, six warnings. git diff --check passes. Desktop/mobile browser rendering, interaction and Theme Editor lifecycle remain unverified; Figma screenshots and responsive source were inspected. No commit, manual theme push, publish or store configuration save performed.

## Authorized media follow-up

Reused five existing READY Shopify Files AVIF images after confirming their original PNG pixels exactly match the five Figma assets. No duplicate uploads needed. AVIF decoder verifies all five local originals; Admin readback confirms the IDs, CDN URLs and dimensions. Bound shopify://shop_images references to both the Add section preset and homepage Press instance. Receipt: press-media-2026-10-19.json. Changed ratio to original so the existing cover renderer does not crop logos into the former 2:1 slots. Logo-specific internal whitespace, shared 93px/84px Figma slot heights and positioning remain unmatched because the existing controls cannot express those independently. Browser geometry remains unverified. No manual theme deployment or store theme-settings write.

## 2:1 logo correction — current state

Supersedes the original-ratio follow-up above. User explicitly requested preserving 2:1 item ratio and preparing new images that do not crop lettering. Prepared five 744 × 372 transparent AVIF canvases using the Figma source-image transforms within 186 × 93 logo slots, without baking in opacity or redrawing artwork. Inspected the decoded AVIF contact sheet: all lettering is visible. Uploaded five Press-specific files and read back READY status and 744 × 372 dimensions for every file. Both section preset and homepage Press now select custom ratio 2:1 and the new image references. Existing 185px desktop / 170px mobile control widths remain; Figma targets 186px / 168px are between allowed steps. Existing inactive-logo CSS opacity remains separate from the image pixels. Storefront browser rendering remains unverified. Receipt: press-media-2x1-2026-10-19.json.
