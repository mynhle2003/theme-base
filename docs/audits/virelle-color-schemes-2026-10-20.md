# Virelle color schemes — 2026-10-20

Status: partial configuration; additional Figma evidence and runtime verification remain required. Scope: existing `current.color_schemes` only. Saved presets, scheme IDs/assignments, schema, CSS and section composition were preserved.

## Cause of the mismatch

Hero reads `content_color_scheme: scheme-3`. `snippets/css-variables.liquid` maps its `button_primary_text` to `--button-primary-text`; `.btn-primary` in `assets/critical.css` maps that to `--button-foreground`. The previous #111111 rendering was therefore correct for the saved data, with no Hero-specific color override involved.

The previous initialization retained generic normal button colors. The later Style Guide pass explicitly preserved normal scheme colors and changed only evidenced borders and derived hover states. That incomplete normal-color mapping caused the mismatch; editing Hero CSS would hide the cause rather than configure its scheme.

## Figma inventory and verified values

User Style Guide: `43001:11865`, file `yTXlAfT0miBGgRuuYM4OMp`. Raster table `43436:113` explicitly contains exactly three columns: Color scheme 1, 2 and 3. Read printed HEX values and alpha at 150% zoom; no swatch pixel sampling.

| Property | Scheme 1 | Scheme 2 | Scheme 3 |
| --- | --- | --- | --- |
| Background | #FFFFFF | #F5F5F5 | #181818 |
| Heading | #181818 | #181818 | #FFFFFF |
| Text | #626262 | #626262 | #DFDFDF |
| Overlay | #626262, 50% | #626262, 50% | #FFFFFF, 50% |
| Border | Generated/200 | Generated/300 | Generated/200 |
| Bg Bar | Generated/100 | Generated/200 | Generated/600 |
| Bg Component | Generated/50 | Generated/100 | Generated/500 |

Existing Background/Heading/Text values already match and were skipped. Borders were previously resolved and configured by the separate Style Guide audit; this run has not independently re-read the generator, so those values were preserved. Overlay/Bg Bar/Bg Component have no corresponding global scheme fields; they were not relabeled as Shadow or arbitrary button fields.

Scheme 1 sample frame: `43256:127`. Primary component has #1F1F1F background / #1E1E1E outline and #FFFFFF label, already matching. Secondary has #ECECEC background/outline and #1E1E1E label (label node `43253:1569`). Tertiary label node `43253:1571` resolves `Tertiary button/color` to #1E1E1E. Secondary and Tertiary label values were changed from #111111 to #1E1E1E.

Scheme 3 Primary label #1C1C1C was already established by the successful Hero design-context responses earlier in this chat (`48049:2486`, `48864:12395`, white button fill/outline). Its normal and hover labels were corrected from #111111 to #1C1C1C. This is inherited by all scheme-3 Primary buttons, not just Hero.

Hover updates are derived rather than Figma-measured: retain the corrected normal label for solid buttons; scheme-1 Tertiary hover is #393939, obtained by mixing #1E1E1E 12% toward its white background. Contrast for all affected normal/hover states exceeds 4.5:1; exact ratios and six setting changes are in the JSON receipt.

## Remaining work and access limitation

The Figma browser was disabled while reading the sample frames. After the owner replied “ok”, a fresh browser attempt still returned “Local browser use is disabled in Work settings.” Figma Plugin API requested authentication twice; design context then explicitly reported the Professional View-seat tool quota exhausted. No credentials, internal endpoints or alternate browser automation were used.

Remaining: verify all normal button properties of scheme 2 and Secondary/Tertiary of scheme 3, any additional scheme-level roles with actual source evidence, and all changed runtime colors. Do not infer these values from scheme 1 or mark the three schemes fully verified. The source table alone does not specify those button values. No new scheme is needed; all three stable IDs already exist.

Validation: JSON/schema setting-ID checks passed, saved presets and unrelated settings unchanged, contrast checks passed, scoped whitespace check passed. See CLI Theme Check output for the current working tree. No push/publish, store configuration write or Theme Editor save was performed.
