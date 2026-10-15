# Icon width text (custom)

Configured `sections/icon-text-cards.liquid` with a new preset and synchronized the existing `benefits` instance in `templates/index.json`. Original preset and implementation retained.

References: Figma file `7BbUHDzKGaMGMkyRpu0YZ8`, desktop `52325:1550`, mobile `52393:9311`.

Composition: carousel → four slides → icon + header (heading + text). Desktop four columns, 28px gap; mobile one column with bullets and 36px pagination spacing. Desktop pagination hidden, stored padding 48px. Icon-to-content gap 24px; heading-to-body gap 16px. Heading 20px, body native md (16px). Section padding 10/64px desktop, 10/56px mobile.

All four library alternatives differ from the reference artwork. Source is Custom with complete, unmodified 32×32 SVG exports stored directly in custom_icon for diamond, earth, parcel, and gift. No temporary asset URLs or store media dependencies. Source nodes: `52325:1555`, `52325:1564`, `52325:1582`, `52325:1597`.

Validation: setting IDs/options/ranges checked recursively; unrelated homepage data preserved against the pre-edit snapshot; Liquid/CSS/JS implementation unchanged; git diff --check passed. Theme Check: zero errors, six existing ExcessiveSettingsCount warnings in shared blocks.

Runtime desktop/mobile visual verification remains pending: local preview at 127.0.0.1:9301 was unavailable. Native bullet geometry and actual line wrapping require preview verification. No theme push or store configuration save performed.
