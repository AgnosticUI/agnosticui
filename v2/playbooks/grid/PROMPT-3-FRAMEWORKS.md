# Data Grid Playbook — PROMPT-3-FRAMEWORKS.md

## Directory Structure

All output directories are relative to `v2/playbooks/grid/`. Commands should be run from within `v2/playbooks/grid/` or paths adjusted accordingly.

## Overview

Build the complete **Data Grid Playbook** across React, Vue, and Lit — a realistic
e-commerce inventory admin screen with a light application shell, and a segmented
control to swap between three grid implementations.

---

## What This Builds

```
react-example/              ← single Vite project
  src/
    main.tsx
    App.tsx                 ← shell: Header + Breadcrumb + segmented control + active panel
    app.css                 ← global styles, --ag-* token usage, responsive rules
    data/
      products.ts           ← shared 50-product dataset, defined once
    panels/
      SimplePanel.tsx       ← AgnosticUI Table implementation
      GridJsPanel.tsx       ← Grid.js implementation
      TanstackPanel.tsx     ← TanStack Table implementation

vue-example/                ← single Vite project
  src/
    main.ts
    App.vue
    app.css
    data/
      products.ts
    panels/
      SimplePanel.vue
      GridJsPanel.vue
      TanstackPanel.vue

lit-example/                ← single Vite project
  src/
    main.ts
    inventory-app.ts        ← root LitElement: shell + panel routing
    app.css
    data/
      products.ts
    panels/
      simple-panel.ts
      gridjs-panel.ts
      tanstack-panel.ts
```

One project per framework. The dataset is defined once and imported by all three panels.

---

## Narrative: "Inventory" Admin Screen

The application is a lightweight e-commerce back-office. The user is a store manager
reviewing product inventory. The page is titled **"Inventory"** and sits at
`Home / Inventory` in the breadcrumb.

The segmented control is framed as a developer affordance — a small "View as:" toggle
in the top-right of the content region (not the primary UI) labeled:
**Simple · Grid.js · TanStack**

This makes the intent clear to a docs reader without breaking the product fiction for
a real user.

---

## Application Shell

The shell is defined once in `App.tsx` / `App.vue` / `inventory-app.ts` and does not
re-render when the active panel changes.

```
┌──────────────────────────────────────────────────────────────┐
│  HEADER                                                      │
│  [AgnosticUI logo]   Inventory Manager        [Avatar: AB]   │
├──────────────────────────────────────────────────────────────┤
│  Breadcrumb: Home / Inventory                                │
├──────────────────────────────────────────────────────────────┤
│  "Inventory"  (h1)                  View as: [·] Simple      │
│                                             [ ] Grid.js      │
│                                             [ ] TanStack     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [active panel renders here]                                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

The "View as:" control is an AgnosticUI `SelectionButtonGroup` (or three small
`Button` elements in a toggle group if SelectionButtonGroup is unavailable). It sits
inline with the page `<h1>`, right-aligned, styled small and unobtrusive.

Only one panel is mounted at a time — do not render all three simultaneously.

---

## Shared Dataset

Define in `src/data/products.ts` and import into all three panels.

```ts
export type Product = {
  id: number;
  name: string;
  category: "Electronics" | "Clothing" | "Food" | "Books" | "Tools";
  price: number; // USD, two decimal places
  stock: number;
  status: "active" | "low-stock" | "discontinued";
};

export const products: Product[] = [
  /* 50 items, see spec below */
];
```

Generate 50 realistic product names spread across all five categories.
Status distribution: ~60% active, ~25% low-stock, ~15% discontinued.

---

## Panel Specs

Each panel is a self-contained component that receives `products: Product[]` as a prop
(or property in Lit). The shell passes the full dataset down; filtering and pagination
are internal to each panel.

### Panel 1 — Simple (`SimplePanel`)

See `PROMPT-SIMPLE.md` for full feature spec. Summary:

- AgnosticUI `Table` only
- Search `Input`, column sort, `Tag` per status, `IconButton` edit action → `Toast`
- `EmptyState` on zero results
- `Pagination` (10 per page)

### Panel 2 — Grid.js (`GridJsPanel`)

See `PROMPT-GRIDJS.md` for full feature spec. Summary:

- Grid.js with built-in search, sort, pagination
- AgnosticUI `Alert` (info) at top of panel
- `--ag-*` token bridge via CSS overrides of `mermaid.min.css`

### Panel 3 — TanStack (`TanstackPanel`)

See `PROMPT-TANSTACK.md` for full feature spec. Summary:

- TanStack Table (headless) + AgnosticUI `Table` markup
- Global search, column filters, multi-sort, column visibility `Menu`
- Row selection + bulk delete `Dialog` → `Toast`
- Page-size `Select` + `Pagination`

---

## Prompt Files

Read and implement in this order:

| Prompt                   | Defines                                           |
| ------------------------ | ------------------------------------------------- |
| `PROMPT-3-FRAMEWORKS.md` | This file — shell structure, dataset, build order |
| `PROMPT-SIMPLE.md`       | SimplePanel feature spec                          |
| `PROMPT-GRIDJS.md`       | GridJsPanel feature spec + `--ag-*` token bridge  |
| `PROMPT-TANSTACK.md`     | TanstackPanel feature spec + headless token story |

**Complete the full app (all three panels) in React first. Then Vue. Then Lit.**
Do not interleave frameworks.

---

## Project Setup

### React

```bash
npm create vite@latest react-example -- --template react-ts
cd react-example
npm install
npm install @tanstack/react-table lucide-react gridjs @gridjs/react
npx agnosticui-cli init --framework react --skip-prompts
npx agnosticui-cli add \
  Header Breadcrumb Avatar \
  Table Button IconButton Input Select Checkbox \
  Dialog Pagination Tag Toast Alert EmptyState Menu SelectionButtonGroup
```

### Vue

```bash
npm create vite@latest vue-example -- --template vue-ts
cd vue-example
npm install
npm install @tanstack/vue-table lucide-vue-next gridjs @gridjs/vue
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli add \
  Header Breadcrumb Avatar \
  Table Button IconButton Input Select Checkbox \
  Dialog Pagination Tag Toast Alert EmptyState Menu SelectionButtonGroup
```

`vite.config.ts`:

```ts
vue({
  template: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("ag-"),
    },
  },
});
```

### Lit

```bash
npm create vite@latest lit-example -- --template lit-ts
cd lit-example
npm install
npm install @tanstack/table-core gridjs
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add \
  Header Breadcrumb Avatar \
  Table Button IconButton Input Select Checkbox \
  Dialog Pagination Tag Toast Alert EmptyState Menu SelectionButtonGroup
```

---

## Token & Font Setup (All Three Projects)

`src/main.ts` (React: `src/main.tsx`):

```ts
import "./components/ag/styles/ag-tokens.css";
import "./components/ag/styles/ag-tokens-dark.css";
import "gridjs/dist/theme/mermaid.min.css"; /* must come before app.css */
import "./app.css";
```

`index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

---

## Global `app.css`

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Inter", var(--ag-font-family-body, sans-serif);
  background-color: var(--ag-body-bg);
  color: var(--ag-body-color);
}

/* Shell layout */
.app-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--ag-spacing-3, 1.5rem);
}

.page-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--ag-spacing-2, 1rem);
  flex-wrap: wrap;
  gap: var(--ag-spacing-1, 0.5rem);
}

.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: var(--ag-body-color);
}

.view-as-label {
  font-size: 0.8rem;
  color: var(--ag-gray-mid);
  margin-right: var(--ag-spacing-1);
}

/* Responsive: stack title-row on mobile */
@media (max-width: 600px) {
  .page-title-row {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* Mobile card layout for table panels */
@media (max-width: 767px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  tr {
    margin-bottom: var(--ag-spacing-2, 1rem);
    border: 1px solid var(--ag-gray-light);
    border-radius: var(--ag-radius);
    padding: var(--ag-spacing-1);
  }
  td {
    border: none;
    padding: 0.25rem 0.5rem;
    display: flex;
    gap: 0.5rem;
  }
  td::before {
    content: attr(data-label);
    font-weight: 600;
    min-width: 90px;
    color: var(--ag-gray-mid);
  }
}

/* Tablet: hide Category column */
@media (min-width: 768px) and (max-width: 1023px) {
  .col-category {
    display: none;
  }
}
```

---

## Shared Conventions

### Token naming

Use `--ag-*` throughout. Common tokens:

```
--ag-body-bg          --ag-body-color       --ag-primary
--ag-gray-light       --ag-gray-mid         --ag-gray-extra-light
--ag-radius           --ag-spacing-1/2/3    --ag-font-family-body
--ag-body-font-size   --ag-focus-ring-color
--ag-table-header-bg  --ag-table-border-color
--ag-success-color    --ag-success-bg
--ag-warning-color    --ag-warning-bg
```

### Button prop

Use `disabled`, not `isDisabled`.

### Lit icons

Lucide is not Lit-compatible. Use inline SVG templates.

### Vue TypeScript

If strict-mode errors appear: set `"strict": false` in `tsconfig.app.json`.

---

## Build Verification

```bash
cd react-example && npm run build   # exits 0
cd vue-example   && npm run build   # exits 0
cd lit-example   && npm run build   # exits 0
```

Run `npm run dev` in each and verify all three panels switch correctly, all features
work, and the shell remains stable during panel transitions.

---

## Final Deliverables Checklist

### Shell (all 3 frameworks)

- [ ] Header renders with logo and Avatar
- [ ] Breadcrumb: Home / Inventory
- [ ] Page h1 "Inventory" with "View as:" toggle right-aligned
- [ ] Switching panels mounts/unmounts correctly — no simultaneous rendering
- [ ] Shell does not re-render on panel switch

### Simple Panel

- [ ] Search filters by name, resets pagination
- [ ] Column sort cycles asc/desc/unsorted with indicator
- [ ] Status Tags: correct variant per status
- [ ] Edit button fires Toast with product name
- [ ] EmptyState on zero search results
- [ ] Pagination 10 rows/page

### Grid.js Panel

- [ ] Grid renders all 50 rows with built-in search, sort, pagination
- [ ] Status column colored via `--ag-*`-driven CSS classes
- [ ] Price formatted to two decimal places
- [ ] `--ag-*` token bridge applied — grid harmonizes visually with shell
- [ ] Info Alert visible above grid
- [ ] Dark mode: bridge inherits automatically via `--ag-*` references

### TanStack Panel

- [ ] Global search + Name filter + Category select filter
- [ ] Multi-sort with Shift+click and order indicators
- [ ] Column visibility Menu (selection + Actions always visible)
- [ ] Row selection; Delete Selected button appears when rows selected
- [ ] Delete Dialog → confirm removes rows, resets selection, fires Toast
- [ ] Page-size Select (10/25/50) + Pagination
- [ ] EmptyState on zero results
- [ ] `--ag-*` tokens applied directly to markup — no bridge needed

### All

- [ ] `npm run build` exits 0 for all three frameworks
- [ ] Dark mode responds to system preference via `ag-tokens-dark.css`
- [ ] Mobile card layout; tablet Category column hidden
