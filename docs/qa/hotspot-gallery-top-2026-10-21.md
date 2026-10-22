# Hotspot Gallery — Top + Beside images

Kinetra-only CSS in sections/hotspot-gallery.liquid: desktop controls sit bottom-left beside images, mobile controls follow copy and precede media. Preset/homepage choose Top + Primary. Existing local edits retained; native markup, block attributes and carousel runtime unchanged. Empty-header fallback and no-padding container handled.

Figma desktop 49274:24623 / mobile 48249:14694 inspected through computer use at owner request after MCP authentication loop. Existing dynamic images retained. Desktop content column 23%, top header inset 64px; 48px controls, 12px gap. Mobile copy/control gap 24px, control/media gap 32px.

Chrome desktop 1920 (1905 CSS content): viewport 1349.86 × 775.83 at x505.14; controls x50, bottom aligned with media. Next worked and disabled at final desktop group. Mobile 375 (360 CSS content): media 328 × 382.66, no page overflow. Next wrapper translation -348px; Previous returned to first image and disabled. Viewport reset. Evidence: /tmp/kinetra-hotspot-gallery-mobile.png.

Theme Check: 0 errors, 8 existing warnings outside target. Eight carousel shared tests pass. Section/block schemas and homepage options parse and match supported Top/Primary choices. git diff --check passes. Toolkit validator unavailable because bundled @shopify/theme-check-common is missing; CLI check used.

Full Theme Editor lifecycle/sticky/empty-header matrix remains unverified. Existing typography, eyebrow icon and image-crop differences remain outside this navigation layout change. Existing dev watcher syncs development theme 192119800107; no explicit push, publish, commit or Theme Editor Save.

## Icon + Eyebrow preset follow-up

Owner requested the same composition as Hero. Hotspot Gallery preset and homepage Header now use a horizontal Group containing separate Icon and Eyebrow blocks: filled 8 × 8 square SVG, 8px gap, vertically centered, fit width. SVG inherits currentColor for this light section. Eyebrow built-in icon/background disabled to avoid duplication; Discover copy and parent alignment retained. Group and Icon/Eyebrow entrance settings copied from Hero. No runtime/shared implementation change.

## Kinetra Dot style — 2026-10-21

Owner requested theme-specific Dot styling. Figma inspected through computer use: desktop Dot 49274:24634 is 16px, white; its parent Hotspot Active is 48 × 48, #070707 at 20% with 1px white inner border. The inactive second image displays only the white center. CSS-native geometry recreated in assets/virelle.css under product-callout--icon-dot, covering Product callout and Gallery. Plus/Tag/Bag and separate Shop the look hotspots retain existing styling. Dot has a 48px hit target, no pulse rings/shadow/hover scale; hover, keyboard focus and aria-expanded reveal the active ring. Existing focus outline, popup runtime and reduced-motion behavior retained.

Desktop native popup opened and aria-expanded became true. Computed styles confirmed 16px white center without border/shadow, ring #070707 at 20%, 1px white border, animation none. This exposed a remaining shared hover scale, fixed with a more specific Dot hover/focus selector; ring now explicitly border-box. Final browser recheck/mobile could not complete because Chrome CDP stopped responding, including a fresh preview tab. No final screenshot captured. Theme Check: 0 errors, 8 existing warnings; git diff --check passes. No schema, settings, JS, explicit push/publication or commit.

## Explicit default/active references — correction

Supersedes previous assumption that default has no visible disc. Owner supplied desktop active 48205:19421, desktop default 48205:19419 and mobile default 48249:14589. All inspected through Figma computer use. Default: visible 36px disc, #070707 20%, no border, white 16px center. Active: 48px disc, same fill, white 1px inner border, same center. Mobile default is also 36px/16px.

Updated theme-only CSS to render a centered 36px default disc inside an unchanged 48px hit target. ARIA expanded or keyboard focus selects 48px/bordered state; hover applies only with fine pointer + hover support to prevent sticky mobile hover. No pulse/scale. Desktop native popup test computed active 48px/white border and sibling default 36px/transparent border, both 16px centers and transform none. Mobile 375px native viewport confirmed both triggers aria-expanded false, disc 36px and center 16px. Screenshots: /tmp/kinetra-dot-states-desktop.png and /tmp/kinetra-dot-states-mobile.png. Viewport reset. Theme Check 0 errors; git diff --check passes. Popup content/typography differences remain outside Dot styling.

## Dot state transition

Owner requested smoother state changes. Added width/height/border-color transitions to the Dot disc pseudo-element using existing --motion-duration-standard (280ms) and --motion-ease-standard tokens, only inside prefers-reduced-motion: no-preference. Default/active geometry and fixed hit target remain unchanged. Reverse/interrupted transitions use native CSS interpolation. No JS/schema or popup timing changes. git diff --check passes; live transition timing was not rechecked in browser.
