# Kinetra Hero marquee — 2026-10-21

Owner corrected the target theme to Kinetra and requested restoration of Virelle. Added existing Marquee with four native heading/icon pairs to the Hero preset and homepage Hero instance, preserving existing Hero settings, copy, media, links, animation and nested IDs. Source Figma: yTXlAfT0miBGgRuuYM4OMp, 48622:16445 and text nodes 48622:16448/16451/16454/16457. Scoped Hero CSS places the marquee across the content panel at top 48px, opacity 40%, tracking -1.2px, hidden below 768px. Native runtime is unchanged.

Verified the real development storefront at http://127.0.0.1:9300/: Hero contains ACTIVE ESSENTIALS, COMFORT FIT, CHIC ATHLEISURE and DYNAMIC STYLE. Shopify upload accepted the corrected single-underscore nested IDs. Theme Check: 0 errors, 8 warnings in unrelated files. Mobile visual and Theme Editor interaction were not rechecked. Screenshot: /tmp/hero-target-correction/kinetra-hero-marquee.png. Existing dev watcher synced changes; no Git push or publication.

Restored Virelle Hero preset, stylesheet and customization record to their original content; restored only its homepage Hero instance, retaining unrelated template edits. Moved this task’s mistaken Virelle receipts to /tmp/hero-target-correction. Newly uploaded Files remain unused and were not deleted.

## Visible options

Reused the Button pattern from `mara-theme/blocks/button.liquid` and `zevra-theme/blocks/button.liquid`: Visible → Hide on desktop / Hide on mobile, default false. Marquee settings conditionally emit responsive classes at the shared 768px breakpoint. Removed the Hero-specific unconditional mobile display:none rule; only Hero marquee preset and instance opt into hide_on_mobile=true. Other marquees remain visible by default. Theme Check: 0 errors, 8 existing warnings.

Read back the development storefront: Hero Marquee now renders `marquee--hide-mobile` from its saved option. Desktop remains visible. Full mobile viewport/Theme Editor toggle interaction was not tested in this pass.

## Figma separator SVG correction

Native CUA/Chrome export of Rectangle 1, node `48622:16449`, returned a 14×14 SVG (12px rectangle plus outside 1px border). Replaced the mistaken solid 8px square used in all four Hero marquee Icon paste fields with the exact exported hollow square path and white stroke. Set existing icon_width=14, padding=0 in both Hero preset and homepage instance. No renderer/CSS/JS change; other icons are preserved. Source copy: `/tmp/hero-target-correction/figma-48622-16449.svg`.

Verified actual development storefront: decoded rendered image source matches the exported SVG, loaded successfully, bounding box 14×14px. Screenshot: `/tmp/hero-target-correction/kinetra-hero-svg-fixed.png`. Theme Check: 0 errors, 8 unrelated warnings.
