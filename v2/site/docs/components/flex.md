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
    <VueFlexRow gap="1rem">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </VueFlexRow>

    <VueFlexCol gap="1rem" justify="center" align="center">
      <div>Centered Item 1</div>
      <div>Centered Item 2</div>
    </VueFlexCol>

    <VueFlexRow justify="space-between">
      <div>Start</div>
      <div>End</div>
    </VueFlexRow>

    <VueFlexRow gap="1rem" :stretch-children="true">
      <div>Auto width 1</div>
      <div>Auto width 2</div>
      <div>Auto width 3</div>
    </VueFlexRow>

    <VueFlexRow gap="1rem" wrap="wrap">
      <div v-for="i in 10" :key="i">Item {{ i }}</div>
    </VueFlexRow>

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
      <ReactFlexRow gap="1rem">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </ReactFlexRow>

      <ReactFlexCol gap="1rem" justify="center" align="center">
        <div>Centered Item 1</div>
        <div>Centered Item 2</div>
      </ReactFlexCol>

      <ReactFlexRow justify="space-between">
        <div>Start</div>
        <div>End</div>
      </ReactFlexRow>

      <ReactFlexRow gap="1rem" stretchChildren={true}>
        <div>Auto width 1</div>
        <div>Auto width 2</div>
        <div>Auto width 3</div>
      </ReactFlexRow>

      <ReactFlexRow gap="1rem" wrap="wrap">
        {[...Array(10)].map((_, i) => (
          <div key={i}>Item {i + 1}</div>
        ))}
      </ReactFlexRow>

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
import { html } from "lit";
import "agnosticui-core/flex";

const template = html`
  <ag-flex-row gap="1rem">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </ag-flex-row>

  <ag-flex-col gap="1rem" justify="center" align="center">
    <div>Centered Item 1</div>
    <div>Centered Item 2</div>
  </ag-flex-col>

  <ag-flex-row justify="space-between">
    <div>Start</div>
    <div>End</div>
  </ag-flex-row>

  <ag-flex-row gap="1rem" stretch-children>
    <div>Auto width 1</div>
    <div>Auto width 2</div>
    <div>Auto width 3</div>
  </ag-flex-row>

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
    <ReactFlexRow className="responsive-layout" gap="1rem">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </ReactFlexRow>
  );
}
```

```css
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
```
:::

::: details Lit (Web Components)
```html
<ag-flex-row class="responsive-layout">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</ag-flex-row>
```

```css
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
```
:::

### Available CSS Custom Properties

Control flex behavior using these CSS custom properties:

| Property | Custom Property | Values |
|----------|----------------|--------|
| Direction | `--flex-direction` | `row`, `row-reverse`, `column`, `column-reverse` |
| Wrap | `--flex-wrap` | `nowrap`, `wrap`, `wrap-reverse` |
| Justify | `--flex-justify` | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` |
| Align | `--flex-align` | `flex-start`, `flex-end`, `center`, `baseline`, `stretch` |
| Gap | `--flex-gap` | Any valid CSS gap value (e.g., `1rem`, `20px`, `var(--ag-space-4)`) |

### Responsive Patterns

Use your own media queries to control flex properties at different breakpoints:

**Stack on mobile, row on desktop:**
```css
.responsive-direction {
  --flex-direction: column;
  --flex-gap: 1rem;
}

@media (min-width: 769px) {
  .responsive-direction {
    --flex-direction: row;
  }
}
```

**Different gap sizes per breakpoint:**
```css
.responsive-gap {
  --flex-gap: 0.5rem;
}

@media (min-width: 641px) and (max-width: 768px) {
  .responsive-gap {
    --flex-gap: 1rem;
  }
}

@media (min-width: 769px) {
  .responsive-gap {
    --flex-gap: 2rem;
  }
}
```

**Center on mobile, space-between on desktop:**
```css
.responsive-justify {
  --flex-justify: center;
  --flex-gap: 1rem;
}

@media (min-width: 769px) {
  .responsive-justify {
    --flex-justify: space-between;
  }
}
```

## Design Tokens

Flex components work seamlessly with AgnosticUI design tokens for spacing:

```html
<ag-flex-row gap="var(--ag-space-4)">...</ag-flex-row>
<ag-flex-col gap="var(--ag-space-2)">...</ag-flex-col>

<ag-flex-row gap="1rem">...</ag-flex-row>
<ag-flex-row gap="2rem 1rem">...</ag-flex-row>
```
