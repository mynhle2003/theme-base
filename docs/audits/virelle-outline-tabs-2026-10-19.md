# Virelle Outline tab layout

Countdown follow-up correction: the earlier no-background branch was still transparent/centered stroke, explaining the user's remaining overlap. Homepage `virelle_flash_sale` uses section scheme-3 with no media background behind the timer. No-background digits and separators now use the shared paint-order mask with the inherited scheme background (or `--countdown-outline-surface` for an explicit solid surface). The component no longer forces a single centered stroke there. Actual media surfaces can still opt into the transparent modifier. This supersedes the earlier no-background migration behavior; rendered verification remains pending.

## Theme-wide consumer migration

On user request, all existing glyph-outline options were inventoried from schema and text-stroke consumers. In addition to Tab layout, the three checkbox consumers are `countdown-timer.outline_text`, `_marquee-heading.outline`, and `collections-with-background.outline_text` (rendered by `collection-background-item`). All now attach the reusable class conditionally. Countdown adds it only to its four values and three colon separators when the supported style enables Outline. Marquee preserves color/opacity settings. Collections preserves selected-state fill and unoutlined product counts. Existing independent stroke-drawing rules were removed; selected/forced-color resets remain consumer-specific.

Utility now supports `.virelle-text-outline--transparent` to preserve media backgrounds with a single-width transparent centered stroke. Opaque Countdown units use their actual unit background; no-background timers and separators use transparent fill. Marquee uses its section's solid background or transparent mode for section image backgrounds. Collection titles overlay images/video and use transparent mode. The shared utility's solid-fill masking must not be assumed to work over an unknown ancestor photo/gradient; such consumers should set the transparent modifier or matching fill explicitly.

Verification: Countdown tests 3/3 passed (opt-in styles, inline stale flags, labels, duration and colon count). Liquid render checks passed for Marquee outline on/off with/without section image and collection title outline on/off with product count markup. Schema inventory and text-stroke search found no remaining independent glyph-outline drawing implementations. Theme Check: zero errors, seven warnings in unrelated files; diff check passed. Browser visual verification remains unavailable. No saved option values, presets or global settings were changed in this migration.

Optical calibration follow-up: user reported a faint outline after the outside-stroke approximation. Tab layout now sets `--text-outline-width: 1.25px` on its Outline root (both viewports), retaining source #999. The reusable utility default stays 1px for other consumers. This deliberately compensates for browser stroke/fill antialiasing; it is not a new measured Figma value and has not been visually verified. No opacity/blur rule was found in the inspected tab styles.

Follow-up: user requested cleaner strokes and a class reusable across the theme. Text rendering now belongs to `.virelle-text-outline` in `assets/virelle.css`, attached to the Outline block root and inherited by its labels. It uses `paint-order: stroke fill`, a doubled centered stroke and surface-color fill to mask the inner stroke; selected labels reset to normal fill/no stroke. The CSS variables, background limitations and update rule are documented in the customization record. The earlier centered-stroke note below describes the fallback only. Liquid render checks confirmed that Underline/Button/invalid-value fallback do not receive the new utility class.

User-authorized theme-specific implementation, 2026-10-19. Add `outline` / “Outline” to the existing Tab layout Style select, retaining Underline/Button and the default Underline. Active style remains a Button-only control.

Figma file `yTXlAfT0miBGgRuuYM4OMp`: collection tabs desktop `48002:1687`, mobile `48096:20121`. High-fidelity contexts/screenshots inspected in the previous pass. Direct read of inactive text `48007:10139` / `48096:20129` confirms no visible fill and a 1px #999 outside stroke; selected `48007:10137` has #181818 fill and no stroke.

## Binding and behavior

- `blocks/tab-layout.liquid`: Style select → validated Liquid value → `.tab-layout--outline`.
- `snippets/tab-layout-styles.liquid`: inactive transparent fill with 1px CSS text stroke; selected heading color; no underline or button border/background. Inactive hover strengthens stroke to heading color without selecting. Unsupported text-stroke browsers retain readable filled text. Forced colors use system text/selected colors. Focus ring stays inset inside the horizontal scrolling region.
- Outline uses existing gap settings (40px desktop / 20px mobile in the homepage preset), rather than fixed grid multipliers. Mobile keeps one row with native horizontal scrolling; vertical block layout remains available in horizontal sections.
- `locales/en.default.schema.json`: translatable Style label “Outline”. Existing locales fall back to the default schema locale.
- Collection tabs Add section preset and homepage `collection_tabs_ihC66t` use Outline. Other template content and block default/preset styles are retained.
- JS, ARIA selection, keyboard navigation, panel loading and Theme Editor lifecycle are unchanged. The CSS reads the existing `aria-selected` state, so selecting a different tab swaps the filled/outlined appearance without new listeners.

Custom record: `../theme-customizations/virelle-theme.md`. No store mutation, explicit theme push/publish or commit. Do not copy the option into shared base as part of this theme-only request.

## Verification

Schema/locale/template JSON, translated label and preset/instance selection passed local validation. A Liquid render check passed for Underline, Button, Outline and invalid-value fallback, retaining gap variables and tablist ARIA. Existing tests: 15/18 passed; two promo tests fail because their standalone renderer cannot resolve `product-list-promo-styles`, and one separate collections-with-tabs color test cannot resolve `heading-size-token`. Their source blocks/snippets and test files are unchanged against HEAD; the failures do not exercise the new outline CSS. The collection-tabs deferred/selection/lifecycle tests passed. Theme Check: exit 0, zero errors and six existing warnings. `git diff --check` passed.

Browser use is disabled in Work settings, so rendered desktop/mobile and interactive editor checks remain unverified. CSS text-stroke uses the browser's centered stroke; exact outside-only Figma stroke rasterization is not claimed. H2 remains the supported 48px global setting versus Figma 50px; mobile card peek and eyebrow spacing are separate remaining gaps.
