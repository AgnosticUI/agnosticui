# Data Grid Playbook — PROMPT-TANSTACK.md

Spec for the **TanStack Panel** — one of three swappable panels inside the Inventory app shell.

Implement as:
- React: `src/panels/TanstackPanel.tsx`
- Vue: `src/panels/TanstackPanel.vue`
- Lit: `src/panels/tanstack-panel.ts`

The panel receives `products: Product[]` as a prop/property from the shell.
It owns all internal state via TanStack Table.

---

## Purpose

This panel demonstrates the headless architecture pattern: TanStack Table provides all
state logic with zero opinions on markup or styling. AgnosticUI `Table` provides every
pixel of the visual surface.

The result looks nearly identical to the Simple Panel. That sameness is the point —
TanStack adds filtering, multi-sort, column visibility, and row selection without
touching a single CSS class.

**Token story:** Because you write every `<table>`, `<th>`, and `<td>` element yourself,
`--ag-*` tokens apply directly to your own CSS classes. No bridge, no override layer,
no `!important`. This is the cleanest `--ag-*` integration of all three panels —
headless architecture gives you maximum logic capability and maximum styling freedom
simultaneously.

---

## Layout (within the shell content region)

```
┌──────────────────────────────────────────────────────┐
│  [Global search input]          [Columns ▾ Menu]     │
│  [Name filter input] [Category ▾ select]             │
├──────────────────────────────────────────────────────┤
│  [Delete Selected (N)]  ← only when rows selected    │
├──────────────────────────────────────────────────────┤
│  AgnosticUI Table markup (TanStack drives state):    │
│  ☐ | Name | Category | Price | Stock | Status | Act  │
│  ...rows...                                          │
│  [EmptyState if zero results]                        │
├──────────────────────────────────────────────────────┤
│  [Page size ▾]                        Pagination     │
└──────────────────────────────────────────────────────┘
```

---

## Features

### Filtering
- **Global search** — AgnosticUI `Input` (type `search`, placeholder "Search…", `rounded` prop).
  Wired to TanStack's `globalFilter` state. Resets pagination to page 1 on change.
- **Name filter** — AgnosticUI `Input` (placeholder "Filter name…", `rounded` prop).
  Wired to the `name` column's `columnFilter`.
- **Category filter** — AgnosticUI `Select` (`noLabel`/`no-label` prop; options: All / Electronics / Clothing / Food /
  Books / Tools). Wired to the `category` column's `columnFilter`.
  Use `ReactSelect` / `VueSelect` / `ag-select` — **not** a native `<select>`.

### Sorting
- **Multi-sort** — Click header to sort asc, again for desc. Shift+click adds a
  secondary sort without clearing the primary. Pass `enableMultiSort: true`.
- Show ▲ / ▼ next to the active sort column.
- Show numeric sort-order badges (1, 2) when multi-sort is active.

### Column Visibility
- AgnosticUI `Menu` (trigger: "Columns ▾" `Button`) with one AgnosticUI `Checkbox`
  per hideable column. The selection `Checkbox` column and Actions column are always
  visible and not included in the Menu.

### Row Selection
- Leading `Checkbox` column. Header checkbox selects/deselects all visible rows.
- When ≥ 1 row is selected, show "Delete Selected ([N])" AgnosticUI `Button`
  (`variant="danger"`, `shape="rounded"`) above the table.
- Clicking opens AgnosticUI `Dialog`:
  - Title: "Confirm Delete"
  - Body: "Delete [N] selected product(s)? This cannot be undone."
  - Buttons: "Cancel" (`shape="rounded"`, closes) | "Delete" (danger, `shape="rounded"`, confirms)
  - On confirm: remove rows from local copy of data, close dialog,
    call `table.resetRowSelection()`, fire `Toast`: `"Deleted [N] product(s)"`

### Status Tags
AgnosticUI `Tag` in the Status column:
- `active` → success variant
- `low-stock` → warning variant
- `discontinued` → default/muted variant

### Row Action
AgnosticUI `IconButton` (pencil icon) in Actions column.
Fires `Toast`: `"Editing: [Product Name]"`

### EmptyState
When all active filters combined yield zero rows, replace the table body with
AgnosticUI `EmptyState`. Title: "No products found." Body: "Try adjusting your filters."

### Pagination
- AgnosticUI `Pagination` below the table.
- AgnosticUI `Select` (`noLabel`/`no-label`) for page size (10 / 25 / 50) left of the pagination.
  Use `ReactSelect` / `VueSelect` / `ag-select` — **not** a native `<select>`.
- TanStack manages all pagination state; AgnosticUI renders the controls only.

---

## Theming: `--ag-*` Tokens Apply Directly

Add these classes to `app.css`. They reference `--ag-*` tokens directly — no override
of any third-party stylesheet required.

```css
/* TanStack panel table styles */
.ts-th {
  background-color: var(--ag-table-header-bg, var(--ag-gray-extra-light));
  color: var(--ag-body-color);
  font-weight: 600;
  border-bottom: 2px solid var(--ag-table-border-color, var(--ag-gray-light));
  padding: 0.625rem 1rem;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
}
.ts-th:hover {
  background-color: var(--ag-gray-light);
}
.ts-td {
  border-bottom: 1px solid var(--ag-table-border-color, var(--ag-gray-light));
  padding: 0.625rem 1rem;
  color: var(--ag-body-color);
  background-color: var(--ag-body-bg);
}
tr:last-child .ts-td {
  border-bottom: none;
}

/* Sort indicators */
.sort-icon {
  display: inline-block;
  margin-left: 0.25rem;
  color: var(--ag-primary);
  font-size: 0.8rem;
}
.sort-order {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--ag-primary);
  color: #fff;
  font-size: 0.6rem;
  margin-left: 0.2rem;
  vertical-align: middle;
}

/* Pagination row */
.pagination-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--ag-spacing-1);
  margin-top: var(--ag-spacing-2);
}

/* Toolbar above table */
.panel-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ag-spacing-1);
  margin-bottom: var(--ag-spacing-2);
  align-items: flex-end;
}
.panel-toolbar-right {
  margin-left: auto;
}
```

> **Note:** Do not use a native `<select>` styled with a `.toolbar-select` CSS class.
> Use AgnosticUI `ReactSelect` / `VueSelect` / `ag-select` with `noLabel`/`no-label` prop — already themed, no extra CSS needed.

Dark mode is automatic — all values reference `--ag-*` custom properties.

TanStack Table docs: https://tanstack.com/table/latest

---

## Framework-Specific Notes

### React

```tsx
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  createColumnHelper,
} from '@tanstack/react-table'
import { ReactSelect } from '../components/ag/Select/react/ReactSelect'
```

- Pass `enableRowSelection: true` and `enableMultiSort: true` to `useReactTable`.
- Define column defs outside the component to avoid recreation on each render.
- Use the `cell` property on column defs to render Tags, Checkboxes, IconButtons.
- Category filter select: `<ReactSelect noLabel onChange={(e) => setCategoryFilter(e.detail.value as string)}>`
  — `e.detail.value` is the selected value string.
- Page size select: `<ReactSelect noLabel onChange={(e) => { table.setPageSize(Number(e.detail.value)); table.setPageIndex(0) }}>`

### Vue

```ts
import {
  useVueTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/vue-table'
import VueSelect from '../components/ag/Select/vue/VueSelect.vue'
```

- Wrap `table.getRowModel()` and `table.getHeaderGroups()` in `computed` for
  reactive template bindings.
- Pass `enableMultiSort: true` in the table config object.
- Category filter: `<VueSelect no-label @change="(detail) => setCategoryFilter(detail.value as string)">`
  — Vue wrapper emits the `SelectChangeEventDetail` object directly (not a full Event).
- Page size: `<VueSelect no-label @change="(detail) => { table.setPageSize(Number(detail.value)); table.setPageIndex(0) }">`

### Lit

```ts
import {
  createTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/table-core'
```

Create the table in `connectedCallback` with `onStateChange` wired to `requestUpdate`:

```ts
connectedCallback() {
  super.connectedCallback()
  this.tableState = {
    ...this.table.initialState,
    pagination: { pageIndex: 0, pageSize: 10 },
  }
  this.table = createTable({
    data: [...this.products],
    columns: this.columnDefs,
    enableMultiSort: true,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: this.tableState,
    onStateChange: (updater) => {
      this.tableState = typeof updater === 'function'
        ? updater(this.tableState)
        : updater
      this.table.setOptions(prev => ({ ...prev, state: this.tableState }))
      this.requestUpdate()
    },
    renderFallbackValue: '',
  })
}
```

When `products` property changes (e.g. after a delete), recreate the table or call
`table.setOptions({ data: this.localProducts })` and `requestUpdate()`.

- Import and use `ag-select` for category and page-size selects:
  ```ts
  import '../components/ag/Select/core/Select'
  ```
  ```html
  <ag-select no-label @change="${(e: CustomEvent) => this.setCategoryFilter(e.detail.value as string)}">
    <option value="">All Categories</option>
    ...
  </ag-select>

  <ag-select no-label @change="${(e: CustomEvent) => { this.table!.setPageSize(Number(e.detail.value)); this.table!.setPageIndex(0) }}">
    <option value="10">10 / page</option>
    ...
  </ag-select>
  ```
- Use **light DOM** on all panels so `app.css` classes reach inside:
  ```ts
  override createRenderRoot() { return this }
  ```
- Pass `rounded` on `ag-input` elements and `shape="rounded"` on `ag-button` elements.

---

## Common Pitfalls

| Issue | Fix |
|-------|-----|
| Lit state not re-rendering | Ensure `onStateChange` calls `this.requestUpdate()` |
| Multi-sort not working | Pass `enableMultiSort: true` to table config |
| Selection persists after delete | Call `table.resetRowSelection()` after removing rows |
| Column filter clears global filter | Use `columnFilters` array state alongside `globalFilter` separately |
| Vue `ag-*` warnings | Confirm `isCustomElement` in `vite.config.ts` |
| Delete count shows 0 | Read selected rows before clearing selection state |
| Toolbar select looks unstyled | Use `ReactSelect`/`VueSelect`/`ag-select` with `noLabel`, not native `<select>` |
| Inputs have square corners | Pass `rounded` boolean prop/attribute to each `ag-input` |
| Buttons have square corners | Pass `shape="rounded"` to each `ag-button` |
| Header `::part()` width ignored | Add `!important` — external `::part()` specificity (0,0,1) loses to shadow `.header-content` (0,1,0) |
| Lit CSS not reaching components | Use `override createRenderRoot() { return this }` for light DOM on all panels |

---

## Icons

- **React:** `import { Pencil, ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react'`
- **Vue:** `import { Pencil, ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-vue-next'`
- **Lit:** Inline SVG only.

---

## Deliverables Checklist

- [ ] Panel accepts `products` prop and renders on mount
- [ ] Global search filters rows, resets to page 1
- [ ] Name column filter input works independently
- [ ] Category select filter works independently
- [ ] Multi-sort: primary on click, secondary on Shift+click, order badges shown
- [ ] Column visibility Menu toggles columns; selection + Actions always visible
- [ ] Row selection Checkboxes work; header checkbox selects/deselects all visible
- [ ] "Delete Selected ([N])" button visible only when rows are selected
- [ ] Delete Dialog shows correct count; Cancel closes; Delete fires Toast + resets selection
- [ ] Status Tags render correct variant
- [ ] Edit button fires Toast with product name
- [ ] EmptyState renders when all filters yield zero results
- [ ] Page-size Select (10/25/50) works
- [ ] Pagination reflects filtered row count correctly
- [ ] `--ag-*` tokens applied directly to markup — no bridge needed, dark mode automatic
- [ ] `data-label` attributes on `<td>` elements for mobile card CSS
- [ ] `.col-category` class for tablet CSS hide
- [ ] Category filter and page-size use `ReactSelect`/`VueSelect`/`ag-select` (not native `<select>`)
- [ ] All `Input` elements have `rounded` prop/attribute
- [ ] All `Button` elements have `shape="rounded"`
- [ ] `SelectionButtonGroup` has `shape="rounded"` (propagates to children)
- [ ] Lit: all panels use `createRenderRoot() { return this }` (light DOM)
- [ ] No TypeScript errors
