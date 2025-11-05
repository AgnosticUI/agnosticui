# Pagination

Pagination allows users to navigate through pages of content. It displays page numbers and navigation controls, making it easy to move between large sets of data.

## Examples

<PaginationExamples />

<script setup>
import PaginationExamples from '../examples/PaginationExamples.vue'
</script>

## Usage

::: details Vue

```vue
<template>
  <section>
    <!-- Basic pagination -->
    <VuePagination
      :current="currentPage"
      :total-pages="20"
      @page-change="handlePageChange"
    />

    <!-- Bordered style -->
    <VuePagination :current="1" :total-pages="15" bordered />

    <!-- Without first/last navigation -->
    <VuePagination
      :current="5"
      :total-pages="10"
      :first-last-navigation="false"
    />

    <!-- Different offset (1 instead of 2) -->
    <VuePagination :current="10" :total-pages="20" :offset="1" />

    <!-- Custom alignment -->
    <VuePagination :current="1" :total-pages="10" justify="center" />

    <!-- Custom navigation labels -->
    <VuePagination
      :current="1"
      :total-pages="10"
      :navigation-labels="{
        first: 'Primera',
        previous: 'Anterior',
        next: 'Siguiente',
        last: 'Última',
      }"
    />
  </section>
</template>

<script>
import { VuePagination } from "agnosticui-core/pagination/vue";

export default {
  components: {
    VuePagination,
  },
  data() {
    return {
      currentPage: 5,
    };
  },
  methods: {
    handlePageChange(detail) {
      this.currentPage = detail.page;
      console.log(`Page changed to ${detail.page}`);
    },
  },
};
</script>
```

:::

::: details React

```tsx
import { useState } from "react";
import { ReactPagination } from "agnosticui-core/pagination/react";

export default function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(5);

  const handlePageChange = (event) => {
    setCurrentPage(event.detail.page);
    console.log(`Page changed to ${event.detail.page}`);
  };

  return (
    <section>
      {/* Basic pagination */}
      <ReactPagination
        current={currentPage}
        totalPages={20}
        onPageChange={handlePageChange}
      />

      {/* Bordered style */}
      <ReactPagination current={1} totalPages={15} bordered />

      {/* Without first/last navigation */}
      <ReactPagination
        current={5}
        totalPages={10}
        firstLastNavigation={false}
      />

      {/* Different offset (1 instead of 2) */}
      <ReactPagination current={10} totalPages={20} offset={1} />

      {/* Custom alignment */}
      <ReactPagination current={1} totalPages={10} justify="center" />

      {/* Custom navigation labels */}
      <ReactPagination
        current={1}
        totalPages={10}
        navigationLabels={{
          first: "Primera",
          previous: "Anterior",
          next: "Siguiente",
          last: "Última",
        }}
      />
    </section>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/pagination";

  document.addEventListener("DOMContentLoaded", () => {
    const pagination = document.querySelector("#my-pagination");

    pagination?.addEventListener("page-change", (e) => {
      console.log(`Page changed to ${e.detail.page}`);
    });
  });
</script>

<section>
  <!-- Basic pagination -->
  <ag-pagination
    id="my-pagination"
    current="5"
    total-pages="20"
  ></ag-pagination>

  <!-- Bordered style -->
  <ag-pagination current="1" total-pages="15" bordered></ag-pagination>

  <!-- Without first/last navigation -->
  <ag-pagination
    current="5"
    total-pages="10"
    first-last-navigation="false"
  ></ag-pagination>

  <!-- Different offset (1 instead of 2) -->
  <ag-pagination current="10" total-pages="20" offset="1"></ag-pagination>

  <!-- Custom alignment -->
  <ag-pagination current="1" total-pages="10" justify="center"></ag-pagination>
</section>
```

:::

## Props

| Prop                  | Type                                 | Default        | Description                                                               |
| --------------------- | ------------------------------------ | -------------- | ------------------------------------------------------------------------- |
| `current`             | `number`                             | `1`            | The currently active page (1-indexed)                                     |
| `totalPages`          | `number`                             | `1`            | Total number of pages                                                     |
| `offset`              | `1 \| 2`                             | `2`            | Number of page buttons to show on each side of the current page           |
| `justify`             | `'start' \| 'center' \| 'end' \| ''` | `''`           | Horizontal alignment of pagination controls                               |
| `ariaLabel`           | `string`                             | `'pagination'` | ARIA label for the navigation element                                     |
| `bordered`            | `boolean`                            | `false`        | Show bordered style (outline instead of solid background for active page) |
| `firstLastNavigation` | `boolean`                            | `true`         | Show first/last page navigation buttons                                   |
| `navigationLabels`    | `NavigationLabels`                   | See below      | Custom labels for navigation buttons                                      |

### NavigationLabels Interface

```typescript
interface NavigationLabels {
  first: string; // Default: "First"
  previous: string; // Default: "Previous"
  next: string; // Default: "Next"
  last: string; // Default: "Last"
}
```

## Events

The Pagination component follows AgnosticUI v2 event conventions with **dual-dispatch** for the `page-change` custom event - you can use either `addEventListener` or callback props (e.g., `onPageChange`).

| Event         | Framework                                                                              | Detail                                         | Description                         |
| ------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------- |
| `page-change` | Vue: `@page-change`<br>React: `onPageChange`<br>Lit: `@page-change` or `.onPageChange` | `{ page: number, pages: (number \| '...')[] }` | Fired when the active page changes. |

### Event Handling Examples

::: details Vue

```vue
<template>
  <!-- Using @page-change emit -->
  <VuePagination
    :current="currentPage"
    :total-pages="20"
    @page-change="handlePageChange"
  />
</template>

<script setup>
import { ref } from "vue";
import { VuePagination } from "agnosticui-core/pagination/vue";

const currentPage = ref(1);

const handlePageChange = (detail) => {
  console.log("Page changed:", detail);
  // detail: { page: 5, pages: [1, 2, 3, 4, 5, 6, 7, '...', 20] }
  currentPage.value = detail.page;
};
</script>
```

:::

::: details React

```tsx
import { useState } from "react";
import { ReactPagination } from "agnosticui-core/pagination/react";

export default function PaginationEventExample() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event) => {
    console.log("Page changed:", event.detail);
    // event.detail: { page: 5, pages: [1, 2, 3, 4, 5, 6, 7, '...', 20] }
    setCurrentPage(event.detail.page);
  };

  return (
    <ReactPagination
      current={currentPage}
      totalPages={20}
      onPageChange={handlePageChange}
    />
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/pagination";

  const pagination = document.querySelector("#my-pagination");

  // Pattern 1: Using addEventListener (standard Web Components)
  pagination.addEventListener("page-change", (event) => {
    console.log("Page changed:", event.detail);
    // event.detail: { page: 5, pages: [1, 2, 3, 4, 5, 6, 7, '...', 20] }
  });

  // Pattern 2: Using callback prop
  pagination.onPageChange = (event) => {
    console.log("Page changed (callback):", event.detail);
  };

  // Both patterns work simultaneously (dual-dispatch)
</script>

<ag-pagination id="my-pagination" current="1" total-pages="20"></ag-pagination>
```

:::

## Offset Behavior

The `offset` prop controls how many page buttons appear on each side of the current page:

### Offset 2 (default)

Shows 2 buttons on each side of current page:

- Current page 10 of 50: `[1] ... [8] [9] [10] [11] [12] ... [50]`
- Shows 5 consecutive page numbers centered around current page

### Offset 1

Shows 1 button on each side of current page:

- Current page 10 of 50: `[1] ... [9] [10] [11] ... [50]`
- Shows 3 consecutive page numbers centered around current page

The first and last pages are always visible unless `firstLastNavigation` is false.

## Alignment

Use the `justify` prop to control horizontal alignment:

- `''` (default): Left-aligned
- `'start'`: Explicitly left-aligned
- `'center'`: Centered
- `'end'`: Right-aligned

## Accessibility

The Pagination component implements accessible navigation:

- Uses `<nav>` element with `aria-label` for screen readers
- Page buttons indicate current page with `aria-current="page"`
- Disabled buttons (first/previous on page 1, next/last on last page) have `aria-disabled="true"` and are not focusable
- Each button has descriptive `aria-label` (e.g., "Goto page 5", "Page 5, current page")
- Navigation labels are customizable for internationalization
- Focus management automatically focuses the current page button after page changes

### Best Practices

- Always provide a meaningful `ariaLabel` when multiple pagination components exist on the same page
- Keep the total number of pages reasonable (consider filtering or search for very large datasets)
- Use `offset={1}` for mobile/narrow viewports to reduce visual clutter
- Update the page content when `page-change` event fires
- Consider showing a loading state while fetching new page data
- Display the current page range (e.g., "Showing 11-20 of 200 items") near the pagination

## Styling

### Bordered Style

Set `bordered={true}` to use an outline style for the active page instead of a solid background:

```vue
<VuePagination :current="5" :total-pages="20" bordered />
```

This can be useful for lighter UI themes or to reduce visual weight.

## CSS Shadow Parts

| Part                      | Description                             |
| ------------------------- | --------------------------------------- |
| `ag-pagination-container` | The outer nav container element         |
| `ag-pagination`           | The pagination list (ul) element        |
| `ag-pagination-item`      | Individual pagination item wrapper (li) |
| `ag-pagination-button`    | Individual pagination button            |

### Example

```css
.custom-pagination::part(ag-pagination-container) {
  padding: 1rem;
  background: #f5f5f5;
}

.custom-pagination::part(ag-pagination) {
  gap: 0.5rem;
}

.custom-pagination::part(ag-pagination-button) {
  border-radius: 50%;
  min-width: 2.5rem;
  height: 2.5rem;
}

.custom-pagination::part(ag-pagination-button):hover {
  transform: scale(1.1);
  transition: transform 0.2s;
}
```

## Internationalization

Customize navigation labels for different languages:

```vue
<VuePagination
  :current="1"
  :total-pages="10"
  :navigation-labels="{
    first: '最初',
    previous: '前',
    next: '次',
    last: '最後',
  }"
/>
```

Common translations:

**Spanish:**

```javascript
{ first: 'Primera', previous: 'Anterior', next: 'Siguiente', last: 'Última' }
```

**French:**

```javascript
{ first: 'Première', previous: 'Précédent', next: 'Suivant', last: 'Dernière' }
```

**German:**

```javascript
{ first: 'Erste', previous: 'Zurück', next: 'Weiter', last: 'Letzte' }
```

**Japanese:**

```javascript
{ first: '最初', previous: '前', next: '次', last: '最後' }
```
