# Countdown — Figma visual QA, 2026-10-20

**Result: close, with remaining mismatches; not a full visual pass.** Read-only QA of the running homepage instance. No theme configuration, implementation, media, or store data was changed.

## Scope and evidence

- Theme: Virelle, checkout `virelle-theme`, branch `theme/virelle-theme`.
- Instance: `templates/index.json` → `virelle_flash_sale`, type `countdown`.
- Preview: http://127.0.0.1:9300/ ; supervisor identifies development theme `192119800107`, store `layouthub-template-v2.myshopify.com`.
- Desktop: [48089:778](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48089-778), 1920 × 877.71px.
- Mobile: [48096:26088](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48096-26088), 375 × 768px.
- Related Style Guide supplied previously: node `43001:11865`; a new whole-style-guide audit is outside scope.
- Figma MCP was attempted and reported the View-seat tool-call limit. Per qa-section/figma-access, used read-only Chrome UI on the verified `minhle@beae.com` profile. Dedicated QA tabs avoided tabs already used by another session. Figma root Properties, text/number Inspect and canvas screenshots were read live. Earlier MCP design context in this chat is historical supporting evidence, not a new API result.
- Preview measured through CUA browser read-only DOM/computed-style access; fonts reported loaded, image complete. CSS zoom/visualViewport scale 1 and DPR 1.

Evidence directory: `output/qa/countdown-2026-10-20/` contains source canvas screenshots, rendered section captures, computed measurements and number Inspect text. Measurements are relative to the section root. Screenshot captures include the temporary keyboard focus ring on the CTA; that ring is not a normal-state mismatch.

## Viewport qualification

Desktop viewport 1920 × 1000 has a 15px desktop scrollbar, hence client width 1905px. The section's inner content is nevertheless exactly 1600px wide, matching the target, with two 800px columns. Horizontal centering is offset -7.5px relative to a scrollbar-free 1920px frame solely because client width is 1905px.

Mobile was measured twice: viewport 375 × 900 / client 360px, then viewport 390 × 950 / client 375px to compare a 343px content area with Figma. The latter is **not real mobile device emulation**: vw-based fluid headings resolve to 40.542px instead of 40px. Do not classify that 0.542px as a product defect. Native mobile 375px scrollbar-free rendering remains unverified. Temporary viewport override was reset.

## Comparison

| Property | Figma | Actual | Difference / status | Evidence |
| --- | --- | --- | --- | --- |
| Desktop structure | Content left, image right, equal columns | Same, 800px each | matched | Desktop measurements and source canvas |
| Mobile order/alignment | Centered copy, CTA, timer, then image | Same | matched | Mobile captures/measurements |
| Desktop content/section height | 1600px content; 877.71px section | 1600px; 877.703px | matched; subpixel rounding | Desktop measurements, root Inspect |
| Vertical padding | Desktop 96px; mobile 48px | 96px / 48px | matched | DOM and reference context/root token modes |
| Mobile image box | 343 × 294px, 7:6 | 343 × 294px at client375 | matched geometry | Mobile content375 measurements |
| Desktop image box | 800 × 685.71px | 800 × 685.703px | matched geometry | Desktop measurements |
| Photo identity | Woman in sage green activewear | Same original photo, no placeholder | matched identity; exact crop pixels unverified | Canvas and rendered captures, image reference |
| Background | #181818 | rgb(24,24,24), scheme-3 | matched | Root Inspect → current scheme → computed |
| Heading | Roboto Condensed 700, H1, 68/40px, 120%, -1.2px | 68px / 40px at CSS375, 120%, -1.2px | matched typography tokens; native-mobile metric caveat above | Computed data and design context |
| Eyebrow | Roboto Condensed500, 14/21px, 2px tracking, white; filled 8px square, 8px gap | Same values and filled 8px square | matched | Rendered computed styles/canvas |
| Body typography/color | Roboto400,16/24px,0.1px,#DFDFDF | Same | matched numeric attributes; exact wrap unverified | Fresh mobile text Inspect and computed |
| CTA | White fill/border, #1C1C1C text, Roboto500/14px/-0.2px; 56px desktop/44px mobile | Same colors/font settings and heights | matched inspected attributes | Computed button styles/reference context |
| Outline/separators | Outlined numbers, 3 colons; white 1px outside stroke | Present; CSS2px stroke with stroke-fill paint order and matching background fill | matched visible outline intent; CSS2px is not evidence of a double-thick outline | Fresh number Inspect says 1px outer; assets/virelle.css cascade |
| Timer label copy | Days / Hrs / Mins / Secs | Days / Hours / Min / Sec | mismatch | Live Figma canvas, DOM text |
| Timer label color | #FFFFFF full opacity | white at 72% alpha | mismatch, about #BEBEBE composited on #181818 | Figma Days Inspect vs computed color |
| Number-to-label gap | 0px | margin-top2px | mismatch | Design context + block CSS/computed geometry |
| Timer width | Mobile four40px units + gaps =328px; desktop approximately440px | Mobile324px; desktop436px | mismatch, approximately -4px total | Figma mobile 00/Days widths40px; JS-normalized units39px/67px |
| Intro maximum width | 688px | 690px desktop | mismatch, +2px | Design context vs Group max_width and DOM |
| Mobile total height | 768px | 771.313px at viewport390/client375 | unverified exact native-mobile delta; ~2px intrinsic label gap + ~1.3px vw-scaling artifact | Qualified measurements above |
| Exact wrap/crop/CTA width | Exact design line breaks/crop/width | Visual differences require normalized capture/device validation | unverified | See limitations below |

## Findings and causes

1. **Medium — timer labels on both breakpoints.** `blocks/countdown-timer.liquid` renders the shared locale keys `countdown.hours`, `countdown.minutes`, `countdown.seconds`, producing Hours/Min/Sec rather than the Figma short forms. The same block's `.countdown-timer__label` applies `color-mix(in srgb, currentcolor 72%, transparent)`; currentcolor is verified white from section scheme-3. The configuration is correct but component CSS reduces opacity. To match, give the custom style localized short forms and full inherited heading color; retain other styles' behavior unless separately requested.

2. **Low — timer vertical spacing.** `.countdown-timer__label { margin-top: 0.2rem; }` contributes 2px not present in Figma's Time stack. On mobile it increases the content stack and pushes the image down; on desktop space-between preserves total height and moves the number row upward. A custom-style-only margin reset would resolve this without changing shared styles.

3. **Low — timer widths.** Fresh Figma Inspect gives the mobile 00 and Days boxes width40px. Actual rendered number glyph boxes are about38.58px in the client375 measurement, and the runtime's `Math.ceil(maxWidth)` sets unit width39px. Four units yield a timer4px narrower than the expected328px; desktop has a similar4px difference. Font metrics/normalization are the likely source, but the exact font-file difference was not proved. Inspect the actual font face/version and custom-style unit sizing before changing gaps; existing gaps24px and colon tracks8px already match.

4. **Low — intro width.** The Group's `max_width:690` approximates Figma688 because its current schema step is10px. This is a known2px configuration limitation; do not compensate by changing global page width or adding forced line breaks.

## Missing evidence and nonvisual notes

- No claim of pixel-perfect crop or line wrapping. The Figma mobile paragraph is343 ×72px and Roboto400/16/24/0.1; the actual paragraph matches those numeric attributes at client375. Native mobile emulation was unavailable through the used viewport capability, and fluid vw scaling affects wider surrogate viewports. A fresh native375 comparison should precede any wrapping fix. Read-only DOM Range extraction did not provide line rows in the supported browser scope.
- The photo is loaded and its slot matches7:6. The currently selected mobile image source reported natural266 ×228px in one readback versus343 ×294px display. This is a possible sharpness issue requiring network/srcset/CDN verification; it is not yet classified as a confirmed wrong-source or wrong-crop defect. Desktop readback was1310 ×1123px for an800 ×685.7px slot. Preserve this evidence rather than asserting original1638px is what every client receives.
- The timer intentionally advances, so its current digits cannot equal the static00:12:18:06 mockup. Runtime is recurring12h18m, not a fixed tonight deadline. CTA destination remains unset in this section instance; these are content/function concerns outside visual matching.
- Add section preset was inspected locally but not newly inserted through Theme Editor. Findings above refer to the existing homepage instance. Full editor lifecycle, interaction/release QA and all-scheme auditing are outside this visual task.
- Historical problems no longer reported: empty media, missing colon/outline, original1504px content width, old button45px mobile height, and the old outlined eyebrow square. Current evidence supersedes those old audit findings.

## Conclusion

The current Countdown has the correct principal layout, photo, scheme, typography settings, outline and separators. It still has confirmed label-copy/color and small spacing/width differences. Exact native-mobile wrap, crop/sharpness and pixel-level equality remain unverified. No fixes were applied in this QA run.

## Preset-only correction — 2026-10-20

Owner requested fixing differences expressible through existing preset controls. Updated only Countdown's registered preset and homepage instance: intro Group `padding_right:2`, `customize_mobile_padding:true`, with all mobile padding overrides0. This is an explicit configuration workaround for the Group max-width range step10: the outer Group remains690px, while its content box becomes688px. It does not claim a new688px schema max-width. Mobile retains full available content width without the2px inset. No CSS, Liquid implementation, locale, shared global setting or media changes.

Fresh preview readback: at viewport1920 text width688px / parent690px / right padding2px; at viewport375/client360 text width328px and right padding0px. The earlier intro-width finding is resolved visually through this documented padding workaround. Preset and homepage settings are synchronized; unrelated sections/order preserved.

Remaining confirmed differences requiring implementation/localization rather than existing preset values: Hours/Min/Sec labels versus Hrs/Mins/Secs; label opacity72% versus100%; number-label gap2px versus0px; timer total width approximately4px too narrow. Exact native-mobile wrap/crop/sharpness remain unverified as above. Do not use a global color/font change or invented setting value to mask these.

Validation after the preset correction: Theme Check0 errors, 7 warnings across the current worktree; scoped diff whitespace check passes. No explicit theme push/publish or Theme Editor save.

## Authorized implementation fixes — 2026-10-20

Owner subsequently requested fixing the remaining differences. Changes in `blocks/countdown-timer.liquid` apply only to `with_labels_colon`: visible labels use new English locale keys for Hrs/Mins/Secs, while full labels remain in announcements/data attributes; label margin-top is0 and label color inherits the full-opacity number color; minimum unit width follows `--countdown-number-size`. At the reference68px/40px number sizes, the intended tracks are68px/40px, giving440px/328px total timer widths with existing24px gaps and8px colon tracks. Wider/localized labels and3+ day digits can still expand through the existing equal-width runtime. No JS changes or fixed pixel widths were introduced. Other styles retain their labels, spacing and color.

One-off Liquid verification rendered all five styles and passed custom labels/separators, original style labels, duration44280 seconds and full accessibility labels. Scoped CSS bindings and whitespace checks passed. Theme Check: 0 errors, 7 warnings. Browser use is now disabled in Work settings: **fresh computed widths and screenshot comparison are unverified**, so440px/328px are expected from the CSS contract rather than new browser measurements. Earlier confirmed findings for copy/color/gap/width are implemented but await visual recheck. Native-mobile wrap, crop and source sharpness remain unverified. No push/publish or Theme Editor save.

## Native Chrome visual recheck — 2026-10-20

Browser API remains disabled, but native Chrome CUA succeeded on this attempt. Opened the exact local Countdown anchor and inspected the rendered desktop section, then Chrome DevTools Responsive at375px wide /100% zoom. A retained page zoom initially magnified the responsive page; Cmd+0 restored100% before assessment. Closed DevTools after checking. No theme changes.

Fresh native screenshots: `output/qa/countdown-2026-10-20/recheck-desktop-native.png` and `recheck-mobile-native.png`. Prior fresh Figma canvas captures from this QA are the design reference; no new Figma fetch was made on this recheck. This pass uses UI/screenshot evidence, not new computed-style measurements.

The new short labels Days/Hrs/Mins/Secs, full-white visible labels, outlined digits and three colons are now visibly present. The previous number-label gap and narrow timer appearance are resolved visually. Mobile375 now shows the same three description lines as the reference: “Massive discounts on your favorite fits. Go” / “ahead score big savings on our best-selling” / “collection of activewear.” Centered eyebrow/heading/CTA/timer, followed by the matching sage-green photo, agree with the mobile source. Photo framing at the head/shoulder and the7:6 box appears consistent with the source. Desktop retains the intended left content / right photo and timer anchored at the content bottom. Sticky header obscured the eyebrow at the initial anchor position; scrolling upward exposed it and confirmed that it is present. The header overlap is a QA scroll-position artifact, not missing content.

**Updated result: the previously confirmed Countdown visual mismatches are resolved in this native visual pass; the section is visually close to both references, with no new material mismatch observed.** Exact pixel equality, new computed width/color readback and formal image-resolution/network verification are still not claimed. Live timer digits intentionally differ from the static design. CTA destination/campaign deadline remain the content dependencies documented above.
