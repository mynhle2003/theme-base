# Novaire — Collection list preset

Updated 2026-10-27. Sources: Figma `vsUDZS8CZ0sa1pruNqu0eb`, desktop `47052:10843` (1920×773.78), mobile `47284:7151` (375×355). Read via CUA/Chrome; MCP session `c2471bfe-8e81-4c3d-962f-008f22a54e96` encountered View-seat tool quota. Existing verified Chrome profile checkpoint: `/tmp/novaire-browser-checkpoint.json`.

## Configuration

- Reused `collection-list` → static `collection-list-items` → static `collection-card`, with static `collection-card-title` and dynamic `collection-card-button`.
- Preserved one original-name Add section preset and its `t:general.collections` category, confirmed against main. Added explicit title configuration to the preset to match homepage `categories`, including suffix removal and hidden count.
- Synchronized card gaps 20px desktop / 10px mobile, content gap24px desktop /16px mobile, white primary Shop now buttons with fit width. Preserved 6:7 image ratio, three desktop columns and native mobile next-slide preview.
- Only section presets and homepage categories configuration changed. Existing unrelated changes preserved; no implementation, global settings, new controls, commit, explicit push or publication.

## Store readback

Target: `layouthub-template-v2.myshopify.com`, confirmed from theme initialization. Reused existing resources; no uploads or mutations required. Figma has no visible product count in these cards.

- `weekend-outfit-novaire` — gid://shopify/Collection/536228397355, 4 products; image 1190×1388: https://cdn.shopify.com/s/files/1/1024/2192/2091/collections/novaire-weekend-outfit.png?v=1793064739
- `midi-dresses-novaire` — gid://shopify/Collection/536228331819, 5 products; image 1190×1388: https://cdn.shopify.com/s/files/1/1024/2192/2091/collections/novaire-midi-dresses.png?v=1793064732
- `cavation-outfit-novaire` — gid://shopify/Collection/536228462891, 5 products; image 1190×1388: https://cdn.shopify.com/s/files/1/1024/2192/2091/collections/novaire-cavation-outfit.png?v=1793064745

Collection titles are Weekend Outfit Novaire, Midi Dresses Novaire, Cavation Outfit Novaire. Kept the source spelling Cavation. Handles remain bound in preset and instance. Images render from Shopify collection CDN URLs; no Figma/staging URLs saved. Admin onlineStoreUrl values were null, so publication was not independently established by that field; current collection images and links are confirmed in the development storefront.

## Render verification and remaining gaps

- Preview: existing localhost9300 development theme; desktop viewport1920×1080/content1905px, mobile viewport375×812/content360px due scrollbar. Three card subjects and order confirmed desktop: green patterned outfit with hat; orange floral cutout dress; white lemon dress beside stone column. First mobile image subject/crop confirmed. Native carousel initialized; gesture interaction and complete Theme Editor lifecycle not tested.
- Desktop Figma card594.67×693.78, row gap20, outer inset48, bottom80. Render cards589.66×687.92/content1905, gap20 and inset48; difference follows narrower content width.
- Mobile Figma card256×299, inset16, gap10, bottom56. Render271.66×316.92/content360, inset16, gap10, section372.92 vs target355. Native next-slide preview uses a fixed fraction with no card-width/fraction setting; exact mobile geometry remains unsupported.
- Figma centers heading and button together over a uniform black20% overlay. Existing Collection card pins content to the bottom with a gradient; its fit-width button wrapper starts at the left despite centered heading. There is no vertical content-position, overlay-opacity or button-alignment control. These remain implementation gaps; no CSS workaround added.
- Primary button colors now match the white/dark source treatment. Exact typography, button dimensions, heading tracking and mobile second/third-card crops are not certified as pixel matches. Theme-wide typography was preserved.
- Theme Check: zero errors, seven warnings in unrelated files (five ExcessiveSettingsCount, one OrphanedSnippet, one LiquidComplexity). Configured schema IDs/options/ranges valid; Liquid outside schema unchanged; git diff --check passed.
- Temporary screenshots were inspected, then cleaned after measurements were recorded here. No task-created Chrome tabs/groups; existing source tab retained. Temporary IAB preview closed and viewport reset.

## Norden customization follow-up — 2026-10-27

Owner subsequently authorized custom On image behavior. Added existing Norden-style Position control (top/center/bottom), normalized render attribute, removed forced gradient/white text, and aligned child buttons using the card Alignment. Preset and homepage now use Center. This supersedes the earlier position/button-alignment implementation-gap description; the Figma uniform20% overlay and exact mobile card width remain outside this port. Latest visual verification is pending because localhost9300 has stopped; earlier screenshots predate this custom change. See the theme customization record for implementation paths and preservation rules.

### Text Alignment control and preset sync

Alignment now uses a select with translated Left/Center/Right labels, preserving existing values. Both Add section preset and homepage card use Center alignment, Center position, and heading/button gap24px on desktop/mobile, following the supplied Figma heading/button spacing. Other collection, image, ratio, and button bindings retained. The earlier gap_mobile16 description is superseded. Uniform image overlay and exact mobile card width remain gaps; visual verification after these changes is pending while preview is stopped.

### Global button configuration — 2026-10-27

Owner requested settings_data-only button matching. Changed current.button_height_mobile44→40px to the supplied mobile button height, and current.button_padding_inline_mobile28→24px for the narrower mobile source button (approximately132px wide). Desktop height43px and inline padding28px retained. Existing Poppins400/13px, line height160%, tracking15%, uppercase, square radius and scheme colors retained. Values are supported by the existing schema and map through css-variables to the shared button CSS. These mobile dimensions affect all shared button consumers, including other sections, forms and commerce actions that consume the same tokens. Named saved presets and unrelated current settings preserved. Exact rendered width remains unverified with the preview stopped.
