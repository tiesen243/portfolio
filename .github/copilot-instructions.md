Repository: tiesen243/portfolio — Copilot instructions for working with this monorepo

1) Quick commands (root)
- Install dependencies (CI-friendly):
  - bun ci
  - or make install (Makefile uses bun)
- Dev (local app):
  - bun run --filter @yuki/web-v2 dev
  - or make dev
- Build (whole workspace):
  - bun run build   # uses workspace filter in package.json
  - or make build
- Format / lint / typecheck:
  - bun run format        # oxfmt --check
  - bun run format:fix    # oxfmt --write
  - bun run lint          # oxlint (CI also runs `bun lint --format=github`)
  - bun run lint:fix
  - bun run typecheck

Running a single package command
- Use Bun workspace filters to target one package: bun run --filter '<package-name>' <script>
  Example: bun run --filter @yuki/web-v2 build

Running tests (notes)
- This repo does not expose a global "test" script at the root. Some packages use standard test tools (vitest/jest) via the tools/oxc config.
- If a package adds a test script, run it scoped: bun run --filter <pkg> test -- <test-args>
- To run a single test by name (Vitest):
  bun run --filter <pkg> test -- -t "exact test name" path/to/file.test.ts

2) High-level architecture (big picture)
- Monorepo managed with Bun workspaces (package.json workspaces: "apps/*", "tools/*").
- apps/
  - apps/web and apps/v2: primary Next.js applications (Next 16). These host the public portfolio site and alternate entry.
- tools/
  - internal tooling and shared configs (e.g., @yuki/oxc for linter rules, TypeScript configs, action helpers).
- docs/
  - MDX-based documentation and project pages (fumadocs-mdx used in postinstall for web packages).
- Centralized versioning helper: package.json uses "catalogs" entries (e.g., "catalog:react") to share dependency versions across workspaces.
- CI: GitHub Actions uses oven-sh/setup-bun and the composite action at tools/github/actions/setup to run bun ci, format, and lint.

3) Key conventions and patterns
- Bun-first workflow: packageManager is bun@1.3.0; use bun ci / bun run / bun install for reproducible behavior.
- Workspace filtering: many Makefile and package.json scripts use bun's --filter to run commands per-package (e.g., --filter @yuki/web-v2).
- Formatting & linting: oxfmt and oxlint are the canonical tools (root scripts: format, format:fix, lint, lint:fix). CI runs format and bun lint --format=github.
- Shared configs live under tools/ (tsconfig, oxc rules). Prefer those over ad-hoc edits in package folders.
- Docs build hook: packages that generate docs call fumadocs-mdx in postinstall; editing MDX may require running the package postinstall or `bun run --filter <pkg> postinstall`.
- Makefile is a lightweight helper (pkm=bun). Use make targets for quick local tasks (install, dev, build, lint, format).
- Environment: copy .env.example to .env for local dev. Sensitive keys must not be committed.

4) Files and places Copilot should consult first
- package.json (root) — workspace layout, canonical scripts
- Makefile — convenient targets
- apps/web/package.json — main web app scripts (dev/build/typecheck)
- tools/oxc/* — lint/test rules and conventions
- .github/workflows/* — CI shape and important steps
- docs/ — MDX pages (if generating or updating docs)

5) When making changes
- Keep changes scoped to the package unless updating cross-cutting shared config under tools/.
- If adding new scripts (test, build), add them to the package's package.json and, if needed, update root scripts or CI.
- Avoid changing tools/* without tests or a PR comment — these affect linting across workspace.

(If an existing .github/copilot-instructions.md is present, improve incrementally; do not overwrite unrelated guidance.)

---
Generated: concise instructions to help Copilot/agents navigate this repository.
