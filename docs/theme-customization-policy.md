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

### Owner rules for rebuilt compositions (2026-10-09)

These rules take precedence over the general preservation rules below:

- Theme-specific custom sections/blocks are excluded from base updates entirely: keep implementation, schema, presets, saved instances and their referenced dependencies. Custom means an implementation difference against the previous base checkpoint, including referenced snippets/assets; schema-only and preset-only differences do not count. Explicitly offered/static child blocks of a custom composition are also retained. Print the excluded paths in the update preview.
- For a non-custom section/block rebuilt by `main`, rebuild its preset against the new section/block contract using the theme's old preset as the data source. Preserve content, order and compatible layout/settings; transfer values to replacement blocks (for example, an old FAQ answer to a shared `text` block). Add source defaults only where old data has no corresponding value. This is an exception to retaining the old preset structure verbatim.
- Follow section/block deletions from `main` for non-custom implementations after migrating affected presets and saved references. Do not leave dangling references or silently discard content. Custom sections/blocks and their retained dependencies are exempt from deletion.
- A rebuild needs an explicit, validated mapping between old and new blocks/settings. When that mapping cannot be determined safely, report the affected paths and stop before applying. The current command retains this review gate for structural migrations; it must not guess a mapping from block position or replace a preset with the base preset.

`node theme-base update-themes --branch theme/<slug>` and `node theme-base update-themes --all` update each selected theme from personal `main`, run Theme Check, create one English sync commit, and push to `origin` when the update is safe.

- Existing template JSON, section-group JSON, saved theme settings, and global settings schema stay as they are in the theme. Newly added template files can be brought in from `main`.
- Sections used in template JSON, section groups, saved compositions, or static Liquid templates/layouts keep their schema and presets. This protection includes nested blocks, static blocks, and block types/presets offered by those sections. Sections/blocks with custom implementation also keep their schema and presets even when absent from templates. Implementation code comes from the safe three-way merge. Existing setting definitions and preset values stay with the theme. A setting newly added in `main` is added with its declared default, and that default is added to matching presets without replacing values already present. The same defaults are added to matching saved template/group/settings instances and nested shared-block presets; other composition values stay unchanged. Shopify resource pickers that don't support a schema `default` (such as `image_picker`), and `url`, `text`, `color`, and `color_background` settings with no declared default, stay unset without inventing a value or changing preset values.
- Sections/blocks outside that protected set automatically receive the schema and presets from `main`; unused files deleted by `main` can be removed by the safe three-way merge. Custom implementation is never replaced wholesale, and overlapping implementation changes still stop for review.
- In protected section/block schemas, settings shared with `main`, including newly added settings, follow their order in `main`: `A B` becomes `A B C` when main adds C last, or `A C B` when main inserts C between A and B. This also applies to inline block settings and order-only source changes. Existing setting definitions, preset values and saved composition order are preserved. Theme-only settings, unconfirmed removals and editor headings remain with the next existing shared setting in their original group; trailing theme-only entries stay at the end. New settings use the default rules above.
- For protected sections/blocks, a setting that existed at the previous base checkpoint and was removed in `main` stays in the theme until the command lists it and the owner confirms removal for that specific setting. Confirmed removal also removes that setting from matching schema presets and saved instances. Theme-only options absent from the previous base are retained without a removal prompt.
- Label/default and preset changes to an existing setting are reported and retained from the theme. Changes only to option labels or group headings are also reported and retained without blocking the update. Changes to a setting's type, option values, constraints, visibility, or allowed block types stop the update for review because they can make the new implementation incompatible. Implementation changes to the same section, block, snippet, or loaded CSS/JS asset on both sides also stop for manual review.
- The command displays the source commits and full diff before applying a safe update. It records the sync in that theme's customization log, then checks, commits, and pushes. It does not update `docs/base-update-history.md` on a theme branch.
