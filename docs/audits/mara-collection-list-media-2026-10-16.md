# Collection list media — 2026-10-16

Used store-content-media skill for the user-requested Figma image upload. Target store verified live: layouthub-template-v2.myshopify.com.

Three image-only Figma node exports (603×704 PNG) retain the source crop and were converted to actual AVIF, decoded and visually checked: desktop nodes 47015:19689, 47015:19698, 47015:19707 in file bH9A5237I07NWt19Cua9gL. Local assets and hash/alt manifest: output/collection-list/.

Shopify was initially unavailable, then successfully connected during the task. Upload and collection creation completed. The first upload returned a connection error; a read-only Files query confirmed no matching file before retrying, avoiding duplicates. All three Files images were verified READY, MIME image/avif, 603×704, with the requested alt text.

| Collection | ID | Handle | AVIF file | Collection image |
| --- | --- | --- | --- | --- |
| Simply Iconic Mara | gid://shopify/Collection/535342973227 | simply-iconic-mara | https://cdn.shopify.com/s/files/1/1024/2192/2091/files/mara-simply-iconic.avif?v=1792114980 | https://cdn.shopify.com/s/files/1/1024/2192/2091/collections/mara-simply-iconic.jpg?v=1792115041 |
| The Everyday Classic Mara | gid://shopify/Collection/535343038763 | the-everyday-classic-mara | https://cdn.shopify.com/s/files/1/1024/2192/2091/files/mara-everyday-classic.avif?v=1792114937 | https://cdn.shopify.com/s/files/1/1024/2192/2091/collections/mara-everyday-classic.jpg?v=1792115049 |
| The Modern Icon Mara | gid://shopify/Collection/535343104299 | the-modern-icon-mara | https://cdn.shopify.com/s/files/1/1024/2192/2091/files/mara-modern-icon.avif?v=1792114943 | https://cdn.shopify.com/s/files/1/1024/2192/2091/collections/mara-modern-icon.jpg?v=1792115078 |

Collections were audited before creation; no corresponding Mara collections existed. Three manual collections were created with Figma descriptions, uploaded images and theme-suffixed titles per the skill; get_collection verified each image/alt/title/handle. Collection images were converted by Shopify to JPG; original AVIF Files are retained. No duplicate fallback images were uploaded.

Bound the three verified handles, in design order, only to templates/index.json → crafted_journeys → collection-list → settings.collections. The shared Collection list default preset currently belongs to the separately configured Classic collections composition and was preserved.

## Limits and validation

- New collections have zero products; Figma counts 4/3/5 are not reproduced. No unrelated products were assigned or invented.
- Titles include the required Mara suffix, so card text differs from the unsuffixed Figma labels.
- No storefront/browser visual verification: browser control is disabled. No Theme Editor settings saved and no theme push/publish performed.
- Upload does not deploy the local template bindings.
- Theme Check and whitespace validation completed; see final task result.

## Membership follow-up

User explicitly requested adding products to match the Figma counts 4/3/5. Reverified the connected store and the three collections; all started at zero. Live handle:mara-* search returned exactly four existing ACTIVE products: Vanity Floral white (15427177513259), By The Way Selleria Midnight Blue (15428868178219), Spy Small Peach (15428870865195), Peekaboo Mini Coffee (15428875026731). Broader bag searches did not find another suitable fashion handbag; an unrelated tennis racket bag was excluded.

Added all four Mara products to Simply Iconic, three structured/compact bags (Selleria, Peekaboo, Vanity) to The Everyday Classic, and all four to The Modern Icon. Independent get_collection readbacks confirm actual counts 4/3/4 against targets 4/3/5. Original images/descriptions, other collections, product/variant data and local theme composition were preserved.

The Modern Icon remains short one suitable product. Asked user for the fifth product's name/handle or Figma source; did not create a duplicate product from a variant or assign unrelated merchandise just to inflate the count. Membership receipt: output/collection-list/membership-receipt.json. Storefront channel-specific count/rendering is not visually verified. No theme push required for these store-side membership changes.

## Final count completion — Roma product

User supplied homepage Figma 47015:4318 and explicitly authorized creating a missing product from the design. Fresh design context/screenshot for product card 47120:17883 identifies Roma Leather Melon - Blue, USD 3,700, Blue #2b77c4 and Black #181818. Live title/handle search confirmed no existing Roma product before creation.

Created Product 15429006197035, handle mara-roma-leather-melon-blue, ACTIVE, cross-body bag category aa-5-4-7. The original Figma Blue source is the first catalog image, with the source card's vertical crop applied. Seven supplemental images were generated from that exact reference using the skill-required gpt-6-luna/max image agent: Blue lifestyle/two front angles, Black catalog/lifestyle/two front angles. All eight assets are real AVIF, decoded and visually checked; Shopify readback confirms READY, image/avif (Blue original 2000×2000; generated assets 1254×1254). Four images per color, including a person wearing the bag in each lifestyle image. Supplemental images are generated approximations, not additional source photography.

Two Color variants use linked shopify.color-pattern metaobjects with the Figma hex values, correct per-color catalog media and custom.secondary_image file references. Both prices are USD 3,700; source has no second price, so compare-at price remains unset. Description and custom.summary supplied from visible product features. Tags remain empty, matching the card. Stock set to 20 per variant at verified Shop location 117337850155, using compareQuantity 0.

Published product to verified Online Store publication 322604237099 and added only to The Modern Icon. Read-only publication.products queries filtered by collection IDs independently confirm exactly 4 / 3 / 5 published products for Simply Iconic / The Everyday Classic / The Modern Icon, with no further pages. This resolves the earlier missing fifth-product limitation. No other collection membership changed.

Final receipt: output/roma-product/shopify-receipt.json. onlineStoreUrl is null in API readback despite publishedOnPublication=true; actual browser rendering is unverified. No theme code/config changes or theme push performed in this completion.
