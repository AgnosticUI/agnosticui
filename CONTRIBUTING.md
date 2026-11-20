# Contributing to AgnosticUI

Thanks for your interest in contributing! This guide covers the monorepo layout, local development workflows across packages, codegen synchronization, and what to verify before opening a PR.

For deep-dive component implementation rules (WAI-ARIA APG patterns, Lit property initialization, dual-dispatch events, Vue `watchEffect` & slot detection, and Shadow DOM ARIA boundaries), see [`v2/docs/DEVELOPMENT_GUIDE.md`](v2/docs/DEVELOPMENT_GUIDE.md).

## Prerequisites

- **Node.js v22** (see `.nvmrc`; run `nvm use` if you use nvm)
- Familiarity with the AgnosticUI CLI: see the [Installation docs](https://www.agnosticui.com/installation)

## Repo Structure

```text
v2/
├── lib/             Core web components (Lit-based, framework-agnostic, FACE-enabled)
├── cli/             The agnosticui-cli scaffolding & sync tool
├── mcp-server/      Model Context Protocol (MCP) server for component/token/A2UI context
├── a2ui/            A2UI v1.0 generative UI catalog, renderers (lit/react/vue), and Support Center studios
├── theme-registry/  Design tokens: single source of truth for all theming (Style Dictionary)
├── skins/           Pre-built runtime skin themes (skins-bundle.css, skin-switcher)
├── examples/        Spot-check & Playwright E2E environment: react-test, vue-test, lit-test
├── site/            VitePress documentation site (agnosticui.com)
├── playbooks/       AI-prompt-driven page templates & sdui.json schemas
├── sdui/            Legacy Server-Driven UI packages (superseded by v2/a2ui for A2UI v1.0)
├── docs/            Architecture guides, DEVELOPMENT_GUIDE.md, CLI.md, and authoring specs
├── graphics/        Brand assets, architecture diagrams, and Figma sources
└── scripts/         Monorepo verification, scaffolding, sync, and tarball build scripts
```

## v2/lib Architecture

`v2/lib` is the heart of AgnosticUI. New components can be scaffolded automatically via:

```bash
cd v2/lib
npm run scaffold -- MyComponent
```

Each component follows a consistent three-layer structure:

```text
v2/lib/src/components/Button/
├── core/
│   ├── _Button.ts       # The Lit element class (private, prefixed with _)
│   └── Button.ts        # Calls customElements.define('ag-button', ...) and
│                        # declares the global HTMLElementTagNameMap entry
├── react/
│   ├── ReactButton.tsx  # @lit/react wrapper: bridges Lit custom events to React props
│   └── index.ts         # Barrel: re-exports ReactButton + all public types
└── vue/
    ├── VueButton.vue    # Custom Vue SFC wrapper (not @lit/react; hand-crafted)
    └── index.ts         # Barrel: re-exports VueButton + public types
```

### Barrel files and custom element registration

Always import from the barrel (`react/index.ts` or `vue/index.ts`) rather than directly from the implementation file. Importing the barrel triggers `customElements.define` as a side effect, ensuring the web component is registered before it is used.

```ts
// React
import { ReactButton } from './components/ag/Button/react/ReactButton';

// Vue
import VueButton from './components/ag/Button/vue/VueButton.vue';

// Vanilla / Svelte / Angular / Solid
import 'agnosticui-core/components/Button/core/Button';
```

### React & Vue wrappers

- **React wrappers** use `@lit/react` `createComponent` to map custom Lit events (`onXxx`) and handle ref forwarding. Native composed events (`click`, `input`, `change`) work automatically without explicit event mapping.
- **Vue wrappers** are hand-crafted SFCs using `watchEffect` for reactive property syncing and manual `slotchange` dispatch on mount.

### FACE (Form Associated Custom Elements)

AgnosticUI form controls (`AgInput`, `AgCheckbox`, `AgSelect`, `AgCombobox`, `AgRadio`, `AgRating`, `AgSlider`, `AgToggle`, etc.) compose `FaceMixin` (`v2/lib/src/shared/face-mixin.ts`) so they participate in native `<form>` submission, session restore, and constraint validation.

Read the [Form Association docs](https://www.agnosticui.com/docs/form-association) before modifying any form component. Ensure `ElementInternals` form values (`setFormValue`) and constraint validity (`setValidity`) are synced both on user input events and on programmatic property updates inside `updated()`.

## v2/theme-registry & v2/skins: Tokens & Themes

Design tokens live in `v2/theme-registry/tokens/` and are compiled by **Style Dictionary**:

```bash
cd v2/theme-registry
npm run rebuild     # cleans dist/ and compiles light + dark CSS custom properties
```

Running `npm run build` inside `v2/lib` automatically executes `prebuild` (`npm run sync-tokens`), copying `ag-tokens.css` and `ag-tokens-dark.css` into `v2/lib/src/styles/` and compiling motion utilities. Never hardcode color, spacing, or radius values in component CSS.

If you add or modify a skin under `v2/skins/`, rebuild the combined skin bundle from the repository root:

```bash
npm run skins:bundle
```

Full theming documentation: [Theming](https://www.agnosticui.com/theming)

## v2/a2ui: Generative UI (A2UI v1.0) & Codegen

`v2/a2ui/` provides AgnosticUI's spec-compliant [A2UI `v1.0`](https://a2ui.org) ([GitHub](ttps://github.com/a2ui-project/a2ui)) component catalog generator, multi-framework renderers (`@agnosticui/a2ui-lit`, `@agnosticui/a2ui-react`, `@agnosticui/a2ui-vue`), and Support Center reference studios (`v2/a2ui/demos/support-center/`).

### Single Source of Truth (`generate-catalog.ts`)

`v2/a2ui/catalog/scripts/generate-catalog.ts` inspects `v2/lib/src/components/` via TypeScript AST and generates synchronized artifacts across the monorepo:

- `v2/a2ui/renderers/lit/src/components/Ag*.ts`, `catalog.ts`, and `index.ts`
- `v2/a2ui/catalog/agnosticui-catalog.json` & `v2/a2ui/catalog/SKILL.md`
- `v2/a2ui/renderers/lit/agnosticui-catalog.json` & `v2/a2ui/renderers/lit/SKILL.md`
- `v2/site/docs/public/a2ui/v1/catalog.json`

**Do not edit those generated files by hand.** If you modify a component's public props in `v2/lib` or update catalog generation rules, re-run codegen from the repository root (`generate-catalog.ts` imports `@a2ui/web_core` from `renderers/lit`, so all three packages require dependencies installed):

```bash
(cd v2/lib && npm ci)
(cd v2/a2ui/renderers/lit && npm ci)
(cd v2/a2ui/catalog && npm ci && npm run generate && npm run check)
```

To regenerate, verify zero drift, and build/pack all three renderers in one step:

```bash
(cd v2/a2ui/catalog && npm run rebuild:all)
```

The `Check Codegen Consistency` workflow (`.github/workflows/check-codegen.yml`) enforces zero drift on every push and PR.

### Renderer & Support Center Studio Verification

```bash
(cd v2/a2ui/renderers/lit && npm test && npm run typecheck && npm run build)
(cd v2/a2ui/renderers/react && npm ci && npm test && npm run typecheck && npm run build)
(cd v2/a2ui/renderers/vue && npm ci && npm test && npm run typecheck && npm run build)
(cd v2/a2ui/demos/support-center/shared && npm ci && npm run typecheck && npm test)
(cd v2/a2ui/demos/support-center/lit && npm ci && npm run build)
```

## v2/mcp-server: Model Context Protocol Server

`v2/mcp-server/` exposes AgnosticUI component schemas (`v2/lib/custom-elements.json`), Style Dictionary tokens, skin overrides, and A2UI `v1.0` wire stream validation (`generate_streamed_layout`) over stdio JSON-RPC:

```bash
cd v2/mcp-server
npm ci
npm run typecheck
npm test
npm run build
```

## v2/site: Documentation Site

The docs site is a **VitePress** project at `v2/site/docs/` (custom theme components live in `v2/site/docs/.vitepress/theme/components/`):

```bash
cd v2/site
npm ci
npm run docs:dev       # local dev server at http://localhost:8000
npm run docs:build     # production static build check
```

To sync updated tokens/skins or test a locally packed `agnosticui-core` tarball in VitePress:

```bash
cd v2/site
npm run sync-tokens
# or update the tarball version in package.json's reinstall:lib script and run:
npm run reinstall:lib
```

## v2/playbooks: AI-Prompt Page Templates

`v2/playbooks/` contains prompt-driven page templates across React, Vue, and Lit:

1. **Codified AI prompts:** `PROMPT-3-FRAMEWORKS.md` files express design intent as reproducible prompts for all three frameworks.
2. **Full theming showcase:** every playbook demonstrates runtime skin switching (`v2/skins/`) and dark/light mode toggling.

## v2/cli: The CLI Tool

The CLI (`v2/cli/`) scaffolds and updates components in consumer projects (`init`, `add`, `remove`, `list`, `sync`, `storybook`, `playbook`, `context`):

```bash
cd v2/cli
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

## Component Development Cycle

Open two terminals.

### Terminal 1: Build and pack `v2/lib`

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
```

`v2/examples` is the official spot-check environment. Restore `package.json` and `package-lock.json` in `v2/examples/*` before committing so temporary tarball paths are never committed.

### Playwright E2E & Visual Regression

```bash
# Example E2E suites (see .github/workflows/verify-examples.yml)
cd v2/examples/react-test   # or vue-test / lit-test
npm ci
npm run e2e

# Library visual regression (Dockerized Playwright; see .github/workflows/visual-regression.yml)
cd v2/lib
npm run test:visual
```

## CLI Development Cycle

To test local `v2/cli` changes against `v2/examples/*` without publishing to npm first:

```bash
# 1. Build and pack local CLI changes
cd v2/cli
npm run build
npm pack
# produces agnosticui-cli-2.x.x-alpha.x.tgz in v2/cli/

# 2. Install local tarball into an example project
cd v2/examples/react-test   # or vue-test / lit-test
npm install ../../cli/agnosticui-cli-2.x.x-alpha.x.tgz

# 3. Verify CLI commands
npx agnosticui-cli <command>
npm run dev

# 4. Restore package.json and lockfile before committing
git checkout -- package.json package-lock.json
```

## Building the v2/lib Reference Tarball

`v2/scripts/build-local-tarball.sh` builds the component library reference tarball bundled into `npx agnosticui-cli init`:

```bash
cd v2
bash scripts/build-local-tarball.sh
# output: v2/dist/agnosticui-local-v2.x.x-alpha.x.tar.gz
```

Skip sanity checks with `SKIP_CHECKS=true bash scripts/build-local-tarball.sh`.

## Verification Scripts

```bash
node v2/scripts/verify-examples.mjs               # audit example project health
node v2/scripts/verify-playbooks.mjs              # audit playbook health
node v2/scripts/validate-playbook-schemas.mjs     # validate sdui.json against playbook-sdui.schema.json
```

Pass `--fix` to `verify-examples.mjs` or `verify-playbooks.mjs` to auto-correct version drift in `package.json` and `agnosticui.config.json`. See [`v2/scripts/README.md`](v2/scripts/README.md) for additional utilities (`setup-testing-playground.sh`, `bulk-sync.sh`, etc.).

## PR Checklist

- [ ] `npm run lint && npm run typecheck && npm run test` pass in `v2/lib`
- [ ] `(cd v2/a2ui/catalog && npm run check)` passes with zero drift when `v2/lib` interfaces or A2UI catalog files change
- [ ] Component renders correctly in both light and dark modes (`data-theme="dark"`) in at least one `v2/examples` project
- [ ] `node v2/scripts/verify-examples.mjs` passes
- [ ] `node v2/scripts/verify-playbooks.mjs` and `node v2/scripts/validate-playbook-schemas.mjs` pass if playbook files or schemas changed
- [ ] Design token changes originate in `v2/theme-registry/` (not hardcoded in component CSS)
- [ ] FACE API (`setFormValue`, `setValidity`, `updated()` sync) is preserved if a form component was modified
- [ ] `agnosticui-core` does not appear as a direct dependency in any example or playbook `package.json`

## Code of Conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
