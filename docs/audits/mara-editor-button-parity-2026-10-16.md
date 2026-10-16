# Theme Editor button parity — 2026-10-16

Target: layouthub-template-v2.myshopify.com, development theme 192119800107. Existing local watcher: port 9300, this repository. No other theme targeted.

Read-only CLI pulls into /tmp/mara-editor-192119800107-compare confirmed Button, Group, Image comparison, critical CSS, CSS variables, layout and settings data matched local before this fix. Homepage choose_colour and limited_release had matching presentation settings (only absent versus explicit disabled:false differed). No evidence of a different theme supplying these files.

Browser DevTools showed optional global button colors inside the Liquid style tag becoming unresolved --shopify-editor-setting-* variables. They overrode inherited section scheme colors in the editor despite being blank in saved settings. Reading the four optional Primary/Secondary background/text settings into Liquid variables before the style tag preserves the blank checks. Existing hover, border and scheme definitions remain in place. Reference: https://shopify.dev/docs/storefronts/themes/tools/online-editor

Changed snippets/css-variables.liquid only for this fix. Existing watcher synchronized that file at 10:42:39 local time. Reloaded the exact target editor and verified SHOP THE SALE uses a white background and dark text, including after focus was removed while Shopify inspector remained enabled. Previously it was transparent with white text. This shared fix applies to Primary/Secondary buttons throughout the theme; every section was not individually checked.

Validation: Theme Check 0 errors, 7 warnings; two scoped color-scheme tests pass; git diff --check passes. Full theme-settings suite has an unrelated Footer fixture failure (missing expected section.blocks). Shopify toolkit validator unavailable due to missing @shopify/theme-check-common dependency. No manual push, Theme Editor Save, publication, commit or Git push. Existing watcher performed the development-theme upload; no store resources were created or changed.
