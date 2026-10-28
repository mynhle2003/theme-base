# Novaire media ledger

Store: `layouthub-template-v2.myshopify.com`. Scope: authorized initialization content/media; local preset/instance binding only. No theme publish or Git push in this continuation.

## Verified uploads

| File | Source | Shopify ID | Dimensions | Readback | CDN URL |
| --- | --- | --- | --- | --- | --- |
| novaire-wordmark.svg | Header desktop NOVAIRE vector group | gid://shopify/MediaImage/46827091722539 | 112×20 | READY | https://cdn.shopify.com/s/files/1/1024/2192/2091/files/novaire-wordmark.svg?v=1793001621 |
| novaire-hero-desktop.avif | Desktop Slideshow 3 / isolated temporary background10021:1809 | gid://shopify/MediaImage/46827221385515 | 1920×800 | READY | https://cdn.shopify.com/s/files/1/1024/2192/2091/files/novaire-hero-desktop.avif?v=1793002272 |
| novaire-hero-mobile.avif | Mobile Slideshow 3 / isolated temporary background10023:1809 | gid://shopify/MediaImage/46827236917547 | 375×550 | READY | https://cdn.shopify.com/s/files/1/1024/2192/2091/files/novaire-hero-mobile.avif?v=1793002322 |

Wordmark is original SVG, not a redraw. Hero backgrounds are Figma PNG exports from temporary duplicates of the authorized copied frames, with only foreground Container removed; source image crop and20% radial fill retained. Both hero exports were converted to actual AVIF and decoded successfully before upload. Header logo binding is112px desktop/84px mobile (source83.86px mobile rounds to existing2px range grid). Preset and homepage/group instances use the same Shopify file references.

## Existing-file audit

Audited30 pre-existing Claré files plus the new wordmark; verified image processing status. Downloaded candidate images for visual comparison to local `/tmp/novaire-audit/`. Existing Claré slideshow imagery depicts different subjects/compositions from Novaire and was not substituted. Decorative images and logos still require per-region comparison before reuse.

## Catalog sources pending

Figma collection desktop `47054:15484`, mobile `47284:7133`: Cassia Floral Print Midi Dress Nude52USD; The India Edit Tara Drop Waist Maxi Dress45USD/compare90USD; Celeste Floral Ruffle Maxi Dress Blue91USD; Lucy Broderie Dress Green45USD/sold out. No matching products found on the target store in the scoped title/vendor audit. No product/collection/menu mutations in this continuation.

One Cassia image export was confirmed at `/tmp/novaire-audit/Image.png`; gallery requirements remain pending. Four-image batch export was initiated from the authorized copy but no completed ZIP has been confirmed. Do not retry catalog creation or upload until files decode and identities are verified.

Direct HTTP requests to the image download links exposed by Figma Inspect returned HTML app pages, despite HTTP200. `/tmp/novaire-originals/*.png` and `/tmp/novaire-cassia-original.png` are INVALID media and must never be uploaded. Their earlier fetch receipt exit0 indicates HTTP success only; it does not establish image validity. Do not reuse those paths as image sources.

Additional original galleries were located on the corresponding Monsoon product pages for source verification; no gallery images downloaded or uploaded from them yet:

- https://www.monsoon.co.uk/cassia-floral-print-midi-dress-nude-10003920136.html
- https://www.monsoon.co.uk/the-india-edit-tara-drop-waist-maxi-dress-blue-1000719474.html
- https://www.monsoon.co.uk/lucy-broderie-dress-green-10003420008.html
- https://www.monsoon.co.uk/celeste-floral-ruffle-maxi-dress-blue-1000686186.html

Design prices remain authoritative for demo setup; retailer prices differ and must not overwrite them. Four images per product, color-linked variants, summary, inventory/publication and collection membership still require setup/readback.

## Temporary Figma ownership

File `GUJw3Y8gUBn8C5rISC5FPV`, page4:3. Task-owned roots10017:1613 desktop and10017:2513 mobile remain for unfinished extraction. Background duplicates10021:1809 desktop and10023:1809 mobile are children of those roots. Existing unrelated Mobile/Desktop roots must stay. Cleanup only task-owned copies after extraction is complete. No source-file design edits.

## Video and Coastal Caprice completion — 2026-10-27

All five original MP4s downloaded from the original design file vsUDZS8CZ0sa1pruNqu0eb using the AX Properties download button, not the copy. Source nodes47064:15181/15184/15264/15203/15206 in slide order. H264720×1280 +AAC, lengths8.989/9.885/14.557/8.136/10.504s; first/middle/final frames visually verified. Shopify Video IDs46842982564139/596907/629675/662443/695211 (full IDs in ignored receipts), allREADY with no file errors. Verified filenames novaire-real-people-{1..5}.mp4 bound to native Video blocks in both preset and homepage; carousel enabled. No Figma/staging URL saved in theme.

Coastal Caprice Maxi Dress Yellow ID15463590101291, handle novaire-coastal-caprice-maxi-dress-yellow, source Figma price$35, ColorYellow linkedmetaobject666503381291, XS/S/M/L from primary retailer;20stockeach, OnlineStorepublished. Primary catalog exported from original Figma node47064:15270 at700×880; three genuine lifestyle frames extracted at3.7/7.0/11.8s from original slide3MP4. FourREADY image IDs46843031093547/46843033223467/46843034566955/46843035910443. Material/care facts sourced from https://www.fortunateone.com/products/coastal-caprice-maxi-dress-yellow ; Figma price preserved over current retailer price. Summary/description present.

Existing carousel cannot reproduce the exact floating product overlay/center emphasis; native Compact card is below the main video. Capability gap retained without new implementation.

## Final resource readback — 2026-10-27

Videos full IDs: gid://shopify/Video/46842982564139, gid://shopify/Video/46842982596907, gid://shopify/Video/46842982629675, gid://shopify/Video/46842982662443, gid://shopify/Video/46842982695211. All fileStatus/status READY. Four Coastal image IDs46843031093547/46843033223467/46843034566955/46843035910443 are READY; Coastal product15463590101291 ACTIVE and published on Online Store publication322604237099. Totals:10Novaire products,57imagefiles,5videos. Prior pending-video entries are superseded. No further uploads required for configured homepage. Original Downloads retained; generated derivative provenance remains in ignored receipts.
