# Countdown with marquee — 2026-10-21

## Contract and build plan

User requests a new section, a dedicated marquee restricted to Text/Heading/Eyebrow, a middle Group, locked outer layout, and replacement of the homepage Countdown. This explicit implementation request precedes the preset-only step.

- Role/placement/context: dynamic content section in JSON templates; no resource context; existing homepage instance keeps its ID and order.
- Ownership: section owns fixed three-slot grid and responsive rail placement; static Group owns editable central content; private marquee composes the shared marquee renderer/runtime and owns its restricted child allow-list. Shared typography and color tokens remain global.
- Slots: static left/right `_countdown-marquee`, static middle `group`; no dynamic outer blocks. Marquee children only `_marquee-heading`, `_marquee-text`, `eyebrow`. Private block has no Add block preset outside its owner section.
- Runtime: shared marquee clone/resize/font/reduced-motion/editor load/unload lifecycle; countdown retains existing timer runtime. Rotated marquee measurements must use local layout geometry rather than transformed screen geometry.
- Responsive: desktop two vertical rails, CTA left/timer right; mobile hide left rail, retain right rail, content → timer → button. One semantic DOM tree; CSS grid places the CTA on desktop without duplicating interactive content.
- QA: schema/static-slot/preset/template validation, shared runtime regression, Theme Check, desktop/mobile browser comparison, overflow, reduced motion, duplicate/reload checks where available.

## Design evidence

Figma MCP repeatedly returned “Authentication … requested and accepted” after retry without design data. User explicitly instructed computer use fallback. Read via CUA/Chrome beae.com profile (inventory includes minhle@beae.com signed-in mail tabs), requested file yTXlAfT0miBGgRuuYM4OMp only.

Desktop48205:19162:1920×365; inner scheme3#181818, full width with margins. Root gap token20=80px. Left rail48218:12953:365×146 rotated90°, opacity40%, gap token3=12px, top/bottom token8=32px. Text48218:12955:“40% Off”, H1 Roboto Condensed700,120%,-1.2px, uppercase, white1px outside outline. CTA48205:19164:644×237,gap token8=32px; header149px,gap12; headingH2,height60px,tracking-.6px; eyebrow→heading gap8px. Intro/timer desktop side by side.

Mobile48249:14725:375×414; content container343px; middle group48249:14734 width267px,padding40px top/bottom and24px left,gap24px; body48249:14736 width243,height96,Roboto400,16/24px,.1px tracking,#DFDFDF. Root gap8px leaves68px right rail. Left rail absent. Content, timer, CTA order from canvas. No media assets required.

## Access preference

For this user's work, if Figma MCP cannot connect, use computer use on the authenticated Chrome profile to read the supplied Figma link. Do not repeatedly request the same connector authentication. This records the user's explicit preference from this chat.

## Implementation and preset result

Created `sections/countdown-with-marquee.liquid` and private `blocks/_countdown-marquee.liquid`. The three outer slots use static IDs `marquee-left`, `content`, `marquee-right`, so they cannot be reordered/removed as dynamic section blocks. The middle is a shared Group. Its children remain editable. The dedicated marquee permits only `_marquee-heading`, `_marquee-text`, `eyebrow`; it has no public block preset. Shared markup/CSS/JS moved to `snippets/marquee-render.liquid`, preserving the general Marquee schema/presets byte-for-byte. Fractional local widths replace transformed screen widths in loop-distance measurement. Dedicated headings carry decorative outline-square separators without expanding the child allow-list.

The single Add section preset and homepage `virelle_flash_sale` instance use identical configuration. Preserved template order, unrelated sections, copy, existing eyebrow artwork and duration settings. Original `sections/countdown.liquid` remains available. No global typography/palette settings changed.

Added opt-in timer style `with_labels_compact` to the existing timer kernel: Days/Hrs/Mins/Secs from existing translations, no colons, normal-case/full-opacity labels, zero unit padding, gap64px desktop/16px mobile. Default styles and timing/accessibility runtime are unchanged. This avoids the observed default `Hours` label expanding mobile units to62px and clipping the last unit. New style measured39px mobile units and204px total at client375. The outer section adapts tablet to stacked central content and reduces gaps on very small screens using the content container width.

## Verification and limits

- `node --test tests/countdown-marquee.test.cjs`:3 passed. Rendered compact/standard/colon/numbers-only timers verify duration44280s, localized labels and separators. Static outer slots/private allow-list and shared renderer/editor-attribute ownership pass.
- Validated32 nested preset/template blocks: existing setting IDs, option values, range bounds/steps, allowed child types. Unrelated template data/order unchanged; existing Marquee schema/presets unchanged.
- Shopify Theme Check:0 errors,8 warnings in unrelated files. Scoped `git diff --check` passed.
- Actual running development storefront at `http://127.0.0.1:9300/` accepted the section/static slots/shared snippet and rendered all three regions. Existing development watcher performed synchronization; no explicit push/publish or Theme Editor save was run.
- Desktop browser viewport1920 (client1905 due15px scrollbar): inner width1805px versus source1820px; height365px matches source. Native shared marquee runtime initializes rails (`marquee--ready`, clones and animation), center content/timer/CTA and outline rails visually match the supplied design. Moving digits/rail phase naturally differ from the static source.
- Mobile viewport375 (client360): height414px, source414px; left rail hidden, right rail visible, content→timer→button, no horizontal overflow. Viewport390/client375 additionally confirms343px inner width and204px timer; height415.125px is affected by shared vw typography scaling. This latter check is not native375px device emulation.
- Screenshot: `/tmp/countdown-marquee-qa/mobile.jpg`. Desktop screenshots were inspected inline. Later browser control repeatedly timed out, so saving the desktop screenshot and interactive tablet/320px checks were unavailable. Tablet/small-screen CSS passed static checks; no visual pass claimed for those sizes. Theme Editor add/duplicate/save/reload/select interactions and live reduced-motion toggling were not exercised; existing shared lifecycle code is retained.
- Content dependencies retained: SHOP SALE has no URL; timer is illustrative recurring12h18m, not an actual fixed campaign deadline.

## Responsive gap priority follow-up

Owner requested the timer's internal gaps to shrink first, then the central Group's gap, while preserving Figma spacing whenever the actual container permits it. Replaced viewport-specific timer gaps with a timer-owned inline-size container: the four measured unit widths stay intact and the three gaps consume only remaining space, capped at64px desktop/16px mobile. Removed the earlier mobile viewport formula. A section-scoped custom element observes central Group/unit sizes, keeps the parent gap at its configured80px until the timer reaches zero internal gap, then reduces the parent gap. It stacks only when two zero-gap columns cannot fit. This replaces the unconditional1199px tablet stacking rule. ResizeObserver and animation-frame work are cleaned up on disconnect; reconnected sections initialize once.

Real development storefront measurements via CUA/Chrome (viewport widths include a15px desktop scrollbar):

| Viewport | Group width | Parent gap | Timer gap | Timer width | Timer/page overflow |
| --- | --- | --- | --- | --- | --- |
|1920|1353|80|64|460|none|
|1280|713|80|16.167|316.5|none|
|1200|633|80|2.833|276.5|none|
|1100|777|80|29.5|348.5|none|
|1024|701|80|20.833|310.5|none|
|900|577|80|5.5|248.5|none|
|768|445|21|0|212|none|
|375|252|24 vertical|16|204|none|
|320|197|24 vertical|5.667|173|none|

At1920 after resizing back from320, the controller restored horizontal layout,80px parent gap,64px timer gap and365px section height. Mobile375 remains414px high. Shared font scales make unit widths vary by breakpoint. These checks supersede the earlier unverified tablet/320px statement. Native scrollbar-free device testing and interactive Theme Editor lifecycle are still unverified.

Four tests pass, including actual allocation-helper boundaries proving timer-first/parent-second compression and recovery. Theme Check:0 errors,8 existing warnings. Whitespace check passed. Screenshot:`/tmp/countdown-marquee-qa/responsive-desktop.jpg`. Temporary viewport reset after QA.
