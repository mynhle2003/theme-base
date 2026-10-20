# Virelle global settings and card price style

> Superseded for Price CSS on 2026-10-20: user revoked the hardcoded price fallback. Font/size use current Theme Settings; removed the remaining `.price--product-card` rule from `assets/virelle.css` (tracking 0.1px, gap 6px, heading color). Price now uses shared CSS/cascade, inherits Body tracking, and retains sale/compare-at/unit tokens. Historical measurements below are evidence, not rules to restore. Gap returns to shared 0.5rem; no Figma style calibration or settings-data reset was performed. See `../theme-settings-rebuild-team-base.md` section 2.8.

User authorized local `config/settings_data.json` changes and theme-specific product-card price CSS when existing controls are absent. Build-preset skill and its Theme Style Guide routing were updated accordingly in agents-build-themes.

Source: Figma `yTXlAfT0miBGgRuuYM4OMp`, desktop `48002:1687`, mobile `48096:20121`; high-fidelity context and screenshots inspected. Price: Roboto Regular 400, 14px, 150% (21px), tracking 0.1px, heading color, row gap 6px for both viewports.

## Configuration

18 existing Theme Settings mapped in `virelle-global-settings-2026-10-19.json`, with old/new values. Changes include desktop margin 50px, mobile button 44px/22px inline padding, button text 14px/500/uppercase, mobile card title 18px, media-to-info spacing 20px, info gap 12px, swatches above title at 16px square ratio and 6px gap, sold-out text white. Saved presets, header comments and unrelated current values retained.

These shared settings affect all consumers in this theme, including other product grids, buttons and full-width containers. They are configuration, not custom implementation. Existing Roboto body font and Roboto Condensed heading font are retained. Body base size remains 16px so normal text is not changed merely to size card prices.

## Theme-specific CSS

Prices schema exposes sale-first/currency controls; Product cards has title and layout controls but no price typography/tracking/gap option. `assets/virelle.css` overrides the existing price custom properties inside `.price--product-card` and sets the measured tracking, color and gap. Loaded once immediately after critical CSS. Shared base CSS and price Liquid are unchanged. Regular and sale prices inherit this typography; sale color, compare-at size/color/opacity, unit price, currency formatting and data are retained. Product-page/cart price contexts do not match the selector. Price changes after variant selection retain the same component class.

Custom record: `../theme-customizations/virelle-theme.md`. No new schema settings, price data changes, Theme Editor save, explicit push or publication.

## Verification limits

Local JSON parsed, changed settings checked against declared IDs/options/min/max/step, saved presets compared unchanged. Theme Check: exit 0, zero errors and six existing warnings. `git diff --check` passed in both repositories. Skill quick_validate could not run because Python environments lack PyYAML; frontmatter was checked separately. Browser use was disabled in Work settings in the previous pass; desktop/mobile visual preview of these new changes is unverified.

Remaining control gaps include H2 50px (current schema step supports 48px), outlined inactive tabs, mobile tab scrolling/card peek, card-title weight (heading font is bold rather than source medium), eyebrow font/tracking, button tracking (-0.2px versus existing options). No unrelated CSS override was added under the price-only exception. Existing button tracking is retained rather than using an unsupported setting value. Existing quick-add appearance is retained.
