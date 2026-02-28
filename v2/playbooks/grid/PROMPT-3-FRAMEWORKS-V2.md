# Data Grid Playbook — PROMPT-3-FRAMEWORKS-V2.md

## Overview

This is **Variant II** of the Data Grid Playbook. It is a focused, single-panel build — **TanStack Table only** — whose purpose is to demonstrate three new AgnosticUI components:

- **Spinner** — initial data-load state before the table appears
- **ProgressRing** — animated progress arc inside the bulk-delete Dialog
- **IntlFormatter** — formats the Price column (USD) and a new Added date column

The V1 three-panel switcher (Simple / Grid.js / TanStack) is **not used in V2**. There is one panel, one implementation per framework.

**Base spec.** All TanStack panel features from `PROMPT-TANSTACK.md` apply verbatim unless overridden here. Read that file for the full TanStack feature spec (global search, column filters, multi-sort, column visibility Menu, row selection, bulk delete, page-size Select, Pagination, EmptyState). This file only specifies what is different or new.

---

## Directory Structure

All output directories are relative to `v2/playbooks/grid/`. **Never write to or modify** `react-example/`, `vue-example/`, or `lit-example/`.

```
react-example-v2/
  src/
    main.tsx
    App.tsx
    app.css
    data/
      products.ts          ← updated with `date` field
    panels/
      TanstackPanel.tsx

vue-example-v2/
  src/
    main.ts
    App.vue
    app.css
    data/
      products.ts
    panels/
      TanstackPanel.vue

lit-example-v2/
  src/
    main.ts
    inventory-app.ts
    app.css
    data/
      products.ts
    panels/
      tanstack-panel.ts
```

---

## Project Setup

### React

```bash
npm create vite@latest react-example-v2 -- --template react-ts
cd react-example-v2
npm install
npm install @tanstack/react-table lucide-react
npx agnosticui-cli init --framework react --skip-prompts
npx agnosticui-cli add \
  Header Breadcrumb Avatar \
  Table Button IconButton Input Select Checkbox \
  Dialog Pagination Tag Toast EmptyState Menu \
  Spinner ProgressRing IntlFormatter
```

### Vue

```bash
npm create vite@latest vue-example-v2 -- --template vue-ts
cd vue-example-v2
npm install
npm install @tanstack/vue-table lucide-vue-next
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli add \
  Header Breadcrumb Avatar \
  Table Button IconButton Input Select Checkbox \
  Dialog Pagination Tag Toast EmptyState Menu \
  Spinner ProgressRing IntlFormatter
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
npm create vite@latest lit-example-v2 -- --template lit-ts
cd lit-example-v2
npm install
npm install @tanstack/table-core
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add \
  Header Breadcrumb Avatar \
  Table Button IconButton Input Select Checkbox \
  Dialog Pagination Tag Toast EmptyState Menu \
  Spinner ProgressRing IntlFormatter
```

---

## Token & Font Setup

Identical to V1 — see `PROMPT-3-FRAMEWORKS.md`. Same `main.ts` imports, same Inter font in `index.html`.

---

## Application Shell

The shell is simpler than V1 — no panel-switcher, no SelectionButtonGroup. It renders the Header, Breadcrumb, page title, and either the Spinner (during initial load) or the TanStack panel.

```
┌──────────────────────────────────────────────────────────────┐
│  HEADER                                                      │
│  [AgnosticUI logo]              [☀/🌙]  [Avatar: AB]         │
├──────────────────────────────────────────────────────────────┤
│  Breadcrumb: Home / Inventory                                │
├──────────────────────────────────────────────────────────────┤
│  "Inventory"  (h1)                                           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│        [ Spinner ]  ← initial load only (~1s)                │
│                                                              │
│   OR                                                         │
│                                                              │
│        [ TanStack panel ]  ← after load completes            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

A `SkinSwitcher` floating button and a theme-toggle button in the Header are still present, same as V1.

---

## Shared Dataset

Add a `date` field to the `Product` type and all 50 product records.

```ts
export type Product = {
  id: number;
  name: string;
  category: "Electronics" | "Clothing" | "Food" | "Books" | "Tools";
  price: number; // USD, two decimal places
  stock: number;
  status: "active" | "low-stock" | "discontinued";
  date: string; // ISO 8601, e.g. "2024-03-15" — date product was added
};
```

Dates should span a realistic ~18-month window: **2023-06-01 to 2024-12-31**. Distribute them randomly — do not sort by date.

---

## Global `app.css`

Carry over the V1 `app.css` as-is, then add the following new rules. Remove the Grid.js token-bridge section and the `.col-category` tablet-hide rule (column layout changes below supersede it).

```css
/* Initial-load Spinner container */
.page-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

/* Right-align numeric columns */
.col-price,
.col-added {
  text-align: right;
}

/* Tabular figures so decimal points and digits stack vertically */
.col-price ag-intl-formatter,
.col-price [part~="currency"] {
  font-variant-numeric: tabular-nums;
}

/* ProgressRing dialog container */
.dialog-progress {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--ag-space-6) 0;
}

/* Delete success message */
.delete-success-msg {
  text-align: center;
  color: var(--ag-success-text);
  font-size: 1.125rem;
  font-weight: 500;
  padding: var(--ag-space-4) 0;
  margin: 0;
}
```

---

## V2 Changes

### Change 1 — Spinner on Initial Data Load

**Scope: App shell (`App.tsx` / `App.vue` / `inventory-app.ts`)**

On mount, `isLoading` starts as `true`. A 1000ms `setTimeout` simulates an API fetch. After it resolves, `isLoading` becomes `false` and the TanStack panel renders.

While loading, render the Spinner **in place of the panel** inside `.page-loading`. The Header and Breadcrumb are already visible — only the content area shows the Spinner.

**React:**

```tsx
import { ReactSpinner } from "./components/ag/Spinner/react/ReactSpinner";

const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setIsLoading(false), 1000);
  return () => clearTimeout(timer);
}, []);

// Content area:
{
  isLoading ? (
    <div className="page-loading">
      <ReactSpinner size="large" ariaLabel="Loading inventory…" />
    </div>
  ) : (
    <TanstackPanel products={products} />
  );
}
```

**Vue:**

```ts
import { VueSpinner } from "./components/ag/Spinner/vue/VueSpinner";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
```

```vue
<template>
  <div v-if="isLoading" class="page-loading">
    <VueSpinner size="large" aria-label="Loading inventory…" />
  </div>
  <TanstackPanel v-else :products="products" />
</template>
```

**Lit:**

```ts
@state() isLoading = true

override connectedCallback() {
  super.connectedCallback()
  setTimeout(() => { this.isLoading = false }, 1000)
}

// In render():
${this.isLoading
  ? html`<div class="page-loading">
           <ag-spinner size="large" aria-label="Loading inventory…"></ag-spinner>
         </div>`
  : html`<tanstack-panel .products=${this.products}></tanstack-panel>`
}
```

---

### Change 2 — IntlFormatter in the TanStack Panel

**Scope: `TanstackPanel.tsx` / `TanstackPanel.vue` / `tanstack-panel.ts`**

Replace the raw `price` number display with a formatted currency cell, and add a new `date` column displaying the `Added` date.

#### Column layout

| #   | Column   | Align  | Width |
| --- | -------- | ------ | ----- |
| 1   | Name     | left   | flex  |
| 2   | Category | left   | 110px |
| 3   | Price    | right  | 100px |
| 4   | Added    | right  | 110px |
| 5   | Stock    | right  | 70px  |
| 6   | Status   | center | 110px |
| 7   | Actions  | center | 60px  |

#### IntlFormatter props

**Price (currency):**

```
type="currency"  currency="USD"  value={product.price}
```

→ renders `$1,234.56`

**Added (date):**

```
type="date"  date={product.date}  month="short"  day="2-digit"  year="numeric"
```

→ renders `Jan 15, 2024` (zero-padded day is automatic)

#### React

```tsx
import { ReactIntlFormatter } from './components/ag/IntlFormatter/react/ReactIntlFormatter'

// Price cell:
<td className="col-price" data-label="Price">
  <ReactIntlFormatter type="currency" value={product.price} currency="USD" />
</td>

// Added cell:
<td className="col-added" data-label="Added">
  <ReactIntlFormatter type="date" date={product.date} month="short" day="2-digit" year="numeric" />
</td>
```

#### Vue

```vue
<script setup>
import { VueIntlFormatter } from "./components/ag/IntlFormatter/vue/VueIntlFormatter";
</script>

<template>
  <td class="col-price" data-label="Price">
    <VueIntlFormatter type="currency" :value="product.price" currency="USD" />
  </td>
  <td class="col-added" data-label="Added">
    <VueIntlFormatter
      type="date"
      :date="product.date"
      month="short"
      day="2-digit"
      year="numeric"
    />
  </td>
</template>
```

#### Lit

```ts
// Price cell:
html`<td class="col-price" data-label="Price">
  <ag-intl-formatter
    type="currency"
    .value=${product.price}
    currency="USD"
  ></ag-intl-formatter>
</td>`;

// Added cell:
html`<td class="col-added" data-label="Added">
  <ag-intl-formatter
    type="date"
    .date=${product.date}
    month="short"
    day="2-digit"
    year="numeric"
  ></ag-intl-formatter>
</td>`;
```

---

### Change 3 — ProgressRing in Bulk-Delete Dialog

**Scope: `TanstackPanel.tsx` / `TanstackPanel.vue` / `tanstack-panel.ts`**

Replace the V1 single-phase confirm → close with a three-phase Dialog:

```
confirm  →  deleting  →  success (auto-close after 1.5s)
```

#### Phase definitions

| Phase      | Title              | Body                            | Footer                  |
| ---------- | ------------------ | ------------------------------- | ----------------------- |
| `confirm`  | "Delete N row(s)?" | "This action cannot be undone." | `[Cancel]  [Delete]`    |
| `deleting` | "Deleting…"        | ProgressRing (centered)         | _(no buttons)_          |
| `success`  | "Done"             | "✓ N rows deleted"              | _(auto-closes at 1.5s)_ |

Dialog cannot be dismissed by backdrop or close button during `deleting` or `success` phases.

Always reset `phase = 'confirm'` and `progress = 0` when the dialog is **opened** (not closed).

#### Progress animation

```
totalMs    = 1500
intervalMs = 16
increment  = 100 / (totalMs / intervalMs)   // ≈ 1.067 per tick
```

Use `setInterval` at 16ms. Clamp to `Math.min(value + increment, 100)`. When the value reaches 100, `clearInterval`, then after a 50ms grace tick call `finishDelete`.

After `finishDelete`: delete rows, clear selection, fire Toast, set `phase = 'success'`. Auto-close after a further 1500ms, then reset state.

#### React

```tsx
import { ReactProgressRing } from "./components/ag/ProgressRing/react/ReactProgressRing";

type DeletePhase = "confirm" | "deleting" | "success";

const [deletePhase, setDeletePhase] = useState<DeletePhase>("confirm");
const [deleteProgress, setDeleteProgress] = useState(0);
const [deletedCount, setDeletedCount] = useState(0);

function openDeleteDialog() {
  setDeletePhase("confirm");
  setDeleteProgress(0);
  setDialogOpen(true);
}

function startDelete() {
  const count = selectedIds.size;
  setDeletedCount(count);
  setDeletePhase("deleting");
  setDeleteProgress(0);

  const increment = 100 / (1500 / 16);
  const timer = setInterval(() => {
    setDeleteProgress((prev) => {
      const next = Math.min(prev + increment, 100);
      if (next >= 100) {
        clearInterval(timer);
        setTimeout(() => finishDelete(count), 50);
      }
      return next;
    });
  }, 16);
}

function finishDelete(count: number) {
  setRows((prev) => prev.filter((r) => !selectedIds.has(r.id)));
  setSelectedIds(new Set());
  setDeletePhase("success");
  showToast(`${count} product${count !== 1 ? "s" : ""} deleted`);
  setTimeout(() => {
    setDialogOpen(false);
    setDeletePhase("confirm");
    setDeleteProgress(0);
  }, 1500);
}
```

**Dialog JSX:**

```tsx
<ReactDialog
  isOpen={dialogOpen}
  onClose={() => {
    if (deletePhase === "confirm") setDialogOpen(false);
  }}
>
  <div slot="header">
    {deletePhase === "confirm" &&
      `Delete ${selectedIds.size} row${selectedIds.size !== 1 ? "s" : ""}?`}
    {deletePhase === "deleting" && "Deleting\u2026"}
    {deletePhase === "success" && "Done"}
  </div>

  <div slot="default">
    {deletePhase === "confirm" && <p>This action cannot be undone.</p>}
    {deletePhase === "deleting" && (
      <div className="dialog-progress">
        <ReactProgressRing
          value={Math.round(deleteProgress)}
          size="large"
          variant="primary"
          label="Deletion progress"
        />
      </div>
    )}
    {deletePhase === "success" && (
      <p className="delete-success-msg">✓ {deletedCount} rows deleted</p>
    )}
  </div>

  <div slot="footer">
    {deletePhase === "confirm" && (
      <>
        <ReactButton shape="rounded" onClick={() => setDialogOpen(false)}>
          Cancel
        </ReactButton>
        <ReactButton shape="rounded" mode="primary" onClick={startDelete}>
          Delete
        </ReactButton>
      </>
    )}
  </div>
</ReactDialog>
```

#### Vue

```ts
type DeletePhase = "confirm" | "deleting" | "success";

const deletePhase = ref<DeletePhase>("confirm");
const deleteProgress = ref(0);
const deletedCount = ref(0);

function openDeleteDialog() {
  deletePhase.value = "confirm";
  deleteProgress.value = 0;
  dialogOpen.value = true;
}

function startDelete() {
  deletedCount.value = selectedIds.value.size;
  deletePhase.value = "deleting";
  deleteProgress.value = 0;

  const increment = 100 / (1500 / 16);
  const timer = setInterval(() => {
    deleteProgress.value = Math.min(deleteProgress.value + increment, 100);
    if (deleteProgress.value >= 100) {
      clearInterval(timer);
      setTimeout(finishDelete, 50);
    }
  }, 16);
}

function finishDelete() {
  rows.value = rows.value.filter((r) => !selectedIds.value.has(r.id));
  selectedIds.value = new Set();
  deletePhase.value = "success";
  showToast(
    `${deletedCount.value} product${deletedCount.value !== 1 ? "s" : ""} deleted`,
  );
  setTimeout(() => {
    dialogOpen.value = false;
    deletePhase.value = "confirm";
    deleteProgress.value = 0;
  }, 1500);
}
```

**Dialog template:**

```vue
<VueDialog
  :is-open="dialogOpen"
  @close="if (deletePhase === 'confirm') dialogOpen = false;"
>
  <template #header>
    <span v-if="deletePhase === 'confirm'">Delete {{ selectedIds.size }} row{{ selectedIds.size !== 1 ? 's' : '' }}?</span>
    <span v-else-if="deletePhase === 'deleting'">Deleting&hellip;</span>
    <span v-else>Done</span>
  </template>

  <template #default>
    <p v-if="deletePhase === 'confirm'">This action cannot be undone.</p>
    <div v-else-if="deletePhase === 'deleting'" class="dialog-progress">
      <VueProgressRing :value="Math.round(deleteProgress)" size="large" variant="primary" label="Deletion progress" />
    </div>
    <p v-else class="delete-success-msg">✓ {{ deletedCount }} rows deleted</p>
  </template>

  <template #footer>
    <template v-if="deletePhase === 'confirm'">
      <VueButton shape="rounded" @click="dialogOpen = false">Cancel</VueButton>
      <VueButton shape="rounded" mode="primary" @click="startDelete">Delete</VueButton>
    </template>
  </template>
</VueDialog>
```

#### Lit

```ts
type DeletePhase = 'confirm' | 'deleting' | 'success'

@state() deletePhase:    DeletePhase = 'confirm'
@state() deleteProgress: number      = 0
@state() deletedCount:   number      = 0

private openDeleteDialog() {
  this.deletePhase    = 'confirm'
  this.deleteProgress = 0
  this.dialogOpen     = true
}

private startDelete() {
  this.deletedCount   = this.selectedIds.size
  this.deletePhase    = 'deleting'
  this.deleteProgress = 0

  const increment = 100 / (1500 / 16)
  const timer = setInterval(() => {
    this.deleteProgress = Math.min(this.deleteProgress + increment, 100)
    if (this.deleteProgress >= 100) {
      clearInterval(timer)
      setTimeout(() => this.finishDelete(), 50)
    }
  }, 16)
}

private finishDelete() {
  this.rows        = this.rows.filter(r => !this.selectedIds.has(r.id))
  this.selectedIds = new Set()
  this.deletePhase = 'success'
  this.showToast(`${this.deletedCount} product${this.deletedCount !== 1 ? 's' : ''} deleted`)
  setTimeout(() => {
    this.dialogOpen     = false
    this.deletePhase    = 'confirm'
    this.deleteProgress = 0
  }, 1500)
}
```

**Dialog in `render()`:**

```ts
html`
  <ag-dialog
    ?is-open=${this.dialogOpen}
    @close=${() => {
      if (this.deletePhase === "confirm") this.dialogOpen = false;
    }}
  >
    <span slot="header">
      ${this.deletePhase === "confirm"
        ? `Delete ${this.selectedIds.size} row${this.selectedIds.size !== 1 ? "s" : ""}?`
        : this.deletePhase === "deleting"
          ? "Deleting\u2026"
          : "Done"}
    </span>

    <div slot="default">
      ${this.deletePhase === "confirm"
        ? html`<p>This action cannot be undone.</p>`
        : this.deletePhase === "deleting"
          ? html`<div class="dialog-progress">
              <ag-progress-ring
                value=${Math.round(this.deleteProgress)}
                size="large"
                variant="primary"
                label="Deletion progress"
              >
              </ag-progress-ring>
            </div>`
          : html`<p class="delete-success-msg">
              ✓ ${this.deletedCount} rows deleted
            </p>`}
    </div>

    <div slot="footer">
      ${this.deletePhase === "confirm"
        ? html`
            <ag-button
              shape="rounded"
              @click=${() => {
                this.dialogOpen = false;
              }}
              >Cancel</ag-button
            >
            <ag-button shape="rounded" mode="primary" @click=${this.startDelete}
              >Delete</ag-button
            >
          `
        : ""}
    </div>
  </ag-dialog>
`;
```

---

## Shared Conventions

All conventions from `PROMPT-3-FRAMEWORKS.md` apply:

- `--ag-*` tokens throughout; no hardcoded colours
- `shape="rounded"` on all Buttons
- `rounded` prop/attribute on all Inputs
- `ReactSelect` / `VueSelect` / `ag-select` — never native `<select>`
- Lit: light DOM via `override createRenderRoot() { return this }`
- Lit: inline SVG icons (lucide is not Lit-compatible)
- Vue: `"strict": false` in `tsconfig.app.json` if needed
- Header `::part(ag-header-content)` width override requires `!important`

---

## Build Verification

```bash
cd react-example-v2 && npm run build   # exits 0
cd vue-example-v2   && npm run build   # exits 0
cd lit-example-v2   && npm run build   # exits 0
```

Run `npm run dev` in each and verify manually.

---

## Final Deliverables Checklist

### Shell

- [ ] Header: logo, theme toggle (☀/🌙), Avatar
- [ ] SkinSwitcher floating button present and functional
- [ ] Breadcrumb: Home / Inventory
- [ ] Page `<h1>` "Inventory"
- [ ] No SelectionButtonGroup / panel switcher

### Spinner

- [ ] `isLoading` is `true` on mount; Spinner renders in `.page-loading`
- [ ] After 1000ms, `isLoading` becomes `false`; TanStack panel replaces Spinner
- [ ] Spinner `size="large"`, `ariaLabel="Loading inventory…"`
- [ ] Header and Breadcrumb are visible during the loading state

### IntlFormatter

- [ ] Price column displays `$X,XXX.XX` (USD, two decimals, comma separator)
- [ ] Added column displays `Mon DD, YYYY` (e.g. `Jan 05, 2024`)
- [ ] Both columns right-aligned via `.col-price` / `.col-added`
- [ ] Price column uses `tabular-nums` for decimal alignment
- [ ] `data-label="Price"` and `data-label="Added"` on `<td>` for mobile card layout

### ProgressRing

- [ ] Opening Delete dialog resets to `phase = 'confirm'`, `progress = 0`
- [ ] `confirm` phase: correct title, body text, Cancel + Delete buttons visible
- [ ] Clicking Delete transitions to `deleting` — buttons gone, ProgressRing visible
- [ ] ProgressRing animates 0 → 100 over ~1500ms, `size="large"`, `variant="primary"`
- [ ] After 100%: rows deleted, selection cleared, Toast fires
- [ ] `success` phase: title "Done", "✓ N rows deleted" body
- [ ] Auto-close 1500ms after success; state resets to `'confirm'`
- [ ] Backdrop / close button does nothing during `deleting` and `success` phases

### TanStack panel (inherited from V1)

- [ ] Global search + Name filter + Category Select filter
- [ ] Multi-sort with Shift+click and order indicators
- [ ] Column visibility Menu (Selection + Actions always visible)
- [ ] Page-size Select (10/25/50) + Pagination
- [ ] EmptyState on zero results
- [ ] All `Input` elements have `rounded` prop/attribute
- [ ] Category filter and page-size use `ReactSelect`/`VueSelect`/`ag-select`

### All

- [ ] `npm run build` exits 0 for all three frameworks
- [ ] Dark mode responds to `data-theme="dark"` on `<html>`
- [ ] Mobile card layout: each row becomes a labelled card
- [ ] Tablet: Category column hidden
- [ ] Skin switcher functional across all skins
