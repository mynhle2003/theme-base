# Novaire — Scrolling cards

2026-10-27. Owner requested replacing the two Image text split layout homepage instances with custom Scrolling cards like Arche. This supersedes the earlier separate-row mapping in novaire-theme.md and the Our Story/Our Value QA notes.

Sources: Figma file vsUDZS8CZ0sa1pruNqu0eb, desktop47054:15160 and mobile47284:7259; read via CUA/Chrome. Desktop selected region1920×1600, mobile375×1462; mobile wrappers731px high, surface#F6F0EC. Runtime reference: ../arche-theme/{sections/scrolling-cards.liquid,blocks/scrolling-card.liquid,assets/scrolling-cards.js}. Arche supplies runtime behavior only.

## Build plan and ownership

Content section in templates/index.json; replaces adjacent image_with_text_custom + our_value at their original position with scrolling_cards. Existing Shopify images and page link supply context. Section owns surface/container and separate header/card gaps; scrolling-card owns sticky surface and horizontal/vertical composition; shared Group/Image own copy, media ratios, mobile order and padding. Existing static header and scrolling-card allow-list/max7 remain. Original block Shopify attributes and native shell remain.

Runtime: per-root idempotent Arche-derived controller with resize observation, Scale/Fade and viewport-centered sticky top, cleanup on unload/reload. Direct module script retained; no dependency on Arche lazy loader. Desktop Fade; mobile sticky off and image-first. Keyboard focus and reduced motion restore normal flow and clear effects.

## Composition and media

One Scrolling cards with Our Story and Our Value. Add section preset is synchronized, named Scrolling cards, category Media. Preserves both original copy trees, buttons, shopify://pages/our-story-novaire and images shopify://shop_images/novaire-our-story.avif + novaire-our-value.avif. Both existing images loaded successfully on desktop preview; no duplicate media upload or catalog mutation. Store: layouthub-template-v2.myshopify.com.

Section width Custom1680px (container includes native48px inline padding); desktop content padding64px each side, 64px image/content gap, 160px card gap and80px outer padding. Mobile content top padding32px, 112px card gap and56px outer padding. Both image slots retain6:5 ratio and image-first mobile. New gap controls use0..200px/step2, independent of header gap.

## Validation and limits

Four runtime checks pass: repeated init, editor unload/reload, duplicate module version, keyboard/mobile effects reset. Schema setting IDs/options/ranges, nested preset, template order, content/media preservation and instance/preset parity pass. Theme Check:0errors/8warnings, all warnings outside changed files. git diff --check passes. Shopify toolkit validator could not start because its installed bundle lacks @shopify/theme-check-common; this is distinct from the successful Shopify CLI Theme Check.

Final desktop preview1920×1080: both columns760px, images760×633px and both existing resources loaded; viewport-centered sticky/Fade observed. Final mobile375×812: content viewport360px due native scrollbar, cards328×643px, both images loaded, image-first, opacity1, position relative, readable copy and CTA. document clientWidth equals scrollWidth at1905px desktop and360px mobile. Chrome temporarily reconnected during verification; the final composition was successfully rechecked after the nested content Group fix.

Remaining visual differences: desktop section approximately1587px vs Figma1600px; mobile approximately1510px vs Figma1462px, with the scrollbar reducing actual content width by15px and inherited typography affecting wrapping. Existing6:5 source images preserved and subjects visually checked on both cards; exact crop/typography/spacing is not a pixel-perfect pass. Full live Theme Editor selection/duplicate/reorder/save remains unverified; controller unload/reload is covered by automated checks. check-custom reports six pre-existing implementation paths without records (custom-section.js, product-collection-carousel.js, promo-grid-layout.liquid, custom-section.liquid, rich-text.liquid, custom-section-layout.liquid); all three implementation files of this task are recorded.

No explicit theme push/publish, Theme Editor save or Git commit/push. Existing local preview watcher was already running and served edits automatically. Browser checkpoint: /tmp/novaire-scrolling-browser.json; task-created Figma2048917239 and preview2048917243 were closed and their absence verified; temporary viewport reset. No screenshot files were saved.
