<!-- theme-base-sync-state: {"sha":"de84ae60437b6369b61addd025dd75d1434706be"} -->
# Customization record: zevra-theme

Theme branch: `theme/zevra-theme`
Personal base at creation: `c07753a29c860f64e60567a2fc0d58deb3429c3b`
Theme update source: this repository's `main` branch
Team base source for personal main: https://github.com/Chieu2507/shopify-theme-base (only `main` or `dev`)

Record only theme-specific section/block implementation changes here: Liquid/HTML outside {% schema %}, plus CSS/JS assets and snippets rendered or loaded by those sections/blocks. Theme presets, schema-only changes, template JSON, and saved settings values are not custom code. During base updates, review overlapping implementation paths and describe the expected behavior before resolving. See [the customization policy](../theme-customization-policy.md).

## Customizations

| File/path | Base behavior | Theme-specific behavior | Reason | Update/merge rule |
| --- | --- | --- | --- | --- |
| `blocks/collection-list-items.liquid` | Standard desktop Grid uses equal column widths and a shared gap | Zevra adds Desktop grid layout → Mixed sizes: first two cards span two of four columns, later cards use one column; Row gap desktop lives in Gap and only applies to this desktop mode. Standard Grid, Carousel and mobile column/gap behavior retain their prior defaults | User requested an option on existing Collection list, desktop only, on 2026-10-19 | Preserve grid_layout_desktop / featured_row_gap_desktop settings, conditional visibility and desktop media query; do not restore the discarded custom section/block types |
| `sections/timeline.liquid` | Shared timeline rail uses equal rows, one label size and default page width; split slide padding inflates content column | Zevra Timeline has a1600px content cap, right aligned vertical tabs with active32/24px and inactive20/18px labels, text underline, desktop distributed rail/mobile48px gap and equal image/content grid; local heading/body tracking matches Figma | User explicitly requested theme-specific Timeline custom on2026-10-19 | Preserve Timeline-scoped CSS and existing merchant settings; do not apply these overrides to shared top/bottom rails or other sections; retain preset/template Fit height to avoid clipped mobile content |
| `assets/swiper-carousel.css` | Bottom footer reserves a pagination column | Center Bottom navigation for Product list and Collection tabs when pagination is missing, locked, disabled or hidden on desktop | User requested centering when too few items suppress pagination on 2026-10-19 | Preserve shared reactive CSS selectors so item/breakpoint changes restore the pagination layout automatically |
| `blocks/product-list.liquid` | Navigation positions Inside, Outside and Top | Zevra adds Bottom using the Collection tabs footer: shared arrows alongside pagination, always visible on desktop; arrows hidden on mobile with pagination visibility preserved | User requested Featured collection Bottom navigation parity and both section template presets on 2026-10-19 | Preserve bottom normalization, shared navigation render and grid footer handoff, scoped footer CSS and existing navigation modes during base updates |
| `assets/critical.css`, `snippets/carousel-navigation-icon.liquid` | Icon-only carousel controls shrink to20px icons; base Long arrow paths use global stroke | Zevra navigation Icon only has12px padding and24px large icon (48px button); Long arrow uses original Figma left/right paths with1.25px stroke and inherited currentColor | User requested theme-wide Icon only padding and Long arrow parity with Press Figma on2026-10-19 | Keep changes limited to icon-only navigation and long_arrow branches; preserve shared consumer styling, direction, focus, disabled/hover states and24px viewBox; retain previous unrelated critical.css changes |
| `blocks/press-quotes.liquid`, `blocks/press-item.liquid`, `assets/carousel-runtime.js` | Quotes above logo pagination; heading-only items; first slide selected | Zevra Press layout: logos above quotes, DIOR initially active, edge fade, shared arrows/progress; native Text descriptions. Existing settings control media, spacing, size and padding; Logo layout position/fade plus user-authorized Navigation/Pagination groups with independent mobile visibility | User authorized theme-specific Press matching Figma 47062:15032 / 47230:15700 on 2026-10-19, prioritizing options | Preserve 2:1 media and theme-specific layout; retain shared navigation snippet and native text/heading controls; keep reveal initial-index/progress hooks and abort cleanup scoped |
| `blocks/product-list-banner.liquid`, `snippets/product-collection-grid.liquid` | Banner Product list has mobile swipe but no next-slide preview control | Conditional mobile preview checkbox forwarded through mobile-only carousel branch | User requested Mara-only mobile preview option and enabled preset,2026-10-16 | Preserve setting/pass-through; omitted/false stays disabled for other consumers |
| `snippets/theme-button.liquid` | Shared button filters icon names through its own allow-list | Accept registered mara-quick-add-plus so icon-only Quick add produces SVG instead of an empty button | Fix missing Quick add icon reported by user,2026-10-16 | Keep namespaced glyph admitted alongside icon registry and both Quick add callers; preserve all other validation |
| `snippets/product-card-quick-add.liquid`, `snippets/product-card-quick-add-overlay.liquid` | Icon mode renders cart glyph; overlay wrapper fills image width | Mara icon mode renders namespaced Figma plus and exposes icon modifier for aligned direct/overlay actions | User requested Figma Quick add parity on desktop/mobile,2026-10-16 | Preserve form/overlay attributes, loading states, labels and text/full-width setting paths; retain icon/CSS dependencies |
| `sections/footer.liquid` | Base Footer composition | Preserve variant footer markup/CSS, settings and blocks while adopting top divider, Background media and viewport-aware reveal lifecycle | Owner-authorized Footer base rollout | Merge controls/runtime without replacing the variant preset or saved composition |
| `snippets/media-card.liquid` | Each card reads its own presentation settings | Optional inherit_presentation mode lets fixed Banners supply ratio, position, gap, border, scheme and link target through scoped styles and captured child markup; other callers retain block settings | User requested shared Banners controls, 2026-10-16 | Preserve optional fallback and individual media/link/overlay ownership |

| `sections/shop-the-look-carousel-banners.liquid` | Shop the look uses one static image and product list | Mara-only two-column composition with static Banners group; product active state drives ordered banner fades; editor banner selection reveals matching product; scoped lifecycle cleanup and reduced motion | User requested preset Shop the look: carousel banners; Figma 47015:19975 and 47228:14061, 2026-10-16 | Preserve section, preset, saved instances and shared product-list/media-card dependencies on base updates |
| `blocks/_look-banners.liquid` | No ordered banner group in Shop the look | Static Banners slot allows add/remove/reorder of private Banner children | User requested merchant-editable banners | Preserve child type and order contract; nth banner pairs with nth product |
| `blocks/_look-banner.liquid` | Shared Banner offers a Padding group | Private Banner reuses media-card renderer, removes Padding controls and offers no width controls; parent owns content inset | User requested a section-specific Banner based on Featured collection: Banner | Preserve private schema and media-card dependency; keep width/padding controls absent |

| `assets/carousel-block.js` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/_header-localization.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/blog-list.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/carousel.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/collection-tab.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/product-list.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/tabs-view-all-button.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `sections/collection-tabs.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `snippets/icon.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/_shop-the-look-image.liquid` | Shared image and addable section block list | Only static section slots; private image retains variant ratio/media controls, removes layout width and padding controls; saved image data migrates with stable IDs | Owner-requested Shop the look base rollout | Keep section image private and preserve variant media values when merging |
| `sections/shop-the-look-section.liquid` | Shared image and addable section block list | Only static section slots; private image retains variant ratio/media controls, removes layout width and padding controls; saved image data migrates with stable IDs | Owner-requested Shop the look base rollout | Keep section image private and preserve variant media values when merging |
| `sections/featured-collection-banner.liquid` | Base has header/banner/product-list-banner roles and no CTA layout | Add existing dynamic View all button role; single-role composition places CTA at header right on desktop and after products on mobile, with duplicate-role flex fallback. Keep shared View all button and snippet dependencies. | User authorized Mara-only custom CTA on 2026-10-16; Figma47015:19779 /47228:14029 | Preserve CTA allow-list, four-block capacity, responsive placement and preset/instance on base updates; review shared button dependencies without overwriting theme composition. |
| `blocks/button.liquid` | Button visible at all widths | Visible group adds independent Hide on desktop / Hide on mobile toggles, default false; wrapper hides at the shared 768px content breakpoint | User requested theme-specific responsive Button visibility for Countdown, 2026-10-16 | Preserve setting IDs and complementary media queries; hidden buttons must leave layout and keyboard navigation |
| `sections/custom-section.liquid` | Full width retains global page margins | Adds opt-in full width without padding; other width modes retain their behavior | User authorized Mara-specific settings for Text marquee (custom), 2026-10-16 | Preserve the width option, local selector, and requested preset during base updates |
| `blocks/_marquee-heading.liquid` | Shared tracking presets, scheme text color, no inline padding | Adds fixed 2px tracking, optional text color and independent desktop/mobile horizontal padding | Match Mara Figma typography and text wrappers | Preserve opt-in controls and existing defaults; do not change global tracking |
| `blocks/_marquee-image.liquid` | Width 50–400px in steps of 5, cover crop | Width 4–400px in steps of 4; default mobile width 52px; optional image scale/offset controls reproduce Figma crop from original assets | Select exact 144px/64px slots within Shopify range limits | Retain range/default alignment, original ratio option and crop bindings; review saved instances before merging schema changes |
| `sections/countdown.liquid` | Fixed static content, timer and button slots | Countdown (custom) uses the Custom section block allow-list and dynamic removable/reorderable blocks; shared child sizing replaces slot-specific CSS. Existing settings and timer runtime stay unchanged; saved Countdown instances migrate to dynamic block order. | User requested flexible Countdown composition, 2026-10-16 | Preserve dynamic composition and existing layout options; do not restore static slots |
| `snippets/css-variables.liquid` | Eyebrow `extra_loose` maps to `0.2em` | Eyebrow `extra_loose` maps to fixed `2px` across font sizes and viewports; Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User-authorized match to Mara Figma node `47015:22242`, 2026-10-16 | Preserve the eyebrow-only `2px` mapping during base updates; other spacing options retain base behavior; review ratio schemas, saved values and matching resolver together |
| `assets/header.js` | One-time logo placement; legacy desktop submenu click handler | Reuse Malandra responsive layout cache, complementary 992px boundary, state reset and focus preservation; mobile left composition orders toggle before logo | Mara desktop centered logo / mobile left logo | Preserve Mara order and mobile position contract when merging navigation updates |
| `blocks/_header-top.liquid` | Shared gap and fixed mobile layout | Reuse Malandra independent action/mobile gaps and centered mobile grid; Mara action hit areas and left toggle/logo gap | Configure responsive header preset | Retain settings → CSS variable bindings and test both logo positions |
| `blocks/_header-logo.liquid` | Same logo placement across viewports | Independent mobile placement data and setting; existing global logo/media preserved | Center desktop, left mobile | Preserve responsive position binding |
| `sections/header.liquid` | Transparent home overlay | 20% black surface with desktop blur, solid surface on open/scrolled states | Mara Figma header | Preserve overlay state specificity; presets remain configuration |
| `assets/critical.css`, `blocks/_header-menu.liquid`, `blocks/_header-menu-toggle.liquid`, `blocks/_header-account.liquid`, `blocks/_header-cart.liquid`, `blocks/_header-search.liquid`, `blocks/_header-mega-menu.liquid` | Fractional gap below 992px; desktop nav has tablet scrolling utility | Complementary mobile range queries; remove desktop nav clipping utility | Reuse Malandra breakpoint/clipping fixes | Keep navigation CSS and JS boundaries complementary; retain unrelated layout breakpoints |
| `blocks/_product-media.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `blocks/blog-card.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `blocks/collection-thumbnail.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `blocks/first-card.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `blocks/image-card.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `blocks/image-comparison.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `blocks/image.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `blocks/press-item.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `blocks/product-callout-gallery.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `blocks/video.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `sections/image-text-stacked-bands.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `snippets/_overlay-media-ratio.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `snippets/collection-card-render.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `snippets/image-ratio-value.liquid` | Existing base ratio choices and scalar custom controls where applicable | Essen ratio parity: preserve the corresponding option names/values and 5:4 mapping (1.25); Collection card and Video Custom use W/H, with independent mobile W/H where supported. Keep legacy scalar fallbacks and migrate saved ratios when updating base. | User requested Essen ratio values/names/logic and W/H Custom controls on 2026-10-16 | Preserve existing ratio meanings, W/H bindings, mobile ownership and legacy saved-value compatibility; review upstream schema and mapping together |
| `assets/announcement-bar.js` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `assets/product-collection-carousel.js` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `assets/tab-layout-indicator.js` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `blocks/carousel_split.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `blocks/collections-with-tabs-item.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `blocks/editorial-text.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `blocks/eyebrow.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `blocks/gallery-strip-feature-item.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `blocks/gallery-strip-overlay-group.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `blocks/heading.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `blocks/icon.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `blocks/menu.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `blocks/shop-the-look-products.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `blocks/slide_split.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `blocks/tab-layout.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `blocks/text.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `sections/announcement-bar.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `sections/collections-with-tabs.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `sections/gallery-full-width-strip.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `sections/hero.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `snippets/block-animation-attributes.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `snippets/image-comparison.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `snippets/media-background.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `snippets/product-card.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `snippets/social-icon.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `snippets/social-links.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |
| `snippets/tab-layout-styles.liquid` | Personal main `b7ffd45f`. | Retain the existing theme implementation and custom options; apply only the approved media/ratio fix where relevant. | Preserve the theme layout and behavior while adopting the background fix. | Review future base changes against this retained implementation. |

## Base update decisions

| Base commit | Files reviewed | Decision and reason | Approved by/date |
| --- | --- | --- | --- |


## Header variant fixes — 2026-10-15 follow-up

Read the header portions of [Malandra variant update reference](../../../malandra-theme/docs/variant-updates/malandra-to-elara.md), source clean HEAD `a3aef5c8044e9e14443920da80e83b8358baf971`. Target is Mara local patch. The user's explicit constraint excludes Malandra presets/content/artwork. Source IDs below identify reference fixes; their Elara receipt does not establish Mara QA.

| Reference ID | Mara status | Applied behavior / evidence |
| --- | --- | --- |
| MALANDRA-ELARA-HEADER-NAV-001 | applied | Existing prior Mara patch already removed legacy click handling, clipping utility and breakpoint gap. This follow-up transfers stable first-paint layout and flexible menu spacers; preserves Mara mobile toggle-before-logo order. Desktop menu fonts and configured gaps have no forced compact breakpoint overrides. |
| MALANDRA-ELARA-HEADER-ACTIONS-001 | applied | Previous Mara implementation still duplicated icon sizing, fixed localization/action margins and mobile cart padding. Replaced those offsets with shared icon-size and action-padding variables; native Account avatar spacing normalized; inner icon Editor targets; icon-relative cart badge with RTL handling. Existing action schemas/presets retained. |
| MALANDRA-ELARA-HEADER-COLOR-001 | skipped | Existing Mara `icon` snippet already uses currentColor. Source Figma icon artwork/snippet not imported. |
| MALANDRA-ELARA-ACCOUNT-001 | applied | Source exported dialog-part CSS extends native sheet below 992px, including drawer Account. Runtime boundary-close helper already present. Actual Shopify native component integration still requires storefront verification. |
| MALANDRA-ELARA-LOGO-001 | skipped | Mara uses global normal/transparent logo controls and independent desktop/mobile positions. No mismatched block-specific artwork contract exists; did not add source logo/symbol pickers or branding. Added early layer visibility rules for the existing Mara global logo. |

Additional header Search option: opt-in `show_on_mobile` defaults true. Desktop text/search-bar types remain active from 992px; only the drawer viewport switches the bar to an icon. The former 1400px switch was inconsistent with the navigation mode. Search overlay redesign and Lighthouse updates are outside this header-only transfer.

Changed implementation dependencies additionally include `blocks/_header-menu-toggle.liquid`, `blocks/_header-search.liquid`, `blocks/_header-account.liquid`, `blocks/_header-cart.liquid` and `assets/critical.css`. Preserve original Mara icon renders, existing schemas and all preset trees when updating from base; retain the new Search checkbox. Editor icon targets use one set of block attributes per visible rendered variant. Keep padding on the outer interactive element and badge anchored to the icon.

No changes in this follow-up to `sections/header.liquid`, `sections/header-group.json` or `config/settings_data.json`: SHA-256 before/after checks are identical. The previously built Mara Figma preset remains the configuration source. No Malandra menu, logo/symbol, banners, resource handles or preset values transferred.

QA: 35 browser regression cases pass using Mara CSS/runtime (18 navigation, 7 Mara responsive placement, 4 native-icon action sizing/padding, 2 LTR/RTL badge tests, 4 Search visibility/type cases). The source action fixture was adapted solely to remove the source-only Figma SVG wrapper and exercise Mara's native direct SVG DOM. Theme Check reports 0 errors and 6 existing warnings; JS syntax and diff whitespace checks pass. Full native signed-in/out Account, actual Theme Editor inspector/reorder and storefront visual parity remain pending, so integration status is applied. No preview start/upload, publish, commit or Git push performed.


## Figma menu and icons — 2026-10-15

User requested store menu setup and exact Figma header icons. Created dedicated **Mara Header**, handle `mara-header`, ID `323742859563`, on `layouthub-template-v2.myshopify.com`; ordered labels Home, Shop, Collections, Pages. Targets use native Shopify Home page, All products, All collections and the existing Contact page respectively. Figma does not specify Pages' destination; Contact is the selected existing functional page. Main menu and other theme menus are unchanged. Updated only menu references in the local Header preset and saved group; did not save theme settings through Admin.

`snippets/icon.liquid` registers five namespaced `mara-header-*` icons from the Mara Figma desktop/mobile header, preserving source geometry/dimensions and using currentColor for scheme transitions. Existing library keys are preserved for unrelated consumers. Header Search, Account, Cart and mobile toggle select these icons; `_header-localization.liquid` selects the exact 16px chevron. Keep these keys/calls and original SVG path/stroke geometry during base updates. No artwork/preset/menu from Malandra was copied, no icon SVG was placed in assets, and no temporary Figma URL is used at runtime.

Evidence/source hashes: [menu/icon receipt](../audits/mara-header-menu-icons-2026-10-15.json). Theme Check: 0 errors, 6 existing warnings. Menu/resize/Search regression suite: 29 cases pass. Icon geometry/scheme checks use actual registered SVG output with current theme CSS at 375/1920px; account/localization hidden on mobile and menu hidden on desktop are expected. Storefront/Theme Editor native integration remains pending; no manual theme push/publication or Git delivery.

## Shared mobile card preview — 2026-10-15

User authorized custom implementation using Elara/Malandra references. Transferred only preview bindings/policy, retaining Mara content, schemas, promo slots, block allow-lists and lifecycle. No source presets/artwork imported. Reference owners: sibling `elara-theme` and `malandra-theme`; implementation is local Mara.

| File/path | Base behavior | Theme-specific behavior | Reason | Update/merge rule |
| --- | --- | --- | --- | --- |
| `blocks/product-list.liquid`, `blocks/blog-list.liquid`, `blocks/product-callout-gallery.liquid` | Desktop preview only | Independent mobile checkbox default false and forwarding to shared carousel; callout keeps stable owner flags across reinitialization | Consistent card preview controls | Preserve flags, existing promo loops, static slots and settings; review corresponding base binding changes |
| `blocks/shop-the-look-products.liquid` | No preview controls | Independent desktop/mobile preview flags, both default false, forwarded to existing shared Swiper | Same controls for product carousels | Preserve hotspot synchronization and grid behavior; do not replace with sibling section implementation |
| `sections/collection-tabs.liquid`, `blocks/collection-tab.liquid` | Desktop preview only | Section-owned mobile checkbox default false, passed by each collection tab | Shared setting across tabs | Preserve deferred rendering and promo behavior; retain mobile argument through tab refresh |
| `blocks/carousel.liquid`, `assets/carousel-block.js` | Integer mobile columns | Optional one-column 1.2 mobile preview, matching pre-JS widths; explicit two-column choice retained; insufficient slides suppress preview | Common Carousel matches product lists | Retain independent flags and 768px boundary; preserve current base controls and slide-only child contract |
| `assets/carousel-runtime.js` | Fixed integer runtime layout | Optional owner layout resolver; fractional loop uses existing manual-loop machinery, disables incompatible fade | Common preview without changing other owners | Keep hook opt-in; owners without resolver retain baseline; retain scoped lifecycle and clone accessibility |
| `assets/product-collection-carousel.js` | Requested mobile preview applies even for one item | Only use 1.2 when more than one slide exists | Avoid undersized lone card | Preserve two-column choice, desktop breakpoints and existing autoplay/cleanup |

`snippets/product-collection-grid.liquid`, `snippets/swiper-carousel.liquid`, shared Swiper CSS/runtime and Collection list already support mobile preview; reused unchanged. Timeline has its own existing preview contract. Slideshow and private Testimonial remain on their existing layout contracts.

Configuration: Featured collection preset and homepage `new_arrivals` Product list set mobile preview true, desktop false. Other saved section compositions remain unchanged; absent new flags default false. Media remains unselected. 1.2 slides yields approximately284.5px cards in343px content at8px gap, versus Figma280px; no hardcoded per-theme card width introduced.

Validation: 34 carousel/lifecycle/autoplay/Testimonial regression cases pass, including new mobile on/off, two columns, zero/one item and legacy viewport fallback checks. Theme Check0 errors/6 existing warnings; whitespace check passes. Actual storefront/Theme Editor visual and interaction verification remains pending because no preview server is available. No store deployment, publish, commit or push.

## Product card padding rollback — 2026-10-16

The user withdrew the Mara-specific hardcoded Card padding. Restored the existing main/base Card rules (`padding-inline: var(--details-spacing, 22px)`) at both breakpoints. Standard transparency and Featured collection global scheme inheritance remain.

Local inspection finds an existing binding gap shared with main: Content spacing emits `--product-card-content-spacing` / `--product-card-content-spacing-mobile`, but only Standard consumes these tokens; Card consumes undefined `--details-spacing` with22px fallback. Settings-data changes alone therefore cannot adjust Card padding. Reference theme161667842133 on omnise-theme-base could not be inspected: local browser access is disabled in Work settings and the Admin URL is inaccessible through web tools. No inferred replacement binding was implemented. Exact Figma padding remains pending reference verification.

## Product card Content spacing binding fix — 2026-10-16

User authorized fixing the binding gap above. Shared Card content now consumes `--product-card-content-spacing` for all-side desktop padding and `--product-card-content-spacing-mobile` at the existing mobile breakpoint; undefined `--details-spacing` is removed from both Card rules. Standard retains its top-only spacing behavior. No new settings or hardcoded theme padding. Current settings are20px desktop /16px mobile, matching Figma horizontal/bottom padding; Figma top16px/12px cannot be independently represented by the single spacing control. Reference-theme visual parity remains unverified because browser access is disabled. Preserve this binding fix when updating from base until the base incorporates it.


### Countdown base synchronization — 2026-10-16

Source: personal main `2593c6f2`, imported from team dev `2a9a0caf` and `fea78bca`. Synced theme branch commit `9fe22c8915d1cedaba3bbce0fddf8370fbf8d9ee`. Countdown uses dynamic blocks and Countdown (custom) preset; existing local custom work, option values, content and layout remain. The full release/customization history is preserved in the committed version of this record.

## Image comparison titles and buttons — 2026-10-16

User authorized custom block controls: relabel Before/After Label as Title, add Button label then Button link for each side, and a shared Button group immediately below Typography based on Button block, excluding Size/Padding groups. Kept `before_label` / `after_label` setting IDs for saved content compatibility. Shared options: style, open in new tab, show icon, icon, icon position, icon sizing and width. Reuses `theme-button` for global typography, scheme colors, variants, accessibility and new-tab semantics. Empty button labels preserve legacy label rendering; button content is outside clipped media layers and above the range, with pointer events limited to the buttons so slider dragging remains available elsewhere. No JavaScript/lifecycle changes.

| File/path | Base behavior | Theme-specific behavior | Reason | Update/merge rule |
| --- | --- | --- | --- | --- |
| `blocks/image-comparison.liquid` | Before/After richtext labels only | Title labels, per-side Button label/link and shared Button controls forwarded to snippet | Explicit user request | Preserve existing label IDs and optional new settings; retain ratio changes already present |
| `snippets/image-comparison.liquid` | Labels inside media layers, range covers viewport | Optional title/button stacks outside clipped layers, clickable shared theme buttons above slider | Buttons must receive pointer/keyboard input | Preserve optional caller compatibility and keep button hit areas above range |

Updated only requested Custom section preset/homepage comparison content: Peach bud pink / Pale sage green titles and tertiary View product buttons. Links remain unselected. No Size/Padding controls copied from Button. Mobile title visibility was not added by this request and remains a Figma gap.

Validation: Theme Check 0 errors /7 warnings (new ExcessiveSettingsCount advisory:48 settings versus recommended40); schema order/unique-ID assertions pass;4 ratio regression cases pass; diff whitespace passes. Actual storefront/editor interaction and visual verification remain pending. No store content writes, deployment, publication, commit or push.

## Collection tabs Left layout — 2026-10-16

Mara-only customization in `sections/collection-tabs.liquid`: vertical section layout with Tab position Left uses a desktop row-reverse controls group, placing Tabs on the left and Header on the right with space between. Header width can shrink from its saved Fill setting; long content can wrap. View all stays below the products, matching the other tab positions. Mobile and horizontal section layout retain their existing composition. Preserve this override during base synchronization.

View all diagnosis: `blocks/tabs-view-all-button.liquid` emits the action only if at least one selected collection has more products than `max_products`; the active tab controls its URL and visibility through `blocks/tab-layout.liquid`. Both collection selections in the current local homepage are empty, with `max_products: 4`, so no View all markup is emitted. Select a collection with more than four products to display it for that tab. Existing visibility policy is retained.

Validation: 16 collection tab deferred-loading/card-motion/lifecycle tests pass; diff whitespace passes. Native storefront/Theme Editor visual verification remains pending.

Collection tabs Right follow-up: desktop vertical layout now shares the Left row sizing/wrapping and uses `row` instead of `row-reverse`, placing Header left and Tabs right. Center, mobile and horizontal layouts retain existing behavior.

Collection tabs mobile alignment follow-up: below 768px the section resets the desktop controls alignment token to Mobile alignment and applies Mobile alignment explicitly to View all (previously always centered). Header and Tabs use the same mobile value. Tab position Left/Center/Right affects desktop only.

## Image comparison mobile title visibility — 2026-10-16

User authorized a custom Hide on mobile option at the end of the Typography group, replacing Show text background, and Figma preset alignment. `blocks/image-comparison.liquid` adds `hide_title_on_mobile`, default false, with help text explaining that titles hide and buttons remain visible. Removed the old checkbox from schema; legacy saved background values remain readable for compatibility. Updated block/default split presets to the new setting. `snippets/image-comparison.liquid` maps the optional setting to an instance modifier and hides only title elements (including legacy standalone labels) below the existing 768px breakpoint. Desktop titles, buttons, slider input and JavaScript/editor lifecycle remain unchanged. Named Image comparison (custom) preset and homepage choose_colour enable the option. Preserve this opt-in behavior and default on base updates. No global settings or unrelated instances changed.

Validation: schema confirms checkbox is last in Typography before Button; old Show text background control removed. Browser at375px confirms both titles display:none and both buttons display:flex; at1920px both titles display:block and both buttons display:flex. Four image-ratio regression tests pass; Theme Check0 errors/7 warnings; diff whitespace passes. Existing preview watcher synchronized local changes; no manual push or Theme Editor save.


## Footer social customization — 2026-10-16

User explicitly authorized social icons as a theme-specific exception during build-preset, `#` placeholders for missing URLs and saving this workflow to source skills. Figma desktop `47049:12608`, mobile `47228:14097`, file `bH9A5237I07NWt19Cua9gL`.

| File/path | Base behavior | Mara behavior | Reason | Update/merge rule |
| --- | --- | --- | --- | --- |
| `snippets/social-icon.liquid` | Shared generic platform SVGs in a24px wrapper | Exact Figma Facebook/Instagram/YouTube/TikTok/X geometry in standalone20px SVGs, currentColor; native Pinterest/LinkedIn retained | Requested Footer icon fidelity | Preserve source paths/viewBoxes and accessible decorative treatment; review platform cases independently on base update |
| `snippets/social-links.liquid` | Facebook/Instagram/TikTok/YouTube/Pinterest/X/LinkedIn order | Facebook/Instagram/YouTube/TikTok/X first, followed by unchanged optional Pinterest/LinkedIn; links/text mode behavior retained | Match Footer Figma order | Keep Mara order and existing URL/accessibility handling; do not copy Mara social placeholders to other themes |

Footer preset/group/global settings are configuration. New global normal logo is the original Footer vector converted to AVIF; transparent logo retained. Actual menu/page/media IDs, validation and remaining UI gaps: [Footer audit](../audits/mara-footer-preset-2026-10-16.md). Existing external preview synced changes; no manual theme push/publish/Git delivery.

### Image comparison Visible group follow-up

Restored Show text background with the exact main schema contract (same ID, translated label, default true). Group Visible immediately before Color now contains Show text background followed by Hide title on mobile (existing ID/default preserved, no info text). Named Mara preset/homepage explicitly keep background false and mobile title hiding true; base block and split preset restore background true. Existing rendering bindings reused without implementation changes.

## Image comparison content clipping correction

User requested title/button content to be covered with its image while dragging, matching main label behavior. Shared snippet wraps each optional slider content stack in an instance-local full-viewport clipping surface driven by the existing position token. Before reveals left/top; after reveals right/bottom for horizontal/vertical sliders. Wrappers retain buttons above the range and pointer events only on buttons. Side-by-side and runtime unchanged. Preserve clipping surfaces during base updates.

### Text background conditional control

Text background picker now uses visible_if on Show text background. Its CSS colour override is emitted only while the checkbox is enabled; disabled state continues to render the transparent no-label-background variant. Block preset defaults to false; named Mara preset and homepage already explicitly false. Checkbox schema default and other section presets remain unchanged.

### Preset schema synchronization repair

Preview log confirmed sections were initially uploaded before restored block schema, producing undefined show_text_background errors. Block had subsequently synchronized successfully; retriggered both affected section files after it. Both sections logged successful sync and fresh localhost readback contains no Upload Errors/undefined setting. Validated nested image-comparison preset IDs against block schema. Split preset now explicitly disables background as requested. Theme Check0 errors/7 warnings.

## Collection tabs Bottom navigation and Figma preset — 2026-10-16

Sources: Mara Figma desktop `47015:18412`, mobile `47228:14011`. `navigation_position` now offers Bottom, independently of Tab position. Desktop renders previous / View all / next in a full-width footer below products; mobile hides the arrows and View all follows Mobile alignment. The existing tab runtime owns active-carousel events, disabled edge/lock states, deferred transitions and cleanup. Per-tab overlay arrows are suppressed for Bottom. Four products at four desktop columns lock both arrows; no extra unseen products were invented to make the arrows move.

View all correction: Shopify Theme Block entries may expose generic `@theme` types. The old `where: 'type', 'collection-tab'` filter discarded those entries. Resolve the section's dynamic tabs directly, consistent with `collection-tab.liquid`. Non-Bottom layouts retain the overflow-only policy; Bottom renders a link for any non-empty selected collection, matching Figma's four-card/footer composition.

Files: `sections/collection-tabs.liquid`, `blocks/collection-tab.liquid`, `blocks/tabs-view-all-button.liquid`, `templates/index.json`. Preserve Bottom's section-owned footer, external-navigation hooks and generic-type correction when synchronizing base. Preset retains its original name/category. Homepage and Add section preset use Center / mobile Center, Bottom, four desktop columns, mobile next-card preview, 40/32px gaps, 96/64px bottom padding. Typography uses existing H2 tokens (32px desktop /24px mobile); no global settings changed.

Store content on `layouthub-template-v2.myshopify.com`: created manual Best Sellers Mara (`best-sellers-mara`), ordered Roma Blue → Spy Small pale sage green → Vanity Rose → Peekaboo Soft Beige. Reused Roma and New Arrivals Mara for New in; Figma supplies no alternate New in state. Three new products have Mara-prefixed handles, source prices, descriptions/summary, native linked color swatches, Online Store publication and 20 units per available variant. Floral white Vanity stays sold out as pictured. Primary media uses original Figma product assets; each new product has four gallery images. Peekaboo's three supplementary photos were generated from its original bag reference and visually checked; Spy/Vanity reuse existing same-model variant/lifestyle photos. See `../audits/mara-collection-tabs-2026-10-16.json` for IDs/CDN readbacks.

Validation: 18 Liquid/runtime/deferred/card tests pass; Theme Check 0 errors /7 existing warnings; diff whitespace passes. Optional Shopify Toolkit Liquid validator cannot start because its installed bundle lacks `@shopify/theme-check-common`; Shopify CLI Theme Check provides the successful validation. Native storefront/editor visual checks remain blocked because local browser access is disabled. No theme push/publication, commit or Git push.

Known visual limits pending preview: original source images retain their source canvas framing rather than Figma's per-image offsets/scale; shared 1.2 mobile preview computes approximately284.5px versus Figma280px; native swatch selection/order follows Shopify's available/default variant semantics; the raw `New` tag is stored correctly but the current card badge renderer does not display raw product tags. Shared card top padding and tab typography/underline retain the existing foundation. These are not claimed as pixel-perfect matches.

### Collection tabs typography, View all readback and extra slides — 2026-10-16

Confirmed through actual local preview HTML that both tab triggers have valid URLs and `data-view-all-available="true"`, but the static View all block still emitted no action: its sibling-resource Liquid guard evaluated false. The block now always emits the labeled action, initially hidden/disabled if no server-side URL is available. Existing scoped tab initialization supplies the selected tab URL and visibility. This supersedes the earlier assumption that removing the type filter alone resolved the omission. No-JS per-tab collection links retain access without the runtime. A regression test covers initial reveal, switching URLs and clearing stale links.

Mara section-scoped tab typography now follows Figma's Urbanist/body14px, button weight500, tracking0.6px, line-height1.5 and uppercase. Underline navigation consumes the block's32px desktop/mobile gap, has a content-width gray baseline and4px tab bottom spacing. Other typography sizes/font selections remain driven by the block/global tokens; no global typography settings were changed.

For the requested extra slides, reused existing Mara products: appended Spy Small Peach and Vanity Floral white to Best Sellers (now6), and appended Roma/Sage/Rose/Beige to New Arrivals (now8). Both manual orders preserve the original first four cards. Updated Max products to8 in Add section preset and homepage, retaining4 desktop columns. Preview HTML confirms6 Best Sellers slides plus the View all wrapper. Collection counts6/8 were read back from Shopify. New Arrivals is shared with the homepage Featured collection, so the larger membership is also available there; its configured product limit remains unchanged. No duplicate product records or additional media uploads were required for this follow-up.

QA:19 tests pass; diff whitespace passes. Native visual/click verification remains pending browser access. This follow-up corrects the earlier tab typography gap; source-image crop, native swatch behavior and raw New badge gaps remain as recorded above.

### Restore original View all overflow condition — 2026-10-16

User requested retaining the original visibility condition. Removed Bottom's zero-threshold exception from the action block and each tab trigger/no-JS link: all positions now require a non-empty label, collection URL and `products_count > max_products`. Kept the hidden runtime action to fix missing sibling settings in static block context. Preset and homepage Max products now5 with4 desktop columns; Best Sellers6 and New Arrivals8 both satisfy overflow and have enough rendered slides to scroll. This supersedes earlier Bottom policy and Max products8 notes.19 regression cases pass, including equal-limit hidden and greater-than-limit eligible.

Updated source skills in agents-build-themes: store-content-media routes View all work to its Collections reference; build-preset coordinates limits, columns, catalog availability and actual visibility checks without changing original theme conditions or expanding content permissions.


## 2026-10-16 — Editable split testimonial slides

User explicitly requested unlocking the built slide blocks for add/remove/reorder, alongside two Figma slides and original media. `blocks/slide_split.liquid` now uses dynamic `content_for blocks`; static image/content wrappers and fixed half-width/reversed layout are removed so native groups/rows/columns control composition and order. Navigation retains existing carousel hooks, icons and localization; mobile controls reserve intrinsic height. `scripts/migrate-testimonial-carousel.cjs` unlocks legacy static slots and preserves current dynamic order. Keep this dynamic-child contract when updating from the base; do not restore fixed slots or reverse merchant order. Section/carousel/slide presets and homepage were synchronized. Sources and validation: `docs/audits/mara-testimonial-preset-2026-10-16.md`; original media receipt: `docs/audits/mara-testimonial-media-2026-10-16.json`.


### Shop the look base synchronization — 2026-10-16

Source: personal main `13865852`, imported from team dev `bf4b69b5`. Synced theme branch commit `dd23a40f478dd3da6ac305092e1c07d57cb236be`. Shop the look uses static slots and private Image, without image layout width or padding controls; existing local custom work, option values, content and layout remain. The full release/customization history is preserved in the committed version of this record.


## 2026-10-16 — Mara testimonial navigation placement and fade

User explicitly requested a Mara-only customization to match navigation placement in Figma desktop `47015:22037` and mobile `47228:14046`. In `blocks/slide_split.liquid`, desktop controls are anchored inside the slide at the logical bottom-right edge, scoped to `.section-testimonial-split`; they no longer add a footer below the image. Mobile retains the bottom-right flow row with 24px spacing after content. Dynamic block order, existing icons, hit areas, disabled states, localization, and carousel runtime hooks are preserved. Keep this scoped placement when updating the base. Homepage and Testimonial: split / Carousel Add presets use `transition_style: fade`.

## Blog posts — Figma 6:7 image ratio (2026-10-16)

Explicit user request: add and synchronize the missing Figma ratio. `blocks/blog-card.liquid` adds `ratio_6_7` (Portrait - 6:7), accepts it in normalization and maps it to exact CSS `6 / 7`. Existing media CSS applies cover cropping at this ratio on desktop and mobile. Other option values/defaults remain compatible. Keep the schema option and Liquid mapping together when updating base.

Configuration: the Blog posts Add section preset and homepage `our_stories` Blog card both select `ratio_6_7`. Figma desktop 47015:22124 has 517.33 × 603.56px media; mobile 47228:14080 has 343 × 400.17px media. Both are 6:7. No other blog/card instance is migrated.

Validation: 5 direct Liquid render checks pass (6:7, existing 4:5/5:4, Auto and invalid fallback), schema/preset synchronization and `git diff --check` pass. Full Theme Check: 0 errors, 6 existing settings-count warnings. Existing `view-all-blog` suite: 9 pass, 3 failures in collection-tabs CTA expectations outside this ratio change; those files are unchanged by this task. Browser/Theme Editor visual QA unavailable; no deployment, commit or push.

| `blocks/gallery-strip-feature-item.liquid`, `sections/gallery-full-width-strip.liquid` | Feature remains in merchant order with square ratio | Opt-in Show first on mobile adds a class; parent applies order -1 below 768px and content-driven height with 80px total vertical inset in Mara preset | User requested Mara-only Figma Gallery 47015:20289 / 47260:13564, 2026-10-16 | Preserve checkbox default false, desktop order, block attributes and mobile layout on base updates |
| `blocks/gallery-strip-overlay-group.liquid` | 12px desktop / 8px mobile gap, inherited tracking | Mara uses 16px heading/button gap and 2px heading tracking | Match Gallery Figma | Preserve local typography without changing shared heading block |


## Ratio values and labels aligned with Elara — 2026-10-16

Aligned 23 ratio select option lists across 16 shared schema owners with the local Elara theme, including option value, label and order. Existing geometry is migrated to canonical ratio_N_D values in presets, templates and global product-card settings. Collection-thumbnail legacy portrait and landscape use their actual 2:3 and 3:2 geometry. Mara blog-card 6:7 selections migrate to Custom with dimensions 6 and 7. Original, custom and supported fill-height behavior remain available. Existing legacy values remain readable at runtime.

Updated shared ratio resolution, numeric block/section consumers, collection-thumbnail and collection-tab panels, and product-card global tokens. Added custom dimension controls where needed without replacing existing dimension IDs. Shared ratio translations follow Elara. Banner and swatch ratio options already match Elara and remain unchanged.

Validation: 23 exact Elara option lists; 218 saved preset/template ratio values valid; 12 shared helper render cases match Elara; 99 actual owner Liquid render cases passed. Theme Check: 0 errors, 6 existing settings-count warnings. No test files modified or output directory created. No Git commit or push in this follow-up.

## Tab layout Sliding line — 2026-10-16

User requested restoring Underline to main before introducing a separate Mara style. Existing `snippets/tab-layout-styles.liquid` rules are byte-for-byte preserved from local main; all previous Mara Collection tabs typography/gap/baseline overrides now select `tab-layout--sliding_line` only. Button and Underline retain main's styling. Collection tabs Add section preset and homepage now select Sliding line.

New `style: sliding_line` uses a thin horizontal baseline and one2px moving indicator sized from the target tab's actual rectangle. Hover/focus previews a tab; leaving restores the selected tab; changing tabs updates the indicator without changing existing deferred product loading. Desktop section Horizontal automatically stacks tabs and uses a left-side2px baseline, with indicator height matching each tab including10px vertical padding and12px inset. Reference: Essen Figma `v6iKvP4OuW3y0A9bbxel5U`, node `46306:2059`. Only the vertical layout/line treatment transfers; Mara typography remains. Mobile returns to horizontal Tabs with Mobile alignment. Vertical layout is hidden and ignored for this style, including an old saved true value.

Files: `blocks/tab-layout.liquid` normalizes/schema-loads the new option and its module; `snippets/tab-layout-styles.liquid` appends isolated styles; `assets/tab-layout-indicator.js` owns scoped measurement, hover/focus, vertical arrow keys, tab/resize/font updates and idempotent editor cleanup. Uses CSS transitions for position/width/height and respects reduced motion. Existing tab runtime remains the owner of tab activation, selection semantics and View all. `sections/collection-tabs.liquid`, `templates/index.json` and schema locale register/configure the new style. Preserve these namespaced additions and restored base rules on sync.

Verification: explicit comparison confirms the complete main stylesheet prefix is unchanged; schema JSON/unique option assertions and JS syntax pass.2 indicator tests cover variable text widths, hover restoration, vertical height, touch exclusion and unload/reinitialize;16 existing tab deferred/card tests pass. Browser visual QA remains pending; no manual theme push/publication or Git delivery.


## 2026-10-16 — Split carousel Navigation settings

User requested the ordinary carousel Navigation controls with Left/Right positioning. `blocks/carousel_split.liquid` now owns a single shared `swiper-navigation` instance and exposes desktop visibility, Position (left/right), Style (primary/secondary/outline/icon_only), Icon and Behavior. Position applies on desktop and mobile. The default Right + Icon only + Long arrow + Always preserves the Figma appearance; homepage and section/carousel Add presets explicitly save these values. `slide_split` retains editable content blocks and no longer renders per-slide controls. This supersedes the earlier per-slide navigation ownership while preserving desktop bottom placement, mobile 24px spacing and fade.

Validation: schema/preset setting checks, three focused existing testimonial runtime/preset tests and diff whitespace checks passed. Full Theme Check inspected 379 files: zero errors, six existing ExcessiveSettingsCount warnings, unsuppressed. Browser/Theme Editor visual verification unavailable because local browser use is disabled. No commit, push or manual deployment.


Mobile navigation follow-up: added Show navigation on mobile and conditionally visible Position (mobile), Left/Right. Mobile visibility/alignment use independent data attributes; desktop Position is unchanged. Homepage, section and carousel presets enable mobile navigation with Right alignment, retaining Figma icon-only appearance and 24px spacing. Schema/preset validation, three focused existing tests and diff checks pass; full Theme Check: zero errors, six existing settings-count warnings. Browser visual QA unavailable.


### Footer base synchronization — 2026-10-16

Source: personal main `793e6ecf`, imported from team dev `1c3db7a1`. Synced theme branch commit `3ee3aca2c9af4e014e1a79e0e4653636c2401f90`. Footer adopts the top divider, Background media and viewport-aware reveal controls while preserving the variant composition; existing local custom work, option values, content and layout remain. The full release/customization history is preserved in the committed version of this record.


### Announcement bar — optional close button (2026-10-16)

Mara-only option `show_close_button` in `sections/announcement-bar.liquid`, default false; enabled in Mara preset and `sections/header-group.json`. Uses the existing `icon` snippet's `close` value, inherited scheme color, 16px icon and a right-edge button with focus outline. Symmetric content inset avoids text overlap. Figma header reference: `bH9A5237I07NWt19Cua9gL`, `47039:24637`; exact SVG/position comparison is pending because MCP quota was exhausted.

`assets/announcement-bar.js` owns instance-local dismissal: destroy timers/listeners/observers, hide the surface for the current page only, and move focus to the next header control when available. No storage/cookies. Theme Editor section selection restores and initializes a dismissed surface; load/unload remains idempotent. Preserve the setting, conditional markup/CSS and runtime handlers when updating base. No global icon geometry changed.

## Quick add icon treatment — 2026-10-16

Existing current settings already select enabled=true, mobile=true, style=icon, full_width=false and scheme-3 (white primary surface/dark foreground). These values and saved factory presets are preserved. No existing option controls glyph, placement, dimensions or surface opacity.

`snippets/icon.liquid` registers mara-quick-add-plus using the original SVG from the prior Figma mobile context47228:14029 (assetab594.svg). Preserve source24×24 dimensions/viewBox, path geometry and1.25 stroke; currentColor replaces source paint, duplicate SVG IDs removed, decorative accessibility attributes added. Cart/library icons are unchanged. A fresh Figma context request hit the View-seat MCP limit; prior high-fidelity context/screenshot plus downloaded original SVG supplied the design evidence.

`assets/critical.css` adds product-card media-scoped icon/non-full-width styling: bottom/inline-end16px,40×40px square button,24px glyph,2px backdrop blur and60% surface opacity from the selected primary-background token. Hover foreground/background still follow scheme tokens. Direct-add form and multi-variant overlay share the icon modifier. Existing desktop hover/focus reveal, mobile visibility, text mode, full-width option and search-suggestion layout outside the media wrapper are preserved. No new schema settings or JS. Applies to all Mara product-card consumers.

During base updates preserve this CSS, both Quick add snippets and icon registration together. Validation:13 cart/overlay tests passed, Theme Check0 errors/6 warnings, diff check passed. Browser automation is disabled in Work settings, so rendered desktop/mobile and live click verification remain pending; code validation is not visual parity proof. No manual push or publish.

Quick add icon follow-up: the first implementation omitted the namespaced glyph from theme-button’s independent allow-list, producing an empty icon-only control. Added that exact key and a cross-file regression check covering both Quick add callers, button filtering and icon registration.14 tests pass; Theme Check0 errors/6 warnings. Localhost9300 has no listener for HTML readback; browser automation remains disabled, so live render verification is pending.


## Header horizontal overflow — 2026-10-16

The hidden desktop header-menu backdrop used 100vw and centered itself with translateX(-50%). With a 1920px browser window and 1905px document client width, its right edge reached 1912.5px and made the page scroll horizontally by 8px. Changed the backdrop to inset-inline:0 and width:100%, removing the horizontal transform. Mega-menu panels now consume the existing --header-mega-width measured by header.js instead of 100vw. No global overflow clipping was added.

Live localhost:9300 measurements after reload: document/body scrollWidth equals document clientWidth at window widths 375,390,768,1024,1440,1920 (client widths 360,375,753,1009,1425,1905). No horizontal overflow in those checks. Theme Check:0 errors,6 existing settings-count warnings; git diff --check passes. No test files or output artifacts added.

## Featured collection: Banner mobile preview — 2026-10-16

Product list adds show_next_slide_preview_on_mobile immediately after Enable swipe on mobile, visible only when swipe is enabled. Schema default false preserves existing instances; block preset, Featured collection: Banner preset and homepage instance explicitly enable it. Shared grid forwards this opt-in in its mobile-only branch to swiper-carousel, which owns the data attribute and fractional slides through existing runtime. Swipe off selects normal grid and ignores preview. Desktop keeps two-column grid. No new CSS/JS or other consumer opt-in. Browser automation disabled; live editor and responsive rendering pending.

Mobile preview validation:3 banner contract tests and2 shared lifecycle tests pass; Theme Check0 errors/6 warnings; diff check passes. Broader carousel-shared suite has a preexisting schema snapshot mismatch (shared carousel already exposes mobile preview while its expected setting list omits it); shared carousel schema was not changed in this task. Updated the stale banner role expectation from3 to the existing4-role custom contract.


## Mobile Menu toggle icon color — 2026-10-16

`blocks/menu.liquid`: the existing Chevron/Plus toggle wrapper now consumes `--menu-block-heading-color` with `--heading-color` fallback, matching the heading instead of inheriting the section body color. Footer preset and saved menu instances already use `heading_color: #181818`, matching Mara mobile Footer Figma `47228:14097`. Existing SVGs continue to consume currentColor; rotation, accordion behavior, setting IDs and options are unchanged. This applies to all Menu block consumers in Mara; preserve the color mapping during base updates.

Original Figma Plus SVG replacement remains pending: no local source SVG was available, downloads did not complete, and Figma MCP still reports the View-seat quota limit. Existing 24px viewBox geometry in an18px wrapper is retained, rather than fabricating the source20px asset. No pixel-exact or live-browser verification is claimed.


### Mobile Menu Plus source resolved — 2026-10-16

Read the original SVG from Figma Inspector's Copy SVG for node `47215:5017` (Mara mobile Footer). Replaced only the existing `plus` branch in `blocks/menu.liquid`: original20×20 viewBox, exact path `M4.16666 10.0001H15.8333M9.99582 15.8334L9.99582 4.16675`, stroke1.25, round caps/joins. Stroke uses currentColor through the heading-color mapping; the Plus wrapper is20px to preserve the source dimensions. Chevron geometry/sizing is unchanged. Existing45-degree open-state rotation and accessibility remain intact. All Mara Menu blocks selecting Plus share this replacement; no new icon key, option, snippet or store media was added. Supersedes the pending source-availability note above; live storefront verification is still pending.


### Menu sibling stroke consistency — 2026-10-16

Chevron retains its original path,24px viewBox and18px rendered box. Stroke1.66667 scales to1.25px, matching the original Figma Plus1.25px stroke at20px. Both use round caps/joins. This calibrates sibling stroke only; Chevron geometry is not claimed as Figma-exported. Color mapping and open-state rotation remain unchanged. Applies to existing Mara Menu Chevron consumers. Source build-preset skill now requires matching visible stroke/cap/join style across related existing values in the same option, without adding icons or redrawing sibling paths. Live rendering remains unverified.

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
  - `sections/featured-product.liquid`
  - `sections/gallery-carousel.liquid`
  - `sections/gallery-full-width-strip.liquid`
  - `sections/gallery-image-grid.liquid`
  - `sections/icon-text-cards.liquid`
  - `sections/icon-text-inline.liquid`
  - `sections/image-cards.liquid`
  - `sections/image-text-split-layout.liquid`
  - `sections/promo-grid-custom.liquid`
  - `sections/rich-text.liquid`
  - `sections/scroll-reading-text.liquid`
  - `sections/testimonial-carousel.liquid`
  - `snippets/image-ratio-value.liquid`
  - `snippets/media-background.liquid`
  - `snippets/media-card.liquid`

### 2026-10-16 — Announcement/Header first paint follow-up

- Reference: Arche `assets/critical.css`, overlay Header first-paint rules. The previous media-ratio release did not port this separate Header fix.
- Add the same server-rendered overlap geometry and transparent scheme rules to Mara before deferred section CSS or Header initialization.
- Include both direct `img` and `picture > img` Announcement background markup in critical sizing and cover rules; a mobile image is optional. Scope these sizing selectors under `.announcement-bar` so later shared `.image` CSS cannot reset their absolute placement or height.
- Preserve Announcement/Header settings, content, placement, animation, templates and preset values.


### Announcement Close alignment — 2026-10-16

Figma node47045:12545, inspected through its Header > Container > close layers:1920px root,1824px centered container,16px Close at right0/bottom8px. The visible icon therefore ends48px from the viewport edge. `sections/announcement-bar.liquid` now positions the32px button at page margin minus its8px padding, replacing the fixed12px button inset (20px icon inset). Uses existing desktop/tablet/mobile page-margin tokens and Foundation breakpoints768/1150; preserves centered vertical position, hit area, SVG and dismissal behavior. No global margins changed. Figma desktop alignment verified from Inspector; storefront render remains unverified.


### Header edge action padding compensation — 2026-10-16

`blocks/_header-top.liquid`: first/last action children in each Header column use negative logical outer margins from the existing `--header-action-padding-inline`. This cancels the extra half-Actions-gap inset at the column edges, while retaining action padding/hit area and interior icon spacing. Logos and menu blocks are excluded. The variable already switches to mobile Actions gap below992px; no duplicated gap calculations, fixed page margins or global spacing settings were introduced. Both logical directions are supported. Preserve these rules with the shared action-padding owner during base updates. Browser verification remains pending.


## Split slide text reveal fix — 2026-10-16

Split slide activation removes inert, but the block entrance observer previously reconciled only tabs and hero slides. Text already intersecting while inactive could remain reveal-pending after switching. Added .testimonial-split-slide to shared animation scopes so inert/class changes reset and reveal its content. Preserves merchant animation choices and reduced motion. Ten existing animation tests, three testimonial runtime/preset tests and a targeted inactive→active→inactive→active regression simulation pass. Full Theme Check: zero errors, six existing settings-count warnings. No test files changed; browser visual QA unavailable.

## Base sync history

### 2026-10-16 — Update from personal main

- Previous main commit: `b7ffd45f46adb47ca54be8cf841f82a84fc97348`
- Updated through main commit: `de84ae60437b6369b61addd025dd75d1434706be`
- Main commits included: 1
- Included main commits:
  - `de84ae60437b6369b61addd025dd75d1434706be` — chore(base): update base with 1 upstream commits through f3555270
- Change summary:

```text
assets/critical.css                            | 19 ++++++
 blocks/timeline-list.liquid                    | 20 +++---
 blocks/timeline-slide.liquid                   |  4 +-
 sections/bundle-builder.liquid                 |  8 +--
 sections/comparison-table-custom.liquid        | 16 ++---
 sections/contact-form-custom.liquid            | 12 ++--
 sections/contact-information.liquid            | 48 ++++----------
 sections/email-signup-dual-image.liquid        | 12 ++--
 sections/email-signup-form.liquid              |  8 +--
 sections/email-signup-single-image.liquid      | 10 +--
 sections/faq-image-accordion.liquid            |  4 +-
 sections/featured-blog-posts.liquid            |  8 +--
 sections/footer.liquid                         |  4 ++
 sections/gallery-custom.liquid                 | 20 +++---
 sections/gallery-image-grid.liquid             | 12 +---
 sections/image-comparison-custom.liquid        |  4 +-
 sections/image-comparison-split-custom.liquid  | 28 +++-----
 sections/image-text-card-grid.liquid           |  8 +--
 sections/image-text-split-layout.liquid        | 18 ++----
 sections/location-list.liquid                  | 48 ++++----------
 sections/location-map.liquid                   | 52 ++++-----------
 sections/testimonials-background-custom.liquid | 36 ++++-------
 sections/testimonials-horizontal-custom.liquid | 32 +++-------
 sections/timeline.liquid                       | 88 ++++++++------------------
 24 files changed, 171 insertions(+), 348 deletions(-)
```

### Retained custom paths through main de84ae60

- `assets/announcement-bar.js`
- `assets/breadcrumbs.css`
- `assets/carousel-block.js`
- `assets/carousel-slide.js`
- `assets/cart-drawer-recommendations.js`
- `assets/cart-drawer.css`
- `assets/cart-page.css`
- `assets/cart-page.js`
- `assets/collections-with-tabs.js`
- `assets/column-background-video.js`
- `assets/columns-swipe.js`
- `assets/component-collection-card.css`
- `assets/component-pagination.css`
- `assets/component-sections-promo-grid.css`
- `assets/component-social-links.css`
- `assets/editorial-text.js`
- `assets/image-text-card-grid.js`
- `assets/image-text-stacked-bands.js`
- `assets/product-collection-carousel.js`
- `assets/product-description.js`
- `assets/product-information-extras.js`
- `assets/product-list-promos.js`
- `assets/product-media.js`
- `assets/promo-grid.js`
- `assets/quick-add.js`
- `assets/quick-view.js`
- `assets/section-parallax.css`
- `assets/section-parallax.js`
- `assets/swiper-12.2.0-effect-fade.min.css`
- `assets/tab-layout-indicator.js`
- `assets/testimonial-split.js`
- `assets/variant-picker.js`
- `blocks/_bundle-product-list.liquid`
- `blocks/_bundle-summary.liquid`
- `blocks/_cart-content.liquid`
- `blocks/_cart-order-summary.liquid`
- `blocks/_cart-summary.liquid`
- `blocks/_collection-filter.liquid`
- `blocks/_collection-pagination.liquid`
- `blocks/_collection-products.liquid`
- `blocks/_collection-sort.liquid`
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
- `blocks/_header-mega-menu.liquid`
- `blocks/_header-menu-toggle.liquid`
- `blocks/_header-menu.liquid`
- `blocks/_header-search.liquid`
- `blocks/_header-top.liquid`
- `blocks/_look-banner.liquid`
- `blocks/_look-banners.liquid`
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
- `blocks/blog-list.liquid`
- `blocks/blog-meta.liquid`
- `blocks/blog-tag-filter.liquid`
- `blocks/button-view-details.liquid`
- `blocks/button.liquid`
- `blocks/buttons.liquid`
- `blocks/carousel.liquid`
- `blocks/carousel_split.liquid`
- `blocks/cart-free-shipping.liquid`
- `blocks/cart-items.liquid`
- `blocks/cart-order-note.liquid`
- `blocks/cart-shipping-estimator.liquid`
- `blocks/collection-card-button.liquid`
- `blocks/collection-card-description.liquid`
- `blocks/collection-card-title.liquid`
- `blocks/collection-card.liquid`
- `blocks/collection-list-items.liquid`
- `blocks/collection-promo.liquid`
- `blocks/collection-tab.liquid`
- `blocks/collection-thumbnail.liquid`
- `blocks/collections-with-tabs-item.liquid`
- `blocks/columns.liquid`
- `blocks/comments.liquid`
- `blocks/comparison-table-column.liquid`
- `blocks/comparison-table-row-value.liquid`
- `blocks/comparison-table-row.liquid`
- `blocks/contact-field.liquid`
- `blocks/contact-form.liquid`
- `blocks/content.liquid`
- `blocks/countdown-timer.liquid`
- `blocks/discount-code.liquid`
- `blocks/divider.liquid`
- `blocks/editorial-text.liquid`
- `blocks/email-signup.liquid`
- `blocks/eyebrow.liquid`
- `blocks/faq_item.liquid`
- `blocks/featured-image.liquid`
- `blocks/featured-post.liquid`
- `blocks/first-card.liquid`
- `blocks/gallery-hotspot.liquid`
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
- `blocks/marquee-item.liquid`
- `blocks/marquee.liquid`
- `blocks/menu.liquid`
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
- `blocks/shop-the-look-product.liquid`
- `blocks/shop-the-look-products.liquid`
- `blocks/slide.liquid`
- `blocks/slide_split.liquid`
- `blocks/social-links.liquid`
- `blocks/spacer.liquid`
- `blocks/tab-layout.liquid`
- `blocks/tabs-view-all-button.liquid`
- `blocks/tags-and-sharing.liquid`
- `blocks/text.liquid`
- `blocks/video.liquid`
- `blocks/view-all-button.liquid`
- `sections/404.liquid`
- `sections/announcement-bar.liquid`
- `sections/article.liquid`
- `sections/breadcrumbs.liquid`
- `sections/cart-drawer.liquid`
- `sections/cart.liquid`
- `sections/collection-page-breadcrumb.liquid`
- `sections/collection-tabs.liquid`
- `sections/collections-with-tabs.liquid`
- `sections/custom-section.liquid`
- `sections/featured-collection-banner.liquid`
- `sections/footer.liquid`
- `sections/gallery-full-width-strip.liquid`
- `sections/header.liquid`
- `sections/hero.liquid`
- `sections/hotspot-full-width-carousel.liquid`
- `sections/hotspot-gallery.liquid`
- `sections/hotspot.liquid`
- `sections/image-text-stacked-bands.liquid`
- `sections/parallax.liquid`
- `sections/password.liquid`
- `sections/product.liquid`
- `sections/promo-grid-custom.liquid`
- `sections/quick-add.liquid`
- `sections/quick-view.liquid`
- `sections/recently-viewed-card.liquid`
- `sections/related-posts.liquid`
- `sections/search-overlay.liquid`
- `sections/shop-the-look-carousel-banners.liquid`
- `snippets/accordion-details.liquid`
- `snippets/badge.liquid`
- `snippets/block-animation-attributes.liquid`
- `snippets/carousel-navigation-icon.liquid`
- `snippets/cart-surface-style.liquid`
- `snippets/collection-card-render.liquid`
- `snippets/comparison-table-column-content.liquid`
- `snippets/comparison-table-column-shell.liquid`
- `snippets/comparison-table-row-content.liquid`
- `snippets/comparison-table-row-value-content.liquid`
- `snippets/comparison-table-value.liquid`
- `snippets/component-overlay.liquid`
- `snippets/deferred-stylesheet.liquid`
- `snippets/form-field.liquid`
- `snippets/gallery-strip-item-styles.liquid`
- `snippets/heading-size-token.liquid`
- `snippets/hero-styles.liquid`
- `snippets/icon.liquid`
- `snippets/image-card-content.liquid`
- `snippets/image-comparison.liquid`
- `snippets/image-ratio-value.liquid`
- `snippets/image.liquid`
- `snippets/layout-flow-group-style.liquid`
- `snippets/layout-flow-style.liquid`
- `snippets/localization-overlay.liquid`
- `snippets/localization-styles.liquid`
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

## 2026-10-19 — Independent pagination visibility

| Custom paths | Before | Zevra behavior | Authority | Base update rule |
| --- | --- | --- | --- | --- |
| `sections/slideshow.liquid`, `sections/hotspot-full-width-carousel.liquid`, `sections/collection-list-thumbnails.liquid`, `sections/collection-tabs.liquid`, `blocks/collection-tab.liquid`, `blocks/collection-list-items.liquid`, `blocks/blog-list.liquid`, `blocks/product-callout-gallery.liquid`, `blocks/shop-the-look-products.liquid`, `blocks/product-list.liquid`, `sections/related-posts.liquid`, `snippets/product-collection-grid.liquid`, `snippets/swiper-pagination.liquid`, `snippets/pagination-visibility.liquid`, `assets/critical.css`, `assets/swiper-carousel.css` | A shared checkbox gated both viewports; Related posts forced mobile pagination | Independent desktop/mobile checkboxes and breakpoint visibility, markup when either enabled, no hidden pagination spacing/focus; Related posts mobile default now configurable. Collection tabs preset + homepage desktop on/mobile off per supplied Figma | User explicitly requested this theme-only custom on2026-10-19 | Preserve both setting IDs, migration values, snippet arguments/attributes, CSS visibility and per-viewport navigation offsets. Do not replace with base's shared checkbox; review upstream overlaps. |

Schema-only mobile label corrections: `blocks/_product-media.liquid`, `sections/promo-grid-custom.liquid`; both only have mobile sliders and retain their mobile-only setting ID. Existing Carousel already has independent controls and remains unchanged. Preset/template migrations copy old checkbox state to both viewports; Related posts retains its former mobile-on default. No content/resources or unrelated composition was changed by this migration. See [verification](../audits/pagination-visibility-2026-10-19.md).

## Variant origin

- Mara → Zevra; source `theme/mara-theme` at `b99df73e385d9acc37872335f6d58abad3dc1a79`, verified local and origin on 2026-10-16.
- Inherits all implementation/custom dependencies and the original base checkpoint above.
- [Initialization plan](../theme-init/zevra-theme.md); [variant updates](../variant-updates/zevra-theme.md).
- No new custom implementation is authorized by init.

## Scrolling cards — 2026-10-19

User requested replacing three homepage split sections with Arche-style scrolling cards. Preserve the following custom implementations during base updates:

| Path | Custom behavior | Review on base update |
| --- | --- | --- |
| `sections/scrolling-cards.liquid` | Stack effect data and configurable desktop/mobile card gaps; MĀRA preset. | Retain settings consumers and preset composition. |
| `blocks/scrolling-card.liquid` | Runtime sticky-top fallback for viewport-centered stacking. | Keep CSS variable aligned with runtime. |
| `assets/scrolling-cards.js` | Arche fade/scale runtime, ResizeObserver and editor cleanup. | Preserve singleton initialization, teardown and reduced-motion/mobile fallback. |

## 2026-10-19 — Collection tabs bottom controls

| Custom paths | Before | Zevra behavior | Authority | Base update rule |
| --- | --- | --- | --- | --- |
| `sections/collection-tabs.liquid`, `blocks/collection-tab.liquid`, `snippets/product-collection-grid.liquid` | Global bottom arrows in a separate row from per-tab pagination | Each carousel owns a bottom footer: Progress bar left, both arrows right; Bullets center with previous/next at opposite edges. Native scoped carousel navigation owns disabled state and tab lifecycle; View all remains a separate action. Mobile respects existing desktop-only navigation and independent pagination visibility. | User requested theme-only bottom controls matching Figma on2026-10-19 | Preserve optional bottom_navigation snippet argument, per-tab render and scoped footer CSS; other grid callers remain unchanged. |

Validation: desktop1265px final progress bar and48px buttons share centerY877.5px; arrows x1113/1169,32px gutter after the bar. Bullets checked before button-size calibration: centered pagination and arrows at opposite edges, with equal centerY. Footer desktop spacing40px in preset and homepage matches supplied Figma; mobile visibility remains off. Temporarily selected Bullets in local homepage for browser QA, then restored Progress bar. Native Next click and tab switching exercised. Targeted20 tests passed; Theme Check0 errors/6 existing warnings. Mobile visual QA and exhaustive editor lifecycle remain unverified. No new JS or schema controls.

### Bottom pagination color correction

`assets/swiper-carousel.css` supports the neutral `.swiper-pagination-host` wrapper as well as direct Swiper pagination children; `snippets/product-collection-grid.liquid` adds that host to the Collection tabs footer. This restores shared progress/bullet styling, lock visibility and autoplay styling after nesting. `sections/collection-tabs.liquid` maps footer active color to the color scheme heading token. Preserve these dependencies with the bottom-controls custom. Browser computed progress fill verified rgb(24,24,24), #181818 matching Figma; no hardcoded blue override.20 targeted tests pass; Theme Check0 errors/6 inherited warnings.

Bullets browser follow-up: compared shared CSS with local main and verified computed active shape32×8px, inactive shape8×8px, hit areas48/24px, active #181818. The restored host selectors preserve main’s elongated active bullet rather than Swiper’s fallback round dot. Temporary local Bullets selection restored to Progress bar after QA.

## Navigation Icon only / Long arrow — 2026-10-19

Figma source bH9A5237I07NWt19Cua9gL desktop47062:15032/mobile47230:15700. Original arrow SVG downloads895eb.svg(left),f5e9a.svg(right):24px viewBox,1.25px round stroke. Preserved path geometry and replaced fixed source color with currentColor for scheme/hover inheritance. No new settings. Shared navigation icon-only consumes existing large icon token24px plus12px padding on every side; other navigation styles retain their sizing. Consumers include Press, Collection tabs/lists, product/blog lists, common Carousel/Testimonial, slideshow, timeline, product media and any shared swiper-navigation owner selecting icon_only or long_arrow.

Navigation verification: desktop Press computed button48×48px, padding12px, SVG24×24px; full control row320×48px. Original Figma Long arrow path and1.25px stroke verified in rendered DOM. Explicit button selector prevents Tertiary zero-padding override. Theme Check zero errors/six existing warnings; git diff --check passes. Mobile uses the same higher-specificity rule but native mobile viewport not directly checked. Screenshot /tmp/zevra-navigation-figma.png.

## 2026-10-19 — Product card price size

| Custom paths | Before | Zevra behavior | Authority | Base update rule |
| --- | --- | --- | --- | --- |
| `assets/critical.css` | Product card price inherits body-md16px | `.product-card__price` maps price font-size to body-sm14px, line-height1.5 (21px), tracking0.2px per supplied desktop/mobile Figma; scoped to reusable product cards | User explicitly requested theme-only product card price size matching Figma | Preserve scoped price variables/tracking on base updates; retain shared product/cart price defaults |

## 2026-10-19 — Product card title typography

| Custom paths | Before | Zevra behavior | Authority | Base update rule |
| --- | --- | --- | --- | --- |
| `assets/critical.css` | Product titles inherit heading weight/casing and1.4 leading | Product-card titles use500 weight,1.5 line-height, zero tracking and capitalize casing per Figma; existing16px desktop/mobile title-size settings and font-family mapping retained | User explicitly requested theme-only product card titles matching supplied Figma | Preserve scoped title typography on base updates; do not change global heading styles or product data |

## 2026-10-19 — Gallery custom mobile content width

Theme-only fix: `templates/index.json` community_gallery top/feature/feature group and matching `sections/gallery-custom.liquid` preset explicitly set `width_mobile: fill`. The Group schema default of fit produced a 0×0 group around a percentage-width image card on mobile. Preserve this explicit mobile width during base updates. Existing Group Device → Mobile → Width remains editable; shared blocks are unchanged. User authorized this correction.

### Timeline active label motion — 2026-10-19

`sections/timeline.liquid`: interpolate label font size, line height, tracking and color together over240ms with the shared motion easing. Underline fades through a label pseudo-element rather than appearing abruptly. This smooths the active/inactive height change and surrounding rail redistribution while preserving final Figma sizes. Reduced-motion disables both transitions. Scoped to Timeline left Tabs; no JS or schema changes.
