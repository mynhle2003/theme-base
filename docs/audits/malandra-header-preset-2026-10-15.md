# Malandra header preset — 2026-10-15

Figma file: `7BbUHDzKGaMGMkyRpu0YZ8`. Header nodes: desktop `52325:1225`, mobile `52422:10457`; mega menus `52589:16002` and `52589:16066`. Implemented using the requested build-preset/setup-store workflow, with custom changes authorized by the user's request and suitable Arche header fixes reused.

Header uses white full-width composition, centered stacked logo, uppercase navigation and supplied icon geometry. Latest requested reduction: wordmark 118→100px desktop, 100→92px mobile. Menu spacing compacts below 1400px; labels use 12px below 1200px. Mobile drawer breakpoint remains 992px.

Store: `layouthub-template-v2.myshopify.com`. Navigation `Malandra Header`, handle `malandra-header`, ID `323718709547`. Roots: Shop, Best Sellers, Collection, Gifts, About Us. Best Sellers contains Shop Jewelry, Bestselling Styles and Discover More with meaningful jewelry links; banners Everyday Necklaces and Statement Earrings point to existing collections. Collection has Earrings, Bracelets, Necklaces and Rings cards with actual counts 3, 2, 4, 2. No Category One/Two placeholders remain.

New Files: `malandra-header-diamond.avif` (400×270, MediaImage `46641766891819`) and `malandra-header-wordmark.avif` (1179×131, MediaImage `46641767350571`). Both are transparent AVIF conversions of supplied Figma vectors. Preset references use `shopify://shop_images/…`. Existing media reused: `malandra-category-necklace-figma.avif`, `elara-category-earrings.avif`, `elara-category-bracelets.avif`, `elara-category-necklaces-figma.avif`, `elara-category-rings-figma.avif`.

Validation: recursive setting/options/ranges/allow-lists check passes for 32 configurations; JS syntax and diff whitespace pass. Theme Check: zero errors, five existing excessive-settings warnings. Browser responsive readback: desktop 1920,1440,1280,1200,1100,1024,992px all one root navigation row; mobile375,320px native drawer and no horizontal overflow. Both mega menus and collection images verified in preview. Theme Editor lifecycle uses the reused Arche header regression suite; full manual editor add/remove lifecycle was not repeated.

Existing preview supervisor synced the local files to development theme `192119800107` on port9301. No production publication, manual theme push, commit or Git push performed. Unrelated working changes preserved.
