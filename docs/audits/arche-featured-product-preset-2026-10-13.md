# Featured product preset — Figma configuration review

Date: 2026-10-13. Branch: `theme/arche-theme`.

## Scope and evidence

Applied the owner-selected `agents-build-themes/skills/build/preset/build-preset/SKILL.md`. The owner permits settings_data changes, `#` social links and theme-specific Figma custom icons, and explicitly requires retaining Divider. Only the first Featured product preset and the homepage Featured product/heading configurations changed. No implementation, schema controls, other presets or global settings changed.

- Desktop: Figma `v6iKvP4OuW3y0A9bbxel5U`, node `46313:4961`, width 1920px.
- Mobile: same file, node `46339:2792`, width 375px.
- Figma MCP reached its seat call limit. Used the existing high-fidelity responses in `/private/tmp/arche-figma-0.txt` and `/private/tmp/arche-figma-1.txt`, containing the exact supplied nodes; confirmed the selected nodes, section padding and social icon dimensions through the Figma browser inspector.
- Downloaded the original four SVGs from the cached response's asset URLs: Facebook `89162.svg`, X `5787b.svg`, Instagram `6e5a8.svg`, Pinterest `85062.svg`. Stored SVG markup in existing Icon `custom_icon` settings; removed unused IDs to prevent duplicate IDs. Root dimensions (16×16), viewBox, path geometry and colors are preserved. No temporary asset URLs remain in configuration.

## Configuration

- Keep two-item product media carousel, 8px media gap, 64px desktop / 28px mobile media/details gap, 24px mobile pagination spacing and 2px progress bar.
- Keep the complete existing product data, material binding, Divider settings/position, variant picker, size guide and purchase controls. Current product supplies Italian Fleece.
- Replace View Full Details with horizontal Group → Text `Share:` + horizontal Group → four Icon blocks. Icons use 16px width, no padding, 12px gap and accessible labels; all links use `#`. Both Groups retain horizontal flow on mobile through the existing alignment setting.
- Homepage heading uses the existing Rich text Eyebrow, uppercase and centered. Desktop top space is section 100px + eyebrow 12px (the section range is capped at 100); bottom space 40px. Mobile top/bottom are 56/36px. Product bottom space remains 96/56px.
- `config/settings_data.json` needed no change: each custom Icon owns its link.

## Validation

- 46 section/block configurations checked against existing IDs, options, ranges/steps and child allow-lists.
- First preset schema and homepage JSON parse; non-preset schema and Liquid implementation are identical to the baseline. Selected product/media and the complete existing product-information Group including Divider are preserved. A concurrent change to `image_text_stacked_bands` appeared after the task baseline; it was retained and is outside this task's edits.
- Theme Check: **0 errors / 12 existing warnings**. `git diff --check`: passed.
- Existing local preview at `127.0.0.1:9300` rendered at desktop 1920px and mobile 375px. Chrome reserved a 15px scrollbar: actual content widths 1905/360px. Target section overflow is zero in both viewports. Social SVGs measure 16×16px, links are `#`, order and 12px gap match Figma. Mobile pagination is visible, 2px high, with 24px top margin. Divider remains rendered.
- Quantity increases to 2 and returns to 1; selecting M succeeds and was restored to S. No cart purchase was performed.
- Proof: `/private/tmp/arche-featured-product/desktop.jpg`, `/private/tmp/arche-featured-product/mobile.jpg`; Theme Check output in the same directory.
- The owner's existing theme-dev watcher automatically synchronized these local edits to its unpublished Arche draft `192282820907`. No new watcher, explicit push, publication, Git commit or Git push was run.

## Remaining configuration gaps

- Figma desktop media width is 1051px in an 1824px container (57.62%). Existing section choices are 45/55/65%; retained closest Medium (55%). At the observed 1809px content width it renders 994.94px media / 750.06px details with a 64px gap. No arbitrary width or CSS override was added.
- Featured product has no heading slot; homepage uses its separate existing Rich text section. Adding Featured product alone does not add that heading.
- Homepage keeps accelerated checkout disabled through its existing saved static block flag. Shopify rejects `disabled` in schema presets, and the block has no visibility setting; newly added presets may therefore show accelerated checkout. No unsupported preset flag or implementation workaround remains.
- Font weight and size-guide treatment inherit existing theme contracts; no typography or button implementation changes were made. Divider is an explicitly accepted difference from desktop Figma.
- Theme Editor add/duplicate/save/reload for a newly added preset was not performed. No product/image/video references were newly selected or fetched.
