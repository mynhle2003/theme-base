# Kinetra variant updates

- Source / peer: Virelle, `theme/virelle-theme`.
- Target: Kinetra, `theme/kinetra-theme`.
- Fork SHA: `8243250cbfed994f89fe36b8ecb6a792bf605fe6` (2026-10-21).
- Inherited: all sections, blocks, shared commerce/editor logic, snippets, assets, custom dependencies, presets, templates and global Theme Settings.
- Kept separate: Kinetra homepage/header/footer composition and media deltas after the fork.
- Reverse direction Kinetra → Virelle starts at the same fork SHA. No post-fork fix applied.
- Peer registration: `peer-registration-pending`; source-theme documentation is outside this target-only initialization.

| Source branch | Fork SHA | Reviewed through SHA | Last applied source SHA | Target result commit | Pending IDs |
| --- | --- | --- | --- | --- | --- |
| theme/virelle-theme | 8243250cbfed994f89fe36b8ecb6a792bf605fe6 | 8243250cbfed994f89fe36b8ecb6a792bf605fe6 | 8243250cbfed994f89fe36b8ecb6a792bf605fe6 | inherited at fork | none |

| Fix ID / origin branch + SHA | Symptom and shared files | Direction | Decision | Target files / result | Validation | Next action |
| --- | --- | --- | --- | --- | --- | --- |
| None after fork | No changes applied | both | already-present | exact initial Git tree | `git diff SOURCE HEAD --` empty | Review new source commits on continuation |
