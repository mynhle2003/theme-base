# Collection tabs Shop all — 2026-10-20

Store: `layouthub-template-v2.myshopify.com`, USD. Source design: Virelle homepage Collection tabs, desktop `48002:1687`, mobile `48096:20121`. User requested setup-store additions to satisfy Shop all and explicitly authorized two new demo products at $35.

## Completed store setup

Created Sage Racerback Training Tank (`virelle-sage-racerback-training-tank`, product 15438631469355) and Pace Running Shorts (`virelle-pace-running-shorts`, product 15438634877227). Each has a $35 variant, Color linked to shopify.color-pattern, 20 available units at Shop location 117337850155, category, description, custom.summary and matching custom.secondary_image. Both are ACTIVE and published to Online Store publication 322604237099.

Each product has four READY images in catalog → running lifestyle → rear three-quarter → detail order. Variant primary media and secondary lifestyle references were read back. All images are AI-generated for these user-authorized demo designs; rear construction is illustrative. These are not claimed to be additional Figma products. No invented tags or compare-at prices were added. Sage/Navy color metaobjects and eight permanent media/CDN references are in the receipt.

Only Under $40 membership was expanded, appending the two new models after its existing four. Existing members/order, other product prices/inventory and other collections were retained.

| Tab | Collection ID | Handle | Published Online Store products | Overflow versus limit 5 |
| --- | --- | --- | ---: | --- |
| Best Sellers | 535497376043 | virelle-bestsellers | 6 | yes |
| New Arrivals | 535497343275 | virelle-new-arrivals | 10 | yes |
| Under $40 | 535497408811 | virelle-under-40 | 6 | yes |

Final Admin API readback confirms all members ACTIVE/published and no remaining pagination. Receipt: `../theme-init/virelle-shop-all-2026-10-20.json`.

## Separate rendering defect repaired

Initial HTML already marked Best Sellers/New Arrivals triggers with `data-view-all-available=true`, but emitted no Shop all wrapper. The CTA filtered sibling blocks by concrete collection-tab type. Temporary diagnostics confirmed Shopify exposes those siblings as @theme while their collection settings are unavailable to the static CTA block. Adding products alone could not fix that lookup failure.

`blocks/tabs-view-all-button.liquid` retains concrete-type preference and falls back to @theme. If sibling resources remain unreadable, it emits only a hidden disabled action shell. Existing tab runtime reads each rendered tab trigger's actual collection URL and overflow flag, then shows the action only when `products_count > max_products`. No threshold was reduced, no condition bypassed and no JavaScript was changed. When sibling resources are readable, original server rendering/visibility rules apply. Temporary diagnostic comments were removed.

Custom record: `../theme-customizations/virelle-theme.md`. No global settings/template/preset values changed in this pass. Existing development watcher was reused and reflected local block edits; no explicit theme push, Theme Editor save, theme publication, commit or Git push.

## Verification

- View all tests: 15/15 passed, including generic blocks with unreadable sibling settings, overflow thresholds, resource links, tab switching and mobile visibility preferences.
- Theme Check: zero errors; seven warnings in unrelated files. Diff check passed.
- Browser preview verified at 1920×1080 and 375×900. On all three tabs, Shop all is visible and points to the matching collection URL. The new Under $40 membership satisfies the same native overflow flag. Temporary viewport override was reset.
- Proof and exact results: `../../output/virelle-shop-all-demo-2026-10-20/browser-results.json`, `shop-all-desktop.jpg`, `shop-all-mobile.jpg`. Screenshots include keyboard-focus styling after checking the CTA is focusable.
- This pass verifies the Shop all behavior and requested catalog additions, not complete visual parity of all homepage typography/card styling.
