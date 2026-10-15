# Gallery Image Grid preset — 2026-10-14

Applied build-preset from agents-build-themes and figma-design-to-code on branch theme/malandra-theme. Figma file 7BbUHDzKGaMGMkyRpu0YZ8: desktop 52325:1530; corrected mobile 52393:9291. Original mobile 52393:9231 was Blog post 13 and was excluded.

Changed sections/gallery-image-grid.liquid presets and only the instagram instance in templates/index.json. Reused gallery-header-group, heading, text, gallery-grid and eight gallery-image blocks. Implementation and non-preset schema are unchanged. Preserved other homepage sections and their existing changes.

Configuration: full-width with global page margins, centered header; H2 visual lg and body md; title “Shop The Latest From Instagram” and @exclusive_gold; header leaf maximum width 760px, mobile fill; header gap 16/12px; content gap 40/36px; section padding top 20/10px and bottom 80/56px; square images, 4/2 columns, gaps 8/4px; Instagram on hover, blank tags, transparent social button background and white icon. Image/resource/link selectors remain unselected. Existing global social URL fallback remains.

Validation: recursive setting-ID, allowed-child, select-option and range/step validation passed. Shopify CLI Theme Check passed with zero errors and six existing ExcessiveSettingsCount warnings. git diff --check passed. Existing preview at http://127.0.0.1:9301 received configuration through its already-running synchronization; no explicit deploy or new watcher was started. Browser inspection at desktop 1920×1080 and mobile 375×1000 confirmed 8 square cells, 4/2 columns, gap 8/4px, header gap 16/12px, content gap 40/36px and padding 20/80 and 10/56px. No gallery grid overflow on mobile. Native desktop scrollbar reduces CSS layout width to 1905px; mobile to 360px. Mobile heading renders at 30px, two lines. Mobile screenshot reviewed; desktop grid and hover reviewed. Theme Editor mutation lifecycle was not exercised.

Remaining gaps / custom follow-up unimplemented:
- Figma photos are absent: placeholders render; exact imagery/crops await explicit media work.
- Header max-width control uses 20px steps, so 760px is the closest valid value to Figma 768px. Header group itself has no maximum-width setting.
- Native icon is fixed at 20px inside a 48px interactive target; Figma uses 32px desktop and 12px mobile. Color/background configured, geometry unchanged.
- Global mobile H2 renders at 30px; Figma context reports 34px. Global typography was preserved.

No commit, Git push, publish or direct store preset save performed.

## Media follow-up — 2026-10-14

Applied requested setup-store/store-content-media skill. Uploaded eight Figma images as genuine AVIF files into the confirmed layouthub-template-v2 Shopify Files store. First seven use original image sources with the native centered square cover crop; final image uses the isolated 52325:1549 image-only export to retain its custom Figma crop. Source contact sheet visually matches Figma order and imagery. Bound verified shopify://shop_images references and descriptive block alt text into the local gallery section preset and instagram homepage instance. No direct store preset/template save or explicit theme deployment was performed.

All eight CDN URLs returned decodable images at expected dimensions; Shopify returned negotiated JPEG content for this client despite AVIF source suffix. Theme Check passed with zero errors and five existing warnings; local preset/homepage references verified. Current dev preview is blocked by unrelated invalid presets in collection.liquid, testimonials-horizontal-custom.liquid, image-text-card-grid.liquid, testimonial-carousel.liquid, video-product-carousel-custom.liquid, gallery-carousel.liquid and page.about-us.json. Thus post-upload full storefront desktop/mobile geometry cannot be verified in this run. Original remaining missing-image gap is resolved; other layout/icon/typography gaps remain. Upload receipt: malandra-gallery-image-grid-media-2026-10-14.json.

## Cover fix — 2026-10-14

Gallery image has no image-fit option. Scoped implementation fix positions the media wrapper absolutely inside the square cell and gives direct images, picture images and placeholders full width/height. Selectors outrank the shared image snippet height:auto rule without changing the snippet or adding settings. Existing object-fit:cover, hover zoom, image source selection, focal points and editor attributes remain. Live preview now works. Computed-style verification at 1920×1080 and 375×1000 confirms all eight image boxes match their square cells and use cover (446.25px desktop; 162px mobile). Customization recorded in malandra-theme.md.
