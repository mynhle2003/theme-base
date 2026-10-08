# Marquee child block audit — 2026-10-08

Reference: [Omnise Elvara Theme Editor, theme 139629002837](https://admin.shopify.com/store/omnise-theme-base/themes/139629002837/editor?section=template--18890725687381__custom_section_QEaM4y).

The editor's block tree identifies compact variants as `heading_simple`, `text_simple`, `image_simple`, `button_simple` and `group_scrolling`. The UI displays the same names as general blocks. Therefore changing only a general block's width to intrinsic does not reproduce the compact variant's schema.

## Observed controls and local implementation

| Child | Reference editor controls | Local dedicated type |
| --- | --- | --- |
| Heading | Inline rich text; outline; Heading 1–6/Custom; Custom font role, 10–200px desktop, tracking/case, optional 10–80px mobile; Heading/Text color role and 10–100% opacity. No width/tag/padding. | `_marquee-heading` |
| Text | Rich text; Body/Accent; six text sizes; eight tracking choices; Heading/Text color. No width/padding/height collapse. | `_marquee-text` |
| Image | One image; Original and seven ratio presets; link/new-tab; desktop 50–400px step 5, mobile 50–200px step 5; Inherit/Square/Rounded/Full/Custom radius. No mobile source, independent ratio, Fit/Fill or padding. Existing image width was 300/50px; this is an observed instance, not a verified schema default. | `_marquee-image` |
| Button | Inline label/link/new-tab; Primary/Secondary/Outline/Subtle/Text; Show icon; independent desktop/mobile Inherit and five height choices. | `_marquee-button` |
| Countdown timer | Three layouts, optional background, Fixed time or Recurring; seven recurring durations from hour to month; Heading 1–4 numbers, Small/Medium labels; inherited/custom colors; entrance animation; top/bottom padding with optional mobile controls. | `_marquee-countdown-timer` |
| Coupon code | Code, bold, background; five body sizes; top/bottom padding with optional mobile controls. | `_marquee-coupon-code` |
| Icon | Library/Custom SVG; link/new-tab; icon width/internal padding and mobile overrides; None/Fade/Scale/Slide left/right/bottom; top/bottom outer padding. | `_marquee-icon` |
| Divider | Thickness; Fill/Max length/Custom percentage; inherit/custom border color; top/bottom padding/mobile controls. | `_marquee-divider` |
| Group | Direction/alignment; desktop/mobile gap; 300–500px desktop width step 5, 200–300px mobile step 1; Fit/Fill height; border/radius/shadow; inherit/scheme; four-side padding/mobile controls. | `_marquee-group` |

Direct Marquee picker: Button, Countdown timer, Coupon code, Heading, Icon, Image, Text under Basic; Divider and Group under Layout.

The reference Group's child picker is different again: ordinary Button, Colors, Coupon code, Heading, Icon, Image, Text, Video, Product card: Compact, Divider, Group and Popup. Local `_marquee-group` uses the repository's ordinary `@theme`/`@app` inventory. It does not restrict children to the compact direct-Marquee family. Available nested types depend on the local repository; the source Colors block has no equivalent here.

The nine local types use private `_` filenames and explicit targeting from Marquee, so ordinary `@theme` pickers do not show duplicate compact Heading/Text/etc. See [Shopify private block targeting](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/targeting).

## Migration and validation

- Homepage and About us retain child IDs, order, text and custom SVG artwork. Stored heading text loses its outer paragraph wrapper to match inline-richtext; opacity is explicitly 100% to retain existing appearance.
- Uniform 16px left/right padding in the alternating homepage heading/icon tree is represented by increasing the parent gap from 16px to 32px, preserving the visible distances between glyphs and icons. New Heading has no padding controls.
- Section and parent presets use the private child types and supported settings. The old demo-only 2:1 Custom image ratio becomes supported 16:9; width remains 120/80px. The compact reference schema has no Custom ratio.
- Eight automated tests cover direct composition, zero speed/gap, directions, schema/template compatibility, custom heading typography, private picker ownership, recurring/calendar arithmetic and coupon clipboard lifecycle/failure. Theme Check and customization coverage are run locally.
- Source inspection added temporary unsaved blocks only; all 14 changes were undone and Save/Undo were verified disabled. The reference theme was not saved or published.

## Evidence limits

This audit verifies controls and block types through the editor UI. It does not contain a source Liquid/CSS/JavaScript extraction: the nested source storefront iframe was unavailable for direct DOM inspection. Entrance effects, button height values, Divider max length, recurring timer anchoring and clipboard feedback are local implementations; exact runtime/visual parity for those details is not established.

The source Icon picker has a broader catalog (including checks/badges, heart, cotton/recycle/sprout, payments, socials and quote). Local Icon deliberately retains the repository SVG library and saved custom SVG. The full source catalog and individual SVG artwork have not been reproduced. Live editor validation of the new private types remains to be performed after a development-theme upload; this change set has not been uploaded.

## Requested override — 2026-10-08

Removed the entire Size group (desktop/mobile width) and Height option from local `_marquee-group` at the user's request. Its width now fits its contents and its height is automatic; obsolete width variables and Fill-height class are removed. No saved Group instances use these settings in current templates/presets. The source observations above remain the audit evidence; this is an intentional local override.
