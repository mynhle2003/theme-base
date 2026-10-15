# Header navigation breakpoint audit — 2026-10-15

Scope: current Malandra theme. Navigation is global header UI; `assets/header.js` owns events/state, header blocks and `assets/critical.css` own visibility and first paint. Existing logo options, centered logo, flexible menu gap down to8px and allowed wrapping are preserved.

## Breakpoint map

| Surface | Existing boundary | Decision |
| --- | --- | --- |
| Header navigation, toggle, columns, mega menu, header actions/logo | 992px | Desktop `min-width:992px`, drawer `width < 992px`; CSS and JS are complementary, including fractional viewport widths. |
| Global page margins and responsive typography | 768px,1150px | Preserve; these are layout tokens, not header navigation mode. |
| Shared overlay sheet/drawer presentation | 768px | Preserve shared contract. Header drawer declares drawer for both desktop/mobile presentations, and its own controller activates below992px. |
| Footer localization sheets/dropdowns | 768px | Preserve, including their scoped JS checks in header.js. This is footer behavior, not header navigation. |
| Localization inside header drawer | Header drawer boundary992px | Existing drawer-specific JS override retained. |
| Mega banner content/image layout | 768px | Preserve; does not select desktop navigation vs mobile drawer. |
| Product media desktop thumbnails and tablet sizing | 992px | Preserve independent component/layout decisions. |

## Fix

- Header runtime now reuses one desktop `MediaQueryList` at992px and derives mobile as its inverse. Header mode CSS uses the complementary range query below992px, replacing the991.98px edge gap. First-paint mode rules use the same range; unrelated tablet-size rule retains its original query.
- Removed obsolete summary-click handling that applied legacy mobile submenu classes to desktop navigation and prevented native click toggling/closing. The dedicated mobile drawer remains the sole mobile submenu controller.
- Crossing the header mode boundary closes drawer/menu state, cancels submenu close timers, restores moved mega content on desktop and reorders header blocks. Ordinary resize geometry updates remain intact.
- No global theme breakpoint migration, option font overrides, new JS responsive spacing, preset changes, commit or publication.

## Evidence

- `tests/header-navigation-breakpoints.test.cjs`:13passing tests using actual header CSS and complete runtime. Click/hover checks at767,768,991,992,1024,1280px plus repeated open/resize/reopen.
- Existing Arche header layout suite run against current Malandra files:41passing tests covering placement, search modes, focus, resize/idempotence and first paint.
- Preview: at992px Collection opens with visible mega content and no legacy mobile class. At991px drawer opens and Collection cards are visible. Returning to1024px restores mega content; Collection opens again, drawer closes and all four cards remain available.
- Full Theme Check: zero errors, five existing excessive-settings warnings. JS syntax and `git diff --check` pass. Full manual Theme Editor lifecycle was not repeated.

## Follow-up: clipping at1149px

The prior visibility check did not catch ancestor clipping: `isVisible()` can pass even when an overflow ancestor clips the complete menu. Desktop nav still had the obsolete `scrollbar--vertical-until-desktop` utility. At `max-width:1149.98px` this set overflow-x:hidden/overflow-y:auto, clipping absolutely positioned mega content. Removed scrollbar utilities from the desktop nav; native drawer has its own scroll surface. The shared1150px utility remains unchanged for its other consumers.

Added1149/1150px click/hover cases and a guard against reintroducing the nav utility. Navigation suite now passes18tests. Storefront1149px readback confirms nav overflow:visible, open Collection, visible mega menu and successful `elementFromPoint` hit on the collection card, establishing that content is not clipped.

## Follow-up: native Account sheet

Shopify's current account component uses its own751px desktop/750px sheet media boundary. At878px it therefore displayed a360px popover while the theme header already used the mobile drawer. Official reference: https://shopify.dev/docs/storefronts/themes/customer-engagement/account-component . Component auth content and lifecycle remain native.

Observed exported `part="dialog"` in the native rendered component. Header-scoped `::part(dialog)` CSS in critical.css extends native bottom-sheet geometry/animations/backdrop up to the header boundary below992px. It covers both `.header-account` and `.header__mobile-drawer-account`; the latter is a separate native component in the drawer. No shadow DOM writes, copied authentication markup or form changes. Native animation token names are implementation-specific; recheck this integration when Shopify updates its component. Desktop styling from992px remains native. Header mode change also closes any open account sheet via the existing close helper.

Live verification with actual Shopify component:715,878,991px use `account-drawer-slide-in`, left0 and bottom900 at viewport height900; widths match available viewport. At992px reopened desktop Account remains360px wide with `account-popover-slide-in` and top20px. Drawer Account closes across the boundary. No sign-in form submitted. Screenshot: `malandra-account-sheet-878.jpg` in the task visualization output directory.
