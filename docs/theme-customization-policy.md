# Theme customization policy

Customization records track code that changes how a section or block renders or behaves compared with personal `main`.

## Count as custom

- Changes to the Liquid/HTML implementation in `sections/*.liquid` or `blocks/*.liquid`, excluding everything inside the `{% schema %}` block.
- Changes to a Liquid snippet rendered by a section or block, including snippets reached through another rendered snippet.
- Changes to a CSS, JavaScript, or JavaScript module asset loaded by a section or block, directly or through a rendered snippet.
- New or removed section/block implementations and their referenced code dependencies.

## Do not count as custom code

- Section or block preset declarations and any other schema-only changes.
- Theme presets, template JSON, section-group JSON, saved theme settings, and default section/block composition.
- Locale text, documentation, or other configuration changes that do not change the section/block implementation code above.

`node theme-base check-custom <slug>` applies these rules and requires only qualifying implementation paths in that theme's `Customizations` table. A preset-only change in a section's schema does not need a customization record. If a change also edits Liquid/HTML outside the schema, or its CSS/JavaScript implementation, record those implementation files.
