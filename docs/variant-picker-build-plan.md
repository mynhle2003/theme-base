# Virelle variant picker — 2026-10-20

- Role / placement: existing product variant block in homepage Featured product; keep the existing product context and block composition.
- Ownership: global settings own picker type, height, swatch appearance, radii and gaps; block options own fonts and Size guide page / presentation. Configure the existing Size Guide page.
- Custom gaps: color-only selected caption, minimum 52px size width with 16px inline padding, heading-colored selected border, sold-out diagonal, original Figma ruler artwork. Scope presentation to `.product-variant-picker`.
- Runtime: retain native fieldsets, radio inputs, availability, variant/media/form synchronization and existing size-guide overlay lifecycle. No new JavaScript.
- Responsive: same 52×40 size inputs and 32px swatches at the current configured desktop/mobile values; controls wrap naturally. Preserve setting-driven alternate styles.
- QA: Theme Check, existing variant/media tests, desktop/mobile preview, variant switching and Size guide open/close. Design sources: 48063:10282 and 48096:20308 in yTXlAfT0miBGgRuuYM4OMp.
