<!-- theme-base-sync-state: {"sha":"8f3ac3c9345da36c73b2e1fea3ed4e6303e47d0d"} -->
# Customization record: elara-theme

Theme branch: `theme/elara-theme`
Personal base at creation: `d887dac2d2f637e2aae15f59272634f8fd3d1e32`
Theme update source: this repository's `main` branch

## Customizations

| File/path | Base behavior | Theme-specific behavior | Reason | Update/merge rule |
| --- | --- | --- | --- | --- |
| `blocks/shop-the-look-products.liquid` | Carousel has no next-slide preview controls and clips both viewport edges. | Independent desktop/mobile preview flags reuse shared Swiper; desktop clips the edge facing the lifestyle image for either media position. Elara block/section presets and homepage select desktop false / mobile true. | User requested theme-specific Shop the look preview on 2026-10-07. | Preserve flag bindings, image-side clipping, grid behavior and shared carousel/editor lifecycle; review overlapping upstream changes before merging. |
| `assets/critical.css` | Shared selected swatches have a body-color outer border and fixed inner inset; inactive swatches have a muted border. | Match Figma nodes `52164:10240` and `52020:28836`: card selection border follows the actual swatch color; product/overlay selection uses the heading token. Inner background frame targets the 4px design inset but shrinks with rendered height to keep flat ratios visible. Inactive color swatches have no visible frame. Width, ratio, radius, gap and border/underline choice remain settings-driven, including local picker overrides. | Match card and featured product/quick view/quick add without freezing merchant options. | Preserve native/fallback color ownership and settings cascade; review upstream changes to shared swatch selection and container sizing before merging. |
| `snippets/css-variables.liquid` | H1–H4 letter-spacing is hard-coded to -1.28/-0.8/-0.64/-0.48px; H5/H6 use zero; H2 normal line-height becomes 130% on tablet. | All heading roles consume the existing shared `type_letter_spacing` option; H2 tablet inherits its selected line-height without an override. Current normal spacing is 0px and H2 normal is 120% at every breakpoint. | Match Malandra typography node `43415:6890` and make existing settings control their output, as requested on 2026-10-06. | Review overlapping upstream typography token changes; preserve the existing setting IDs and shared setting behavior. Reconcile changed line-height/spacing semantics with the owner before merging. |
| `sections/slideshow.liquid` | Fixed desktop heights: 420, 560, 640, 900, 1080px. Fixed mobile heights: 320, 440, 560, 680, 820px. Progress segments stretch across the content inset, with 4px gaps and 2–3px tracks. | Medium is 800px desktop and 600px mobile; fixed height options scale proportionally. Progress pagination uses 50 × 4px tracks, 16px gaps and a 40px bottom inset at both viewports, with 44px button hit areas. Adapt and Full screen retain their existing behavior. | Match the supplied Figma slideshow heights and progress pagination, as authorized on 2026-10-06. | Review overlapping upstream slideshow implementation changes before merging. Preserve the calibrated height scale and local progress geometry; keep shared carousel styles unchanged. Reconcile any changed height or pagination semantics with the owner. |
| `snippets/product-card.liquid` | Swatches render above or below details; manual badges are not passed to the badge renderer. | Accepts an optional `inline` swatch position and opts into the existing configurable manual badge rules. | Match right-side swatches and the Round Topaz Best Seller badge. | Preserve existing variant image/price selection and quick-add behavior; reconcile overlapping markup changes before merging. |
| `assets/critical.css` | Product details and swatches occupy separate rows; price uses the shared size and smaller faded compare-at value. | Inline cards use a two-column information row. Product-card price reads desktop/mobile size tokens; compare-at uses the same size and full opacity. Titles read a weight token; inline titles have 1.5 line-height. | Match Figma's 16px medium titles, 14px prices, and compact swatches. | Scope changes to product cards; retain inherited money colors, shared prices elsewhere, focus and variant states. |
| `snippets/css-variables.liquid` | Product-card typography exposes only title size; swatch position normalizes to top/bottom. | Adds title weight, desktop/mobile price-size tokens and supports the optional inline position, in addition to the earlier typography customization above. | Ensure new Theme Editor settings control rendered values. | Preserve both the earlier heading-token customization and this card-token mapping when reconciling upstream changes. |
| `snippets/swatch.liquid` | Gold/Silver fallback colors are fixed; native Shopify swatch colors take precedence. | Configurable fallback Gold/Silver colors, selected as #dabe79/#e6e6e6 for this theme. Native data continues to take precedence. | Match Figma colors while retaining the existing Color option fallback contract. | Preserve native priority; settings affect only exact Gold/Silver names, not other shared color aliases. |
| `blocks/collection-card-title.liquid` | Displays the full resource title. | Optional exact end suffix can be hidden in the displayed heading; selected value is ` - Elara`. Resource title and URL remain intact. | Category cards display Earrings/Bracelets/Necklaces/Rings as in Figma while Admin names retain the required suffix. | Keep suffix hiding opt-in and exact; preserve count and heading semantics. |
| `snippets/collection-card-render.liquid` | Supports standard ratios and custom ratio in 0.1 increments. | Adds explicit `portrait_6_7` ratio for category cards. | Match Figma's 600:700 category images precisely. Product cards keep the existing 4:5 portrait setting. | Keep all existing ratio values and bounds; preserve the added ratio when merging media logic. |
| `blocks/gallery-item.liquid` | Square social image with profile footer. | Optional product picker replaces the footer with a linked 70px thumbnail, shared title/price and an accessible cart form; optional 5:7 media ratio. Empty product preserves the social footer. | Compose the four inspiration cards using the existing Gallery Carousel and Carousel runtime. | Preserve social mode and carousel/editor ownership; product prices and cart routes must remain Shopify-derived. |
| `blocks/product-list.liquid` | Applies the translation filter to an actual collection title. | Uses the collection title verbatim; translates only the empty fallback label. | Prevent missing-translation carousel labels after attaching Elara collections. | Keep resource titles separate from translation keys when merging. |
| `snippets/product-collection-grid.liquid` | Translates a supplied carousel label a second time. | Preserves the supplied accessible name and translates only an absent label. | Correct shared carousel accessibility names for real product collections. | Preserve caller ownership of accessible labels and the localized empty fallback. |
| `blocks/product-price.liquid` | Price size uses fixed body roles and inherits shared weight. | Optional custom size 10–48px and weight override; Popular item selects 22px/500. | Match Figma detail price without changing prices on other surfaces. | Preserve existing role values, money formatting and variant price templates. |
| `blocks/_product-media.liquid` | Main product media uses its natural image ratio. | Optional square main-image setting emits a scoped data attribute; thumbnails and video retain existing behavior. | Match the square Popular item media shown in Figma. | Preserve gallery state, variant filtering and editor/runtime bindings. |
| `assets/product-media.css` | Product media has natural height. | Image-only square cropping when the owning block opts in. | Match Figma while retaining original source AVIF assets. | Keep rules scoped to the block data attribute and image media; do not crop video/model media. |
| `blocks/slideshow-slide.liquid` | Main CDN crops use base mobile heights. | Pass Elara mobile heights 343/471/600/729/879px to shared artwork/preload renderer, matching existing custom slideshow CSS. | Keep calibrated slideshow composition with new CDN/preload logic. | Preserve height agreement between section CSS, picture sources and preload hints. |
| `sections/password.liquid` | Main renders password content from merchant blocks. | Preserve the existing password title as a translated fallback when no blocks are saved; keep main dialog, logo, footer and no-JavaScript form. | Preserve existing password composition during the approved base sync. | Keep empty-composition fallback and new merchant block support when merging. |
| `sections/text-marquee-custom.liquid` | Main uses shared layout-flow and omits space-between from mobile alignment. | Keep legacy space-between mobile alignment through the shared flow variables; migrate saved horizontal/vertical alignment to new controls. Remove only approved position_vertical. | Preserve saved composition while importing shared layout logic. | Retain additive alignment values and their CSS variable mapping when merging; never silently remap saved choices. |

| `blocks/product-list.liquid` | Desktop preview control/render path without an independent mobile preview. | Add/forward an independent mobile preview checkbox, default false, through the existing Swiper viewport. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |
| `blocks/blog-list.liquid` | Desktop preview control/render path without an independent mobile preview. | Add/forward an independent mobile preview checkbox, default false, through the existing Swiper viewport. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |
| `blocks/carousel.liquid` | Desktop preview control/render path without an independent mobile preview. | Add/forward an independent mobile preview checkbox, default false, through the existing Swiper viewport. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |
| `blocks/product-callout-gallery.liquid` | Desktop preview control/render path without an independent mobile preview. | Add/forward an independent mobile preview checkbox, default false, through the existing Swiper viewport. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |
| `assets/carousel-block.js` | Separate carousel owners use integer mobile columns; Collection list alone supports 1.2 mobile slides. | Share Collection list mobile sizing: preview on + one mobile column gives 1.2 slides; two columns remain two. Desktop uses its own breakpoint configuration. Mobile preview uses slide transition. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |
| `snippets/product-collection-grid.liquid` | Only forwards desktop preview to shared Swiper. | Forward optional mobile preview from Product list without changing grid rendering. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |


| `sections/collections-with-background.liquid` | Desktop fixed heights 28/36/44/52/62rem; mobile shows separate cards. | Elara desktop scale anchored at Medium 680px; optional mobile background tabs anchored at Medium 600px with one stacked background and vertical titles; picture images fill the media container. | User requested theme-specific Figma heights and mobile click-to-switch backgrounds on 2026-10-07. | Preserve the tab layout option, mobile position controls and fixed-height calibration; review overlapping upstream layout changes before merging. |
| `assets/collections-with-background.js` | Mobile hides tabs and exposes every panel; desktop hover/click selects a panel. | Mobile tabs keep one selected panel, support click/keyboard and preserve selection across viewport changes; mobile hover does not switch backgrounds. | Match the authorized Elara mobile interaction. | Preserve abortable editor lifecycle, keyboard focus, selected-panel accessibility and existing mobile card/carousel modes. |

## Figma catalog and card composition — 2026-10-07

### Shop the look preset follow-up — 2026-10-07

References: desktop `52006:3442`, mobile `52426:9291` in Figma file `7BbUHDzKGaMGMkyRpu0YZ8`. Uses `skills/figma-preset-section-builder/SKILL.md` and `skills/theme-catalog-content/SKILL.md`.

After the Figma connector became available, both nodes were read again with `figma-design-to-code` and their returned screenshots inspected. Mobile metadata confirms a 375px-wide frame, 343px-wide content, 343 × 400.17px lifestyle image, 30px/36px-line-height heading, 40px image/content gap, 36px heading/card and card/pagination gaps, and 256px cards with a 16px gap. Existing preset settings already express the supported spacing, ratios, heading scale, resource selections and hotspot positions; no additional configuration adjustment was needed from this fresh evidence.

The existing `shop-the-look-section` preset selects the same AVIF lifestyle image and product handles as homepage `shop_the_look`. At the user's follow-up request, Curly Molten Mini Initial Necklace (`elara-curly-molten-mini-initial-necklace`, product ID `15408516661547`, $38 Gold variant) was added last to both compositions. Live Shopify readback confirms ACTIVE status, its AVIF image and stock 100. Both compositions retain the existing responsive H2 (34px desktop / 30px mobile), image ratio 6:7, two desktop columns / one mobile column, 20px / 16px product gaps, 56px / 40px section gaps, 64px / 36px pagination spacing, and 10px top / 80px desktop bottom / 56px mobile bottom padding. Pagination remains explicitly enabled with `progress_bar` in both preset and template; three products now exceed the two desktop columns. The image alt text is set in both preset and template. The initial composition changes were configuration only. The separately authorized preview customization now adds two block checkbox settings and forwards them to the shared Swiper. Desktop preview clips the image-facing edge for either media position, while mobile uses existing 1.2-slide sizing with one column. Block preset, section preset and saved homepage select desktop false / mobile true. Checkbox schema defaults remain false to preserve existing instances without saved values.

Three hotspot centers are mapped from Figma image-local coordinates and rounded to the existing integer-percent settings, in product order: September desktop 55% / 84%, mobile 50% / 84%; Savi desktop 44% / 28%, mobile 40% / 28%; Curly desktop 66% / 91%, mobile 66% / 90%. Desktop measurements use the 772 × 900.67px image, mobile the 343 × 400.17px image. All hotspots are enabled and have independent mobile positions. The September desktop Y was corrected from 85% to the nearest measured 84%.

Store readback: `layouthub-template-v2.myshopify.com`, USD. Reused September Birthstone Necklace (`15408515154219`, $45) and Savi Triple Ridge Hoop Earrings (`15408515580203`, $28, compare-at $50). Both are ACTIVE and published on Online Store. Gold/Silver variants have distinct AVIF images, inventory tracking enabled and current sample stock 100 each. No product, publication, stock or media mutation was needed. Current readback is saved in ignored `.shopify/elara-catalog/shop-the-look-current-readback.json`.

Remaining configuration gaps: the section applies fixed content padding, which reduces product widths relative to Figma's 376px desktop cards; the new mobile preview exposes 1.2 slides using the shared carousel behavior, but has no exact card-width setting to express the 256px Figma card. The shared hotspot indicator has fixed dimensions rather than Figma's distinct active/inactive desktop/mobile sizes. These remaining gaps are outside the requested preview customization. The prior third-hotspot gap is resolved by the user's explicit product selection.

Validation: Theme Check passed (322 files, zero errors, 33 warnings); customization coverage passed. Existing development storefront content verified both product names, prices and color options. Both Figma reference screenshots are now verified through the connector. The preview supervisor/port 9300 remains stopped; browser inspection timed out, so the edited composition has not been verified in a fresh desktop/mobile storefront render. No theme push, publication, commit or global settings edit was performed.

Preview customization validation: Theme Check passed again (322 files, zero errors, 33 warnings), diff whitespace checks passed and customization coverage includes 18 implementation files. A localhost fixture using the actual shared Swiper CSS/JS and block stylesheet verified asymmetric desktop clip paths at 1100px for both image positions, navigation after sliding, independent mobile flags at 375px, 1.2 slides for one-column mobile preview and preserved two-column sizing. Block preset, section preset and homepage settings were checked for desktop false / mobile true. The plugin Liquid validator could not run because its bundled theme-check dependency is missing; installed Shopify CLI Theme Check was used instead. This fixture does not verify the full live storefront or Theme Editor.

Source: Figma file `7BbUHDzKGaMGMkyRpu0YZ8`, desktop `52006:3791`; product sections `52164:10235`, `52006:3442`, `52403:9864`, `52162:6695`, `52020:28816`.
The catalog workflow uses the user-provided `skills/theme-catalog-content/SKILL.md`. Collection titles use the explicitly requested suffix ` - Elara`. Product titles retain Figma wording.

Schema additions are in `config/settings_schema.json` (card weight/price size/inline swatches and fallback colors), `blocks/collection-card.liquid` (6:7 ratio), and the modified product/gallery leaf block schemas. These are configuration contracts; implementation differences are listed above.

### Composition plan and saved settings

- Role/placement: homepage content in `templates/index.json`, on the existing `theme/elara-theme` branch.
- Context: verified Shopify collections/products; gallery leaf blocks own their selected product and media. Gallery Carousel owns spacing; Carousel owns columns and responsive overflow.
- Runtime: existing Liquid money, image, cart form, Carousel and cart drawer handlers; no new JavaScript lifecycle.
- Inspiration uses the four exact Figma media-node exports as static AVIF images. Figma does not provide video files through the inspected context; playback controls are not fabricated.
- Trending Jewelry and Best sellers use manually ordered collections. Categories use four category collections. Background collection tabs use Necklaces/Earrings/Bracelets with their existing custom titles.
- Shop the look selects the two products visible in Figma, removes its unused third placeholder from default composition, and preserves the two configured hotspots. Popular item selects the heart necklace with the supplied Figma description, square main media, 22px medium price, 32px round swatches and inventory count enabled.
- Card settings: body font, 16px title, weight 500, single-line title; price 14px; 4:5 image; 12px image/content spacing; inline 16px circular color swatches with 6px gap.
- Collection counts reflect actual catalog membership rather than fabricated quantities from static Figma labels.
- Lighting Ridge Opals is editorial content, explicitly excluded from products by the user. An AVIF of its ring photo had already been uploaded before clarification and is left unreferenced; no Opals product or collection was created.

### Catalog resources

Resource handles, IDs, inventory and media results are saved locally under `.shopify/elara-catalog/`; category/inspiration files under `.shopify/elara-categories/`. These ignored directories contain no credentials. The mutation ledgers record created resources and Online Store publication; resource deletion requires separate authorization.

14 products, 25 color variants: default sample Available 100 at Shop location; Axiom Silver Available 0; Popular item Gold/Silver Available 3. Inventory tracking is enabled and overselling is denied. Prices are USD, matching the verified store currency. The same image with different Figma title/price is kept as separate catalog records; repeated appearances with identical identity reuse the same product. Every variant has its own matching Gold/Silver AVIF. Silver images were generated from the default Gold references; Gold/gallery images are from Figma.

Collections: `trending-jewelry-elara`, `best-sellers-elara`, `earrings-elara`, `bracelets-elara`, `necklaces-elara`, `rings-elara`, `shop-all-elara`. Products and collections are published on Online Store. Shopify has converted collection resource image copies to JPG/PNG; their AVIF source files remain in Files. Product and variant image URLs retain the .avif suffix, and all uploaded source files decode as AVIF. A direct CDN request to one original .avif URL with Accept: image/avif returned image/jpeg, decoded as JPEG; source file format does not guarantee CDN response format. Keep the native image_url/image_tag pipeline: Shopify chooses the delivered format per request. Color options use the theme's existing legacy fallback renderer with configurable exact colors; native Shopify category-linked swatch metafields were not created or modified.

## Slideshow height calibration — 2026-10-06

Figma file: `7BbUHDzKGaMGMkyRpu0YZ8`.
Desktop nodes: `52114:18461`, `52118:18884`, `52118:18899` (1920 × 800px).
Mobile node: `52426:9241` (375 × 600px).
Heights describe the slideshow itself, excluding header and footer.

The theme uses a 62.5% root font size (10px at the standard 16px browser default). Keep the existing rem convention; pixel values below use that baseline. Desktop values scale by 800/640 = 1.25; mobile values scale by 600/560 = 15/14, rounded to the nearest pixel. This preserves the order of all fixed height options.

| Existing option | Base desktop | Theme desktop | Base mobile | Theme mobile |
| --- | --- | --- | --- | --- |
| Extra small | 42rem / 420px | 52.5rem / 525px | 32rem / 320px | 34.3rem / 343px |
| Small | 56rem / 560px | 70rem / 700px | 44rem / 440px | 47.1rem / 471px |
| Medium | 64rem / 640px | 80rem / 800px | 56rem / 560px | 60rem / 600px |
| Large | 90rem / 900px | 112.5rem / 1125px | 68rem / 680px | 72.9rem / 729px |
| Extra large | 108rem / 1080px | 135rem / 1350px | 82rem / 820px | 87.9rem / 879px |

`Adapt` remains content-driven; `Full screen` remains 100svh. The existing 768px breakpoint and schema definitions are unchanged. Both the slideshow section preset and `templates/index.json` select `medium` for desktop and mobile. Those preset/template edits are configuration, not additional custom implementation.

## Slideshow progress pagination — 2026-10-06

The same Figma desktop and mobile nodes above show three rounded tracks, each 50px wide and 4px high, separated by 16px, with their lower edge 40px above the slideshow bottom. The configured center alignment gives a 182px visible group. Inactive tracks use 40% of the current heading color (white in the preset); the active white fill follows the existing autoplay clock.

Only section-local progress pagination CSS changes. Each segment remains a native button with a 50 × 44px hit area, existing labels, keyboard focus, slide selection and autoplay behavior. Its visible track sits in the middle of that hit area. The group respects existing desktop/mobile alignment settings, is hidden for a single slide, and does not change bullets, numbers, shared carousel CSS or JavaScript lifecycle.

## Base update decisions

| Base commit | Files reviewed | Decision and reason | Approved by/date |
| --- | --- | --- | --- |

## Collection list preset and media — 2026-10-07

References: Figma `7BbUHDzKGaMGMkyRpu0YZ8`, desktop `52006:3239` (1920px), mobile `52426:9263` (375px). Configuration only: `sections/collection-list.liquid` preset and `templates/index.json` section `collection_list`; no implementation or schema definitions changed.

Composition: header/heading, collection-list-items, collection-card/title/description. Shop By Category uses responsive H2 size (34px desktop / 30px mobile); card titles use H3 (26px / 22px), product counts use 14px. Four collections retain Earrings, Bracelets, Necklaces, Rings order. Desktop has four columns with 24px gaps; mobile one column with native next-card preview and 16px gaps. Heading/card spacing is 48px desktop / 40px mobile; section padding is 20px top and 80px bottom desktop, 20px top and 56px bottom mobile. Pagination is hidden; stored pagination padding remains 48px / 36px. Homepage View all remains disabled. Presets cannot use `disabled`; the preset leaves that static action unconfigured with no destination (hidden on storefront, potentially visible in the editor). Dynamic preset blocks omit `id`; static blocks retain `id` and `static: true`.

Reused Earrings and Bracelets images. Rings replaced the placeholder with Figma's actual overlay image; Necklaces uses the source photo cropped to its Figma fill offsets. Both are 1200 × 1400 (6:7), decoded and uploaded as AVIF; Shopify's native collection image copies are JPG. Permanent file/collection IDs and URLs are recorded in `elara-collection-list-images.json`; original images, readbacks and rollback URLs are stored in `.shopify/elara-collection-list/`. No products, stock, collection membership, titles or handles changed.

Validation: Theme Check passed at fail-level error (321 files, zero errors; same 34 pre-existing warnings); static-ID and setting/option/range checks passed. Liquid before schema, non-preset schema definitions, and all unrelated template sections are unchanged compared with task-start backups. Store readback and downloaded images confirm both replacement crops. Native storefront/Theme Editor rendering was not verified: the preview supervisor was stopped; no theme push or preview start was performed.

Configuration gaps: full-width still retains the existing global page margins, whereas Figma cards reach the desktop edges; mobile card width follows native 1.2-slide preview rather than a configurable fixed 288px; the native black 65% card gradient differs from Figma's brown 50% gradient. Collection counts retain actual membership instead of the static Figma numbers. These behaviors need separate implementation controls to match exactly.

## Independent mobile next-slide preview — revised 2026-10-07

Final scope: Collection list items retains its existing mobile option. Add the missing mobile checkbox only to Product list, Blog list, Carousel, Product callout gallery, all of which were block settings owners with desktop preview before this request. Keep Desktop preview immediately above Mobile preview. New options default false and use the existing locale key. Collection tabs, Slideshow and Hotspot full-width carousel mobile additions have been reverted, including schema, presets, data attributes and their runtime changes; existing Figma presets and styling are preserved.

Product/Blog/Collection reuse the existing product carousel mobile sizing without modifying its JavaScript. Their owners forward the mobile flag through the shared viewport. Generic Carousel uses a module-local sizing rule: one column plus enabled mobile preview gives 1.2 slides, two columns remain two. Existing desktop settings, gaps and lifecycle stay intact. Fade is disabled when the mobile adjacent-card preview requires slide transitions. No new shared-module export dependency is introduced.

The later configuration-key rebuild changes for Desktop/Mobile columns have been reverted. This update is limited to the mobile preview option and the necessary rendering path for the scoped list owners.

Validation after rollback: Theme Check reports zero errors and 33 warnings; customization coverage passes for 15 implementation files. Slideshow and Hotspot have no mobile-preview references, and both slideshow JavaScript and product carousel JavaScript match their original implementations. Desktop preview arguments are retained alongside the new mobile flags.

## Blog content composition — 2026-10-07

Figma blog node `52164:10141`. Created and verified `Discover Our Story - Elara` (`discover-our-story-elara`, blog ID `125780099371`) after explicit user confirmation. `templates/index.json` / `discover_our_story` and the existing Blog posts preset select this blog; composition retains 3 posts, 3 desktop columns and 1 mobile column. These changes are configuration only.

Three Figma source images were converted and decoded as AVIF, uploaded to Files and read back as READY: `elara-blog-trends.avif`, `elara-blog-occasion.avif`, `elara-blog-eco.avif`. Details, source copy, new editorial bodies and resource ledger are in ignored `.shopify/elara-blog/`. Article titles, summaries and dates come from Figma; bodies are newly written. Articles have not been saved: browser title changes are not reflected in Shopify form state, and CLI lacks content permissions. The blog is currently empty; storefront article images and publication cannot be verified yet. No theme push or publication performed.

## Collections background custom — 2026-10-07

User-authorized implementation on `theme/elara-theme`, from desktop Figma `52006:3424` (1920 × 680px) and mobile `52426:9307` (375 × 600px). Both the existing section preset and homepage instance now use Medium height, zero top/bottom padding on desktop/mobile, and mobile Background tabs. Mobile uses centered vertical titles, 48px gap and 40px heading size; tapping a title switches the single background. Desktop hover/click and keyboard controls remain available. Collection counts come from the actual collections.

The standard theme root is 10px per rem. Desktop fixed heights scale by 680/440 and round to the nearest pixel: Extra small 433px, Small 556px, Medium 680px, Large 804px, Extra large 958px. Adapt and Full screen retain their existing meanings. Mobile Background tabs use Extra small 450px, Small 563px, Medium 600px, proportional to the original card heights at the 375px Figma width (375/468.75/500px); Adapt uses the first mobile media ratio. These mobile tab heights are fixed independently of viewport width. Existing Vertical and Horizontal card modes keep their original aspect ratios and carousel behavior.

Three Figma background sources were exported, cropped and decoder-verified as six desktop/mobile AVIF files. Each uploaded Shopify image is selected separately in its matching Necklaces, Earrings or Bracelets block.

Validation: Theme Check passed after the final media-fill fix (322 files; zero errors, 33 existing warnings). Customization coverage passed for 17 implementation files. Native browser preview confirmed desktop frame/image height 680px and mobile frame/image height 600px, zero top/bottom padding, 40px mobile titles, exactly one active panel, click/keyboard selection and selected-tab persistence across the breakpoint. The bundled Liquid validation helper could not load its missing `@shopify/theme-check-common` dependency; installed Shopify CLI Theme Check provided validation instead. No commit or push was performed.

### Collections background media completion — 2026-10-07

After explicit user approval, six Figma-derived AVIF files were uploaded through the Shopify upload-image connector to `layouthub-template-v2.myshopify.com`. Readback confirms all six READY, MIME image/avif, desktop 1920 × 680px and mobile 375 × 600px. The homepage and existing preset now select independent desktop/mobile files per collection: Earrings uses the blonde portrait from `52006:3424`; Bracelets uses the hand/bracelets photo from `52039:15375`; Necklaces uses the white blouse/necklaces photo from `52039:15394`. Necklaces uses its measured 30% brown overlay, while Earrings/Bracelets use 20% black. Existing collection handles, block order, height, spacing and interactions are retained. The pending upload limitation above is resolved. File IDs and permanent CDN URLs are saved in ignored `.shopify/elara-collections-background/upload-ledger.json` and verified in `upload-readback.json`. No catalog membership, theme publication, commit or push was performed.

Media verification: restarted the existing development preview after stale CLI upload errors. Browser checks confirm all three desktop AVIFs and all three mobile AVIFs load successfully from their distinct Shopify URLs; mobile tab clicks select the corresponding background, and the frame remains 600px (680px desktop). Theme Check passed with zero errors and 33 existing warnings; customization coverage passed for 18 files.


### 2026-10-07 — Approved merge of current personal main

- Owner approved retaining custom behavior while integrating current base logic. Reviewed overlaps were merged by behavior, without replacing custom implementations.
- Carousel retains independent mobile 1.2-slide preview; fade uses one slide and zero gap when previews are inactive. Preview opts into slide transition.
- Product-card inventory data is added alongside inline swatches and manual badges. Retain product collection labels and mobile preview bindings while importing base section-list navigation classes.
- Keep saved schemas/presets/compositions except new setting defaults, additive approved schema compatibility, and migration/removal of position_vertical explicitly approved by the owner. Existing password title remains for an empty saved block composition. Existing marquee direction/alignment values are migrated, including legacy mobile space-between support.

## Base sync history

### 2026-10-07 — Update from personal main

- Previous main commit: `d887dac2d2f637e2aae15f59272634f8fd3d1e32`
- Updated through main commit: `8f3ac3c9345da36c73b2e1fea3ed4e6303e47d0d`
- Main commits included: 2
- Included main commits:
  - `36b9ab04bcbb59ea3073666812dcfa5244f4c15c` — chore(base): update base with 112 upstream commits through bedb4bd5
  - `8f3ac3c9345da36c73b2e1fea3ed4e6303e47d0d` — fix(sync): preserve presets for used and custom theme sections
- Change summary:

```text
assets/carousel-block.js                           |   9 +-
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
 blocks/_bundle-product-list.liquid                 | 189 ++++-
 blocks/_bundle-summary.liquid                      | 509 ++++++++++--
 blocks/_collection-breadcrumb.liquid               |  45 +-
 blocks/_collection-columns.liquid                  | 108 ++-
 blocks/_collection-count.liquid                    |  14 +-
 blocks/_collection-filter.liquid                   |  36 +-
 blocks/_collection-pagination.liquid               |  35 +-
 blocks/_collection-products.liquid                 |  15 +-
 blocks/_collection-sort.liquid                     |  43 +-
 blocks/_collection-toolbar.liquid                  | 115 ++-
 blocks/_collections-page-card.liquid               | 297 ++++++-
 blocks/_column.liquid                              |  98 ++-
 blocks/_header-account.liquid                      |  70 +-
 blocks/_header-cart.liquid                         |  30 +-
 blocks/_header-divider.liquid                      |  10 +-
 blocks/_header-localization.liquid                 |  25 +-
 blocks/_header-logo.liquid                         |  10 +-
 blocks/_header-menu.liquid                         | 136 +++-
 blocks/_header-search.liquid                       |  75 +-
 blocks/_header-top.liquid                          |  47 +-
 blocks/_mega-menu-banner.liquid                    | 476 +++++++++--
 blocks/_mega-menu-banners.liquid                   | 226 +++++-
 blocks/_overlay-product-media.liquid               | 150 +++-
 blocks/_product-collection-grid.liquid             |   4 +-
 blocks/_product-details.liquid                     | 149 +++-
 blocks/_product-media.liquid                       | 115 ++-
 blocks/_search-input.liquid                        | 262 ++++++
 blocks/_search-products.liquid                     | 148 ++++
 blocks/_search-results.liquid                      | 155 ++++
 blocks/announcement-countdown-timer.liquid         | 276 ++++++-
 blocks/announcement-text.liquid                    |  63 +-
 blocks/banner.liquid                               |  77 +-
 blocks/blog-archive-list.liquid                    |  32 +-
 blocks/blog-card-button.liquid                     |  25 +-
 blocks/blog-card-description.liquid                |  50 +-
 blocks/blog-card-meta.liquid                       | 175 +++-
 blocks/blog-card-tag.liquid                        |  85 +-
 blocks/blog-card-title.liquid                      |  90 ++-
 blocks/blog-card.liquid                            | 142 +++-
 blocks/blog-grid.liquid                            | 104 ++-
 blocks/blog-list.liquid                            | 152 +++-
 blocks/button-view-details.liquid                  |  10 +-
 blocks/button.liquid                               |  45 +-
 blocks/buttons.liquid                              | 150 +++-
 blocks/carousel.liquid                             | 290 +++++--
 blocks/collection-background-item.liquid           |  70 +-
 blocks/collection-card-button.liquid               |  45 +-
 blocks/collection-card-description.liquid          |  60 +-
 blocks/collection-card-title.liquid                | 110 ++-
 blocks/collection-card.liquid                      | 313 +++++++-
 blocks/collection-list-items.liquid                | 133 ++-
 blocks/collection-promo.liquid                     | 313 ++++++--
 blocks/collection-tab.liquid                       |   4 +-
 blocks/collection-thumbnail.liquid                 |  73 +-
 blocks/collections-with-tabs-item.liquid           |  72 +-
 blocks/comparison-table-column.liquid              |  62 +-
 blocks/comparison-table.liquid                     |   2 +-
 blocks/contact-field.liquid                        |  37 +-
 blocks/contact-form.liquid                         | 473 ++++++++---
 blocks/countdown-timer.liquid                      | 190 ++++-
 blocks/discount-code.liquid                        | 161 +++-
 blocks/divider.liquid                              |  60 +-
 blocks/editorial-text.liquid                       | 581 ++++++++++++--
 blocks/email-signup.liquid                         |  90 ++-
 blocks/eyebrow.liquid                              |  43 +-
 blocks/faq_accordion.liquid                        | 497 +++++++++++-
 blocks/faq_answer_text.liquid                      |   6 +-
 blocks/faq_category.liquid                         | 201 ++++-
 blocks/faq_item.liquid                             | 224 +++++-
 blocks/first-card.liquid                           | 134 +++-
 blocks/gallery-grid.liquid                         | 216 ++++-
 blocks/gallery-header-group.liquid                 | 323 ++++++--
 blocks/gallery-image.liquid                        | 218 ++++-
 blocks/gallery-item.liquid                         | 137 +++-
 blocks/gallery-strip-feature-item.liquid           |  71 +-
 blocks/gallery-strip-item.liquid                   |  38 +-
 blocks/gallery-strip-overlay-group.liquid          | 101 ++-
 blocks/grid.liquid                                 |  94 ++-
 blocks/group.liquid                                | 260 ++++--
 blocks/header.liquid                               | 130 ++-
 blocks/heading.liquid                              | 124 ++-
 blocks/icon.liquid                                 | 175 +++-
 blocks/image-card.liquid                           | 268 +++++--
 blocks/image-comparison.liquid                     | 190 ++++-
 blocks/image-text-card-grid-item.liquid            |  32 +-
 blocks/image-text-stacked-band.liquid              |  84 +-
 blocks/image.liquid                                | 125 ++-
 blocks/localization.liquid                         |  40 +-
 blocks/location-item.liquid                        | 145 +++-
 blocks/location-list.liquid                        |  61 +-
 blocks/logo.liquid                                 |  20 +-
 blocks/marquee-item.liquid                         |  21 +-
 blocks/marquee.liquid                              |  93 ++-
 blocks/menu.liquid                                 | 110 ++-
 blocks/policy-links.liquid                         |  30 +-
 blocks/popup.liquid                                |  16 +-
 blocks/press-item.liquid                           |  56 +-
 blocks/press-quotes.liquid                         |   6 +-
 blocks/previous-and-next-posts.liquid              |   2 +-
 blocks/product-accordion.liquid                    | 105 ++-
 blocks/product-buy-accelerated-checkout.liquid     |  21 +-
 blocks/product-buy-add-to-cart.liquid              |  32 +-
 blocks/product-buy-buttons.liquid                  |   3 +
 blocks/product-buy-quantity.liquid                 |  91 ++-
 blocks/product-callout-gallery.liquid              | 143 +++-
 blocks/product-callout.liquid                      | 427 ++++++++--
 blocks/product-card.liquid                         |  10 +-
 blocks/product-description.liquid                  |  50 +-
 blocks/product-inventory.liquid                    |  10 +-
 blocks/product-list-banner.liquid                  |  14 +-
 blocks/product-list.liquid                         |  17 +-
 blocks/product-pickup-availability.liquid          | 202 ++++-
 blocks/product-price.liquid                        |  95 ++-
 blocks/product-recommendations.liquid              |  30 +-
 blocks/product-sticky-add-to-cart.liquid           |  56 +-
 blocks/product-title.liquid                        |  85 +-
 blocks/product-variant-picker.liquid               |  20 +-
 blocks/row.liquid                                  |  36 +-
 blocks/scroll-to.liquid                            |  25 +-
 blocks/scrolling-card.liquid                       | 163 +++-
 blocks/shop-the-look-products.liquid               | 106 ++-
 blocks/slideshow-slide.liquid                      | 425 +++++++++-
 blocks/social-links.liquid                         |  30 +-
 blocks/spacer.liquid                               |  20 +-
 blocks/tab-layout.liquid                           |  70 +-
 blocks/tabs-view-all-button.liquid                 |  45 +-
 blocks/testimonial-item.liquid                     | 218 ++++-
 blocks/text.liquid                                 |  85 +-
 blocks/timeline-list.liquid                        |  30 +-
 blocks/timeline-slide.liquid                       |   2 +-
 blocks/video.liquid                                | 135 +++-
 blocks/view-all-button.liquid                      | 116 ++-
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
 locales/en.default.schema.json                     |  24 +-
 scripts/theme-base-sync.cjs                        | 151 +++-
 sections/404.liquid                                | 218 ++++-
 sections/announcement-bar.liquid                   | 409 ++++++++--
 sections/blog-posts.liquid                         | 202 +----
 sections/breadcrumbs.liquid                        |  61 +-
 sections/bundle-builder.liquid                     | 199 ++++-
 sections/cart-drawer.liquid                        |  47 +-
 sections/collection-list-thumbnails.liquid         | 570 ++++++++++++-
 sections/collection-list.liquid                    | 176 +---
 sections/collection-page-breadcrumb.liquid         | 202 ++++-
 sections/collection-page-links.liquid              | 187 ++++-
 sections/collection-tabs.liquid                    | 200 ++++-
 sections/collections-with-background.liquid        | 617 +++++++++++++-
 sections/collections-with-tabs.liquid              | 453 ++++++++++-
 sections/collections.liquid                        |   2 +-
 sections/comparison-table-custom.liquid            |   2 +-
 sections/contact-form-custom.liquid                |  53 +-
 sections/contact-information.liquid                | 182 ++++-
 sections/countdown.liquid                          | 105 ++-
 sections/divider.liquid                            |  66 +-
 sections/email-signup-dual-image.liquid            | 374 +++++++--
 sections/email-signup-form.liquid                  |  58 +-
 sections/email-signup-single-image.liquid          |  76 +-
 sections/faq-accordion.liquid                      | 347 +++++++-
 sections/featured-blog-posts.liquid                | 201 ++---
 sections/featured-collection-banner.liquid         |  47 +-
 sections/featured-collection.liquid                | 311 ++-----
 sections/footer.liquid                             |  36 +-
 sections/gallery-carousel.liquid                   | 324 +++++++-
 sections/gallery-full-width-strip.liquid           | 234 +++++-
 sections/gallery-image-grid.liquid                 | 284 ++++++-
 sections/header.liquid                             |  80 +-
 sections/hero.liquid                               | 318 ++++++--
 sections/hotspot-full-width-carousel.liquid        | 208 ++++-
 sections/hotspot-gallery.liquid                    |  14 +-
 sections/hotspot.liquid                            |  53 +-
 sections/icon-text-cards.liquid                    | 418 ++++++++--
 sections/icon-text-inline.liquid                   | 127 ++-
 sections/image-cards.liquid                        |  20 +-
 sections/image-comparison-custom.liquid            | 106 ++-
 sections/image-comparison-split-custom.liquid      | 198 +++--
 sections/image-text-card-grid.liquid               | 224 +++++-
 sections/image-text-stacked-bands.liquid           | 545 +++++++++++--
 sections/location-list.liquid                      | 266 +++++-
 sections/location-map.liquid                       | 286 ++++++-
 sections/page.liquid                               |   6 +-
 sections/parallax.liquid                           |   2 +-
 sections/password.liquid                           | 228 +++++-
 sections/product-information.liquid                |  44 +-
 sections/product.liquid                            |   6 +-
 sections/quick-add.liquid                          |  55 +-
 sections/quick-view.liquid                         |  55 +-
 sections/recently-viewed-card.liquid               |  42 +
 sections/related-posts.liquid                      |  11 +-
 sections/rich-text.liquid                          |  48 +-
 sections/scroll-reading-text.liquid                | 105 ++-
 sections/scrolling-cards.liquid                    | 161 +++-
 sections/scrolling-text-star-separator.liquid      | 492 ++++++++++--
 sections/search-overlay.liquid                     |  81 +-
 sections/search.liquid                             | 555 +++----------
 sections/shop-the-look-section.liquid              |  49 +-
 sections/slideshow.liquid                          | 418 +++++++++-
 sections/testimonial-carousel.liquid               | 665 +++++++++++++--
 sections/testimonials-background-custom.liquid     | 108 ++-
 sections/testimonials-horizontal-custom.liquid     |  70 +-
 sections/text-marquee-custom.liquid                | 322 +++++---
 sections/timeline.liquid                           |  24 +-
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
 templates/index.json                               |  14 +-
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
 264 files changed, 27266 insertions(+), 5262 deletions(-)
```

- Validation: 194 Node tests pass, including merged carousel, variants, inventory, pointer tolerance, CDN artwork/preload and schema synchronization. Full Theme Check passes with zero errors and 38 warnings. Saved-value audit confirms only approved position_vertical removal; global settings schema remains unchanged. Live Shopify storefront/editor was not exercised.
