# Testimonial: split — 2026-10-19

## Final request and contract

User clarified that Card single is a review inside Carousel, then requested the same options/logic as Custom section and an open Add block so Header can sit above the carousel as in Figma.

- Section settings are exactly Custom section's current settings. Its allowed blocks are Custom section's curated block list plus `carousel_split`, capacity 50. Existing names/type/preset category and saved instances are retained.
- Both sections capture their own dynamic blocks and render `snippets/custom-section-layout.liquid`. The shared snippet contains the prior Custom section implementation/styles, with only optional root class and data-direction added; existing custom-element/parallax lifecycle is reused.
- Preset `Testimonial: split`: direct editable Header, followed by Carousel with three Card single reviews. Header contains original theme square Icon/Eyebrow composition and Heading. Carousel has optional top/header navigation and mobile progress; legacy Slide remains supported without migration.
- Card single: static Image/Group, numeric rating with localized accessible label and half-star fill, product picker rendering shared product-card once. Desktop: equal columns; right content side padding144, review–product gap48, product width390. Mobile: image4:3, image–content32, review–product24, product thumbnail96×120 with horizontal details/action. Product-specific typography remains scoped.

## Figma Inspect evidence

MCP lacks edit access. User explicitly directed use of Inspect. Browser Properties and canvas verified desktop48002:2546 and mobile48096:20372. Reference48002:1657 opened the page survey; section variants48190:9247 (Harper),48190:9227/container (Ava),48190:8657 (Eva) were inspected.

Desktop1920×1129, container1600×937. Image800×800. Right content frame800×800, side padding token36 (=144px), gap12 (=48px). Section padding token24 (=96px). Mobile375×815.25, container343×719.25, row343×550.25; image343×257.25, content261px, row gap32, review/product24, rating/copy16 and quote/author12. Quote is Roboto16px/150%, tracking0.1px. Rating star frame16px; source Vector48338:19796 color#FFB74B. Native theme star geometry reused; exact Figma SVG clipboard export was unavailable.

Three exact review/author pairs were copied: Eva Johnson; Ava Brown; Harper Anderson. Existing first product reference is retained. Other product handles are unselected rather than invented. Review photos remain unselected; no media upload requested/performed. Full visual fidelity is therefore incomplete, including original review photos, other product resources, exact star geometry and current global typography differences.

## Validation and preview

- Scoped Custom section, shared Carousel and Testimonial tests: 23 passed. Actual Liquid cases cover fractional/zero/clamped rating, missing-product storefront state, attributes, direct Header composition, schema parity, existing section options/padding, lifecycle and inert/focus behavior.
- Theme Check: 0 errors, 11 warnings: the 7 prior warnings plus 4 scoped-CSS notices for rte in unchanged files. Toolkit validator cannot start because bundled @shopify/theme-check-common is missing; CLI Theme Check used.
- Preset setting IDs/options/ranges and child references checked; diff whitespace check passed.
- Local fixture output/testimonial-split/index.html renders actual preset blocks/shared snippets with existing settings. Verified1920px desktop and375px mobile: Header above carousel, desktop arrows beside Header, equal columns, horizontal mobile product,4px progress, no mobile overflow. Clicking Next changed Eva→Ava and inactive-slide attributes became true,false,true. Fixture uses placeholder review images and existing catalog product data; it does not claim full storefront fidelity.
- Theme Editor sidebar read-only inspection showed Add block under the existing Testimonial instance. No block insertion, settings change, save or reload of its unsaved/restorable session was performed. Interactive add/duplicate/reorder/save/reload remains untested.
- Existing homepage instance left unchanged, per preset-only scope. No explicit theme push/publish, store save, commit or Git push.

## Homepage instance synchronization — follow-up

User explicitly requested updating the unchanged template instance. `templates/index.json` section `virelle_testimonial` now uses the new Header → Carousel → three Card single composition and preset section settings. Section ID, existing carousel/first slide IDs and first product reference are retained. Existing eyebrow/heading/quote/author text is transferred; any selected original Image/mobile Image/link values are preserved. Other homepage sections and template order were compared as parsed JSON and are unchanged. Other two product pickers and review images remain unselected as documented above. This supersedes the earlier note that the homepage instance was left unchanged. Template hierarchy, order, setting IDs/options/ranges and whitespace checks pass. No remote Theme Editor save or explicit theme deployment.

## Corrected block scope — latest user instruction

The user requested undoing the new testimonial Card single: retain slide_split and add only an independently selectable product card using Product list's existing card renderer. Removed blocks/testimonial-card-single.liquid and its allow-list/reference entries. Both Add section/Carousel presets and the existing homepage instance now use Carousel → slide_split → static content Group → product-card-single. Header, section options, order, copy, original static Image references and selected product references remain intact.

New blocks/product-card-single.liquid owns a product picker and calls shared product-card once, with no collection loop and no closest.product/global-product fallback. Blank selection renders nothing on storefront and one placeholder in the editor. Width and optional horizontal-mobile controls preserve the Figma product arrangement. Product list, product-card and product promo code are untouched. Existing Slide gets image-left, top-aligned content spacing; active parent navigation hides duplicate in-slide arrows. Reviews use existing Icon/Group/Text/Heading blocks; native five-stars icon is used, so the former bespoke 4.5-star fill is no longer claimed. Original photos/other two product selections are still pending.

23 scoped tests pass, including an actual shared-renderer test asserting exactly one card from the picker while unrelated closest/global products are present. Preset and saved-template setting IDs/options/ranges/child references pass. Previous Card single/rating-specific implementation and preview evidence is superseded; current structure has not been re-tested in live Theme Editor. No remote editor save or explicit push.


## Rating SVG update — 2026-10-20

Exported original Rating node `48338:19796` through Figma Inspect as SVG (88 × 16, #FFB74B, last star half gray #E6E6E6). Both section and carousel presets plus all three homepage testimonial Icon blocks now use `source: custom` and the unchanged export in `custom_icon`. SHA-256: `082b63230b7d36f150a0f0191d52d106c739e12af8ff2647da45fe7a77e426be`. This supersedes the earlier native five-stars limitation. Product card preset/display name is Product card, and blank picker renders the shared Product list placeholder on storefront and editor.
