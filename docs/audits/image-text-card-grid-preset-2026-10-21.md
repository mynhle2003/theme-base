# Image text card grid preset — 2026-10-21

## Scope and source

User requested the build-preset workflow plus an explicit implementation exception: add “Fill height” immediately before “Custom” in both Image and Video ratio selectors. This applies to desktop and mobile. Existing unrelated working-tree edits were preserved.

Figma file `yTXlAfT0miBGgRuuYM4OMp`, desktop `48622:21390`, mobile `48622:21452`. MCP repeatedly returned authentication responses; user explicitly requested Computer Use. Read both frames and mobile card `48622:21457` / header `48622:21458` through Chrome CUA. No design writes or media uploads.

## Implementation and composition

- `blocks/image.liquid`: new `fill_height` ratio on both devices uses the existing fill frame with automatic outer height and flex growth. Old height controls and ratio defaults remain compatible.
- `blocks/video.liquid`: same enum/order, automatic aspect ratio, parent/sibling-sized frame, absolute video/iframe/placeholder contents. Native video playback, cover and controls remain owned by the shared renderer. No JS changes.
- `sections/image-text-card-grid.liquid`: one default preset named Image text card grid, category Text. Existing blocks only. Horizontal Group has a direct Video and two equal-width Groups. Removing the heightless video-column intermediary lets the video stretch against content-driven neighboring columns.
- `templates/index.json`: updated only the `kinetra_collage` composition. Copy uses a nested Group for Eyebrow → Heading → Text, with Button beneath. Desktop gaps 20px between columns/images, 16px within header and 32px before button. Mobile gaps 8px between media, 12px within header and 16px before button. Mobile copy padding is 32px vertical / 20px horizontal as inspected; section padding remains 96px desktop / 48px mobile.
- Desktop video uses Fill height; mobile video uses 3:4. Images use existing 5:4 options. Existing resource references retained; obsolete numeric ratio values removed from this composition. No global typography changes.

## Verification

Existing development preview at `http://127.0.0.1:9300/`, theme `192119800107`, was already running and automatically reflected file changes. No new watcher, explicit theme push, publish, Theme Editor Save, commit or Git push.

- Desktop: content width1600px, three columns520px, video520×852, each image520×416, right column852px high. Fill height corrected an observed initial zero-height frame by using automatic outer height for flex stretching.
- Mobile: tested explicit viewport390px with a 15px desktop browser scrollbar, yielding375px layout width and343px media width. Video343×457.33, images343×274.39, copy343×293.94. No section horizontal overflow. Order Video → copy → shorts → back → together.
- All existing image URLs loaded successfully with nonzero natural dimensions. Video autoplay/loop and controls remain native.
- Recursive schema checks passed for all preset and instance setting IDs, select values, range bounds and block orders. All four ratio selectors have Fill height immediately before Custom; the registered default preset name is unique.
- Theme Check:0 errors,8 warnings in the current shared working tree; none in the two modified media blocks or target section. `git diff --check` passed.
- Image Fill height rendering across arbitrary other parent compositions, external video variants, and the full Theme Editor add/duplicate/save/reload matrix were not exercised. Defaults and existing enum values were retained.

## Visible gaps

1. The existing `kinetra-collage-shorts.avif` actually shows an upper-back view, whereas Figma shows shorts/waist in the middle-bottom slot. The inherited receipt describing it as exact was contradicted by browser comparison. No replacement image was fetched/uploaded in this preset-only task.
2. Shared typography differs from the source: mobile copy is293.94px versus288px in Figma, with different heading wrapping; desktop copy is405px versus416px, making the middle column11px shorter than the right/video. Current global typography remains shared; no local CSS was added to force a match.
3. The existing Eyebrow square renders outlined, whereas the source square is filled. Preset controls expose shape but no fill setting. Native video controls may be visible during pointer activity; source Figma is a static animation frame.

These gaps remain unimplemented under build-preset's configuration boundary. The user-authorized Fill height exception was implemented before configuring the preset.

## Follow-up: nested Group Fill height

User explicitly requested fixing the desktop image group: keep the two bottom images proportional and make the first image in the last group Fill height. Both registered preset and homepage now set right-column Group height Fill, position Top, its first Image desktop ratio Fill height, and both bottom Images5:4. Mobile ratios remain5:4.

`blocks/group.liquid` fixes desktop horizontal-parent → Fill-height Group behavior: automatic height, align-self stretch and min-height0. Previously100% resolved against an indefinite content-driven parent. This is a reusable opt-in correction for nested Groups with height Fill; Fit Groups, other parent directions and mobile styling remain unchanged.

Preview results: at1600px content width, all three columns are520×841. First right image520×405 matches the copy card; both bottom images520×416 start/end on the same rows. The previous11px column mismatch is resolved. At1200px browser viewport all three column bottoms are identical, with811.67px heights despite additional copy wrapping. At375px usable mobile width, all three images remain343×274.39 (5:4), with no horizontal overflow. Existing source-image and typography gaps above remain; no fixed row height or instance-ID CSS introduced.
