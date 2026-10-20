# Video reviews preset — 2026-10-20

Source: Figma yTXlAfT0miBGgRuuYM4OMp desktop 50636:19257 (1920 × 764.6), mobile 50636:19356 (375 × 695.5). High-fidelity context and screenshots inspected through Figma connector.

Existing section Video reviews and private _video-review blocks reused; original name/preset category preserved. Updated the single preset and existing homepage virelle_shoppable instance only. Existing five cards/product associations and placement retained. No implementation changes in this preset task.

Mapping: full width; color scheme 3; product scheme 1; five desktop cards/one mobile card; 12px gaps; taller active card; Primary chevron navigation; desktop pagination hidden/mobile progress visible. Top padding 96/48; heading internal gap 8/8 (was 16/12); heading-to-card 48/32 (mobile was 40); section mobile bottom padding 0 (was 32). Eyebrow square uses currentColor. Active-video autoplay explicitly enabled in both preset and instance.

Visible limits: progress width control has minimum 100px versus Figma 80px. Inactive-card inset is existing 11% versus approximately 11.11% from Figma; no runtime/CSS changes within this preset-only task. Video fills/crop/source are not interchangeable with poster exports.

Media target: layouthub-template-v2.myshopify.com. All five original Figma review clips are uploaded and READY. Clips 1–3 were downloaded through Figma Properties / Inspect; the user supplied the downloaded original clips 4–5 as Downloads/video4.mp4 and Downloads/video5.mp4. First/middle/last frames of the final two clips match the beige and light-blue cards; original H.264/AAC files were uploaded unchanged. All five verified Shopify file references are bound in the section preset and existing homepage instance, retaining block IDs, order and product choices.

Section renamed to Video with products (`sections/video-with-products.liquid`, template type `video-with-products`). Receipt: `video-reviews-media-2026-10-20.json`; sources and private working ledger remain under ignored `.shopify/media/video-reviews/`. No Figma/staging URL is stored in theme configuration.

Validation: 14 scoped tests passed; Theme Check 0 errors and 11 warnings. Browser playback after binding remains unverified. No explicit theme push, publication, or Theme Editor Save was performed.
