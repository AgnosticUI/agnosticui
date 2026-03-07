# Contributing to AgnosticUI

Thanks for your interest in contributing! This guide covers the full local development workflow for contributors working on components, the CLI, or docs.

## Prerequisites

- **Node.js v22** (see `.nvmrc` — use `nvm use` if you have nvm)
- Familiarity with the AgnosticUI CLI (`npx agnosticui-cli`)

## Repo Structure

```
v2/
├── lib/         Core web components (Lit-based, framework-agnostic)
├── cli/         The agnosticui-cli tool
├── examples/    Spot-check environment: react-test, vue-test, lit-test
├── site/        VitePress documentation site
├── playbooks/   Page-template prompt files and example apps
└── scripts/     Utility scripts (verify, scaffold, build)
```

`v2/examples` is the official spot-check environment. The example projects are real CLI-installed projects that consume components exactly as end users do, making them a better validation environment and a dogfooding exercise simultaneously.

## Component Development Cycle

Open two terminals.

### Terminal 1: Build and pack the lib

```bash
cd v2/lib
npm run lint
npm run typecheck
npm run test
npm run build
npm pack
# produces agnosticui-core-2.x.x-alpha.x.tgz in v2/lib/
```

### Terminal 2: Install into an example and spot-check

```bash
cd v2/examples/react-test   # or vue-test / lit-test
npm install /path/to/v2/lib/agnosticui-core-2.x.x-alpha.x.tgz
npx agnosticui-cli sync
npx agnosticui-cli add <ComponentName> --force
npm run dev
# open browser and visually verify the component renders correctly
```

### Why v2/examples (not Storybook)

- Contributors write real consumption code, not framework-specific DSL
- Exercises the CLI pipeline as a byproduct, catching regressions early
- Matches exactly what end users write, e.g. `import { ReactButton } from './src/components/ag/Button/react/ReactButton'`

## Running e2e Tests

Each example project has Playwright tests covering all component categories:

```bash
cd v2/examples/react-test   # or vue-test / lit-test
npm run e2e
```

Or run all three from `v2/examples/` using the CI workflow as reference (`.github/workflows/verify-examples.yml`).

## CLI Development Cycle

For contributors working on the CLI itself (`v2/cli`):

```bash
cd v2/cli
npm run build
npm pack
# then update the tarball reference in v2/examples/<framework>-test/package.json
# and reinstall:
cd v2/examples/react-test
rm -rf node_modules package-lock.json && npm install
npx agnosticui-cli <command>
```

## Building the CLI Distribution Tarball

To rebuild the full CLI reference tarball (needed when releasing or testing the end-to-end CLI install flow):

```bash
cd v2
bash scripts/build-local-tarball.sh
# output: v2/dist/agnosticui-local-v2.x.x-alpha.x.tar.gz
```

Skip checks with `SKIP_CHECKS=true bash scripts/build-local-tarball.sh`.

## Verification Scripts

```bash
node v2/scripts/verify-playbooks.mjs   # check playbook health
node v2/scripts/verify-examples.mjs   # check example project health
```

Pass `--fix` to auto-correct version drift in `package.json` and `agnosticui.config.json`.

## PR Checklist

- [ ] `npm run lint && npm run typecheck && npm run test` pass in `v2/lib`
- [ ] Component renders correctly in at least one `v2/examples` project
- [ ] `node v2/scripts/verify-examples.mjs` passes
- [ ] `node v2/scripts/verify-playbooks.mjs` passes if playbook files were changed
- [ ] `agnosticui-core` does not appear as a direct dependency in any example `package.json`

## Code of Conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
