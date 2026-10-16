# Theme Check warnings — 2026-10-16

Resolved LiquidComplexity by extracting typography, control and commerce normalization and CSS emissions from css-variables.liquid into three scoped render snippets. Commerce receives the three resolved radius values explicitly. Font resolution, scheme normalization and optional global button overrides remain in the parent. Every emitted CSS declaration, including tablet/mobile overrides, was compared against the pre-refactor source and preserved with identical occurrence counts.

Settings-count warnings are temporarily accepted. At the user's clarification, all six schema exemptions were removed. ExcessiveSettingsCount stays enabled with its default threshold, preserving all existing settings and keeping these advisories visible.

Validation: Theme Check passes at error level; six settings-count warnings remain visible; two scoped color-scheme tests pass; git diff --check passes. Existing development watcher synchronized changes to layouthub-template-v2 theme 192119800107; storefront GET returned 200 and product-card layout was visually inspected. No manual push, publication, Theme Editor Save, commit or Git push.
