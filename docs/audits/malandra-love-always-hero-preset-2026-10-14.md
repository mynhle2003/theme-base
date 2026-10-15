# Love, Always Hero preset — 2026-10-14

Applied the explicitly requested build-preset skill from `agents-build-themes/skills/build/preset/build-preset/SKILL.md`, with Figma design-to-code guidance for reference reads.

References: desktop node `52325:1450` (1920 × 720), mobile node `52393:9211` (375 × 500), file `7BbUHDzKGaMGMkyRpu0YZ8`. Reviewed both screenshots and full design context.

## Configuration

Updated only `sections/hero.liquid` schema presets and the `love_always` instance in `templates/index.json`. Preset and instance reuse Hero → Header → Eyebrow + Heading, followed by Button. Existing Hero settings and block contracts outside presets are unchanged. The first homepage Hero and its selected imagery are preserved.

- Full-width Classic video background, centered desktop/mobile content, scheme-3 white heading and white primary button.
- Introducing / Love, Always / Shop now. Button uses `shopify://collections/all` as the standard shop destination.
- Header cap 770px desktop, fill mobile; inner gaps 16/10px and button gaps 48/36px.
- XL heading inherits Kaisei Decol 54px desktop / 40px mobile, semantic h2. Eyebrow has a local white 80% color override. Animation disabled.
- Transparent overlay; video and mobile video unselected. No media fetching/upload was requested or performed.

## Height mapping

No height calibration or implementation changes. Desktop Medium supplies a 720px minimum grid track with zero section padding. Mobile Extra small supplies a 400px minimum grid track; existing section spacing adds symmetric 50px top/bottom padding, producing an expected 500px total surface. This uses the existing grid track and section-spacing behavior rather than changing the shared scale used by the first Hero. Symmetric padding preserves centered content. Figma's internal 40/80px padding is not copied literally because this theme adds section padding outside its fixed grid track.

## Checks and gaps

Validated configured setting IDs, option values, range bounds/steps, child allow-lists and block order in both preset and instance. Theme Check passed with 0 errors and 6 existing ExcessiveSettingsCount warnings. `git diff --check` passed.

Desktop/mobile comparison was against Figma screenshots and the existing responsive implementation, not a rendered Shopify preview. Local preview is stopped with an existing authentication error; starting/syncing it also uploads theme files, outside this local-only preset request. Height geometry above is code-derived and requires rendered confirmation.

Remaining differences: background video is unselected, so native placeholder imagery remains; exact crop/motion cannot be compared. Eyebrow inherits the existing global accent font/size/tracking rather than Figma's Figtree 14px/1.5px; no local typography control exists. Primary button border inherits 1px instead of the Figma 1.5px. Global typography and CSS were not changed. Shopify rendering and Theme Editor interactions remain unverified. No deployment, store save, commit or push performed.

## Video assignment completed

Uploaded a lossless MP4 faststart remux of the verified Figma source after the original attempt stalled without a Files resource. Retry Video `46619896545579` appears in Files as `malandra-love-always-figma-compatible.mp4`; Admin media readback confirms 1920 × 1080, 7.64 seconds, video/mp4, readyState 4 and no playback error. Shopify provides the cover image automatically.

Assigned the verified filename reference to the existing Hero section video/mobile_video settings in both its schema preset and homepage love_always instance. No implementation changes or store theme settings saves. Both viewports use the same clip, as in Figma; native cover cropping remains unverified on the storefront. Autoplay, loop and muted behavior are supplied by existing Hero Liquid. Theme Check passed with zero errors and five existing warnings; diff whitespace check passed. No deployment performed. Receipt: malandra-love-always-video-2026-10-14.json.
