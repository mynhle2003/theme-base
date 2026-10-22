# Text marquee (custom) — 2026-10-21

Requested workflow: `agents-build-themes/skills/build/preset/build-preset`; configuration only. Branch: `theme/kinetra-theme`.

## Sources and configuration

Read Figma through CUA/Chrome after MCP repeatedly returned authentication acknowledgements. Desktop: file `yTXlAfT0miBGgRuuYM4OMp`, node `48190:2388`; mobile `48249:15473`. Inspected both screenshots and Properties panels. Desktop 1920×130, inner line 82px; mobile 375×72, inner line 48px. Section padding resolves to 24px desktop / 12px mobile. White background, outlined Roboto Condensed Bold, uppercase, tracking -1.2px. Existing global typography already supplies 68px / 40px and was preserved.

Updated only `Text marquee (custom)` in `sections/custom-section.liquid` and its `virelle_marquee` homepage instance. Preserved preset name/category. Selected existing `full_width_no_padding` to clip at viewport edges. Existing gap 32px approximates Figma's 20px text wrapper padding plus 12px container gap. Two existing Marquee blocks use complementary `hide_on_mobile` / `hide_on_desktop` settings; only one is visible per device. Each retains four editable phrases and four icons. All icon sources are Custom with SVG in Custom icon; icon entry animations disabled. No implementation, global settings or media uploads changed.

Desktop Rectangle 1 (`48190:2392`) copied using Figma Copy as SVG: 14×14 export, original path `M0.5 0.5H13.5V13.5H0.5V0.5Z`, stroke #181818, 1px. This includes the outer stroke around the nominal 12px square.

Mobile Rectangle 1 (`48249:15477`) reports nominal 8×8 with outer 1px stroke. Figma exports a clipped 9×10 SVG because it touches the parent clipping edge; preserved its original path `M0.5 0.5H9.5V9.5H0.5V0.5Z` and stroke, expanded only the root width/viewBox to 10×10 to restore the missing right edge. Export of offscreen Rectangle 2 (`48249:15480`) yielded a blank white rectangle and was discarded. The SVG viewport repair is recorded here explicitly; mobile markup is not byte-identical to the clipped Figma export.

## Verification and limits

Local preview at http://127.0.0.1:9300/ shows only the intended device branch. Desktop section height 129.59375px, font 68px, icon 14×14. Mobile viewport requested 375×812 (layout width 360px due to browser scrollbar): section 72px, line 48px, icons 10×10 loaded successfully. Heading color and stroke resolve to #181818, tracking -1.2px. Restored viewport after testing. Captures: `/tmp/text-marquee-20261021/desktop.png`, `/tmp/text-marquee-20261021/mobile.png`.

Schema checks passed for settings, options, numeric ranges/steps, child allowlists, unique preset names, and preset/instance composition. Other section presets and schema remain unchanged. A concurrent unrelated `kinetra_highlights` navigation position edit was observed and preserved.

Remaining gaps: existing heading blocks have no 20px horizontal wrapper padding, so gap 32px approximates text-to-icon spacing and the initial animation phase can differ. Figma rounds desktop line height to 82px versus runtime 81.59375px. Full Theme Editor Add section/duplicate/reorder/save/reload was not tested. No explicit push, publication, store configuration save, commit or Git push was performed; the already-running dev server synchronized local changes for preview.
