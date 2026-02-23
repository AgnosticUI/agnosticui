# Data Grid Playbook — PROMPT-SIMPLE.md

Spec for the **Simple Panel** — one of three swappable panels inside the Inventory app shell.

Implement as:
- React: `src/panels/SimplePanel.tsx`
- Vue: `src/panels/SimplePanel.vue`
- Lit: `src/panels/simple-panel.ts`

The panel receives `products: Product[]` as a prop/property from the shell.
It owns all internal state: search term, sort state, current page.

---

## Purpose

This panel demonstrates how far AgnosticUI's built-in `Table` takes you with zero
external dependencies. For the majority of real-world inventory views — a few hundred
rows, client-side sort, search, and pagination — you need nothing more.

**Token story:** AgnosticUI `Table` is `--ag-*` native. Every visual property is already
expressed in `--ag-*` tokens. There is no bridge, no override, no interop layer. Swap
the skin file and the table updates with everything else on the page.

---

## Layout (within the shell content region)

```
┌──────────────────────────────────────────────┐
│  [Search input — full width]                 │
├──────────────────────────────────────────────┤
│  Table: ☐ | Name | Category | Price | Stock  │
│         | Status | Actions                   │
│  ...rows...                                  │
│  [EmptyState if zero results]                │
├──────────────────────────────────────────────┤
│  Pagination (10 per page)                    │
└──────────────────────────────────────────────┘
```

---

## Features

- **Search** — AgnosticUI `Input` (type `search`, placeholder "Search products…", `rounded` prop).
  Filters rows by product name in real time. Resets to page 1 on each keystroke.
- **Column sort** — Clicking any column header cycles asc → desc → unsorted.
  Show ▲ / ▼ next to the active column. One column sorted at a time.
- **Status Tags** — AgnosticUI `Tag` in the Status column:
  - `active` → success variant
  - `low-stock` → warning variant
  - `discontinued` → default/muted variant
- **Row action** — AgnosticUI `IconButton` (pencil icon) in an Actions column.
  Clicking fires AgnosticUI `Toast`: `"Editing: [Product Name]"`
- **EmptyState** — When search yields zero results, render AgnosticUI `EmptyState`
  in place of the table body. Title: "No products found."
  Body: "Try a different search term."
- **Pagination** — AgnosticUI `Pagination` below the table, 10 rows per page.

---

## Theming: `--ag-*` Token Coverage

AgnosticUI `Table` is CSS-only and `--ag-*` native. Tokens that drive its appearance:

```css
/* These are already wired in table.css — no overrides needed */
--ag-font-family-body       /* cell font                  */
--ag-body-font-size         /* base size                  */
--ag-body-color             /* cell text                  */
--ag-body-bg                /* cell and page background   */
--ag-table-header-bg        /* <th> background            */
--ag-table-border-color     /* cell borders               */
--ag-table-stripe-bg        /* alternate row              */
--ag-table-hover-bg         /* row hover                  */

/* Tag variants (Status column) */
--ag-success-color / --ag-success-bg
--ag-warning-color / --ag-warning-bg
```

Add a comment in the source:
```ts
// Skin swap demo: importing brutalist-light.css after ag-tokens.css
// reskins this entire panel — no component code changes needed.
```

Reference: https://www.agnosticui.com/components/table.html

---

## Icons

- **React:** `import { Pencil, ChevronUp, ChevronDown } from 'lucide-react'`
- **Vue:** `import { Pencil, ChevronUp, ChevronDown } from 'lucide-vue-next'`
- **Lit:** Inline SVG only.

Pencil SVG for Lit:
```ts
const pencilIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
</svg>`
```

---

## Deliverables Checklist

- [ ] Panel accepts `products` prop and renders correctly on initial mount
- [ ] Search filters by name in real time, resets to page 1
- [ ] Column sort cycles asc/desc/unsorted with ▲/▼ indicator
- [ ] Status Tags render correct variant per status value
- [ ] Edit button fires Toast with the product's name
- [ ] EmptyState renders when search yields zero results
- [ ] Pagination: 10 rows/page, navigates correctly, reflects filtered count
- [ ] `data-label` attributes present on `<td>` elements (for mobile CSS card layout)
- [ ] `.col-category` class on the Category column (for tablet CSS hide)
- [ ] Search `Input` has `rounded` prop/attribute
- [ ] Lit: panel uses `createRenderRoot() { return this }` (light DOM)
- [ ] No TypeScript errors
