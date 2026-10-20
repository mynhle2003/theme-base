# Virelle Header and Footer

Status: implemented and configured locally; source assets and navigation uploaded/read back. Browser visual and native Theme Editor QA remain blocked because local browser use is disabled in Work settings. No pixel-perfect storefront claim or deployment is made.

## Scope and evidence

Owner requested build-preset, setup-store and custom Header/Footer using Mara/Zevra as implementation references. Target is Virelle; the IDE's Mara active file did not change the target. Existing unrelated work, including concurrently edited homepage sections/media, was preserved.

Figma file `yTXlAfT0miBGgRuuYM4OMp`: Header component set `48622:18832`, Footer component set `48864:14991`. High-fidelity context and screenshot returned after reconnect. Source read through Figma MCP and read-only Plugin API; no Figma design mutation. Earlier permission-denial notes are superseded for source access.

Header variants: desktop `48622:16385` 1920×72; tablet `48864:12071` 768×72; mobile `48864:12298` 375×64. Transparent variants preserve the same geometry. Content widths1820/708/343; menu40px; actions24px desktop/tablet and16px mobile. Source logo82×20; icon24×24. Mobile logo sits to the right of the toggle; tablet logo stays centered with account/search/cart at right. Top scrolling bar31px,10px Roboto Medium/150%/2px tracking, gaps144/96/80.

Footer variants: desktop `48864:14990`, tablet `48864:14992`, mobile `48864:15123`. Dark#181818; desktop top96/bottom32, tablet top64, mobile top48/bottom32. Desktop brand546px and links910px within1820px content; tablet/mobile newsletter spans width before menus. Footer headings18px, links14px, logo164×40, social48px boxes with24px source icons. Form56/48/44px; privacy copy12px. Desktop currency selector hidden in compact views. Mobile menus stay expanded as the source shows.

## Implementation and local configuration

- Header uses existing static `_header-top` and existing menu/logo/toggle/localization/search/account/cart blocks. Independent mobile logo placement and action gaps reuse Mara/Zevra fixes, with source-specific tablet behavior. Scoped Header styles own source dimensions; overlay remains clear rather than importing Mara's tint/blur.
- `snippets/virelle-icon.liquid` contains the exact exported search/account/cart/menu SVG geometry. Social branches use original Facebook/Instagram/TikTok/YouTube/X paths. All use currentColor and preserve accessible names on controls. Footer arrow is registered as `virelle_footer_arrow` and allowed by the button and email-signup schemas.
- Footer retains row/column, Group, Logo, Text, Email signup, Social links, Menu, Divider, Localization and Payment icons. It is enabled in the local footer group. Its source-specific layout is scoped under `.footer--virelle`. New icon-only signup is opt-in and retains the hidden Subscribe label; other signup presets keep the previous text behavior.
- Header/Footer Add section presets match their local group trees, original names/categories retained. No new section type and no unrelated template reset.
- Global current settings receive verified logo file references, widths80/80 (nearest legal values to82) and five missing social URLs as#; real social URLs are retained. Footer logo widths160/164 are nearest legal values to164. Saved settings presets and unrelated current values were preserved.

## Store setup

Verified store `layouthub-template-v2.myshopify.com`. Uploaded original exported light/dark logos, converted to AVIF, and two source mega-menu photographs as AVIF. All four were independently read back READY with CDN URLs/dimensions. Logo dark328×80/white656×160; stay-fit820×1024/sporty-chic1080×1350. Image conversion used actual AVIF encoding. Asset files downloaded by the initial attempt were empty; only successful non-empty exports/downloads were converted/uploaded.

Created Virelle Header, Footer Company/Shop/Pages/Policies menus; existing shared main-menu and other brands' menus unchanged. Header has nested Featured/Categories and Pages dropdowns. Created About us and FAQ pages with short neutral demo copy and reused Contact. Verified existing Privacy policy/Terms of service resources; Cookies Settings points to the existing Your Privacy Choices page rather than implementing a consent modal. Source copyright copy is retained. IDs/handles/CDN readback are in the companion JSON receipt.

Created six Virelle navigation collections: New arrivals, Bestsellers, Under40, T-shirts & Tops, Jogger & Bottoms, Jackets & Hoodies. They are empty: this Header/Footer task did not provide product data, prices or variants. No product, stock, price, policy text or unrelated catalog mutation. Product detail temporarily opens the Virelle New arrivals collection until a verified Virelle product is available. The source's duplicated desktop About us label is normalized to Contact to agree with tablet/mobile.

## Validation and remaining gaps

- Recursive setting IDs, options, range steps/types, block allow-lists/order and group/preset composition: PASS.
- JS syntax and whitespace: PASS.
- Twelve temporary Liquid render checks: PASS. They verify four original Header SVG geometries, five social path sets, newsletter icon-only/text accessible labels and original arrow, and independent logo placement attributes. These are render checks, not browser interaction tests.
- Theme Check: final result recorded below. Shopify skill validator cannot load its missing `@shopify/theme-check-common` dependency; standalone Shopify Theme Check is used.
- Browser QA is still unavailable despite a valid Figma connection. Actual Header heights, final newsletter/utility spacing, mega-menu crop/hover/focus, tablet account behavior, mobile drawer transitions, resize restoration, and Theme Editor lifecycle need storefront verification. No unrequested preview watcher was started or theme uploaded.
- Source assets/slots and callsites are verified locally; effective rendered geometry is not yet certified. Header logo is2px narrower than source; Footer desktop logo is4px narrower. Native market labels/flags and available payment brands follow Shopify data. Six payment logos from Figma may differ from store-enabled methods. Original mega-menu crop/filter fidelity still needs visual comparison.
- Social# links are placeholders until real brand accounts are supplied. Collection contents and Product detail destination remain pending catalog work.

Final Theme Check: exit0,362 files,0 errors,6 pre-existing warnings outside this Header/Footer change. The file count includes concurrent in-progress theme work. Final recursive schema/preset checks,12 Liquid render checks, JS syntax and git diff --check all pass.


## Footer correction against exact homepage frames

Source: desktop48864:15268 and mobile48864:18489, high-fidelity context plus screenshots. Corrected the local group and synchronized its single Footer preset. Newsletter form/consent now share an Actions group with12px gap, below the copy's16px gap. Divider/utility now share a Credits group24px desktop/16px mobile instead of negative margins. Footer-scoped menu headings have no extra top padding; menu content has no20px bottom padding, removing the inherited mobile vertical inflation. Original mobile menus stay expanded.

Scoped form sizing now wins over the input-wrap control and mobile min-height rules:56/48/44px,16px inside padding,20px source arrow with a44px submit target. Country selector is285×48px desktop, includes currency after the country name, and stays hidden below992px. Native selector visibility still follows available markets. Existing localization block currently has only the Footer JSON consumer.

Added opt-in Fixed height mode to the existing Logo block, with desktop/mobile height controls. Footer selects40/40px; uploaded logo aspect4.1 produces164×40px without rounding to160px. Existing fill/custom width modes are unchanged; no global logo width/header setting was touched by this correction. This supersedes the earlier Footer4px logo gap.

Four temporary Liquid render checks pass: newsletter/social/menu composition, country/currency output with multiple-country fixture, Credits/Actions grouping, and40px source-ratio versus legacy custom-width logo behavior. Recursive group/preset/schema validation and git diff --check pass. They do not establish browser geometry. Browser control remains disabled in Work settings; existing localhost9300 preview is unavailable. No preview watcher/deploy/store mutation performed. Native payment methods, social# destinations and source desktop duplicated About us caption remain as previously documented.

Footer correction final Theme Check: exit0,377 files,0 errors,6 pre-existing warnings outside Footer. Four render checks, recursive schema/preset checks and whitespace checks pass.


Preset compatibility correction: removed height_desktop/height_mobile and width=height from Footer preset and saved group because Shopify rejected the stale block dependency. Both now use original-schema custom widths160px desktop/164px mobile. Validated against HEAD:blocks/logo.liquid, not only the newer local schema. Optional height-mode implementation remains unused. This supersedes the exact164px desktop claim; desktop logo retains a4px source-width gap. No push performed.
