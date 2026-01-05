# Breadcrumb

<AlphaWarning />


The `Breadcrumb` component is a <span class="quoted">wayfinding</span> element that helps make users aware of their current location within an application or website.

## Examples

<FrameworkExample
  component="breadcrumb"
  :vue-code="vueCode"
  :lit-code="litCode"
  :react-code="reactCode"
>
  <template #vue>
    <BreadcrumbExamples />
  </template>
  <template #lit>
    <breadcrumb-lit-examples></breadcrumb-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import BreadcrumbExamples from '../examples/BreadcrumbExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/BreadcrumbLitExamples.js'
import vueCode from '../examples/BreadcrumbExamples.vue?raw'
import litCode from '../examples/BreadcrumbLitExamples.js?raw'
import reactCode from '../examples/BreadcrumbReactExamples.jsx?raw'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add Breadcrumb
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

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
```typescript
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'agnosticui-core/breadcrumb';

@customElement('breadcrumb-example')
export class BreadcrumbExample extends LitElement {
  private items = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
  ];

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
    // Set up event listeners for breadcrumb items in the shadow DOM
    const breadcrumbs = this.shadowRoot?.querySelectorAll('ag-breadcrumb');
    breadcrumbs?.forEach((breadcrumb: any) => {
      breadcrumb.items = this.items;

      breadcrumb.addEventListener('breadcrumb-click', (event: Event) => {
        const customEvent = event as CustomEvent;
        console.log(
          `ag-breadcrumb -> breadcrumb-click -- label: ${customEvent.detail.item.label}, href: ${customEvent.detail.item.href}`
        );
      });
    });
  }

  render() {
    return html`
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
    `;
  }
}
```

**Note:** When using breadcrumb components within a custom element's shadow DOM, set up event listeners in the component's lifecycle (e.g., `firstUpdated()`) rather than using `DOMContentLoaded`, as `document.querySelector()` cannot access elements inside shadow DOM. Use `this.shadowRoot.querySelector()` instead.
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
  label: string;
  href?: string;
  current?: boolean;
}
```

## Events

| Event | Framework | Detail | Description |
|-------|-----------|--------|-------------|
| `breadcrumb-click` | Vue: `@breadcrumb-click`<br>React: `onBreadcrumbClick`<br>Lit: `@breadcrumb-click` or `.onBreadcrumbClick` | `{ item: BreadcrumbItem, index: number, event: MouseEvent }` | Fired when a breadcrumb link is clicked. Provides the clicked item, its index, and the original mouse event. |

### Event Patterns

AgnosticUI Breadcrumb supports **three event handling patterns**:

1. **addEventListener** (Lit/Vanilla JS):
```javascript
const breadcrumb = document.querySelector("ag-breadcrumb");
breadcrumb.addEventListener("breadcrumb-click", (e) => {
  console.log("Breadcrumb clicked:", e.detail.item.label);
  console.log("Item index:", e.detail.index);
  e.detail.event.preventDefault();
});
```

2. **Callback props** (Lit/Vanilla JS):
```javascript
const breadcrumb = document.querySelector("ag-breadcrumb");
breadcrumb.onBreadcrumbClick = (e) => {
  console.log("Breadcrumb clicked:", e.detail.item.label);
};
```

3. **Framework event handlers** (Vue/React):
```vue
<VueBreadcrumb
  :items="items"
  @breadcrumb-click="handleClick"
/>
```
```tsx
<ReactBreadcrumb
  items={items}
  onBreadcrumbClick={handleClick}
/>
```

All three patterns work identically thanks to the **dual-dispatch** system.

**Note**: The component does NOT prevent default navigation by default. To implement client-side routing, call `event.detail.event.preventDefault()` in your event handler.

## CSS Shadow Parts

The Breadcrumb component exposes the following CSS Shadow Parts for custom styling:

| Part | Description |
|------|-------------|
| `ag-breadcrumb-item` | Individual breadcrumb list item wrapper |
| `ag-breadcrumb-item-link` | Clickable breadcrumb link element |
| `ag-breadcrumb-item-current` | Current/active breadcrumb item (non-clickable) |

### Customization Example

```css
ag-breadcrumb::part(ag-breadcrumb-item-link) {
  color: #667eea;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

ag-breadcrumb::part(ag-breadcrumb-item-link):hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

ag-breadcrumb::part(ag-breadcrumb-item-current) {
  color: #764ba2;
  font-weight: 700;
  padding: 0.5rem 1rem;
}
```

See the **CSS Shadow Parts Customization** section in the examples above for more styling demonstrations.

## Notes

- The last item or any item with `current: true` is automatically styled as the current page (not clickable)
- Items without an `href` are rendered as plain text
- The `primary` prop changes link colors to use the primary theme color (typically blue)
- All three implementations share the same underlying styles and behavior
- Use CSS Shadow Parts for advanced customization while maintaining component encapsulation
