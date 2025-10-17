# Card

Cards are versatile containers for grouping related content and actions. They provide a clean, visual structure for organizing information and can be customized with shadows, animations, color variants, and more.

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
        <div style="padding: 1rem; background: #f5f5f5;">
          <h4>Header Slot</h4>
        </div>
      </template>

      <div>
        <p>Main content goes here.</p>
      </div>

      <template #footer>
        <div style="padding: 1rem; background: #f5f5f5;">
          <button>Action</button>
        </div>
      </template>
    </VueCard>

    <!-- Unskinned Card (no background/border) -->
    <VueCard :is-skinned="false">
      <h3>Layout Card</h3>
      <p>Used for layout without visual styling.</p>
    </VueCard>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueCard } from 'agnosticui-core/card/vue';

export default defineComponent({
  components: { VueCard }
});
</script>
```
:::

::: details React
```tsx
import { ReactCard } from 'agnosticui-core/card/react';

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
        <div slot="header" style={{ padding: '1rem', background: '#f5f5f5' }}>
          <h4>Header Slot</h4>
        </div>

        <div>
          <p>Main content goes here.</p>
        </div>

        <div slot="footer" style={{ padding: '1rem', background: '#f5f5f5' }}>
          <button>Action</button>
        </div>
      </ReactCard>

      {/* Unskinned Card */}
      <ReactCard isSkinned={false}>
        <h3>Layout Card</h3>
        <p>Used for layout without visual styling.</p>
      </ReactCard>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/card';
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
  <div slot="header" style="padding: 1rem; background: #f5f5f5;">
    <h4>Header Slot</h4>
  </div>

  <div>
    <p>Main content goes here.</p>
  </div>

  <div slot="footer" style="padding: 1rem; background: #f5f5f5;">
    <button>Action</button>
  </div>
</ag-card>

<!-- Unskinned Card -->
<ag-card isskinned="false">
  <h3>Layout Card</h3>
  <p>Used for layout without visual styling.</p>
</ag-card>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isSkinned` | `boolean` | `true` | Applies background color and border. Set to `false` for layout-only cards |
| `isStacked` | `boolean` | `false` | Applies vertical spacing between slotted children |
| `isShadow` | `boolean` | `false` | Adds box-shadow with enhanced hover effect |
| `isAnimated` | `boolean` | `false` | Enables smooth transitions on hover (translateY + shadow) |
| `isRounded` | `boolean` | `false` | Applies border-radius to corners |
| `variant` | `'success' \| 'info' \| 'error' \| 'warning' \| ''` | `''` | Color variant for semantic meaning |

## Slots

| Slot | Description |
|------|-------------|
| `header` | Optional header content displayed at the top of the card |
| `default` | Main content of the card |
| `footer` | Optional footer content displayed at the bottom of the card |

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
Use slots for clearly separated header/footer sections:
```vue
<VueCard>
  <template #header>
    <h3>Settings</h3>
  </template>

  <p>Configure your preferences</p>

  <template #footer>
    <button>Save</button>
    <button>Cancel</button>
  </template>
</VueCard>
```

### Clickable Card Pattern
Create fully clickable cards while maintaining accessibility:
```html
<ag-card isshadow isanimated>
  <a href="/article" class="card-primary-action" style="text-decoration: none; color: inherit;">
    <h3>Article Title</h3>
  </a>
  <p>Article summary text...</p>
  <button class="card-secondary-action">Bookmark</button>
</ag-card>
```

The `card-primary-action` class creates a pseudo-element that covers the entire card, making it fully clickable. Elements with `card-secondary-action` class maintain their own click handlers.

### Layout Card
Use unskinned cards for layout structure without visual styling:
```vue
<VueCard :is-skinned="false" :is-stacked="true">
  <FormSection />
  <FormSection />
  <FormSection />
</VueCard>
```

## Accessibility

- Cards are semantic containers that help organize content visually
- When using clickable cards, ensure the primary link is properly accessible
- Use appropriate heading levels within cards to maintain document outline
- Provide sufficient color contrast for variant cards
- Animation effects respect `prefers-reduced-motion` user preferences

## Notes

- **Default Styling**: Cards are "skinned" by default (with background and border). Set `:is-skinned="false"` for layout-only usage
- **Combining Features**: Multiple props can be combined (e.g., `variant="success" :is-shadow="true" :is-animated="true"`)
- **Responsive Design**: Cards are `width: 100%` by default and work well in grid layouts
- **Lit Property Binding**: In Lit templates, use property binding (`.isSkinned=${value}`) for boolean props instead of attribute binding (`?isskinned`)
- **Reduced Motion**: Animation transitions are automatically disabled for users who prefer reduced motion
- All three framework implementations share the same underlying styles and behavior
