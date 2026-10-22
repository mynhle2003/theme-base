# View all mobile width — virelle-theme, 2026-10-22

Fixed two shared rendering defects without changing settings/schema or saved composition:

- `assets/critical.css`: full-width mobile actions row remains, but the shell no longer forces width100% onto ordinary View all wrapper/button. Existing `full_width_mobile` modifier remains the sole width owner.
- `blocks/tabs-view-all-button.liquid`: mobile Fit explicitly resets button width to auto, overriding desktop Fill; mobile Fill retains100%.

Consumer audit: ordinary View all is used by Blog posts, Featured blog posts, Collection list and Featured collection. Collection tabs uses its independent tabs View all block and was checked separately. Shared view-all-button/theme-button snippets contain no unconditional full-width setting; no other section-level forced widths found. Desktop, URL/overflow/hidden conditions and saved settings preserved.

Validation: browser fixture rendered actual Liquid blocks/snippets plus the complete CSS from this theme, covering standard Full width off/on with left/center/right alignment and tabs desktop/mobile Fit/Fill combinations.28 cases at375,767,768 and1440px:112 cases,0 failures for this theme;224 total across both themes. This is a controlled rendering test, not a complete Theme Editor lifecycle test. Browser viewport restored. Temporary QA server stopped after checks.

Theme Check:0 errors; 8 existing warnings. Scoped diff whitespace check passes. No schema/default/preset/template changes, explicit theme push, publication, Theme Editor Save, commit or Git push.

Live Virelle store/editor was not opened; Virelle was verified through its actual Liquid/CSS fixture.
