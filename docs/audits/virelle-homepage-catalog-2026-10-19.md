# Virelle homepage catalog — 2026-10-19

Store: `layouthub-template-v2.myshopify.com`, USD. Source: Figma file `yTXlAfT0miBGgRuuYM4OMp`, homepage `48002:1686`, collection tabs desktop `48002:1687`, mobile `48096:20121`. Repeated appearances are consolidated into 10 unique products.

## Verified store result

All 10 products are ACTIVE and published to Online Store publication `322604237099`. All 41 gallery images report READY. All 23 variants have a linked Color option, custom secondary image and inventory tracking; available demo variants have 20 units at Shop location `117337850155`. SoftMotion Sports Bra Black / S has zero units, following the disabled featured-product size. Every product has a category, description and `custom.summary`.

| Product | USD | Images |
| --- | ---: | ---: |
| SoftMotion Sports Bra | 45 | 5 |
| EasyLift Halter Bralette | 45 | 4 |
| Mellow Soft Long Sleeve Top | 45, compare-at 55 | 4 |
| SoftMotion Jacket | 45 | 4 |
| Effortless Seamless Leggings | 45 | 4 |
| Unified High Waisted Shorts | 45 | 4 |
| High Neck Sports Bra | 35 demo | 4 |
| Square Neck Long Sleeve Crop Top | 35 demo | 4 |
| Twist Front Sports Bra | 35 demo | 4 |
| Ruched Long Sleeve Crop Top | 35 demo | 4 |

The four video-only models have descriptive names and $35 demo prices under the user's “ok” authorization. The other six retain Figma prices. No unsupported compare-at prices were added.

| Published collection | Handle | Published products |
| --- | --- | ---: |
| Best Sellers Virelle | virelle-bestsellers | 6 |
| New Arrivals Virelle | virelle-new-arrivals | 10 |
| Under $40 Virelle | virelle-under-40 | 4 |
| The Motion 365 Virelle | the-motion-365-virelle | 6 |
| T-shirts & Tops Virelle | virelle-t-shirts-tops | 7 |
| Jogger & Bottoms Virelle | virelle-jogger-bottoms | 2 |
| Jackets & Hoodies Virelle | virelle-jackets-hoodies | 1 |

Collection covers are hosted on Shopify CDN. The six existing empty Virelle collections were reused; Motion 365 was created separately. Full IDs, URLs, publication, prices, options, media and membership are saved in `../theme-init/virelle-homepage-catalog-final-2026-10-19.json`.

## Local resource bindings

Updated existing homepage instances in `templates/index.json`: collection tabs, New Arrivals, Motion 365, featured product, shop the look, category collections, shoppable video product cards and testimonial product. Resource picks were also synchronized into existing presets for collection-tabs, featured-collection, featured-collection-banner, featured-product, shop-the-look-section, collections-with-background and testimonial-carousel. Handles are used for resource pickers. Existing unrelated concurrent changes were preserved.

No explicit theme push/publish, Theme Editor save, commit or Git push was performed. Store content publication and local theme deployment are separate.

## Verification and limits

- Admin API final readback: 10 ACTIVE/published products, 41 READY images, 23 variants, all seven collection memberships confirmed without pagination remaining.
- Shopify CLI Theme Check: exit 0; zero errors, six existing warnings (five ExcessiveSettingsCount and one css-variables LiquidComplexity).
- `git diff --check`: passed. Local JSON resource references inspected.
- Earlier desktop preview showed resource-backed product cards and featured-product sizes. Final browser verification was blocked because local browser use is disabled in Work settings. Mobile rendered preview remains unverified.
- Original Figma images remain primary. Supplementary gallery views are AI-generated interpretations. Two twist-front mannequin detail views omit the tiny source logo; image-generation workspace credits were exhausted during their correction. They should not be treated as exact photographic evidence of garment details.
- Figma bra badges conflict with its featured-product availability. Only Black / S is unavailable; the product remains purchasable in other variants. Mellow uses Charcoal matching its garment image rather than the inconsistent blue swatch in one frame.
- Existing view-all logic requires more than five products. Best Sellers and New Arrivals satisfy this data condition; Under $40 contains the four actual video models and does not. No extra duplicate products were invented. Final rendered button behavior remains unverified.
- Existing preset visual gaps (outlined inactive tabs, mobile scrolling/peek, typography and spacing) remain documented in `collection-tabs-preset-2026-10-19.md`; catalog setup does not resolve those implementation gaps. A center shoppable-video design with two product thumbnails remains limited to the existing one-product slot.
- Shopify image focal-point writes/readback were unavailable through the exposed operations; default center behavior was retained without claiming verified persisted coordinates.

Durable machine-readable receipt: `../theme-init/virelle-homepage-catalog-final-2026-10-19.json`. The checkpoint was updated to reflect the completed store catalog and the verification limits above.
