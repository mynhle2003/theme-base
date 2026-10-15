# Malandra Blog posts preset — 2026-10-14

Applied the user-requested `build-preset` and `store-content-media` skills. Reference: [desktop 1920 × 1703](https://www.figma.com/design/7BbUHDzKGaMGMkyRpu0YZ8/Malandra?node-id=52325-1470), [mobile 375 × 2088.75](https://www.figma.com/design/7BbUHDzKGaMGMkyRpu0YZ8/Malandra?node-id=52393-9231). Both high-fidelity design contexts and screenshots were read using the required Figma design-to-code skill.

## Configuration

Updated only the existing preset in `sections/blog-posts.liquid` and the `articles` instance in `templates/index.json`. Preset and homepage settings now agree. All Liquid, CSS, JavaScript, non-preset schema settings and other compositions are preserved.

- Existing Blog posts / Header / Heading / Text / View all button / Blog list / Blog card composition.
- Heading “Enjoy Our Articles” and Figma subtitle, centered header, 16px desktop / 10px mobile header gap.
- Page width, 80px desktop / 56px mobile vertical section padding; 48px / 40px section gap.
- Existing grid: three desktop columns, one mobile column, maximum three articles; 36px / 32px list gap, no carousel navigation or pagination.
- Left-aligned card content, square 4:3 images, 28px image-to-content spacing, no inline content padding.
- Added existing Blog card tag at the start: one uppercase outline tag, Body XS, relaxed tracking. H3 uses existing MD heading role with no line clamp; metadata includes date and author; description uses three-line limit; tertiary Read more has no icon.
- View all uses the native blog context with existing 16px arrow-up-right icon on both viewports.
- Blog selection is `malandra` in the section preset and local homepage instance; no remote picker/template save was used.

## Store content and media

Verified target store `layouthub-template-v2.myshopify.com`. Audited all existing blogs and articles before creation: no Malandra blog or matching articles existed. Created blog **Malandra**, handle `malandra`, ID `125925622059`, plus three visible articles with the exact Figma titles, excerpts, tags Trends / News / Trend and publication dates March 24 / June 11 / July 24, 2025. New handles are prefixed `malandra-`. Saved original English article bodies with introductions, headings and conclusions, SEO metadata and article-image alt text. Author is **Author name** per the setup-store skill; the example people named in Figma were not assigned as real authors.

Downloaded the exact three Figma source images; inspected source pixels, prepared 4:3 crops including the second image’s measured vertical transform, converted to genuine AVIF and decoded each result successfully. Uploaded once through Shopify’s content image picker, which stores the originals in Files; verified all three completed AVIF rows and copied their permanent CDN URLs. Shopify then generated JPG article covers. This is a verified platform conversion, not an AVIF cover implementation. The third mobile crop differs slightly from the desktop crop; the article resource supplies one shared cover.

Saved article readback confirms Malandra ownership, visible status, dates, Author name, tags, excerpt, body, SEO and the correct cover URLs/alt text. Full IDs, handles, original file URLs and cover URLs are in `malandra-blog-posts-content-2026-10-14.json`.

## Validation and limits

- Theme Check: **0 errors**, six existing `ExcessiveSettingsCount` warnings in unchanged blocks.
- JSON parses; configured IDs, select options, range bounds/steps, booleans, child allow-lists, block order and capacities validate for the section preset and homepage instance. Static IDs `header`, `blog-posts-view-all`, `blog-list`, `blog-card` match existing render calls.
- `git diff --check` passes. Unrelated working-tree edits are preserved.
- The existing localhost preview at port 9301 is blocked by upload errors in Collection, testimonial/image-grid/gallery/video sections and About us. These are outside this task. The open Theme Editor also has an unsaved session; it was inspected without changing or saving it. A rendered Blog posts desktop/mobile comparison and link traversal were therefore not completed. No new preview watcher, manual push, theme publication, Git commit or Git push was performed.

## Material gaps retained within preset-only scope

| Figma expectation | Existing configured behavior / missing control |
| --- | --- |
| Three full-width desktop editorial rows, content left and image right | Blog list accepts only 2–6 desktop columns; the nearest useful three-card grid is retained. Blog card horizontal mode places image first and cannot express Figma’s reverse order. No new setting or CSS was added. |
| View all directly below subtitle and before articles | Existing centered section shell places the static View all slot after the list. No section setting exposes its order. |
| Row separators and nested desktop/mobile content gaps | No existing row separator control or per-gap hierarchy in Blog card. Existing spacing controls provide the closest composition. |
| Figma article order March, June, July | Native Shopify blog articles are newest first; saved reference dates yield July, June, March. No existing order selector; dates are preserved. |
| Named authors in Figma | Author name is used under the setup-store author rule. |
| Exact desktop/mobile third-image crops | One shared article cover; the theme has no independent mobile article-image picker. |
| AVIF covers | Source Files are AVIF; native article cover derivatives are JPG. |

The requested preset and content work was completed within the initially selected skills’ configuration boundary. The follow-up below supersedes the layout limitations above.

## Authorized Arche custom adaptation — 2026-10-14

The owner subsequently requested using Arche's custom implementation to match Malandra Figma. Inspected Arche's section CSS, one-column Blog list normalization/classes, and customization record. Adapted the specific editorial pattern instead of copying Arche's unrelated typography, carousel changes or 448px image cap.

- `blocks/blog-list.liquid`: add Desktop columns **1**, permit one in runtime normalization, and expose grid-one-column/mobile-one-column classes. Existing four-column default, mobile preview options, carousel wiring and editor attributes are preserved.
- `sections/blog-posts.liquid`: scope custom geometry to the selected blog handle `malandra`. Page-width content respects the global page-width cap and margins while limiting its content region to 1600px. Single-column horizontal cards use text-left/image-right desktop flow, 48% content and 34.0625% image widths with responsive shrinking. Mobile retains native image-first stacking. Divider spacing consumes existing desktop/mobile list gaps; no divider after the last card. Header → View all → article list order overrides the shared shell deliberately, with 20/16px header-action gaps and the configured 48/40px action-list gaps.
- Preset and homepage both select grid/one desktop column and horizontal card layout. Existing child padding options express desktop gaps 36/16/20/28px and mobile 8/10/16/24px; mobile image-to-content gap remains 28px. Metadata uses XS, long date format, dot separator, and the contextual Author name without a prefix.
- Recorded both implementation paths in the active Malandra Customizations table for future base merges. No new JavaScript or editor listeners.

Validation: Theme Check **0 errors** (four existing warnings at the time of this follow-up), configured schema validation and whitespace checks pass. CSS geometry fixture built from the actual current section/block/shared styles confirms 1600px cards, 768px content and 545 × 408.75px media at viewport 1920px; View all precedes the list; only the first two rows have dividers. Viewports 320/375/768/1024/1920px have no horizontal overflow and all three image resources load; mobile cards switch to a single-column grid. The fixture uses decoded source images and representative text with fallback typography, so it verifies responsive geometry rather than exact full-storefront typography/content or Liquid execution. The browser's 15px reserved scrollbar reduces usable mobile content width to 328px at a 375px viewport; no extra theme margin was introduced.

Existing targeted tests: six of eight pass, including all five View all/blog-context checks. Two heading-schema checks fail in unchanged global heading normalization (`h1` versus legacy `display`) and the unchanged `_marquee-countdown-timer` label (`Heading 1`). Those failures are outside this layout change; no test or unrelated implementation was modified to suppress them.

Remaining differences: article order still follows native publication dates (July/June/March); original AVIF Files still generate JPG article covers; contextual author remains Author name; the third cover has one shared crop. Live storefront/Theme Editor lifecycle still needs a working Shopify preview. This task did not push, publish or save Theme Editor settings.
