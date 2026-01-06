# Pagination

<AlphaWarning />


Pagination allows users to navigate through pages of content. It displays page numbers and navigation controls, making it easy to move between large sets of data.

## Examples

<FrameworkExample
  component="pagination"
  :vue-code="paginationVueCode"
  :lit-code="paginationLitCode"
  :react-code="paginationReactCode"
>
  <template #vue>
    <PaginationExamples />
  </template>
  <template #lit>
    <pagination-lit-examples></pagination-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import PaginationExamples from '../examples/PaginationExamples.vue'
import ContentPaginationExamples from '../examples/ContentPaginationExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/PaginationLitExamples.js'
import '../examples/ContentPaginationLitExamples.js'
import paginationVueCode from '../examples/PaginationExamples.vue?raw'
import paginationLitCode from '../examples/PaginationLitExamples.js?raw'
import paginationReactCode from '../examples/PaginationReactExamples.jsx?raw'
import contentPaginationVueCode from '../examples/ContentPaginationExamples.vue?raw'
import contentPaginationLitCode from '../examples/ContentPaginationLitExamples.js?raw'
import contentPaginationReactCode from '../examples/ContentPaginationReactExamples.jsx?raw'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add Pagination
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue

```vue
<template>
  <section>
    <VuePagination
      :current="currentPage"
      :total-pages="20"
      @page-change="handlePageChange"
    />

    <VuePagination :current="1" :total-pages="15" bordered />

    <VuePagination
      :current="5"
      :total-pages="10"
      :first-last-navigation="true"
    />

    <VuePagination :current="10" :total-pages="20" :offset="1" />

    <VuePagination :current="1" :total-pages="10" justify="center" />
    <VuePagination
      :current="1"
      :total-pages="10"
      :first-last-navigation="true"
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
      <ReactPagination
        current={currentPage}
        totalPages={20}
        onPageChange={handlePageChange}
      />

      <ReactPagination current={1} totalPages={15} bordered />

      <ReactPagination current={5} totalPages={10} firstLastNavigation={true} />

      <ReactPagination current={10} totalPages={20} offset={1} />

      <ReactPagination current={1} totalPages={10} justify="center" />
      <ReactPagination
        current={1}
        totalPages={10}
        firstLastNavigation={true}
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

```typescript
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'agnosticui-core/pagination';

@customElement('pagination-example')
export class PaginationExample extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `;

  firstUpdated() {
    // Set up event listener for pagination in the shadow DOM
    const pagination = this.shadowRoot?.querySelector('#my-pagination');

    pagination?.addEventListener('page-change', (e: Event) => {
      const customEvent = e as CustomEvent;
      console.log(`Page changed to ${customEvent.detail.page}`);
    });
  }

  render() {
    return html`
      <section>
        <ag-pagination
          id="my-pagination"
          current="5"
          total-pages="20"
        ></ag-pagination>

        <ag-pagination current="1" total-pages="15" bordered></ag-pagination>

        <ag-pagination
          current="5"
          total-pages="10"
          first-last-navigation="true"
        ></ag-pagination>

        <ag-pagination current="10" total-pages="20" offset="1"></ag-pagination>

        <ag-pagination current="1" total-pages="10" justify="center"></ag-pagination>
      </section>
    `;
  }
}
```

**Note:** When using pagination components within a custom element's shadow DOM, set up event listeners in the component's lifecycle (e.g., `firstUpdated()`) rather than using `DOMContentLoaded`, as `document.querySelector()` cannot access elements inside shadow DOM. Use `this.shadowRoot.querySelector()` instead.

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
  first: string;
  previous: string;
  next: string;
  last: string;
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

  pagination.addEventListener("page-change", (event) => {
    console.log("Page changed:", event.detail);
  });

  pagination.onPageChange = (event) => {
    console.log("Page changed (callback):", event.detail);
  };
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
  :first-last-navigation="true"
  :navigation-labels="{
    first: '最初',
    previous: '前',
    next: '次',
    last: '最後',
  }"
/>
```

```javascript
{ first: "最初", previous: "前", next: "次", last: "最後" }
```

```javascript
{ first: "Primera", previous: "Anterior", next: "Siguiente", last: "Última" }
```

---

# Content Pagination

Content Pagination provides navigation between sequential content items (like documentation pages or articles). It displays previous/next links and an optional parent/overview link, making it easy to navigate through structured content hierarchies.

## Examples

<FrameworkExample
  component="content-pagination"
  :vue-code="contentPaginationVueCode"
  :lit-code="contentPaginationLitCode"
  :react-code="contentPaginationReactCode"
>
  <template #vue>
    <ContentPaginationExamples />
  </template>
  <template #lit>
    <content-pagination-lit-examples></content-pagination-lit-examples>
  </template>
</FrameworkExample>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add Pagination
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue

```vue
<template>
  <section>
    <VueContentPagination
      :previous="{ title: 'Introduction', href: '/introduction' }"
      :next="{ title: 'Getting Started', href: '/getting-started' }"
      :parent="{ title: 'Documentation', href: '/documentation' }"
      @navigate="handleNavigate"
    />

    <VueContentPagination
      :previous="{ title: 'Installation' }"
      :next="{ title: 'Configuration' }"
    />

    <VueContentPagination
      :previous="{ title: 'Chapter 1', href: '/chapter-1' }"
      :next="{ title: 'Chapter 3', href: '/chapter-3' }"
      bordered
    />
    <VueContentPagination
      :previous="{ title: 'Prev Page' }"
      :next="{ title: 'Next Page' }"
    >
      <template #previous-icon><ChevronLeft :size="20" /></template>
      <template #next-icon><ChevronRight :size="20" /></template>
      <template #parent-icon><ChevronUp :size="20" /></template>
    </VueContentPagination>
  </section>
</template>

<script>
import { VueContentPagination } from "agnosticui-core/content-pagination/vue";
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-vue-next";

export default {
  components: {
    VueContentPagination,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
  },
  methods: {
    handleNavigate(detail) {
      console.log("Navigate to:", detail);
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
  };

  return (
    <>
      <ReactContentPagination
        previous={{ title: "Introduction", href: "/introduction" }}
        next={{ title: "Getting Started", href: "/getting-started" }}
        parent={{ title: "Documentation", href: "/documentation" }}
        onNavigate={handleNavigate}
      />

      <ReactContentPagination
        previous={{ title: "Chapter 1", href: "/chapter-1" }}
        next={{ title: "Chapter 3", href: "/chapter-3" }}
        bordered
      />
    </>
  );
}
```

:::

::: details Lit (Web Components)

```typescript
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'agnosticui-core/content-pagination';

@customElement('content-pagination-example')
export class ContentPaginationExample extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `;

  firstUpdated() {
    // Set up event listener for content pagination in the shadow DOM
    const contentPagination = this.shadowRoot?.querySelector('#my-content-pagination');

    contentPagination?.addEventListener('navigate', (e: Event) => {
      const customEvent = e as CustomEvent;
      console.log('Navigate to:', customEvent.detail);
    });
  }

  render() {
    return html`
      <section>
        <ag-content-pagination
          id="my-content-pagination"
          previous='{"title": "Introduction", "href": "/introduction"}'
          next='{"title": "Getting Started", "href": "/getting-started"}'
          parent='{"title": "Documentation", "href": "/documentation"}'
        ></ag-content-pagination>

        <ag-content-pagination
          previous='{"title": "Chapter 1", "href": "/chapter-1"}'
          next='{"title": "Chapter 3", "href": "/chapter-3"}'
          bordered
        ></ag-content-pagination>
        <ag-content-pagination
          previous='{"title": "Prev Page"}'
          next='{"title": "Next Page"}'
        >
          <span slot="previous-icon">←</span>
          <span slot="next-icon">→</span>
          <span slot="parent-icon">↑</span>
        </ag-content-pagination>
      </section>
    `;
  }
}
```

**Note:** When using content-pagination components within a custom element's shadow DOM, set up event listeners in the component's lifecycle (e.g., `firstUpdated()`) rather than using `DOMContentLoaded`, as `document.querySelector()` cannot access elements inside shadow DOM. Use `this.shadowRoot.querySelector()` instead.

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
  title: string;
  href?: string;
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

```lit

import "agnosticui-core/content-pagination";

const contentPagination = document.querySelector("#my-content-pagination");

contentPagination.addEventListener("navigate", (event) => {
  console.log("Navigate:", event.detail);

  if (event.detail.href) {
    window.location.href = event.detail.href;
  }
});

contentPagination.onNavigate = (event) => {
  console.log("Navigate (callback):", event.detail);
};

```

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
    <template #previous-icon><ChevronLeft :size="20" /></template>
    <template #next-icon><ChevronRight :size="20" /></template>
    <template #parent-icon><ChevronUp :size="20" /></template>
  </VueContentPagination>
</template>
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
