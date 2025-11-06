# Pagination

Pagination allows users to navigate through pages of content. It displays page numbers and navigation controls, making it easy to move between large sets of data.

## Examples

<PaginationExamples />

<script setup>
import PaginationExamples from '../examples/PaginationExamples.vue'
import ContentPaginationExamples from '../examples/ContentPaginationExamples.vue'
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

    <!-- With first/last navigation -->
    <VuePagination
      :current="5"
      :total-pages="10"
      :first-last-navigation="true"
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

      {/* With first/last navigation */}
      <ReactPagination current={5} totalPages={10} firstLastNavigation={true} />

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

  <!-- With first/last navigation -->
  <ag-pagination
    current="5"
    total-pages="10"
    first-last-navigation="true"
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
| `firstLastNavigation` | `boolean`                            | `false`        | Show first/last page navigation buttons                                   |
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

---

# Content Pagination

Content Pagination provides navigation between sequential content items (like documentation pages or articles). It displays previous/next links and an optional parent/overview link, making it easy to navigate through structured content hierarchies.

## Examples

<ContentPaginationExamples />

## Usage

::: details Vue

```vue
<template>
  <section>
    <!-- Basic content pagination -->
    <VueContentPagination
      :previous="{ title: 'Introduction', href: '/introduction' }"
      :next="{ title: 'Getting Started', href: '/getting-started' }"
      :parent="{ title: 'Documentation', href: '/documentation' }"
      @navigate="handleNavigate"
    />

    <!-- Previous/Next only (no parent) -->
    <VueContentPagination
      :previous="{ title: 'Installation' }"
      :next="{ title: 'Configuration' }"
    />

    <!-- Bordered style -->
    <VueContentPagination
      :previous="{ title: 'Chapter 1', href: '/chapter-1' }"
      :next="{ title: 'Chapter 3', href: '/chapter-3' }"
      bordered
    />

    <!-- Custom icons -->
    <VueContentPagination
      :previous="{ title: 'Prev Page' }"
      :next="{ title: 'Next Page' }"
    >
      <template #previous-icon><span>◀️</span></template>
      <template #next-icon><span>▶️</span></template>
      <template #parent-icon><span>⬆️</span></template>
    </VueContentPagination>
  </section>
</template>

<script>
import { VueContentPagination } from "agnosticui-core/content-pagination/vue";

export default {
  components: {
    VueContentPagination,
  },
  methods: {
    handleNavigate(detail) {
      console.log("Navigate to:", detail);
      // detail: { type: 'previous' | 'next' | 'parent', item: { title, href? } }
      // Handle navigation (e.g., router.push, window.location, etc.)
    },
  },
};
</script>
```

:::

::: details React

```tsx
import { ReactContentPagination } from "agnosticui-core/content-pagination/react";

export default function ContentPaginationExample() {
  const handleNavigate = (event) => {
    console.log("Navigate to:", event.detail);
    // event.detail: { type: 'previous' | 'next' | 'parent', item: { title, href? } }
  };

  return (

      {/* Basic content pagination */}
      <ReactContentPagination
        previous={{ title: "Introduction", href: "/introduction" }}
        next={{ title: "Getting Started", href: "/getting-started" }}
        parent={{ title: "Documentation", href: "/documentation" }}
        onNavigate={handleNavigate}
      />

      {/* Previous/Next only */}


      {/* Bordered style */}
      <ReactContentPagination
        previous={{ title: "Chapter 1", href: "/chapter-1" }}
        next={{ title: "Chapter 3", href: "/chapter-3" }}
        bordered
      />

  );
}
```

:::

::: details Lit (Web Components)

```html
import "agnosticui-core/content-pagination";
document.addEventListener("DOMContentLoaded", () => { const contentPagination =
document.querySelector("#my-content-pagination");
contentPagination?.addEventListener("navigate", (e) => { console.log("Navigate
to:", e.detail); // e.detail: { type: 'previous' | 'next' | 'parent', item: {
title, href? } } }); });
```

:::

## Props

| Prop        | Type          | Default                | Description                                 |
| ----------- | ------------- | ---------------------- | ------------------------------------------- |
| `previous`  | `ContentItem` | `undefined`            | Previous content item                       |
| `next`      | `ContentItem` | `undefined`            | Next content item                           |
| `parent`    | `ContentItem` | `undefined`            | Parent/overview content item                |
| `ariaLabel` | `string`      | `'Content navigation'` | ARIA label for the navigation element       |
| `bordered`  | `boolean`     | `false`                | Show bordered style around navigation links |

### ContentItem Interface

```typescript
interface ContentItem {
  title: string; // Display title for the link
  href?: string; // Optional URL (if omitted, navigate event still fires)
}
```

## Events

The Content Pagination component follows AgnosticUI v2 event conventions with **dual-dispatch** for the `navigate` custom event.

| Event      | Framework                                                                    | Detail                                                          | Description                              |
| ---------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------- |
| `navigate` | Vue: `@navigate`<br>React: `onNavigate`<br>Lit: `@navigate` or `.onNavigate` | `{ type: 'previous' \| 'next' \| 'parent', item: ContentItem }` | Fired when user clicks a navigation link |

### Event Handling Examples

::: details Vue

```vue
<template>
  <VueContentPagination
    :previous="previous"
    :next="next"
    :parent="parent"
    @navigate="handleNavigate"
  />
</template>

<script setup>
import { VueContentPagination } from "agnosticui-core/content-pagination/vue";
import { useRouter } from "vue-router";

const router = useRouter();

const previous = { title: "Introduction", href: "/docs/introduction" };
const next = { title: "Getting Started", href: "/docs/getting-started" };
const parent = { title: "Documentation", href: "/docs" };

const handleNavigate = (detail) => {
  console.log("Navigate:", detail);
  // detail: { type: 'previous', item: { title: 'Introduction', href: '/docs/introduction' } }

  if (detail.item.href) {
    router.push(detail.item.href);
  }
};
</script>
```

:::

::: details React

```tsx
import { ReactContentPagination } from "agnosticui-core/content-pagination/react";
import { useNavigate } from "react-router-dom";

export default function ContentPaginationEventExample() {
  const navigate = useNavigate();

  const handleNavigate = (event) => {
    console.log("Navigate:", event.detail);
    // event.detail: { type: 'next', item: { title: 'Getting Started', href: '/docs/getting-started' } }

    if (event.detail.item.href) {
      navigate(event.detail.item.href);
    }
  };

  return (
    <ReactContentPagination
      previous={{ title: "Introduction", href: "/docs/introduction" }}
      next={{ title: "Getting Started", href: "/docs/getting-started" }}
      parent={{ title: "Documentation", href: "/docs" }}
      onNavigate={handleNavigate}
    />
  );
}
```

:::

::: details Lit (Web Components)

```html
import "agnosticui-core/content-pagination"; const contentPagination =
document.querySelector("#my-content-pagination"); // Pattern 1: Using
addEventListener contentPagination.addEventListener("navigate", (event) => {
console.log("Navigate:", event.detail); // event.detail: { type: 'parent', item:
{ title: 'Documentation', href: '/docs' } } if (event.detail.item.href) {
window.location.href = event.detail.item.href; } }); // Pattern 2: Using
callback prop contentPagination.onNavigate = (event) => { console.log("Navigate
(callback):", event.detail); };
```

:::

## Slots/Children

Content Pagination provides slots for customizing navigation icons:

| Slot/Template   | Description                       |
| --------------- | --------------------------------- |
| `previous-icon` | Custom icon for the previous link |
| `next-icon`     | Custom icon for the next link     |
| `parent-icon`   | Custom icon for the parent link   |

### Custom Icons Example

::: details Vue

```vue
<template>
  <VueContentPagination :previous="previous" :next="next" :parent="parent">
    <template #previous-icon><span>◀️</span></template>
    <template #next-icon><span>▶️</span></template>
    <template #parent-icon><span>⬆️</span></template>
  </VueContentPagination>
</template>
```

:::

::: details React

```tsx

  ◀️
  ▶️
  ⬆️

```

:::

## Accessibility

The Content Pagination component implements accessible navigation:

- Uses `<nav>` element with `aria-label` for screen readers
- Each link has descriptive text (title) for clarity
- Links without `href` are rendered as buttons with appropriate semantics
- Keyboard navigation works seamlessly (Tab, Enter/Space)

### Best Practices

- Provide descriptive titles that clearly indicate the destination
- Include `href` when possible for standard link behavior and SEO
- Use the `navigate` event to integrate with client-side routing
- Position content pagination at the end of your content for natural flow
- Consider showing content pagination at both top and bottom for long content

## Styling

### Bordered Style

Set `bordered={true}` to display borders around navigation links:

```vue
<VueContentPagination :previous="previous" :next="next" bordered />
```

## CSS Shadow Parts

| Part                              | Description                       |
| --------------------------------- | --------------------------------- |
| `ag-content-pagination-container` | The outer nav container element   |
| `ag-content-pagination-parent`    | The parent/overview link          |
| `ag-content-pagination-previous`  | The previous link container       |
| `ag-content-pagination-next`      | The next link container           |
| `ag-content-pagination-link`      | Individual navigation link/button |

### Example

```css
.custom-content-pagination::part(ag-content-pagination-container) {
  padding: 2rem 1rem;
  background: #f9fafb;
  border-radius: 8px;
}

.custom-content-pagination::part(ag-content-pagination-parent) {
  margin-bottom: 1.5rem;
}

.custom-content-pagination::part(ag-content-pagination-link) {
  padding: 1rem 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.2s;
}

.custom-content-pagination::part(ag-content-pagination-link):hover {
  background-color: #dbeafe;
  border-color: #3b82f6;
  transform: translateY(-2px);
}
```

## Use Cases

Content Pagination is ideal for:

- **Documentation sites**: Navigate between guide pages, API references, and tutorials
- **Multi-page articles**: Move between chapters or sections of long-form content
- **Course materials**: Progress through lessons with easy navigation to course overview
- **Blog series**: Link related posts in a series with navigation to the series index
- **Wizard flows**: Guide users through multi-step processes with clear navigation
