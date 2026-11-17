# AgnosticUI × A2UI `v1.0` Monorepo Workspace

Spec-compliant **A2UI `v1.0`** component catalog generator, multi-framework web renderers (`@agnosticui/a2ui-lit`, `@agnosticui/a2ui-react`, `@agnosticui/a2ui-vue`), and interactive Support Center reference studios.

## Workspace Map

```text
v2/a2ui/
├── catalog/                      # ts-morph AST codegen -> 25 Ag* components, agnosticui-catalog.json, SKILL.md, check-codegen.ts
├── renderers/
│   ├── lit/                      # @agnosticui/a2ui-lit (<a2ui-surface> Light-DOM catalog & FACE validateSurface)
│   ├── react/                    # @agnosticui/a2ui-react (<AgA2uiSurface> + useA2uiSurface hook)
│   └── vue/                      # @agnosticui/a2ui-vue (Vue 3 wrapper + composable)
├── demos/support-center/
│   ├── shared/                   # Shared A2UI v1.0 fixtures, studio.css, evergreen-skin.css & local/live compiler
│   ├── lit/                      # Lit Web Components Support Center Studio
│   ├── react/                    # React 19 Support Center Studio
│   └── vue/                      # Vue 3 Support Center Studio
├── vitest.shared.mts             # Shared Vitest module deduplication (Lit 3, @lit-labs/signals, Zod)
└── docs/                         # PRD, Implementation Plan, Publish Guide & Session Continuity Capsule
```

## End-to-End Commands (From Repository Root)

### 1. Catalog Codegen & Drift Verification

```bash
# Regenerate Lit wrappers, agnosticui-catalog.json, and SKILL.md from v2/lib
(cd v2/a2ui/catalog && npm run generate)

# Verify zero drift between v2/lib AST, generated wrappers, JSON schema, and SKILL.md
(cd v2/a2ui/catalog && npx tsx scripts/check-codegen.ts)
```

### 2. Renderers: Test, Typecheck, Build & Pack

```bash
# Build & test Lit renderer first (required dependency for React & Vue renderers)
(cd v2/a2ui/renderers/lit && npm test && npm run build && npm pack)

# Build & test React 19 renderer
(cd v2/a2ui/renderers/react && npm test && npm run build && npm pack)
```

### 3. Support Center Studios: Typecheck, Build & Dev Server

#### Lit Studio (`demos/support-center/lit`)

```bash
(cd v2/a2ui/demos/support-center/lit && npm install && npm run typecheck && npm run build && npm run dev)
```

#### React 19 Studio (`demos/support-center/react`)

```bash
(cd v2/a2ui/demos/support-center/react && npm install && npm run typecheck && npm run build && npm run dev)
```

### 4. Fast Local Tarball Refresh (After Editing `renderers/lit` or `renderers/react`)

If you modify code inside `renderers/lit` or `renderers/react` and want a demo to pick up the updated `.tgz` without clearing `node_modules` (avoiding `npm/cli#4828` optional native Rollup binding issues):

```bash
# Refresh Lit demo after repacking @agnosticui/a2ui-lit
(cd v2/a2ui/renderers/lit && npm test && npm run build && npm pack) && \
(cd v2/a2ui/demos/support-center/lit && rm -rf node_modules/.vite && npm install --no-save ../../../renderers/lit/agnosticui-a2ui-lit-2.0.0-alpha.1.tgz)

# Refresh React demo after repacking @agnosticui/a2ui-lit & @agnosticui/a2ui-react
(cd v2/a2ui/renderers/lit && npm test && npm run build && npm pack) && \
(cd v2/a2ui/renderers/react && npm test && npm run build && npm pack) && \
(cd v2/a2ui/demos/support-center/react && rm -rf node_modules/.vite && npm install --no-save ../../../renderers/lit/agnosticui-a2ui-lit-2.0.0-alpha.1.tgz ../../../renderers/react/agnosticui-a2ui-react-2.0.0-alpha.1.tgz)
```
