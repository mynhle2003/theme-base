# Header preset and media

Reference: Figma `v6iKvP4OuW3y0A9bbxel5U`, section `47180:14039`. Detailed design contexts inspected: classic `47129:7653` (1920 × 77), mega menu `47129:9381` (1920 × 692.67), tablet `47180:13714` (768 × 68), mobile `47180:13713` (375 × 56).

Changed only the Header section schema preset and Header instance in `sections/header-group.json`. Existing uncommitted implementation changes were preserved. Announcement composition and global theme settings were preserved.

Mapping: `_header-top` has a line separator, 16px desktop vertical padding, 10px mobile vertical padding and 64px shared gap. `_header-logo` uses left placement; `_header-menu` uses body typography, small size, 28px item gap and no chevrons. Search and Account use small body text; Cart uses an icon with primary badge. Localization and divider are omitted. Existing `_mega-menu-banners` targets Menswear with two submenu columns, 49% banners and 32px gap. Two `_mega-menu-banner` blocks use content below image, reference copy, 18px headings and tertiary Shop now links. Links use product search for the named category; they do not invent collection handles.

Media: the two original photos and ESSEN logo were downloaded from Figma, converted to real AVIF and decoded successfully. All three uploads were read back as READY on `layouthub-template-v2.myshopify.com`. See the adjacent JSON receipt for IDs, permanent CDN URLs and dimensions. Two banner image references are bound in both local compositions. Logo upload is prepared but not bound: logo picker and width are global theme settings, outside the preset skill boundary.

## Remaining gaps

- Resolved after user authorization: created and read back separate `Arche Header` menu (`arche-header`, ID `323641245995`) with Menswear / New / Sale / About. Menswear contains Categories (9 links) and Material (6 links), matching Figma labels/order. Bound the handle in both local Header compositions; the existing main menu remains untouched. Destinations use search URLs because matching Arche/Essen collections were not found; catalog contents are not asserted to match Figma. See `arche-header-menu-2026-10-14.json` for readback.
- Global logo remains Arche; the uploaded ESSEN logo is available in Files. Existing global mobile logo width is 140px, versus 80px mobile and 96px tablet in Figma.
- Logo left placement also applies to mobile in the current implementation; no separate mobile placement control exists.
- Shared Header gap applies to actions as well as logo/menu. Figma uses 64px between logo/menu and 4px between action wrappers; no separate action gap setting exists.
- Tablet shares mobile padding instead of the reference's separate 12px tablet / 10px mobile choice. Existing 40px mobile button minimum also exceeds Figma's 36px mobile header content.
- Banner images retain their natural aspect ratio (~0.8) rather than Figma's 6:7 crop; there is no banner image-ratio control. Image/content reading order matches the reference; exact menu, card geometry and drawer appearance have not been rendered for comparison.
- Existing icon assets are reused; no icon implementation changes were made within this configuration-only task.

## Verification and deployment

- Shopify CLI Theme Check: 0 errors, 5 warnings.
- Both composition trees checked recursively against current section/block allowed types, setting IDs, select options and numeric ranges: pass.
- AI Toolkit validator could not run because its package lacks `@shopify/theme-check-common`; CLI Theme Check was used.
- Local preview on port 9300 was unavailable. Desktop/tablet/mobile Figma references and existing responsive code were inspected; storefront and Theme Editor visual QA remain unverified.
- No explicit theme push, publication, commit or Git push was performed.
