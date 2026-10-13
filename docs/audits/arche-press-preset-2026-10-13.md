# Arche Press preset — 2026-10-13

Applied the supplied build-preset and store-content-media skills to desktop Figma `46306:2119` and mobile `46339:2307`, file `v6iKvP4OuW3y0A9bbxel5U`. Figma MCP is blocked by the View-seat call limit; evidence came from browser Inspect, screenshots and source exports.

## Configuration and media

- Reused `press` → static `press-quotes` → three `press-item` blocks with nested `heading`, plus the existing eyebrow. Preserved copy, order, section and preset names, 768px maximum content width, desktop 40px gaps and 96/56px bottom padding.
- Set mobile logo width to 160px, quote-to-logo spacing to 36px and logo gap to 32px, matching browser Inspect. The original aspect ratio gives 160 × 80px logo slots at both breakpoints.
- Uploaded three genuine AVIF files, 480 × 240px, to Shopify Files on `layouthub-template-v2.myshopify.com`: `arche-press-clairol`, `arche-press-vogue`, `arche-press-vanity-fair`. Bound them and their descriptive alt text to the homepage instance and the existing section preset.
- Per the user's follow-up, media retains full source opacity. Clairol uses the freshly exported PNG inside the reference 2:1 frame; an older SVG produced clipped text and was discarded. The initial uploaded Clairol file was replaced and verified before binding. Vogue uses its full-opacity frame export. Vanity Fair uses the exported SVG with only its 0.4 group opacity removed before raster conversion. No generated or substituted logos.
- File IDs, durable CDN URLs, source exports, pull readback and visual proof are in ignored `.shopify/media/arche-press/receipt.json`. Files alt text was saved and read back for all three.

## Verification

- Existing Shopify theme dev synchronized the two configuration files to unpublished Arche draft `192282820907`, name `Arche template (Minhle)`. Explicit scoped pull verified the remote Press instance and schema preset are semantically equal to local.
- Existing setting IDs, select values and range bounds/steps passed validation. Schema fields outside presets and Liquid outside schema were preserved. No new CSS, JavaScript, blocks or settings.
- Theme Check: 0 errors, 12 existing warnings in unrelated files. Git whitespace check passed.
- Desktop at 1920px: 768px content, 24px/33.6px quote, all three logos loaded in 160 × 80px slots. Selecting Vogue and Vanity Fair updates the active state.
- Mobile at 375px: 20px/28px quote, 160 × 80px logo slots, 36px quote spacing and 32px logo gap. Selecting Vogue centers it with clipped adjacent logos, matching the reference composition. Chrome's scrollbar leaves 360px content width versus the Figma frame's 375px. The section measures 350px high. Temporary viewport override was reset.
- Existing unsaved Theme Editor session was left intact. Full add/duplicate/reorder/editor lifecycle was not tested. No commit, Git push or publication.

## Remaining configuration gaps

- Figma shows Vogue active initially. The runtime selects the first item (Clairol), with no initial-index setting. Preserved Clairol → Vogue → Vanity Fair order; the reference active state is reached by selecting Vogue.
- Inactive logo opacity is 0.5 in the existing runtime, versus 0.4 in Figma. This opacity is applied by the theme, not baked into the uploaded image.
- The shared hover treatment can slightly enlarge a hovered logo. There is no Press preset control for this behavior.

These implementation differences remain unmodified under the supplied preset skill's configuration-only boundary.
