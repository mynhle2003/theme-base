<!-- theme-base-sync-state: {"sha":"de84ae60437b6369b61addd025dd75d1434706be"} -->
# Customization record: arche-theme

Theme branch: `theme/arche-theme`
Personal base at creation: `fa304936dd536d9d2d7ac46f9b2361947c955ce0`
Theme update source: this repository's `main` branch

Applied locally: [MAIN-ARCHE-BLOCK-ANIMATION-001 — animation theo main và bảo toàn preset](../variant-updates/main-to-arche.md). Runtime đã thay bằng main; QA storefront/Theme Editor live còn pending.

## CLI base update — 2026-10-11

Applied main commit `75baa7c` (Windows preview and theme sync support). This source range changes only CLI scripts and their Windows tests. Preserved theme implementations and the existing preview recovery behavior.
Team base source for personal main: https://github.com/Chieu2507/shopify-theme-base (only `main` or `dev`)

Record every theme-specific change here before committing the code. During base updates, review any overlapping paths and describe the expected behavior before resolving.

## Customizations

| File/path | Base behavior | Theme-specific behavior | Reason | Update/merge rule |
| --- | --- | --- | --- | --- |
| `snippets/product-card.liquid`, `snippets/product-badges.liquid`, `snippets/badge.liquid`, `snippets/css-variables.liquid`, `assets/critical.css` | Collection badge rules already match product collections. | Cards use native collection rules; card-scoped CSS styles collection badges, retaining geometry and first/second badge appearance. Product-page prefixed tags retain their existing path. | Owner requested native Collection badge migration on 2026-10-20. | Preserve card styling; use existing Collection badge settings only. Keep badge membership in existing Theme Settings. |
| `blocks/_shop-the-look-image.liquid` | Shared image and addable section block list | Only static section slots; private image retains variant ratio/media controls, removes layout width and padding controls; saved image data migrates with stable IDs | Owner-requested Shop the look base rollout | Keep section image private and preserve variant media values when merging |
| `blocks/_header-account.liquid` | Always requests a fixed account menu. | Request customer-account-main-menu only when present; otherwise retain Shopify default menu. | Avoid missing-menu errors. | Preserve account markup and fallback. |
| `blocks/blog-card-button.liquid` | Generic Read more link. | Pass article title through aria_label and accessible_description. | Distinct accessible link names. | Keep contextual article and visible label. |
| `snippets/theme-button.liquid` | No optional destination context. | Append escaped optional accessible_description in a visually-hidden span. | Accessible Blog Read more context. | Keep argument optional and visible label unchanged. |
| `blocks/image-text-card-grid-item.liquid` | Static CSS in Liquid stylesheet bundle. | Load `assets/block-image-text-card-grid-item.css` synchronously with the owner. | Reduce unrelated development bundle CSS. | Keep owner and asset paired; preserve existing rules, layout and editor behavior. |
| `blocks/slide.liquid` | Main Slide option definitions and radius choices. | Load the rebuilt main stylesheet through the synchronous owner CSS asset. | Reapply only recorded custom logic after rebuilding from main. | Main controls are authoritative; legacy non-custom radius choices map through the main migration. |
| `blocks/timeline-slide.liquid` | Static CSS in Liquid stylesheet bundle. | Load `assets/block-timeline-slide.css` synchronously with the owner. | Reduce unrelated development bundle CSS. | Keep owner and asset paired; preserve existing rules, layout and editor behavior. |
| `sections/collection-list-thumbnails.liquid` | Static CSS in Liquid stylesheet bundle. | Load `assets/section-collection-list-thumbnails.css` synchronously with the owner. | Reduce unrelated development bundle CSS. | Keep owner and asset paired; preserve existing rules, layout and editor behavior. |
| `sections/text-marquee-custom.liquid` | Static CSS in Liquid stylesheet bundle. | Load `assets/section-text-marquee-custom.css` synchronously with the owner. | Reduce unrelated development bundle CSS. | Keep owner and asset paired; preserve existing rules, layout and editor behavior. |
| `assets/block-bundle-product-list.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `blocks/_bundle-product-list.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/block-countdown-timer.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `blocks/countdown-timer.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/block-faq-accordion.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `blocks/faq_accordion.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/block-image-text-card-grid-item.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `blocks/image-text-card-grid-item.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/block-slide.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `blocks/slide.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/block-testimonial-item.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `blocks/testimonial-item.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/block-timeline-slide.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `blocks/timeline-slide.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-collection-banner.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/collection-banner.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-collection-list-thumbnails.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/collection-list-thumbnails.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-collection-page-links.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/collection-page-links.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-collections-with-background.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/collections-with-background.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-collections-with-tabs.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/collections-with-tabs.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-contact-form-custom.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/contact-form-custom.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-email-signup-dual-image.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/email-signup-dual-image.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-email-signup-form.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/email-signup-form.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-email-signup-single-image.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/email-signup-single-image.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-faq-accordion.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/faq-accordion.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-faq-image-accordion.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/faq-image-accordion.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-icon-text-cards.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/icon-text-cards.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-icon-text-inline.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/icon-text-inline.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-icon-with-text-custom.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/icon-with-text-custom.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-image-cards.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/image-cards.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-image-comparison-split-custom.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/image-comparison-split-custom.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-location-map.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/location-map.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-scrolling-text-star-separator.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/scrolling-text-star-separator.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-shop-the-look-section.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/shop-the-look-section.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-testimonials-background-custom.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/testimonials-background-custom.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-testimonials-horizontal-custom.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/testimonials-horizontal-custom.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-text-marquee-custom.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/text-marquee-custom.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `assets/section-timeline.css` | Owner styles are compiled from Liquid stylesheet blocks. | Static component CSS is a dedicated asset loaded by `sections/timeline.liquid`. | Reduce unrelated CSS in the development bundle. | Keep owner references and asset together; retain current theme rules/cascade and validate first-paint geometry. |
| `sections/collection-banner.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-collection-banner.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/collection-page-links.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-collection-page-links.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/collections-with-tabs.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-collections-with-tabs.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/contact-form-custom.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-contact-form-custom.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/email-signup-dual-image.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-email-signup-dual-image.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/email-signup-form.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-email-signup-form.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/email-signup-single-image.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-email-signup-single-image.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/faq-accordion.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-faq-accordion.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/faq-image-accordion.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-faq-image-accordion.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/header.liquid` | Overlay transparency is declared locally as well as in the foundation. | Remove local blanket transparent rules so shared critical first-paint and active-overlay rules own backgrounds. | Keep Header initial and open/scrolled states consistent. | Review critical.css together with overlay scheme and active state rules. |
| `sections/icon-text-cards.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-icon-text-cards.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/icon-text-inline.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-icon-text-inline.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/image-cards.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-image-cards.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/image-comparison-split-custom.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-image-comparison-split-custom.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/location-map.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-location-map.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/shop-the-look-section.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-shop-the-look-section.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/testimonials-background-custom.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-testimonials-background-custom.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/testimonials-horizontal-custom.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-testimonials-horizontal-custom.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `sections/timeline.liquid` | Static component rules live in the Liquid stylesheet bundle. | Load `assets/section-timeline.css` synchronously at component output. | Load optional CSS only with its component. | Keep CSS asset/reference paired, avoid duplicate rules and preserve current theme geometry/editor rendering. |
| `assets/block-animations.js` | Main entrance lifecycle measures a complete card list for each card. | Cache list membership and row positions within each scan; read row geometry before reveal attribute writes; reuse one stagger token read. Preserve current main lifecycle plus Press fix. | Reduce repeated layout reads without changing entrance timing. | Retain scan-local cache; remeasure on resize, tab activation and editor load. Transfer: ARCHE-ESSEN-LIGHTHOUSE-ANIMATION-002. |
| `snippets/social-icon.liquid` | Shared social brand paths use a 24px viewBox. | Facebook, X, Instagram and Pinterest use the original Featured product Figma paths in a 16px viewBox and inherit currentColor. | Match Arche social artwork. | Preserve the four Figma paths and accessible decorative SVG attributes. |
| `snippets/social-links.liquid` | Social order begins Facebook, Instagram. | Order is Facebook, X, Instagram, Pinterest, then remaining networks. | Match Figma Share row. | Retain global URL ownership and blank URL filtering. |
| `blocks/_header-search.liquid` | Text also renders an icon; Search bar collapses before the mobile breakpoint. | Desktop Text hides icon; Search bar stays a form at >=992px; all modes use icon-only mobile UI. | Honor the existing Desktop type choices. | Verify all four values at compact desktop and mobile; retain form labels, submission and overlay hooks. |
| `blocks/_header-logo.liquid` | One position for all breakpoints. | Relabel existing position as Desktop position; add independent Mobile position (Left/Center), with Center default and normalized data attributes. Preserve global normal/transparent logos. | User-authorized Arche-only mobile Header customization (2026-10-14). | Preserve position ID and new mobile setting; reconcile header runtime and first-paint rules together. |
| `assets/header.js` | Organize Header columns once from desktop logo class. | Reorganize existing nodes at the mobile breakpoint with independent logo position; centered mobile logo has menu/search left and cart right. Cache original block order, avoid duplicate nodes and preserve focus on moves. | Keep mobile logo centered regardless of desktop position. | Verify all position pairs, resize round trips, section reloads, focus and drawer state after upstream runtime changes. |
| `blocks/_header-top.liquid` | Mobile uses asymmetric columns and the desktop action gap. | Centered mobile logo uses balanced side columns. Existing gap becomes Gap menu, with separate actions_gap; optional gap_mobile/actions_gap_mobile override desktop values only when Customize for mobile is enabled. | Match the Figma mobile Header arrangement. | Preserve balanced center geometry and check 320px through tablet widths. |
| `assets/critical.css` (Header first-paint rules) | Pre-JS mobile layout derives from desktop left class. | First-paint logo placement reads Mobile position; menu and Search group on the left for Center. | Avoid logo jumping when Header JS initializes. | Keep server-rendered and initialized arrangements aligned; preserve other existing critical CSS customizations. |
| `blocks/_mega-menu-banner.liquid` | Banner handwrites button markup. | Render button_style through shared theme-button with tertiary, underline and icons. Hidden menu images use explicit lazy loading and auto responsive sizes with mobile/desktop fallback. | Synchronize global buttons and avoid competing with the hero image. | Retain renderer and image loading hints; verify buttons, menu open, mobile drawer and editor. Transfer image hints independently via ARCHE-ESSEN-LIGHTHOUSE-MEDIA-003. |
| `assets/variant-picker.js` | Option changes select variant media. | Only swatch changes update media; all options continue updating commerce state. | Preserve browsed images when changing size. | Keep updateMedia event intent aligned with product-media.js. |
| `blocks/blog-list.liquid` | Desktop one-column modifier only. | Adds the mobile one-column modifier when mobile grid columns equal one. | Match mobile blog layout. | Preserve option gating on layout and mobile column count. |
| `blocks/header.liquid` | Shared header composition. | Arche header spacing and composition follow the current preset. | Match Arche section headers. | Review upstream spacing changes and retain merchant controls. |
| `sections/scrolling-cards.liquid` | Shared scrolling Cards section. | Arche preset uses existing Cards with mobile sticky enabled and Fade transition. | Reuse the shared section for the stacked editorial content. | Preserve Card blocks, saved media, spacing settings and sticky lifecycle. |
| `sections/scrolling-cards-stack.liquid` | Separate custom stack section. | Retired; homepage uses scrolling-cards. | Remove duplicate implementation. | Restore only when explicitly requested with a consumer. |
| `assets/image-text-stacked-bands.js` | Base scroll observer faded images and ran mobile autoplay/dots. | Retired on 2026-10-13 after migrating the homepage to `scrolling-cards` and the shared `scrolling-cards.js` runtime; no active references remain. | Remove the one-off Image text runtime. | Keep this retirement record; do not restore unless the old section is intentionally brought back. |
| `assets/scrolling-cards.js` | Base runtime scales scrolling Cards. | Centers whole Cards in the viewport using measured height; updates after resize and cleans up during editor unload. Scrolling cards owns the Stack transition option with Scale and Fade; section preset and homepage select Fade. | Keep Cards centered while retaining the existing Scale effect. | Preserve per-Card centering, resize observation, and lifecycle cleanup. |
| `sections/image-text-stacked-bands.liquid` | Base pinned only the image and used a mobile carousel. | Retired on 2026-10-13; the homepage section and Figma content moved to `scrolling-cards`. | Remove duplicate section layout and preset implementation. | Keep this retirement record; do not restore unless the old section is intentionally brought back. |
| `sections/footer.liquid` | Footer image links use the shared hover zoom. | Inherited Essen CSS fixes the image zoom at 1 for footer images linking home. | Preserve inherited footer brand artwork behavior. | Keep this custom implementation when updating base; review overlaps. |
| `blocks/faq_accordion.liquid` | Question sizes use only the six heading profiles. | Adds requested desktop/mobile Custom choices and bounded Custom size ranges; migrates unmatched preset values to 16px/14px while retaining the mobile-override flag and XS leading/tracking. | Keep old question sizes after the global typography scale migration. | Preserve additive Custom controls and Liquid mapping; review upstream FAQ schema overlaps. |
| `snippets/heading-size-token.liquid` | Visual heading sizes consume shared theme tokens. | Resolves Display from the declared HTML tag before generating inherited desktop/mobile size variables; explicit sizes and legacy normalization are retained. | Keep automatic Display consistent outside the Heading kernel. | Preserve the optional html_tag resolver and its callers together during base updates. |
| `blocks/faq_category.liquid` | Visual heading sizes consume shared theme tokens. | Resolves Display from the declared HTML tag before generating inherited desktop/mobile size variables; explicit sizes and legacy normalization are retained. | Keep automatic Display consistent outside the Heading kernel. | Preserve the optional html_tag resolver and its callers together during base updates. |
| `blocks/image-text-stacked-band.liquid` | Base block rendered an image plus editable copy for Image text stacked bands. | Retired on 2026-10-13; the homepage now uses existing `scrolling-card` blocks with nested shared Group, Heading, Button and Image blocks. | Remove duplicate Card content schema and rendering logic. | Keep this retirement record; do not restore unless the old section is intentionally brought back. |
| `sections/collections-with-background.liquid` | Visual heading sizes consume shared theme tokens. | Resolves Display from the declared HTML tag before generating inherited desktop/mobile size variables; explicit sizes and legacy normalization are retained. | Keep automatic Display consistent outside the Heading kernel. | Preserve the optional html_tag resolver and its callers together during base updates. |
| `snippets/comparison-table-column-shell.liquid` | Legacy unused snippet. | Removed after checking all Liquid references. | Resolve orphaned snippet warnings. | Restore only with an actual consumer. |
| `snippets/localization-styles.liquid` | Legacy unused snippet. | Removed after checking all Liquid references. | Resolve orphaned snippet warnings. | Restore only with an actual consumer. |
| `snippets/product-list-promo-items.liquid` | Legacy unused snippet. | Removed after checking all Liquid references. | Resolve orphaned snippet warnings. | Restore only with an actual consumer. |
| `blocks/heading.liquid` | Personal main foundation. | Elara-compatible opt-in leaf animations and behavior-preserving token/font helpers. | Add block animation controls and resolve Theme Check warnings without replacing Essen layout. | Preserve current settings/presets; review overlapping runtime and token changes. |
| `blocks/text.liquid` | Personal main foundation. | Elara-compatible opt-in leaf animations and behavior-preserving token/font helpers. | Add block animation controls and resolve Theme Check warnings without replacing Essen layout. | Preserve current settings/presets; review overlapping runtime and token changes. |
| `blocks/button.liquid` | Personal main foundation. | Elara-compatible opt-in leaf animations and behavior-preserving token/font helpers. | Add block animation controls and resolve Theme Check warnings without replacing Essen layout. | Preserve current settings/presets; review overlapping runtime and token changes. |
| `blocks/eyebrow.liquid` | Personal main foundation. | Elara-compatible opt-in leaf animations and behavior-preserving token/font helpers. | Add block animation controls and resolve Theme Check warnings without replacing Essen layout. | Preserve current settings/presets; review overlapping runtime and token changes. |
| `blocks/editorial-text.liquid` | Personal main foundation. | Elara-compatible opt-in leaf animations and behavior-preserving token/font helpers. | Add block animation controls and resolve Theme Check warnings without replacing Essen layout. | Preserve current settings/presets; review overlapping runtime and token changes. |
| `snippets/block-animation-attributes.liquid` | Personal main foundation. | Elara-compatible opt-in leaf animations and behavior-preserving token/font helpers. | Add block animation controls and resolve Theme Check warnings without replacing Essen layout. | Preserve current settings/presets; review overlapping runtime and token changes. |
| `snippets/css-token-value.liquid` | Personal main foundation. | Elara-compatible opt-in leaf animations and behavior-preserving token/font helpers. | Add block animation controls and resolve Theme Check warnings without replacing Essen layout. | Preserve current settings/presets; review overlapping runtime and token changes. |
| `snippets/font-faces.liquid` | Personal main foundation. | Elara-compatible opt-in leaf animations and behavior-preserving token/font helpers.  Load deduplicated medium (500) variants for body/heading font roles used by Essen product-card titles; other role font weights stay configured.| Add block animation controls and resolve Theme Check warnings without replacing Essen layout. | Preserve current settings/presets; review overlapping runtime and token changes.  Preserve this Essen customization and review upstream overlaps.|
| `layout/theme.liquid` | Personal main foundation, including shared block animation script and body motion switch. | Conditional script loading, font helpers and keyboard skip link; section/group order retained. | Arche performance and keyboard access. | Animation boot guard removed; script/body motion binding follows main. Preserve unrelated loading, font and accessibility changes. |
| `blocks/marquee.liquid` | Main applies scheme background even in inherit mode. | Inherit leaves the marquee background transparent; an explicit scheme paints its background. Legacy Item is excluded from the schema allow-list. | Respect the parent section background when Color type is inherit. | Preserve this correction until main provides equivalent inherit behavior; verify both inherit and explicit scheme. |
| `blocks/email-signup.liquid` | Underlined newsletter input inherits horizontal padding from the global form foundation. | Set padding-inline to zero only for the underlined_input email control at all breakpoints. | Align newsletter placeholder/text to the underline edge per owner request. | Preserve the layout-scoped zero inline padding without changing vertical padding, other layouts, validation or submit behavior. |
| `blocks/localization.liquid` | Footer shares header trigger styling, appends a currency symbol and hides a single-language selector. | HTTPS country flags plus footer-only bordered 42px-minimum controls, 16px inline/10px block padding, 8px icon gap, 20px chevron and currency ISO label; preserve the base multiple-language visibility guard. | Match Figma footer without changing header localization or adding global store languages. | Preserve localization-block-scoped overrides, base multiple-language guard and ISO-only summary; retain shared forms, overlays and editor runtime; never apply these rules to _header-localization. |
| `assets/hero.js` | Parallax schedules layout/transform work for every scroll, including offscreen sections; reduced-motion preference is captured only at initialization. | Observe the hero surface, schedule frames only near the viewport, respond to reduced-motion changes and disconnect observers/listeners on unload. | Reduce offscreen rendering work and honor current motion preferences. | Preserve visibility gating, fallback without IntersectionObserver and editor cleanup when merging upstream parallax changes. |
| `snippets/image.liquid` | Mobile picture candidates omit width descriptors and source sizes. | Emit width descriptors, inherited sizes and mobile intrinsic dimensions; clamp and deduplicate candidates to the original width. Pass an explicit empty alt string when merchant/image alt text is absent so decorative images always emit alt="". | Let browsers select an appropriately sized mobile image and avoid oversized candidates. | Preserve art direction, links, alt text, merchant sources and automatic image_tag loading behavior; review upstream responsive image generation. |
| `blocks/_collection-sort.liquid` | Calculates unused clear URL, count and search encodings. | Removes unused calculations; sorting form and active-filter inputs stay intact. | Remove unused assignments and unnecessary Liquid work. | Review future consumers before restoring any removed calculations. |
| `blocks/_collection-toolbar.liquid` | Empty-search flag is consumed without a declared block parameter. | Declares the existing boolean parameter for filtered empty search results. | Validate the existing Search-to-toolbar context contract. | Keep declaration and the existing empty-results behavior together. |
| `blocks/_search-products.liquid` | Parent page size is consumed without a declared block parameter. | Declares the existing numeric results_per_page parameter. | Validate parent-owned search pagination. | Preserve the owning results block's page-size setting and argument. |
| `blocks/product-list-banner.liquid` | Passes numeric 2 to a string column-setting parameter. | Passes the equivalent string '2'; normalized two-column layout is unchanged. | Resolve the render parameter type warning. | Retain the two-column layout and shared grid normalization. |
| `blocks/testimonial-item.liquid` | Calculates an unused testimonial_position_value mapping. | Removes only the dead mapping; actual layout-flow position still uses testimonial_position. | Remove unused Liquid work. | Preserve shared layout-flow position behavior when merging. |
| `snippets/product-collection-grid.liquid` | Compatibility wrapper passes a mobile-preview parameter that the shared snippet drops. | Declares the parameter and forwards it to the shared Swiper carousel. | Keep the existing legacy mobile-preview intent and validate the render contract. | Preserve shared Swiper behavior and review preview handling when merging. |
| `snippets/icon.liquid` | Checks registered names with a long OR chain and falls back to arrow-right for unknown names. | Uses exact array membership with the same 76 registered keys/aliases and fallback. | Reduce Liquid complexity without changing rendered SVG or accessibility. | Preserve the full registry and custom SVG validation; compare alias and fallback output when merging. |
| `sections/gallery-custom.liquid` | Generic composition with Carousel preset; media width follows carousel columns. | Uses shared Marquee with direct `_marquee-image` children. Current preset image settings use 400px desktop / 255px mobile square images; legacy Item geometry CSS remains unused. | Match Essen gallery strip with continuous motion instead of carousel. | Preserve card geometry and shared marquee lifecycle; review overlapping section layout changes. Retain merchant images, links, alt text and order during composition updates. |
| `sections/featured-product.liquid` | Variant option captions use Accent color; form labels inherit the shared form typography, including Quantity's weight 500. | Featured product option-header captions and form labels use Body small (currently Poppins 14px), regular weight 400, normal style, 1.5 line height and the inherited scheme Text color. | Match Essen Featured product Size, Color and Quantity labels. | Preserve the Featured product scoped selectors and body font/color tokens; review shared variant/form label cascade changes during updates. |
| `sections/announcement-bar.liquid` | Announcement bar provides slider/scrolling messages without dismissal. | Adds optional Show close button, a right-aligned 24px inherited-color close icon in a 40px target, responsive page margins and reserved content space; current preset enables it. | Match Essen Figma Top bar and allow customers to dismiss it. | Preserve setting, scoped CSS and close markup; review upstream announcement layout, icon and schema changes together. |
| `assets/announcement-bar.js` | Initializes and destroys slider/scrolling and discount-copy runtime. | Close destroys the instance and hides its root until reload; transfers focus to the next header control and restores hidden bars on editor section selection/load. | Accessible dismissal without persisted shopper state or background timers. | Preserve scoped close listeners, runtime cleanup and editor restoration; review upstream slider/scrolling lifecycle overlaps. |
| `sections/password.liquid` | Main renders password content from merchant blocks. | Preserve the existing password title as a translated fallback when no blocks are saved; keep main dialog, logo, footer and no-JavaScript form. | Preserve existing password composition during the approved base sync. | Keep empty-composition fallback and new merchant block support when merging. |

| `blocks/product-variant-picker.liquid` | Show option captions controls option names and their selected values together. | Adds Show selected value directly below Show option captions, defaulting to true and visible only when captions are enabled; passes the setting to the shared picker. | Let Assen merchants show option names without the selected-value suffix. | Preserve the additive setting, conditional editor visibility and snippet parameter together when merging picker updates. |
| `blocks/_bundle-product-list.liquid` | Bundle selected variant buttons override the shared picker with heading-color background and border. | Removes the selected-color override so bundle buttons inherit the same selected input colors as Color button and Size buttons. | Keep variant selection colors consistent across this theme. | Preserve shared selected colors when merging bundle picker styling; review future selected-state overrides. |
| `snippets/variant-picker.liquid` | Global swatch style accepts Color, Variant image, Button and Dropdown; button labels contain only the option name. | Adds Assen's `color_button` style for color/swatch-backed options: a decorative color chip from the shared swatch renderer plus a visible option name, using the existing native button radio and variant/status hooks. Other options retain their picker type. | Match Essen's color-inside-button design. | Preserve the additive global schema choice, allow-list and color-option branch together; review upstream picker markup, swatch data, availability and overlay callers before merging. |
| `assets/critical.css` | Button selections use an accent background; visual swatches size from global swatch dimensions. | Only Color button uses an 8px square chip, 6px chip/name gap and 66px minimum width. Button and Color button share a selected background mixed from inherited input colors, input text color and input border color, including selected hover. Product-card metafield uses body-sm (14px), 1.5 line height, the inherited scheme Product card metafield token (--product-card-metafield-color; Figma Generated/400 default) and single-line ellipsis after price inside card details, with a fixed 4px top margin on desktop and mobile. Assen-only .price--product-card uses 14px/21px, weight 400, normal style, center cross-axis alignment and 4px gap; compare-at stays 14px with #808080, opacity 1 and line-through. Price typeface and sale color retain existing theme tokens. Button height, padding, radius, focus, wrapping and availability remain driven by the existing foundation.  Essen product-card titles use weight 500 and line-height 1.5 (14px/21px at current desktop/mobile sizes); existing family, size, color and clamping settings remain active.| Match Essen desktop/mobile color buttons while keeping Theme Settings functional. | Preserve scoped Color button geometry and shared Button/Color button selected colors; review upstream button/focus/status rules and responsive overrides together with the picker markup.  Preserve this Essen customization and review upstream overlaps.|
| `blocks/product-buy-buttons.liquid` | Buy buttons use a 12px default gap between purchase controls/actions. | Uses a 20px desktop/mobile default and invalid-value fallback, while rendering existing merchant gap and padding overrides. | Match Essen's quantity-above-Add-to-cart composition. | Preserve the 20px Liquid/schema/CSS defaults together; review upstream form, child-block and gap mapping changes before merging. |
| `assets/product-information.css` | Quantity and Add to cart share a two-column row on desktop/mobile; quantity is capped at 12rem. | Stacks quantity above a full-width Add to cart on desktop/mobile, caps quantity at 128px, adds an 8px label/control gap and uses a 20px default purchase/action gap. Quantity's inner heights account for the border so its outer height matches the inherited form height. Typography, colors, radius, focus and custom quantity styles use existing theme tokens/settings. | Match Essen Featured product desktop/mobile Buy buttons layout. | Preserve the single-column purchase grid, 128px quantity cap and border-aware height; review upstream purchase layout/mobile overrides and keep merchant gap overrides functional. |
| `blocks/countdown-timer.liquid` | Countdown unit widths are measured from content; layout uses rem gaps/padding, minimum heights, muted labels and generic label tracking. | Essen With labels uses 112px cards/16px gaps on desktop and 72px cards/12px gaps on mobile, 16px vertical padding, 10px/15px labels with 2.4px tracking and full inherited text color; numbers use 1.2 line-height and -0.8px tracking. CSS owns labelled widths; other styles retain measured widths. | Match Essen desktop/mobile countdown design with explicit px geometry on this theme branch. | Preserve labelled-card CSS and runtime width exclusion; review upstream layout/typography/runtime overlaps before merging. Keep editor color and number-size settings functional. |
| `sections/slideshow.liquid` | Progress bar segments stretch across the content width, use a 4px gap, translucent tracks and a taller active segment, with shared desktop/mobile bottom offsets.  Fixed desktop heights: 42/56/64/90/108rem; mobile: 32/44/56/68/82rem.| Progress bar uses Figma's 50px × 2px segments, 16px gap, solid #666 tracks, active-slide heading color fill and 40px visual bottom offset on desktop/mobile. Each segment retains a 24px click target; existing position settings and autoplay runtime remain in use.  Add navigation_style=only_icon: only this style with Bullets groups the configured icon arrows around 8px dots and a 36px active track, 12px visible dot gaps, 10px icon gaps and 40px bottom offset. Rounded fill uses clip-path without scaling its radius; Primary/Secondary keep their existing layout. Reuse carousel-navigation-icon; no SVG assets. Calibrate existing fixed height choices to desktop 62.3/83.1/95/133.6/160.3rem and mobile 45.7/62.9/80/97.1/117.1rem; select Medium in the Essen preset/homepage. Adapt and Full screen retain their original behavior.| Match Essen's Slideshow Segment progress pagination with existing Numbers and other carousels retained. Only icon + Bullets additionally uses the requested compact controls.  Match Figma slideshow nodes 46002:5727 (950px) and 46240:8475 (800px), at the theme root size of 10px.| Preserve scoped progress-bar styles; review upstream pagination markup/CSS and autoplay changes, then verify responsive alignment, keyboard focus, click targets, single-slide hiding and progress fill.  Preserve the calibrated Essen height scale and review any upstream changes to these mappings before merging.|
| `blocks/icon.liquid` | Personal main accepts Icon width from 6px on desktop and 8px for the mobile override; smaller values fall back to 24px. | Assen accepts 4–100px for both desktop and mobile Icon width in schema and Liquid validation; default remains 24px. | Allow small decorative icons and custom SVG separators in this theme. | Preserve the 4px minimum in both schema ranges and Liquid guards; review upstream Icon sizing/mobile changes before merging and verify 4px, 100px, defaults and invalid-value fallbacks. |
| `sections/icon-with-text-custom.liquid` | No icon-with-text-custom section in personal main. | Custom icon/text section renders editable Grid blocks, supports page/full-width containers, optional background color or responsive cover image, and scoped inline CSS for alignment, content gap and vertical padding with optional mobile overrides below 768px. | Provide the Assen homepage icon-and-text composition with merchant-editable layout and background controls. | Preserve this local section and theme preset values; review changes to shared Grid/block contracts, container widths, color schemes and spacing before merging, and verify desktop/mobile layout and Theme Editor block behavior. |
| `sections/zoom-image-banner.liquid` | No zoom banner section in personal main. | Custom editorial image/text overlay matching Essen Figma desktop/mobile, 80px vertical spacing, shared Group/Header/Eyebrow/Heading/Button blocks with content sizing owned by Group; foreground blocks own the default scroll zoom runtime. | Recreate the referenced custom section on the Assen homepage after Featured product. | Keep theme composition and image selections; review upstream changes to shared block contracts and background media before merging. |
| `blocks/scrolling-image.liquid` | No scrolling-image block in personal main. | Editable foreground image using Image-compatible content/link, desktop/mobile ratio presets and custom ratios, fit/fill/custom width, width limits, radius and padding; retains the 550px cap, 6:7 ratio, 10% overlay and block-owned scroll reveal at a fixed 12% zoom. Existing foreground settings migrated in the homepage; section preset uses block defaults. | Match the Figma foreground geometry without changing the global Image kernel. | Preserve this local block; reconcile shared image snippet changes and validate crop, alt text and editor attributes. |
| `assets/section-zoom-image-banner.css` | No dedicated zoom banner stylesheet. | Layers image and content in one grid, clips foreground zoom, inherits theme typography/buttons/schemes and mobile margins. | Match desktop/mobile layout while preserving shared tokens. | Keep scoped styles; check container and block class changes from main at desktop/mobile widths. |
| `assets/section-zoom-image-banner.js` | No dedicated zoom banner runtime. | Block-local `zoom-foreground-image` custom element reveals the foreground clip-path from 0% to 100% as the image enters the viewport and its center reaches viewport center, easing scale from 1.12 to 1. Uses native scrolling, time-based damping, visibility gating, reduced motion, editor selection reset and listener/observer cleanup. | Match the requested entry-to-center reveal and smooth scroll interaction across wheel, touch, keyboard and high refresh rates. | Preserve native scroll behavior; verify lifecycle and motion preferences when main changes runtime conventions. |

| `blocks/blog-card.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/carousel.liquid` | Main Carousel settings, order, definitions and Slide-only child contract. | Add only the recorded independent mobile preview setting alongside the main desktop preview; Arche/Essen use contained N + 2/7, Elara/Malandra use 1.2 for one mobile column. | Reapply genuine preview custom without retaining legacy base options. | Main controls remain authoritative; no legacy card/border/loop/transition option group. |
| `assets/carousel-block.js` | Main common Carousel owner uses shared scoped runtime. | Owner layout policy restores contained N + 2/7 preview independently per breakpoint; suppress preview for insufficient items. | Reapply the documented theme preview on main lifecycle. | Preserve pre-JS/runtime parity, resize, cloned loop behavior and editor cleanup. |
| `snippets/collection-card-render.liquid` | Main shared collection card renderer validates the common ratio values and maps them to CSS aspect ratios. | Adds the Assen-only `ratio_5_4` option to the renderer allow-list and maps it to `1.25`, shared by both collection-card adapters. | Preserve the theme's 5:4 collection-card crop while adopting main's shared render kernel. | Keep the 5:4 schema choice in both adapters aligned with the allow-list and 1.25 mapping; review main renderer changes together with both callers. |
| `blocks/collection-thumbnail.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/first-card.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/image-card.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/image-comparison.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/image.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/press-item.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/product-callout-gallery.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/video.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `snippets/_overlay-media-ratio.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `snippets/css-variables.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. Navigation Rounded additionally maps to 6px instead of the shared 8px rounded token. Accepts Color button in the global swatch-style token mapping. Emits the merchant-editable Product card metafield color for root and each color scheme, defaulting to Figma Generated/400 (#999999). | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. Preserve the navigation-only 6px mapping; keep other radius tokens unchanged. |
| `snippets/image-ratio-value.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `snippets/product-card-metafield.liquid` | No configurable product metafield row in cards. | Resolves namespace.key on the card product; Shopify formats supported text/scalar values, then output is escaped. Missing/invalid/unsupported values emit no row. | Theme-specific material text from product data. | Preserve key validation, product-specific lookup, escaping and empty-state behavior when adopting upstream card changes. |
| `snippets/product-card.liquid` | Shared product card supports media ratios, vendor/type, title, price and swatches. | Retains Assen 5:4 support and conditionally renders the configured product metafield inside card details immediately after price, with a fixed 4px top margin. | Match Essen material text and keep per-product values editable in Admin. | Preserve additive ratio support and the show/key contract; review upstream content ordering, product context and renderer changes. |


| `blocks/metafield.liquid` | No key-based product text block. Text uses merchant-entered rich text. | Reads namespace.key from closest.product; renders escaped text or Shopify formatted values with all Text presentation controls and scoped CSS. | Replace Italian Fleece with product data while preserving the preset. | Preserve product context, missing-value hiding, text escaping and responsive Text controls; review overlap with future base metafield blocks. |
| `blocks/_product-media.liquid` | Desktop offers thumbnail rails/static grids; mobile offers one-image slider or thumbnails. | Adds Carousel 2 items to desktop and mobile layout with validated Liquid values and mobile pagination controls. Main gallery controls use the theme Figma long-arrow SVG. | Match Featured product Essen desktop/mobile media composition. | Preserve additive layout values and guards; review upstream media markup, variant filtering and schema changes. Preserve the long-arrow control rendering. |
| `assets/product-media.js` | Carousel shows one media except the existing Quick Add strip. | Two-item modes show up to two visible media, hide thumbnails and hide controls/pagination when there is no overflow; reuse Swiper, variant filtering, zoom and breakpoint lifecycle. | Enable two-image swiping and desktop arrows without changing other modes. | Review upstream gallery initialization/filtering/lifecycle changes and verify zero/one/two/many media and breakpoint rebuilds. |
| `assets/product-media.css` | Desktop non-thumbnail modes render static grids; mobile slider hides thumbnails. | Two-item desktop mode retains the Swiper flex rail and arrows; both two-item modes hide thumbnails and offer a horizontal two-item fallback without JS. Main product images use a 5:7 frame with cover cropping on desktop/mobile, excluding overlay galleries. | Preserve carousel geometry and access before runtime initialization; apply the owner's revised main-image ratio. | Preserve scoped two-item selectors and exclusions from static rules; verify other gallery layouts and preserve the 5:7 main-image frame after upstream CSS changes. |

| `snippets/carousel-navigation-icon.liquid` | Long arrow uses a 24px viewBox and generic stroked paths. | Long arrow uses the exact two filled paths from the Figma 14px arrow-left asset, mirrors the next direction and inherits currentColor. Other icon options retain their paths. | Match Essen navigation SVG. | Preserve the long-arrow geometry, 14px size, inherited color and directional mirroring when merging upstream icon changes. |

| `assets/swiper-carousel.css` | Autoplay bullet fills scale their radius; native progressbar follows vendor scale. | Shared rounded clip-path reveal for all carousel bullets and Slideshow segments, including RTL/reduced motion and slideshow clock pause/resume. Native progressbar track/fill share --swiper-pagination-progressbar-border-radius (pill fallback); supports vertical/opposite and clip-path transitions. | Preserve rounded endpoints throughout progress across the theme. | Preserve consumer dimensions, colors, durations and selectors; transfer only progress patch under ARCHE-ESSEN-SLIDESHOW-002 revision 2. |
| `assets/swiper-carousel.js` | Native Swiper pagination writes scaled progress fills. | Bind rounded native progress after init and paginationUpdate/changeDirection; compute page fraction from snap/group/loop and remove listener on teardown. | Fix every native progressbar consumer through the shared adapter. | Keep vendor files unchanged, page-count semantics and editor cleanup; verify grouped pages, RTL, vertical/opposite and reinit. |
| `assets/slideshow.js` | Autoplay runs an animation frame loop even offscreen. | Suspend its clock and frame loop outside the viewport and in hidden tabs; resume the remaining interval and disconnect on teardown. Cache numbered pagination nodes and write autoplay progress on the pagination element, avoiding inherited per-frame style invalidation across slide media/content. | Reduce background CPU and layout reads while keeping existing autoplay/pagination. | Preserve manual navigation, logical clone resets, pause state and idempotent editor cleanup. |
| `snippets/localization-overlay.liquid` | Overlay renders protocol-relative country artwork. | Render localization-flag for every option. | Ensure hidden/mobile picker flags also use HTTPS. | Preserve country forms, labels and selection runtime. |
| `snippets/localization-flag.liquid` | Country image URLs inherit the preview protocol. | Normalize protocol-relative src/srcset after native image_tag rendering. | Avoid insecure flag requests in HTTP development previews. | Preserve existing HTTPS URLs and native image dimensions/classes/alt semantics. |
| `blocks/_header-localization.liquid` | Header localization owns the reusable localization CSS. | Render shared header-localization-styles and HTTPS localization flags; declarations stay identical. | Correct dependency/loading or accessible label warnings. | Preserve behavior and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |
| `blocks/_header-menu.liquid` | Mobile menu uses localization classes owned by another block. | Declare shared localization styles and HTTPS flags. | Correct dependency/loading or accessible label warnings. | Preserve behavior and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |
| `blocks/collection-tab.liquid` | Main deferred Collection tab loading and product/promo slots. | Retain explicit tab-layout-styles dependency; saved labels, collections and promo content remain theme-owned. | Owner authorized rebuilding promotion/Collection tabs from main. | Keep main loading/lifecycle; preserve saved content and compatible layout values. |
| `blocks/tab-layout.liquid` | Owns shared tab navigation CSS. | Render tab-layout-styles with identical declarations and order. | Correct dependency/loading or accessible label warnings. | Preserve behavior and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |
| `blocks/gallery-strip-item.liquid` | Owns shared gallery strip item geometry. | Render gallery-strip-item-styles with identical CSS. | Correct dependency/loading or accessible label warnings. | Preserve behavior and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |
| `blocks/gallery-strip-feature-item.liquid` | Uses geometry owned by a sibling block. | Declare gallery-strip-item-styles; retain feature overlay overrides. | Correct dependency/loading or accessible label warnings. | Preserve behavior and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |
| `blocks/slideshow-slide.liquid` | Uses Hero CSS owned by the Hero section. | Declare hero-styles and give slide surface/padding/gap overrides higher specificity than shared Hero styles; retain LCP preload behavior. Map mobile image crop heights to Essen’s current 457/629/800/971/1171px presets so responsive hints match rendered geometry. | Correct dependencies and restore full-height desktop/mobile content positioning. | Preserve slide-specific CSS precedence regardless of stylesheet order and keep all nine desktop/mobile positions; retain merchant settings and sources. |
| `sections/hero.liquid` | Owns Hero CSS and page/full width choices. | Render hero-styles; support full_width_no_padding with an explicit no-inline-padding modifier while retaining full surface/parallax behavior. | Correct dependencies and expose the same full-width-without-padding choice as other sections. | Preserve width choices, modifier and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |
| `snippets/header-localization-styles.liquid` | Localization styles live in the Header Localization block. | Provide one rendered shared stylesheet dependency for Header Localization and mobile menu. | Correct dependency/loading or accessible label warnings. | Preserve behavior and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |
| `sections/collection-tabs.liquid` | Collection tab rail overrides desktop/mobile tab gaps with fixed values. | Bind navigation gap to --tab-layout-gap-desktop and --tab-layout-gap-mobile, preserving zero and desktop fallback. | Let existing Tab Layout Gap settings control the rail; recorded under ARCHE-ESSEN-TAB-LAYOUT-001. | Preserve rail styling, section gap and saved settings; review gap overrides during base sync. |
| `snippets/tab-layout-styles.liquid` | Tab styles live in Tab Layout. | Provide shared tab navigation CSS to Tab Layout and Collection Tab; bind desktop/mobile Gap to navigation for both Underline and Button. | Correct dependency/loading or accessible label warnings. | Preserve behavior and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |
| `snippets/gallery-strip-item-styles.liquid` | Strip geometry lives in Gallery Strip Item. | Provide identical shared geometry to normal and feature items. | Correct dependency/loading or accessible label warnings. | Preserve behavior and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |
| `snippets/hero-styles.liquid` | Hero styles live in the Hero section. | Share Hero CSS with Slideshow Slide; constrain the content grid with minmax(0, 1fr) and min-width: 0; size Hero picture images and videos to cover the full media surface. | Prevent marquee intrinsic width from pushing text/buttons outside the viewport and prevent background media from exposing the scheme. | Preserve the bounded content grid, full-cover media geometry and shared dependency; retain stack overrides and merchant settings. |
| `blocks/product-list.liquid` | Translates the collection title as a locale key. | Preserve merchant title; translate only the empty-label fallback. | Correct dependency/loading or accessible label warnings. | Preserve behavior and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |
| `snippets/product-card-image.liquid` | Card images omit responsive sizes/widths and rely on automatic section loading. | Use responsive candidates; below-fold/footer primary images use lazy loading with auto sizes and fallback; hover images always lazy. First/unknown section contexts retain native primary loading. | Correct dependency/loading or accessible label warnings. | Preserve behavior and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |
| `sections/cart-drawer.liquid` | Inputs include an unused form__control--input modifier. | Use the existing shared form__control class; retain labels and validation. Remove the duplicate stylesheet block; existing deferred cart-drawer.css, including its scroll containment fixes, remains the style owner with editor/no-JavaScript fallbacks. | Correct dependency/loading or accessible label warnings. | Preserve behavior and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |
| `sections/product.liquid` | Inputs include an unused form__control--input modifier. | Use the existing shared form__control class; retain fields and behavior. | Correct dependency/loading or accessible label warnings. | Preserve behavior and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |
| `snippets/comparison-table-column-content.liquid` | Column header is split from its rows with one marker. | Add a row-end delimiter so native column markup remains balanced when rows are replaced. | Correct dependency/loading or accessible label warnings. | Preserve behavior and shared CSS dependency when merging overlapping base changes; retain merchant settings and sources. |

| `blocks/_comparison-table-features.liquid` | Concatenates an open native column header with custom rows and a literal closing div. | Replace only the delimited rows within complete native column markup, preserving native header attributes and balanced HTML. | Resolve the unmatched HTML closing tag warning. | Preserve both row delimiters, native IDs, dynamic/legacy behavior and blank dynamic rows when merging. |

### 2026-10-06 — Selected value visibility

- The Product variant picker block adds **Show selected value** immediately below **Show option captions**. It defaults to enabled to preserve existing rendering and is hidden in the editor when captions are disabled.
- `snippets/variant-picker.liquid` accepts `show_selected_value`; explicit false omits the selected-value span and its colon. Disabling captions always hides the value, while the accessible option legend and size guide remain available. Other snippet callers retain the existing enabled default.
- The existing variant JavaScript checks for the selected-value node before updating it, so no new runtime lifecycle is needed. Preserve this snippet behavior as Assen-only custom alongside the Color button implementation.

### 2026-10-06 — Color button swatch style

- References: Essen desktop `46002:6203` and mobile `46240:8754`, inspected through authenticated Figma Dev Mode. Desktop pill `46120:6238` and mobile pill `46240:8757` use 44px/40px inherited form height, 20px horizontal padding, 66px minimum width and a 6px chip/name gap; mobile chip `46240:8758` is 8 × 8px. Groups wrap with a 12px reference gap; the existing Variant picker item gap setting remains authoritative.
- Theme Settings → Swatches → Swatch style adds **Color button** (`color_button`). Owner selected `color_button` in the theme's current saved settings. Schema defaults and named presets are retained. Swatch width/ratio and selected border/underline settings apply to visual-only swatches; Color button follows the button dimensions and selected background instead.
- Owner requested the Color button border on the outer `variant-picker__choice`, following `--input-border-color` in normal, hover and selected states. The inner label has no border; its height accounts for the outer border to retain global desktop/mobile dimensions. Selected background and keyboard focus remain visible.
- Resolve `--variant-border-width` on the same Solid/Outline surface as `--input-border-width`; the root alias otherwise inherits a computed 0px before the body applies Outline, preventing Forms → Outline thickness from reaching variant controls. Preserve this mapping when merging foundation form styles.
- Border fix verified on the running local storefront: all four Color button choices compute input width = variant width = outer border width = 1px, with input border color `rgb(230, 230, 230)`. Theme Check passes with no errors and 34 warnings.
- Owner set Forms → Outline thickness to a minimum of 1px (range 1–3px); Liquid normalizes legacy values below 1 to 1px. Solid still uses its existing zero-border style.
- Owner aligned the selected background, readable text color and border color for global Swatch style Button with Color button: background uses the same inherited input-color mix, text uses `--input-text-color`, and border uses `--input-border-color`, including hover while selected. Button keeps its existing border width, placement and native interaction.
- Hover correction: plain `variant-picker__button` labels retain `--input-border-color` when hovered before selection as well as while selected, matching the Color button outer border. The scoped override excludes visual swatch labels and preserves keyboard focus, border width and availability states.
- Follow-up reference: Figma Input `46002:6206`, Size group `46002:6208`. The first size pill uses Variant/Bg Component `#F2F2F2`; Variant/Border resolves to `#E6E6E6`. Plain variant buttons now share Color button selected colors regardless of the global swatch style, including Size when `color_button` is selected. They use a 66px minimum width and centered labels. Bundle-specific selected colors are removed so the shared rule remains authoritative. Height, padding and border colors continue to follow merchant settings.
- Color rendering reuses Shopify option-value swatch colors and the existing color-name fallback. Native radios, accessible labels, disabled/sold-out state, variant media and product form updates use the existing picker implementation; no new JavaScript lifecycle is introduced.
- Validation: customization coverage and `git diff --check` pass; Theme Check inspects 323 files with no errors and 34 warnings. Live storefront and Theme Editor behavior have not been exercised for this option.

### 2026-10-06 — Buy buttons layout

- References: Essen Figma desktop Featured product `46002:6185` and mobile `46240:8732`; inspected purchase descendants through authenticated Dev Mode. Both place labelled quantity above a full-width Add to cart. Mobile Quantity `46240:8772` uses the global 40px form height; desktop Add to cart `46002:6216` uses the global 44px button height. The mobile quantity frame measures 128px wide in the 100% canvas view, with a 20px gap before Add to cart.
- Purchase layout is a single column at both breakpoints; quantity remains 128px wide or narrower when the parent is narrower. Existing form/variant/quantity runtime and static child block attributes continue to own commerce behavior.
- Buy buttons defaults to a 20px desktop/mobile gap; explicit merchant values still override it. Quantity's schema default label and the homepage instance are set to `Quantity`; merchants can edit or clear the label. This label/preset change is configuration rather than custom implementation.

### 2026-10-05 — Navigation Rounded and Figma arrow

- Reference: Figma file `v6iKvP4OuW3y0A9bbxel5U`, navigation `46132:465`; inspected authenticated Dev Mode properties: Rounded radius 6px, arrow asset 14 × 14px, 12px padding. Arrow source `46136:385` supplies the two exact filled SVG paths.
- `snippets/css-variables.liquid` maps only Navigation Rounded to 6px. Square, Slightly rounded, Pill and all other shared rounded tokens retain their current mappings.
- `snippets/carousel-navigation-icon.liquid` replaces `long_arrow` with the Figma SVG geometry. Color inherits the control's currentColor; Next mirrors the left arrow. The source paths already encode thickness and rounded endpoints, so this asset retains Figma geometry rather than using global stroke width.
- Product media main-gallery controls select `long_arrow` to use the same asset. Other existing long-arrow consumers receive the shared replacement; Chevron and Arrow choices remain available.
- Current theme settings and the saved theme preset select `radius_navigation: rounded`. This selection is configuration, not custom implementation.

### 2026-10-06 — Product media main-image ratio revised to 5:7

- Owner revised the fixed main-image frame from 4:5 to 5:7 on desktop and mobile. Only the main gallery image selector in `assets/product-media.css` changes; cover cropping remains enabled.
- Thumbnail ratio settings, videos/models, lightbox and Quick Add/Quick View overlay ratios retain their existing behavior. Preserve the revised 5:7 frame when reviewing upstream gallery CSS.

### 2026-10-05 — Product media main-image ratio

- Owner request: main product images in Product media use a custom 4:5 ratio on this theme.
- `assets/product-media.css` frames main image figures at `4 / 5` and fills them with `object-fit: cover` at desktop/mobile widths. This applies to Featured product and the product-page Product media block; thumbnails, videos/models, lightbox and Quick Add/Quick View overlay ratios retain their existing contracts.
- Review upstream main-image and gallery CSS changes before merging; preserve the frame and cover crop. No schema or preset setting is added for this fixed theme customization.

### 2026-10-05 — Featured product Carousel 2 items

- References: Figma `v6iKvP4OuW3y0A9bbxel5U`, desktop `46002:6185`, mobile `46240:8732`; both visually inspected. Desktop shows two adjacent media with previous/next controls; mobile shows two adjacent media above the base progress bar.
- Plan: existing homepage Featured product supplies its selected product to the static Product media block. The block owns desktop/mobile layout; shared Swiper runtime owns movement and existing zoom/variant handling. No new section, block tree, data source or global design token is needed.
- Adds `carousel_two_items` to Desktop layout and mobile Layout style. Gap continues to use the block's desktop/mobile controls. Existing layout defaults remain unchanged.
- Everyday uniform preset and existing homepage instance select the new modes, disable next-slide preview, and select `mobile_pagination_type: progress_bar`. Pagination implementation remains unchanged from base; preset/template settings and locale labels are configuration, not custom code.
- Scope stays on `theme/essen-theme`. Preserve the pre-existing homepage blog `max_posts: 3` edit. No store upload, commit or push is included.
- Validation: Theme Check passed with zero errors (35 existing warnings), `git diff --check` and `check-custom essen-theme` passed. Production CSS/Swiper/runtime fixture verified a 1050px desktop rail with 521px slides and working Next/Previous controls; at 375px mobile the 343px rail shows two 167.5px slides, an existing 2px progress bar, hidden arrows and no page overflow. Automated gallery tests cover breakpoint rebuilds, hidden/one/two/many media, pagination and desktop pointer behavior. Live Shopify Theme Editor add/duplicate/save/reload was not exercised.

### 2026-10-05 — Zoom image banner

- Reference: Essen custom `sections/zoom-image-banner.liquid`; Figma file `v6iKvP4OuW3y0A9bbxel5U`, desktop `46136:5694`, mobile `46240:8812`.
- Placement: homepage immediately after `featured_product`. Both top-level blocks are editable; Group contains Header (Eyebrow + Heading) and Button. Maximum two top-level blocks. No resource context or app slot is required.
- Section owns composition, external spacing, background and scroll behavior; foreground block owns image source/ratio/width/overlay; shared blocks and Theme Settings own typography and buttons.
- Figma source images were converted to AVIF and uploaded to `layouthub-template-v2.myshopify.com` Files: `assen-zoom-background.avif` and `assen-zoom-portrait.avif`. Only the homepage instance selects the uploaded image picker references; the reusable section preset leaves all image pickers blank. No image assets are committed.
- Empty media uses the shared image placeholder. JavaScript disabled, reduced motion and selected editor blocks retain the full visible image at scale 1. Content stays in document order and the CTA remains keyboard accessible.
- Preset/template composition is recorded for context and is not classified as custom implementation.
- Reusable preset explicitly sets Group backdrop blur to `0` and height to `fit`, with no selected images. The homepage retains its AVIF selections.
- Store operation ledger: uploaded background MediaImage `46371151282475` and foreground MediaImage `46371153019179`; synchronized only the two new Liquid files, CSS/JS assets and `templates/index.json` to development theme `191894126891`. Schema uploaded before the initial homepage template. Subsequent corrections stayed within these five files. Final remote code, homepage instance and order were read back and matched local files. Existing homepage differences were only Shopify removing empty `block_order` arrays. Rollback scope is this homepage instance and these custom files; uploaded Files remain owned by the store.
- Validation: Theme Check passed with no errors (35 existing warnings); JavaScript syntax and `git diff --check` passed. Motion tests cover entry/center endpoints, reverse scrolling, instance isolation, reduced/disabled motion, editor selection and disconnect cleanup. Storefront inspection confirmed both Shopify CDN images, desktop 550 × 641.66px, mobile 343 × 400.16px, 80px vertical padding, 40/32px headings and 44/40px buttons. Preview console had no errors.
- Whole-branch `check-custom essen-theme` still reports the pre-existing `sections/icon-with-text-custom.liquid` as undocumented. All four new implementation files are recorded above. Theme Editor add/duplicate/save lifecycle was not exercised manually; selection and teardown were verified in the runtime tests.

### 2026-10-05 — Icon width minimum (theme custom)

- Owner request: allow a minimum Icon width of 4px specifically for `theme/essen-theme`.
- Implementation: `blocks/icon.liquid` changes desktop/mobile range minima and matching Liquid lower-bound guards to 4px. Maximum 100px, step 1px, default 24px and mobile inheritance stay as before. No changes to the shared icon snippet are required because this block supplies size through its own scoped CSS variables.
- Preset/template SVG selections are configuration; Scrolling Text Images remains 6px and Collection list remains 12px. Changing the minimum does not resize existing icons.
- During base updates, review this implementation overlap rather than replacing the theme block with main's version.

### 2026-10-05 — Slideshow Progress bar pagination

- Reference: Figma file `v6iKvP4OuW3y0A9bbxel5U`, desktop Slideshow `46002:5727` / pagination `46002:5738`, mobile Slideshow `46240:8475` / pagination `46240:8481`; both use the Segment progress component.
- Scope: local CSS in `sections/slideshow.liquid`, only for `pagination_type = progress_bar`. Three slides produce a centered 182px group (three 50px bars and two 16px gaps). Bars may shrink in narrow containers; desktop/mobile position settings continue to align the group.
- Visual tracks are 2px high, pill shaped and #666 (Figma Variant/Bg Bar). The fill inherits the active slide's heading color through the existing control scheme/runtime and existing autoplay clock. RTL fill grows from the right.
- All custom progress pagination dimensions use explicit `px` units as requested, so their Figma measurements do not depend on the root font size.
- The visual bars sit 40px above the slideshow edge on both breakpoints. Transparent 24px-high buttons expand pointer/touch access without changing that visual position; existing labels, aria-current, focus outline, clicks and single-slide hiding are preserved.
- No schema, template, shared carousel CSS or JavaScript changes are required. During future base updates, review the section implementation overlap rather than overwriting the theme-specific pagination.
- Validation: Theme Check passed with no errors (35 existing warnings); `git diff --check` and `node theme-base check-custom essen-theme` passed. A local browser fixture using the production stylesheet, Swiper and Slideshow modules verified 50px × 2px bars, 16px gaps and a 40px visual bottom offset at 1920px desktop and 375px mobile, with no mobile overflow. Click and Enter changed the active slide/aria-current, and keyboard focus retained a visible outline. Shopify Theme Editor lifecycle was not exercised in this CSS-only change; the store preview supervisor was stopped during validation.

### 2026-10-05 — Countdown timer Essen appearance

- Reference: Essen Figma desktop group `46110:5940`, Time `46110:5941`, number `46110:5942`, label `46110:5943`; mobile group `46240:8712`, Time `46240:8713`, number `46240:8714`, label `46240:8715`.
- With labels cards: desktop 112px wide, 16px gaps, 496px group; mobile 72px wide, 12px gaps, 324px group. Both have 16px vertical padding, no horizontal padding or number-to-label gap. Cards shrink equally if the available parent is narrower.
- Number typography retains the block's font-size setting and heading family; the homepage's existing H2 setting supplies Poppins 40px desktop/32px mobile. Line-height is 1.2 with -0.8px tracking. Labels use the body family, 10px size, 15px line-height, 2.4px tracking, uppercase and full inherited text color. Existing homepage custom colors supply white text and #333 cards; radius/background controls remain functional.
- CSS owns With labels widths; `syncUnitWidth` skips content measurement for this style so font loading, ticking and resize cannot override responsive card sizing. Timer modes, localized labels, announcements and custom-element lifecycle retain their existing behavior. Inline and inline-superscript retain their own appearance.
- Scope: custom implementation only in this theme's `blocks/countdown-timer.liquid`; no changes to personal main or shared typography. Countdown's content Group uses `width: fit` in both the section preset and homepage template, as requested. These composition settings are configuration rather than custom implementation.
- Validation: Theme Check passed with zero errors (35 warnings), JavaScript syntax check, `git diff --check` and `check-custom essen-theme` passed. A local fixture using the block's production CSS/runtime verified 112 × 95px cards at 1920px; 72 × 85.39px cards, 12px gaps and 324px group at 375px; equal shrinking to 63px cards at 320px without page overflow. Live Shopify Theme Editor was not exercised.

### 2026-10-05 — Essen media ratio options and presets

- Owner request: audit ratio options on this theme branch, add missing 4:5 and 5:4 choices, and align the homepage presets with the inspected Figma desktop/mobile. Image/video media selectors are covered; color/variant swatch geometry is outside this image-crop request.
- Existing `portrait` already maps to 4:5, so it is retained. Add `ratio_5_4` with 1.25 rendering to media selectors; numeric Collections with tabs uses `1.25`. Collection thumbnails retain portrait 2:3 and gain explicit `ratio_4_5` and `ratio_5_4`. Numeric custom ratios in Scrolling image remain available.
- Render changes include shared image/overlay ratio resolvers, global product-card CSS variables and crop dimensions, image-card/collection-thumbnail CSS, and desktop/mobile Liquid mappings and validation. Existing `_product-media` customization additionally supports 5:4 thumbnail ratios. Schema-only consumers and presets are configuration, not implementation customizations.
- Figma evidence: desktop Featured collection 438 × 547.5; mobile 165.5 × 206.88; collection card desktop 453 × 566.25 and mobile 169.5 × 211.88. All use 4:5. The large desktop collection composition measures 741 × 950 (approximately 4:5); the first card fills the row height determined by the second card.
- Following the owner correction, the first Image card uses desktop `fill` in both the existing homepage and reusable section preset; the second card stays desktop 4:5. Both mobile cards remain 4:5. Global product-card ratio and Collection list already select portrait 4:5. Blog remains 4:3, Gallery and Shop the look large image remain 1:1, and Zoom foreground remains 6:7. Slideshow uses existing viewport height controls rather than a crop-ratio selector.
- Scope: `theme/essen-theme`; preserve pre-existing Carousel 2 items, product-media controls and blog max-posts changes. No commit/push included.
- Validation: 26 media selectors expose both requested ratios without duplicate values; 229 Liquid schemas and edited JSON validate. 54 actual Liquid render checks pass for desktop/mobile 4:5, 5:4 and existing square values; 27 focused overlay/banner tests pass. Theme Check passes with zero errors and 35 existing warnings; diff whitespace check passes.
- Existing `theme-settings` Footer social-link test also fails on a HEAD-only fixture and is unrelated to ratio changes. Whole-branch custom check currently reports concurrent, non-ratio edits without records: `assets/carousel-block.js`, `assets/slideshow.js`, `blocks/blog-list.liquid`, `blocks/collection-list-items.liquid`, `blocks/collection-tab.liquid`, `blocks/product-list.liquid`, `sections/hotspot-full-width-carousel.liquid`, `snippets/product-collection-grid.liquid`, `snippets/swiper-carousel.liquid`. All implementation paths changed for ratio support are recorded above. Live Theme Editor lifecycle was not exercised in this local schema/preset change.

| `assets/cart-drawer-recommendations.js` | Shared gallery/carousel resource loading. | Import only required Swiper modules directly, avoiding the eager all-module barrel graph. | Reduce mobile startup requests and oversized images. | Preserve gallery/navigation/editor behavior and verify upstream module exports and image loading contracts. |
| `assets/collection-thumbnails.js` | Shared gallery/carousel resource loading. | Import only required Swiper modules directly, avoiding the eager all-module barrel graph. | Reduce mobile startup requests and oversized images. | Preserve gallery/navigation/editor behavior and verify upstream module exports and image loading contracts. |
| `assets/product-collection-carousel.js` | Shared gallery/carousel resource loading. | Import only required Swiper modules directly, avoiding the eager all-module barrel graph.  Only single-column mobile carousels inside Blog posts use Swiper autoHeight. Preserve full article titles, clear wrapper height when returning to desktop, and retain existing init/destroy/editor lifecycle and other carousels.| Reduce mobile startup requests and oversized images. | Preserve gallery/navigation/editor behavior and verify upstream module exports and image loading contracts.  Preserve this Essen customization and review upstream overlaps.|
| `assets/timeline-list.js` | Shared gallery/carousel resource loading. | Import only required Swiper modules directly, avoiding the eager all-module barrel graph. | Reduce mobile startup requests and oversized images. | Preserve gallery/navigation/editor behavior and verify upstream module exports and image loading contracts. |
| `snippets/product-media.liquid` | Shared gallery/carousel resource loading. | Use automatic rendered-width sizes only for lazy images, with the existing breakpoint fallback and a 320px candidate; preserve eager priority. | Reduce mobile startup requests and oversized images. | Preserve gallery/navigation/editor behavior and verify upstream module exports and image loading contracts. |

| `snippets/media-background.liquid` | Responsive artwork starts with a large candidate. | Add 240px and 320px image candidates for small mobile cards. | Reduce oversized downloads while preserving desktop sources. | Preserve ratios, art direction, alt text and editor settings. |
| `assets/cart-drawer.css` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `b89b6aeb` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `assets/section-collection.css` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `b89b6aeb` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `blocks/tabs-view-all-button.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `b89b6aeb` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `blocks/view-all-button.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `b89b6aeb` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `sections/blog-posts.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `b89b6aeb` and its existing DOM, geometry, configured content and legacy setting consumers.  Essen mobile uses natural article height, 26px outlined tags and compact All Stories text action (19.5px leading plus 2px underline spacing); remove inline baseline strut from the action slot. Desktop geometry and existing resources/slots are retained.| Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout.  Preserve this Essen customization and review upstream overlaps.|
| `sections/featured-blog-posts.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `b89b6aeb` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `sections/featured-collection.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `b89b6aeb` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `sections/scrolling-text-star-separator.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `b89b6aeb` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |

| `blocks/blog-card-title.liquid` | Personal main implementation. | Mobile zero top padding inherits the configured desktop zero instead of falling back to 8px. | Match Essen Figma Blog mobile 46240:8851 and product-card typography. | Preserve Essen custom behavior; review upstream overlaps and responsive/editor lifecycle before merging. |
| `blocks/blog-card-meta.liquid` | Personal main implementation. | Emit bottom padding whenever it differs from the CSS default 4px, including explicit zero; preserve mobile override mapping. | Match Essen Figma Blog mobile 46240:8851 and product-card typography. | Preserve Essen custom behavior; review upstream overlaps and responsive/editor lifecycle before merging. |


| `blocks/_bundle-summary.liquid` | Personal main includes component CSS in the compiled stylesheet. | Load unchanged CSS from assets/component-bundle-summary.css only when this component renders, instead of including it in the global compiled stylesheet. | Reduce homepage render-blocking CSS without changing component markup/settings. | Keep synchronous owner loading for editor, Section Rendering API and storefront; review dependent selectors together. |
| `assets/component-bundle-summary.css` | CSS previously owned by `blocks/_bundle-summary.liquid` stylesheet block. | Preserve the existing declarations in an explicitly loaded component asset. | Avoid downloading unused CSS on pages where the component is absent. | Keep asset and owner reference together; preserve source order and existing responsive behavior. |
| `blocks/comparison-table.liquid` | Personal main includes component CSS in the compiled stylesheet. | Load unchanged CSS from assets/component-comparison-table.css only when this component renders, instead of including it in the global compiled stylesheet. | Reduce homepage render-blocking CSS without changing component markup/settings. | Keep synchronous owner loading for editor, Section Rendering API and storefront; review dependent selectors together. |
| `assets/component-comparison-table.css` | CSS previously owned by `blocks/comparison-table.liquid` stylesheet block. | Preserve the existing declarations in an explicitly loaded component asset. | Avoid downloading unused CSS on pages where the component is absent. | Keep asset and owner reference together; preserve source order and existing responsive behavior. |
| `blocks/timeline-list.liquid` | Personal main includes component CSS in the compiled stylesheet. | Load unchanged CSS from assets/component-timeline-list.css only when this component renders, instead of including it in the global compiled stylesheet. | Reduce homepage render-blocking CSS without changing component markup/settings. | Keep synchronous owner loading for editor, Section Rendering API and storefront; review dependent selectors together. |
| `assets/component-timeline-list.css` | CSS previously owned by `blocks/timeline-list.liquid` stylesheet block. | Preserve the existing declarations in an explicitly loaded component asset. | Avoid downloading unused CSS on pages where the component is absent. | Keep asset and owner reference together; preserve source order and existing responsive behavior. |
| `snippets/product-callout-runtime.liquid` | Personal main includes component CSS in the compiled stylesheet. | Load unchanged CSS from assets/component-product-callout.css only when this component renders, instead of including it in the global compiled stylesheet. | Reduce homepage render-blocking CSS without changing component markup/settings. | Keep synchronous owner loading for editor, Section Rendering API and storefront; review dependent selectors together. |
| `assets/component-product-callout.css` | CSS previously owned by `snippets/product-callout-runtime.liquid` stylesheet block. | Preserve the existing declarations in an explicitly loaded component asset. | Avoid downloading unused CSS on pages where the component is absent. | Keep asset and owner reference together; preserve source order and existing responsive behavior. |
| `snippets/product-callout-hotspot.liquid` | Standard hotspot icons and desktop popover. | Render Figma Dot SVG and localized sheet close label. | Support custom Dot and accessible mobile modal. | Keep markup hooks aligned with product-callout-runtime.liquid. |
| `snippets/hotspot-tooltip-pointer.liquid` | No dedicated Figma pointer. | Original Figma polygon SVG for the desktop product tooltip. | Match requested reference. | Retain with scoped tooltip styling and runtime anchor positioning. |
| `snippets/hotspot-dot.liquid` | No dedicated Figma Dot snippet. | Original Figma 28px white ring SVG for Arche Product callout Dot. | Match owner-requested design. | Keep scoped visibility with component-product-callout.css; preserve SVG dimensions. |
| `sections/hotspot.liquid` | Standard Product callout composition. | Own Arche custom Dot/mobile-sheet composition and referenced dependencies. | Preserve owner-requested custom hotspot behavior. Height-option calibration itself remains configuration, not custom. | Keep dependency ownership and separate calibration audit when reviewing base updates. |
| `snippets/image-comparison.liquid` | Personal main includes component CSS in the compiled stylesheet. | Load unchanged CSS from assets/component-image-comparison.css only when this component renders, instead of including it in the global compiled stylesheet. | Reduce homepage render-blocking CSS without changing component markup/settings. | Keep synchronous owner loading for editor, Section Rendering API and storefront; review dependent selectors together. |
| `assets/component-image-comparison.css` | CSS previously owned by `snippets/image-comparison.liquid` stylesheet block. | Preserve the existing declarations in an explicitly loaded component asset. | Avoid downloading unused CSS on pages where the component is absent. | Keep asset and owner reference together; preserve source order and existing responsive behavior. |
| `sections/featured-collection-banner.liquid` | Personal main includes component CSS in the compiled stylesheet. | Load unchanged CSS from assets/section-featured-collection-banner.css only when this component renders, instead of including it in the global compiled stylesheet. | Reduce homepage render-blocking CSS without changing component markup/settings. | Keep synchronous owner loading for editor, Section Rendering API and storefront; review dependent selectors together. |
| `assets/section-featured-collection-banner.css` | CSS previously owned by `sections/featured-collection-banner.liquid` stylesheet block. | Preserve the existing declarations in an explicitly loaded component asset. | Avoid downloading unused CSS on pages where the component is absent. | Keep asset and owner reference together; preserve source order and existing responsive behavior. |
| `sections/hotspot-full-width-carousel.liquid` | Personal main includes component CSS in the compiled stylesheet. | Load unchanged CSS from assets/section-hotspot-full-width-carousel.css only when this component renders, instead of including it in the global compiled stylesheet. | Reduce homepage render-blocking CSS without changing component markup/settings. | Keep synchronous owner loading for editor, Section Rendering API and storefront; review dependent selectors together. |
| `assets/section-hotspot-full-width-carousel.css` | CSS previously owned by `sections/hotspot-full-width-carousel.liquid` stylesheet block. | Preserve the existing declarations in an explicitly loaded component asset. | Avoid downloading unused CSS on pages where the component is absent. | Keep asset and owner reference together; preserve source order and existing responsive behavior. |
| `blocks/_marquee-countdown-timer.liquid` | Personal main includes component CSS in the compiled stylesheet. | Load unchanged CSS from assets/component-marquee-countdown-timer.css only when this component renders, instead of including it in the global compiled stylesheet. | Reduce homepage render-blocking CSS without changing component markup/settings. | Keep synchronous owner loading for editor, Section Rendering API and storefront; review dependent selectors together. |
| `assets/component-marquee-countdown-timer.css` | CSS previously owned by `blocks/_marquee-countdown-timer.liquid` stylesheet block. | Preserve the existing declarations in an explicitly loaded component asset. | Avoid downloading unused CSS on pages where the component is absent. | Keep asset and owner reference together; preserve source order and existing responsive behavior. |
| `assets/component-collection-card.css` | Personal main `fafdc8de`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |
| `assets/section-parallax.css` | Personal main `fafdc8de`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |
| `blocks/_header-menu-toggle.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |
| `blocks/_mega-menu-banner.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |
| `blocks/collection-background-item.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |
| `blocks/collection-promo.liquid` | Main Collection promo including overlay-style controls. | No retained legacy implementation; preserve saved promotion media/content and layout. | Owner explicitly authorized migration. | Keep saved references and compatible layout; new controls use main defaults. |
| `blocks/gallery-image.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |
| `blocks/group.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |
| `blocks/parallax-item.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |
| `blocks/product-buy-quantity.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |
| `blocks/product-callout.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |
| `blocks/product-inventory.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |
| `blocks/promo-card.liquid` | Main Promo card including overlay-style controls. | No retained legacy implementation; rebuild uses main and preserves template/preset content and layout values. | Owner explicitly authorized migration. | New controls use main defaults; keep merchant resources, alignment, position and spacing. |
| `blocks/scrolling-card.liquid` | Personal main `fafdc8de`. | Color Type supports Inherit with a transparent surface, or an explicit scheme; sticky top consumes the measured viewport center. | Reuse the existing Card block with inherited colors and centered sticky placement. | Preserve scheme override and centered positioning; Stack transition is owned by the existing Scrolling cards section, not Card. |
| `snippets/media-card.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |
| `snippets/product-inventory-status.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |
| `blocks/columns.liquid` | Main Columns owns desktop/mobile counts, gaps and mobile Swiper. | Keep resolved count and gap metadata; tablet follows desktop after the owner-approved breakpoint removal. | Preserve Arche metadata consumers. | Reapply metadata without retired breakpoint settings; main Swiper owns lifecycle. |
| `sections/hotspot-gallery.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `assets/carousel-runtime.js` | Main shared lifecycle owns initialization, controls, loop clones, autoplay and editor cleanup. | Optional owner layout policy restores independently configured mobile preview and contained preview; rounded manual progress for Arche/Essen. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Use policy only for common Carousel; other owners use main defaults. Preserve cleanup and main single-clock behavior. |
| `blocks/_columns-column.liquid` | Personal main `c07753a2`. | Theme border-color setting and data-column-border mapping, including existing column presets. | Existing customization audit coverage. | Preserve existing theme implementation and composition outside the approved shared icon/underline fixes. |

## Base update decisions

| Base commit | Files reviewed | Decision and reason | Approved by/date |
| --- | --- | --- | --- |
| `d887dac2d2f637e2aae15f59272634f8fd3d1e32` | `blocks/collection-card.liquid`, `sections/cart.liquid`, `sections/collections.liquid`, `blocks/product-variant-picker.liquid`, `templates/cart.json`, `templates/list-collections.json` | Dùng implementation collection-card/cart/collections từ main; giữ 5:4 của Assen trong renderer dùng chung; nhập composition defaults đã duyệt; xóa `color_option_display`, `grid_item_width`, `grid_gap` cùng giá trị đã lưu trong preset/template theo xác nhận riêng. Sau đồng bộ, bỏ header `Swatches` mồ côi và khớp options `swatch_style` với main theo yêu cầu bổ sung. | Theme owner, 2026-10-06 |

## Base sync history

### 2026-10-16 — Update from personal main

- Previous main commit: `b7ffd45f46adb47ca54be8cf841f82a84fc97348`
- Updated through main commit: `de84ae60437b6369b61addd025dd75d1434706be`
- Main commits included: 1
- Included main commits:
  - `de84ae60437b6369b61addd025dd75d1434706be` — chore(base): update base with 1 upstream commits through f3555270
- Change summary:

```text
assets/critical.css        | 19 +++++++++++++++++++
 blocks/_header-menu.liquid |  7 +++----
 sections/footer.liquid     |  4 ++++
 3 files changed, 26 insertions(+), 4 deletions(-)
```


### 2026-10-16 — Update from personal main

- Previous main commit: `13865852ee204a3ccae27a2f50d5ea107a3bf180`
- Updated through main commit: `793e6ecfbf7bce955fe5822518e863e4e2ac5fc5`
- Main commits included: 1
- Included main commits:
  - `793e6ecfbf7bce955fe5822518e863e4e2ac5fc5` — chore(base): update base with 1 upstream commits through 1c3db7a1
- Change summary:

```text
No file changes.
```


### 2026-10-16 — Update from personal main

- Previous main commit: `2593c6f2f1c69fdab3d90e2468446b55e8550055`
- Updated through main commit: `13865852ee204a3ccae27a2f50d5ea107a3bf180`
- Main commits included: 1
- Included main commits:
  - `13865852ee204a3ccae27a2f50d5ea107a3bf180` — chore(base): update base with 1 upstream commits through bf4b69b5
- Change summary:

```text
No file changes.
```


### 2026-10-16 — Update from personal main

- Previous main commit: `2cf6e5ab70eaffa97d43ce8f6f9fb658034713bf`
- Updated through main commit: `2593c6f2f1c69fdab3d90e2468446b55e8550055`
- Main commits included: 1
- Included main commits:
  - `2593c6f2f1c69fdab3d90e2468446b55e8550055` — chore(base): update base with 1 upstream commits through fea78bca
- Change summary:

```text
sections/countdown.liquid | 68 ++++++++++++++++++++++++++++++++++++++++++++++-
 1 file changed, 67 insertions(+), 1 deletion(-)
```


### 2026-10-16 — Update from personal main

- Previous main commit: `c07753a29c860f64e60567a2fc0d58deb3429c3b`
- Updated through main commit: `2cf6e5ab70eaffa97d43ce8f6f9fb658034713bf`
- Main commits included: 1
- Included main commits:
  - `2cf6e5ab70eaffa97d43ce8f6f9fb658034713bf` — chore(base): update base with 1 upstream commits through 2a9a0caf
- Change summary:

```text
blocks/location-item.liquid             | 12 ++---
 sections/collection-list.liquid         |  4 +-
 sections/countdown.liquid               | 78 +++++++++++++++++++++++++++------
 sections/image-comparison-custom.liquid |  5 ++-
 4 files changed, 73 insertions(+), 26 deletions(-)
```


### 2026-10-10 — Update from personal main

- Previous main commit: `729be6cfc3a31211b3107df8b9a6206860e406c9`
- Updated through main commit: `fafdc8de4c9c60757949e90f6c50320b1bf361bf`
- Main commits included: 2
- Included main commits:
  - `b996ced23c9679b33c545e237347445071348461` — fix(sync): preserve custom theme compositions and source option order
  - `fafdc8de4c9c60757949e90f6c50320b1bf361bf` — chore(base): update base with 19 upstream commits through 46304245
- Change summary:

```text
assets/component-blocks-image-card.css         | 261 +++++++++++++
 assets/component-sections-promo-grid.css       |  46 +++
 assets/critical.css                            |  46 ++-
 assets/header.js                               |   3 +-
 assets/promo-grid.js                           |  12 +
 blocks/faq_answer_text.liquid                  |   6 +-
 blocks/location-item.liquid                    |  15 +-
 blocks/marquee-item.liquid                     |  45 ++-
 blocks/promo-card-custom.liquid                | 486 +++++++++++++++++++++++
 docs/theme-customization-policy.md             |  10 +
 locales/en.default.json                        |   7 +-
 scripts/theme-base-sync.cjs                    | 109 +++++-
 sections/bundle-builder.liquid                 |  10 +-
 sections/collection-banner.liquid              |  34 +-
 sections/collection-page-links.liquid          |  76 +++-
 sections/collections-with-tabs.liquid          |   7 +-
 sections/comparison-table-custom.liquid        |  18 +-
 sections/contact-form-custom.liquid            |  44 ++-
 sections/email-signup-dual-image.liquid        |  10 +-
 sections/email-signup-form.liquid              |  10 +-
 sections/email-signup-single-image.liquid      |  10 +-
 sections/faq-image-accordion.liquid            |  36 +-
 sections/gallery-full-width-strip.liquid       |   8 +-
 sections/gallery-image-grid.liquid             |  13 +-
 sections/image-comparison-custom.liquid        |   6 +-
 sections/image-comparison-split-custom.liquid  |  30 +-
 sections/image-text-card-grid.liquid           |  10 +-
 sections/image-text-split-layout.liquid        |  18 +-
 sections/location-list.liquid                  |  59 +--
 sections/location-map.liquid                   |  60 +--
 sections/promo-grid-custom.liquid              | 519 +++++++++++++++++++++++++
 sections/scroll-reading-text.liquid            |  46 ++-
 sections/testimonial-carousel.liquid           |  54 +--
 sections/testimonials-background-custom.liquid |  74 ++--
 sections/testimonials-horizontal-custom.liquid |  40 +-
 sections/timeline.liquid                       |  80 ++--
 snippets/image-card-content.liquid             | 259 ++++++++++++
 snippets/overlay-background.liquid             |  30 ++
 templates/collection.json                      |  28 +-
 templates/index.spinel-sync.json               |   6 +-
 templates/page.contact.json                    |   5 +-
 tests/image-height.test.cjs                    |  28 ++
 tests/product-media-variant.test.cjs           |  83 ++++
 43 files changed, 2340 insertions(+), 417 deletions(-)
```


### 2026-10-09 — Update from personal main

- Previous main commit: `8f3ac3c9345da36c73b2e1fea3ed4e6303e47d0d`
- Updated through main commit: `729be6cfc3a31211b3107df8b9a6206860e406c9`
- Main commits included: 1
- Included main commits:
  - `729be6cfc3a31211b3107df8b9a6206860e406c9` — chore(base): update base with 23 upstream commits through 0cf058f7
- Change summary:

```text
assets/block-animations.js                     | 169 +++++
 assets/product-list-promos.js                  |  89 +++
 blocks/_marquee-button.liquid                  | 162 ++++
 blocks/_marquee-countdown-timer.liquid         | 990 +++++++++++++++++++++++++
 blocks/_marquee-coupon-code.liquid             | 134 ++++
 blocks/_marquee-divider.liquid                 | 149 ++++
 blocks/_marquee-group.liquid                   | 307 ++++++++
 blocks/_marquee-heading.liquid                 | 231 ++++++
 blocks/_marquee-icon.liquid                    | 477 ++++++++++++
 blocks/_marquee-image.liquid                   | 171 +++++
 blocks/_marquee-text.liquid                    | 140 ++++
 blocks/faq_accordion.liquid                    | 427 ++++++++---
 blocks/faq_item.liquid                         |   3 +
 blocks/marquee.liquid                          | 139 +++-
 blocks/product-card-compact.liquid             | 538 ++++++++++++++
 blocks/product-list.liquid                     |  62 +-
 blocks/promo-card.liquid                       | 455 ++++++++++++
 blocks/tabs-view-all-button.liquid             |  12 +-
 blocks/view-all-button.liquid                  |   9 +-
 docs/content-creation-workflow.md              | 197 +++++
 docs/elara-blocks-build-plan.md                |  44 ++
 docs/phase-2-theme-settings.md                 |   4 +
 docs/product-card-compact-build-plan.md        |  31 +
 docs/promo-card.md                             |  20 +
 locales/en.default.json                        |   4 +
 locales/en.default.schema.json                 |   3 +-
 sections/blog-posts.liquid                     |   3 +-
 sections/collection-list.liquid                |   3 +-
 sections/collection-tabs.liquid                |   3 +-
 sections/faq-accordion.liquid                  |  12 +-
 sections/faq-image-accordion.liquid            |  62 +-
 sections/featured-blog-posts.liquid            |   3 +-
 sections/featured-collection.liquid            |   3 +-
 sections/gallery-custom.liquid                 |  11 +-
 sections/image-text-card-grid.liquid           |   3 +-
 sections/scrolling-text-star-separator.liquid  |  11 +-
 sections/testimonial-carousel.liquid           |   3 +-
 sections/testimonials-background-custom.liquid |   3 +-
 sections/testimonials-horizontal-custom.liquid |   3 +-
 sections/text-marquee-custom.liquid            | 117 +--
 snippets/comparison-table-column-shell.liquid  |   6 +
 snippets/font-faces.liquid                     |  30 +
 snippets/localization-styles.liquid            | 251 +++++++
 snippets/marquee-letter-spacing.liquid         |  23 +
 snippets/product-list-promo-items.liquid       |  24 +
 snippets/product-list-promo-styles.liquid      |   7 +
 templates/collection.json                      |   3 +-
 templates/index.json                           |  34 +-
 templates/index.spinel-sync.json               |   9 +-
 templates/page.about-us.json                   |  14 +-
 templates/page.faqs.json                       |  60 +-
 51 files changed, 5414 insertions(+), 254 deletions(-)
```


### 2026-10-07 — Update from personal main

- Previous main commit: `d887dac2d2f637e2aae15f59272634f8fd3d1e32`
- Updated through main commit: `8f3ac3c9345da36c73b2e1fea3ed4e6303e47d0d`
- Main commits included: 2
- Included main commits:
  - `36b9ab04bcbb59ea3073666812dcfa5244f4c15c` — chore(base): update base with 112 upstream commits through bedb4bd5
  - `8f3ac3c9345da36c73b2e1fea3ed4e6303e47d0d` — fix(sync): preserve presets for used and custom theme sections
- Change summary:

```text
assets/carousel-block.js                           |  11 +-
 assets/cart-drawer.js                              | 155 +++-
 assets/component-overlay.css                       |  80 +-
 assets/component-search-suggestions.css            |  35 +
 assets/critical.css                                | 233 +++++-
 assets/header.js                                   |  11 +-
 assets/password-page.js                            |  27 +
 assets/product-buy-buttons.js                      |  29 +
 assets/product-card-variants.js                    |   8 +
 assets/product-media.js                            |  10 +-
 assets/quick-add.js                                |   8 +-
 assets/quick-view.js                               |   8 +-
 assets/recently-viewed.js                          |  54 ++
 assets/search-page.js                              |  56 ++
 assets/search-suggestions.js                       |  96 +++
 assets/variant-picker.js                           |  18 +-
 blocks/_collection-count.liquid                    |   4 +-
 blocks/_collection-filter.liquid                   |  36 +-
 blocks/_collection-sort.liquid                     |  28 +-
 blocks/_collection-toolbar.liquid                  |   9 +-
 blocks/_search-input.liquid                        | 262 ++++++
 blocks/_search-products.liquid                     | 148 ++++
 blocks/_search-results.liquid                      | 155 ++++
 blocks/banner.liquid                               |  10 +-
 blocks/blog-grid.liquid                            |  51 +-
 blocks/blog-list.liquid                            |   6 +-
 blocks/carousel.liquid                             |  29 +-
 blocks/collection-list-items.liquid                |   8 +-
 blocks/collection-thumbnail.liquid                 |  12 +-
 blocks/collections-with-tabs-item.liquid           |   4 +-
 blocks/comparison-table.liquid                     |   2 +-
 blocks/contact-field.liquid                        |   7 +-
 blocks/contact-form.liquid                         |  43 +-
 blocks/eyebrow.liquid                              |   3 +
 blocks/faq_category.liquid                         |   6 +-
 blocks/faq_item.liquid                             |  30 +-
 blocks/gallery-strip-overlay-group.liquid          |   2 +-
 blocks/header.liquid                               |   6 +-
 blocks/heading.liquid                              |  24 +-
 blocks/location-item.liquid                        |   2 +-
 blocks/marquee.liquid                              |   4 +-
 blocks/previous-and-next-posts.liquid              |   2 +-
 blocks/product-buy-buttons.liquid                  |   3 +
 blocks/product-list.liquid                         |   6 +-
 blocks/slideshow-slide.liquid                      |  33 +-
 blocks/text.liquid                                 |   5 +-
 blocks/timeline-list.liquid                        |  10 +-
 blocks/timeline-slide.liquid                       |   2 +-
 docs/audits/404-reference-2026-10-06.md            |  48 ++
 docs/audits/about-us-reference-2026-10-06.md       |  50 ++
 docs/audits/contact-reference-2026-10-06.md        |  48 ++
 docs/audits/faq-reference-2026-10-06.md            |  73 ++
 docs/audits/marquee-parallax-2026-10-06.md         |  13 +
 docs/audits/outbound-base-sync-2026-10-06.md       |   8 +
 docs/audits/pages-outbound-base-sync-2026-10-06.md |  36 +
 docs/audits/quick-add-media-zoom-2026-10-06.md     |  42 +
 .../audits/search-outbound-base-sync-2026-10-06.md |  25 +
 docs/audits/search-reference-2026-10-06.md         | 105 +++
 docs/qa/performance-regressions-2026-10-06.md      |  17 +
 docs/theme-customization-policy.md                 |   5 +-
 layout/password.liquid                             |   8 +-
 layout/theme.liquid                                |  23 +-
 locales/en.default.json                            |  18 +-
 locales/en.default.schema.json                     |  42 +-
 scripts/theme-base-sync.cjs                        | 151 +++-
 sections/404.liquid                                | 212 ++++-
 sections/announcement-bar.liquid                   |  33 +-
 sections/blog-posts.liquid                         | 199 +----
 sections/bundle-builder.liquid                     |  12 +-
 sections/cart-drawer.liquid                        |  13 +-
 sections/collection-list-thumbnails.liquid         |  20 +-
 sections/collection-list.liquid                    | 176 +---
 sections/collection-tabs.liquid                    |  18 +-
 sections/collections-with-tabs.liquid              |  19 +-
 sections/collections.liquid                        |   2 +-
 sections/comparison-table-custom.liquid            |   2 +-
 sections/contact-form-custom.liquid                |   4 +-
 sections/email-signup-dual-image.liquid            |   6 +-
 sections/email-signup-form.liquid                  |   8 +-
 sections/email-signup-single-image.liquid          |   6 +-
 sections/faq-image-accordion.liquid                |   6 +-
 sections/featured-blog-posts.liquid                | 142 +---
 sections/featured-collection-banner.liquid         |   8 +-
 sections/featured-collection.liquid                | 247 +-----
 sections/gallery-carousel.liquid                   |   3 +-
 sections/gallery-custom.liquid                     |   3 +-
 sections/gallery-full-width-strip.liquid           |   2 +-
 sections/header.liquid                             |  18 +-
 sections/hotspot-full-width-carousel.liquid        |   4 +-
 sections/hotspot-gallery.liquid                    |  14 +-
 sections/hotspot.liquid                            |   9 +-
 sections/icon-text-cards.liquid                    |   3 +-
 sections/icon-text-inline.liquid                   |   3 +-
 sections/image-comparison-custom.liquid            |   2 +-
 sections/image-comparison-split-custom.liquid      |   6 +-
 sections/image-text-card-grid.liquid               |  23 +-
 sections/image-text-split-layout.liquid            |   6 +-
 sections/location-list.liquid                      |  26 +-
 sections/location-map.liquid                       |  26 +-
 sections/parallax.liquid                           |   2 +-
 sections/password.liquid                           | 222 ++++-
 sections/quick-add.liquid                          |  11 +-
 sections/quick-view.liquid                         |  11 +-
 sections/recently-viewed-card.liquid               |  42 +
 sections/related-posts.liquid                      |   8 +-
 sections/rich-text.liquid                          |   6 +-
 sections/scrolling-cards.liquid                    |  12 +-
 sections/scrolling-text-star-separator.liquid      |  40 +-
 sections/search-overlay.liquid                     |  44 +-
 sections/search.liquid                             | 549 ++-----------
 sections/shop-the-look-section.liquid              |   2 +-
 sections/testimonial-carousel.liquid               |  15 +-
 sections/testimonials-background-custom.liquid     |   9 +-
 sections/testimonials-horizontal-custom.liquid     |  11 +-
 sections/text-marquee-custom.liquid                | 322 +++++---
 sections/timeline.liquid                           |  28 +-
 snippets/css-variables.liquid                      |  25 +-
 snippets/deferred-stylesheet.liquid                |  11 +
 snippets/form-field.liquid                         |   2 +-
 snippets/heading-size-token.liquid                 |  18 +-
 snippets/product-card-quick-add.liquid             |  12 +-
 snippets/product-card-swatches.liquid              |   3 +
 snippets/product-card.liquid                       |   3 +
 snippets/search-filters.liquid                     | 101 +++
 snippets/search-query-fields.liquid                |   8 +
 snippets/section-content-slot.liquid               |  13 +
 snippets/slideshow-image.liquid                    | 121 +++
 snippets/variant-picker.liquid                     |  12 +
 templates/404.json                                 |  12 +-
 templates/index.json                               |   9 +-
 templates/index.spinel-sync.json                   |  12 +-
 templates/page.about-us.json                       | 891 +++++++++++++++++++++
 templates/page.contact.json                        |   4 +-
 templates/page.faqs.json                           | 633 +++++++++++++++
 templates/password.json                            |  10 +-
 templates/product.json                             | 330 +++++++-
 templates/search.json                              |   9 +-
 tests/cart-drawer-add.test.cjs                     |  53 +-
 tests/faq-item.test.cjs                            |  35 +
 tests/heading-size-sync.test.cjs                   |  42 +
 tests/overlay-product-modules.test.cjs             |  26 +
 tests/product-media-pointer.test.cjs               |  44 +
 tests/recently-viewed.test.cjs                     |  56 ++
 tests/search-history.test.cjs                      |  35 +
 tests/search-page.test.cjs                         |  84 ++
 tests/search-suggestions.test.cjs                  |  52 ++
 tests/section-content.test.cjs                     | 111 +++
 tests/slideshow-image.test.cjs                     |  66 ++
 tests/theme-base-sync.test.cjs                     |  81 ++
 149 files changed, 6181 insertions(+), 1861 deletions(-)
```


### 2026-10-06 — Update from personal main

- Previous main commit: `89321f5ebbd78e1144eae1a31adbef4679bd9cd3`
- Updated through main commit: `d887dac2d2f637e2aae15f59272634f8fd3d1e32`
- Main commits included: 1
- Included main commits:
  - `d887dac2d2f637e2aae15f59272634f8fd3d1e32` — chore(base): update base with 34 upstream commits through 8169f12c
- Change summary:

```text
assets/accordion-details.js                        |  23 +-
 assets/cart-drawer.js                              |  21 +-
 assets/cart-page.css                               |  15 +
 assets/cart-page.js                                | 155 ++++++++++
 assets/cart-recommendations.js                     |  67 +++++
 assets/component-collection-card.css               |  88 ++++++
 assets/critical.css                                |   8 +
 assets/gift-card.css                               |  29 ++
 assets/gift-card.js                                |  57 ++++
 blocks/_bundle-product-list.liquid                 |  34 +--
 blocks/_cart-content.liquid                        | 139 +++++++++
 blocks/_cart-order-summary.liquid                  | 195 +++++++++++++
 blocks/_cart-summary.liquid                        |  49 ++++
 blocks/_collections-list.liquid                    | 202 +++++++++++++
 blocks/_collections-page-card.liquid               | 315 +++++++++++++++++++++
 blocks/cart-free-shipping.liquid                   | 169 +++++++++++
 blocks/cart-items.liquid                           | 170 +++++++++++
 blocks/cart-order-note.liquid                      | 214 ++++++++++++++
 blocks/cart-shipping-estimator.liquid              | 214 ++++++++++++++
 blocks/collection-card.liquid                      | 262 ++---------------
 blocks/pagination.liquid                           |  21 +-
 blocks/product-list.liquid                         |  56 +++-
 blocks/product-variant-picker.liquid               |  23 --
 docs/audits/cart-reference-2026-10-05.md           | 102 +++++++
 .../audits/collection-list-reference-2026-10-05.md |  45 +++
 docs/audits/gift-card-reference-2026-10-05.md      |  35 +++
 docs/phase-2-theme-settings.md                     |   9 +-
 locales/en.default.json                            |  20 +-
 locales/en.default.schema.json                     |   4 +-
 sections/cart-recommendations.liquid               | 266 +++++++++++++++++
 sections/cart.liquid                               | 197 ++++++++-----
 sections/collections.liquid                        | 234 ++++++++++-----
 sections/featured-product.liquid                   |   3 +-
 snippets/cart-surface-style.liquid                 |   6 +
 snippets/collection-card-render.liquid             | 166 +++++++++++
 snippets/css-variables.liquid                      |   3 +
 snippets/icon.liquid                               |   6 +-
 snippets/pagination-pages.liquid                   |   3 +
 snippets/product-collection-grid.liquid            |   5 +-
 snippets/swatch.liquid                             |   2 -
 snippets/variant-picker.liquid                     |   3 +-
 templates/cart.json                                | 110 ++++++-
 templates/gift_card.liquid                         | 104 +++----
 templates/index.json                               |   1 -
 templates/index.spinel-sync.json                   |   1 -
 templates/list-collections.json                    |  71 ++++-
 tests/accordion-details.test.cjs                   |  74 +++++
 tests/cart-page.test.cjs                           |  86 ++++++
 tests/cart-recommendations.test.cjs                |  32 +++
 tests/cart-shadow.test.cjs                         |  17 ++
 tests/collections-page.test.cjs                    |  75 +++++
 tests/gift-card.test.cjs                           |  21 ++
 tests/product-controls.test.cjs                    |  18 +-
 53 files changed, 3696 insertions(+), 549 deletions(-)
```


### 2026-10-05 — Update from personal main

- Previous main commit: `020c10f081adeda038ec99ef7b307ffc7d46ab07`
- Updated through main commit: `89321f5ebbd78e1144eae1a31adbef4679bd9cd3`
- Main commits included: 3
- Included main commits:
  - `1edc4f43ef37eb328c8f58e005d34a24295695e3` — chore(base): update base with 32 upstream commits through 6eacf7b7
  - `d426df565afbdec2a15c5305f0bcecac6b8a7b88` — fix(sync): preserve blank optional setting defaults
  - `89321f5ebbd78e1144eae1a31adbef4679bd9cd3` — fix(sync): allow option label changes without blocking updates
- Change summary:

```text
assets/cart-drawer.css                             |   1 +
 assets/collections-with-tabs.js                    |  16 +
 assets/component-overlay.css                       |   2 +
 assets/component-pagination.css                    | 161 +++++++++
 assets/critical.css                                | 260 ++++++--------
 assets/product-information.css                     |   8 -
 assets/product-media.css                           |  25 ++
 assets/product-media.js                            |   4 +-
 assets/section-collection.css                      | 152 +-------
 blocks/_collection-pagination.liquid               |  45 +--
 blocks/_header-menu.liquid                         |   6 +
 blocks/_product-media.liquid                       |  33 +-
 blocks/blog-archive-list.liquid                    |  19 +-
 blocks/blog-list.liquid                            |  13 +-
 blocks/blog-meta.liquid                            | 106 +++---
 blocks/blog-tag-filter.liquid                      | 232 +++++++++++++
 blocks/blog-title.liquid                           | 170 +++++++++
 blocks/collections-with-tabs-item.liquid           |   8 +-
 blocks/comments.liquid                             | 130 +++----
 blocks/content.liquid                              |   4 +-
 blocks/featured-image.liquid                       |  35 +-
 blocks/featured-post.liquid                        | 210 ++++++++---
 blocks/image-card.liquid                           |   2 +-
 blocks/pagination.liquid                           |  78 ++++-
 blocks/previous-and-next-posts.liquid              |  94 +++--
 blocks/product-buy-quantity.liquid                 |   8 +-
 blocks/tags-and-sharing.liquid                     |  28 +-
 docs/audits/article-reference-2026-10-05.md        |  26 ++
 docs/audits/blog-reference-2026-10-05.md           |  69 ++++
 .../collections-with-tabs-color-2026-10-05.md      |  33 ++
 docs/theme-customization-policy.md                 |   4 +-
 locales/en.default.json                            |  24 +-
 locales/en.default.schema.json                     |   4 +-
 scripts/theme-base-sync.cjs                        |  34 +-
 sections/article.liquid                            |  88 ++++-
 sections/blog-posts.liquid                         |  18 +
 sections/blog.liquid                               | 216 +++++++-----
 sections/collections-with-tabs.liquid              |  37 +-
 sections/featured-collection.liquid                |  19 +
 sections/related-posts.liquid                      | 386 +++++++++++++++++++++
 snippets/css-variables.liquid                      |   4 +-
 snippets/heading-size-token.liquid                 |  15 +
 snippets/media-card.liquid                         |   3 +-
 snippets/pagination-pages.liquid                   |  45 +++
 snippets/product-card-swatches.liquid              |  24 +-
 snippets/swatch-option.liquid                      |  31 ++
 snippets/swatch.liquid                             |   6 +-
 snippets/variant-picker.liquid                     | 101 +++---
 templates/blog.json                                |  11 +-
 tests/blog-archive.test.cjs                        |  79 +++++
 tests/blog-heading-schema.test.cjs                 |  33 ++
 tests/collections-with-tabs-color.test.cjs         |  75 ++++
 tests/product-controls.test.cjs                    | 102 ++++++
 tests/product-media-pagination.test.cjs            |  79 +++++
 tests/theme-base-sync.test.cjs                     |  80 +++++
 55 files changed, 2705 insertions(+), 791 deletions(-)
```


### 2026-10-05 — Update from personal main

- Previous main commit: `0eee77c2125c6fffe1a1c07566b2b534cad3c5ad`
- Updated through main commit: `020c10f081adeda038ec99ef7b307ffc7d46ab07`
- Main commits included: 1
- Included main commits:
  - `020c10f081adeda038ec99ef7b307ffc7d46ab07` — chore(base): update base with 2 upstream commits through 22b24b6b
- Change summary:

```text
assets/product-media.js              |   4 +-
 blocks/marquee.liquid                | 255 ++++++++++++++++++++++++++---------
 sections/text-marquee-custom.liquid  |  73 +++-------
 tests/product-media-pointer.test.cjs |  85 ++++++++++++
 4 files changed, 295 insertions(+), 122 deletions(-)
```


### 2026-10-05 — Update from personal main

- Previous main commit: `ed7468aa59d460c2d86cee8b7035487d1bb88bf8`
- Updated through main commit: `0eee77c2125c6fffe1a1c07566b2b534cad3c5ad`
- Main commits included: 6
- Included main commits:
  - `912e638889f2623658e6c63b44a83cb8f9ba64c9` — chore(base): update base with 14 upstream commits through 823f0b09
  - `497695b2f50993d3194f9b5f3aff6803ee10276b` — feat(sync): auto-push safe theme updates
  - `8a0e66d3ada9c00b072001e67c1919fd68c5d69b` — fix(sync): use normalized schema base for theme merges
  - `12ad4d12f0221c3e7fb1456e4db68b79b39c93e9` — fix(sync): allow settings without Shopify defaults
  - `733f16ea01962231dcf90add8f90599ee3afa735` — fix(sync): stream large diff patches to disk
  - `0eee77c2125c6fffe1a1c07566b2b534cad3c5ad` — fix(sync): stream full review diffs without buffering
- Change summary:

```text
assets/bundle-builder.js                       |  69 ++-
 assets/button-loading.js                       |  28 +
 assets/component-bouncing-dots.css             |   5 +
 assets/critical.css                            |  51 +-
 assets/editorial-text.js                       |  97 ++++
 assets/quick-add.js                            |  36 +-
 assets/quick-view.js                           |  28 +-
 assets/section-parallax.css                    | 167 ++++++
 assets/section-parallax.js                     | 175 ++++++
 blocks/_bundle-product-list.liquid             | 189 ++++++-
 blocks/_bundle-summary.liquid                  | 511 ++++++++++++++++--
 blocks/_collection-breadcrumb.liquid           |  45 +-
 blocks/_collection-columns.liquid              | 108 +++-
 blocks/_collection-count.liquid                |  10 +-
 blocks/_collection-pagination.liquid           |  35 +-
 blocks/_collection-products.liquid             |  15 +-
 blocks/_collection-sort.liquid                 |  15 +-
 blocks/_collection-toolbar.liquid              | 106 +++-
 blocks/_column.liquid                          |  98 +++-
 blocks/_header-account.liquid                  |  70 ++-
 blocks/_header-cart.liquid                     |  30 +-
 blocks/_header-divider.liquid                  |  10 +-
 blocks/_header-localization.liquid             |  25 +-
 blocks/_header-logo.liquid                     |  10 +-
 blocks/_header-menu.liquid                     | 136 ++++-
 blocks/_header-search.liquid                   |  75 ++-
 blocks/_header-top.liquid                      |  47 +-
 blocks/_mega-menu-banner.liquid                | 476 ++++++++++++++---
 blocks/_mega-menu-banners.liquid               | 226 +++++++-
 blocks/_overlay-product-media.liquid           | 150 ++++--
 blocks/_product-collection-grid.liquid         |   4 +-
 blocks/_product-details.liquid                 | 149 ++++--
 blocks/_product-media.liquid                   |  95 +++-
 blocks/announcement-countdown-timer.liquid     | 276 +++++++++-
 blocks/announcement-text.liquid                |  63 ++-
 blocks/banner.liquid                           |  75 ++-
 blocks/blog-archive-list.liquid                |  32 +-
 blocks/blog-card-button.liquid                 |  25 +-
 blocks/blog-card-description.liquid            |  50 +-
 blocks/blog-card-meta.liquid                   | 175 ++++--
 blocks/blog-card-tag.liquid                    |  85 ++-
 blocks/blog-card-title.liquid                  |  90 +++-
 blocks/blog-card.liquid                        | 142 +++--
 blocks/blog-grid.liquid                        |  53 +-
 blocks/blog-list.liquid                        | 135 ++++-
 blocks/blog-meta.liquid                        | 209 +++++++-
 blocks/button-view-details.liquid              |  10 +-
 blocks/button.liquid                           |  45 +-
 blocks/buttons.liquid                          | 150 ++++--
 blocks/carousel.liquid                         | 253 +++++++--
 blocks/collection-background-item.liquid       |  70 ++-
 blocks/collection-card-button.liquid           |  45 +-
 blocks/collection-card-description.liquid      |  60 ++-
 blocks/collection-card-title.liquid            | 110 +++-
 blocks/collection-card.liquid                  | 301 ++++++++++-
 blocks/collection-list-items.liquid            | 125 ++++-
 blocks/collection-promo.liquid                 | 313 ++++++++---
 blocks/collection-tab.liquid                   |   4 +-
 blocks/collection-thumbnail.liquid             |  61 ++-
 blocks/collections-with-tabs-item.liquid       |  68 ++-
 blocks/comments.liquid                         | 180 ++++++-
 blocks/comparison-table-column.liquid          |  62 ++-
 blocks/contact-field.liquid                    |  30 +-
 blocks/contact-form.liquid                     | 432 +++++++++++----
 blocks/content.liquid                          |  21 +-
 blocks/countdown-timer.liquid                  | 190 +++++--
 blocks/discount-code.liquid                    | 161 +++++-
 blocks/divider.liquid                          |  60 ++-
 blocks/editorial-text.liquid                   | 702 +++++++++++++++++++++----
 blocks/email-signup.liquid                     |  90 +++-
 blocks/eyebrow.liquid                          |  40 +-
 blocks/faq_accordion.liquid                    | 497 ++++++++++++++++-
 blocks/faq_answer_text.liquid                  |   6 +-
 blocks/faq_category.liquid                     | 195 +++++--
 blocks/faq_item.liquid                         | 194 ++++++-
 blocks/featured-image.liquid                   | 136 ++++-
 blocks/featured-post.liquid                    | 310 ++++++++++-
 blocks/first-card.liquid                       | 134 ++++-
 blocks/gallery-grid.liquid                     | 216 +++++++-
 blocks/gallery-header-group.liquid             | 323 +++++++++---
 blocks/gallery-image.liquid                    | 218 +++++++-
 blocks/gallery-item.liquid                     | 113 +++-
 blocks/gallery-strip-feature-item.liquid       |  71 ++-
 blocks/gallery-strip-item.liquid               |  38 +-
 blocks/gallery-strip-overlay-group.liquid      | 101 +++-
 blocks/grid.liquid                             |  94 +++-
 blocks/group.liquid                            | 260 +++++++--
 blocks/header.liquid                           | 124 ++++-
 blocks/heading.liquid                          | 100 +++-
 blocks/icon.liquid                             | 175 ++++--
 blocks/image-card.liquid                       | 268 ++++++++--
 blocks/image-comparison.liquid                 | 190 +++++--
 blocks/image-text-card-grid-item.liquid        |  32 +-
 blocks/image-text-stacked-band.liquid          |  84 ++-
 blocks/image.liquid                            | 125 ++++-
 blocks/localization.liquid                     |  40 +-
 blocks/location-item.liquid                    | 145 ++++-
 blocks/location-list.liquid                    |  61 ++-
 blocks/logo.liquid                             |  20 +-
 blocks/marquee-item.liquid                     |  21 +-
 blocks/marquee.liquid                          |  89 +++-
 blocks/menu.liquid                             | 110 +++-
 blocks/pagination.liquid                       |  99 +++-
 blocks/parallax-item.liquid                    | 451 ++++++++++++++++
 blocks/policy-links.liquid                     |  30 +-
 blocks/popup.liquid                            |  16 +-
 blocks/press-item.liquid                       |  56 +-
 blocks/press-quotes.liquid                     |   6 +-
 blocks/previous-and-next-posts.liquid          | 116 +++-
 blocks/product-accordion.liquid                | 105 +++-
 blocks/product-buy-accelerated-checkout.liquid |  21 +-
 blocks/product-buy-add-to-cart.liquid          |  32 +-
 blocks/product-buy-quantity.liquid             |  85 ++-
 blocks/product-callout-gallery.liquid          | 135 ++++-
 blocks/product-callout.liquid                  | 427 ++++++++++++---
 blocks/product-card.liquid                     |  10 +-
 blocks/product-description.liquid              |  50 +-
 blocks/product-inventory.liquid                |  10 +-
 blocks/product-list-banner.liquid              |  14 +-
 blocks/product-list.liquid                     | 119 ++++-
 blocks/product-pickup-availability.liquid      | 202 +++++--
 blocks/product-price.liquid                    |  70 ++-
 blocks/product-recommendations.liquid          |  30 +-
 blocks/product-sticky-add-to-cart.liquid       |  56 +-
 blocks/product-title.liquid                    |  85 ++-
 blocks/product-variant-picker.liquid           |  30 +-
 blocks/row.liquid                              |  36 +-
 blocks/scroll-to.liquid                        |  25 +-
 blocks/scrolling-card.liquid                   | 163 +++++-
 blocks/shop-the-look-products.liquid           | 106 +++-
 blocks/slideshow-slide.liquid                  | 392 ++++++++++++--
 blocks/social-links.liquid                     |  30 +-
 blocks/spacer.liquid                           |  20 +-
 blocks/tab-layout.liquid                       |  70 ++-
 blocks/tabs-view-all-button.liquid             |  45 +-
 blocks/tags-and-sharing.liquid                 |  72 ++-
 blocks/testimonial-item.liquid                 | 218 ++++++--
 blocks/text.liquid                             |  80 ++-
 blocks/timeline-list.liquid                    |  20 +-
 blocks/video.liquid                            | 135 ++++-
 blocks/view-all-button.liquid                  | 116 +++-
 docs/parallax-section-build-plan.md            |  71 +++
 docs/theme-customization-policy.md             |  10 +
 scripts/theme-base-sync.cjs                    | 522 ++++++++++++++++--
 sections/404.liquid                            |   6 +-
 sections/announcement-bar.liquid               | 376 +++++++++++--
 sections/article.liquid                        | 137 ++++-
 sections/blog-posts.liquid                     |  63 ++-
 sections/blog.liquid                           |  37 +-
 sections/breadcrumbs.liquid                    |  61 ++-
 sections/bundle-builder.liquid                 | 200 ++++++-
 sections/cart-drawer.liquid                    |  34 +-
 sections/cart.liquid                           |   6 +-
 sections/collection-list-thumbnails.liquid     | 552 ++++++++++++++++++-
 sections/collection-list.liquid                | 109 +++-
 sections/collection-page-breadcrumb.liquid     | 202 ++++++-
 sections/collection-page-links.liquid          | 187 ++++++-
 sections/collection-tabs.liquid                | 182 +++++--
 sections/collections-with-background.liquid    | 562 +++++++++++++++++++-
 sections/collections-with-tabs.liquid          | 438 ++++++++++++++-
 sections/collections.liquid                    |  16 +-
 sections/contact-form-custom.liquid            |  49 +-
 sections/contact-information.liquid            | 182 ++++++-
 sections/countdown.liquid                      | 103 +++-
 sections/custom-section.liquid                 |  98 +++-
 sections/divider.liquid                        |  65 ++-
 sections/email-signup-dual-image.liquid        | 374 +++++++++++--
 sections/email-signup-form.liquid              |  54 +-
 sections/email-signup-single-image.liquid      |  74 ++-
 sections/faq-accordion.liquid                  | 347 ++++++++++--
 sections/faq-image-accordion.liquid            | 375 +++++++++++--
 sections/featured-blog-posts.liquid            |  63 ++-
 sections/featured-collection-banner.liquid     |  43 +-
 sections/featured-collection.liquid            |  58 +-
 sections/featured-product.liquid               |  39 +-
 sections/footer.liquid                         |  36 +-
 sections/gallery-carousel.liquid               | 323 ++++++++++--
 sections/gallery-custom.liquid                 | 184 +++++--
 sections/gallery-full-width-strip.liquid       | 234 +++++++--
 sections/gallery-image-grid.liquid             | 284 ++++++++--
 sections/header.liquid                         |  62 ++-
 sections/hero.liquid                           | 318 ++++++++---
 sections/hotspot-full-width-carousel.liquid    | 204 +++++--
 sections/hotspot.liquid                        |  44 +-
 sections/icon-text-cards.liquid                | 417 +++++++++++++--
 sections/icon-text-inline.liquid               | 124 ++++-
 sections/image-cards.liquid                    |  20 +-
 sections/image-comparison-custom.liquid        | 104 +++-
 sections/image-comparison-split-custom.liquid  | 192 +++++--
 sections/image-text-card-grid.liquid           | 223 +++++++-
 sections/image-text-split-layout.liquid        | 167 +++++-
 sections/image-text-stacked-bands.liquid       | 545 ++++++++++++++++---
 sections/location-list.liquid                  | 266 ++++++++--
 sections/location-map.liquid                   | 286 ++++++++--
 sections/page.liquid                           |   6 +-
 sections/parallax.liquid                       | 405 ++++++++++++++
 sections/password.liquid                       |   6 +-
 sections/press.liquid                          |  40 +-
 sections/product-information.liquid            |  44 +-
 sections/product.liquid                        |   6 +-
 sections/quick-add.liquid                      |  44 +-
 sections/quick-view.liquid                     |  44 +-
 sections/rich-text.liquid                      |  42 +-
 sections/scroll-reading-text.liquid            | 105 +++-
 sections/scrolling-cards.liquid                | 149 +++++-
 sections/scrolling-text-star-separator.liquid  | 458 ++++++++++++++--
 sections/search-overlay.liquid                 |  37 +-
 sections/search.liquid                         |   6 +-
 sections/shop-the-look-section.liquid          |  47 +-
 sections/slideshow.liquid                      | 418 +++++++++++++--
 sections/testimonial-carousel.liquid           | 429 ++++++++++++---
 sections/testimonials-background-custom.liquid |  99 +++-
 sections/testimonials-horizontal-custom.liquid |  59 ++-
 sections/text-marquee-custom.liquid            | 262 ++++++---
 snippets/swiper-navigation.liquid              |   2 +-
 snippets/theme-button.liquid                   |   2 +-
 tests/editorial-text.test.cjs                  |  49 ++
 217 files changed, 25054 insertions(+), 3990 deletions(-)
```


### 2026-10-02 — Update from personal main

- Previous main commit: `fa304936dd536d9d2d7ac46f9b2361947c955ce0`
- Updated through main commit: `ed7468aa59d460c2d86cee8b7035487d1bb88bf8`
- Main commits included: 2
- Included main commits:
  - `549a2fdacdad77d7dee674bad726dcc0db362e43` — fix(theme-base): track section and block code customizations
  - `ed7468aa59d460c2d86cee8b7035487d1bb88bf8` — fix(theme-base): preserve temporary git index for previews
- Change summary:

```text
docs/theme-customization-policy.md |  18 ++++++
 scripts/theme-base-sync.cjs        | 124 ++++++++++++++++++++++++++++++++-----
 2 files changed, 127 insertions(+), 15 deletions(-)
```

### Reviewed schema migration

Owner approved main schema for conflicts outside homepage. Updated Blog static heading to blog-title and added tag filter; migrated legacy typography tokens in non-homepage templates. Kept homepage index configuration, custom implementations, existing preset values and unconfirmed removed settings. Retained homepage product-media thumbnail visibility because this UI-only difference does not change runtime values.

### 2026-10-06 — Contained Carousel next-item preview

- Reference: Figma node `46028:7301`, 1920px rail with 448px cards: four complete cards and 128px of the next card. Fixed preview fraction is `2/7`; no merchant ratio setting. Use zero gap to reproduce the referenced strip.
- Desktop and mobile checkboxes apply independently at `768px`; enabled views use `columns + 2/7`, keep the viewport clipped and do not preview when the items fit. Existing template values are retained; the new mobile checkbox defaults to false.
- Validation: seven Carousel runtime/schema tests pass; JavaScript syntax, `git diff --check`, customization coverage and Theme Check pass (34 warnings, no errors). Live storefront and Theme Editor lifecycle were not exercised.

### Zoom foreground image option alignment — 2026-10-06

- Aligned `blocks/scrolling-image.liquid` with the Image kernel settings and shared `size-style` / `image-ratio-value` mappings. Kept overlay and the parent scroll animation hooks. Mobile ordering remains owned by the layered parent composition.
- Removed fixed foreground sizing from `assets/section-zoom-image-banner.css`; the block owns responsive crop, size, radius and padding. Preserved motion and overlay styles.
- Migrated legacy width and ratio fields in the homepage instance to the new desktop/mobile settings, preserving the 550px maximum and 6:7 crop. The section preset inherits the same sizing from block schema defaults and sets only overlay opacity, avoiding references to newly introduced size IDs during schema synchronization.
- Schema correction: desktop/mobile maximum width uses 25px steps across 0–1600px (65 selectable values), preserving the 550px default and saved preset values.

### Zoom image banner control ownership — 2026-10-06

- Removed section Content maximum width and its CSS cap; the existing Group block owns content sizing.
- Moved Scroll zoom enable/amount to Zoom foreground image. Each block initializes its own scroll runtime, preserves reduced motion/global motion preferences and cleans up on removal.
- Migrated the homepage zoom settings from section to foreground block (enabled, 12%). Section presets inherit foreground schema defaults.
- Enabled Group desktop/mobile Limit width at 770px in the homepage and section preset. This is the nearest supported 10px increment to the former section cap of 768px; sizing remains merchant-editable through Group options.

- Removed Scroll zoom header and enable/amount options from the foreground block and saved settings. Zoom now defaults to enabled at 12%, while respecting global image motion and reduced-motion preferences.

### 2026-10-06 — Product Metafield text block

- New `metafield` block mirrors Text settings, replacing richtext Text with a namespace.key input and Shopify help link. Product context comes from the parent; absent or unsupported values produce no storefront content. Editor keeps an empty selectable wrapper.
- Featured product preset and homepage Italian Fleece block now use `custom.material`; existing presentation and block order remain. Product details recommends the new block alongside Text; nested Groups already allow it.
- Store operation: layouthub-template-v2.myshopify.com, definition Material (`custom.material`, Single line text), definition ID `300058804523`, product `15402706141483` (TS 01 Essence Regular Heavyweight Black 2.0), value `Italian Fleece`. Created through existing authenticated Admin UI; value read back after Save. No other product values changed. Rollback of these created resources requires owner instruction.
- Validation: four Liquid render tests pass (closest-product priority, escaping, missing/invalid keys, editor empty wrapper, multiline/rich text, zero/false). Theme Check passes with zero errors and 34 existing warnings. `git diff --check` and `node theme-base check-custom essen-theme` pass. Product metafield value was verified after reloading Shopify Admin. Theme files have not been pushed; live Theme Editor rendering was not exercised.

### 2026-10-06 — Product cards material metafield

- Theme-specific global controls: Show metafield immediately below Show type; conditional Key field with the same short example and Learn more link as the Metafield block. Schema defaults to off; the current Assen composition enables it with `custom.material`.
- Reference: Essen Figma product card `46002:6071`, inspected through authenticated Dev Mode. Material text (Jacquard Cotton) is after the title/price content group: Poppins 14px, weight 400, line height 150% (21px), #999999, one line with ellipsis. Uses the existing body font/size tokens and content gap/alignment; long values do not widen the card.
- Product cards read their own product object across collection, search and recommendations; cards with missing values, invalid keys or unsupported types do not create an empty row. Text/scalar output uses Shopify metafield_text and HTML escaping. No JavaScript or additional setting is needed for layout.
- Scope is only `theme/essen-theme`; main remains unchanged. No new product data is created in this step. Existing `custom.material = Italian Fleece` from the preceding task supplies the TS 01 Black 2.0 card.
- Validation: eight Metafield block/card render tests pass, including toggle, correct product, missing/invalid keys, escaping, unsupported types and zero/false. Theme Check passes with zero errors and 34 existing warnings; customization and diff checks pass. A local browser fixture using production critical.css verifies 14px/21px, a single 21px row and ellipsis at 438px and 165.5px card widths. Live Shopify Theme Editor has not been tested; no theme push or Git commit is included.
- Owner correction: reference `46249:7077` is the color-scheme table (Text #404040 in light schemes and white in dark scheme). Card metafield now consumes `var(--body-color)` directly, inheriting the section/card scheme instead of the initial fixed gray. Font geometry and single-line ellipsis remain unchanged.
- Browser readback confirms the same 21px row resolves to rgb(64,64,64) under light Text #404040 and rgb(255,255,255) under dark Text #ffffff, retaining ellipsis. Final render tests, Theme Check and customization checks pass.

### 2026-10-06 — Figma metafield color per scheme

- Inspected Generated/400 variable details in Figma: all four Color schemes resolve to #999999. This supersedes the prior direct Text color mapping.
- Colors > each scheme exposes Product card metafield, defaulting to the Figma value. The card consumes --product-card-metafield-color; no fixed gray is embedded in card CSS. Root follows the default scheme and nested cards inherit their own scheme override.
- Preserve the additive scheme setting, localized label, root/per-scheme Liquid emission and card CSS together when merging base changes.
- Validation: rendered css-variables verifies default-scheme root color, independent scheme overrides and #999999 fallback for existing schemes without the new setting. Eight metafield render tests pass; Theme Check reports zero errors and 34 existing warnings. Customization coverage (33 files) and diff checks pass. No theme push or Git commit.

### 2026-10-06 — Announcement bar close button

- Owner explicitly authorized Assen-only implementation after the Figma preset configuration. Reference: Essen Top bar `47168:7375`, 1920px wide, 8px vertical padding, 1824px content width and a 24px close icon at the right edge.
- Section option `show_close_button` defaults to false for existing configurations; the Announcement bar preset and current header group explicitly enable it. Close uses the shared icon snippet, inherits scheme color and follows global desktop/tablet/mobile page margins. Content reserves symmetric space to prevent overlap.
- Dismissal lasts until page reload. Destroy runtime before hiding the bar so autoplay, observers and listeners stop. Keyboard focus moves to the next visible header control when possible. Theme Editor selection or section reload restores the bar; initialization remains idempotent.
- Review future main changes to both implementation files before merging. Preset/group values and the accessible-label locale key are configuration.
- Validation: `check-custom essen-theme` and `git diff --check` pass; Theme Check reports 0 errors and 34 existing warnings. Production CSS/JS fixture verifies desktop/mobile close, Enter activation, focus handoff, editor selection restoration and repeated unload/load without console errors. Live Shopify Theme Editor remains unverified.


### 2026-10-06 — Assen product-card price matches Essen Figma

- Reference: Essen card `46025:7104`, Price product cart and its current/compare-at text layers. Both prices use Poppins Regular 14px, 150% line height (21px); the row centers items on the cross axis with a 4px gap. Compare-at is Generated/500 (#808080), fully opaque and struck through; sale price is #D94100.
- Base behavior: shared `.price` uses global body size/leading and an 8px gap; compare-at is 0.9em with 0.72 opacity and inherited body color.
- Assen custom in `assets/critical.css`: scope fixed geometry to `.price--product-card` and its `.price__compare-at` descendant on desktop/mobile. Preserve existing body font (currently Poppins), configured sale color, currency formatting, sale order, wrapping and unit-price behavior. Product-page/cart price styles remain unchanged. No schema or preset option is added.
- When merging base changes, retain this card-only override; review overlap in shared price selectors and tokens, and check regular/sale/compare-at/unit-price cards. This customization belongs to Assen and must not be promoted to personal main without the owner's request.
- Validation: preview computed styles confirm Poppins 14px/21px, weight 400, 4px gap, sale #D94100 and compare-at #808080 at full opacity. Theme Check passes with zero errors and 34 warnings; customization coverage (35 files) and diff whitespace checks pass. No commit or theme push.

### 2026-10-06 — Featured product option and quantity labels

- Reference: Essen Product `46002:6186`; inspected text descendants Size `46002:6207` and Quantity `46002:6213` through authenticated Figma Dev Mode. Both use Body/14: Poppins Regular 14px, normal style, 150% line height (21px) and Text (#404040 in the current scheme). Quantity label/control gap is 8px, already matched by this theme.
- Added only Featured product scoped CSS in `sections/featured-product.liquid` for option-header captions and form labels. Body family/small-size and scheme Text remain token driven; regular weight and leading match Figma. Variant values, button labels, schemas and other sections retain their existing behavior.
- Validation: local Shopify development preview confirms all three labels resolve to Poppins 14px/21px, weight 400 and rgb(64,64,64) on desktop and 390px mobile; screenshots visually checked. Theme Check passes with zero errors and 34 warnings; customization coverage (36 files) and whitespace checks pass. No Git commit or theme push.

### 2026-10-06 — Theme branch renamed

- Renamed `theme/assen-theme` to `theme/essen-theme` locally and on GitHub at the owner's request. Renamed this customization record to match the theme slug and updated branch/command references; storefront implementation and saved theme composition remain unchanged.


### 2026-10-07 — Approved merge of current personal main

- Owner approved retaining custom behavior while integrating current base logic. Reviewed overlaps were merged by behavior, without replacing custom implementations.
- Carousel retains contained N + 2/7 desktop/mobile preview, insufficient-item guard and cloned loops; fade uses one slide and zero gap when previews are inactive. Preview opts into slide transition.
- Product-card inventory data is added alongside 5:4 media and the per-product material metafield. Retain 20px purchase gap, color-button/selected-value picker controls, two-media modes, 4:5 and 5:4 collection crops, announcement close behavior and custom locale keys. Import base inventory, pointer tolerance, heading-token and critical-CSS changes.
- Keep saved schemas/presets/compositions except new setting defaults, additive approved schema compatibility, and migration/removal of position_vertical explicitly approved by the owner. Existing password title remains for an empty saved block composition. Existing marquee direction/alignment values are migrated, including legacy mobile space-between support.

- Schema review: differences for Carousel ratios, Image card desktop/mobile heights, Press item ratio and Collection thumbnails ratios are additive custom 5:4/4:5 values. Every main value remains available, and the existing Liquid/CSS mappings remain intact. Keep these definitions.
- Validation: all 194 Node tests pass; full Theme Check passes with zero errors and 40 warnings. Customization coverage includes 38 implementation files. Saved-value audit confirms only approved position_vertical removal; global settings schema remains unchanged. Tests resolve locale keys and permit retained theme wording, and test unset Quantity defaults independently of its custom label default. Live Shopify storefront/editor was not exercised.

### 2026-10-07 — Gallery custom marquee

- References: Essen desktop `46028:7301` and mobile `46240:8880`, inspected through Figma design context and screenshots. Square images are 448px desktop / 256px mobile with zero gap and no outer padding.
- Dynamic content section remains in JSON templates with the existing shell, color scheme and spacing controls. Section owns card width; Marquee owns speed/direction/gap/motion; Item owns internal layout; Image owns merchant media, alt text, links and crop. No app slot or new data context is introduced.
- Changed homepage and reusable preset from Carousel → Slide → Image to Marquee → Item → Image; retained all six Shopify image sources, image settings, IDs and order. Removed Carousel from this section's addable blocks. Other gallery/carousel sections are unaffected.
- Reuses shared seamless clones, resize/mutation observers, hover/focus pause, reduced motion and section load/unload cleanup. Without JavaScript/reduced motion the original images form a clipped static strip. No shared runtime changes.
- Validation: Theme Check passes with zero errors and 40 existing warnings; customization coverage and `git diff --check` pass. Saved-composition audit confirms all six Image blocks/settings/IDs/order, section settings and other homepage sections remain unchanged. Liquid-rendered production CSS/JS fixture with the five cached Figma images verifies 1920/768/767/375px, 448/256px square frames, zero gap/overflow, seamless loop distance, motion, hover pause, three unload/load cycles, inert hidden clones and reduced-motion toggling; screenshots inspected. The sixth merchant image (`download.avif`) is preserved and was not loaded in this fixture. Live Shopify storefront and Theme Editor remain unverified because the existing local preview is disconnected. No commit or push.

### 2026-10-07 — Footer preset and store-name wordmark

- References: Essen desktop `47180:13363` (1920 × 831) and mobile `47180:14567` (375 × 713). User explicitly approved logo implementation and demo `#` menu destinations, then required the actual store name instead of ESSEN. No Figma brand artwork is shipped.
- Footer group and Footer preset reuse Row/Column, Menu, Text, Email signup, Logo, Divider, Group, Localization and Payment icons/Policy links. Set full-width container with existing 48px desktop / 16px mobile margins, top padding 80/56px and bottom padding 24px. Three menus collapse on mobile; newsletter remains horizontal.
- Logo ownership: global artwork stays the default; `custom_logo` overrides only this block. With `show_store_name` enabled and no custom image, render escaped uppercase `shop.name` characters across a responsive 1835:345 frame. Parent owns width/alignment; no JS or literal block ID dependency. Current Footer/preset enable the wordmark.
- Configuration gaps retained within preset-skill scope: existing menu typography is regular rather than Figma medium; menu spacing has one desktop/mobile control; section lacks a top-border setting and mobile accordion lacks the first top border; utility block order cannot independently move policies ahead of localization/payments on mobile. Localization and policy titles/count depend on store settings.

### 2026-10-07 — Theme warnings and rendering performance

- Theme Check: 0 errors; warnings reduced from 40 to 31 without disabling checks or removing merchant settings. Removed unused sorting/testimonial calculations, documented existing Search context parameters, normalized banner column argument type and forwarded legacy mobile-preview configuration to the shared Swiper renderer.
- Icon registration now uses exact array membership. All 76 registered keys/aliases plus five fallback inputs produce the same rendered output as the pre-change implementation.
- Shared mobile picture sources now include valid width descriptors, inherited sizes and intrinsic mobile dimensions. Candidate widths are clamped to the source resolution and deduplicated; merchant image sources, alt/link settings and image_tag loading behavior are retained.
- Hero parallax observes visibility with a 100px margin, skips offscreen/reduced-motion frames, responds to live motion-preference changes and disconnects observers/listeners on editor unload. Browsers without IntersectionObserver retain the existing animation fallback.
- Remaining warnings: 21 shared/scoped CSS references, five high-setting-count schemas, three Liquid complexity notices (Carousel, Countdown, CSS variables), one fragment-based comparison-table HTML notice and one unreferenced legacy search-filters snippet. These require separate structure/consumer review; no global check suppression or editor schema restructuring was introduced.
- Validation: 36/36 affected tests pass, including five new responsive-image/parallax regressions; customization coverage and git diff --check pass. Whole suite: 197/199 pass; TCP probe cannot listen on localhost in the sandbox (EPERM), and Footer configuration edited concurrently differs from the existing social-links expectation. Concurrent Footer/logo/composition changes were preserved. No live Lighthouse or Theme Editor verification: existing preview port is closed. No commit or push.

- Store operation ledger: `layouthub-template-v2.myshopify.com`, created and read back three dedicated menus through authenticated Admin: Address `essen-footer-address` / `323195896107` (1 item), Info `essen-footer-info` / `323196027179` (7 items), Follow us `essen-footer-follow-us` / `323196059947` (4 items). All 12 destinations are `#` demos as approved. Existing menus were not edited. Owner may replace destinations or request removal of these created menus. Footer group and preset reference these verified handles.

- Validation: Footer saved group and preset trees pass declared-setting, allowed-child, capacity, range/step and option checks. Theme Check passes with zero errors and 31 warnings; diff whitespace passes. Local production-logo-CSS fixture verifies actual name/accessibility label and no horizontal overflow at 1920px and 375px, with wordmark frames 1824 × 342.92px and 343 × 64.48px. Fixture uses a fallback font; live Poppins rendering, full storefront and Theme Editor lifecycle remain unverified because the existing development preview is disconnected. No theme-file push, publish or Git commit was performed. Full check-custom currently reports an unrelated missing record for snippets/icon.liquid; the logo path is registered.

- Final color verification: use existing scheme-1 (white #ffffff, Heading #111111, Text #404040, Border #e6e6e6) in both Footer preset and saved group. Scheme-3 was the prior black surface and is not used by this footer.

### 2026-10-07 — Footer language and Terms setup

- Owner authorized footer Localization implementation and settings_data changes, explicitly requiring Header Localization to stay unchanged. References remain Figma desktop `47180:13363` and mobile `47180:14567`.
- English is already Default / Published. Owner subsequently required the original more-than-one-language guard and adding an actual store language; the single-language implementation was reverted. French is selected from Shopify’s existing Canada-market suggestion; English remains default. Header code/settings remain unchanged; the published language inventory is store-wide. Country summary uses its actual ISO currency (USD), without a duplicate currency symbol.
- Scoped footer-only trigger appearance uses scheme Heading/Border, 10px control gap, 16px horizontal / 10px vertical padding, 8px label/icon gap and 20px chevron. Existing shared form submission, desktop popup, mobile bottom sheet, keyboard and Theme Editor lifecycle remain reused. Footer upward popup hover bridge is corrected locally. Header block and runtime are not edited.
- Existing configuration composition uses Group + two Text links for exact labels Privacy Policy / Terme & conditions, pointing to native store policy URLs; Shopify native title remains Terms of service. Global current form_input_typography changes sm (14px) → xs (12px) to match Figma newsletter; other form inputs inherit this authorized global change. Schema and named settings presets are unchanged.

- Store ledger: Terms of service was empty; saved an explicitly demo-only paragraph for Layouthub template v2 and verified Published plus `/policies/terms-of-service` storefront content. Privacy policy was already Automated/Published and was preserved.
- Language ledger: added French (`fr`) on `layouthub-template-v2.myshopify.com`, assigned to its existing Canada/United States domain. English remains Default/Published. Shopify’s add-language flow automatically installed its Translate & Adapt app; this was visibly read back as Installed. French has no translations and remains Not published: automatic approval review rejected Publish because the untranslated customer-facing store-wide change needs explicit owner approval. The original >1 available-language guard is retained, so the second language is not yet available to footer or header. No alternate publication path was attempted.
- Additional owner request: underlined_input layout of Email signup now has padding-inline: 0 for the actual input only; horizontal/vertical/input_with_button layouts and vertical padding are preserved. No global CSS, Header Localization block or shared header runtime is changed.

- Validation: Theme Check passes with zero errors / 31 warnings; check-custom covers all 50 custom implementation files and diff whitespace passes. Production CSS fixture compares Header Localization before/after at 1920px and 375px: identical dimensions, border, padding, color, gap and 18px icon. Footer computes 1px border, 16px inline / 10px block padding, 8px gap and 20px icon at both sizes; no page overflow. Underlined input computes 0px left/right padding while horizontal input retains 8.75px in this fixture; vertical padding stays 6.5px. Fixture uses fallback fonts and checks CSS isolation, not the full Shopify Theme Editor or mobile bottom-sheet lifecycle. Full remote footer files are not pushed.

### 2026-10-07 — Homepage warning and image-loading follow-up

- Shared Hero, Header Localization, Tab Layout and Gallery Strip item styles now live in rendered stylesheet snippets. Both original owners and dependent consumers render the same dependency, allowing Shopify stylesheet subsetting to include their CSS without duplicate declarations. Original extracted styles are byte-for-byte unchanged.
- Remove the unused form__control--input marker only from cart drawer, product section and password form; shared form__control styling and input/validation semantics remain. Carousel and Countdown enum validation uses exact array membership with unchanged values/fallbacks. Replace Comparison Table rows inside the complete native column rather than concatenating an unbalanced HTML fragment. Remove the unreferenced legacy search-filters snippet; active Search blocks/GET filter forms remain.
- Product List and product-collection-grid translate only their fallback label, preserving actual merchant collection/tab titles. Shared image adds an optional loading parameter. Product Card primary artwork is lazy in sections after the first and in footer sections; hover artwork is always lazy. Add responsive candidates and auto sizes with viewport fallbacks, keeping first/unknown contexts on Shopify's native primary-image loading behavior. Preserve merchant sources, image crops, links, alternative text, variants and hover behavior.
- Layout loads share/scroll-to/hero scripts when their consumer marker is present in page content, or always in Theme Editor to support inserted sections. Current homepage downloads none of these three optional scripts. Existing slideshow preload, Swiper, overlay, product forms and page composition are retained.
- Preview observed at http://127.0.0.1:9300/: desktop 1280px and mobile 375px have no horizontal overflow; hero remains eager/high priority; carousel translation errors are gone; mobile Work-Casual tab switch renders all four cards. Desktop displayed card width/source intrinsic width changes from 274/1280 to 274/274; mobile switched tab cards are 158/158. This is browser image-selection evidence, not a Lighthouse score or transferred-byte benchmark.
- Remaining Theme Check warnings: five existing schemas with more than 40 settings (_bundle-summary 41, _comparison-table-features 41, Carousel 55, comparison-table-column 46, editorial-text 53), plus CSS variables complexity 277. No settings are removed and no lint checks are disabled. These remain visible pending compatible schema/token decomposition. Browser also reports Shopify Account's configured customer-account-main-menu unavailable through Storefront API, with Shopify fallback account links; store menus were not mutated.
- Affected test selection: 41/41 passes, including four new product-card loading regressions. Expanded Theme Settings run has one pre-existing Footer menu-versus-social-links expectation failure; current saved footer menu composition is retained. No Git commit/push or theme publish.
- Reference: Shopify responsive sizing and stylesheet-subsetting guidance: https://shopify.dev/docs/storefronts/themes/best-practices/performance and https://shopify.dev/docs/storefronts/themes/best-practices/performance/implement-responsive-design.

- Additional regression evidence: all 12 legacy/dynamic × 0/1/2 rows × sticky/non-sticky comparison fixtures match prior rendered output (excluding comments/formatting), with balanced divs; four extracted shared stylesheet bodies match the original CSS byte-for-byte.

### 2026-10-07 — Slideshow desktop/mobile position repair

- Owner reported Desktop position and Mobile position not working. Live diagnosis after shared CSS extraction: Hero rules loaded later override the equally specific slide surface grid track, padding and gap. Desktop surface is 720px but content container collapses to 272–320px, leaving top/center/bottom alignment confined to content height. The original dependency warning also meant Hero position rules could be omitted when no Hero section renders.
- Declare shared Hero styles on every slide and increase specificity only for the slide surface, slide container desktop/tablet/mobile padding and slide content gap. Keep the shared nine position mappings, child-owned text alignment, merchant choices, classic/split layout, fit/fill/custom width, animations and Theme Editor attributes. No schema or homepage settings change.
- Live homepage: desktop slide/container both 720px, center content top 221px for 277.59px content, padding 70px/48px and 40px gap. Mobile slide/container both 812px, center content top 286px for 240px content, padding 50px/16px and 40px gap. Both have no horizontal overflow.
- Production-CSS fixture intentionally loads shared Hero CSS after slide CSS to exercise adverse source order. All 108 cases pass within 1px: nine positions × classic/split × fit/custom/fill at 1280px and 375px. Mobile positions are the reverse of desktop choices to verify independence. Fixture checks content bounding boxes and full-height containers; no saved merchant configuration is changed. Theme Editor setting-change lifecycle is not exercised directly.

### 2026-10-07 — Performance / Best Practices follow-up

- Existing Chrome Lighthouse desktop report: Performance 57, Best Practices 54, FCP 2.2s, LCP 10.3s, TBT 0ms, CLS 0. The report warns of a page-load timeout; it is diagnostic evidence, not a controlled benchmark. Local development serves a 581.6KiB compiled stylesheet and 86.3KiB critical CSS without production transfer-size assumptions.
- Shared country flag rendering explicitly uses HTTPS and preserves native image_tag dimensions, class and decorative alt semantics. The account menu exists in Liquid but is unavailable through Storefront API. A Liquid existence guard cannot resolve this store/API mismatch, so native Shopify Account behavior is retained.
- Slideshow autoplay suspends requestAnimationFrame when its section leaves the viewport or the tab is hidden; elapsed time remains paused and resumes without jumping. Observer, frame and visibility listener are cleaned up on destroy. Position/settings and pagination behavior are preserved.
- Shopify-injected origin_trials/analytics and browser-profile third-party cookies remain outside theme-owned assets. content_for_header and authentication/security/analytics configuration are not modified.
- Verification: all 10 rendered country flags on the live homepage use HTTPS and load successfully; no Liquid error or horizontal overflow. Affected regression selection passes 46/46, including five new flag/autoplay tests. Theme Check: zero errors, six existing warnings; customization ledger covers 71 files. A fresh comparable Lighthouse report was not completed because the Chrome surface was being used concurrently; no post-change score is claimed.

### Mobile performance follow-up — 2026-10-07

- Featured product below the first two template sections uses the existing viewport module loader for six product runtimes (112,678 source bytes combined), and nonblocking CSS. Above-fold, unknown placement and Theme Editor keep immediate loading.
- Direct Swiper imports in carousel-block, cart-drawer-recommendations, collection-thumbnails, product-collection-carousel, product-media, slideshow, swiper-carousel and timeline-list reduce the initial native ES-module dependency graph.
- Lazy product gallery images use automatic sizes with a responsive fallback and a 320px candidate. Eager product/LCP images retain their existing priority.
- Requested short preview identifies the separate Essen template (Minhle) draft, theme 192037617963. Its benchmark must not be presented as a score for local development-theme changes before those changes reach that draft. Mobile is the primary audit target.

- Shared image markup explicitly lazies below-fold sections and uses auto sizes only for lazy images, with the prior responsive fallback. Image block/background candidates include 240/320px for mobile cards.
- Observed draft mobile report at 15:05: Performance 68, Best Practices 77, FCP 2.3s, LCP 2.7s, TBT 620ms, CLS 0, Speed Index 25.6s. Lighthouse timed out; baseline is incomplete. Draft resource paths use t/18 and retain the old Swiper barrel and immediate Featured product runtimes.

- Validation: 50 focused tests pass; Theme Check inspects 340 files with zero errors and the six existing schema/complexity warnings; git diff --check passes. Local 390px preview confirms auto sizes/small candidates, six deferred Featured product markers and gallery initialization plus quantity interaction after scrolling. Draft has not been pushed.

## Reviewed base sync decisions — 2026-10-09

Owner instruction: implement updates for both themes, preserve presets and current layout for used sections, add new options in main order (ABC/ACB), and retain existing configured values. Source: personal main `729be6cfc3a31211b3107df8b9a6206860e406c9`; previous theme HEAD: `b89b6aeb811cdccc383ce7c526b61f3f08f48145`.

The normal update command stopped on overlapping implementation paths. This reviewed sync uses the same schema/default/composition/history and release checks, with explicit compatibility resolutions. Main implementation changes that could change layout or invalidate legacy controls are held on the paths below. The matching theme schema, allowed children, retained settings and saved values remain compatible with the theme implementation. New optional mobile-hide controls are wired in both View all blocks without importing main's different overflow visibility rules.

Additive child compatibility: FAQ rows retain their legacy child types; {"blocks/faq_item.liquid":["text"]} records explicitly added shared child types needed by imported unused presets. Existing saved children and preset values stay unchanged.

Held implementation/layout paths:
- `assets/critical.css`
- `assets/hero.js`
- `blocks/_collection-toolbar.liquid`
- `blocks/_comparison-table-features.liquid`
- `blocks/_header-menu.liquid`
- `blocks/_search-products.liquid`
- `blocks/collection-tab.liquid`
- `blocks/countdown-timer.liquid`
- `blocks/faq_accordion.liquid`
- `blocks/faq_item.liquid`
- `blocks/gallery-strip-feature-item.liquid`
- `blocks/localization.liquid`
- `blocks/marquee.liquid`
- `blocks/product-list.liquid`
- `blocks/slideshow-slide.liquid`
- `blocks/tab-layout.liquid`
- `blocks/tabs-view-all-button.liquid`
- `blocks/view-all-button.liquid`
- `layout/theme.liquid`
- `sections/blog-posts.liquid`
- `sections/cart-drawer.liquid`
- `sections/featured-blog-posts.liquid`
- `sections/featured-collection.liquid`
- `sections/scrolling-text-star-separator.liquid`
- `sections/text-marquee-custom.liquid`
- `snippets/css-variables.liquid`
- `snippets/gallery-strip-item-styles.liquid`
- `snippets/hero-styles.liquid`
- `snippets/icon.liquid`
- `snippets/image-ratio-value.liquid`
- `snippets/tab-layout-styles.liquid`
- `assets/cart-drawer.css`
- `assets/component-overlay.css`
- `assets/section-collection.css`

New settings and base defaults:
- `blocks/faq_accordion.liquid` / `self` / `question_font`: "heading"
- `blocks/faq_accordion.liquid` / `self` / `question_body_font_size`: "md"
- `blocks/faq_accordion.liquid` / `self` / `device`: "desktop"
- `blocks/faq_accordion.liquid` / `self` / `width_mobile`: "fill"
- `blocks/faq_accordion.liquid` / `self` / `custom_width_mobile`: 100
- `blocks/faq_accordion.liquid` / `self` / `limit_width_mobile`: false
- `blocks/faq_accordion.liquid` / `self` / `max_width_mobile`: 1100
- `blocks/faq_accordion.liquid` / `self` / `color_type`: "color_scheme"
- `blocks/faq_accordion.liquid` / `self` / `question_body_font_size_mobile`: "md"
- `blocks/faq_accordion.liquid` / `self` / `customize_mobile_size`: false
- `blocks/marquee.liquid` / `self` / `show_top_divider`: false
- `blocks/marquee.liquid` / `self` / `show_bottom_divider`: false
- `blocks/marquee.liquid` / `self` / `show_blurred_edges`: false
- `blocks/marquee.liquid` / `self` / `enable_parallax`: true
- `blocks/marquee.liquid` / `self` / `alignment`: "center"
- `blocks/marquee.liquid` / `self` / `width`: "fill"
- `blocks/marquee.liquid` / `self` / `custom_width`: 50
- `blocks/marquee.liquid` / `self` / `color_type`: "inherit"
- `blocks/marquee.liquid` / `self` / `color_scheme`: "scheme-1"
- `blocks/tabs-view-all-button.liquid` / `self` / `hide_view_all_mobile`: false
- `blocks/view-all-button.liquid` / `self` / `hide_view_all_mobile`: false

Settings retained because removal was not individually approved:
- `blocks/faq_accordion.liquid` / `self` / `answer_font_size`
- `blocks/faq_accordion.liquid` / `self` / `answer_font_size_mobile`
- `blocks/marquee.liquid` / `self` / `background_color`
- `blocks/marquee.liquid` / `self` / `padding_left`
- `blocks/marquee.liquid` / `self` / `padding_right`
- `blocks/marquee.liquid` / `self` / `padding_left_mobile`
- `blocks/marquee.liquid` / `self` / `padding_right_mobile`
- `sections/text-marquee-custom.liquid` / `section` / `position`
- `sections/text-marquee-custom.liquid` / `section` / `height`

Reviewed schema differences: existing definitions/allow-lists are retained together with their compatible theme implementation:
- blocks/collection-tab.liquid: danh sách block được phép khác main (theme: product-card; main: promo-card)
- blocks/faq_accordion.liquid: option self/question_font_size đổi trường ảnh hưởng hành vi visible_if; cần review trước khi cập nhật logic
- blocks/faq_accordion.liquid: option self/shadow đổi trường ảnh hưởng hành vi options; cần review trước khi cập nhật logic
- blocks/faq_accordion.liquid: option self/gap_desktop đổi trường ảnh hưởng hành vi visible_if; cần review trước khi cập nhật logic
- blocks/faq_accordion.liquid: option self/gap_mobile đổi trường ảnh hưởng hành vi visible_if; cần review trước khi cập nhật logic
- blocks/faq_accordion.liquid: option self/width đổi trường ảnh hưởng hành vi visible_if; cần review trước khi cập nhật logic
- blocks/faq_accordion.liquid: option self/custom_width đổi trường ảnh hưởng hành vi visible_if; cần review trước khi cập nhật logic
- blocks/faq_accordion.liquid: option self/limit_width đổi trường ảnh hưởng hành vi visible_if; cần review trước khi cập nhật logic
- blocks/faq_accordion.liquid: option self/max_width đổi trường ảnh hưởng hành vi visible_if; cần review trước khi cập nhật logic
- blocks/faq_accordion.liquid: option self/color_scheme đổi trường ảnh hưởng hành vi visible_if; cần review trước khi cập nhật logic
- blocks/faq_accordion.liquid: option self/customize_mobile_font_size đổi trường ảnh hưởng hành vi visible_if; cần review trước khi cập nhật logic
- blocks/faq_accordion.liquid: option self/question_font_size_mobile đổi trường ảnh hưởng hành vi visible_if; cần review trước khi cập nhật logic
- blocks/faq_item.liquid: danh sách block được phép khác main (theme: faq_answer_text; main: @app, @theme)
- blocks/marquee.liquid: option self/animation_speed đổi trường ảnh hưởng hành vi min, max, step, unit; cần review trước khi cập nhật logic
- blocks/marquee.liquid: option self/animation_direction đổi trường ảnh hưởng hành vi options; cần review trước khi cập nhật logic
- blocks/marquee.liquid: option self/gap_desktop đổi trường ảnh hưởng hành vi max, step; cần review trước khi cập nhật logic
- blocks/marquee.liquid: danh sách block được phép khác main (theme: marquee-item; main: _marquee-button, _marquee-countdown-timer, _marquee-coupon-code, _marquee-divider, _marquee-group, _marquee-heading, _marquee-icon, _marquee-image, _marquee-text, marquee-item)
- blocks/product-list.liquid: danh sách block được phép khác main (theme: product-card; main: promo-card)
- sections/text-marquee-custom.liquid: option section/alignment đổi trường ảnh hưởng hành vi options; cần review trước khi cập nhật logic
- sections/text-marquee-custom.liquid: option section/alignment_mobile đổi trường ảnh hưởng hành vi options; cần review trước khi cập nhật logic
- sections/text-marquee-custom.liquid: danh sách block được phép khác main (theme: button, buttons, divider, eyebrow, header, heading, icon, image, marquee, scroll-to, spacer, text, video; main: button, buttons, eyebrow, header, heading, icon, image, marquee, scroll-to, spacer, text, video)

Validation before release: saved template/group/settings values and block/section order match the previous theme except declared new defaults; protected presets and existing setting definitions are unchanged; changed JavaScript parses. Local browser fixture uses actual pre/post CSS and passes 16 default-layout comparisons at 1440/1024/768/390px, plus optional mobile hide/width controls. Shared layout CSS and theme token consumers are held. Live Shopify storefront and Theme Editor rendering were not verified in this Git sync; no store upload or publication. Full Theme Check and customization coverage are required before commit. Tests and generated evidence remain local and are excluded from delivery.


## FAQ base rebuild — 2026-10-09

Owner explicitly requested Essen FAQ to follow personal main exactly. This overrides earlier FAQ compatibility retention. All FAQ section/block implementation, schemas and presets now match main `729be6cfc3a31211b3107df8b9a6206860e406c9`. The homepage has no FAQ; `templates/page.faqs.json` has 15 saved answers, migrated from `faq_answer_text` to shared `text` with the same IDs, text and block order. Legacy answer size moves to Text `text_size`; Text uses full width. Removed FAQ parent settings are dropped only after this transfer; compatible existing settings are retained and missing declared source defaults are added. FAQ is no longer a custom implementation exception. Other custom sections/blocks remain protected.

Validation: exact byte equality with main for FAQ files; saved answer content/order assertions; customization coverage and full Theme Check before commit. Main FAQ now controls geometry; live Shopify rendering was not verified.


### Footer logo rollback — 2026-10-09

- Restored `blocks/logo.liquid` to personal `main`: use global default/transparent artwork and escaped store-name fallback when no image is configured. Removed custom wide wordmark and block-local image settings.
- Removed `show_store_name` from the Footer preset and saved Footer group; preserved the existing Footer composition. This supersedes the earlier custom logo implementation notes.


### Text marquee rebuilt from personal main — 2026-10-09

- Owner approved rebuilding Text marquee and the shared marquee block to match personal main. `sections/text-marquee-custom.liquid` implementation and schema definitions now match main; only its preset retains the theme scrolling content and layout. `blocks/marquee.liquid` matches main exactly. Legacy marquee-item compositions were subsequently migrated as recorded below.
- Homepage uses Text marquee (custom) in the former Scrolling Text Images position, retaining all three messages, 6px square separators, gray background and 20px vertical padding. Removed legacy section position/height values absent from main from saved section settings.
- Removed Scrolling Star Separator from the add-section preset list; no saved template instance referenced it. Existing Icon with text composition and preset are unchanged.

- Follow-up: owner requested removing legacy Item blocks from marquee. Scrolling copy/icons now use direct `_marquee-text`, `_marquee-heading`, and `_marquee-icon` blocks. Gallery wraps existing images in main `_marquee-group` to preserve image settings. Removed `marquee-item` from the marquee allow-list; kept the implementation file for the separate gallery-header-group consumer. Scrolling gaps are 32px to account for the former 16px text side padding plus 16px item gap.

- Color inheritance correction: main has the same unconditional background behavior. Marquee and its Group now paint a background only when an explicit color scheme is selected; inherit exposes the parent background while text continues to consume inherited color tokens.

- Gallery rebuild follow-up: owner requested all marquee child blocks synchronized with main. `_marquee-group` is restored to main, superseding its local inherit-background correction; all `_marquee-*` blocks now match main exactly. Figma frame inspection is pending connector reauthentication, so no new Gallery composition has been inferred.

- Gallery preset rebuilt: cleared legacy group/image trees and added six direct `_marquee-image` blocks in the existing image order, both in the section preset and homepage instance. Existing media references and links retained. Square image dimensions are 400px desktop / 255px mobile, the closest supported values to legacy 448px / 256px without changing main block schema. Figma comparison remains pending reauthentication.

- Owner approved theme-specific marquee Image widths up to 500px. Shopify range controls cannot express 50–500 in 1px steps within their step-count limit, so width controls now use numeric inputs with Liquid clamping to 50–500. Gallery preset and homepage image blocks use exact 448px desktop / 256px mobile dimensions. Figma verification remains pending reauthentication.


### Block animations and warning cleanup — 2026-10-09

Historical receipt: imported the Elara runtime and six kernel controls on 2026-10-09. The runtime, head boot guard and custom Rotate words CSS were superseded by MAIN-ARCHE-BLOCK-ANIMATION-001 on 2026-10-13. Existing Heading/Text/Button/Eyebrow/Icon/Editorial text controls and the attribute snippet remain as compatibility hooks for saved presets because personal main has no equivalent leaf setting schema; they feed the shared main runtime. Their implementation differences remain recorded; the removed runtime is no longer an active customization. Existing multiple-image runtime remains its own motion owner.

Resolved token complexity through exact key mapping while retaining each Essen fallback/value; connected the existing deduplicated font-face helper. Removed three unreferenced legacy snippets: comparison-table-column-shell, localization-styles and product-list-promo-items. Their active consumers already use current implementations. Settings-count warnings remain: removing merchant controls would alter the editor contract. No commit, push or store upload requested.

### 2026-10-09 — Figma header and footer logo media

- Uploaded the requested Figma artwork to layouthub-template-v2.myshopify.com: header node 49592:12386 (416 × 180), MediaImage 46498082226475; footer node 49592:12409 (1824 × 343), MediaImage 46498081898795. References: header 47129:9276, desktop footer 47180:13363 and mobile footer 47180:14567. Both files were encoded and decoded as AVIF with alpha preserved; saved descriptive alt text in Files.
- Current Essen settings use shopify://shop_images/essen-header-logo.avif with 104px desktop width; existing mobile width and overlay behavior are preserved. The unrelated named Spinel settings preset remains unchanged.
- Saved Footer group and Footer section preset reuse the existing Image block for shopify://shop_images/essen-footer-logo.avif, natural ratio and fill width on desktop/mobile, linked to /. Existing block ID, order and all other composition/settings are preserved. This configuration separates the wide footer artwork from the shared global header logo without implementation changes.
- Existing theme-dev session synchronized these settings to development theme 192119800107. Reloaded local storefront confirms both images load; desktop/mobile footer ratio and no horizontal overflow were verified at 1920px and 375px. Header retains its existing 40px desktop/30px mobile image frame; whole-footer layout gaps previously documented remain outside this media request.
- Theme Check passes with zero errors and five existing settings-count warnings. Upload receipt with file IDs, checksums and permanent CDN URLs is local at .shopify/essen-logo-upload.json. No Git commit, push or theme publication.

- Header media follow-up: exported the separate Transparent variant artwork, node 49592:12388, as 416 × 180 AVIF and uploaded MediaImage 46498863317291. Current settings now map logo_transparent to shopify://shop_images/essen-header-logo-transparent.avif; logo keeps the Classic artwork. Both Figma variants use black lettering. Storefront readback confirms the transparent header displays the Transparent file and the background header displays the Classic file after scrolling. Header Liquid/CSS/JS and existing switching logic are unchanged; Theme Check still passes with zero errors and five existing warnings.

- Owner color correction: Transparent header must use white lettering. Recolored the original artwork to white with its alpha and dimensions preserved, uploaded 416 × 180 AVIF MediaImage 46499302080811 and mapped logo_transparent to shopify://shop_images/essen-header-logo-transparent-white.avif. This supersedes the earlier black Transparent image assignment; normal header and footer are unchanged. Live preview confirms the white overlay logo loads. No implementation changes.

## Essen Blog mobile and product-card typography plan — 2026-10-09

- Role/placement/context: existing homepage Blog posts content section in JSON templates, using the configured Shopify blog and its existing static card children. Product-card titles remain a shared commerce primitive in this theme.
- Ownership/output: title/meta blocks honor zero padding; Blog posts owns mobile card/tag/action geometry; the existing carousel owner adapts height to the visible single-column article without truncating titles. Preserve existing DOM, block slots, resource references, editor attributes and link focus.
- Runtime/responsive: retain existing idempotent carousel initialization/unload; mobile Blog posts uses active-slide auto height, desktop retains the multi-column layout. Product titles use the existing font/size options plus Essen-only weight 500 and line-height 1.5; load the real medium font face.
- QA: inspect 375px mobile and 1920px desktop, article slide changes and breakpoint round trip, zero-padding output, loaded medium font, Quick add/view settings, JSON/schema, Theme Check and customization coverage. No new options or resource/content changes.


## Typography scale correction — 2026-10-09

Plan: global surface; existing Theme Settings own visual profiles, css-variables translates them, critical.css owns semantic/default and Display resolution. Preserve section/block slots, content, editor lifecycle and explicit custom sizes. QA: all typography consumers, schema compatibility, responsive token output and Theme Check.

Source: Essen Typography Figma node 43415:6890 read again on 2026-10-09. H1 begins at Extra Large, then H2 Large, H3 Medium, H4 Small, H5 Extra Small. Current desktop/tablet/mobile sizes: XL 64/52/40, LG 40/32/32, MD 32/26/24, SM 24/22/20, XS 18/16/16px. Existing IDs/options/defaults and named settings presets remain. Medium has no tablet control: derive tablet size at 26/32 of its desktop setting; Extra Small uses mobile size on tablet. These mappings retain merchant control without adding options.

Runtime customizations in snippets/css-variables.liquid and assets/critical.css align normal line-height to 120/120/130/140/150%, spacing to -1.28/-0.8/-0.64/-0.48/0px, and semantic H1–H6 aliases to XL/LG/MD/SM/XS/XS. Display resolves locally from the actual heading tag through CSS variables; non-heading Display class falls back to XL. Explicit visual sizes and legacy visual aliases stay independent. Heading delegates Display to shared CSS. The existing global Display profile remains for non-heading consumers using its token; no separate Figma Display size was invented.

Parent-defined heading variables in FAQ category, stacked image/text and Collections with background resolve Display in Liquid using the actual declared tag, so inherited desktop/mobile values do not bypass the shared semantic scale. Other heading class consumers use shared CSS; non-heading timer/tab/FAQ question controls retain their explicit visual profile because they have no semantic heading tag.

Validation: 54 Chrome headless computed-style assertions passed at 1440/1024/390px for semantic H1–H6, Display on each tag, explicit XL–XS and div fallback; normal line-height verified. Current heading sizes satisfy every existing schema range; saved named presets and unrelated current settings are unchanged. Theme Check passes (356 files, zero errors, five existing settings-count warnings); customization coverage passes. These are local browser fixtures, not a complete live storefront/Theme Editor review. No commit or push.


## Typography preset migration and Figma verification — 2026-10-09

Migrated section/block presets and saved compositions to matching visual roles; unmatched values use requested Custom size. Added FAQ local Custom controls where absent. Existing single-size Custom controls cannot preserve separate former mobile values; these limits and paths are documented in docs/essen-typography-preset-migration.md. Read Essen desktop/mobile nodes 46002:5779 and 46240:8549. Homepage headings use XL 64/40, LG 40/32, MD 32/24, XS 18/16px; all Slideshow headings use XL per owner override. 19 Figma selection pairs and 54 browser style assertions pass; Theme Check reports zero errors and five existing warnings. No commit/push or store upload.


### Final Typography naming and tag mapping correction — 2026-10-09

Supersedes the earlier interim mapping in this record. Typography group names and option labels now match personal main (Display / Extra large / Large / Medium / Small / Extra small), including translation values; existing IDs/ranges/defaults/option values are preserved. Each control group owns its matching visual token: type_heading_1_* Display 80/64/48, _2_* XL 64/52/40, _3_* LG 40/32/32, _4_* MD 32/26/24, _5_* SM 24/22/20, _6_* XS 18/16/16px. Display is a theme-selected size above Figma Heading 1, as requested.

When Heading size is Display, tags map H1 Display, H2 XL (Figma H1), H3 LG (Figma H2), H4 MD (Figma H3), H5 SM (Figma H4), H6 XS (Figma H5). Non-heading Display classes retain the XL fallback. Shared CSS and the parent-variable resolver implement the same mapping. Explicit sizes remain independent, including the three Slideshow headings fixed at XL. Former 24px/20px Custom selections are corrected to Small (33 settings); 16px unmatched selections remain Custom. Detailed configuration limits are listed in docs/essen-typography-preset-migration.md.

Validation: exact main Typography names/option labels and resolved translation values; current sizes satisfy schema ranges; 54 Chrome computed-style assertions at 1920/1024/375px; Theme Check and customization coverage. No commit/push or store upload.

### Retained custom paths through main fafdc8de

- `assets/announcement-bar.js`
- `assets/breadcrumbs.css`
- `assets/carousel-block.js`
- `assets/cart-drawer-recommendations.js`
- `assets/cart-drawer.css`
- `assets/cart-page.css`
- `assets/cart-page.js`
- `assets/collection-thumbnails.js`
- `assets/collections-with-background.js`
- `assets/comparison-table.js`
- `assets/component-bundle-summary.css`
- `assets/component-collection-card.css`
- `assets/component-comparison-table.css`
- `assets/component-image-comparison.css`
- `assets/component-marquee-countdown-timer.css`
- `assets/component-pagination.css`
- `assets/component-product-callout.css`
- `assets/component-search-suggestions.css`
- `assets/component-social-links.css`
- `assets/component-timeline-list.css`
- `assets/editorial-text.js`
- `assets/image-text-card-grid.js`
- `assets/scrolling-cards.js`
- `assets/product-buy-buttons.js`
- `assets/product-collection-carousel.js`
- `assets/product-description.js`
- `assets/product-information-extras.css`
- `assets/product-information-extras.js`
- `assets/product-information.css`
- `assets/product-inventory.js`
- `assets/product-media.css`
- `assets/product-media.js`
- `assets/quick-add.js`
- `assets/quick-view.js`
- `assets/search-page.js`
- `assets/section-collection.css`
- `assets/section-collection.js`
- `assets/section-featured-collection-banner.css`
- `assets/section-hotspot-full-width-carousel.css`
- `assets/section-parallax.css`
- `assets/section-parallax.js`
- `assets/section-zoom-image-banner.css`
- `assets/section-zoom-image-banner.js`
- `assets/slideshow.js`
- `assets/swiper-12.2.0-effect-fade.min.css`
- `assets/timeline-list.js`
- `assets/variant-picker.js`
- `blocks/_bundle-product-list.liquid`
- `blocks/_bundle-summary.liquid`
- `blocks/_cart-content.liquid`
- `blocks/_cart-order-summary.liquid`
- `blocks/_cart-summary.liquid`
- `blocks/_collection-columns.liquid`
- `blocks/_collection-count.liquid`
- `blocks/_collection-filter.liquid`
- `blocks/_collection-pagination.liquid`
- `blocks/_collection-products.liquid`
- `blocks/_collection-sort.liquid`
- `blocks/_collection-toolbar.liquid`
- `blocks/_collections-list.liquid`
- `blocks/_collections-page-card.liquid`
- `blocks/_column.liquid`
- `blocks/_comparison-table-features.liquid`
- `blocks/_header-account.liquid`
- `blocks/_header-cart.liquid`
- `blocks/_header-localization.liquid`
- `blocks/_header-logo.liquid`
- `blocks/_header-menu-toggle.liquid`
- `blocks/_header-menu.liquid`
- `blocks/_header-search.liquid`
- `blocks/_marquee-button.liquid`
- `blocks/_marquee-countdown-timer.liquid`
- `blocks/_marquee-coupon-code.liquid`
- `blocks/_marquee-divider.liquid`
- `blocks/_marquee-group.liquid`
- `blocks/_marquee-heading.liquid`
- `blocks/_marquee-icon.liquid`
- `blocks/_marquee-image.liquid`
- `blocks/_marquee-text.liquid`
- `blocks/_mega-menu-banner.liquid`
- `blocks/_mega-menu-banners.liquid`
- `blocks/_overlay-product-media.liquid`
- `blocks/_product-collection-grid.liquid`
- `blocks/_product-details.liquid`
- `blocks/_product-media.liquid`
- `blocks/_search-input.liquid`
- `blocks/_search-products.liquid`
- `blocks/_search-results.liquid`
- `blocks/announcement-countdown-timer.liquid`
- `blocks/announcement-text.liquid`
- `blocks/banner.liquid`
- `blocks/blog-card-button.liquid`
- `blocks/blog-card-description.liquid`
- `blocks/blog-card-meta.liquid`
- `blocks/blog-card-tag.liquid`
- `blocks/blog-card-title.liquid`
- `blocks/blog-card.liquid`
- `blocks/blog-grid.liquid`
- `blocks/blog-list.liquid`
- `blocks/blog-meta.liquid`
- `blocks/blog-tag-filter.liquid`
- `blocks/button-view-details.liquid`
- `blocks/button.liquid`
- `blocks/buttons.liquid`
- `blocks/carousel.liquid`
- `blocks/cart-free-shipping.liquid`
- `blocks/cart-items.liquid`
- `blocks/cart-order-note.liquid`
- `blocks/cart-shipping-estimator.liquid`
- `blocks/collection-background-item.liquid`
- `blocks/collection-card-button.liquid`
- `blocks/collection-card-description.liquid`
- `blocks/collection-card-title.liquid`
- `blocks/collection-card.liquid`
- `blocks/collection-list-items.liquid`
- `blocks/collection-promo.liquid`
- `blocks/collection-tab.liquid`
- `blocks/collection-thumbnail.liquid`
- `blocks/collections-with-tabs-item.liquid`
- `blocks/comments.liquid`
- `blocks/comparison-table-column.liquid`
- `blocks/comparison-table-row-value.liquid`
- `blocks/comparison-table-row.liquid`
- `blocks/comparison-table.liquid`
- `blocks/contact-field.liquid`
- `blocks/contact-form.liquid`
- `blocks/content.liquid`
- `blocks/countdown-timer.liquid`
- `blocks/discount-code.liquid`
- `blocks/divider.liquid`
- `blocks/editorial-text.liquid`
- `blocks/email-signup.liquid`
- `blocks/eyebrow.liquid`
- `blocks/faq_accordion.liquid`
- `blocks/faq_category.liquid`
- `blocks/faq_item.liquid`
- `blocks/featured-image.liquid`
- `blocks/featured-post.liquid`
- `blocks/first-card.liquid`
- `blocks/gallery-hotspot.liquid`
- `blocks/gallery-image.liquid`
- `blocks/gallery-item.liquid`
- `blocks/gallery-strip-feature-item.liquid`
- `blocks/gallery-strip-item.liquid`
- `blocks/gallery-strip-overlay-group.liquid`
- `blocks/grid.liquid`
- `blocks/group.liquid`
- `blocks/header.liquid`
- `blocks/heading.liquid`
- `blocks/hotspot.liquid`
- `blocks/icon.liquid`
- `blocks/image-card.liquid`
- `blocks/image-comparison.liquid`
- `blocks/image-text-card-grid-item.liquid`
- `blocks/image.liquid`
- `blocks/localization.liquid`
- `blocks/logo.liquid`
- `blocks/marquee.liquid`
- `blocks/menu.liquid`
- `blocks/metafield.liquid`
- `blocks/pagination.liquid`
- `blocks/parallax-item.liquid`
- `blocks/payment-icons.liquid`
- `blocks/policy-links.liquid`
- `blocks/popup.liquid`
- `blocks/press-item.liquid`
- `blocks/press-quotes.liquid`
- `blocks/previous-and-next-posts.liquid`
- `blocks/product-accordion.liquid`
- `blocks/product-badges.liquid`
- `blocks/product-buy-accelerated-checkout.liquid`
- `blocks/product-buy-add-to-cart.liquid`
- `blocks/product-buy-buttons.liquid`
- `blocks/product-buy-quantity.liquid`
- `blocks/product-callout-gallery.liquid`
- `blocks/product-callout.liquid`
- `blocks/product-card-compact.liquid`
- `blocks/product-card.liquid`
- `blocks/product-description.liquid`
- `blocks/product-inventory.liquid`
- `blocks/product-list-banner.liquid`
- `blocks/product-list.liquid`
- `blocks/product-pickup-availability.liquid`
- `blocks/product-price.liquid`
- `blocks/product-recommendations.liquid`
- `blocks/product-sticky-add-to-cart.liquid`
- `blocks/product-title.liquid`
- `blocks/product-variant-picker.liquid`
- `blocks/promo-card.liquid`
- `blocks/row.liquid`
- `blocks/scroll-to.liquid`
- `blocks/scrolling-card.liquid`
- `blocks/scrolling-image.liquid`
- `blocks/shop-the-look-product.liquid`
- `blocks/shop-the-look-products.liquid`
- `blocks/slide.liquid`
- `blocks/slideshow-slide.liquid`
- `blocks/social-links.liquid`
- `blocks/spacer.liquid`
- `blocks/tab-layout.liquid`
- `blocks/tabs-view-all-button.liquid`
- `blocks/tags-and-sharing.liquid`
- `blocks/testimonial-item.liquid`
- `blocks/text.liquid`
- `blocks/timeline-list.liquid`
- `blocks/timeline-slide.liquid`
- `blocks/video.liquid`
- `blocks/view-all-button.liquid`
- `sections/404.liquid`
- `sections/announcement-bar.liquid`
- `sections/article.liquid`
- `sections/blog-posts.liquid`
- `sections/breadcrumbs.liquid`
- `sections/cart-drawer.liquid`
- `sections/cart.liquid`
- `sections/collection-list-thumbnails.liquid`
- `sections/collection-page-breadcrumb.liquid`
- `sections/collection-tabs.liquid`
- `sections/collection.liquid`
- `sections/collections-with-background.liquid`
- `sections/featured-blog-posts.liquid`
- `sections/featured-collection-banner.liquid`
- `sections/featured-collection.liquid`
- `sections/featured-product.liquid`
- `sections/gallery-custom.liquid`
- `sections/hero.liquid`
- `sections/hotspot-full-width-carousel.liquid`
- `sections/hotspot-gallery.liquid`
- `sections/hotspot.liquid`
- `sections/icon-with-text-custom.liquid`
- `sections/parallax.liquid`
- `sections/password.liquid`
- `sections/product-information.liquid`
- `sections/product.liquid`
- `sections/quick-add.liquid`
- `sections/quick-view.liquid`
- `sections/recently-viewed-card.liquid`
- `sections/related-posts.liquid`
- `sections/scrolling-text-star-separator.liquid`
- `sections/search-overlay.liquid`
- `sections/search.liquid`
- `sections/slideshow.liquid`
- `sections/zoom-image-banner.liquid`
- `snippets/accordion-details.liquid`
- `snippets/badge.liquid`
- `snippets/block-animation-attributes.liquid`
- `snippets/carousel-navigation-icon.liquid`
- `snippets/cart-surface-style.liquid`
- `snippets/collection-card-render.liquid`
- `snippets/collection-column-icon.liquid`
- `snippets/comparison-table-column-content.liquid`
- `snippets/comparison-table-column-shell.liquid`
- `snippets/comparison-table-row-content.liquid`
- `snippets/comparison-table-row-value-content.liquid`
- `snippets/comparison-table-value.liquid`
- `snippets/component-overlay.liquid`
- `snippets/deferred-stylesheet.liquid`
- `snippets/form-field.liquid`
- `snippets/gallery-strip-item-styles.liquid`
- `snippets/header-localization-styles.liquid`
- `snippets/heading-size-token.liquid`
- `snippets/hero-styles.liquid`
- `snippets/icon.liquid`
- `snippets/image-comparison.liquid`
- `snippets/image.liquid`
- `snippets/layout-flow-group-style.liquid`
- `snippets/layout-flow-style.liquid`
- `snippets/localization-flag.liquid`
- `snippets/localization-overlay.liquid`
- `snippets/marquee-letter-spacing.liquid`
- `snippets/media-background.liquid`
- `snippets/media-card.liquid`
- `snippets/pagination-pages.liquid`
- `snippets/pickup-availability-stores.liquid`
- `snippets/price.liquid`
- `snippets/product-badges.liquid`
- `snippets/product-callout-hotspot.liquid`
- `snippets/product-callout-runtime.liquid`
- `snippets/product-card-image.liquid`
- `snippets/product-card-metafield.liquid`
- `snippets/product-card-placeholder.liquid`
- `snippets/product-card-price.liquid`
- `snippets/product-card-quick-add-overlay.liquid`
- `snippets/product-card-quick-add.liquid`
- `snippets/product-card-quick-view.liquid`
- `snippets/product-card-swatches.liquid`
- `snippets/product-card-title.liquid`
- `snippets/product-card.liquid`
- `snippets/product-collection-grid.liquid`
- `snippets/product-hotspot.liquid`
- `snippets/product-inventory-status.liquid`
- `snippets/product-list-promo-items.liquid`
- `snippets/product-list-promo-styles.liquid`
- `snippets/product-media-lightbox.liquid`
- `snippets/product-media.liquid`
- `snippets/search-query-fields.liquid`
- `snippets/section-content-slot.liquid`
- `snippets/share-button.liquid`
- `snippets/size-style.liquid`
- `snippets/slideshow-image.liquid`
- `snippets/social-icon.liquid`
- `snippets/social-links.liquid`
- `snippets/swatch-option.liquid`
- `snippets/swatch.liquid`
- `snippets/swiper-carousel.liquid`
- `snippets/swiper-navigation.liquid`
- `snippets/swiper-pagination.liquid`
- `snippets/tab-layout-styles.liquid`
- `snippets/theme-button.liquid`
- `snippets/tooltip.liquid`
- `snippets/variant-picker.liquid`
- `snippets/video.liquid`
- `snippets/view-all-button.liquid`

## Performance follow-up — 2026-10-11

- `assets/slideshow.js`, `sections/slideshow.liquid`: animate pagination in CSS,
  poll slide timing at 10 Hz after page load; preserve Essen hover/focus-visible,
  touch, viewport, visibility and unload behavior. No preset or geometry change.
- `assets/block-animations.js`: batch visibility reads before startup DOM writes.
- `assets/critical.css`, `assets/swiper-carousel.css`: move existing overlay
  pagination geometry into critical CSS so deferred styles do not move controls.
- `assets/product-media.js`: preserve thumbnail button semantics with Swiper.
- QA: 28 local scoped tests pass, slideshow schema JSON and diff whitespace pass.
  Test files are excluded from delivery at the owner's request. Remote baseline
  Performance is 52 mobile; new-code upload, Theme Check and after measurement
  await renewed CLI authentication. See `docs/qa/essen-performance-2026-10-11.md`.

## Theme inheritance — 2026-10-13

Arche inherits the complete storefront implementation, schemas, presets, templates, saved settings and customization record from `theme/essen-theme` at `acb809562bf01eb1f301e88439504d3c93bfc141`. The base checkpoint above is inherited from Essen; future base updates continue to use personal `main`. Existing Arche Git history is preserved. Test files remain local to their original branches and are not part of this inheritance commit.

## Variant updates — 2026-10-13

Tab Layout Gap (ARCHE-ESSEN-TAB-LAYOUT-001, pending for Essen), Rounded progress (ARCHE-ESSEN-SLIDESHOW-002 revision 2, pending), and custom section block targeting (ARCHE-ESSEN-CUSTOM-SECTIONS-001, pending) are tracked for Essen in [Arche → Essen](../variant-updates/arche-to-essen.md). Only icon/navigation layout, presets, Figma image/content and slide order remain Arche-specific and are excluded from variant transfer.


## 2026-10-13 — Tab Layout Gap binding (ARCHE-ESSEN-TAB-LAYOUT-001, revision 1)

- Update source: [Arche → Essen variant update](../variant-updates/arche-to-essen.md#arche-essen-tab-layout-001--gap-của-tab-layout). Status: source Arche verified by local CSS/Theme Check; Essen pending. Source changes uncommitted.
- `snippets/tab-layout-styles.liquid`: map Gap desktop/mobile to `.tab-layout__navigation` on both axes; remove fixed Button gaps. Preserve schema, Liquid normalization, colors, font, trigger interaction and merchant values. Section Gap remains independent.
- `sections/collection-tabs.liquid`: replace fixed Arche desktop/mobile tab gaps with the same block tokens; preserve desktop rail and mobile wrapping. Gap=0 retains the continuous desktop rail. Keep these bindings during base merges; reconcile upstream equivalents rather than restoring fixed gaps.
- Source evidence: 240 real-CSS Chrome cases for Arche (1920/768/375px, gaps 0/8/16/24/100, Underline/Button, section/navigation directions and reversed CSS order), plus independent desktop=24/mobile=8 checks. Arche: diff check PASS, Theme Check 0 errors / 5 existing settings-count warnings. Essen changes were applied prematurely and reverted; the source doc is guidance for a later user-requested audit/update. Shopify Theme Editor save/reload and store upload/publish not performed.

### 2026-10-13 — Rounded progress toàn theme

- Update nguồn: `ARCHE-ESSEN-SLIDESHOW-002`, revision 2, [Arche → Essen](../variant-updates/arche-to-essen.md#arche-essen-slideshow-002--rounded-progress). Implementation local chưa commit; Essen pending, chưa sửa/upload/publish.
- `assets/swiper-carousel.css` cung cấp rounded reveal chung cho Bullets của mọi style, Slideshow segments và native progressbar. Fill giữ kích thước gốc; clip-path tạo đầu bo tròn, không scale radius. Slideshow dùng duration và trạng thái pause/resume từ clock hiện có. Native progressbar track/fill dùng cùng radius token với pill fallback; radius 0 vẫn hợp lệ.
- `assets/swiper-carousel.js` chuyển native pagination progress sang fraction theo snapGrid/group/loop, hỗ trợ vertical/opposite; update theo event và cleanup khi destroy. `assets/carousel-block.js` chuyển manual-loop progress sang logical fraction; `assets/slideshow.js` gắn class fill và active chung. CSS segment trong Slideshow giữ geometry/màu hiện có. Không sửa vendor Swiper hoặc settings/preset/content trong lần fix này.
- Audit cart shipping và bundle progress: dùng width + border-radius, không có lỗi scale radius. Tab underline hiện square, giữ nguyên.
- QA: **108 Chrome fixture cases PASS** dùng CSS/JS thật: 59 shared Bullets/Slideshow cases (375/768/1920px, LTR/RTL, static/autoplay, stylesheet order, reduced motion, segment navigation, section unload/load) và 49 native/manual-loop cases (grouped snap pages, horizontal/vertical/opposite, navigation, radius 6px, clone logical fraction, destroy/reinit). Native grouped pages lấy snapGrid thực của Swiper, không giả định slides/group luôn bằng số trang.
- JavaScript syntax và `git diff --check` PASS. Theme Check toàn repo: **0 errors / 12 existing warnings**; `node theme-base check-custom arche-theme` PASS, bao phủ 130 custom files. Bổ sung dòng record cho binding Gap đã có ở Collection tabs từ tác vụ trước.
- Giới hạn: QA bằng local browser fixture; chưa kiểm tra Theme Editor live add/duplicate/save/reload hoặc upload preview của revision 2. Chưa có QA đích Essen; nguồn pass không đổi trạng thái đích.


## Image card top seam — 2026-10-13

Owner approved CSS fix after a 592×592 image-only trial still showed the top seam. `blocks/image-card.liquid` bleeds image background media 1px on all sides with width/height +2px inside the existing clipped card. Scheme, overlay, card box and video are preserved; crop changes by at most 1px per edge. Desktop and mobile 375px preview no longer show the dark top line. Keep the scoped rule during base updates until an equivalent upstream fix is verified. Variant transfer: [ARCHE-ESSEN-IMAGE-CARD-001](../variant-updates/arche-to-essen.md#arche-essen-image-card-001--vệt-đen-ở-mép-ảnh), pending; the receiving variant must reproduce the defect before applying.

### Product callout picture coverage fix — 2026-10-13

assets/component-product-callout.css: set height: 100% on the existing media image selector, including picture > img. Fixed height modes previously exposed the dark media background at narrower editor/desktop widths because the child image retained its intrinsic ratio height. Keep image coverage with object-fit: cover when reviewing upstream changes. This repair is distinct from the theme's existing height-option calibration.

### Arche hotspot Dot and mobile sheet — 2026-10-13

Owner requested custom Dot matching Figma, spreading rings, Dot preset/instance, and mobile bottom sheet instead of tooltip. Source Dot asset da50c.svg: 28px viewport, circle r8 with white 8px stroke; original SVG kept in snippets/hotspot-dot.liquid without duplicate SVG IDs. Dot changes are scoped to Hotspot: Product callout; other icon choices retain their behavior. Existing ring animation supplies two staggered spreading rings and respects reduced motion.

Mobile controller creates one native modal dialog per initialized callout, uses existing product/content card data, locks document scroll, closes by button/backdrop/Escape, restores focus and trigger ARIA, closes when changing to desktop and removes the dialog/listeners on editor unload. Desktop retains anchored product popovers. Preset and shop_the_look instance use icon dot. Dependencies: snippets/product-callout-hotspot.liquid, snippets/hotspot-dot.liquid, snippets/product-callout-runtime.liquid, assets/component-product-callout.css. Preserve these changes on base updates and review shared runtime dependencies together.

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


## Variant picker media intent — 2026-10-13

| File | Base behavior | Arche implementation | Reason | Update rule |
| --- | --- | --- | --- | --- |
| `snippets/variant-picker.liquid` | Option groups identify index and presentation. | Adds `data-option-swatch` from existing color/native-swatch classification. | Distinguish swatch changes from size changes across shared product surfaces. | Preserve native/fallback classification and all swatch presentations. |
| `assets/variant-picker.js` | Every option change updates legacy media and emits variant state. | Emits `updateMedia`; non-swatch change skips legacy media update while commerce state updates. | Preserve browsed images when selecting size. | Keep initial/history/external defaults and event compatibility. |
| `assets/product-media.js` | Every variant event filters/rebuilds or navigates the gallery. | Updates current variant ID but skips media changes for explicit `updateMedia=false`. | Shared behavior for main, Featured product, Quick view and Quick add. | Keep gallery/thumbnail position on non-swatch changes; reconcile with upstream filters/lifecycle. |

Validation: 17 targeted tests PASS; Theme Check 0 errors / 12 warnings outside this patch; git diff --check PASS. Live storefront/Theme Editor QA pending. Local patch uncommitted. Transfer tracked as [ARCHE-ESSEN-VARIANT-PICKER-001](../variant-updates/arche-to-essen.md#arche-essen-variant-picker-001--chỉ-chuyển-ảnh-khi-đổi-swatch); Essen must reproduce the issue before applying, currently pending with no upload/publish.

## Gallery Image Width restored to main — 2026-10-13

Restored `blocks/_marquee-image.liquid` to personal main, removing the numeric width customization and runtime 50–500px clamp. Desktop/Mobile use the original 50–400px ranges in 5px steps with no info text. Gallery preset and homepage image widths migrated from 462/182px to the nearest supported 400/180px; existing media and order retained. “Everyday looks” now belongs to an existing centered Header block in both compositions.

## Blog list desktop column minimum (2026-10-13)

| File | Base behavior | Arche customization | Reason | Base-update handling |
| --- | --- | --- | --- | --- |
| `blocks/blog-list.liquid` | Desktop columns offers 2–6 and normalizes values below 2 to 4. | Offers 1–6 and accepts 1 in Liquid normalization; default remains 4. | Explicit owner request for the Arche Figma Blog list single-column preset. | Preserve both the option and the minimum-value guard; verify grid and carousel settings after upstream updates. |

## Arche homepage Blog list layout — option-first revision (2026-10-13)

| File | Base behavior | Arche implementation | Reason | Update rule |
| --- | --- | --- | --- | --- |
| `sections/blog-posts.liquid` | Shared horizontal card columns; mobile action follows the list. | Arche blog guard; Grid/Desktop columns=1 reverses desktop media to the right (max 448px), and bottom divider only between items. Mobile keeps image-first and divider additionally requires Mobile columns=1. Left-aligned mobile Header/action share a row. Page-width content is capped at 1600px while respecting smaller global page widths and margins. Local Custom typography supplies missing leading/tracking. | Missing section-local geometry controls in Figma. | Keep geometry guards; Carousel and multiple-column rules remain shared. Full-width setting bypasses local page-width cap. Arche-only: do not transfer to Essen. |
| `blocks/blog-list.liquid` | No state classes for Grid single-column. | Adds Grid/Desktop columns=1 and Grid/Mobile columns=1 markers; keeps all layout/runtime controls unchanged. | Gate Arche-only divider/geometry precisely. | Keep markers and numeric normalization; do not transfer this theme-only composition behavior. |
| `blocks/blog-card.liquid` | Child max-width=100% overrides size-style max-width option. | Size-style children retain their configured desktop/mobile max-width, clamped to card width. | Allow the existing Group width option to work inside the card. | Preserve size-style binding on Arche. Owner excludes this fix from the Essen transfer scope. |
| `blocks/header.liquid` | Inherit fallback ignores parent --text-align-default. | Header/leaf text alignment falls back to parent token on both viewports; local alignment still wins when inheritance is off. | Repair existing Inherit parent alignment option. | Shared candidate [ARCHE-ESSEN-HEADER-ALIGNMENT-001](../variant-updates/arche-to-essen.md#arche-essen-header-alignment-001--header-kế-thừa-alignment-của-section); Essen pending, check before applying. |

Configuration uses existing Group blocks: content max-width 770px (nearest supported 10px step to Figma 768px), desktop/mobile content gap 20/16px; heading groups gap 12px and 10px; metadata horizontal gap 4px with existing Date, Text separator and Tag children. Existing Custom heading sizes set 40px/24px. Card padding-left=0 and mobile padding-top=32; section spacing 96px/56px and header/list gap 40px. Mobile description remains the existing 3-line limit. No CSS nth-child metadata grid or hard-coded content gaps remains.

Blog list gap option is bounded at 40px. The single-column desktop custom adds 8px to the selected gap for Figma's 48px before/after divider; mobile uses the selected 40px gap. Changing the option still changes both spaces. Divider is border-bottom on all items except the last; it never applies to Carousel or desktop columns >1. Article media and dates are retained. The confirmed default store author Lê Bình Minh uses the existing Text child because dynamic author metadata rendered a placeholder on the preview; merchant can edit this demo copy without code changes. The mobile Figma duplicates September 26 on article two, but the owner-approved September 18 publication date remains the canonical article data.

QA: preview source confirms desktop images 448×336, content Group max-width 770px, Header Center/Right and mobile Right/Center inheritance. Carousel and Grid 2-column have 0px divider and retain shared grid card layout. All temporary QA settings restored to the final Arche Grid/1-column preset. No Essen implementation, media, upload or publication is authorized by this documentation update.


Final Theme Check: 0 errors / 12 existing warnings outside the changed files. git diff --check PASS.


## Size guide follows Button Tertiary — 2026-10-13

`snippets/variant-picker.liquid` uses shared `btn btn-tertiary` and label/text markup. Removed all size-guide trigger CSS from `assets/critical.css`; global button typography, colors, hover and underline settings now own presentation. Existing guide ARIA/runtime remains. Preserve this foundation binding when merging upstream. Transfer: ARCHE-ESSEN-SIZE-GUIDE-001, Essen pending. Full Theme Check/diff check required before commit; live editor QA pending.


## Hotspot mobile uses the shared overlay shell — 2026-10-13

`snippets/product-callout-runtime.liquid` clones a shell rendered by `component-overlay`, then delegates focus, Escape/backdrop/close, drag dismissal, motion and lifecycle to `ThemeOverlay`. `assets/component-product-callout.css` removes the private dialog geometry, fixed 20px radius, backdrop, handle and close styling; shared overlay tokens now own these. Existing product content grid and desktop tooltip are retained. Destroy closes immediately and disposes the overlay controller on editor unload. Preserve shared shell/runtime reuse during base updates. Live storefront/editor QA pending.

Validation for the shared hotspot shell: Chrome local fixture at 320/375/767px passes shared radius/handle, focus, scroll lock, Escape/backdrop/close, breakpoint dismissal and editor unload/reload with no runtime errors. 32 related overlay/product/picker tests pass. Full Theme Check: 0 errors / 12 existing warnings; diff check passes. This fixture does not verify a live Theme Editor save/reload.


## Scrolling cards Stack transition restore — 2026-10-13

The Shopify editor merge removed the section's `stack_effect` schema and `data-stack-effect` binding while the runtime retained both effects. Restored the existing section-owned Scale/Fade control, its Fade default/preset, and the homepage Fade selection. Preserve schema, data attribute and runtime together during future editor/base merges. No Card-level option is introduced by this fix.


### Shared form input CSS warning fix — 2026-10-13

Owner requested warning fixes and a variant-update handoff for Essen, then explicitly deferred the five settings-count warnings. `assets/critical.css` now declares `.form__control.form__control--input` with the existing form exclusions inside the existing foundation `:where` rule. This selector is a subset of the existing form-control selector, with the same declarations and zero specificity; existing component overrides and merchant settings remain intact. Resolves seven `ValidScopedCSSClass` warnings without relying on another component's stylesheet.

Validation: Theme Check 0 errors / 5 deferred `ExcessiveSettingsCount` warnings; 18 product controls/overlay/search tests PASS; git diff --check PASS. Recommended settings threshold remains 40, with no check disabled. Live storefront/Theme Editor QA pending. Transfer instructions: [ARCHE-ESSEN-FORM-INPUT-CSS-001](../variant-updates/arche-to-essen.md#arche-essen-form-input-css-001--cảnh-báo-css-input-dùng-chung). Essen must audit its own warning/CSS gap before applying; target pending, no Essen code change or store upload/publish. Local source patch uncommitted.


## Blog author source restored — 2026-10-13

Removed the fixed author Text child from homepage Blog posts and its section preset. The author slot now uses existing blog-card-meta with show_author=true, show_date=false and empty author_prefix, consuming the contextual article.author. Position, small text role and #999999 color remain. This supersedes the earlier fixed demo-author configuration in the blog receipt; no store article mutation. Browser preview confirms both articles render Author name from store. JSON/schema validation and diff check pass; full Theme Check evidence is recorded in this task.

## Lighthouse optimization with preset layout preserved — 2026-10-13

The owner requested maximum practical Lighthouse optimization, then required the current preset layout to remain unchanged. This patch leaves section schemas, merchant settings, preset order, typography, colors, dimensions and spacing unchanged. Existing concurrent edits are outside this optimization's ownership.

- Move unchanged static CSS from 25 optional section owners and seven optional block owners into `assets/section-*.css` / `assets/block-*.css`, loaded synchronously by the matching owner. This removes unused rules from Shopify CLI's universal development bundle while preserving layout reservation on pages/editor renders that use these components. Extracted rule bodies match their original source exactly. Preserve each owner/asset reference together during upstream merges; do not restore the same rules in `{% stylesheet %}` without removing the asset reference.
- `sections/scrolling-cards.liquid` uses the existing viewport module loader below the first two template positions; top-of-page and Theme Editor instances still load immediately. `assets/scrolling-cards.js` exports the loader initialization hook and retains its existing stack effects, resize handling and editor unload cleanup. Keep export and marker together.
- `assets/slideshow.js` asks Swiper to preload one adjacent slide in autoplay mode so artwork is ready before the unchanged transition deadline. The first slide keeps its existing high-priority responsive preload; manual-only slideshows retain native lazy loading. Preserve the autoplay condition and existing timing/effects.
- `snippets/meta-tags.liquid` falls back to the existing Open Graph description when the page description is absent. `blocks/blog-card-button.liquid` supplies article context through the optional visually hidden `accessible_description` argument of `snippets/theme-button.liquid`; the visible Read more label is unchanged.
- `layout/theme.liquid`, `assets/critical.css` and the storefront locale provide a keyboard-only Skip to content link. Header account blocks only request `customer-account-main-menu` when that menu exists, otherwise using Shopify's default account menu.

Validation: responsive before/after HTML fixtures at 1440px desktop and 375px mobile show identical width and height for all 13 homepage sections. This compares the captured preview state, not later concurrent editor changes. Scrolling cards stay unloaded at the top of the page and initialize when their section approaches the viewport. All 32 extracted stylesheets match original rules; 60 related runtime tests pass, including three new deferred scrolling-card/editor lifecycle tests. The full existing suite has the same 27 failing tests in both optimization and reconstructed baseline snapshots (196/223 pass, including the three new tests); those failures are not introduced by this patch. Theme Check: 0 errors, five existing ExcessiveSettingsCount warnings. Diff check passes.

Measured universal dev CSS bundle: 480,566 → 348,995 bytes (131,571 bytes / 27.4% lower). Latest local Lighthouse: mobile Performance 46 → 54, desktop Performance 71 → 72, Accessibility 94 → 94 and SEO 85 → 100 on both. Mobile TBT 390 → 120ms; desktop TBT remains 0ms. CLS is 0.014 mobile / 0.001 desktop. The Shopify Liquid skill validator passes all 75 changed theme files using its cached official schemas after the documentation updater cannot reach GitHub from the sandbox. Runs warn that the page exceeded the load timeout. Development preview serves uncompressed/no-cache resources, includes hot reload and Shopify account/checkout/analytics requests, so these scores are provisional and must not be represented as production benchmarks. HTTPS draft preview is password protected; no store password, analytics, checkout functionality, publication or live theme was changed. Existing contrast and small pagination targets are retained to honor the preset appearance/geometry requirement.


## MAIN-ARCHE-BLOCK-ANIMATION-001 — 2026-10-13

Replaced `assets/block-animations.js` byte-for-byte with personal main `e84d0689249b5ae26d3c5c066c90348e4aae06f4`. Shared automatic entrances now include Image card, Product/Promo card, Blog card, Collection card, testimonials and supported icon/text lists, with main row/tab staggering and nested-parent ownership. Restored the body motion switch; removed the Elara head boot guard, initialization hiding and custom Rotate words CSS lifecycle. A small CSS compatibility layer keeps existing leaf hooks hidden only while pending and supplies inline word spans to the main Web Animations runtime. These CSS/leaf hooks remain implementation differences and stay covered by the existing critical.css, leaf-block and attribute-snippet records.

No block/schema rebuild is required for this main revision: old → new block/setting mapping is identity. All 276 block/section/schema/template/group/settings files are byte-identical to the pre-update snapshot; all 399 animation setting entries, including None/0, content, media, IDs and order are preserved. Local snapshot and extracted values: `/private/tmp/arche-animation-before.json`, `/private/tmp/arche-animation-presets.json`. Removed the obsolete runtime entry from the active Customizations table; preserved unrelated customizations and historical receipts.

Validation: 23 main animation regression tests PASS, JavaScript syntax PASS, Theme Check 0 errors / 5 existing deferred settings-count warnings. Shopify Liquid helper search failed to fetch and its validator lacks @shopify/theme-check-common in the installed plugin; full Shopify CLI Theme Check completed successfully. Live storefront/Theme Editor lifecycle QA remains pending. No commit, push, theme upload or publish.

Browser QA local: 8 Chrome cases PASS tại 375/1920px — Image card entrance, nested child ownership, Rotate words, motion on/off, reduced motion và no-JS. Đây là fixture dùng CSS/JS thật, không phải QA storefront/Theme Editor live.

Customization coverage: checker báo các path ngoài phạm vi migration chưa được ghi nhận (gồm extracted component CSS và các section/block khác); không đánh dấu full coverage PASS. Các implementation path của migration là assets/block-animations.js (đã bằng main), assets/critical.css và layout/theme.liquid (vẫn có record).

## Header navigation — variant handoff 2026-10-14

[Hướng dẫn update variant Header](../variant-updates/arche-to-essen.md#header-navigation--hướng-dẫn-update-variant-ngày-2026-10-14): ARCHE-ESSEN-HEADER-LOGO-002, HEADER-GAP-003, HEADER-SEARCH-004 và HEADER-BUTTON-005. Nguồn implementation 8cbc1913/ad3fc68d; final Arche preset tại 26acff38: Sticky Always, Bottom separator Line, transparent enabled, giữ hai logo global cũ. Essen pending; kiểm tra lỗi/contract đích trước khi chuyển patch nhỏ, không copy preset/menu/media Arche. QA nguồn 21 Chrome fixtures pass, Theme Check 0 errors/5 warnings; live QA đích theo dõi riêng.

## Featured product Social links correction — 2026-10-14

Replaced the nested Group of four Icon blocks with the existing Social links block in the first Featured product preset and homepage instance. Retained the Share text and outer Group. Block settings use 16px icons, 12px desktop/mobile gap, zero padding/border and no shadow. The shared icons reuse the original Figma SVG paths previously saved in that preset. Global Facebook/X/Instagram/Pinterest URLs are set to `#` until merchant URLs are configured; shared Social links instances consume these settings. Local preview on port 9300 was unavailable, so live storefront and Theme Editor QA remain pending.

Header reload follow-up: `assets/critical.css` first-paint layout now keeps desktop navigation in flow beside a Left logo, uses the configured menu/actions gaps, centers the logo vertically and matches the mobile toggle box before initialization. Preserve this alignment with the runtime's final columns. [ARCHE-ESSEN-HEADER-LOAD-006](../variant-updates/arche-to-essen.md#arche-essen-header-load-006--header-không-nhảy-menu-khi-tải-lại) records source QA and pending Essen audit; 41 Chrome fixture tests pass.

## Lighthouse follow-up and Essen handoff — 2026-10-14

Source checkpoint `04dc9f04410f76f2c502752a40476993b29c47c9` plus local patch. Hidden mega-menu banner images now explicitly use lazy loading and auto responsive sizes; keep source, candidate widths, alt, Shopify dimensions and existing geometry. The main animation runtime caches list membership/row positions inside each scan and reads each card stagger token once. Caches expire each scan so tab activation, resize and Theme Editor updates remeasure correctly. Current main animation lifecycle and the independent Press fix remain.

Validation: 20 scoped tests pass, including direct before/after parity for 24/100-card delays and resize. For 24 cards, row geometry reads decrease from 600 to 24 and list queries from 24 to one; this is a fixture count, not a live TBT/score claim. Actual Liquid banner render passes; JS syntax and diff checks pass. Theme Check: 362 files, zero errors / five existing settings-count warnings. Customization checker still reports historical extracted CSS/owner and other implementation omissions outside this patch; full coverage remains incomplete. Optional broader fixtures cannot run because local Playwright is absent and a historical promo test references a removed snippet; focused production-runtime tests above pass.

Read-only HTTPS Chrome inspection confirms owner-selected draft `192282820907`, assets t/34, eager/high-priority first hero and two initially default-loading 1000px menu images. CLI requires fresh Shopify sign-in; HTTP clients reach the password page. No new Lighthouse score is claimed and no patch upload/publish occurred. Source storefront/editor QA remains pending.

Transfer all applicable performance improvements through [Lighthouse variant update](../variant-updates/arche-to-essen.md#lighthouse--hướng-dẫn-update-variant-ngày-2026-10-14): ARCHE-ESSEN-LIGHTHOUSE-CSS-001, ANIMATION-002, MEDIA-003, RUNTIME-004 and ACCESS-005. CSS extraction, scrolling-card lazy runtime, adjacent-slide autoplay preparation, meta/link/skip/account improvements already exist at the checkpoint; only animation scan caching and menu image hints are new in this follow-up. Essen must reproduce its own gap and apply only the relevant implementation, preserving preset/layout/media and recording independent target QA. Essen remains pending; no target mutation.

## Lighthouse release validation — 2026-10-14

Reconciled historical extracted-CSS owner/asset paths and the existing account, Blog link, Grid metadata and Header overlay implementation differences into the Customizations table after comparing each missing path with base checkpoint 75baa7c. This documents existing code; no extra storefront implementation was changed by the ledger repair. Release customization check PASS: 204 implementation paths covered. This supersedes the earlier coverage-pending note. Scoped tests, actual Liquid render, full Theme Check and diff check are rerun before commit; tests/generated reports remain local. HTTPS draft upload and a fresh live Lighthouse score still await Shopify CLI sign-in.

### 2026-10-14 — Rebuild from personal main and reapply custom logic

- Previous main checkpoint: `75baa7c890ee43f9a7c97ad3aee49961ea295f2f`.
- Updated through main: `efbbac9e29963002df775cf40fd34ca6fe991bd8`.
- Main commits included: 2.
  - `e84d0689249b5ae26d3c5c066c90348e4aae06f4` — chore(base): update base with 4 upstream commits through 30d272ad
  - `efbbac9e29963002df775cf40fd34ca6fe991bd8` — chore(base): update base with 16 upstream commits through 0fa58707

- Scope: Carousel, Slide, Testimonial: split, Carousel split, Slide split, Columns/Column, promotion cards and Collection tabs. Main supplies implementation, ownership, slots and lifecycle. Theme templates supply content/order/layout; custom logic is re-applied additively after the rebuild.
- Placement/context: retain existing JSON templates, section-group composition and Shopify resource context. No store picker save, media upload or publish.
- Migration: `grid → columns` with `_columns-column` wrappers; `_slide_split → slide_split` preserving static `image`/`content` IDs. Former static generic header/carousel slots are converted to dynamic blocks on the new main owner without dropping their content/order.
- Layout compatibility: preserve desktop/tablet/mobile column counts through main custom breakpoint controls, gaps and padding values where the new contract supports them. Preserve saved pill/slightly-rounded Slide shapes. Carousel desktop gap supports 0–100px with step 1 to retain the existing 56px preset.
- Custom: common Carousel policy restores independent previews (Arche/Essen N + 2/7; Elara/Malandra 1.2 for one mobile column); Lighthouse Slide CSS loading on Arche/Essen; original Split SVGs on Elara/Malandra; Arche Columns metadata; tab rail/header styling and explicit style dependency; shared rounded progress and blog auto-height where recorded.
- Main lifecycle: elapsed-time autoplay, observer/destroy cleanup, versioned shared imports and deferred Collection tabs. Theme-specific global Press/entrance geometry behavior is retained outside the rebuild.
- Promotion cards keep saved media, content, position, alignment, column spans and padding; new overlay controls use main defaults.
- Presets captured from migrated templates:
  - `templates/collection.json#main` → `sections/collection.liquid` / **Arche: main**.
  - `templates/index.json#collection_tabs` → `sections/collection-tabs.liquid` / **Arche: collection tabs**.
  - `templates/index.json#image_cards` → `sections/custom-section.liquid` / **Arche: image cards**.
  - `templates/index.json#icon_with_text_custom` → `sections/icon-with-text-custom.liquid` / **Arche: icon with text cus**.
  - `templates/index.spinel-sync.json#collection_tabs_ihC66t` → `sections/collection-tabs.liquid` / **Arche: collection tabs ih**.
  - `templates/index.spinel-sync.json#icon_text_inline_eN4cRW` → `sections/icon-text-inline.liquid` / **Arche: icon text inline e**.
  - `templates/index.spinel-sync.json#gallery_carousel_X7PGND` → `sections/gallery-carousel.liquid` / **Arche: gallery carousel X**.
  - `templates/index.spinel-sync.json#icon_text_cards_qT6mLV` → `sections/icon-text-cards.liquid` / **Arche: icon text cards qT**.
  - `templates/page.about-us.json#philosophy` → `sections/custom-section.liquid` / **Arche: philosophy**.
  - `templates/page.about-us.json#story_lifetime` → `sections/custom-section.liquid` / **Arche: story lifetime**.
  - `templates/page.about-us.json#story_gold` → `sections/custom-section.liquid` / **Arche: story gold**.
  - `templates/page.about-us.json#story_generations` → `sections/custom-section.liquid` / **Arche: story generations**.
  - `templates/page.about-us.json#service_promises` → `sections/custom-section.liquid` / **Arche: service promises**.

- Change statistics: 84 code/configuration/support-document paths plus this customization log; 1 obsolete block files removed after reference migration.
- Changed paths:
  - `assets/block-slide.css`.
  - `assets/carousel-block.js`.
  - `assets/carousel-runtime.js`.
  - `assets/carousel-slide.js`.
  - `assets/column-background-video.js`.
  - `assets/product-collection-carousel.js`.
  - `assets/swiper-carousel.css`.
  - `assets/swiper-carousel.js`.
  - `assets/testimonial-split.js`.
  - `blocks/_columns-column.liquid`.
  - `blocks/blog-grid.liquid`.
  - `blocks/blog-list.liquid`.
  - `blocks/carousel.liquid`.
  - `blocks/carousel_split.liquid`.
  - `blocks/collection-card.liquid`.
  - `blocks/collection-list-items.liquid`.
  - `blocks/collection-promo.liquid`.
  - `blocks/collection-tab.liquid`.
  - `blocks/columns.liquid`.
  - `blocks/comparison-table.liquid`.
  - `blocks/gallery-header-group.liquid`.
  - `blocks/grid.liquid`.
  - `blocks/parallax-item.liquid`.
  - `blocks/product-list-banner.liquid`.
  - `blocks/product-list.liquid`.
  - `blocks/promo-card.liquid`.
  - `blocks/slide.liquid`.
  - `blocks/slide_split.liquid`.
  - `blocks/slideshow-slide.liquid`.
  - `docs/columns.md`.
  - `docs/swiper-carousel.md`.
  - `layout/theme.liquid`.
  - `locales/en.default.json`.
  - `locales/en.default.schema.json`.
  - `scripts/migrate-columns.cjs`.
  - `scripts/migrate-common-carousel-options.cjs`.
  - `scripts/migrate-testimonial-carousel.cjs`.
  - `sections/blog-posts.liquid`.
  - `sections/blog.liquid`.
  - `sections/bundle-builder.liquid`.
  - `sections/cart-recommendations.liquid`.
  - `sections/collection-list.liquid`.
  - `sections/collection-tabs.liquid`.
  - `sections/collection.liquid`.
  - `sections/collections-with-tabs.liquid`.
  - `sections/comparison-table-custom.liquid`.
  - `sections/countdown.liquid`.
  - `sections/custom-section.liquid`.
  - `sections/email-signup-dual-image.liquid`.
  - `sections/email-signup-form.liquid`.
  - `sections/email-signup-single-image.liquid`.
  - `sections/featured-blog-posts.liquid`.
  - `sections/featured-collection-banner.liquid`.
  - `sections/featured-collection.liquid`.
  - `sections/featured-product.liquid`.
  - `sections/footer.liquid`.
  - `sections/gallery-carousel.liquid`.
  - `sections/header.liquid`.
  - `sections/hero.liquid`.
  - `sections/hotspot-gallery.liquid`.
  - `sections/hotspot.liquid`.
  - `sections/icon-text-cards.liquid`.
  - `sections/icon-text-inline.liquid`.
  - `sections/icon-with-text-custom.liquid`.
  - `sections/image-comparison-split-custom.liquid`.
  - `sections/image-text-card-grid.liquid`.
  - `sections/location-map.liquid`.
  - `sections/parallax.liquid`.
  - `sections/press.liquid`.
  - `sections/rich-text.liquid`.
  - `sections/scroll-reading-text.liquid`.
  - `sections/scrolling-cards.liquid`.
  - `sections/shop-the-look-section.liquid`.
  - `sections/testimonial-carousel.liquid`.
  - `sections/testimonials-background-custom.liquid`.
  - `sections/testimonials-horizontal-custom.liquid`.
  - `sections/timeline.liquid`.
  - `snippets/product-list-promo-items.liquid`.
  - `snippets/theme-module-import-map.liquid`.
  - `templates/article.json`.
  - `templates/collection.json`.
  - `templates/index.json`.
  - `templates/index.spinel-sync.json`.
  - `templates/page.about-us.json`.
- Validation: full Theme Check at error level; 16 shared runtime/import-map tests per theme; Liquid/server-layout parity checks (20 Arche, 16 other themes); template content/media comparison showed no missing saved values. Static/dynamic slot references were checked. Tests/results stay local.
- Limit: storefront/browser and full interactive Theme Editor sessions have not been exercised for this batch.
- Retained code dependencies outside the rebuild remain listed in Customizations. No personal base-update-history file is propagated.

### 2026-10-14 — Align rebuilt option contracts with main

- Removed the accidental legacy `image_text_card_*`, parent border/radius, loop and transition controls from common Carousel. Removed the Theme carousel behavior header. Main setting order, choices, ranges and defaults are retained; the independent mobile preview checkbox is the only recorded custom addition. Old unused factory-preset gaps follow the supported main range; saved template gap values remain unchanged.
- Columns and `_columns-column` settings and child allow-lists were audited against main and already match; no extra optimization was introduced. Grid and `_slide_split` references have been migrated.
- Replaced the old Testimonial: Carousel factory preset/implementation with fresh main Testimonial: split, Carousel split and Slide split. There were no corresponding saved Testimonial: Carousel instances in these templates.
- Validation: main contract comparison, supported preset settings/children, shared lifecycle regressions and full Theme Check at error level. Test artifacts remain local.

- Slide audit: removed the non-custom legacy radius additions as well; `pill`/`slightly_rounded` saved choices map to main `rounded`. Layout/order/spacing and content remain preserved. Arche/Essen keep only the recorded CSS-loading customization; Elara/Malandra keep the recorded color simplification.


### 2026-10-14 — Update from personal main c8fab8a5

- Previous main SHA: `efbbac9e29963002df775cf40fd34ca6fe991bd8`.
- Updated main SHA: `c8fab8a5588b05f9577f3a2aaa2ac01744c1286f`.
- Included main commits:
  - `c8fab8a5588b05f9577f3a2aaa2ac01744c1286f` — chore(base): update base with 2 upstream commits through 73a1feac
- Owner explicitly approved removing `custom_columns` and `columns_per_breakpoint` from all four themes, schemas, presets and saved instances. Tablet now follows desktop from 768px; content and order are retained.
- Columns mobile swipe uses main Swiper with keyboard, reduced-motion and editor teardown. Unrelated custom implementations and existing local work are retained.
- Updated files:

```text
assets/columns-swipe.js
blocks/columns.liquid
docs/columns.md
locales/en.default.schema.json
scripts/migrate-columns.cjs
sections/custom-section.liquid
sections/icon-with-text-custom.liquid
templates/index.json
templates/page.about-us.json
```

- Preview statistics before this log line: 10 files, 154 additions, 140 deletions.


## Collection tabs deferred loading fix — 2026-10-14

- Owner authorized applying this scoped fix to all themes. Source: `shopify-theme-base` via personal `theme-base/main` (`c8fab8a5`).
- `blocks/tab-layout.liquid`: reuse base deferred-section request/cache and panel hydration; retain the current products until loading succeeds, preserve the last requested tab during observer updates, and abort stale requests on section unload.
- Keep theme markup, schema, configured collections, presets, layout, navigation and animation unchanged. Preserve this loading contract in future base updates.
- Validation: full Theme Check passes with zero errors; nine deferred-loading regression tests pass. Owner authorized committing and pushing this scoped fix. Tests stay local; existing theme customizations and unrelated work remain outside this commit.


## Autoplay pagination clock parity — 2026-10-14

- Owner requested all carousel Progress bar/Bullets to follow personal main. Source: `theme-base/main` (`c8fab8a5`).
- `assets/slideshow.js`: use main’s single elapsed-time clock, including hover, focus, visibility, drag and reduced-motion pauses; read number-ring progress from the slideshow root.
- `sections/slideshow.liquid`: remove the independent CSS animation clock; progress segments and bullets consume elapsed progress while preserving theme geometry, controls, schema and presets.
- `assets/swiper-carousel.css`: rounded native/manual progress fills consume the existing shared autoplay clock in horizontal, RTL and vertical modes. Non-autoplay behavior remains unchanged.
- Validation: 14 clock/lifecycle tests pass per theme; full Theme Check has zero errors (4–5 existing warnings). Browser QA fixtures load the actual theme JS/CSS and verify both pagination types on all four themes plus a mobile viewport. Arche storefront preview remains blocked by an unrelated icon-with-text preset upload error (`border_color`); full live Theme Editor QA was not completed.
- Preserve these clock bindings in future base updates. Tests remain local. Owner authorized commit/push after a passing Theme Check.

### 2026-10-15 — Apply shared icon, collection-tab and underline fixes

- Owner explicitly requests the new shared behavior in all variants, including customized files, while preserving their layout and preset content.
- Previous personal main: `c8fab8a5588b05f9577f3a2aaa2ac01744c1286f`. Updated through personal main: `c07753a29c860f64e60567a2fc0d58deb3429c3b` (one main commit; team source `a0ac2424`).
- Three-way integration preserves theme implementation outside the shared fixes. Custom SVG uses isolated image rendering and input validation; icon bounds use flex layout; shared underline uses positive internal padding and bottom zero.
- Collection tabs dynamically allow only Collection tab. Static controls remain; all section settings and presets, templates, section-group composition and saved config are preserved. No structural preset rebuild is needed for this source change.
- Scope: `assets/component-pagination.css`, `assets/component-search-suggestions.css`, `assets/critical.css`, `blocks/icon.liquid`, `sections/collection-tabs.liquid`, `snippets/css-variables.liquid`, `snippets/custom-icon-image.liquid`, `snippets/icon.liquid`, `snippets/tab-layout-styles.liquid`.

### Retained custom paths through main 2cf6e5ab

- `assets/announcement-bar.js`
- `assets/block-bundle-product-list.css`
- `assets/block-countdown-timer.css`
- `assets/block-faq-accordion.css`
- `assets/block-image-text-card-grid-item.css`
- `assets/block-slide.css`
- `assets/block-testimonial-item.css`
- `assets/block-timeline-slide.css`
- `assets/breadcrumbs.css`
- `assets/bundle-builder.js`
- `assets/carousel-block.js`
- `assets/carousel-slide.js`
- `assets/cart-drawer-recommendations.js`
- `assets/cart-drawer.css`
- `assets/cart-page.css`
- `assets/cart-page.js`
- `assets/collection-thumbnails.js`
- `assets/collections-with-background.js`
- `assets/collections-with-tabs.js`
- `assets/column-background-video.js`
- `assets/columns-swipe.js`
- `assets/comparison-table.js`
- `assets/component-bouncing-dots.css`
- `assets/component-bundle-summary.css`
- `assets/component-collection-card.css`
- `assets/component-comparison-table.css`
- `assets/component-image-comparison.css`
- `assets/component-marquee-countdown-timer.css`
- `assets/component-pagination.css`
- `assets/component-product-callout.css`
- `assets/component-search-suggestions.css`
- `assets/component-sections-promo-grid.css`
- `assets/component-social-links.css`
- `assets/component-timeline-list.css`
- `assets/editorial-text.js`
- `assets/image-text-card-grid.js`
- `assets/image-text-stacked-bands.js`
- `assets/product-buy-buttons.js`
- `assets/product-collection-carousel.js`
- `assets/product-description.js`
- `assets/product-information-extras.css`
- `assets/product-information-extras.js`
- `assets/product-information.css`
- `assets/product-inventory.js`
- `assets/product-list-promos.js`
- `assets/product-media.css`
- `assets/product-media.js`
- `assets/promo-grid.js`
- `assets/quick-add.js`
- `assets/quick-view.js`
- `assets/scrolling-cards.js`
- `assets/search-page.js`
- `assets/section-collection-banner.css`
- `assets/section-collection-list-thumbnails.css`
- `assets/section-collection-page-links.css`
- `assets/section-collection.css`
- `assets/section-collection.js`
- `assets/section-collections-with-background.css`
- `assets/section-collections-with-tabs.css`
- `assets/section-contact-form-custom.css`
- `assets/section-email-signup-dual-image.css`
- `assets/section-email-signup-form.css`
- `assets/section-email-signup-single-image.css`
- `assets/section-faq-accordion.css`
- `assets/section-faq-image-accordion.css`
- `assets/section-featured-collection-banner.css`
- `assets/section-hotspot-full-width-carousel.css`
- `assets/section-icon-text-cards.css`
- `assets/section-icon-text-inline.css`
- `assets/section-icon-with-text-custom.css`
- `assets/section-image-cards.css`
- `assets/section-image-comparison-split-custom.css`
- `assets/section-location-map.css`
- `assets/section-parallax.css`
- `assets/section-parallax.js`
- `assets/section-scrolling-text-star-separator.css`
- `assets/section-shop-the-look-section.css`
- `assets/section-testimonials-background-custom.css`
- `assets/section-testimonials-horizontal-custom.css`
- `assets/section-text-marquee-custom.css`
- `assets/section-timeline.css`
- `assets/section-zoom-image-banner.css`
- `assets/section-zoom-image-banner.js`
- `assets/slideshow.js`
- `assets/swiper-12.2.0-effect-fade.min.css`
- `assets/timeline-list.js`
- `assets/variant-picker.js`
- `blocks/_bundle-product-list.liquid`
- `blocks/_bundle-summary.liquid`
- `blocks/_cart-content.liquid`
- `blocks/_cart-order-summary.liquid`
- `blocks/_cart-summary.liquid`
- `blocks/_collection-breadcrumb.liquid`
- `blocks/_collection-columns.liquid`
- `blocks/_collection-count.liquid`
- `blocks/_collection-filter.liquid`
- `blocks/_collection-pagination.liquid`
- `blocks/_collection-products.liquid`
- `blocks/_collection-sort.liquid`
- `blocks/_collection-toolbar.liquid`
- `blocks/_collections-list.liquid`
- `blocks/_collections-page-card.liquid`
- `blocks/_column.liquid`
- `blocks/_columns-column.liquid`
- `blocks/_comparison-table-features.liquid`
- `blocks/_header-account.liquid`
- `blocks/_header-cart.liquid`
- `blocks/_header-divider.liquid`
- `blocks/_header-localization.liquid`
- `blocks/_header-logo.liquid`
- `blocks/_header-menu-toggle.liquid`
- `blocks/_header-menu.liquid`
- `blocks/_header-search.liquid`
- `blocks/_header-top.liquid`
- `blocks/_marquee-button.liquid`
- `blocks/_marquee-countdown-timer.liquid`
- `blocks/_marquee-coupon-code.liquid`
- `blocks/_marquee-divider.liquid`
- `blocks/_marquee-group.liquid`
- `blocks/_marquee-heading.liquid`
- `blocks/_marquee-icon.liquid`
- `blocks/_marquee-image.liquid`
- `blocks/_marquee-text.liquid`
- `blocks/_mega-menu-banner.liquid`
- `blocks/_mega-menu-banners.liquid`
- `blocks/_overlay-product-media.liquid`
- `blocks/_product-collection-grid.liquid`
- `blocks/_product-details.liquid`
- `blocks/_product-media.liquid`
- `blocks/_search-input.liquid`
- `blocks/_search-products.liquid`
- `blocks/_search-results.liquid`
- `blocks/announcement-countdown-timer.liquid`
- `blocks/announcement-text.liquid`
- `blocks/banner.liquid`
- `blocks/blog-card-button.liquid`
- `blocks/blog-card-description.liquid`
- `blocks/blog-card-meta.liquid`
- `blocks/blog-card-tag.liquid`
- `blocks/blog-card-title.liquid`
- `blocks/blog-card.liquid`
- `blocks/blog-grid.liquid`
- `blocks/blog-list.liquid`
- `blocks/blog-meta.liquid`
- `blocks/blog-tag-filter.liquid`
- `blocks/button-view-details.liquid`
- `blocks/button.liquid`
- `blocks/buttons.liquid`
- `blocks/carousel.liquid`
- `blocks/cart-free-shipping.liquid`
- `blocks/cart-items.liquid`
- `blocks/cart-order-note.liquid`
- `blocks/cart-shipping-estimator.liquid`
- `blocks/collection-background-item.liquid`
- `blocks/collection-card-button.liquid`
- `blocks/collection-card-description.liquid`
- `blocks/collection-card-title.liquid`
- `blocks/collection-card.liquid`
- `blocks/collection-list-items.liquid`
- `blocks/collection-promo.liquid`
- `blocks/collection-tab.liquid`
- `blocks/collection-thumbnail.liquid`
- `blocks/collection_card.liquid`
- `blocks/collections-with-tabs-item.liquid`
- `blocks/columns.liquid`
- `blocks/comments.liquid`
- `blocks/comparison-table-column.liquid`
- `blocks/comparison-table-row-value.liquid`
- `blocks/comparison-table-row.liquid`
- `blocks/comparison-table.liquid`
- `blocks/contact-field.liquid`
- `blocks/contact-form.liquid`
- `blocks/content.liquid`
- `blocks/countdown-timer.liquid`
- `blocks/discount-code.liquid`
- `blocks/divider.liquid`
- `blocks/editorial-text.liquid`
- `blocks/email-signup.liquid`
- `blocks/eyebrow.liquid`
- `blocks/faq_accordion.liquid`
- `blocks/faq_category.liquid`
- `blocks/faq_item.liquid`
- `blocks/featured-image.liquid`
- `blocks/featured-post.liquid`
- `blocks/first-card.liquid`
- `blocks/gallery-hotspot.liquid`
- `blocks/gallery-image.liquid`
- `blocks/gallery-item.liquid`
- `blocks/gallery-strip-feature-item.liquid`
- `blocks/gallery-strip-item.liquid`
- `blocks/gallery-strip-overlay-group.liquid`
- `blocks/group.liquid`
- `blocks/header.liquid`
- `blocks/heading.liquid`
- `blocks/hotspot.liquid`
- `blocks/icon.liquid`
- `blocks/image-card.liquid`
- `blocks/image-comparison.liquid`
- `blocks/image-text-card-grid-item.liquid`
- `blocks/image-text-stacked-band.liquid`
- `blocks/image.liquid`
- `blocks/localization.liquid`
- `blocks/logo.liquid`
- `blocks/marquee.liquid`
- `blocks/menu.liquid`
- `blocks/metafield.liquid`
- `blocks/pagination.liquid`
- `blocks/parallax-item.liquid`
- `blocks/payment-icons.liquid`
- `blocks/policy-links.liquid`
- `blocks/popup.liquid`
- `blocks/press-item.liquid`
- `blocks/press-quotes.liquid`
- `blocks/previous-and-next-posts.liquid`
- `blocks/product-accordion.liquid`
- `blocks/product-badges.liquid`
- `blocks/product-buy-accelerated-checkout.liquid`
- `blocks/product-buy-add-to-cart.liquid`
- `blocks/product-buy-buttons.liquid`
- `blocks/product-buy-quantity.liquid`
- `blocks/product-callout-gallery.liquid`
- `blocks/product-callout.liquid`
- `blocks/product-card-compact.liquid`
- `blocks/product-card.liquid`
- `blocks/product-description.liquid`
- `blocks/product-inventory.liquid`
- `blocks/product-list-banner.liquid`
- `blocks/product-list.liquid`
- `blocks/product-pickup-availability.liquid`
- `blocks/product-price.liquid`
- `blocks/product-recommendations.liquid`
- `blocks/product-sticky-add-to-cart.liquid`
- `blocks/product-title.liquid`
- `blocks/product-variant-picker.liquid`
- `blocks/promo-card-custom.liquid`
- `blocks/promo-card.liquid`
- `blocks/row.liquid`
- `blocks/scroll-to.liquid`
- `blocks/scrolling-card.liquid`
- `blocks/scrolling-image.liquid`
- `blocks/shop-the-look-product.liquid`
- `blocks/shop-the-look-products.liquid`
- `blocks/slide.liquid`
- `blocks/slide_split.liquid`
- `blocks/slideshow-slide.liquid`
- `blocks/social-links.liquid`
- `blocks/spacer.liquid`
- `blocks/tab-layout.liquid`
- `blocks/tabs-view-all-button.liquid`
- `blocks/tags-and-sharing.liquid`
- `blocks/testimonial-item.liquid`
- `blocks/text.liquid`
- `blocks/timeline-list.liquid`
- `blocks/timeline-slide.liquid`
- `blocks/video.liquid`
- `blocks/view-all-button.liquid`
- `sections/404.liquid`
- `sections/announcement-bar.liquid`
- `sections/article.liquid`
- `sections/blog-posts.liquid`
- `sections/breadcrumbs.liquid`
- `sections/bundle-builder.liquid`
- `sections/cart-drawer.liquid`
- `sections/cart.liquid`
- `sections/collection-banner.liquid`
- `sections/collection-list-thumbnails.liquid`
- `sections/collection-page-breadcrumb.liquid`
- `sections/collection-page-links.liquid`
- `sections/collection-tabs.liquid`
- `sections/collection.liquid`
- `sections/collections-with-background.liquid`
- `sections/collections-with-tabs.liquid`
- `sections/contact-form-custom.liquid`
- `sections/email-signup-dual-image.liquid`
- `sections/email-signup-form.liquid`
- `sections/email-signup-single-image.liquid`
- `sections/faq-accordion.liquid`
- `sections/faq-image-accordion.liquid`
- `sections/featured-blog-posts.liquid`
- `sections/featured-collection-banner.liquid`
- `sections/featured-collection.liquid`
- `sections/featured-product.liquid`
- `sections/footer.liquid`
- `sections/gallery-custom.liquid`
- `sections/header.liquid`
- `sections/hero.liquid`
- `sections/hotspot-full-width-carousel.liquid`
- `sections/hotspot-gallery.liquid`
- `sections/hotspot.liquid`
- `sections/icon-text-cards.liquid`
- `sections/icon-text-inline.liquid`
- `sections/icon-with-text-custom.liquid`
- `sections/image-cards.liquid`
- `sections/image-comparison-split-custom.liquid`
- `sections/image-text-stacked-bands.liquid`
- `sections/location-map.liquid`
- `sections/parallax.liquid`
- `sections/password.liquid`
- `sections/product-information.liquid`
- `sections/product.liquid`
- `sections/promo-grid-custom.liquid`
- `sections/quick-add.liquid`
- `sections/quick-view.liquid`
- `sections/recently-viewed-card.liquid`
- `sections/related-posts.liquid`
- `sections/scrolling-cards.liquid`
- `sections/scrolling-text-star-separator.liquid`
- `sections/search-overlay.liquid`
- `sections/search.liquid`
- `sections/shop-the-look-section.liquid`
- `sections/slideshow.liquid`
- `sections/testimonials-background-custom.liquid`
- `sections/testimonials-horizontal-custom.liquid`
- `sections/text-marquee-custom.liquid`
- `sections/timeline.liquid`
- `sections/zoom-image-banner.liquid`
- `snippets/accordion-details.liquid`
- `snippets/badge.liquid`
- `snippets/block-animation-attributes.liquid`
- `snippets/carousel-navigation-icon.liquid`
- `snippets/cart-surface-style.liquid`
- `snippets/collection-card-render.liquid`
- `snippets/collection-column-icon.liquid`
- `snippets/comparison-table-column-content.liquid`
- `snippets/comparison-table-column-shell.liquid`
- `snippets/comparison-table-row-content.liquid`
- `snippets/comparison-table-row-value-content.liquid`
- `snippets/comparison-table-value.liquid`
- `snippets/component-overlay.liquid`
- `snippets/deferred-stylesheet.liquid`
- `snippets/form-field.liquid`
- `snippets/gallery-strip-item-styles.liquid`
- `snippets/header-localization-styles.liquid`
- `snippets/heading-size-token.liquid`
- `snippets/hero-styles.liquid`
- `snippets/hotspot-dot.liquid`
- `snippets/hotspot-tooltip-pointer.liquid`
- `snippets/icon.liquid`
- `snippets/image-card-content.liquid`
- `snippets/image-comparison.liquid`
- `snippets/image.liquid`
- `snippets/layout-flow-group-style.liquid`
- `snippets/layout-flow-style.liquid`
- `snippets/localization-flag.liquid`
- `snippets/localization-overlay.liquid`
- `snippets/marquee-letter-spacing.liquid`
- `snippets/media-background.liquid`
- `snippets/media-card.liquid`
- `snippets/overlay-background.liquid`
- `snippets/pagination-pages.liquid`
- `snippets/pickup-availability-stores.liquid`
- `snippets/price.liquid`
- `snippets/product-badges.liquid`
- `snippets/product-callout-hotspot.liquid`
- `snippets/product-callout-runtime.liquid`
- `snippets/product-card-image.liquid`
- `snippets/product-card-metafield.liquid`
- `snippets/product-card-placeholder.liquid`
- `snippets/product-card-price.liquid`
- `snippets/product-card-quick-add-overlay.liquid`
- `snippets/product-card-quick-add.liquid`
- `snippets/product-card-quick-view.liquid`
- `snippets/product-card-swatches.liquid`
- `snippets/product-card-title.liquid`
- `snippets/product-card.liquid`
- `snippets/product-collection-grid.liquid`
- `snippets/product-hotspot.liquid`
- `snippets/product-inventory-status.liquid`
- `snippets/product-list-promo-items.liquid`
- `snippets/product-list-promo-styles.liquid`
- `snippets/product-media-lightbox.liquid`
- `snippets/product-media.liquid`
- `snippets/search-query-fields.liquid`
- `snippets/section-content-slot.liquid`
- `snippets/share-button.liquid`
- `snippets/size-style.liquid`
- `snippets/slideshow-image.liquid`
- `snippets/social-icon.liquid`
- `snippets/social-links.liquid`
- `snippets/swatch-option.liquid`
- `snippets/swatch.liquid`
- `snippets/swiper-carousel.liquid`
- `snippets/swiper-navigation.liquid`
- `snippets/swiper-pagination.liquid`
- `snippets/tab-layout-styles.liquid`
- `snippets/theme-button.liquid`
- `snippets/tooltip.liquid`
- `snippets/variant-picker.liquid`
- `snippets/video.liquid`
- `snippets/view-all-button.liquid`


### Countdown composition migration — 2026-10-16

Owner-authorized migration from team `2a9a0caf`, personal main `2cf6e5ab`: rename preset to Countdown (custom), use dynamic blocks and the existing Custom section allow-list, unlock saved instances while preserving block IDs, order, content and all layout settings. Countdown timer runtime is unchanged.

### Retained custom paths through main 2593c6f2

- `assets/announcement-bar.js`
- `assets/block-bundle-product-list.css`
- `assets/block-countdown-timer.css`
- `assets/block-faq-accordion.css`
- `assets/block-image-text-card-grid-item.css`
- `assets/block-slide.css`
- `assets/block-testimonial-item.css`
- `assets/block-timeline-slide.css`
- `assets/breadcrumbs.css`
- `assets/bundle-builder.js`
- `assets/carousel-block.js`
- `assets/carousel-slide.js`
- `assets/cart-drawer-recommendations.js`
- `assets/cart-drawer.css`
- `assets/cart-page.css`
- `assets/cart-page.js`
- `assets/collection-thumbnails.js`
- `assets/collections-with-background.js`
- `assets/collections-with-tabs.js`
- `assets/column-background-video.js`
- `assets/columns-swipe.js`
- `assets/comparison-table.js`
- `assets/component-bouncing-dots.css`
- `assets/component-bundle-summary.css`
- `assets/component-collection-card.css`
- `assets/component-comparison-table.css`
- `assets/component-image-comparison.css`
- `assets/component-marquee-countdown-timer.css`
- `assets/component-pagination.css`
- `assets/component-product-callout.css`
- `assets/component-search-suggestions.css`
- `assets/component-sections-promo-grid.css`
- `assets/component-social-links.css`
- `assets/component-timeline-list.css`
- `assets/editorial-text.js`
- `assets/image-text-card-grid.js`
- `assets/image-text-stacked-bands.js`
- `assets/product-buy-buttons.js`
- `assets/product-collection-carousel.js`
- `assets/product-description.js`
- `assets/product-information-extras.css`
- `assets/product-information-extras.js`
- `assets/product-information.css`
- `assets/product-inventory.js`
- `assets/product-list-promos.js`
- `assets/product-media.css`
- `assets/product-media.js`
- `assets/promo-grid.js`
- `assets/quick-add.js`
- `assets/quick-view.js`
- `assets/scrolling-cards.js`
- `assets/search-page.js`
- `assets/section-collection-banner.css`
- `assets/section-collection-list-thumbnails.css`
- `assets/section-collection-page-links.css`
- `assets/section-collection.css`
- `assets/section-collection.js`
- `assets/section-collections-with-background.css`
- `assets/section-collections-with-tabs.css`
- `assets/section-contact-form-custom.css`
- `assets/section-email-signup-dual-image.css`
- `assets/section-email-signup-form.css`
- `assets/section-email-signup-single-image.css`
- `assets/section-faq-accordion.css`
- `assets/section-faq-image-accordion.css`
- `assets/section-featured-collection-banner.css`
- `assets/section-hotspot-full-width-carousel.css`
- `assets/section-icon-text-cards.css`
- `assets/section-icon-text-inline.css`
- `assets/section-icon-with-text-custom.css`
- `assets/section-image-cards.css`
- `assets/section-image-comparison-split-custom.css`
- `assets/section-location-map.css`
- `assets/section-parallax.css`
- `assets/section-parallax.js`
- `assets/section-scrolling-text-star-separator.css`
- `assets/section-shop-the-look-section.css`
- `assets/section-testimonials-background-custom.css`
- `assets/section-testimonials-horizontal-custom.css`
- `assets/section-text-marquee-custom.css`
- `assets/section-timeline.css`
- `assets/section-zoom-image-banner.css`
- `assets/section-zoom-image-banner.js`
- `assets/slideshow.js`
- `assets/swiper-12.2.0-effect-fade.min.css`
- `assets/timeline-list.js`
- `assets/variant-picker.js`
- `blocks/_bundle-product-list.liquid`
- `blocks/_bundle-summary.liquid`
- `blocks/_cart-content.liquid`
- `blocks/_cart-order-summary.liquid`
- `blocks/_cart-summary.liquid`
- `blocks/_collection-breadcrumb.liquid`
- `blocks/_collection-columns.liquid`
- `blocks/_collection-count.liquid`
- `blocks/_collection-filter.liquid`
- `blocks/_collection-pagination.liquid`
- `blocks/_collection-products.liquid`
- `blocks/_collection-sort.liquid`
- `blocks/_collection-toolbar.liquid`
- `blocks/_collections-list.liquid`
- `blocks/_collections-page-card.liquid`
- `blocks/_column.liquid`
- `blocks/_columns-column.liquid`
- `blocks/_comparison-table-features.liquid`
- `blocks/_header-account.liquid`
- `blocks/_header-cart.liquid`
- `blocks/_header-divider.liquid`
- `blocks/_header-localization.liquid`
- `blocks/_header-logo.liquid`
- `blocks/_header-menu-toggle.liquid`
- `blocks/_header-menu.liquid`
- `blocks/_header-search.liquid`
- `blocks/_header-top.liquid`
- `blocks/_marquee-button.liquid`
- `blocks/_marquee-countdown-timer.liquid`
- `blocks/_marquee-coupon-code.liquid`
- `blocks/_marquee-divider.liquid`
- `blocks/_marquee-group.liquid`
- `blocks/_marquee-heading.liquid`
- `blocks/_marquee-icon.liquid`
- `blocks/_marquee-image.liquid`
- `blocks/_marquee-text.liquid`
- `blocks/_mega-menu-banner.liquid`
- `blocks/_mega-menu-banners.liquid`
- `blocks/_overlay-product-media.liquid`
- `blocks/_product-collection-grid.liquid`
- `blocks/_product-details.liquid`
- `blocks/_product-media.liquid`
- `blocks/_search-input.liquid`
- `blocks/_search-products.liquid`
- `blocks/_search-results.liquid`
- `blocks/announcement-countdown-timer.liquid`
- `blocks/announcement-text.liquid`
- `blocks/banner.liquid`
- `blocks/blog-card-button.liquid`
- `blocks/blog-card-description.liquid`
- `blocks/blog-card-meta.liquid`
- `blocks/blog-card-tag.liquid`
- `blocks/blog-card-title.liquid`
- `blocks/blog-card.liquid`
- `blocks/blog-grid.liquid`
- `blocks/blog-list.liquid`
- `blocks/blog-meta.liquid`
- `blocks/blog-tag-filter.liquid`
- `blocks/button-view-details.liquid`
- `blocks/button.liquid`
- `blocks/buttons.liquid`
- `blocks/carousel.liquid`
- `blocks/cart-free-shipping.liquid`
- `blocks/cart-items.liquid`
- `blocks/cart-order-note.liquid`
- `blocks/cart-shipping-estimator.liquid`
- `blocks/collection-background-item.liquid`
- `blocks/collection-card-button.liquid`
- `blocks/collection-card-description.liquid`
- `blocks/collection-card-title.liquid`
- `blocks/collection-card.liquid`
- `blocks/collection-list-items.liquid`
- `blocks/collection-promo.liquid`
- `blocks/collection-tab.liquid`
- `blocks/collection-thumbnail.liquid`
- `blocks/collection_card.liquid`
- `blocks/collections-with-tabs-item.liquid`
- `blocks/columns.liquid`
- `blocks/comments.liquid`
- `blocks/comparison-table-column.liquid`
- `blocks/comparison-table-row-value.liquid`
- `blocks/comparison-table-row.liquid`
- `blocks/comparison-table.liquid`
- `blocks/contact-field.liquid`
- `blocks/contact-form.liquid`
- `blocks/content.liquid`
- `blocks/countdown-timer.liquid`
- `blocks/discount-code.liquid`
- `blocks/divider.liquid`
- `blocks/editorial-text.liquid`
- `blocks/email-signup.liquid`
- `blocks/eyebrow.liquid`
- `blocks/faq_accordion.liquid`
- `blocks/faq_category.liquid`
- `blocks/faq_item.liquid`
- `blocks/featured-image.liquid`
- `blocks/featured-post.liquid`
- `blocks/first-card.liquid`
- `blocks/gallery-hotspot.liquid`
- `blocks/gallery-image.liquid`
- `blocks/gallery-item.liquid`
- `blocks/gallery-strip-feature-item.liquid`
- `blocks/gallery-strip-item.liquid`
- `blocks/gallery-strip-overlay-group.liquid`
- `blocks/group.liquid`
- `blocks/header.liquid`
- `blocks/heading.liquid`
- `blocks/hotspot.liquid`
- `blocks/icon.liquid`
- `blocks/image-card.liquid`
- `blocks/image-comparison.liquid`
- `blocks/image-text-card-grid-item.liquid`
- `blocks/image-text-stacked-band.liquid`
- `blocks/image.liquid`
- `blocks/localization.liquid`
- `blocks/logo.liquid`
- `blocks/marquee.liquid`
- `blocks/menu.liquid`
- `blocks/metafield.liquid`
- `blocks/pagination.liquid`
- `blocks/parallax-item.liquid`
- `blocks/payment-icons.liquid`
- `blocks/policy-links.liquid`
- `blocks/popup.liquid`
- `blocks/press-item.liquid`
- `blocks/press-quotes.liquid`
- `blocks/previous-and-next-posts.liquid`
- `blocks/product-accordion.liquid`
- `blocks/product-badges.liquid`
- `blocks/product-buy-accelerated-checkout.liquid`
- `blocks/product-buy-add-to-cart.liquid`
- `blocks/product-buy-buttons.liquid`
- `blocks/product-buy-quantity.liquid`
- `blocks/product-callout-gallery.liquid`
- `blocks/product-callout.liquid`
- `blocks/product-card-compact.liquid`
- `blocks/product-card.liquid`
- `blocks/product-description.liquid`
- `blocks/product-inventory.liquid`
- `blocks/product-list-banner.liquid`
- `blocks/product-list.liquid`
- `blocks/product-pickup-availability.liquid`
- `blocks/product-price.liquid`
- `blocks/product-recommendations.liquid`
- `blocks/product-sticky-add-to-cart.liquid`
- `blocks/product-title.liquid`
- `blocks/product-variant-picker.liquid`
- `blocks/promo-card-custom.liquid`
- `blocks/promo-card.liquid`
- `blocks/row.liquid`
- `blocks/scroll-to.liquid`
- `blocks/scrolling-card.liquid`
- `blocks/scrolling-image.liquid`
- `blocks/shop-the-look-product.liquid`
- `blocks/shop-the-look-products.liquid`
- `blocks/slide.liquid`
- `blocks/slide_split.liquid`
- `blocks/slideshow-slide.liquid`
- `blocks/social-links.liquid`
- `blocks/spacer.liquid`
- `blocks/tab-layout.liquid`
- `blocks/tabs-view-all-button.liquid`
- `blocks/tags-and-sharing.liquid`
- `blocks/testimonial-item.liquid`
- `blocks/text.liquid`
- `blocks/timeline-list.liquid`
- `blocks/timeline-slide.liquid`
- `blocks/video.liquid`
- `blocks/view-all-button.liquid`
- `sections/404.liquid`
- `sections/announcement-bar.liquid`
- `sections/article.liquid`
- `sections/blog-posts.liquid`
- `sections/breadcrumbs.liquid`
- `sections/bundle-builder.liquid`
- `sections/cart-drawer.liquid`
- `sections/cart.liquid`
- `sections/collection-banner.liquid`
- `sections/collection-list-thumbnails.liquid`
- `sections/collection-page-breadcrumb.liquid`
- `sections/collection-page-links.liquid`
- `sections/collection-tabs.liquid`
- `sections/collection.liquid`
- `sections/collections-with-background.liquid`
- `sections/collections-with-tabs.liquid`
- `sections/contact-form-custom.liquid`
- `sections/email-signup-dual-image.liquid`
- `sections/email-signup-form.liquid`
- `sections/email-signup-single-image.liquid`
- `sections/faq-accordion.liquid`
- `sections/faq-image-accordion.liquid`
- `sections/featured-blog-posts.liquid`
- `sections/featured-collection-banner.liquid`
- `sections/featured-collection.liquid`
- `sections/featured-product.liquid`
- `sections/footer.liquid`
- `sections/gallery-custom.liquid`
- `sections/header.liquid`
- `sections/hero.liquid`
- `sections/hotspot-full-width-carousel.liquid`
- `sections/hotspot-gallery.liquid`
- `sections/hotspot.liquid`
- `sections/icon-text-cards.liquid`
- `sections/icon-text-inline.liquid`
- `sections/icon-with-text-custom.liquid`
- `sections/image-cards.liquid`
- `sections/image-comparison-split-custom.liquid`
- `sections/image-text-stacked-bands.liquid`
- `sections/location-map.liquid`
- `sections/parallax.liquid`
- `sections/password.liquid`
- `sections/product-information.liquid`
- `sections/product.liquid`
- `sections/promo-grid-custom.liquid`
- `sections/quick-add.liquid`
- `sections/quick-view.liquid`
- `sections/recently-viewed-card.liquid`
- `sections/related-posts.liquid`
- `sections/scrolling-cards.liquid`
- `sections/scrolling-text-star-separator.liquid`
- `sections/search-overlay.liquid`
- `sections/search.liquid`
- `sections/shop-the-look-section.liquid`
- `sections/slideshow.liquid`
- `sections/testimonials-background-custom.liquid`
- `sections/testimonials-horizontal-custom.liquid`
- `sections/text-marquee-custom.liquid`
- `sections/timeline.liquid`
- `sections/zoom-image-banner.liquid`
- `snippets/accordion-details.liquid`
- `snippets/badge.liquid`
- `snippets/block-animation-attributes.liquid`
- `snippets/carousel-navigation-icon.liquid`
- `snippets/cart-surface-style.liquid`
- `snippets/collection-card-render.liquid`
- `snippets/collection-column-icon.liquid`
- `snippets/comparison-table-column-content.liquid`
- `snippets/comparison-table-column-shell.liquid`
- `snippets/comparison-table-row-content.liquid`
- `snippets/comparison-table-row-value-content.liquid`
- `snippets/comparison-table-value.liquid`
- `snippets/component-overlay.liquid`
- `snippets/deferred-stylesheet.liquid`
- `snippets/form-field.liquid`
- `snippets/gallery-strip-item-styles.liquid`
- `snippets/header-localization-styles.liquid`
- `snippets/heading-size-token.liquid`
- `snippets/hero-styles.liquid`
- `snippets/hotspot-dot.liquid`
- `snippets/hotspot-tooltip-pointer.liquid`
- `snippets/icon.liquid`
- `snippets/image-card-content.liquid`
- `snippets/image-comparison.liquid`
- `snippets/image.liquid`
- `snippets/layout-flow-group-style.liquid`
- `snippets/layout-flow-style.liquid`
- `snippets/localization-flag.liquid`
- `snippets/localization-overlay.liquid`
- `snippets/marquee-letter-spacing.liquid`
- `snippets/media-background.liquid`
- `snippets/media-card.liquid`
- `snippets/overlay-background.liquid`
- `snippets/pagination-pages.liquid`
- `snippets/pickup-availability-stores.liquid`
- `snippets/price.liquid`
- `snippets/product-badges.liquid`
- `snippets/product-callout-hotspot.liquid`
- `snippets/product-callout-runtime.liquid`
- `snippets/product-card-image.liquid`
- `snippets/product-card-metafield.liquid`
- `snippets/product-card-placeholder.liquid`
- `snippets/product-card-price.liquid`
- `snippets/product-card-quick-add-overlay.liquid`
- `snippets/product-card-quick-add.liquid`
- `snippets/product-card-quick-view.liquid`
- `snippets/product-card-swatches.liquid`
- `snippets/product-card-title.liquid`
- `snippets/product-card.liquid`
- `snippets/product-collection-grid.liquid`
- `snippets/product-hotspot.liquid`
- `snippets/product-inventory-status.liquid`
- `snippets/product-list-promo-items.liquid`
- `snippets/product-list-promo-styles.liquid`
- `snippets/product-media-lightbox.liquid`
- `snippets/product-media.liquid`
- `snippets/search-query-fields.liquid`
- `snippets/section-content-slot.liquid`
- `snippets/share-button.liquid`
- `snippets/size-style.liquid`
- `snippets/slideshow-image.liquid`
- `snippets/social-icon.liquid`
- `snippets/social-links.liquid`
- `snippets/swatch-option.liquid`
- `snippets/swatch.liquid`
- `snippets/swiper-carousel.liquid`
- `snippets/swiper-navigation.liquid`
- `snippets/swiper-pagination.liquid`
- `snippets/tab-layout-styles.liquid`
- `snippets/theme-button.liquid`
- `snippets/tooltip.liquid`
- `snippets/variant-picker.liquid`
- `snippets/video.liquid`
- `snippets/view-all-button.liquid`


### Shop the look migration — 2026-10-16

Owner-authorized team commit `bf4b69b5`: disallow extra section blocks; migrate static image to private `_shop-the-look-image`, retain saved media, IDs, ratio/height/radius/overlay controls and compatible variant settings; remove image layout width and padding controls. Shared Image is unchanged. Normalize Countdown preset label to Count down (Custom).

### Retained custom paths through main 13865852

- `assets/announcement-bar.js`
- `assets/block-bundle-product-list.css`
- `assets/block-countdown-timer.css`
- `assets/block-faq-accordion.css`
- `assets/block-image-text-card-grid-item.css`
- `assets/block-slide.css`
- `assets/block-testimonial-item.css`
- `assets/block-timeline-slide.css`
- `assets/breadcrumbs.css`
- `assets/bundle-builder.js`
- `assets/carousel-block.js`
- `assets/carousel-slide.js`
- `assets/cart-drawer-recommendations.js`
- `assets/cart-drawer.css`
- `assets/cart-page.css`
- `assets/cart-page.js`
- `assets/collection-thumbnails.js`
- `assets/collections-with-background.js`
- `assets/collections-with-tabs.js`
- `assets/column-background-video.js`
- `assets/columns-swipe.js`
- `assets/comparison-table.js`
- `assets/component-bouncing-dots.css`
- `assets/component-bundle-summary.css`
- `assets/component-collection-card.css`
- `assets/component-comparison-table.css`
- `assets/component-image-comparison.css`
- `assets/component-marquee-countdown-timer.css`
- `assets/component-pagination.css`
- `assets/component-product-callout.css`
- `assets/component-search-suggestions.css`
- `assets/component-sections-promo-grid.css`
- `assets/component-social-links.css`
- `assets/component-timeline-list.css`
- `assets/editorial-text.js`
- `assets/image-text-card-grid.js`
- `assets/image-text-stacked-bands.js`
- `assets/product-buy-buttons.js`
- `assets/product-collection-carousel.js`
- `assets/product-description.js`
- `assets/product-information-extras.css`
- `assets/product-information-extras.js`
- `assets/product-information.css`
- `assets/product-inventory.js`
- `assets/product-list-promos.js`
- `assets/product-media.css`
- `assets/product-media.js`
- `assets/promo-grid.js`
- `assets/quick-add.js`
- `assets/quick-view.js`
- `assets/scrolling-cards.js`
- `assets/search-page.js`
- `assets/section-collection-banner.css`
- `assets/section-collection-list-thumbnails.css`
- `assets/section-collection-page-links.css`
- `assets/section-collection.css`
- `assets/section-collection.js`
- `assets/section-collections-with-background.css`
- `assets/section-collections-with-tabs.css`
- `assets/section-contact-form-custom.css`
- `assets/section-email-signup-dual-image.css`
- `assets/section-email-signup-form.css`
- `assets/section-email-signup-single-image.css`
- `assets/section-faq-accordion.css`
- `assets/section-faq-image-accordion.css`
- `assets/section-featured-collection-banner.css`
- `assets/section-hotspot-full-width-carousel.css`
- `assets/section-icon-text-cards.css`
- `assets/section-icon-text-inline.css`
- `assets/section-icon-with-text-custom.css`
- `assets/section-image-cards.css`
- `assets/section-image-comparison-split-custom.css`
- `assets/section-location-map.css`
- `assets/section-parallax.css`
- `assets/section-parallax.js`
- `assets/section-scrolling-text-star-separator.css`
- `assets/section-shop-the-look-section.css`
- `assets/section-testimonials-background-custom.css`
- `assets/section-testimonials-horizontal-custom.css`
- `assets/section-text-marquee-custom.css`
- `assets/section-timeline.css`
- `assets/section-zoom-image-banner.css`
- `assets/section-zoom-image-banner.js`
- `assets/slideshow.js`
- `assets/swiper-12.2.0-effect-fade.min.css`
- `assets/timeline-list.js`
- `assets/variant-picker.js`
- `blocks/_bundle-product-list.liquid`
- `blocks/_bundle-summary.liquid`
- `blocks/_cart-content.liquid`
- `blocks/_cart-order-summary.liquid`
- `blocks/_cart-summary.liquid`
- `blocks/_collection-breadcrumb.liquid`
- `blocks/_collection-columns.liquid`
- `blocks/_collection-count.liquid`
- `blocks/_collection-filter.liquid`
- `blocks/_collection-pagination.liquid`
- `blocks/_collection-products.liquid`
- `blocks/_collection-sort.liquid`
- `blocks/_collection-toolbar.liquid`
- `blocks/_collections-list.liquid`
- `blocks/_collections-page-card.liquid`
- `blocks/_column.liquid`
- `blocks/_columns-column.liquid`
- `blocks/_comparison-table-features.liquid`
- `blocks/_header-account.liquid`
- `blocks/_header-cart.liquid`
- `blocks/_header-divider.liquid`
- `blocks/_header-localization.liquid`
- `blocks/_header-logo.liquid`
- `blocks/_header-menu-toggle.liquid`
- `blocks/_header-menu.liquid`
- `blocks/_header-search.liquid`
- `blocks/_header-top.liquid`
- `blocks/_marquee-button.liquid`
- `blocks/_marquee-countdown-timer.liquid`
- `blocks/_marquee-coupon-code.liquid`
- `blocks/_marquee-divider.liquid`
- `blocks/_marquee-group.liquid`
- `blocks/_marquee-heading.liquid`
- `blocks/_marquee-icon.liquid`
- `blocks/_marquee-image.liquid`
- `blocks/_marquee-text.liquid`
- `blocks/_mega-menu-banner.liquid`
- `blocks/_mega-menu-banners.liquid`
- `blocks/_overlay-product-media.liquid`
- `blocks/_product-collection-grid.liquid`
- `blocks/_product-details.liquid`
- `blocks/_product-media.liquid`
- `blocks/_search-input.liquid`
- `blocks/_search-products.liquid`
- `blocks/_search-results.liquid`
- `blocks/_shop-the-look-image.liquid`
- `blocks/announcement-countdown-timer.liquid`
- `blocks/announcement-text.liquid`
- `blocks/banner.liquid`
- `blocks/blog-card-button.liquid`
- `blocks/blog-card-description.liquid`
- `blocks/blog-card-meta.liquid`
- `blocks/blog-card-tag.liquid`
- `blocks/blog-card-title.liquid`
- `blocks/blog-card.liquid`
- `blocks/blog-grid.liquid`
- `blocks/blog-list.liquid`
- `blocks/blog-meta.liquid`
- `blocks/blog-tag-filter.liquid`
- `blocks/button-view-details.liquid`
- `blocks/button.liquid`
- `blocks/buttons.liquid`
- `blocks/carousel.liquid`
- `blocks/cart-free-shipping.liquid`
- `blocks/cart-items.liquid`
- `blocks/cart-order-note.liquid`
- `blocks/cart-shipping-estimator.liquid`
- `blocks/collection-background-item.liquid`
- `blocks/collection-card-button.liquid`
- `blocks/collection-card-description.liquid`
- `blocks/collection-card-title.liquid`
- `blocks/collection-card.liquid`
- `blocks/collection-list-items.liquid`
- `blocks/collection-promo.liquid`
- `blocks/collection-tab.liquid`
- `blocks/collection-thumbnail.liquid`
- `blocks/collection_card.liquid`
- `blocks/collections-with-tabs-item.liquid`
- `blocks/columns.liquid`
- `blocks/comments.liquid`
- `blocks/comparison-table-column.liquid`
- `blocks/comparison-table-row-value.liquid`
- `blocks/comparison-table-row.liquid`
- `blocks/comparison-table.liquid`
- `blocks/contact-field.liquid`
- `blocks/contact-form.liquid`
- `blocks/content.liquid`
- `blocks/countdown-timer.liquid`
- `blocks/discount-code.liquid`
- `blocks/divider.liquid`
- `blocks/editorial-text.liquid`
- `blocks/email-signup.liquid`
- `blocks/eyebrow.liquid`
- `blocks/faq_accordion.liquid`
- `blocks/faq_category.liquid`
- `blocks/faq_item.liquid`
- `blocks/featured-image.liquid`
- `blocks/featured-post.liquid`
- `blocks/first-card.liquid`
- `blocks/gallery-hotspot.liquid`
- `blocks/gallery-image.liquid`
- `blocks/gallery-item.liquid`
- `blocks/gallery-strip-feature-item.liquid`
- `blocks/gallery-strip-item.liquid`
- `blocks/gallery-strip-overlay-group.liquid`
- `blocks/group.liquid`
- `blocks/header.liquid`
- `blocks/heading.liquid`
- `blocks/hotspot.liquid`
- `blocks/icon.liquid`
- `blocks/image-card.liquid`
- `blocks/image-comparison.liquid`
- `blocks/image-text-card-grid-item.liquid`
- `blocks/image-text-stacked-band.liquid`
- `blocks/image.liquid`
- `blocks/localization.liquid`
- `blocks/logo.liquid`
- `blocks/marquee.liquid`
- `blocks/menu.liquid`
- `blocks/metafield.liquid`
- `blocks/pagination.liquid`
- `blocks/parallax-item.liquid`
- `blocks/payment-icons.liquid`
- `blocks/policy-links.liquid`
- `blocks/popup.liquid`
- `blocks/press-item.liquid`
- `blocks/press-quotes.liquid`
- `blocks/previous-and-next-posts.liquid`
- `blocks/product-accordion.liquid`
- `blocks/product-badges.liquid`
- `blocks/product-buy-accelerated-checkout.liquid`
- `blocks/product-buy-add-to-cart.liquid`
- `blocks/product-buy-buttons.liquid`
- `blocks/product-buy-quantity.liquid`
- `blocks/product-callout-gallery.liquid`
- `blocks/product-callout.liquid`
- `blocks/product-card-compact.liquid`
- `blocks/product-card.liquid`
- `blocks/product-description.liquid`
- `blocks/product-inventory.liquid`
- `blocks/product-list-banner.liquid`
- `blocks/product-list.liquid`
- `blocks/product-pickup-availability.liquid`
- `blocks/product-price.liquid`
- `blocks/product-recommendations.liquid`
- `blocks/product-sticky-add-to-cart.liquid`
- `blocks/product-title.liquid`
- `blocks/product-variant-picker.liquid`
- `blocks/promo-card-custom.liquid`
- `blocks/promo-card.liquid`
- `blocks/row.liquid`
- `blocks/scroll-to.liquid`
- `blocks/scrolling-card.liquid`
- `blocks/scrolling-image.liquid`
- `blocks/shop-the-look-product.liquid`
- `blocks/shop-the-look-products.liquid`
- `blocks/slide.liquid`
- `blocks/slide_split.liquid`
- `blocks/slideshow-slide.liquid`
- `blocks/social-links.liquid`
- `blocks/spacer.liquid`
- `blocks/tab-layout.liquid`
- `blocks/tabs-view-all-button.liquid`
- `blocks/tags-and-sharing.liquid`
- `blocks/testimonial-item.liquid`
- `blocks/text.liquid`
- `blocks/timeline-list.liquid`
- `blocks/timeline-slide.liquid`
- `blocks/video.liquid`
- `blocks/view-all-button.liquid`
- `sections/404.liquid`
- `sections/announcement-bar.liquid`
- `sections/article.liquid`
- `sections/blog-posts.liquid`
- `sections/breadcrumbs.liquid`
- `sections/bundle-builder.liquid`
- `sections/cart-drawer.liquid`
- `sections/cart.liquid`
- `sections/collection-banner.liquid`
- `sections/collection-list-thumbnails.liquid`
- `sections/collection-page-breadcrumb.liquid`
- `sections/collection-page-links.liquid`
- `sections/collection-tabs.liquid`
- `sections/collection.liquid`
- `sections/collections-with-background.liquid`
- `sections/collections-with-tabs.liquid`
- `sections/contact-form-custom.liquid`
- `sections/email-signup-dual-image.liquid`
- `sections/email-signup-form.liquid`
- `sections/email-signup-single-image.liquid`
- `sections/faq-accordion.liquid`
- `sections/faq-image-accordion.liquid`
- `sections/featured-blog-posts.liquid`
- `sections/featured-collection-banner.liquid`
- `sections/featured-collection.liquid`
- `sections/featured-product.liquid`
- `sections/footer.liquid`
- `sections/gallery-custom.liquid`
- `sections/header.liquid`
- `sections/hero.liquid`
- `sections/hotspot-full-width-carousel.liquid`
- `sections/hotspot-gallery.liquid`
- `sections/hotspot.liquid`
- `sections/icon-text-cards.liquid`
- `sections/icon-text-inline.liquid`
- `sections/icon-with-text-custom.liquid`
- `sections/image-cards.liquid`
- `sections/image-comparison-split-custom.liquid`
- `sections/image-text-stacked-bands.liquid`
- `sections/location-map.liquid`
- `sections/parallax.liquid`
- `sections/password.liquid`
- `sections/product-information.liquid`
- `sections/product.liquid`
- `sections/promo-grid-custom.liquid`
- `sections/quick-add.liquid`
- `sections/quick-view.liquid`
- `sections/recently-viewed-card.liquid`
- `sections/related-posts.liquid`
- `sections/scrolling-cards.liquid`
- `sections/scrolling-text-star-separator.liquid`
- `sections/search-overlay.liquid`
- `sections/search.liquid`
- `sections/shop-the-look-section.liquid`
- `sections/slideshow.liquid`
- `sections/testimonials-background-custom.liquid`
- `sections/testimonials-horizontal-custom.liquid`
- `sections/text-marquee-custom.liquid`
- `sections/timeline.liquid`
- `sections/zoom-image-banner.liquid`
- `snippets/accordion-details.liquid`
- `snippets/badge.liquid`
- `snippets/block-animation-attributes.liquid`
- `snippets/carousel-navigation-icon.liquid`
- `snippets/cart-surface-style.liquid`
- `snippets/collection-card-render.liquid`
- `snippets/collection-column-icon.liquid`
- `snippets/comparison-table-column-content.liquid`
- `snippets/comparison-table-column-shell.liquid`
- `snippets/comparison-table-row-content.liquid`
- `snippets/comparison-table-row-value-content.liquid`
- `snippets/comparison-table-value.liquid`
- `snippets/component-overlay.liquid`
- `snippets/deferred-stylesheet.liquid`
- `snippets/form-field.liquid`
- `snippets/gallery-strip-item-styles.liquid`
- `snippets/header-localization-styles.liquid`
- `snippets/heading-size-token.liquid`
- `snippets/hero-styles.liquid`
- `snippets/hotspot-dot.liquid`
- `snippets/hotspot-tooltip-pointer.liquid`
- `snippets/icon.liquid`
- `snippets/image-card-content.liquid`
- `snippets/image-comparison.liquid`
- `snippets/image.liquid`
- `snippets/layout-flow-group-style.liquid`
- `snippets/layout-flow-style.liquid`
- `snippets/localization-flag.liquid`
- `snippets/localization-overlay.liquid`
- `snippets/marquee-letter-spacing.liquid`
- `snippets/media-background.liquid`
- `snippets/media-card.liquid`
- `snippets/overlay-background.liquid`
- `snippets/pagination-pages.liquid`
- `snippets/pickup-availability-stores.liquid`
- `snippets/price.liquid`
- `snippets/product-badges.liquid`
- `snippets/product-callout-hotspot.liquid`
- `snippets/product-callout-runtime.liquid`
- `snippets/product-card-image.liquid`
- `snippets/product-card-metafield.liquid`
- `snippets/product-card-placeholder.liquid`
- `snippets/product-card-price.liquid`
- `snippets/product-card-quick-add-overlay.liquid`
- `snippets/product-card-quick-add.liquid`
- `snippets/product-card-quick-view.liquid`
- `snippets/product-card-swatches.liquid`
- `snippets/product-card-title.liquid`
- `snippets/product-card.liquid`
- `snippets/product-collection-grid.liquid`
- `snippets/product-hotspot.liquid`
- `snippets/product-inventory-status.liquid`
- `snippets/product-list-promo-items.liquid`
- `snippets/product-list-promo-styles.liquid`
- `snippets/product-media-lightbox.liquid`
- `snippets/product-media.liquid`
- `snippets/search-query-fields.liquid`
- `snippets/section-content-slot.liquid`
- `snippets/share-button.liquid`
- `snippets/size-style.liquid`
- `snippets/slideshow-image.liquid`
- `snippets/social-icon.liquid`
- `snippets/social-links.liquid`
- `snippets/swatch-option.liquid`
- `snippets/swatch.liquid`
- `snippets/swiper-carousel.liquid`
- `snippets/swiper-navigation.liquid`
- `snippets/swiper-pagination.liquid`
- `snippets/tab-layout-styles.liquid`
- `snippets/theme-button.liquid`
- `snippets/tooltip.liquid`
- `snippets/variant-picker.liquid`
- `snippets/video.liquid`
- `snippets/view-all-button.liquid`


### Footer controls and reveal — 2026-10-16

Owner-authorized team source `1c3db7a1`: add Show top divider and Enable scroll reveal above Section width, add Background media and rename Appearance to Color. Reveal survives editor selection/reload and disables when the Footer exceeds viewport height; info matches the reference theme. Existing variant CSS, preset content and saved layout are preserved; new options default off/none.

### Retained custom paths through main 793e6ecf

- `assets/announcement-bar.js`
- `assets/block-bundle-product-list.css`
- `assets/block-countdown-timer.css`
- `assets/block-faq-accordion.css`
- `assets/block-image-text-card-grid-item.css`
- `assets/block-slide.css`
- `assets/block-testimonial-item.css`
- `assets/block-timeline-slide.css`
- `assets/breadcrumbs.css`
- `assets/bundle-builder.js`
- `assets/carousel-block.js`
- `assets/carousel-slide.js`
- `assets/cart-drawer-recommendations.js`
- `assets/cart-drawer.css`
- `assets/cart-page.css`
- `assets/cart-page.js`
- `assets/collection-thumbnails.js`
- `assets/collections-with-background.js`
- `assets/collections-with-tabs.js`
- `assets/column-background-video.js`
- `assets/columns-swipe.js`
- `assets/comparison-table.js`
- `assets/component-bouncing-dots.css`
- `assets/component-bundle-summary.css`
- `assets/component-collection-card.css`
- `assets/component-comparison-table.css`
- `assets/component-image-comparison.css`
- `assets/component-marquee-countdown-timer.css`
- `assets/component-pagination.css`
- `assets/component-product-callout.css`
- `assets/component-search-suggestions.css`
- `assets/component-sections-promo-grid.css`
- `assets/component-social-links.css`
- `assets/component-timeline-list.css`
- `assets/editorial-text.js`
- `assets/image-text-card-grid.js`
- `assets/image-text-stacked-bands.js`
- `assets/product-buy-buttons.js`
- `assets/product-collection-carousel.js`
- `assets/product-description.js`
- `assets/product-information-extras.css`
- `assets/product-information-extras.js`
- `assets/product-information.css`
- `assets/product-inventory.js`
- `assets/product-list-promos.js`
- `assets/product-media.css`
- `assets/product-media.js`
- `assets/promo-grid.js`
- `assets/quick-add.js`
- `assets/quick-view.js`
- `assets/scrolling-cards.js`
- `assets/search-page.js`
- `assets/section-collection-banner.css`
- `assets/section-collection-list-thumbnails.css`
- `assets/section-collection-page-links.css`
- `assets/section-collection.css`
- `assets/section-collection.js`
- `assets/section-collections-with-background.css`
- `assets/section-collections-with-tabs.css`
- `assets/section-contact-form-custom.css`
- `assets/section-email-signup-dual-image.css`
- `assets/section-email-signup-form.css`
- `assets/section-email-signup-single-image.css`
- `assets/section-faq-accordion.css`
- `assets/section-faq-image-accordion.css`
- `assets/section-featured-collection-banner.css`
- `assets/section-hotspot-full-width-carousel.css`
- `assets/section-icon-text-cards.css`
- `assets/section-icon-text-inline.css`
- `assets/section-icon-with-text-custom.css`
- `assets/section-image-cards.css`
- `assets/section-image-comparison-split-custom.css`
- `assets/section-location-map.css`
- `assets/section-parallax.css`
- `assets/section-parallax.js`
- `assets/section-scrolling-text-star-separator.css`
- `assets/section-shop-the-look-section.css`
- `assets/section-testimonials-background-custom.css`
- `assets/section-testimonials-horizontal-custom.css`
- `assets/section-text-marquee-custom.css`
- `assets/section-timeline.css`
- `assets/section-zoom-image-banner.css`
- `assets/section-zoom-image-banner.js`
- `assets/slideshow.js`
- `assets/swiper-12.2.0-effect-fade.min.css`
- `assets/timeline-list.js`
- `assets/variant-picker.js`
- `blocks/_bundle-product-list.liquid`
- `blocks/_bundle-summary.liquid`
- `blocks/_cart-content.liquid`
- `blocks/_cart-order-summary.liquid`
- `blocks/_cart-summary.liquid`
- `blocks/_collection-breadcrumb.liquid`
- `blocks/_collection-columns.liquid`
- `blocks/_collection-count.liquid`
- `blocks/_collection-filter.liquid`
- `blocks/_collection-pagination.liquid`
- `blocks/_collection-products.liquid`
- `blocks/_collection-sort.liquid`
- `blocks/_collection-toolbar.liquid`
- `blocks/_collections-list.liquid`
- `blocks/_collections-page-card.liquid`
- `blocks/_column.liquid`
- `blocks/_columns-column.liquid`
- `blocks/_comparison-table-features.liquid`
- `blocks/_header-account.liquid`
- `blocks/_header-cart.liquid`
- `blocks/_header-divider.liquid`
- `blocks/_header-localization.liquid`
- `blocks/_header-logo.liquid`
- `blocks/_header-menu-toggle.liquid`
- `blocks/_header-menu.liquid`
- `blocks/_header-search.liquid`
- `blocks/_header-top.liquid`
- `blocks/_marquee-button.liquid`
- `blocks/_marquee-countdown-timer.liquid`
- `blocks/_marquee-coupon-code.liquid`
- `blocks/_marquee-divider.liquid`
- `blocks/_marquee-group.liquid`
- `blocks/_marquee-heading.liquid`
- `blocks/_marquee-icon.liquid`
- `blocks/_marquee-image.liquid`
- `blocks/_marquee-text.liquid`
- `blocks/_mega-menu-banner.liquid`
- `blocks/_mega-menu-banners.liquid`
- `blocks/_overlay-product-media.liquid`
- `blocks/_product-collection-grid.liquid`
- `blocks/_product-details.liquid`
- `blocks/_product-media.liquid`
- `blocks/_search-input.liquid`
- `blocks/_search-products.liquid`
- `blocks/_search-results.liquid`
- `blocks/_shop-the-look-image.liquid`
- `blocks/announcement-countdown-timer.liquid`
- `blocks/announcement-text.liquid`
- `blocks/banner.liquid`
- `blocks/blog-card-button.liquid`
- `blocks/blog-card-description.liquid`
- `blocks/blog-card-meta.liquid`
- `blocks/blog-card-tag.liquid`
- `blocks/blog-card-title.liquid`
- `blocks/blog-card.liquid`
- `blocks/blog-grid.liquid`
- `blocks/blog-list.liquid`
- `blocks/blog-meta.liquid`
- `blocks/blog-tag-filter.liquid`
- `blocks/button-view-details.liquid`
- `blocks/button.liquid`
- `blocks/buttons.liquid`
- `blocks/carousel.liquid`
- `blocks/cart-free-shipping.liquid`
- `blocks/cart-items.liquid`
- `blocks/cart-order-note.liquid`
- `blocks/cart-shipping-estimator.liquid`
- `blocks/collection-background-item.liquid`
- `blocks/collection-card-button.liquid`
- `blocks/collection-card-description.liquid`
- `blocks/collection-card-title.liquid`
- `blocks/collection-card.liquid`
- `blocks/collection-list-items.liquid`
- `blocks/collection-promo.liquid`
- `blocks/collection-tab.liquid`
- `blocks/collection-thumbnail.liquid`
- `blocks/collection_card.liquid`
- `blocks/collections-with-tabs-item.liquid`
- `blocks/columns.liquid`
- `blocks/comments.liquid`
- `blocks/comparison-table-column.liquid`
- `blocks/comparison-table-row-value.liquid`
- `blocks/comparison-table-row.liquid`
- `blocks/comparison-table.liquid`
- `blocks/contact-field.liquid`
- `blocks/contact-form.liquid`
- `blocks/content.liquid`
- `blocks/countdown-timer.liquid`
- `blocks/discount-code.liquid`
- `blocks/divider.liquid`
- `blocks/editorial-text.liquid`
- `blocks/email-signup.liquid`
- `blocks/eyebrow.liquid`
- `blocks/faq_accordion.liquid`
- `blocks/faq_category.liquid`
- `blocks/faq_item.liquid`
- `blocks/featured-image.liquid`
- `blocks/featured-post.liquid`
- `blocks/first-card.liquid`
- `blocks/gallery-hotspot.liquid`
- `blocks/gallery-image.liquid`
- `blocks/gallery-item.liquid`
- `blocks/gallery-strip-feature-item.liquid`
- `blocks/gallery-strip-item.liquid`
- `blocks/gallery-strip-overlay-group.liquid`
- `blocks/group.liquid`
- `blocks/header.liquid`
- `blocks/heading.liquid`
- `blocks/hotspot.liquid`
- `blocks/icon.liquid`
- `blocks/image-card.liquid`
- `blocks/image-comparison.liquid`
- `blocks/image-text-card-grid-item.liquid`
- `blocks/image-text-stacked-band.liquid`
- `blocks/image.liquid`
- `blocks/localization.liquid`
- `blocks/logo.liquid`
- `blocks/marquee.liquid`
- `blocks/menu.liquid`
- `blocks/metafield.liquid`
- `blocks/pagination.liquid`
- `blocks/parallax-item.liquid`
- `blocks/payment-icons.liquid`
- `blocks/policy-links.liquid`
- `blocks/popup.liquid`
- `blocks/press-item.liquid`
- `blocks/press-quotes.liquid`
- `blocks/previous-and-next-posts.liquid`
- `blocks/product-accordion.liquid`
- `blocks/product-badges.liquid`
- `blocks/product-buy-accelerated-checkout.liquid`
- `blocks/product-buy-add-to-cart.liquid`
- `blocks/product-buy-buttons.liquid`
- `blocks/product-buy-quantity.liquid`
- `blocks/product-callout-gallery.liquid`
- `blocks/product-callout.liquid`
- `blocks/product-card-compact.liquid`
- `blocks/product-card.liquid`
- `blocks/product-description.liquid`
- `blocks/product-inventory.liquid`
- `blocks/product-list-banner.liquid`
- `blocks/product-list.liquid`
- `blocks/product-pickup-availability.liquid`
- `blocks/product-price.liquid`
- `blocks/product-recommendations.liquid`
- `blocks/product-sticky-add-to-cart.liquid`
- `blocks/product-title.liquid`
- `blocks/product-variant-picker.liquid`
- `blocks/promo-card-custom.liquid`
- `blocks/promo-card.liquid`
- `blocks/row.liquid`
- `blocks/scroll-to.liquid`
- `blocks/scrolling-card.liquid`
- `blocks/scrolling-image.liquid`
- `blocks/shop-the-look-product.liquid`
- `blocks/shop-the-look-products.liquid`
- `blocks/slide.liquid`
- `blocks/slide_split.liquid`
- `blocks/slideshow-slide.liquid`
- `blocks/social-links.liquid`
- `blocks/spacer.liquid`
- `blocks/tab-layout.liquid`
- `blocks/tabs-view-all-button.liquid`
- `blocks/tags-and-sharing.liquid`
- `blocks/testimonial-item.liquid`
- `blocks/text.liquid`
- `blocks/timeline-list.liquid`
- `blocks/timeline-slide.liquid`
- `blocks/video.liquid`
- `blocks/view-all-button.liquid`
- `sections/404.liquid`
- `sections/announcement-bar.liquid`
- `sections/article.liquid`
- `sections/blog-posts.liquid`
- `sections/breadcrumbs.liquid`
- `sections/bundle-builder.liquid`
- `sections/cart-drawer.liquid`
- `sections/cart.liquid`
- `sections/collection-banner.liquid`
- `sections/collection-list-thumbnails.liquid`
- `sections/collection-page-breadcrumb.liquid`
- `sections/collection-page-links.liquid`
- `sections/collection-tabs.liquid`
- `sections/collection.liquid`
- `sections/collections-with-background.liquid`
- `sections/collections-with-tabs.liquid`
- `sections/contact-form-custom.liquid`
- `sections/email-signup-dual-image.liquid`
- `sections/email-signup-form.liquid`
- `sections/email-signup-single-image.liquid`
- `sections/faq-accordion.liquid`
- `sections/faq-image-accordion.liquid`
- `sections/featured-blog-posts.liquid`
- `sections/featured-collection-banner.liquid`
- `sections/featured-collection.liquid`
- `sections/featured-product.liquid`
- `sections/footer.liquid`
- `sections/gallery-custom.liquid`
- `sections/header.liquid`
- `sections/hero.liquid`
- `sections/hotspot-full-width-carousel.liquid`
- `sections/hotspot-gallery.liquid`
- `sections/hotspot.liquid`
- `sections/icon-text-cards.liquid`
- `sections/icon-text-inline.liquid`
- `sections/icon-with-text-custom.liquid`
- `sections/image-cards.liquid`
- `sections/image-comparison-split-custom.liquid`
- `sections/image-text-stacked-bands.liquid`
- `sections/location-map.liquid`
- `sections/parallax.liquid`
- `sections/password.liquid`
- `sections/product-information.liquid`
- `sections/product.liquid`
- `sections/promo-grid-custom.liquid`
- `sections/quick-add.liquid`
- `sections/quick-view.liquid`
- `sections/recently-viewed-card.liquid`
- `sections/related-posts.liquid`
- `sections/scrolling-cards.liquid`
- `sections/scrolling-text-star-separator.liquid`
- `sections/search-overlay.liquid`
- `sections/search.liquid`
- `sections/shop-the-look-section.liquid`
- `sections/slideshow.liquid`
- `sections/testimonials-background-custom.liquid`
- `sections/testimonials-horizontal-custom.liquid`
- `sections/text-marquee-custom.liquid`
- `sections/timeline.liquid`
- `sections/zoom-image-banner.liquid`
- `snippets/accordion-details.liquid`
- `snippets/badge.liquid`
- `snippets/block-animation-attributes.liquid`
- `snippets/carousel-navigation-icon.liquid`
- `snippets/cart-surface-style.liquid`
- `snippets/collection-card-render.liquid`
- `snippets/collection-column-icon.liquid`
- `snippets/comparison-table-column-content.liquid`
- `snippets/comparison-table-column-shell.liquid`
- `snippets/comparison-table-row-content.liquid`
- `snippets/comparison-table-row-value-content.liquid`
- `snippets/comparison-table-value.liquid`
- `snippets/component-overlay.liquid`
- `snippets/deferred-stylesheet.liquid`
- `snippets/form-field.liquid`
- `snippets/gallery-strip-item-styles.liquid`
- `snippets/header-localization-styles.liquid`
- `snippets/heading-size-token.liquid`
- `snippets/hero-styles.liquid`
- `snippets/hotspot-dot.liquid`
- `snippets/hotspot-tooltip-pointer.liquid`
- `snippets/icon.liquid`
- `snippets/image-card-content.liquid`
- `snippets/image-comparison.liquid`
- `snippets/image.liquid`
- `snippets/layout-flow-group-style.liquid`
- `snippets/layout-flow-style.liquid`
- `snippets/localization-flag.liquid`
- `snippets/localization-overlay.liquid`
- `snippets/marquee-letter-spacing.liquid`
- `snippets/media-background.liquid`
- `snippets/media-card.liquid`
- `snippets/overlay-background.liquid`
- `snippets/pagination-pages.liquid`
- `snippets/pickup-availability-stores.liquid`
- `snippets/price.liquid`
- `snippets/product-badges.liquid`
- `snippets/product-callout-hotspot.liquid`
- `snippets/product-callout-runtime.liquid`
- `snippets/product-card-image.liquid`
- `snippets/product-card-metafield.liquid`
- `snippets/product-card-placeholder.liquid`
- `snippets/product-card-price.liquid`
- `snippets/product-card-quick-add-overlay.liquid`
- `snippets/product-card-quick-add.liquid`
- `snippets/product-card-quick-view.liquid`
- `snippets/product-card-swatches.liquid`
- `snippets/product-card-title.liquid`
- `snippets/product-card.liquid`
- `snippets/product-collection-grid.liquid`
- `snippets/product-hotspot.liquid`
- `snippets/product-inventory-status.liquid`
- `snippets/product-list-promo-items.liquid`
- `snippets/product-list-promo-styles.liquid`
- `snippets/product-media-lightbox.liquid`
- `snippets/product-media.liquid`
- `snippets/search-query-fields.liquid`
- `snippets/section-content-slot.liquid`
- `snippets/share-button.liquid`
- `snippets/size-style.liquid`
- `snippets/slideshow-image.liquid`
- `snippets/social-icon.liquid`
- `snippets/social-links.liquid`
- `snippets/swatch-option.liquid`
- `snippets/swatch.liquid`
- `snippets/swiper-carousel.liquid`
- `snippets/swiper-navigation.liquid`
- `snippets/swiper-pagination.liquid`
- `snippets/tab-layout-styles.liquid`
- `snippets/theme-button.liquid`
- `snippets/tooltip.liquid`
- `snippets/variant-picker.liquid`
- `snippets/video.liquid`
- `snippets/view-all-button.liquid`

### 2026-10-16 — Port approved background media and ratio fixes

- Team source: `328b2bee5e9f16c1079d4613755c5e966b65452a`; personal main: `b7ffd45f46adb47ca54be8cf841f82a84fc97348`.
- Previous checkpoint: `793e6ecfbf7bce955fe5822518e863e4e2ac5fc5`.
- Included main commit: `b7ffd45f` — chore(base): update base with 1 upstream commits through 328b2bee.
- Owner approved applying this specific fix inside retained custom implementations, rebuilding affected ratio options from base and retaining custom options.
- Preserve template/preset content, IDs, order, layout and existing custom setting IDs. Convert only equivalent Banner ratio aliases to canonical values.
- Apply clipped one-pixel background paint and nested-picture sizing, exact Image card/Banner fractions and active image/video Original ratios. Keep unrelated local work outside the release.
- Previously retained implementations not involved in this fix remain unchanged.
- Updated paths:
  - `assets/component-blocks-image-card.css`
  - `assets/critical.css`
  - `blocks/_columns-column.liquid`
  - `blocks/banner.liquid`
  - `blocks/image-card.liquid`
  - `blocks/slide.liquid`
  - `sections/bundle-builder.liquid`
  - `sections/collection-list-thumbnails.liquid`
  - `sections/collection-list.liquid`
  - `sections/collections-with-background.liquid`
  - `sections/collections-with-tabs.liquid`
  - `sections/contact-form-custom.liquid`
  - `sections/contact-information.liquid`
  - `sections/custom-section.liquid`
  - `sections/email-signup-form.liquid`
  - `sections/featured-collection-banner.liquid`
  - `sections/featured-product.liquid`
  - `sections/gallery-carousel.liquid`
  - `sections/gallery-full-width-strip.liquid`
  - `sections/gallery-image-grid.liquid`
  - `sections/icon-text-cards.liquid`
  - `sections/icon-text-inline.liquid`
  - `sections/icon-with-text-custom.liquid`
  - `sections/image-cards.liquid`
  - `sections/image-text-split-layout.liquid`
  - `sections/promo-grid-custom.liquid`
  - `sections/rich-text.liquid`
  - `sections/scroll-reading-text.liquid`
  - `sections/testimonial-carousel.liquid`
  - `snippets/image-ratio-value.liquid`
  - `snippets/media-background.liquid`
  - `snippets/media-card.liquid`
  - `templates/index.json`

### 2026-10-16 — Announcement background first-paint parity

- Port the follow-up Announcement sizing fix from Mara after comparing the recent ratio/media and Header first-paint changes across variants.
- `assets/critical.css`: cover direct `img` and responsive `picture > img` background markup. Scope geometry and cover selectors under `.announcement-bar` so shared `.image` CSS loaded later cannot reset absolute positioning or 100% height.
- Existing Header first-paint rules, exact ratios, one-pixel clipped background paint and active image/video Original resolution were already present and remain in place.
- Preserve section/block implementation outside this CSS fix, all settings/presets/templates, and unrelated local edits.

### Retained custom paths through main de84ae60

- `assets/announcement-bar.js`
- `assets/block-bundle-product-list.css`
- `assets/block-countdown-timer.css`
- `assets/block-faq-accordion.css`
- `assets/block-image-text-card-grid-item.css`
- `assets/block-slide.css`
- `assets/block-testimonial-item.css`
- `assets/block-timeline-slide.css`
- `assets/breadcrumbs.css`
- `assets/bundle-builder.js`
- `assets/carousel-block.js`
- `assets/carousel-slide.js`
- `assets/cart-drawer-recommendations.js`
- `assets/cart-drawer.css`
- `assets/cart-page.css`
- `assets/cart-page.js`
- `assets/collection-thumbnails.js`
- `assets/collections-with-background.js`
- `assets/collections-with-tabs.js`
- `assets/column-background-video.js`
- `assets/columns-swipe.js`
- `assets/comparison-table.js`
- `assets/component-bouncing-dots.css`
- `assets/component-bundle-summary.css`
- `assets/component-collection-card.css`
- `assets/component-comparison-table.css`
- `assets/component-image-comparison.css`
- `assets/component-marquee-countdown-timer.css`
- `assets/component-pagination.css`
- `assets/component-product-callout.css`
- `assets/component-search-suggestions.css`
- `assets/component-sections-promo-grid.css`
- `assets/component-social-links.css`
- `assets/component-timeline-list.css`
- `assets/editorial-text.js`
- `assets/image-text-card-grid.js`
- `assets/image-text-stacked-bands.js`
- `assets/product-buy-buttons.js`
- `assets/product-collection-carousel.js`
- `assets/product-description.js`
- `assets/product-information-extras.css`
- `assets/product-information-extras.js`
- `assets/product-information.css`
- `assets/product-inventory.js`
- `assets/product-list-promos.js`
- `assets/product-media.css`
- `assets/product-media.js`
- `assets/promo-grid.js`
- `assets/quick-add.js`
- `assets/quick-view.js`
- `assets/scrolling-cards.js`
- `assets/search-page.js`
- `assets/section-collection-banner.css`
- `assets/section-collection-list-thumbnails.css`
- `assets/section-collection-page-links.css`
- `assets/section-collection.css`
- `assets/section-collection.js`
- `assets/section-collections-with-background.css`
- `assets/section-collections-with-tabs.css`
- `assets/section-contact-form-custom.css`
- `assets/section-email-signup-dual-image.css`
- `assets/section-email-signup-form.css`
- `assets/section-email-signup-single-image.css`
- `assets/section-faq-accordion.css`
- `assets/section-faq-image-accordion.css`
- `assets/section-featured-collection-banner.css`
- `assets/section-hotspot-full-width-carousel.css`
- `assets/section-icon-text-cards.css`
- `assets/section-icon-text-inline.css`
- `assets/section-icon-with-text-custom.css`
- `assets/section-image-cards.css`
- `assets/section-image-comparison-split-custom.css`
- `assets/section-location-map.css`
- `assets/section-parallax.css`
- `assets/section-parallax.js`
- `assets/section-scrolling-text-star-separator.css`
- `assets/section-shop-the-look-section.css`
- `assets/section-testimonials-background-custom.css`
- `assets/section-testimonials-horizontal-custom.css`
- `assets/section-text-marquee-custom.css`
- `assets/section-timeline.css`
- `assets/section-zoom-image-banner.css`
- `assets/section-zoom-image-banner.js`
- `assets/slideshow.js`
- `assets/swiper-12.2.0-effect-fade.min.css`
- `assets/timeline-list.js`
- `assets/variant-picker.js`
- `blocks/_bundle-product-list.liquid`
- `blocks/_bundle-summary.liquid`
- `blocks/_cart-content.liquid`
- `blocks/_cart-order-summary.liquid`
- `blocks/_cart-summary.liquid`
- `blocks/_collection-breadcrumb.liquid`
- `blocks/_collection-columns.liquid`
- `blocks/_collection-count.liquid`
- `blocks/_collection-filter.liquid`
- `blocks/_collection-pagination.liquid`
- `blocks/_collection-products.liquid`
- `blocks/_collection-sort.liquid`
- `blocks/_collection-toolbar.liquid`
- `blocks/_collections-list.liquid`
- `blocks/_collections-page-card.liquid`
- `blocks/_column.liquid`
- `blocks/_columns-column.liquid`
- `blocks/_comparison-table-features.liquid`
- `blocks/_header-account.liquid`
- `blocks/_header-cart.liquid`
- `blocks/_header-divider.liquid`
- `blocks/_header-localization.liquid`
- `blocks/_header-logo.liquid`
- `blocks/_header-menu-toggle.liquid`
- `blocks/_header-menu.liquid`
- `blocks/_header-search.liquid`
- `blocks/_header-top.liquid`
- `blocks/_marquee-button.liquid`
- `blocks/_marquee-countdown-timer.liquid`
- `blocks/_marquee-coupon-code.liquid`
- `blocks/_marquee-divider.liquid`
- `blocks/_marquee-group.liquid`
- `blocks/_marquee-heading.liquid`
- `blocks/_marquee-icon.liquid`
- `blocks/_marquee-image.liquid`
- `blocks/_marquee-text.liquid`
- `blocks/_mega-menu-banner.liquid`
- `blocks/_mega-menu-banners.liquid`
- `blocks/_overlay-product-media.liquid`
- `blocks/_product-collection-grid.liquid`
- `blocks/_product-details.liquid`
- `blocks/_product-media.liquid`
- `blocks/_search-input.liquid`
- `blocks/_search-products.liquid`
- `blocks/_search-results.liquid`
- `blocks/_shop-the-look-image.liquid`
- `blocks/announcement-countdown-timer.liquid`
- `blocks/announcement-text.liquid`
- `blocks/banner.liquid`
- `blocks/blog-card-button.liquid`
- `blocks/blog-card-description.liquid`
- `blocks/blog-card-meta.liquid`
- `blocks/blog-card-tag.liquid`
- `blocks/blog-card-title.liquid`
- `blocks/blog-card.liquid`
- `blocks/blog-grid.liquid`
- `blocks/blog-list.liquid`
- `blocks/blog-meta.liquid`
- `blocks/blog-tag-filter.liquid`
- `blocks/button-view-details.liquid`
- `blocks/button.liquid`
- `blocks/buttons.liquid`
- `blocks/carousel.liquid`
- `blocks/cart-free-shipping.liquid`
- `blocks/cart-items.liquid`
- `blocks/cart-order-note.liquid`
- `blocks/cart-shipping-estimator.liquid`
- `blocks/collection-background-item.liquid`
- `blocks/collection-card-button.liquid`
- `blocks/collection-card-description.liquid`
- `blocks/collection-card-title.liquid`
- `blocks/collection-card.liquid`
- `blocks/collection-list-items.liquid`
- `blocks/collection-promo.liquid`
- `blocks/collection-tab.liquid`
- `blocks/collection-thumbnail.liquid`
- `blocks/collection_card.liquid`
- `blocks/collections-with-tabs-item.liquid`
- `blocks/columns.liquid`
- `blocks/comments.liquid`
- `blocks/comparison-table-column.liquid`
- `blocks/comparison-table-row-value.liquid`
- `blocks/comparison-table-row.liquid`
- `blocks/comparison-table.liquid`
- `blocks/contact-field.liquid`
- `blocks/contact-form.liquid`
- `blocks/content.liquid`
- `blocks/countdown-timer.liquid`
- `blocks/discount-code.liquid`
- `blocks/divider.liquid`
- `blocks/editorial-text.liquid`
- `blocks/email-signup.liquid`
- `blocks/eyebrow.liquid`
- `blocks/faq_accordion.liquid`
- `blocks/faq_category.liquid`
- `blocks/faq_item.liquid`
- `blocks/featured-image.liquid`
- `blocks/featured-post.liquid`
- `blocks/first-card.liquid`
- `blocks/gallery-hotspot.liquid`
- `blocks/gallery-image.liquid`
- `blocks/gallery-item.liquid`
- `blocks/gallery-strip-feature-item.liquid`
- `blocks/gallery-strip-item.liquid`
- `blocks/gallery-strip-overlay-group.liquid`
- `blocks/group.liquid`
- `blocks/header.liquid`
- `blocks/heading.liquid`
- `blocks/hotspot.liquid`
- `blocks/icon.liquid`
- `blocks/image-card.liquid`
- `blocks/image-comparison.liquid`
- `blocks/image-text-card-grid-item.liquid`
- `blocks/image-text-stacked-band.liquid`
- `blocks/image.liquid`
- `blocks/localization.liquid`
- `blocks/logo.liquid`
- `blocks/marquee.liquid`
- `blocks/menu.liquid`
- `blocks/metafield.liquid`
- `blocks/pagination.liquid`
- `blocks/parallax-item.liquid`
- `blocks/payment-icons.liquid`
- `blocks/policy-links.liquid`
- `blocks/popup.liquid`
- `blocks/press-item.liquid`
- `blocks/press-quotes.liquid`
- `blocks/previous-and-next-posts.liquid`
- `blocks/product-accordion.liquid`
- `blocks/product-badges.liquid`
- `blocks/product-buy-accelerated-checkout.liquid`
- `blocks/product-buy-add-to-cart.liquid`
- `blocks/product-buy-buttons.liquid`
- `blocks/product-buy-quantity.liquid`
- `blocks/product-callout-gallery.liquid`
- `blocks/product-callout.liquid`
- `blocks/product-card-compact.liquid`
- `blocks/product-card.liquid`
- `blocks/product-description.liquid`
- `blocks/product-inventory.liquid`
- `blocks/product-list-banner.liquid`
- `blocks/product-list.liquid`
- `blocks/product-pickup-availability.liquid`
- `blocks/product-price.liquid`
- `blocks/product-recommendations.liquid`
- `blocks/product-sticky-add-to-cart.liquid`
- `blocks/product-title.liquid`
- `blocks/product-variant-picker.liquid`
- `blocks/promo-card-custom.liquid`
- `blocks/promo-card.liquid`
- `blocks/row.liquid`
- `blocks/scroll-to.liquid`
- `blocks/scrolling-card.liquid`
- `blocks/scrolling-image.liquid`
- `blocks/shop-the-look-product.liquid`
- `blocks/shop-the-look-products.liquid`
- `blocks/slide.liquid`
- `blocks/slide_split.liquid`
- `blocks/slideshow-slide.liquid`
- `blocks/social-links.liquid`
- `blocks/spacer.liquid`
- `blocks/tab-layout.liquid`
- `blocks/tabs-view-all-button.liquid`
- `blocks/tags-and-sharing.liquid`
- `blocks/testimonial-item.liquid`
- `blocks/text.liquid`
- `blocks/timeline-list.liquid`
- `blocks/timeline-slide.liquid`
- `blocks/video.liquid`
- `blocks/view-all-button.liquid`
- `sections/404.liquid`
- `sections/announcement-bar.liquid`
- `sections/article.liquid`
- `sections/blog-posts.liquid`
- `sections/breadcrumbs.liquid`
- `sections/bundle-builder.liquid`
- `sections/cart-drawer.liquid`
- `sections/cart.liquid`
- `sections/collection-banner.liquid`
- `sections/collection-list-thumbnails.liquid`
- `sections/collection-page-breadcrumb.liquid`
- `sections/collection-page-links.liquid`
- `sections/collection-tabs.liquid`
- `sections/collection.liquid`
- `sections/collections-with-background.liquid`
- `sections/collections-with-tabs.liquid`
- `sections/contact-form-custom.liquid`
- `sections/email-signup-dual-image.liquid`
- `sections/email-signup-form.liquid`
- `sections/email-signup-single-image.liquid`
- `sections/faq-accordion.liquid`
- `sections/faq-image-accordion.liquid`
- `sections/featured-blog-posts.liquid`
- `sections/featured-collection-banner.liquid`
- `sections/featured-collection.liquid`
- `sections/featured-product.liquid`
- `sections/footer.liquid`
- `sections/gallery-custom.liquid`
- `sections/header.liquid`
- `sections/hero.liquid`
- `sections/hotspot-full-width-carousel.liquid`
- `sections/hotspot-gallery.liquid`
- `sections/hotspot.liquid`
- `sections/icon-text-cards.liquid`
- `sections/icon-text-inline.liquid`
- `sections/icon-with-text-custom.liquid`
- `sections/image-cards.liquid`
- `sections/image-comparison-split-custom.liquid`
- `sections/image-text-stacked-bands.liquid`
- `sections/location-map.liquid`
- `sections/parallax.liquid`
- `sections/password.liquid`
- `sections/product-information.liquid`
- `sections/product.liquid`
- `sections/promo-grid-custom.liquid`
- `sections/quick-add.liquid`
- `sections/quick-view.liquid`
- `sections/recently-viewed-card.liquid`
- `sections/related-posts.liquid`
- `sections/scrolling-cards.liquid`
- `sections/scrolling-text-star-separator.liquid`
- `sections/search-overlay.liquid`
- `sections/search.liquid`
- `sections/shop-the-look-section.liquid`
- `sections/slideshow.liquid`
- `sections/testimonials-background-custom.liquid`
- `sections/testimonials-horizontal-custom.liquid`
- `sections/text-marquee-custom.liquid`
- `sections/timeline.liquid`
- `sections/zoom-image-banner.liquid`
- `snippets/accordion-details.liquid`
- `snippets/badge.liquid`
- `snippets/block-animation-attributes.liquid`
- `snippets/carousel-navigation-icon.liquid`
- `snippets/cart-surface-style.liquid`
- `snippets/collection-card-render.liquid`
- `snippets/collection-column-icon.liquid`
- `snippets/comparison-table-column-content.liquid`
- `snippets/comparison-table-column-shell.liquid`
- `snippets/comparison-table-row-content.liquid`
- `snippets/comparison-table-row-value-content.liquid`
- `snippets/comparison-table-value.liquid`
- `snippets/component-overlay.liquid`
- `snippets/deferred-stylesheet.liquid`
- `snippets/form-field.liquid`
- `snippets/gallery-strip-item-styles.liquid`
- `snippets/header-localization-styles.liquid`
- `snippets/heading-size-token.liquid`
- `snippets/hero-styles.liquid`
- `snippets/hotspot-dot.liquid`
- `snippets/hotspot-tooltip-pointer.liquid`
- `snippets/icon.liquid`
- `snippets/image-card-content.liquid`
- `snippets/image-comparison.liquid`
- `snippets/image.liquid`
- `snippets/layout-flow-group-style.liquid`
- `snippets/layout-flow-style.liquid`
- `snippets/localization-flag.liquid`
- `snippets/localization-overlay.liquid`
- `snippets/marquee-letter-spacing.liquid`
- `snippets/media-background.liquid`
- `snippets/media-card.liquid`
- `snippets/overlay-background.liquid`
- `snippets/pagination-pages.liquid`
- `snippets/pickup-availability-stores.liquid`
- `snippets/price.liquid`
- `snippets/product-badges.liquid`
- `snippets/product-callout-hotspot.liquid`
- `snippets/product-callout-runtime.liquid`
- `snippets/product-card-image.liquid`
- `snippets/product-card-metafield.liquid`
- `snippets/product-card-placeholder.liquid`
- `snippets/product-card-price.liquid`
- `snippets/product-card-quick-add-overlay.liquid`
- `snippets/product-card-quick-add.liquid`
- `snippets/product-card-quick-view.liquid`
- `snippets/product-card-swatches.liquid`
- `snippets/product-card-title.liquid`
- `snippets/product-card.liquid`
- `snippets/product-collection-grid.liquid`
- `snippets/product-hotspot.liquid`
- `snippets/product-inventory-status.liquid`
- `snippets/product-list-promo-items.liquid`
- `snippets/product-list-promo-styles.liquid`
- `snippets/product-media-lightbox.liquid`
- `snippets/product-media.liquid`
- `snippets/search-query-fields.liquid`
- `snippets/section-content-slot.liquid`
- `snippets/share-button.liquid`
- `snippets/size-style.liquid`
- `snippets/slideshow-image.liquid`
- `snippets/social-icon.liquid`
- `snippets/social-links.liquid`
- `snippets/swatch-option.liquid`
- `snippets/swatch.liquid`
- `snippets/swiper-carousel.liquid`
- `snippets/swiper-navigation.liquid`
- `snippets/swiper-pagination.liquid`
- `snippets/tab-layout-styles.liquid`
- `snippets/theme-button.liquid`
- `snippets/tooltip.liquid`
- `snippets/variant-picker.liquid`
- `snippets/video.liquid`
- `snippets/view-all-button.liquid`


Approved retained-custom exceptions for this update: port only the shared mega-menu width/backdrop and Footer layout-event lifecycle fixes from team f3555270. Preserve existing custom markup, settings, schema, presets and templates. Announcement first-paint/scoped background sizing was already released in the preceding theme commit.

## Native Collection badge migration — 2026-10-20

See [migration plan](../product-card-collection-badge-migration.md). Existing status badges and product-page prefixed-tag behavior are retained. Current labels are mapped to verified collection membership in local settings_data.

Validation: JSON/schema and actual Liquid fixture checks pass; Theme Check has no errors. Live desktop/mobile/Figma QA remains pending. No commit/push/deploy.
