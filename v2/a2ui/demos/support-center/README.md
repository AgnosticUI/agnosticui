# AgnosticUI A2UI v1.0 Support Center Studio (`lit/`, `react/`, `vue/`)

Interactive offline-first reference applications demonstrating **A2UI `v1.0`** conversational generative UI surfaces (`AgMessageBubble`, `AgCombobox`, `AgCard`, `AgInput`, `AgToggle`, `AgCheckbox`, `AgButton`), **Form-Associated Custom Element (FACE) validation**, two-way `@path` DataModel reactivity, and live switching across **21+ AgnosticUI runtime skins** (including an **Invoca Brand** skin) + Light/Dark mode.

## Directory Structure

```text
v2/a2ui/demos/support-center/
├── shared/   # Shared A2UI v1.0 fixtures, studio CSS, Invoca brand skin & local/live compiler
├── lit/      # Lit Web Components studio (<ag-a2ui-studio> + @agnosticui/a2ui-lit)
├── react/    # React 19 studio (<AgA2uiSurface> + useA2uiSurface + @agnosticui/a2ui-react)
└── vue/      # Vue 3 studio (<AgA2uiSurface> + useA2uiSurface + @agnosticui/a2ui-vue)
```

## Quick Start (From Repository Root)

All commands below assume you are at the **repository root**:

### 1. Lit Support Center Studio (`lit/`)

```bash
# Pack @agnosticui/a2ui-lit, install dependencies, build, and start Vite dev server
(cd v2/a2ui/renderers/lit && npm run build && npm pack) && \
(cd v2/a2ui/demos/support-center/lit && npm install && npm run build && npm run dev)
```

### 2. React 19 Support Center Studio (`react/`)

```bash
# Build lit + react renderers, install demo dependencies, build, and start Vite dev server
(cd v2/a2ui/renderers/lit && npm run build && npm pack) && \
(cd v2/a2ui/renderers/react && npm run build && npm pack) && \
(cd v2/a2ui/demos/support-center/react && npm install && npm run build && npm run dev)
```

### 3. Vue 3 Support Center Studio (`vue/`)

```bash
# Build lit + vue renderers, install demo dependencies, build, and start Vite dev server
(cd v2/a2ui/renderers/lit && npm run build && npm pack) && \
(cd v2/a2ui/renderers/vue && npm run build && npm pack) && \
(cd v2/a2ui/demos/support-center/vue && npm install && npm run build && npm run dev)
```

## Troubleshooting Native Bindings (`npm/cli#4828`)

If Vite or Rollup complains about missing `@rolldown/binding-darwin-x64` after editing a demo `package.json`, run a clean single-pass install inside that framework folder (e.g., `lit/`):

```bash
(cd v2/a2ui/demos/support-center/lit && rm -rf node_modules package-lock.json && npm install)
```

## Regenerating the A2UI Catalog After `v2/lib` Prop Changes

If you add or modify component props in `v2/lib/src/components/*/core/_*.ts`:

```bash
# 1. Regenerate Lit wrappers, agnosticui-catalog.json, and SKILL.md
(cd v2/a2ui/catalog && npm run generate && npx tsx scripts/check-codegen.ts)

# 2. Re-test, rebuild, and repack @agnosticui/a2ui-lit
(cd v2/a2ui/renderers/lit && npm test && npm run build && npm pack)

# 3. Reinstall updated tarball in the active demo (e.g., lit/)
(cd v2/a2ui/demos/support-center/lit && rm -rf node_modules package-lock.json && npm install)
```
