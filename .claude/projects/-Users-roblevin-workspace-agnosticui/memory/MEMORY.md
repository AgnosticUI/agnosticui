# AgnosticUI v2 Workspace Memory

## Token Naming (v2 — NEW names, NOT old spec names)
The spec files use old token names — the actual tokens are:
- `--ag-background-primary` (not `--ag-body-bg`)
- `--ag-text-primary` (not `--ag-body-color`)
- `--ag-background-secondary` (not `--ag-table-header-bg` / `--ag-gray-extra-light`)
- `--ag-border` / `--ag-border-subtle` (not `--ag-gray-light`)
- `--ag-text-secondary` (not `--ag-gray-mid`)
- `--ag-radius-md` (not `--ag-radius`)
- `--ag-font-size-base` (not `--ag-body-font-size`)
- `--ag-space-4` = 1rem, `--ag-space-6` = 1.5rem (not `--ag-spacing-*`)
- `--ag-success-text` / `--ag-success-background` (not `--ag-success-color/bg`)
- `--ag-warning-text` / `--ag-warning-background` (not `--ag-warning-color/bg`)
- Dark mode uses `[data-theme="dark"]` selector

## Table Component
- CSS-only — no web component. Use `class="ag-table"` on native `<table>`.
- NOT available via `npx agnosticui-cli add Table` — table.css is auto-included in styles.
- Variants: `ag-table--stacked`, `--minimal`, `--monochrome`, `--small`, `--large`
- Modifiers: `--striped`, `--bordered`, `--hoverable`

## Component API Corrections (from build errors)
- **Avatar**: variants are `default|info|warning|success|error|transparent|monochrome` (NOT `primary`)
- **Toast**: `position` accepts `top-start|top-end|bottom-start|bottom-end` (NOT `top-right`)
- **Alert**: uses `variant` prop (NOT `type`)
- **Button**: uses `variant` prop (NOT `mode`)
- **Checkbox**: `labelText` prop (NOT `label`)
- **IconButton**: `label` for aria-label, event is `onIconButtonClick` (NOT `onClick`)
- **Select**: no `value` prop — use native `<select>` for controlled value
- **Tag**: variant type is `'info'|'warning'|'error'|'success'|'primary'|'monochrome'|''`

## CLI Package Names
- gridjs React: `gridjs-react` (NOT `@gridjs/react`)
- gridjs Vue: `gridjs-vue` (NOT `@gridjs/vue`)
- gridjs Lit: no wrapper — use `gridjs` directly, mount in `firstUpdated()`

## Vue Specifics
- `VueMenu` wraps the full `ag-menu-button` + `ag-menu` combo
- Children go in default slot (button label), menu items in `#menu` named slot
- Vue emits event detail directly (not CustomEvent) — handlers get the detail object
- `tsconfig.app.json`: set `"strict": false, "noUnusedLocals": false` for AgnosticUI components

## React Specifics
- `tsconfig.app.json`: set `"noUnusedLocals": false, "noUnusedParameters": false`
- Menu structure: `<ReactMenuButton menuVariant="chevron">Text<ReactMenu slot="menu">...</ReactMenu></ReactMenuButton>`
- **Monorepo dual-React-types fix**: if `@lit/react` is not in the project's local `node_modules`, TypeScript resolves it from the monorepo root, causing "two different types with same name" errors. Fix: run `npm install @lit/react` in the project directory to get a local copy.

## Lit Specifics
- Uses `createTable` from `@tanstack/table-core` (not `useReactTable`)
- Grid.js bridge CSS must be inside shadow DOM `<style>` (not global app.css)
- All panels extend `LitElement` with `static styles = css\`:host{display:block}\``
- `renderRoot.querySelector()` not `shadowRoot.querySelector()` for reliability

## Playbooks Built
- `v2/playbooks/login/react-example-v2/`, `vue-example-v2/`, `lit-example-v2/` — Login V2 (gradient bg, SSO-first, floating card all breakpoints)
- `v2/playbooks/grid/` — Data Grid Playbook (React + Vue + Lit), all 3 panels each
  - SimplePanel: ag-table CSS + Input/Tag/IconButton/Toast/EmptyState/Pagination
  - GridJsPanel: Grid.js + Alert + --ag-* token bridge
  - TanstackPanel: TanStack headless + ag-table CSS + full feature set
