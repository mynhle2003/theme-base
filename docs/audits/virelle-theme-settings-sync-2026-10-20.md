# Virelle Theme Settings — active contract, 2026-10-20

Source: [So sánh sheet](https://docs.google.com/spreadsheets/d/18wHD4UxSomLRIE3yQvWWEDMultZAtjiJblAjb6aaVlg/edit?gid=455321062#gid=455321062). Latest owner instruction supersedes the earlier style-preservation plan: **remove old values and compatibility logic; configure styles from Figma later**. The sheet was read through its public CSV export, not edited.

## Standard options and tokens

- Letter spacing: exactly Extra tight / Super tight / Ultra tight / Tighter / Tight / Normal / Relaxed / Loose / Extra loose / Ultra loose / Mega loose in every related setting. All roles use the same `--letter-spacing-*` primitives. Values: −0.10 / −0.08 / −0.06 / −0.04 / −0.02 / 0 / 0.02 / 0.04 / 0.06 / 0.08 / 0.12em. First three are provisional pending Figma analysis.
- Line height: exactly Tighter 1.1 / Tight 1.2 / Normal 1.3 / Relaxed 1.4 / Loose 1.5 / Extra loose 1.6 through shared `--line-height-*` primitives. No 1.75 option or tablet-only H2 override.
- Text case: Original / Capitalize / Uppercase / Lowercase. Card title has its own explicit choice; no inheritance compatibility option.
- Font roles: Body / Heading / Accent. Font picker handles remain supported existing handles. Eyebrow, Button, Badges and card title/price bind to the selected role; weight/style follow that role. No separate button-weight override.
- Removed all compatibility choices (`legacy_*`, `reference`), per-heading fixed tracking values, card-badge tracking/case exceptions, legacy button px-string fallback and legacy input radius override. Existing public CSS aliases remain where consumers need them; they do not define extra scales.

## Control consolidation

| Group | Active controls |
| --- | --- |
| Body | Base size 12–18px; shared six line heights |
| Display / Extra large / Large / Medium | Desktop and mobile ranges respectively 28–80 / 22–50 / 16–34 / 16–28px, step 1; fluid between 375 and 1150px; shared line height/case |
| Small / Extra small | One size each, 14–22px, step 1; shared line height/case |
| Eyebrow | Font role; 10–18px size; shared line height/tracking; four cases |
| Button | One role using `button_primary_font`; one 10–18px range using `button_font_size_px`; shared tracking; one case using `button_primary_text_case` |
| Badges | Font role; 10–18px size; shared tracking; four cases |
| Product title | Font role; one 10–20px size using `product_card_title_size_desktop`; shared line height/tracking; four cases |
| Product card price | Font role; 10–20px size, scoped to `.price--product-card`; root/PDP/cart unchanged |
| Buttons and inputs radius | One `button_radius_style` control; no separate input-radius override |

Display / Extra large / Large / Medium / Small / Extra small and Eyebrow labels remain. Single-size controls display Font size or their existing Size label. Semantic HTML tag remains independent from Display visual size. Button variant token aliases and mobile-size aliases resolve to the common values; they have no separate setting. Removed tablet sizes, H5/H6 mobile sizes, card-title mobile size, button mobile size, button weight, tertiary case and input radius keys from current and Spinel.

The numeric button size uses a new ID because the old `button_font_size` / `button_font_size_mobile` IDs were select strings on Shopify and changing their types in place caused incompatible schema/data uploads. Do not restore or reuse those IDs as ranges. Labels and `--button-font-size` / `--button-font-size-mobile` remain. Deploy schema and settings data together; remote acceptance is unverified.

## Other sheet changes retained

Colors is named Colors. Content order: Background → Headings → Heading highlight → Text → Border → Sale price → Shadow → Eyebrow (existing `accent` ID). Primary/Secondary keep Background → Label → Border → Hover border → Hover background → Hover label. Tertiary keeps its two colors and underline behavior. Four badge colors moved into Colors; four redundant global button color pickers/resolvers are removed. Existing scheme IDs/palette and unrelated saved settings remain.

Button labels are Desktop padding / Mobile padding, retaining horizontal behavior, IDs and responsive height/padding. Tertiary Show underline and Underline offset remain; hiding underline does not erase its offset. Radius & shape retains other controls and 4px Slightly rounded. Media/container xs/sm/lg aliases use 0.3×/0.6×/1.3×. Popup/popover, docked drawers and top-only bottom sheets use their correct owners. Applied filters, discount chips and search suggestion chips consume tag radius. Explicit local Eyebrow Square remains square; Default inherits the shared subheading radius.

## Temporary configuration and QA

Removed values are replaced by canonical defaults: Normal tracking, Normal line height when the old choice was unsupported, and Original case. Other values still valid in the new system remain until the Figma configuration pass; saved numeric values outside the new domain are bounded to the allowed domain. No appearance-preservation fallback remains. See [migration JSON](virelle-theme-settings-sync-2026-10-20.json) for removed keys and replacements; prior migration history is recorded separately.

40 scoped tests pass: all shared choices, valid saved keys/ranges, consolidated role/size/case/radius output, card price scope, fluid anchors and visual/semantic independence. Shopify CLI Theme Check: 0 errors, 7 warnings. Seven unrelated old badge/footer tests had already failed on the pre-edit snapshot. The toolkit validator package dependency remains unavailable; CLI validation was used. Browser visual QA is unavailable because browser use is disabled. Figma style configuration and store push/publish were not performed in this pass.
