# Mara header — 2026-10-15

Sources: Figma `bH9A5237I07NWt19Cua9gL`, desktop `47039:24637` (1920×76), mobile `47228:13885` (375×64). High-fidelity context and both screenshots inspected. Reference fixes: Malandra header implementation and its navigation/breakpoint audit dated 2026-10-15.

## Contract and mapping

Global navigation in the header section group; existing `header` → static `_header-top` → menu, toggle, logo, localization, search, account and cart blocks. Shopify owns links, country/currency and account/cart state; global settings own existing Urbanist typography, logo and page margins. The header owns responsive composition, overlay and interaction lifecycle. No catalog/media mutations or new section types.

Authorized header fixes reuse Malandra's layout cache, independent action/mobile gap controls, complementary 992px CSS/JS boundaries, desktop click behavior and clipping fix. Mara orders menu toggle before its left logo on mobile. Existing logo picker remains global; no stacked Malandra branding or mega-menu styling copied. Header runtime retains its existing section initialization/destruction handlers.

Saved group and Add section preset share one composition, preserving the original Header name/category. Desktop menu gap 32px, uppercase body/sm labels, no dropdown chevrons; centered logo; country flag and currency selector; 24px native action icons. Top/bottom padding 16px desktop and12px mobile. Mobile logo left, search/cart right, account/localization hidden by existing behavior. No bottom separator. Overlay surface black20%, desktop blur2px.

## Verification

- Recursive settings/options/ranges/nested block allow-list validation passes for both saved group and schema preset.
- Node JS syntax and `git diff --check` pass.
- Malandra navigation regression suite run against Mara files:18/18 pass. Temporary Mara extension:7/7 pass, verifying left logo order, no horizontal document overflow and resize restoration at320,375,768,991,992,1280,1920px. These are browser fixtures using actual theme CSS/runtime, not a rendered Shopify storefront.
- Theme Check:0errors,6existing warnings in bundle summary, comparison table features/column, editorial text, group and css-variables. No header diagnostic.
- Existing preview metadata points to development theme192119800107/store layouthub-template-v2.myshopify.com, but localhost9300 refused connection. No preview watcher was started, and no manual theme push, publication, commit or Git push was performed.

## Remaining visual/content checks

Storefront and full manual Theme Editor lifecycle comparison remain pending. Existing `main-menu` links are preserved; Home/Shop/Collections/Pages labels depend on that store navigation and were not created or changed. Country/currency follows enabled Shopify markets. Existing `mara-logo-white.avif` and global logo widths128/72px are reused; Figma desktop width is129.902px and mobile72.168px. Asset exactness/readiness on the store was not reverified. Native theme icons, medium weight/tracking, and header margins remain dependent on the existing controls/global tokens, so exact icon paths, font metrics and1920px48px margins are not certified. No new media was selected or uploaded.


## Follow-up: header option contract

Read Malandra's variant-update header notes and applied the shared option/breakpoint repairs without changing the Mara preset/group/global settings (byte-identical SHA-256 checks). Replaced the earlier fixed action margins and asymmetric mobile cart padding with one shared icon size and configured half-gap action padding. Added native Account avatar normalization, icon-only Editor targets, icon-relative RTL badge, early layout/logo visibility, flexible menu gap spacers and Search Show on mobile. Search desktop type now switches only at the same 992px boundary as navigation. Header account sheet CSS follows that boundary too; actual native component QA remains pending. See the follow-up receipt in the Mara customization record for per-reference status and remaining checks. The earlier 25-case result is superseded by 35 passing scoped browser tests including Search option checks at 375/991/992/1280px. No new preset/content/artwork from Malandra.
