# Collection tabs — second homepage instance — 2026-10-15

Applied the current build-preset skill to `templates/index.json#birthstones_tabs`, the second Collection tabs instance immediately after Shop the look. Updated the single section preset using its original `main` translation key `t:general.collection_tabs` (displayed as **Collection tabs**). The first Collection tabs instance, other homepage instances, order, existing custom implementation and all non-preset schema definitions are unchanged.

Read complete high-fidelity Figma design contexts and screenshots after the connector authentication refresh:

- [Desktop section, 52812:12080](https://www.figma.com/design/7BbUHDzKGaMGMkyRpu0YZ8/Malandra?node-id=52812-12080&m=dev): 1920px section, 1824px content, 80px vertical padding.
- [Mobile section, 52393:9100](https://www.figma.com/design/7BbUHDzKGaMGMkyRpu0YZ8/Malandra?node-id=52393-9100&m=dev): 375px section, 343px visible content, 56px vertical padding.

The current mobile screenshot says **Semi-Precious Birthstones**, matching desktop; the earlier audit's separate-mobile-title gap is superseded. Its code includes a stale desktop-width container token, so screenshot and visible child dimensions were used to interpret mobile geometry.

## Applied configuration

| Region | Configuration |
| --- | --- |
| Header and tabs | Tab position Right, Mobile alignment Left; header lg / H2 and body 16px; header gap 16px desktop / 12px mobile; nearest supported custom max-width 770px to Figma 768px; mobile fill width |
| Copy | Semi-Precious Birthstones; The ultimate sentimental souvenir, made from 14k gold and semi-precious stones. |
| Tab layout | RINGS / NECKLACES / EARRINGS; underline, body font, 14px; 32px navigation gaps |
| Products | Carousel, three desktop product columns beside the detached promo; one mobile column with native 1.2-slide preview; 10px product gaps. Max products changed from 3 to 8 so desktop has enough items to slide once a populated collection is assigned |
| Promo card | One in each tab, detached desktop and mobile, For Effortless Glow, corrected exact supporting copy without the extra colon; scheme-3, bottom-left content, desktop padding 36px; mobile padding 32px vertical / 28px horizontal |
| Promo CTA and overlay | SHOP NOW; inherit existing global 44px button height; 24px button spacing as the shared compromise for desktop 28px / mobile 20px; content gap 16px; existing gradient control now uses Figma's transparent-to-brown 30% gradient and desktop stops |
| Section/content spacing | 80/56px vertical padding; 48px desktop / 36px mobile section gaps |
| Carousel controls | Secondary chevron buttons, outside edge, desktop hover-only; progress bar enabled; 450px desktop maximum; pagination spacing 40px desktop / 32px mobile, using directly measured Figma values |
| View all | Hidden with the existing static-block disabled state in this homepage instance because neither reference has this button. Existing footer placement/alignment behavior remains available if the merchant unhides it |

Kept existing Collection tab desktop detachment, sticky carousel, mobile detachment, desktop Tab position semantics and footer behavior. No new custom CSS, Liquid, JavaScript, setting or global value was added.

## Resources and remaining differences

- New collection and promo image selectors remain empty. No media/resource work was requested, no products or images were selected/downloaded/uploaded, and no store writes were performed. Product image, price, sale and swatch fidelity therefore remains pending resource assignment. Existing references outside this section are preserved.
- Figma mobile promo is 343×429px, followed by products after 10px. Existing detached promo styling supplies a 360px minimum and a fixed 24px margin; there is no ratio/height/margin setting for this block. This remains a custom implementation gap, not a preset edit.
- Figma mobile product media is 256px wide. Existing mobile preview uses 1.2 slides, with no exact media-width setting.
- Figma progress width is 450px desktop and 245px mobile. Existing width control is shared; the 450px maximum matches desktop and becomes full carousel width on mobile. Separate mobile progress width is unavailable. Its global thickness/radius remain inherited.
- Figma mobile header-to-tabs gap is 24px and header-group-to-cards gap is 36px. Existing mobile parent gap controls both flattened slots; 36px prioritizes the section content spacing. No independent header-to-tabs gap control exists.
- Promo text gap, button spacing and gradient are shared across viewports. Desktop text gap 16px matches; mobile expects 10px. Button spacing 24px is between reference desktop 28px and mobile 20px. Mobile gradient starts earlier than desktop in Figma; only one gradient setting exists.
- View all static blocks can be hidden in template JSON, but the installed section-preset validator rejects a `disabled` property in preset block declarations. The Add section preset therefore retains View all on desktop and uses its existing mobile-hide setting. Hide the static block after adding the section to reproduce the reference desktop. No unsupported preset property was retained.
- Exact tab font weight/tracking, product and button styles remain controlled by existing shared typography/theme settings and were not globally altered for this section.

## Validation and preview limits

Theme Check: **0 errors, 5 existing warnings**. Verified declared setting IDs, select options, range bounds/steps, checkbox types, block allow-lists, one uniquely named original preset and identical section settings between preset/instance. Confirmed only the second homepage instance changed and section implementation/non-preset schema stayed byte-identical to the pre-task snapshot. `git diff --check` passed.

Compared both Figma screenshots and measured design values against existing responsive contracts, including the earlier local real-Swiper and tab-position browser checks. This task did not upload a preview theme or verify a populated Shopify storefront; no complete pixel-match claim is made. No theme push, deployment, commit or publish.

Shopify's static block model confirms hidden static blocks and their stable preset IDs: [Static blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/static-blocks). The installed Theme Check result, rather than a guessed schema extension, determined the preset `disabled` limitation.

## Explicit named preset requested afterward

The owner requested a separate preset named **Collection tabs: promotion card**.
Created that named preset inside the existing Collection tabs section, preserving
the original default preset and the section's original name/type. The two names
are unique. Updated the second homepage instance's display `name` to the exact
requested preset name while preserving its type `collection-tabs`, block tree,
settings, hidden View all and placement after Shop the look. Shopify stores the
instance composition rather than a live link to a named preset. The named preset
uses the same current composition/settings; its desktop View all preset limitation
remains as documented above. This explicitly requested named preset is the
build-preset skill's naming exception, superseding the one-preset-only description
for this final state. Theme Check: 0 errors, 5 existing warnings; whitespace check
passed. No implementation change or deployment.


## Superseding owner request — remove named preset and populate content

Removed **Collection tabs: promotion card** from Add section. Only the original **Collection tabs** preset remains; the second homepage instance is also named **Collection tabs** and retains its placement/composition. Uploaded three verified AVIF files: Figma rings photo and two generated editorial category images. Created dedicated Rings, Everyday Necklaces and Signature Earrings Malandra collections with 2/4/3 existing category-matching products, images, descriptions, manual order and Online Store availability. Bound all three collection handles, image/mobile image references, copy and CTA links in the remaining preset and second homepage instance. Earlier statements that selectors remain blank and that the named preset remains are superseded.

Receipt: `malandra-collection-tabs-promo-content-2026-10-15.json`. Current Theme Check: 0 errors, 6 warnings in unrelated existing files; collection-tabs tests 15/15 pass. No theme deployment or Theme Editor configuration save. Storefront pixel comparison remains pending deployment.
