# Collection card alignment fix — 2026-10-19

User requested Button and all other Collection card child blocks follow the card alignment. Both Collection card adapters use the shared collection-card-render kernel. The allowed children are Title, Description and Button.

The kernel now normalizes Left/Center/Right to text alignment plus a private flex alignment token. Button uses that token for align-self, so its fit-width wrapper moves with the card alignment; max-width100% constrains its wrapper. Full-width button settings remain independent of alignment. An explicit mobile Fit rule overrides desktop Fill, fixing that responsive combination. Title uses the same parent flex token; its text and inline product count stay together. Description already inherits text alignment through the full-width content wrapper and has no competing alignment control, so no change was needed; its rich text, line clamps and padding remain intact.

Changed implementation: snippets/collection-card-render.liquid, blocks/collection-card-button.liquid and blocks/collection-card-title.liquid. No new settings, schema changes, JavaScript or preset changes. Applies to on-image and below-image cards, including the collections page adapter. Customization record updated.

Validation: existing collections-page regression suite8/8 passed; ad-hoc Liquid render matrix passed Left/Center/Right and invalid-value fallback. Theme Check zero errors/seven warnings in the current working tree. git diff --check passed. Browser preview was attempted but local browser use is disabled in Work settings; rendered desktop/mobile, long-label geometry and Theme Editor setting-change visual checks remain unverified. No explicit push/publish, Theme Editor save, commit or Git push.
