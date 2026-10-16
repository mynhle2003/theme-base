# Image comparison (custom) — preset configuration

Sources: desktop Figma `bH9A5237I07NWt19Cua9gL` node `47015:21995`; mobile `47228:13981`. Both design contexts and screenshots inspected. Workflow: agents-build-themes `build/preset/build-preset`; configuration only.

Registered exact named preset in `sections/custom-section.liquid`, category Media. Migrated homepage `choose_colour` to `custom-section`, preserving block IDs, order, copy, disabled state and existing resource settings. Other instances and legacy section implementation retained. The duplicate Add section preset in `image-comparison-custom.liquid` is removed; the single Image comparison (custom) preset remains in Custom section. The default Custom section preset is reset exactly to personal `main` (empty composition and base settings); Text marquee (custom) is preserved.

Composition: Header → Eyebrow “Spy Small”, H2 “Choose your colour”; Image comparison slider, horizontal, 50% position, compare handle, square corners, dark labels and white handle. Container follows existing page width; comparison max width 1600px. Section gap 40px desktop / 32px mobile, top padding 96px / 56px, bottom 0. Header gap 12px; closest supported header maximum 770px (Figma 768px). Existing custom ratio W/H values now 7/3 desktop and 5/3 mobile. Earlier saved values 1600/686 and 343/206 exceeded runtime bounds 1–100 and fell back to 16/9.

## Configuration boundary and gaps

- Desktop expects separate colour titles “Peach bud pink” / “Pale sage green” and underlined View product links, titles hidden on mobile. Existing comparison offers one shared richtext label per side, without independent title, button/link or mobile visibility controls. Retained View product copy on both sides as plain labels; no destination invented.
- Existing label positioning/padding and typography differ from Figma: Figma content inset 40px desktop /20px mobile; current labels use shared snippet offsets/padding. No configuration controls to reproduce this precisely.
- Existing handle includes its native shadow. Exact icon artwork/shadow cannot be configured.
- Global style guide already records heading/button tracking gaps. No global settings changed for this section.
- No images/products selected, downloaded, uploaded or created: media work was not explicitly requested. Existing resource references are preserved; currently unselected, so placeholders remain.

## Validation

Recursive preset checks passed: existing block allow-lists, setting IDs, select options, range bounds/steps, unique preset names and matching homepage composition. Source review confirms responsive ratio controls and mobile spacing bindings. Expected comparison geometry: 1600×685.71px desktop; 343×205.8px mobile. These are computed from controls, not browser measurements.

Actual storefront/Theme Editor desktop/mobile visual, drag, keyboard and editor lifecycle checks remain unverified; no preview/deploy started. No store configuration saved, theme push, publication, commit or Git push.

## Authorized custom follow-up

Title and per-side Button label/link plus shared Button styling are now implemented; the earlier missing title/button-control gap is superseded. Preset/homepage use colour titles and tertiary View product buttons; links/media remain unselected. Mobile-only title hiding and exact Figma content insets remain unimplemented. See theme customization record for implementation boundaries and validation. Theme Check after follow-up:0 errors /7 warnings, including the new advisory for48 block settings.

## Preset cleanup verification

Re-read desktop design context and screenshot on 2026-10-16; existing comparison composition matches the available controls. Mobile design context refresh hit the Figma seat call limit; mobile values above rely on the previously recorded design review. All section schemas parse and preset names are unique within each schema. Custom section default preset matches `main` exactly. No storefront visual recheck or deployment performed.

## Mobile and media follow-up

Mobile Figma `47228:13981` inspected directly in browser after MCP quota prevented refreshed context: 375px frame, 343px image target, 56px top padding, 32px header-to-image gap, approximately 5:3 image ratio, colour titles hidden. Existing ratio and spacing settings retained. No implementation/CSS edits made under build-preset.

Downloaded the two URLs returned by desktop design context. Source 1 is a generic image placeholder and was rejected. Source 2 is the exact flattened two-colour bag image (1600×686), converted and decoded as AVIF, uploaded to the verified store and bound to both comparison layers in the named preset and homepage. Shopify Files confirms dimensions, format, saved alt text and permanent CDN link; see media receipt. Because the supplied source is a flattened composite, slider movement cannot reveal independent full pink/green images. No independent sources invented.

Preview on existing localhost:9300: mobile viewport 375px, component 328×196.8px (desktop browser scrollbar leaves 360px layout width), both images loaded, no component overflow. Desktop 1920px: component 1600×685.7px, no component overflow. Existing preview watcher picked up local edits; no manual theme push or Theme Editor configuration save performed.

Remaining configuration gaps: hide titles only on mobile (no existing control), exact content insets, heading tracking and independent full-colour comparison sources. Product destination links remain unset. Browser screenshots saved in output/image-comparison. Global theme settings unchanged.

## Correction: independent before/after assets

The user rejected the flattened comparison binding. Created two independent full-colour product images using built-in imagegen: before Peach Bud Pink; after Pale Sage Green. The first edit reconstructs the complete pink leather from the composite reference; the second recolours that result to sage green while preserving composition. These are AI reconstructions, not original separate Figma assets; small geometry/texture deviations from Figma remain. Full prompts were supplied in the tool calls and summarized in the media receipt. Source PNGs and final AVIFs are saved in `output/image-comparison/` as `mara-comparison-before-peach-pink` and `mara-comparison-after-sage-green`.

Both final AVIFs decoded at 1600×686, uploaded and verified in Shopify Files with separate IDs/CDN URLs and saved descriptive alt text. Replaced before/after references in Custom section's named preset and homepage only. The earlier composite is unbound, retained as a superseded file, and is not the active comparison asset.

Mobile preview verification: both distinct source URLs loaded; keyboard Home reveals fully green, End reveals fully pink. Screenshots `mobile-slider-0.png` and `mobile-slider-100.png` demonstrate actual colour switching. Mobile title-visibility gap remains separate. No implementation changes or manual theme deployment.

## Title typography preset correction

Before/after fields already expose Title in the block editor; retained setting IDs for compatibility. Updated only named preset and homepage comparison typography: font body → heading (Urbanist regular, uppercase), size sm → xl (20px), tracking normal → relaxed (0.02em =0.4px). Matches desktop Figma title font size/case/tracking; mobile title hiding remains enabled. Existing shared label line height still uses body line height, rather than Figma1.4; no implementation change made for this preset correction.
