# Novaire ↔ Malandra variant tracking

Fork: `theme/malandra-theme` → `theme/novaire-theme` at `246d7322aa61a6023a4178b2605740f01b9eeb6b` on 2026-10-26. Shared implementation/dependencies, presets, media and Theme Settings fully inherited. Future Novaire design configuration is local to Novaire. Base checkpoint remains the inherited personal main checkpoint; no theme-base-sync-state marker is changed here.

Peer registration: `peer-registration-pending`; source theme edits were not authorized. Read the actual Malandra branch/worktree when reviewing future changes; inherited source reports are historical context only.

| Source branch | Fork SHA | Reviewed through SHA | Last applied source SHA | Target result commit | Pending IDs |
| --- | --- | --- | --- | --- | --- |
| theme/malandra-theme | 246d7322aa61a6023a4178b2605740f01b9eeb6b | 246d7322aa61a6023a4178b2605740f01b9eeb6b | 246d7322aa61a6023a4178b2605740f01b9eeb6b | fork, no new commit | none |

Reverse Novaire → Malandra checkpoint begins at `246d7322aa61a6023a4178b2605740f01b9eeb6b`. No changes made to Malandra.

| Fix ID / origin | Symptom and shared files | Direction | Decision | Target result | Validation | Next action |
| --- | --- | --- | --- | --- | --- | --- |
| preview-target-local | Uncommitted preview script/docs/test in source | Malandra → Novaire | applied, uncommitted | three files copied with owner authorization | byte equality | retain local; do not commit test |

## Rich text preset — 2026-10-27

Source Figma `vsUDZS8CZ0sa1pruNqu0eb`, desktop `47056:14774` (1920×375), mobile `47284:7172` (375×417); read with CUA/Chrome after Figma MCP View-seat quota. Reused `rich-text` with static eyebrow (empty), heading, text and dynamic button. Updated only Add section `presets[]` and `index/brands_intro`; original translated preset name retained, no category on main. Preset now includes all static content, which was missing from Add section. Existing page link `/pages/our-story-novaire` retained; this text-only region needs no store resource creation/upload.

Heading uses existing display scale44/30px, Outfit300; body sm14px/21px Poppins400; explicit local text colors#3A3A3A/#6C6C6C; background#F6F0EC, section padding80/56px. Body bottom padding8px desktop/0mobile represents32/24px text-to-button gap. Width840px is nearest supported20px grid to Figma830px. Existing heading animation preserved. No implementation or global settings changed by this task.

Read-only preview `127.0.0.1:9300`, existing unpublished theme192827490603, automatically reflected local changes through the already-running theme dev process; no separate push command, Theme Editor save or publish. Checked1920×1080 (content1905px) and375×812 (content360px due scrollbar). Desktop section379.19px vs source375; mobile429px vs417. Heading44/57.2 desktop,30/39 mobile, body14/21; centered copy and CTA visible; mobile document width360 equals client width360 (no horizontal overflow).

Known existing-control gaps: heading-to-body gap24px vs Figma20desktop/16mobile; section has no gap control and padding cannot reduce it. Desktop content840vs830px (schema range step20); mobile effective content328vs343px because preview reserves15px scrollbar. Mobile heading tracking3.6px is inherited shared token, while source screenshot is narrower; exact source mobile tracking unresolved because property remained tokenized. Button desktop186.45×43/mobile186.45×44 vs source desktop approximately182×43/mobile175×40; no block-local height/padding/letter-spacing controls. Shared global button tokens intentionally unchanged. These gaps remain unimplemented; no pixel-perfect claim.

Validation: Theme Check0errors/7warnings in unrelated files (5ExcessiveSettingsCount, OrphanedSnippet, LiquidComplexity); enum/range IDs and preset synchronization verified; git diff --check passed. Screenshots observed through tools, no persistent screenshot evidence saved.

### Rich text gap follow-up — 2026-10-27

Owner requested minimum base gap plus block padding compensation. Added section-owned gap/gap_mobile controls0–100px, default24px preserving existing instances; rendering uses existing layout-flow-style primitive. Current preset and brands_intro use16px base, heading bottom padding4/0px and text bottom padding16/8px desktop/mobile. Preview after schema then template resync measured visible heading→text20/16px and text→button32/24px, matching Figma. Desktop section375.19px; mobile421px (remaining4px from shared button44vs40px). This supersedes the earlier gap limitation; unrelated width/button limitations remain. Theme Check0errors/7unrelated warnings. Build-preset source skill and rendered-output reference updated with reusable minimum-gap/padding guidance; no push/publish command.


## NOVAIRE-VIDEO-PRODUCTS-001 — Virelle port, 2026-10-27

Status: applied; rendering/runtime QA pending. Source Virelle HEAD53229999752df65f8f475c89511d6bc87a382434, selected source files clean. Target Novaire current working tree; no commit/deploy authorization inferred. Port section `video-with-products`, private block `_video-review`, product snippet and video runtime; source SVG icons use target inline snippet policy. Compatible existing shared Swiper, picker, buy-button and theme-button consumers are reused, not replaced. Local homepage instance retains `founder_testimonials` and original Novaire heading/text/videos; Add section preset synchronized. See [plan](../theme-init/novaire-video-with-products.md).

Owner correction in same task: replace Virelle in-video popup with always-visible Product compact; extract shared Compact renderer/CSS and expose33 Compact options on private Video block. Remove popup-specific dependency and runtime. This supersedes popup behavior in the initial port entry; source Virelle remains untouched.
