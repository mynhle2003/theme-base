# Header preset and media

Reference: Figma `v6iKvP4OuW3y0A9bbxel5U`, section `47180:14039`. Detailed design contexts inspected: classic `47129:7653` (1920 × 77), mega menu `47129:9381` (1920 × 692.67), tablet `47180:13714` (768 × 68), mobile `47180:13713` (375 × 56).

Changed only the Header section schema preset and Header instance in `sections/header-group.json`. Existing uncommitted implementation changes were preserved. Announcement composition and global theme settings were preserved.

Mapping: `_header-top` has a line separator, 16px desktop vertical padding, 10px mobile vertical padding and 64px shared gap. `_header-logo` uses left placement; `_header-menu` uses body typography, small size, 28px item gap and no chevrons. Search and Account use small body text; Cart uses an icon with primary badge. Localization and divider are omitted. Existing `_mega-menu-banners` targets Menswear with two submenu columns, 49% banners and 32px gap. Two `_mega-menu-banner` blocks use content below image, reference copy, 18px headings and tertiary Shop now links. Links use product search for the named category; they do not invent collection handles.

Media: the two original photos and ESSEN logo were downloaded from Figma, converted to real AVIF and decoded successfully. All three uploads were read back as READY on `layouthub-template-v2.myshopify.com`. See the adjacent JSON receipt for IDs, permanent CDN URLs and dimensions. Two banner image references are bound in both local compositions. Logo upload is prepared but not bound: logo picker and width are global theme settings, outside the preset skill boundary.

## Remaining gaps

- Resolved after user authorization: created and read back separate `Arche Header` menu (`arche-header`, ID `323641245995`) with Menswear / New / Sale / About. Menswear contains Categories (9 links) and Material (6 links), matching Figma labels/order. Bound the handle in both local Header compositions; the existing main menu remains untouched. Destinations use search URLs because matching Arche/Essen collections were not found; catalog contents are not asserted to match Figma. See `arche-header-menu-2026-10-14.json` for readback.
- Global logo remains Arche; the uploaded ESSEN logo is available in Files. Existing global mobile logo width is 140px, versus 80px mobile and 96px tablet in Figma.
- Resolved by authorized Arche customization on 2026-10-14: separate Desktop position/Mobile position controls; mobile Center balances columns and groups menu/search left, with Cart right.
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

## Authorized Header customization — 2026-10-14

Navigation role in the existing Header section group; block owns desktop/mobile position, runtime owns moving the existing nodes, Header top owns balanced mobile columns, and the global button renderer owns Shop now appearance. Keep desktop `position` ID for saved-setting compatibility and add `position_mobile`, default Center. Preserve existing Theme Editor block attributes, no duplicated logo or action DOM. Reorganize only when active breakpoint/position changes and retain focused control after moves. Existing section initialization calls the organizer again safely.

Preset and saved Header both restore `header_overlay: true` and transparent scheme-3. Current global references remain `arche-header-black.avif` and `arche-header-white.avif`; the uploaded ESSEN logo is not substituted. Banner retains its Button style option and now renders through `theme-button`, using the same classes/label wrapper/underline/icon contract as other buttons. No new button CSS was added.

Validation: 6 Chrome fixture tests passed covering all four Desktop/Mobile Left/Center combinations at 1440, 768, 375 and 320px, resize round trips, repeated initialization, preserved search focus and mobile first paint before JS. These exercise the actual layout organizer and current CSS; they do not claim live Theme Editor verification. JS syntax and diff check pass; full Theme Check has 0 errors/5 existing warnings. No Shopify theme deployment performed for this follow-up.

## Header gaps, Search types and tertiary underline correction

Retain existing top-block `gap` ID, relabel it Gap menu (spacing between Header columns). Add actions_gap for controls within each column, and customize_mobile_gap controlling gap_mobile/actions_gap_mobile. Liquid validates each value in 0–100px. Without mobile overrides the CSS inherits desktop variables. Preset/group: desktop column gap 64px, visible action gap 24px (Figma's 4px wrapper gap plus adjacent 10px wrapper padding); mobile column gap 8px and action gap 4px. Existing navigation-link gap remains 28px.

Search Desktop type: Text now hides its icon at desktop widths; Icon and Icon with text retain their respective content. Search bar remains a form throughout desktop (>=992px), replacing the premature 1400px icon fallback. All modes use icon-only mobile behavior below 992px. Keep existing search form submission and overlay button hooks.

Shop now already has Button style and still uses the shared theme-button renderer. Missing underline reproduced: banner overflow clips the pseudo-element when content bottom padding is zero. Set the existing banner bottom padding control to 6px in both local compositions; do not add button appearance CSS or override the global underline toggle. Chrome checks verify the 1px underline lies inside the clipping bounds, zero padding reproduces clipping, and global underline disabled still hides it.

Validation: 21 Chrome tests pass for logo positions, first paint, breakpoint changes, Search's four types at 375/1024/1440, independently configured/inherited gaps, and tertiary clipping/global toggle. Theme Check: 0 errors, 5 existing warnings. Live Theme Editor review and Shopify deployment remain unverified.
