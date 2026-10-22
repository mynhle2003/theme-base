# Blog posts — Kinetra, 2026-10-21

Updated existing `Blog posts` preset in `sections/blog-posts.liquid` and homepage instance `blog_posts_cLyPkK` in `templates/index.json`. Kept one default preset, original name and base `main` category `Blog`. Configuration only; implementation, schema controls, global Theme Settings, homepage order and unrelated instances preserved against the pre-task snapshot.

## Design evidence

Figma MCP returned missing edit access, not quota. The owner explicitly authorized read-only CUA/Chrome fallback and requested that future runs use it without asking again. Read both supplied frames through Chrome profile beae.com; initialization records already identify this profile as minhle@beae.com. Updated the shared source rule at `agents-build-themes/skills/build/preset/theme-style-guide/references/figma-access.md`. No Figma writes or sharing changes.

- Desktop `48190:17624`: 1920 × 883.67px, white background, vertical padding token24 =96px. Container `48190:17625`: 1600px wide, gap token12 =48px. Row `48190:17627`: horizontal, gap token5 =20px. Card `48205:18578`: 520 ×450.67px, gap token5 =20px. Image `48205:18579`: 520 ×346.67px, ratio3:2. Content `48212:4675`: gap token2 =8px, height51px; Info `48212:4674`: gap token3 =12px, height84px. Heading text is Roboto Condensed700, uppercase, line-height140%, tracking0.
- Mobile `48249:14908`: 375 ×1346px, vertical padding token12 =48px. Container `48249:14909`: gap token8 =32px. Row `48249:14911`: vertical, gap token6 =24px, height1041px. Card `48249:14912`: width343, height322.67px, gap token4 =16px. Image `48249:14913`: 343 ×228.67px, ratio3:2. Content `48249:14915`: gap token1.5 =6px, height49px. Info `48249:14914`: gap token2 =8px, height78px.

## Existing-control mapping

- Existing section supplies centered header, 48/32px section gap and 96/48px vertical padding.
- Existing Blog list remains grid, three desktop/one mobile column, max3 posts. Desktop gap stays20px; mobile gap changes32→24px.
- Existing Blog card changes ratio4:3→3:2 and image-to-content padding0→20px desktop /16px mobile. Card child gap20→0px; Title owns8/6px top padding and Meta owns12/8px top padding. Tag → Title → Date order retained. No description.
- Header square reuses the verified8×8 filled square from the existing Timeline/Hero composition through the existing custom icon setting. No new icon renderer or asset.
- Existing solid View more configuration retained for desktop/mobile.
- Existing Kinetra blog and its three published articles/covers reused. No new article, media upload or store content mutation. IDs and original-image receipts remain in `docs/theme-init/kinetra-content.json`.

## Verification and limits

- Shopify Theme Check:0 errors,8 existing warnings.
- Recursive instance/preset settings IDs, types, option values, ranges/steps, block allow-lists and order:PASS. Preset name/category match `main`.
- Section implementation and schema outside presets identical to pre-task snapshot. Unrelated homepage sections and order identical. Scoped whitespace check:PASS.
- Chrome preview on existing localhost9300 loaded the three correct article titles, tags, dates and links after configuration. Readback confirms View more is absent with exactly3 articles.
- Final screenshot/computed geometry and mobile preview checks could not complete: Computer Use returned “Local browser use is disabled in Work settings”. A temporary1920×1000 viewport had been set before this interruption; browser reset was unavailable once access was disabled. No browser screenshots saved for this task. Theme Editor lifecycle/Add section runtime inspection remains unverified.
- Shopify toolkit validator unavailable because bundled `@shopify/theme-check-common` is missing; Shopify CLI Theme Check and direct configuration validation passed. Skill creator quick validator unavailable because PyYAML is missing; frontmatter name/description, shared-reference discoverability and focused workflow diff checked directly.

## Remaining differences

1. Figma shows View more with3 cards. Existing section only renders it when blog article count exceeds max_posts (3). Retained native condition and all3 reference cards; did not invent a fourth article or change implementation.
2. Existing medium date format displays Aug08,2025 instead of Figma08Aug2025; no existing option for the exact order.
3. Shared Heading XL remains inherited (50px desktop versus Figma's approximately48px); no global typography change based on this section alone.
4. Native Meta zero bottom padding can fall back to4px in its CSS; settings were kept at0 and implementation unchanged. Final card heights/gaps require browser geometry verification.

Local files only. Existing development watcher may pick up configuration. No explicit theme push, publish, Theme Editor Save, commit or Git push.

## Fourth article and output-check follow-up

Owner authorized a fourth article and an image-position fix. Created and read back published article633829228843, “From studio to street: everyday activewear styling”, in Kinetra. Date07Aug2025 keeps the original three08Aug2025 homepage articles first. Reused the existing cafe AVIF; Shopify generated a JPG article cover. Blog now has4 published articles, pagination exhausted, with max_posts3 unchanged. The native View more data condition is satisfied; actual button visibility remains unverified. Receipt and full authored copy: `blog-posts-fourth-article-2026-10-21.json`.

The optional new Figma node48425:14584 could not be read; the article is original demo copy rather than a transcription of that node. Owner reported re-enabling Local browser use and explicitly allowed native Computer Use, but the browser inventory continued to report disabled and two native Chrome attempts timed out. Image-position correction remains unresolved, not claimed fixed. No speculative crop values or shared CSS changes applied.

Build-preset now routes to a mandatory rendered-output check covering every image slot, source/currentSrc, crop/zoom/focal point, visible subject landmarks, desktop/mobile and actual control visibility. Blog content guidance links to the same source rule. Changed skill links/frontmatter and whitespace checks pass; unrelated skill work preserved.

## Preview investigation — View more restored

Read-only process inspection confirms localhost9300 runs Shopify theme dev with `--path` pointing to this Kinetra worktree. Fresh HTTP HTML already contained3:2 media and20/16px content inset; it still omitted View more despite the fourth published article. The cause was a static-block lookup through section.blocks, which cannot expose Blog list settings.

Fixed section/list communication using the existing Featured collection source-comment pattern: capture static Blog list once, read its actual normalized max_posts and blog handle, retain the strict article-count overflow gate. No schema/config changes.3 regression tests pass. Fresh preview HTML verifies `<!--blog-list-source:kinetra:3:end-blog-list-source-->`, exactly3 cards and both View more links to /blogs/kinetra. This verifies server HTML, not final browser geometry; crop correction and visual desktop/mobile QA remain unresolved.

Theme Check after static-list fix:0 errors,8 existing warnings. No explicit push/publish, Theme Editor Save, commit or Git push.

## Approved cropped-cover replacement

Owner explicitly accepted cropped images. Applied Shopify CDN region crops to the existing original AVIFs: Collection(0,260,1200,800), Fashion(0,120,1200,800), Story(0,150,1200,800). These are visual landmark estimates against the previously inspected Figma screenshots, not extracted Figma transform values. Downloaded the cropped CDN output, decoder-checked1200×800, re-encoded genuine AVIF and visually inspected all three local PNG previews. No generative editing or local pixel crop was used. Uploaded via Shopify plugin and updated only the three existing article cover URLs/alt text. Original Files and original article-cover URLs retained in rollback receipt.

Readback confirms all three ArticleImage renditions1200×800 and no mutation errors. Fresh localhost9300 HTML contains all three new crop-3x2 cover URLs and View more, exactly3 cards. Existing global typography, theme config/code, dates and fourth article unchanged. Shopify creates JPG cover renditions; AVIF originals remain in Files. Assets/previews: `output/blog-posts-crops/`. Receipt: `blog-posts-cropped-covers-2026-10-21.json`. Final desktop/mobile browser geometry and exact Figma visual match remain unverified while browser connection is unavailable.
