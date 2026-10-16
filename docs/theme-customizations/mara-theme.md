<!-- theme-base-sync-state: {"sha":"13865852ee204a3ccae27a2f50d5ea107a3bf180"} -->
# Customization record: mara-theme

Theme branch: `theme/mara-theme`
Personal base at creation: `c07753a29c860f64e60567a2fc0d58deb3429c3b`
Theme update source: this repository's `main` branch
Team base source for personal main: https://github.com/Chieu2507/shopify-theme-base (only `main` or `dev`)

Record only theme-specific section/block implementation changes here: Liquid/HTML outside {% schema %}, plus CSS/JS assets and snippets rendered or loaded by those sections/blocks. Theme presets, schema-only changes, template JSON, and saved settings values are not custom code. During base updates, review overlapping implementation paths and describe the expected behavior before resolving. See [the customization policy](../theme-customization-policy.md).

## Customizations

| File/path | Base behavior | Theme-specific behavior | Reason | Update/merge rule |
| --- | --- | --- | --- | --- |
| `assets/carousel-block.js` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `assets/product-collection-carousel.js` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/_header-localization.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/blog-list.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/carousel.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/collection-tab.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/product-list.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/shop-the-look-products.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `blocks/tabs-view-all-button.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `sections/collection-tabs.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `snippets/icon.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `snippets/image-comparison.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `snippets/social-icon.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
| `snippets/social-links.liquid` | Personal base at recorded checkpoint | Preexisting Mara implementation from the original remote theme revision, preserved byte-for-byte in this Shop the look rollout | Document existing custom ownership detected by check-custom | Preserve existing code; review upstream conflicts separately from private-image migration |
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


### Shop the look migration — 2026-10-16

Owner-authorized team commit `bf4b69b5`: disallow extra section blocks; migrate static image to private `_shop-the-look-image`, retain saved media, IDs, ratio/height/radius/overlay controls and compatible variant settings; remove image layout width and padding controls. Shared Image is unchanged. Normalize Countdown preset label to Count down (Custom).

## Base sync history

### 2026-10-16 — Update from personal main

- Previous main commit: `2593c6f2f1c69fdab3d90e2468446b55e8550055`
- Updated through main commit: `13865852ee204a3ccae27a2f50d5ea107a3bf180`
- Main commits included: 1
- Included main commits:
  - `13865852ee204a3ccae27a2f50d5ea107a3bf180` — chore(base): update base with 1 upstream commits through bf4b69b5
- Change summary:

```text
sections/announcement-bar.liquid              |  66 +--
 sections/blog-posts.liquid                    | 375 +++++++++--------
 sections/collection-list-thumbnails.liquid    | 580 +++++++++++++++++++++++++-
 sections/featured-collection.liquid           | 196 ++++-----
 sections/footer.liquid                        |   2 +-
 sections/gallery-full-width-strip.liquid      | 317 ++++++++++----
 sections/hero.liquid                          |  98 ++---
 sections/image-comparison-custom.liquid       | 177 +++++++-
 sections/image-comparison-split-custom.liquid |   3 +-
 sections/rich-text.liquid                     | 168 ++++----
 10 files changed, 1427 insertions(+), 555 deletions(-)
```

### Retained custom paths through main 13865852

- `assets/breadcrumbs.css`
- `assets/carousel-block.js`
- `assets/carousel-slide.js`
- `assets/cart-drawer-recommendations.js`
- `assets/cart-drawer.css`
- `assets/cart-page.css`
- `assets/cart-page.js`
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
- `assets/swiper-12.2.0-effect-fade.min.css`
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
- `blocks/banner.liquid`
- `blocks/blog-card-button.liquid`
- `blocks/blog-card-description.liquid`
- `blocks/blog-card-meta.liquid`
- `blocks/blog-card-tag.liquid`
- `blocks/blog-card-title.liquid`
- `blocks/blog-card.liquid`
- `blocks/blog-list.liquid`
- `blocks/blog-tag-filter.liquid`
- `blocks/button-view-details.liquid`
- `blocks/button.liquid`
- `blocks/buttons.liquid`
- `blocks/carousel.liquid`
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
- `blocks/columns.liquid`
- `blocks/comparison-table-column.liquid`
- `blocks/comparison-table-row-value.liquid`
- `blocks/comparison-table-row.liquid`
- `blocks/contact-field.liquid`
- `blocks/contact-form.liquid`
- `blocks/countdown-timer.liquid`
- `blocks/discount-code.liquid`
- `blocks/divider.liquid`
- `blocks/editorial-text.liquid`
- `blocks/email-signup.liquid`
- `blocks/eyebrow.liquid`
- `blocks/faq_item.liquid`
- `blocks/featured-post.liquid`
- `blocks/first-card.liquid`
- `blocks/gallery-hotspot.liquid`
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
- `blocks/shop-the-look-product.liquid`
- `blocks/shop-the-look-products.liquid`
- `blocks/slide.liquid`
- `blocks/social-links.liquid`
- `blocks/spacer.liquid`
- `blocks/tab-layout.liquid`
- `blocks/tabs-view-all-button.liquid`
- `blocks/tags-and-sharing.liquid`
- `blocks/text.liquid`
- `blocks/video.liquid`
- `blocks/view-all-button.liquid`
- `sections/breadcrumbs.liquid`
- `sections/cart-drawer.liquid`
- `sections/cart.liquid`
- `sections/collection-page-breadcrumb.liquid`
- `sections/collection-tabs.liquid`
- `sections/custom-section.liquid`
- `sections/featured-collection-banner.liquid`
- `sections/header.liquid`
- `sections/hotspot-full-width-carousel.liquid`
- `sections/image-text-stacked-bands.liquid`
- `sections/password.liquid`
- `sections/product.liquid`
- `sections/promo-grid-custom.liquid`
- `sections/quick-add.liquid`
- `sections/quick-view.liquid`
- `sections/recently-viewed-card.liquid`
- `sections/search-overlay.liquid`
- `sections/shop-the-look-section.liquid`
- `snippets/accordion-details.liquid`
- `snippets/badge.liquid`
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
- `snippets/heading-size-token.liquid`
- `snippets/icon.liquid`
- `snippets/image-card-content.liquid`
- `snippets/image-comparison.liquid`
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
