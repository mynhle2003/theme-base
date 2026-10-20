# Virelle navigation — 2026-10-19

User authorized existing Theme Settings navigation changes and replacement of existing navigation style icons with Figma SVG, using currentColor, and asked to add this workflow to build-preset.

## Changes

- config/settings_data.json current.radius_navigation: pill → square. No other setting or saved preset changed. Consumer: css-variables maps --navigation-radius; shared Swiper buttons consume it. This changes navigation shape across the theme.
- snippets/carousel-navigation-icon.liquid: source Figma file yTXlAfT0miBGgRuuYM4OMp, node48007:10378, component chevron-right, original asset d6e20.svg. Original24×24 viewBox and path M9 18L15 12L9 6 match the existing next-chevron geometry exactly. Applied the source1.5px round stroke in place of the global variable. Previous uses the existing mirrored path M15 18L9 12L15 6. Both directions use stroke=currentColor and fill=none; source fixed color is not copied.
- Arrow and long_arrow keep existing geometry and directions; only stroke weight is synchronized to1.5px with existing round caps/joins and currentColor. No new icon, branch, option, runtime or CSS rule introduced.
- Shared consumers include swiper-navigation (collection/product/blog/media/etc carousels), announcement slider and image comparison. Foreground and hover colors continue to follow consumer color schemes/styles. SVG modification is recorded as theme-specific custom implementation.
- Added Navigation theo Figma to agents-build-themes/skills/build/preset/build-preset/SKILL.md: existing local Theme Settings mapping, appropriate icon/style renderer, original SVG/directional preservation, currentColor requirement, sibling stroke consistency, shared consumer impact, validation and configuration/deployment boundaries.

## Validation and remaining gaps

Theme Check: zero errors, seven warnings in current working tree. JSON/schema choice, exact config-only delta, original source geometry/viewBox, both directions, all six currentColor strokes and unchanged runtime validated. Theme and skills repo git diff --check pass. Skill frontmatter/name, unique new section and all relative links validated manually; bundled quick_validate.py could not start because PyYAML is missing in both available Python runtimes.

Visual desktop/mobile, hover/focus and disabled-state verification remains pending: browser tool reports Local browser use is disabled in Work settings. No browser workaround attempted.

Figma navigation48×48 uses24px icon; shared theme navigation still inherits global desktop button height56px and medium icon20px. No independent settings exist; button_height_desktop remains56 to preserve other button designs. Disabled previous visibility and outside-navigation layout remain unchanged. Shape and source glyph weight now match; this is not a complete pixel match claim.

No theme push/publish, Theme Editor save, commit or Git push. Existing preview watcher may reflect local changes. Before-edit settings/SVG snapshots are in /tmp/virelle-navigation-before/.
