# Flex

Flex components provide a powerful and intuitive way to create flexible layouts using CSS Flexbox. They offer a declarative API with dedicated components for common patterns.

<FlexExamples />

<script setup>
import FlexExamples from '../examples/FlexExamples.vue'
</script>

## Components

AgnosticUI provides four flex components plus two convenient aliases:

- **FlexContainer** - Base flex container with full control
- **FlexRow** - Horizontal layout (direction: row)
- **FlexCol** - Vertical layout (direction: column)
- **FlexInline** - Inline flex container
- **Stack** - Alias for FlexCol (familiar to Mantine/Chakra users)
- **Group** - Alias for FlexRow (familiar to Mantine users)

## Usage

::: details Vue
```vue
<template>
  <div>
    <!-- Basic row layout -->
    <VueFlexRow gap="1rem">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </VueFlexRow>

    <!-- Centered column -->
    <VueFlexCol gap="1rem" justify="center" align="center">
      <div>Centered Item 1</div>
      <div>Centered Item 2</div>
    </VueFlexCol>

    <!-- Space between -->
    <VueFlexRow justify="space-between">
      <div>Start</div>
      <div>End</div>
    </VueFlexRow>

    <!-- Stretch children to equal widths -->
    <VueFlexRow gap="1rem" :stretch-children="true">
      <div>Auto width 1</div>
      <div>Auto width 2</div>
      <div>Auto width 3</div>
    </VueFlexRow>

    <!-- Wrapping layout -->
    <VueFlexRow gap="1rem" wrap="wrap">
      <div v-for="i in 10" :key="i">Item {{ i }}</div>
    </VueFlexRow>

    <!-- Using Stack and Group aliases -->
    <VueStack gap="1rem">
      <div>Stacked Item 1</div>
      <div>Stacked Item 2</div>
    </VueStack>

    <VueGroup gap="0.5rem">
      <button>Action 1</button>
      <button>Action 2</button>
    </VueGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  VueFlexRow,
  VueFlexCol,
  VueStack,
  VueGroup
} from 'agnosticui-core/flex/vue';

export default defineComponent({
  components: {
    VueFlexRow,
    VueFlexCol,
    VueStack,
    VueGroup
  }
});
</script>
```
:::

::: details React
```tsx
import {
  ReactFlexRow,
  ReactFlexCol,
  ReactStack,
  ReactGroup
} from 'agnosticui-core/flex/react';

export default function Example() {
  return (
    <div>
      {/* Basic row layout */}
      <ReactFlexRow gap="1rem">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </ReactFlexRow>

      {/* Centered column */}
      <ReactFlexCol gap="1rem" justify="center" align="center">
        <div>Centered Item 1</div>
        <div>Centered Item 2</div>
      </ReactFlexCol>

      {/* Space between */}
      <ReactFlexRow justify="space-between">
        <div>Start</div>
        <div>End</div>
      </ReactFlexRow>

      {/* Stretch children to equal widths */}
      <ReactFlexRow gap="1rem" stretchChildren={true}>
        <div>Auto width 1</div>
        <div>Auto width 2</div>
        <div>Auto width 3</div>
      </ReactFlexRow>

      {/* Wrapping layout */}
      <ReactFlexRow gap="1rem" wrap="wrap">
        {[...Array(10)].map((_, i) => (
          <div key={i}>Item {i + 1}</div>
        ))}
      </ReactFlexRow>

      {/* Using Stack and Group aliases */}
      <ReactStack gap="1rem">
        <div>Stacked Item 1</div>
        <div>Stacked Item 2</div>
      </ReactStack>

      <ReactGroup gap="0.5rem">
        <button>Action 1</button>
        <button>Action 2</button>
      </ReactGroup>
    </div>
  );
}
```
:::

::: details Lit/Web Components
```typescript
import { html } from 'lit';
import 'agnosticui-core/flex';

const template = html`
  <!-- Basic row layout -->
  <ag-flex-row gap="1rem">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </ag-flex-row>

  <!-- Centered column -->
  <ag-flex-col gap="1rem" justify="center" align="center">
    <div>Centered Item 1</div>
    <div>Centered Item 2</div>
  </ag-flex-col>

  <!-- Space between -->
  <ag-flex-row justify="space-between">
    <div>Start</div>
    <div>End</div>
  </ag-flex-row>

  <!-- Stretch children to equal widths -->
  <ag-flex-row gap="1rem" stretch-children>
    <div>Auto width 1</div>
    <div>Auto width 2</div>
    <div>Auto width 3</div>
  </ag-flex-row>

  <!-- Wrapping layout -->
  <ag-flex-row gap="1rem" wrap="wrap">
    ${[...Array(10)].map((_, i) => html`<div>Item ${i + 1}</div>`)}
  </ag-flex-row>
`;
```
:::

## Props

All flex components share the same props from `FlexContainerProps`:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'` | `'row'` | Flex direction |
| `wrap` | `'nowrap' \| 'wrap' \| 'wrap-reverse'` | `'nowrap'` | Whether items wrap |
| `justify` | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'flex-start'` | Main axis alignment |
| `align` | `'flex-start' \| 'flex-end' \| 'center' \| 'baseline' \| 'stretch'` | `'stretch'` | Cross axis alignment |
| `alignContent` | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly' \| 'stretch'` | `'stretch'` | Multi-line alignment |
| `gap` | `string` | `'var(--ag-space-0, 0)'` | Gap between items (any CSS gap value) |
| `inline` | `boolean` | `false` | Use inline-flex |
| `reverse` | `boolean` | `false` | Reverse the direction |
| `stretchChildren` | `boolean` | `false` | Apply flex: 1 1 auto to children |

**Note:** FlexRow defaults `direction` to `'row'`, FlexCol defaults to `'column'`, and FlexInline sets `inline` to `true`.

## CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-flex-container` | The slot wrapper element |

## Examples

See the interactive examples above for common flexbox patterns including:
- Basic row and column layouts
- Centering content
- Space distribution (between, around, evenly)
- Equal-width children
- Wrapping layouts
- Nested flex containers
- Responsive patterns

## Responsive Design

Flex components provide full responsive control through CSS custom properties combined with your own media queries. Use CSS classes with media queries to define responsive behavior:

::: details Vue
```vue
<template>
  <!-- Stack on mobile, row on desktop -->
  <VueFlexRow class="responsive-layout">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </VueFlexRow>
</template>

<style scoped>
.responsive-layout {
  --flex-direction: column;
  --flex-gap: 0.5rem;
}

@media (min-width: 768px) {
  .responsive-layout {
    --flex-direction: row;
    --flex-gap: 1.5rem;
  }
}
</style>
```
:::

::: details React
```tsx
import { ReactFlexRow } from 'agnosticui-core/flex/react';

export default function ResponsiveExample() {
  return (
    <>
      {/* Stack on mobile, row on desktop */}
      <ReactFlexRow
        gap="1rem"
        style={{
          '--flex-direction-mobile': 'column',
          '--flex-direction-desktop': 'row'
        } as React.CSSProperties}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </ReactFlexRow>

      {/* Different gaps per breakpoint */}
      <ReactFlexRow
        style={{
          '--flex-gap-mobile': '0.5rem',
          '--flex-gap-tablet': '1rem',
          '--flex-gap-desktop': '2rem'
        } as React.CSSProperties}
      >
        <div>Item 1</div>
        <div>Item 2</div>
      </ReactFlexRow>
    </>
  );
}
```
:::

::: details Lit/Web Components
```typescript
import { html } from 'lit';
import 'agnosticui-core/flex';

const template = html`
  <!-- Stack on mobile, row on desktop -->
  <ag-flex-row
    gap="1rem"
    style="--flex-direction-mobile: column; --flex-direction-desktop: row;"
  >
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </ag-flex-row>

  <!-- Different gaps per breakpoint -->
  <ag-flex-row
    style="--flex-gap-mobile: 0.5rem; --flex-gap-tablet: 1rem; --flex-gap-desktop: 2rem;"
  >
    <div>Item 1</div>
    <div>Item 2</div>
  </ag-flex-row>
`;
```
:::

### Available Responsive CSS Custom Properties

All flex properties support responsive variants:

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Direction | `--flex-direction-mobile` | `--flex-direction-tablet` | `--flex-direction-desktop` |
| Wrap | `--flex-wrap-mobile` | `--flex-wrap-tablet` | `--flex-wrap-desktop` |
| Justify | `--flex-justify-mobile` | `--flex-justify-tablet` | `--flex-justify-desktop` |
| Align | `--flex-align-mobile` | `--flex-align-tablet` | `--flex-align-desktop` |
| Gap | `--flex-gap-mobile` | `--flex-gap-tablet` | `--flex-gap-desktop` |

### Using CSS Shadow Parts for Advanced Customization

For more complex responsive layouts, use CSS Shadow Parts to apply custom styles:

```css
/* Custom responsive behavior using ::part */
ag-flex-row::part(ag-flex-container) {
  /* Desktop default */
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

@media (max-width: 640px) {
  ag-flex-row::part(ag-flex-container) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  ag-flex-row::part(ag-flex-container) {
    gap: 1.5rem;
  }
}
```

### Breakpoint Values

The component uses these fixed breakpoint values:

- Mobile: `max-width: 640px`
- Tablet: `min-width: 641px and max-width: 768px`
- Desktop: `min-width: 769px`

These values cannot be customized via CSS custom properties (media queries don't support custom properties). If you need different breakpoints, use CSS Shadow Parts with your own media queries.

## Design Tokens

Flex components work seamlessly with AgnosticUI design tokens for spacing:

```css
/* Use design tokens for gap */
<ag-flex-row gap="var(--ag-space-4)">...</ag-flex-row>
<ag-flex-col gap="var(--ag-space-2)">...</ag-flex-col>

/* Or use any valid CSS gap value */
<ag-flex-row gap="1rem">...</ag-flex-row>
<ag-flex-row gap="2rem 1rem">...</ag-flex-row>
```
