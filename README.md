# Tiesen's Portfolio

A modern, full-stack portfolio website for showcasing projects, writing, experiments, and technical expertise.

The repository is organized as a Bun-powered monorepo with two Next.js applications, shared UI and configuration packages, MDX-based documentation, and interactive web experiences.

**Live site:** [tiesen.id.vn](https://tiesen.id.vn)

## Highlights

- Project and portfolio showcases
- Blog and technical writing powered by MDX
- Interactive components and code examples
- Shared UI primitives and styling across applications
- Type-safe development with TypeScript
- Fast local development and task orchestration with Turborepo
- Code quality tooling with Oxlint and Oxfmt

## Repository structure

```text
.
├── apps/
│   ├── v1/              # First-generation portfolio and documentation app
│   └── v2/              # Current portfolio application
├── packages/
│   ├── github/          # GitHub-related utilities and integrations
│   ├── oxlint/          # Shared Oxlint configuration
│   ├── typescript/      # Shared TypeScript configuration
│   └── ui/              # Shared UI components
├── docs/                # Project documentation and content
├── Makefile             # Convenience commands for common tasks
├── package.json         # Workspace scripts and dependency catalogs
└── turbo.json           # Turborepo task configuration
```

## Tech stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Fumadocs](https://fumadocs.dev/) and MDX
- [Bun](https://bun.sh/)
- [Turborepo](https://turbo.build/repo)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) and [Oxfmt](https://oxc.rs/docs/guide/usage/formatter)

## Requirements

- [Bun](https://bun.sh/) `>= 1.4.0`
- Node.js `>= 24.20.0`

The repository includes an `.nvmrc` file for Node.js version management.

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/tiesen243/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
bun install
```

### 3. Configure environment variables

Copy the example environment file for the application you want to run:

```bash
cp apps/v2/.env.example apps/v2/.env.local
```

The available environment variables are documented in the relevant `.env.example` file. Do not commit secrets or local environment files.

### 4. Start the development server

Run the current portfolio application:

```bash
bun run dev
```

Or use the Makefile shortcut:

```bash
make dev
```

The application will be available at the local URL printed by Next.js, usually `http://localhost:3000`.

## Available commands

Run commands from the repository root:

| Command | Description |
| --- | --- |
| `bun run dev` | Start the v2 development server |
| `bun run build` | Build all workspaces |
| `bun run build:v1` | Build the v1 application |
| `bun run build:v2` | Build the v2 application |
| `bun run lint` | Check the code with Oxlint |
| `bun run lint:fix` | Automatically fix supported lint issues |
| `bun run format` | Check formatting with Oxfmt |
| `bun run format:fix` | Format supported files with Oxfmt |
| `bun run typecheck` | Run TypeScript checks across workspaces |
| `bun run clean` | Remove generated build artifacts and dependencies |

Equivalent Makefile commands are also available:

```bash
make install
make dev
make build
make lint
make format
```

## Applications

### v2

The current portfolio application, available through the root `dev` and `build:v2` scripts.

```bash
bun run --filter @yuki/web-v2 dev
bun run --filter @yuki/web-v2 build
```

### v1

The previous application version, retained for reference and continued development.

```bash
bun run --filter @yuki/web-v1 dev
bun run --filter @yuki/web-v1 build
```

## Contributing

1. Create a feature branch from the default branch.
2. Install dependencies with `bun install`.
3. Make and test your changes.
4. Run `bun run lint`, `bun run format`, and `bun run typecheck`.
5. Open a pull request with a clear description of the change.

## License

This project is open source and available under the [MIT License](./LICENSE).
