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

## Updating a theme from personal `main`

`node theme-base update-themes --branch theme/<slug>` and `node theme-base update-themes --all` update each selected theme from personal `main`, run Theme Check, create one English sync commit, and push to `origin` when the update is safe.

- Existing template JSON, section-group JSON, saved theme settings, and global settings schema stay as they are in the theme. Newly added template files can be brought in from `main`.
- For an existing section or block, implementation code comes from the safe three-way merge. Existing setting definitions and preset values stay with the theme. A setting newly added in `main` is added with its declared default, and that default is added to matching presets without replacing values already present.
- A setting removed in `main` stays in the theme until the command lists it and the owner confirms removal for that specific setting. Confirmed removal also removes that setting from matching schema presets.
- Label/default and preset changes to an existing setting are reported and retained from the theme. Changes to a setting's type, choices, constraints, visibility, or allowed block types stop the update for review because they can make the new implementation incompatible. Implementation changes to the same section, block, snippet, or loaded CSS/JS asset on both sides also stop for manual review.
- The command displays the source commits and full diff before applying a safe update. It records the sync in that theme's customization log, then checks, commits, and pushes. It does not update `docs/base-update-history.md` on a theme branch.
