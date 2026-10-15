# Rich text — 2026-10-14

Superseded on 2026-10-15: the founder composition now uses `Testimonials: Horizontal (custom)` in Custom section. Rich text was restored to local `main`; see `malandra-testimonials-horizontal-preset-2026-10-15.md`. The notes below are historical.

Latest user correction supersedes the initial configuration: restored the original Rich text name (removed instance name override; preset name t:general.rich_text), moved founder_rich_text immediately after the second Hero, love_always, and replaced the empty static eyebrow with a static Custom icon containing the exact original Figma SVG from desktop 52325:1464. SVG downloaded to /private/tmp/malandra-rich-text-sparkle.svg and assigned verbatim to custom_icon; no temporary URL is used at runtime. Original root dimensions 47.9999 × 45.44, icon width 48px, top/bottom padding 1/2px approximate the 48px Figma slot without modifying SVG geometry. Quote and credit remain unchanged, with native 24px gaps.

The explicit eyebrow replacement requires a small section implementation change: use_leading_icon checkbox selects a leading static Icon instead of static Eyebrow. Default false preserves other presets. Requested preset/instance set true. Customization recorded in docs/theme-customizations/malandra-theme.md. No global typography or unrelated template content changed.

Desktop/mobile section padding remains 64/80 and 48/56; centered 920px desktop content and full mobile content. Current native heading scale remains 26px desktop, 22px mobile versus 26px mobile design context. No live runtime preview available. No store push or publish.
