# Contributing to Skeleton Theme

## How to contribute

We ❤️ pull requests. If you'd like to fix a bug, contribute a feature, or just correct a typo, feel free to do so, as long as you follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

If you're thinking of adding a new feature or proposing a new pattern across the theme, please consider opening an issue first. This will allow us to discuss your idea, ensure it aligns with the project's direction, and potentially save you some time.

For your contribution to be accepted, you'll need to sign the [Shopify Contributor License Agreement (CLA)](https://cla.shopify.com/).

## Standards

* This codebase must be minimalist, not a fully featured theme.
* This theme must provide a common foundational starting point for most developers.
* Do not include or reference legacy or non-recommended features.
* All changes must preserve the principles defined in the README.

## Steps to contribute

1. Fork the repository: [https://github.com/Shopify/skeleton-theme/fork](https://github.com/Shopify/skeleton-theme/fork)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to your branch: `git push origin my-new-feature`
5. Create a new Pull Request

## Mara release rules

- Keep Theme Check settings-count warnings visible. They may be temporarily accepted; do not disable or suppress the check without explicit approval.
- Do not stage, commit, or push generated files under `output/`.
- Do not include test-file changes in a release unless explicitly requested. When asked to discard output and test changes, restore tracked files and remove newly generated/untracked files only in those paths; preserve existing committed tests.
- Run the full Theme Check with `--fail-level error` and review the staged file list before committing. Report any remaining warnings.
