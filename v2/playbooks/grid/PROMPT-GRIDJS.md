# Data Grid Playbook — PROMPT-GRIDJS.md

Spec for the **Grid.js Panel** — one of three swappable panels inside the Inventory app shell.

Implement as:
- React: `src/panels/GridJsPanel.tsx`
- Vue: `src/panels/GridJsPanel.vue`
- Lit: `src/panels/gridjs-panel.ts`

The panel receives `products: Product[]` as a prop/property from the shell.
Grid.js manages all internal state (search, sort, pagination) itself.

---

## Purpose

Grid.js (~12KB) earns its place when you want built-in search, sort, and pagination with
minimal setup. Because it renders its own markup, the integration story with AgnosticUI
is honest and bounded:

> AgnosticUI wraps it. `--ag-*` tokens reach in through a shallow CSS override of
> Grid.js's mermaid stylesheet. Grid.js's internal DOM structure is left untouched.

The lesson: partial token reach is fine when the library earns it through simplicity.

---

## Layout (within the shell content region)

```
┌──────────────────────────────────────────────┐
│  Alert (info): integration note              │
├──────────────────────────────────────────────┤
│  [Grid.js grid — search, sort, and           │
│   pagination provided by the library]        │
└──────────────────────────────────────────────┘
```

---

## Alert Content

AgnosticUI `Alert` (type `info`) above the grid:

> "Grid.js renders its own search, sort, and pagination controls. AgnosticUI provides
> the application shell — `--ag-*` tokens are bridged to Grid.js's stylesheet via
> targeted CSS class overrides."

---

## Grid.js Configuration

```ts
{
  columns: [
    { name: 'Name' },
    { name: 'Category' },
    {
      name: 'Price',
      formatter: (cell) => `$${Number(cell).toFixed(2)}`
    },
    { name: 'Stock' },
    {
      name: 'Status',
      formatter: (cell) => html(
        `<span class="status-cell status-cell--${cell}">${cell}</span>`
      )
    }
  ],
  data: products.map(p => [p.name, p.category, p.price, p.stock, p.status]),
  sort: true,
  search: true,
  pagination: { limit: 10 },
}
```

Status cell CSS (add to `app.css` — these are panel-agnostic utility classes):
```css
.status-cell--active       { color: var(--ag-success-color); font-weight: 500; }
.status-cell--low-stock    { color: var(--ag-warning-color); font-weight: 500; }
.status-cell--discontinued { color: var(--ag-gray-mid);      font-weight: 500; }
```

---

## Theming: `--ag-*` Token Bridge

Import order in `src/main.ts` / `src/main.tsx` matters:
```ts
import 'gridjs/dist/theme/mermaid.min.css'   // Grid.js base — comes first
import './app.css'                            // --ag-* bridge overrides come after
```

Bridge rules (place in `app.css`):
```css
/* No border/border-radius/box-shadow — horizontal-only row dividers */
.gridjs-wrapper {
  font-family: "Inter", sans-serif;
  font-size: var(--ag-font-size-base);
  color: var(--ag-text-primary);
  box-shadow: none;
}
.gridjs-table {
  background-color: var(--ag-background-primary);
}
/* th/td.gridjs-* selectors needed to beat mermaid's th.gridjs-th / td.gridjs-td specificity (0,1,1) */
th.gridjs-th {
  background-color: var(--ag-background-secondary);
  color: var(--ag-text-primary);
  font-weight: 600;
  border: none;
  border-bottom: 2px solid var(--ag-border);
  padding: var(--ag-space-3) var(--ag-space-4);
}
td.gridjs-td {
  border: none;
  border-bottom: 1px solid var(--ag-border);
  padding: var(--ag-space-3) var(--ag-space-4);
  background-color: var(--ag-background-primary);
}
/* Hide orphaned footer shell (pagination is replaced by ag-pagination) */
.gridjs-footer { display: none; }
/* Hide built-in Grid.js search (replaced by ag-input) */
.gridjs-search { display: none; }
.gridjs-search-input {
  border: 1px solid var(--ag-gray-light);
  border-radius: var(--ag-radius);
  font-family: inherit;
  font-size: inherit;
  padding: 0.375rem 0.75rem;
  background-color: var(--ag-body-bg);
  color: var(--ag-body-color);
}
.gridjs-search-input:focus {
  outline: 3px solid var(--ag-focus-ring-color, var(--ag-primary));
  outline-offset: 2px;
}
.gridjs-pages button        { color: var(--ag-primary); }
.gridjs-pages button:hover  { background-color: var(--ag-gray-extra-light); }
.gridjs-pages button[disabled] { color: var(--ag-gray-mid); }
```

**Coverage summary:**

| Covered by bridge | Not covered |
|---|---|
| Borders, backgrounds, text color | Sort arrow SVG icons |
| Font family and size | Loading spinner |
| Border radius | Pagination active state detail |
| Search input (including focus ring) | |
| Pagination button color | |

Dark mode is automatic — all bridge values reference `--ag-*` custom properties,
which flip via `ag-tokens-dark.css` with no additional overrides needed.

Grid.js theming docs: https://gridjs.io/docs/config/style and https://gridjs.io/docs/config/className

---

## Framework-Specific Integration

### React — `@gridjs/react`

```tsx
import { Grid, html } from '@gridjs/react'

export function GridJsPanel({ products }: { products: Product[] }) {
  const data = products.map(p => [p.name, p.category, p.price, p.stock, p.status])
  return (
    <>
      {/* Alert */}
      <Grid columns={columns} data={data} sort search pagination={{ limit: 10 }} />
    </>
  )
}
```

### Vue — `@gridjs/vue`

```vue
<script setup lang="ts">
import { Grid, html } from '@gridjs/vue'
import type { Product } from '../data/products'

const props = defineProps<{ products: Product[] }>()
const data = computed(() =>
  props.products.map(p => [p.name, p.category, p.price, p.stock, p.status])
)
</script>
<template>
  <!-- Alert -->
  <Grid :columns="columns" :data="data" :sort="true"
        :search="true" :pagination="{ limit: 10 }" />
</template>
```

### Lit — vanilla Grid.js API

No official Lit wrapper exists. Mount Grid.js imperatively in `firstUpdated`.

```ts
import { Grid, html as gridHtml } from 'gridjs'

export class GridJsPanel extends LitElement {
  @property({ type: Array }) products: Product[] = []
  private grid: Grid | null = null

  protected render() {
    return html`
      <style>
        /*
         * Grid.js injects into shadow DOM — bridge CSS must live here,
         * not in the global app.css, because shadow DOM encapsulates styles.
         */
        .gridjs-wrapper { border: 1px solid var(--ag-gray-light); ... }
        /* full bridge rules duplicated here */
      </style>
      <!-- Alert -->
      <div id="grid-container"></div>
    `
  }

  firstUpdated() {
    const container = this.shadowRoot!.querySelector('#grid-container') as HTMLElement
    this.grid = new Grid({
      columns: this.columns,
      data: this.products.map(p => [p.name, p.category, p.price, p.stock, p.status]),
      sort: true,
      search: true,
      pagination: { limit: 10 },
    }).render(container)
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('products') && this.grid) {
      this.grid.updateConfig({
        data: this.products.map(p => [p.name, p.category, p.price, p.stock, p.status]),
      }).forceRender()
    }
  }
}
```

---

## Deliverables Checklist

- [ ] Panel accepts `products` prop and Grid.js renders on mount
- [ ] Built-in search filters rows
- [ ] Built-in column sort works
- [ ] Built-in pagination (10 rows/page) works
- [ ] Status column renders colored text via `--ag-*`-driven CSS classes
- [ ] Price column formatted to `$XX.XX`
- [ ] `--ag-*` token bridge applied — grid harmonizes visually with app shell
- [ ] Dark mode: bridge inherits automatically from `ag-tokens-dark.css`
- [ ] Lit: bridge CSS lives inside shadow DOM `<style>` block
- [ ] Lit: `updated()` handles `products` prop changes
- [ ] Info Alert visible above grid
- [ ] No TypeScript errors
