# Zevra Press custom implementation — 2026-10-19

User authorized theme-specific implementation matching desktop Figma 47062:15032 and mobile 47230:15700, prioritizing settings over fixed presentation CSS.

Retained existing controls for 1024px section maximum width, center alignment, 144/80px vertical section padding, 32/28px image spacing, 16px image gap, 185/170px logo width, 2:1 custom media ratio, scheme, autoplay and pause on hover. All five new padded AVIF assets remain selected.

Added Press Quotes options for logo position (top/bottom), initial slide (clamped to available count), inactive logo opacity, fading row edges, show navigation, existing shared arrow styles/icons, control gap, progress width and independent desktop/mobile navigation spacing. Preset and homepage use top, third slide/DIOR, 60%, edge fading, icon-only long arrows, 32px control gap, 160px desktop progress and 32/28px navigation spacing. Structural layout CSS consumes scoped option variables; color inherits scheme tokens. Shared navigation snippet reused without changes. Mobile progress fills available space.

Press Item now accepts the existing Text block for the description, using its native md/16px size and color control. New content gap and opt-in quote title desktop/mobile sizes, tracking and line-height are configurable. Preset uses 20px content gap, 26/22px title, 2px tracking and 130% line height. Existing global typeface and text case remain inherited. Size overrides are gated by their checkbox.

Reveal runtime reuses existing goTo, animation, logo centering, autoplay and Theme Editor lifecycle. Added initial-index input, scoped previous/next controls and progress synchronization; resize recenters the selected logo. New listeners share the existing AbortController. Consumers without the new attributes still start at index zero with no new UI.

Validation:
- Full Theme Check: zero errors, six existing warnings. JSON/schema setting IDs, options, range bounds/steps and nested block allow-lists pass; JavaScript syntax and git diff --check pass.
- Existing autoplay clock suite: 12/12 pass. Broader testimonial suite: 4 pass, 2 unrelated failures in migration/static-slot expectations; those implementation files and tests were not changed in this task.
- Existing development watcher at localhost:9300 synchronized the change. Resolved initial upload-order failure by resynchronizing Press after child block schemas, then homepage after schemas.
- Desktop browser: five images load, DIOR initially selected, logos above title, 26px title / 33.8px line height / 2px tracking, native 16px/24px description. Previous/next change selection and progress; selected second -> Next -> selected third with progress 0.6. Screenshot /tmp/press-desktop.png.
- Mobile CSS retains 768px breakpoint, 22px title, 80px padding, 28px spacing, flexible progress and selected-logo centering. Live 375px iframe QA was blocked by storefront frame policy; native mobile viewport and Theme Editor add/duplicate/save/reload remain unverified.

Remaining measured differences: existing logo-width steps allow 185/170px versus Figma 186/168px; body tracking inherits native Text (normal versus Figma 0.2px); progress reflects actual selected slide (3/5) rather than reproducing the static drawing's arbitrary fill. No global typography/palette overrides or custom CSS fields added. No manual push, publish or commit; existing dev watcher remains running.

## User correction: no new options — authoritative final state

Removed every newly introduced setting from Press Quotes and Press Item. Both settings arrays now match HEAD exactly. Retained native Text in the allowed child list. Theme-specific structural behavior is fixed: logos above content, third item initially selected, 60% inactive logo opacity and edge fading, shared icon-only long arrows with progress. Existing image spacing controls layout/control spacing; existing image gap controls logo spacing and base quote gap; existing heading padding_bottom=4 adds to the 16px quote gap for 20px separation. Existing heading custom size is 26px desktop; mobile consumes global heading-lg (22px). Tracking is scoped to Press title (0.2rem). Progress width is 16rem desktop and fills available mobile space. Added setting keys removed from preset and homepage. Earlier option descriptions are superseded.

## Final user-approved Logo layout group

User permits retaining Logo layout only. Restored Logo position (top/bottom) and Fade logo row edges. Preset/homepage select top and fading. First selected quote and Inactive logo opacity remain removed: third/DIOR selected through fixed data attribute and shared runtime; inactive opacity fixed at 0.6 in Press CSS. No other new settings remain.

## Navigation and Pagination groups — final extension

User requested groups matching Collection tabs and explicitly requested independent Show navigation on mobile. Press Quotes now exposes the Collection tabs navigation position/style/icon/behavior vocabulary with independent desktop/mobile visibility. Desktop inside/outside/bottom positions work; mobile keeps the Figma bottom arrangement. Hover behavior is desktop-only and keyboard focus reveals controls. Pagination exposes progress_bar/bullets, independent desktop/mobile visibility, top spacing, limit width and maximum width. Conditional visibility is adapted to block ownership without the irrelevant product carousel layout gate. Each setting binds to markup, scoped CSS or shared navigation snippet; bullet clicks use the same reveal goTo and AbortController as arrows/logo clicks, and change events synchronize aria-current. Both navigation and pagination hidden remove the controls row for that viewport. Preset and homepage explicitly enable navigation/pagination on both devices and retain bottom/icon-only/long-arrow/always, 32/28px spacing and 160px limited progress width. First selected quote and inactive opacity remain fixed with no restored options. Full Theme Check zero errors/six warnings, setting IDs/options/range steps and preset/instance config validation pass; autoplay suite 12/12 pass and JS syntax/diff checks pass. Native mobile and full Theme Editor lifecycle remain pending.

## Preset synchronization after Navigation/Pagination controls

Rebuilt the Add section block composition from homepage Press, retaining the original preset name/category and the static quotes ID. Both surfaces use arrows enabled desktop/mobile, bottom/icon_only/long_arrow/always; progress_bar visible desktop/mobile, desktop width160px, spacing32px desktop/28px mobile; centered1024px content, padding144px desktop/80px mobile, 2:1 padded logo media, top logos and edge fading. No extra settings or global typography changes introduced.
