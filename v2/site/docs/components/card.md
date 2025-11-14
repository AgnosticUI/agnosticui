# Card

Card is a versatile container for grouping related content and actions. It provides a clean, visual structure for organizing information and can be customized with shadows, animations, color variants, and more.

## Examples

<CardExamples />

<script setup>
import CardExamples from '../examples/CardExamples.vue'
</script>

## Usage

::: details Vue

```vue
<template>
  <section>
    <!-- Basic Card -->
    <VueCard>
      <h3>Card Title</h3>
      <p>Basic card content with default styling.</p>
    </VueCard>

    <!-- Card with Shadow and Animation -->
    <VueCard :is-shadow="true" :is-animated="true">
      <h3>Animated Card</h3>
      <p>Hover to see the animation effect.</p>
    </VueCard>

    <!-- Card with Variant -->
    <VueCard variant="success">
      <h3>Success</h3>
      <p>Operation completed successfully!</p>
    </VueCard>

    <!-- Card with Slots -->
    <VueCard :is-shadow="true">
      <template #header>
        <h4 style="margin: 0;">Header Slot</h4>
      </template>

      <div>
        <p>Main content goes here.</p>
      </div>

      <template #footer>
        <button>Action</button>
      </template>
    </VueCard>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueCard } from "agnosticui-core/card/vue";

export default defineComponent({
  components: { VueCard },
});
</script>
```

:::

::: details React

```tsx
import { ReactCard } from "agnosticui-core/card/react";

export default function CardExamples() {
  return (
    <section>
      {/* Basic Card */}
      <ReactCard>
        <h3>Card Title</h3>
        <p>Basic card content with default styling.</p>
      </ReactCard>

      {/* Card with Shadow and Animation */}
      <ReactCard isShadow={true} isAnimated={true}>
        <h3>Animated Card</h3>
        <p>Hover to see the animation effect.</p>
      </ReactCard>

      {/* Card with Variant */}
      <ReactCard variant="success">
        <h3>Success</h3>
        <p>Operation completed successfully!</p>
      </ReactCard>

      {/* Card with Slots */}
      <ReactCard isShadow={true}>
        <h4 slot="header" style={{ margin: 0 }}>
          Header Slot
        </h4>

        <div>
          <p>Main content goes here.</p>
        </div>

        <button slot="footer">Action</button>
      </ReactCard>
    </section>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/card";
</script>

<!-- Basic Card -->
<ag-card>
  <h3>Card Title</h3>
  <p>Basic card content with default styling.</p>
</ag-card>

<!-- Card with Shadow and Animation -->
<ag-card isshadow isanimated>
  <h3>Animated Card</h3>
  <p>Hover to see the animation effect.</p>
</ag-card>

<!-- Card with Variant -->
<ag-card variant="success">
  <h3>Success</h3>
  <p>Operation completed successfully!</p>
</ag-card>

<!-- Card with Slots -->
<ag-card isshadow>
  <h4 slot="header" style="margin: 0;">Header Slot</h4>

  <div>
    <p>Main content goes here.</p>
  </div>

  <button slot="footer">Action</button>
</ag-card>
```

:::

## Props

| Prop         | Type                                                | Default | Description                                               |
| ------------ | --------------------------------------------------- | ------- | --------------------------------------------------------- |
| `isStacked`  | `boolean`                                           | `false` | Applies vertical spacing between slotted children         |
| `isShadow`   | `boolean`                                           | `false` | Adds box-shadow with enhanced hover effect                |
| `isAnimated` | `boolean`                                           | `false` | Enables smooth transitions on hover (translateY + shadow) |
| `isRounded`  | `boolean`                                           | `false` | Applies border-radius to corners                          |
| `variant`    | `'success' \| 'info' \| 'error' \| 'warning' \| ''` | `''`    | Color variant for semantic meaning                        |

## Slots

| Slot      | Description                                                 |
| --------- | ----------------------------------------------------------- |
| `header`  | Optional header content displayed at the top of the card    |
| `default` | Main content of the card                                    |
| `footer`  | Optional footer content displayed at the bottom of the card |

## CSS Shadow Parts

Shadow Parts allow you to style internal elements of the card from outside the shadow DOM using the `::part()` CSS selector.

| Part              | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `ag-card-wrapper` | The main wrapper element that contains all card content |
| `ag-card-header`  | The header section wrapper (even when empty)            |
| `ag-card-content` | The main content section wrapper                        |
| `ag-card-footer`  | The footer section wrapper (even when empty)            |

### Customization Example

```css
/* Customize the card wrapper */
ag-card::part(ag-card-wrapper) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

/* Style the header section */
ag-card::part(ag-card-header) {
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 1rem;
}

/* Customize content styling */
ag-card::part(ag-card-content) {
  color: white;
  font-size: 1.1rem;
}

/* Style the footer section */
ag-card::part(ag-card-footer) {
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  padding-top: 1rem;
}
```

## Design Patterns

### Basic Content Card

Use for grouping related information with a simple border and background:

```vue
<VueCard>
  <h3>Product Title</h3>
  <p>Product description goes here.</p>
  <span>$49.99</span>
</VueCard>
```

### Interactive Card with Hover Effects

Combine shadow and animation for engaging hover interactions:

```vue
<VueCard :is-shadow="true" :is-animated="true">
  <h3>Featured Item</h3>
  <p>Hover to see the lift effect.</p>
</VueCard>
```

### Semantic Cards with Variants

Use variant colors to convey status or context:

```vue
<VueCard variant="success">
  <h3>Payment Successful</h3>
  <p>Your order has been confirmed.</p>
</VueCard>
```

### Structured Card with Slots

Use slots for clearly separated header/footer sections. The header and footer automatically get appropriate styling (borders, padding) and are hidden when empty:

```vue
<!-- Card with header and footer -->
<VueCard :is-shadow="true">
  <template #header>
    <h3 style="margin: 0;">Settings</h3>
  </template>

  <p>Configure your preferences</p>

  <template #footer>
    <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
      <button>Cancel</button>
      <button>Save</button>
    </div>
  </template>
</VueCard>

<!-- Card with only header -->
<VueCard :is-shadow="true">
  <template #header>
    <h3 style="margin: 0;">Product Details</h3>
  </template>

  <p>Product information and description...</p>
</VueCard>

<!-- Card with only footer -->
<VueCard>
  <p>Review the information below</p>

  <template #footer>
    <button>Learn More</button>
  </template>
</VueCard>
```

### Clickable Card Pattern

Create fully clickable cards while maintaining accessibility:

```html
<ag-card isshadow isanimated>
  <h4 slot="header" style="margin: 0;">
    <a
      href="/article"
      class="card-primary-action"
      style="text-decoration: none; color: inherit;"
    >
      Article Title
    </a>
  </h4>

  <p>Article summary text...</p>

  <button slot="footer" class="card-secondary-action">Bookmark</button>
</ag-card>
```

The `card-primary-action` class creates a pseudo-element that covers the entire card, making it fully clickable. Elements with `card-secondary-action` class maintain their own click handlers.

## Accessibility

- Cards are semantic containers that help organize content visually
- When using clickable cards, ensure the primary link is properly accessible
- Use appropriate heading levels within cards to maintain document outline
- Provide sufficient color contrast for variant cards
- Animation effects respect `prefers-reduced-motion` user preferences

## Notes

- **Combining Features**: Multiple props can be combined (e.g., `variant="success" :is-shadow="true" :is-animated="true"`)
- **Responsive Design**: Cards are `width: 100%` by default and work well in grid layouts
- **Lit Property Binding**: In Lit templates, use property bindings for boolean props
- **Reduced Motion**: Animation transitions are automatically disabled for users who prefer reduced motion
- All three framework implementations share the same underlying styles and behavior
