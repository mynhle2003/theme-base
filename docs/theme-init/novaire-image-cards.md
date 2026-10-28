# Novaire — Image cards preset

2026-10-27. Local configuration task using build-preset and setup-store/store-content-media.

Sources: desktop Figma vsUDZS8CZ0sa1pruNqu0eb node47052:10949; mobile47284:7201. Figma MCP screenshot returned Unknown tool; inspected source with CUA/Chrome, existing beae.com tab2048916729. No design edits.

Observed source: desktop1920×798.4, bottom padding80; mobile375×616.8, bottom padding56. Two5:4 images, desktop horizontal/mobile vertical, gap28/12, centered white overlay content. Copy retained verbatim including SHOP OCCATION.

Changed templates/index.json new_collections and sections/image-cards.liquid presets only. Both cards now use header → eyebrow + heading, then button; header gap12, card gap32 desktop/20 mobile. Add section preset synchronized with instance including heading xl and existing media/resources. Original preset name/category retained, exactly one preset. No implementation/global settings changes.

Media reused: shopify://shop_images/novaire-accessories-banner.avif and shopify://shop_images/novaire-floral-banner.avif on layouthub-template-v2.myshopify.com. Both render successfully in existing preview192827490603. Buttons retain new-in-novaire and cavation-outfit-novaire collections. No new uploads/resources required; store metadata/focal-point readback not performed.

Preview checked through CUA at existing desktop browser size1905×811 and mobile override375×812 (content approximately360px due scrollbar). Two desktop columns and stacked mobile cards, all copy/buttons observed. These are approximate viewport checks, not pixel-perfect approval at exact Figma width. Source image subjects match, but necklace placement/crop and floral portrait crop differ visibly; exact transform/focal point remains unverified. Shared typography/line metrics remain inherited. No CSS or new control introduced to close gaps.

Validation: Theme Check0errors/7warnings; git diff --check passes. No explicit push, publication, commit or Theme Editor save. Existing dev server was running during local changes.

Browser: existing source tab reused; task-created preview tab2048917041 closed after inspection; temporary viewport reset. No user-owned tabs closed. Screenshot evidence shown in tool output only; no screenshot files retained.

## Visual recheck — 2026-10-27

Read-only CUA comparison against original desktop/mobile nodes. Measured preview content width1920px (viewport1935px) and375px (viewport390px), accounting for15px scrollbar. No theme configuration or store data changed in this review.

Verified geometry: desktop cards898×718.39px, section798.39px, gutter48px, gap28px, bottom80px. Mobile cards343×274.39px, section616.78px, gutter16px, gap12px, bottom56px. These match Figma within rounding. Native horizontal/stacked arrangement and copy match.

Confirmed mismatch: eyebrow→heading gap is12px both breakpoints; Figma text-block gap4token=16px desktop (81px group:20+16+45),2token=8px mobile (64px group:20+8+36). Browser groups77.19px desktop/68.78px mobile. Existing header gap controls can express the correction. Heading→button gap32/20px matches Figma8/5tokens.

Confirmed small mismatch: SHOP NEW IN button width161.61px desktop vs Figma158px;153.61px mobile vs150px. Height43/40px matches. Browser text/side-padding rounding or font metrics need further diagnosis; no missing control is established. Figma label Poppins40013px,160% line height,1.95px tracking; effective browser values match.

Heading matches Outfit300,32px desktop/26px mobile,140% line height,2.56px tracking. Eyebrow matches Poppins40012px,170% line height,2px tracking. Prior generic typography warning is superseded by these measured values.

Crop correction: previous large crop warning was not reliable because sticky header obscured the image top. Rechecked full frames: necklace/pendant, garment edge, floral portrait eye and shoulder landmarks show no obvious major crop discrepancy. Renderer expands images1px beyond each card edge; no pixel-level image-diff pass performed. Do not describe the earlier crop suspicion as a confirmed defect.

Task-created QA preview tab2048917055 closed; viewport override reset; original Figma tab retained. Tool screenshots only, no retained screenshot files.
