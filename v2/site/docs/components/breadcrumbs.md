# Breadcrumbs

The `Breadcrumb` component is a <span class="quoted">wayfinding</span> element that helps make users aware of their current location within an application or website.

## Examples

<BreadcrumbExamples />

<script setup>
import BreadcrumbExamples from '../examples/BreadcrumbExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <div class="mbe4">
      <div class="mbe2">
        <h3>Default</h3>
      </div>
      <VueBreadcrumb
        :items="items"
        @breadcrumb-click="handleClick"
      />
    </div>
    <div class="mbe4">
      <div class="mbe2">
        <h3>Types</h3>
      </div>
      <VueBreadcrumb
        type="slash"
        :items="items"
        @breadcrumb-click="handleClick"
      />
      <VueBreadcrumb
        type="bullet"
        :items="items"
        @breadcrumb-click="handleClick"
      />
      <VueBreadcrumb
        type="arrow"
        :items="items"
        @breadcrumb-click="handleClick"
      />
      <VueBreadcrumb
        primary
        type="arrow"
        :items="items"
        @breadcrumb-click="handleClick"
      />
    </div>
  </section>
</template>
<script>
import VueBreadcrumb from "agnosticui-core/breadcrumb/vue";
export default {
  name: "BreadcrumbExamples",
  components: { VueBreadcrumb },
  data() {
    return {
      items: [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Products", href: "#products" },
      ],
    };
  },
  methods: {
    handleClick(event) {
      console.log(
        `VueBreadcrumb -> handleClick -- label: ${event.item.label}, href: ${event.item.href}`
      );
    },
  },
};
</script>
```
:::

::: details React
```tsx
import { ReactBreadcrumb, type BreadcrumbItem } from 'agnosticui-core/breadcrumb/react';

export default function BreadcrumbExamples() {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
  ];

  const handleClick = (event: CustomEvent) => {
    console.log(
      `ReactBreadcrumb -> handleClick -- label: ${event.detail.item.label}, href: ${event.detail.item.href}`
    );
  };

  return (
    <section>
      <div className="mbe4">
        <div className="mbe2">
          <h3>Default</h3>
        </div>
        <ReactBreadcrumb
          items={items}
          onBreadcrumbClick={handleClick}
        />
      </div>
      <div className="mbe4">
        <div className="mbe2">
          <h3>Types</h3>
        </div>
        <ReactBreadcrumb
          type="slash"
          items={items}
          onBreadcrumbClick={handleClick}
        />
        <ReactBreadcrumb
          type="bullet"
          items={items}
          onBreadcrumbClick={handleClick}
        />
        <ReactBreadcrumb
          type="arrow"
          items={items}
          onBreadcrumbClick={handleClick}
        />
        <ReactBreadcrumb
          primary
          type="arrow"
          items={items}
          onBreadcrumbClick={handleClick}
        />
      </div>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/breadcrumb';

  const items = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
  ];

  document.addEventListener('DOMContentLoaded', () => {
    // Set items on breadcrumb elements
    document.querySelectorAll('ag-breadcrumb').forEach(breadcrumb => {
      breadcrumb.items = items;
      
      // Add event listener
      breadcrumb.addEventListener('breadcrumb-click', (event) => {
        console.log(
          `ag-breadcrumb -> breadcrumb-click -- label: ${event.detail.item.label}, href: ${event.detail.item.href}`
        );
      });
    });
  });
</script>

<section>
  <div class="mbe4">
    <div class="mbe2">
      <h3>Default</h3>
    </div>
    <ag-breadcrumb></ag-breadcrumb>
  </div>
  <div class="mbe4">
    <div class="mbe2">
      <h3>Types</h3>
    </div>
    <ag-breadcrumb type="slash"></ag-breadcrumb>
    <ag-breadcrumb type="bullet"></ag-breadcrumb>
    <ag-breadcrumb type="arrow"></ag-breadcrumb>
    <ag-breadcrumb primary type="arrow"></ag-breadcrumb>
  </div>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | `[]` | Array of breadcrumb items to display |
| `type` | `'default' \| 'slash' \| 'bullet' \| 'arrow'` | `'default'` | Separator style between breadcrumb items |
| `primary` | `boolean` | `false` | Uses primary (blue) color styling for links |
| `ariaLabel` | `string` | `'Breadcrumb'` | Custom aria-label for the navigation landmark |

### BreadcrumbItem Interface

```typescript
interface BreadcrumbItem {
  label: string;      // Display text for the breadcrumb
  href?: string;      // Link URL (optional)
  current?: boolean;  // Marks item as current page (optional)
}
```

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `breadcrumb-click` | `{ item: BreadcrumbItem, index: number }` | Emitted when a breadcrumb item is clicked |

## Notes

- The last item or any item with `current: true` is automatically styled as the current page (not clickable)
- Items without an `href` are rendered as plain text
- The `primary` prop changes link colors to use the primary theme color (typically blue)
- All three implementations share the same underlying styles and behavior
