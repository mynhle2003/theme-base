# Mara — section configuration checkpoint

Sources: Figma desktop1920×11626 (47015:4318), mobile375×12271 (47228:13878), inspected in signed-in Chrome.

Figma explicitly reports export/copy/sharing disabled. Owner confirmed export permission cannot be enabled. No attempt made to bypass this restriction. Existing media downloaded before this restriction was observed remain in use. Missing media/catalog sections are saved as disabled drafts, not completed storefront sections.

The homepage contains15 section instances in source order. Header/Footer remain in their respective groups. No implementation/CSS/JS/range/options changes. No theme deployment, commit or push.

## Status by source order

| Region | Existing section | State | Remaining work/gaps |
| --- | --- | --- | --- |
| Hero1 | hero | configured-unverified | Existing Veneta video; height900/760 versus880/720; CTA collection pending. |
| Rich text1 | rich-text | blocked / disabled | One original bag image bound; two unavailable; desktop1024→1020, image112→110/62→60. |
| new_arrivals | featured-collection | blocked / disabled | Four source products/images absent; mobile next-slide width follows existing carousel. View all depends on collection count exceeding display limit. |
| crafted_journeys | collection-list | blocked / disabled | Collections Simply iconic / The everyday classic / The modern icon and lifestyle photos absent. Counts/descriptions require store resources; source count superscripts follow base formatting. |
| classic_collections | collection-list | blocked / disabled | Five collection images/resources missing: Shoulder bags, Top handle bags, Evening bags, Mini bags, Crossbody bags. Source mobile card width differs from fixed base carousel fraction. |
| limited_release | countdown | configured-unverified | CTA sale collection not available; link unset. Source sample seconds ignored because duration controls expose hours/minutes. Runtime typography tracking differs as in Style Guide audit. Desktop source CTA is under left copy; native section places its static button as a separate flow slot. Shared page-width setting uses1700px outer width to approximate1600px content with48px side margins. |
| choose_colour | image-comparison-custom | blocked / disabled | Pink and sage bag source images unavailable under Figma export restriction. Existing labels lack separate desktop color name/mobile CTA visibility and independent product links. |
| scrolling_values | text-marquee-custom | blocked / disabled | Two decorative bag images unavailable. First image reuses verified editorial bag. Source text tracking and muted color require further evidence; inherited scheme text retained. |
| editors_pick | collection-tabs | blocked / disabled | Best sellers/New in collections and four source products unavailable. Tabbed section selected instead of single featured collection to retain real tab behavior. |
| hero_craftsmanship | hero | configured-unverified | Mobile720px source uses nearest existing760px; store CTA destination pending. Uses verified original video. Shared Hero default remains first hero. |
| timeless_pieces | featured-collection-banner | blocked / disabled | Model lifestyle image and four product resources unavailable. Desktop left banner plus2x2 products; mobile image above a single-row swipe carousel. Native banner section has no independent View all slot matching source Shop all top-right desktop/bottom mobile. |
| customer_story | custom-section | blocked / disabled | Lifestyle image and related bag thumbnail/product missing. Native carousel hides navigation for one known slide; no extra testimonials invented. Desktop column proportions are provisional until exact width evidence. |
| shop_the_look | shop-the-look-section | blocked / disabled | Peekaboo Soft Beige and model image absent. Source has no visible hotspots. Existing section matches right desktop/first mobile media but cannot overlay header/CTA over its static image; header appears beside/below media. |
| our_stories | blog-posts | blocked / disabled | Three article images/blog resources absent. Titles: Pastel Revival: A Subtle Statement Of Power; Behind The Craft: Inside The Atelier Of MĀRA; The Essence Of Minimal Luxury: MĀRA Fall/Winter2025. Source author/date metadata observed; no article bodies invented. Title casing/date format may differ in runtime. |
| community_gallery | gallery-full-width-strip | blocked / disabled | Four community photos/social destination absent. Existing strip keeps feature in center desktop but cannot reorder it first on mobile using current controls. |
| footer | footer | blocked / disabled | Dark logo and dedicated Shop/Collection/About menus/social destinations unavailable. Do not reuse unrelated theme menus. Source mobile arrow-only subscribe differs from shared label+icon control. Desktop logo173px→170px; mobile130px→128px. Footer source desktop node47049:12608, padding64/40px. Mobile bottom padding24px remains provisional. Cookie-settings action has no verified existing control; policy links follow store policies. |

## Composition and resource notes

- New arrivals: latest items / new arrivals;4 desktop cards,1 mobile card with native preview; View all text button. Product order: Vanity-Floral White; By The Way Selleria-Midnight Blue; Spy Small-Peach Bud Pink; Peekaboo Mini-Coffee.
- Crafted for journeys: Lasting value;3 cards desktop,3 stacked mobile. Simply iconic(4), The everyday classic(3), The modern icon(5); descriptions from source screenshot are not inserted into unrelated collections.
- Classic collections: Form. Function. Finesse.;5 desktop cards, mobile carousel: Shoulder bags(6), Top handle bags(5), Evening bags(8), Mini bags(5), Crossbody bags(3).
- Countdown: recurring62h33m (2d14h33m), no fixed date. Label sample seconds are not a real deadline.
- Editor’s pick uses actual collection-tabs and2 tabs, Best sellers/New in. Source tabs are not simulated with text.
- Timeless pieces: Modern classics; existing featured-collection-banner with left portrait +2×2 desktop products, single swipe row below image mobile. Shop all separate action unavailable in existing section.
- Testimonial uses existing Custom section→carousel→slide→row→3 columns, preserving image/quote/product order on mobile. Only source-visible review is configured; no fictional additional reviews.
- Shop the look uses existing shop-the-look-section; no artificial hotspot coordinates. Native media position right/first responsive supported, but image overlay caption is not supported.
- Our stories has3 columns desktop/1 stacked mobile; tag/title/author/date only, removes inherited descriptions and buttons. Articles/photos must be supplied before activation.
- Gallery matches desktop5-tile structure with central feature; existing implementation has no mobile feature-first order control.
- Footer source desktop47049:12608: padding64/40px, logo173×48→170px existing width step; newsletter first, Shop/Collection/About next, social/policy/localization/payment blocks. Mobile logo130→128px; bottom padding24px is provisional.

## Width mapping

Source wide lists use1824px content within1920px with48px margins: section full_width. Narrow content (comparison, countdown, banner products, blog) uses1600px. Existing max_page_width is outer width including96px padding;1696px desired rounds to1700px (step10), giving1604px content. Comparison image has its own exact1600px max and1600×686 desktop /343×206 mobile ratio. Existing global margins48 desktop/16 mobile preserved.

## Validation

Every changed section/block setting and select/range validated against current schema before writing. Required static IDs preserved. Theme Check and final structural diff validation recorded in task result; storefront preview has not been run.

## Final local validation

- Shopify Theme Check:358 files inspected,0 errors,6 existing warnings.
- git diff --check:passed.
-20 tracked files parsed/audited; every Liquid implementation and every schema field outside presets is byte/structurally unchanged from HEAD.
- Static block IDs and dynamic block limits validated recursively for homepage, Header and Footer.
- Homepage order contains15 unique, resolvable instances; enabled:Hero Veneta, recurring Countdown, Hero craftsmanship.12 homepage drafts plus Footer remain disabled pending media/resources.
- Saved presets and unrelated settings retained; max_page_width1700 is the additional measured layout mapping.
- No storefront visual QA/deployment/commit/push performed.
