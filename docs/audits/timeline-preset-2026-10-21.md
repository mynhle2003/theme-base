# Timeline preset — 2026-10-21

Updated the existing `Timeline` Add section preset in `sections/timeline.liquid` and the existing homepage instance `kinetra_timeline` in `templates/index.json`. The instance is enabled and contains 2010, 2015, 2020 and 2025. Original preset name `t:general.timeline` and category `Text` are preserved. Implementation, schema controls and global Theme Settings are unchanged.

## Design evidence and mapping

Figma MCP returned a file access error. The user explicitly requested Computer Use; both supplied nodes were read through CUA/Chrome in the beae.com profile, using the same source file as the existing verified initialization evidence. No Figma writes.

- Desktop `48190:17078`: 1920 × 841.33px, scheme 2, vertical padding token24 =96px. Container `48190:17079`: width1600, gap token14 =56px. Content `48190:17080`: horizontal1600 ×533.33. Content left `48190:17083`: width800, left/right padding token16 =64px. Native Timeline slide uses two equal outer children and an inner Group for the text inset.
- Mobile `48249:15823`: 375 ×653.67px, scheme2, vertical padding token12 =48px. Container `48249:15824`: gap token10 =40px. Content `48249:15825`: width343, vertical, gap token8 =32px. Text group `48249:15828`: height197. Heading component `48249:15830`: gap token3 =12px; title Content child: height65 and gap token2 =8px.
- Existing block tree: static Header (empty), static Timeline list → Timeline slide → Image + Group → story Group → title Group (Eyebrow + Heading) + Text. Image uses existing custom3:2 ratio on both devices. Mobile text inset is0.
- Pagination changed from tabs to existing `dots_with_progress`, bottom position, spacing56/40, active #181818 / inactive #CCCCCC. Native desktop arrows use existing outside position and secondary chevrons.

## Content and media

The original 2010 photo and Figma copy remain. User explicitly authorized authored copy and images for the other milestones. New demo stories follow craftsmanship → materials/movement → finished collection; they are authored demo brand copy, not independently verified historical claims. Three distinct photographs were created with built-in image_gen, converted to genuine AVIF and decoder verified at1536 ×1024, uploaded to the confirmed `layouthub-template-v2.myshopify.com` store and read back READY/image/avif. All four images loaded in the preview when their year was selected.

Local deliverables and full prompts: `output/timeline/kinetra-timeline-{2015,2020,2025}.avif`; [media receipt](timeline-media-2026-10-21.json). Original2010 file remains46743230808363. A mistakenly uploaded duplicate2010 file was removed by its exact newly-created ID; see receipt.

## Validation

- Theme Check: PASS,405 files,0 errors,8 existing warnings.
- Recursive Timeline settings IDs, select values, range/step values, block allow-lists and order: PASS. Single original-named section preset; schema outside presets and implementation identical to the pre-task snapshot.
- Homepage section order unchanged. An independent concurrent edit to `icon_text_cards_qT6mLV` appeared during work and was retained.
- Existing localhost9300 development preview inspected through CUA/IAB after Chrome preview calls timed out. No new preview server or explicit push/publish was started, and no Theme Editor Save/API theme mutation was used.
- Desktop1920: native slide1600 ×533.33, equal800px columns and672px inner text width. Section height847px versus Figma841.33px. Next advanced to2015 with loaded image; Previous returned to2010.
- Mobile375: vertical image-first flow, no horizontal page overflow. Clicked2015,2020,2025,2010 and read back the matching active year, heading and successfully loaded photo for every item. Section652px; browser scrollbar leaves328px content versus Figma343px.
- Saved screenshots: `output/timeline/qa-desktop.png`, `output/timeline/qa-mobile.png`. Temporary viewport override reset after QA. Full Theme Editor lifecycle QA was not performed.

## Remaining existing-control gaps

1. Figma desktop arrows sit at the bottom of the text column; existing Timeline positions place them beside the bottom rail or over the carousel. Configured outside, beside the rail. No existing control places them in the text column.
2. Figma inactive timeline dots are filled gray; native inactive dots are outlined. Native label font and rail/control geometry also differ. No setting controls dot fill or independent label typography/rail height.
3. Resolved by the requested Hero-style icon follow-up below.
4. Inherited Heading XL is50px desktop versus the approximately48px visual target; mobile30px matches the existing role. Global typography was preserved because one section is insufficient evidence to change shared typography.
5. The existing carousel retained a stale auto-height during viewport resizing; reload initialized the correct height at each target viewport. Implementation repair remains outside this preset-only task.

No custom implementation, commit, Git push or publication was performed.

## Hero-style eyebrow icon follow-up

User requested the Timeline eyebrow icon to match Hero. All four stories now use the existing Hero composition: horizontal fit-width Group, centered cross-axis, gap8, Icon block with the same8×8 square SVG geometry, and Eyebrow with show_icon=false. The fill is #181818 to match Timeline scheme2 on the light background; Hero remains white on its dark background. Updated the homepage instance and registered Timeline preset only. No shared renderer or CSS changed. Live readback confirms4 loaded custom SVGs at8×8 and0 built-in eyebrow icons. Screenshot: `output/timeline/qa-eyebrow-icon.png`. Theme Check:0 errors,8 existing warnings.
