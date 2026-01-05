# Flex

<AlphaWarning />


Flex components provide a powerful and intuitive way to create flexible layouts using CSS Flexbox. They offer a declarative API with dedicated components for common patterns.

## Examples

<FrameworkExample
  component="flex"
  :vue-code="vueCode"
  :lit-code="litCode"
  :react-code="reactCode"
>
  <template #vue>
    <FlexExamples />
  </template>
  <template #lit>
    <flex-lit-examples></flex-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import FlexExamples from '../examples/FlexExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/FlexLitExamples.js'
import vueCode from '../examples/FlexExamples.vue?raw'
import litCode from '../examples/FlexLitExamples.js?raw'
import reactCode from '../examples/FlexReactExamples.jsx?raw'
</script>

## Components

AgnosticUI provides four flex components plus two convenient aliases:

- **FlexContainer** - Base flex container with full control
- **FlexRow** - Horizontal layout (defaults to `direction: row`, but can be overridden)
- **FlexCol** - Vertical layout (defaults to `direction: column`, but can be overridden)
- **FlexInline** - Inline flex container
- **Stack** - Alias for FlexCol (familiar to Mantine/Chakra users)
- **Group** - Alias for FlexRow (familiar to Mantine users)

**Note:** FlexRow, FlexCol, Stack, and Group are convenience components that set default directions. You can override any of their properties using CSS custom properties (see [Responsive Control](#responsive-control)).

## Responsive Control

**Important:** Flex components have **no built-in breakpoints**. All responsive behavior is controlled by **you** using CSS custom properties and your own media queries.

You control flex behavior at different breakpoints by setting CSS custom properties like `--flex-direction`, `--flex-gap`, `--flex-justify`, etc. in your own CSS with your own media queries:

```css
.my-responsive-layout {
  --flex-direction: column;
  --flex-gap: 1rem;
}

@media (min-width: 768px) {
  .my-responsive-layout {
    --flex-direction: row;
    --flex-gap: 2rem;
  }
}
```

The component simply reads these CSS custom properties - you define when and how they change.

### Overriding Convenience Components

**FlexRow, FlexCol, Stack, and Group are just convenience wrappers** - they set default directions but you can override them completely with CSS custom properties:

Using FlexCol but overriding to row on large screens:

```html
<ag-flex-col class="responsive-column">
  <div>Item 1</div>
  <div>Item 2</div>
</ag-flex-col>
```

FlexCol defaults to column, but you can override it:

```css
.responsive-column {
  --flex-direction: column;
}
```

Override to row on ultra-wide screens:

```css
@media (min-width: 1920px) {
  .responsive-column {
    --flex-direction: row;
  }
}
```

You don't need to use `FlexContainer` for responsive layouts - **any flex component can be controlled with CSS custom properties**.

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add Flex
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue

```vue
<template>
  <div>
    <VueFlexRow style="--flex-gap: 1rem">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </VueFlexRow>

    <VueFlexCol style="--flex-gap: 1rem" justify="center" align="center">
      <div>Centered Item 1</div>
      <div>Centered Item 2</div>
    </VueFlexCol>

    <VueFlexRow justify="space-between">
      <div>Start</div>
      <div>End</div>
    </VueFlexRow>

    <VueFlexRow style="--flex-gap: 1rem" :stretch-children="true">
      <div>Auto width 1</div>
      <div>Auto width 2</div>
      <div>Auto width 3</div>
    </VueFlexRow>

    <VueFlexRow style="--flex-gap: 1rem" wrap="wrap">
      <div v-for="i in 10" :key="i">Item {{ i }}</div>
    </VueFlexRow>

    <VueStack style="--flex-gap: 1rem">
      <div>Stacked Item 1</div>
      <div>Stacked Item 2</div>
    </VueStack>

    <VueGroup style="--flex-gap: 0.5rem">
      <button>Action 1</button>
      <button>Action 2</button>
    </VueGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  VueFlexRow,
  VueFlexCol,
  VueStack,
  VueGroup,
} from "agnosticui-core/flex/vue";

export default defineComponent({
  components: {
    VueFlexRow,
    VueFlexCol,
    VueStack,
    VueGroup,
  },
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
  ReactGroup,
} from "agnosticui-core/flex/react";

export default function Example() {
  return (
    <div>
      <ReactFlexRow style={{ "--flex-gap": "1rem" } as React.CSSProperties}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </ReactFlexRow>

      <ReactFlexCol
        style={{ "--flex-gap": "1rem" } as React.CSSProperties}
        justify="center"
        align="center"
      >
        <div>Centered Item 1</div>
        <div>Centered Item 2</div>
      </ReactFlexCol>

      <ReactFlexRow justify="space-between">
        <div>Start</div>
        <div>End</div>
      </ReactFlexRow>

      <ReactFlexRow
        style={{ "--flex-gap": "1rem" } as React.CSSProperties}
        stretchChildren={true}
      >
        <div>Auto width 1</div>
        <div>Auto width 2</div>
        <div>Auto width 3</div>
      </ReactFlexRow>

      <ReactFlexRow
        style={{ "--flex-gap": "1rem" } as React.CSSProperties}
        wrap="wrap"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i}>Item {i + 1}</div>
        ))}
      </ReactFlexRow>

      <ReactStack style={{ "--flex-gap": "1rem" } as React.CSSProperties}>
        <div>Stacked Item 1</div>
        <div>Stacked Item 2</div>
      </ReactStack>

      <ReactGroup style={{ "--flex-gap": "0.5rem" } as React.CSSProperties}>
        <button>Action 1</button>
        <button>Action 2</button>
      </ReactGroup>
    </div>
  );
}
```

:::

::: details Lit (Web Components)

```typescript
import { html } from "lit";
import "agnosticui-core/flex";

const template = html`
  <ag-flex-row style="--flex-gap: 1rem">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </ag-flex-row>

  <ag-flex-col style="--flex-gap: 1rem" justify="center" align="center">
    <div>Centered Item 1</div>
    <div>Centered Item 2</div>
  </ag-flex-col>

  <ag-flex-row justify="space-between">
    <div>Start</div>
    <div>End</div>
  </ag-flex-row>

  <ag-flex-row style="--flex-gap: 1rem" stretch-children>
    <div>Auto width 1</div>
    <div>Auto width 2</div>
    <div>Auto width 3</div>
  </ag-flex-row>

  <ag-flex-row style="--flex-gap: 1rem" wrap="wrap">
    ${[...Array(10)].map((_, i) => html`<div>Item ${i + 1}</div>`)}
  </ag-flex-row>
`;
```

:::

## Props

All flex components share the same props from `FlexContainerProps`:

| Prop              | Type                                                                                                         | Default        | Description                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------ | -------------- | -------------------------------- |
| `direction`       | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'`                                                     | `'row'`        | Flex direction                   |
| `wrap`            | `'nowrap' \| 'wrap' \| 'wrap-reverse'`                                                                       | `'nowrap'`     | Whether items wrap               |
| `justify`         | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly'`              | `'flex-start'` | Main axis alignment              |
| `align`           | `'flex-start' \| 'flex-end' \| 'center' \| 'baseline' \| 'stretch'`                                          | `'stretch'`    | Cross axis alignment             |
| `alignContent`    | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly' \| 'stretch'` | `'stretch'`    | Multi-line alignment             |
| `inline`          | `boolean`                                                                                                    | `false`        | Use inline-flex                  |
| `reverse`         | `boolean`                                                                                                    | `false`        | Reverse the direction            |
| `stretchChildren` | `boolean`                                                                                                    | `false`        | Apply flex: 1 1 auto to children |

**Note:** FlexRow defaults `direction` to `'row'`, FlexCol defaults to `'column'`, and FlexInline sets `inline` to `true`. These are just defaults - **you can override any property using CSS custom properties** like `--flex-direction`, `--flex-wrap`, `--flex-justify`, `--flex-align`, etc. (See [Responsive Control](#responsive-control)).

**Gap:** There is no `gap` prop. Control spacing using the `--flex-gap` CSS custom property (defaults to `var(--ag-space-0, 0)`). See the [Available CSS Custom Properties](#available-css-custom-properties) table below.

## CSS Shadow Parts

| Part                | Description              |
| ------------------- | ------------------------ |
| `ag-flex-container` | The slot wrapper element |

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
import { ReactFlexRow } from "agnosticui-core/flex/react";

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

### Understanding `display: contents` and its implications

The `FlexContainer` component (and by extension, `FlexRow`, `FlexCol`, `Stack`, and `Group`) utilizes `display: contents` on its host element. This CSS property removes the container from the accessibility tree and the box tree, making its children appear as direct children of its parent.

**Benefits (Layout Flexibility):**

*   **Seamless integration with parent layouts:** Your flex component can be used directly within any parent CSS Grid or Flexbox layout (e.g., `display: grid; gap: 2rem;`) without creating invalid nesting or extra wrapper divs. The items inside your `FlexContainer` effectively become the items of the grid/flex parent. This offers powerful layout flexibility.

**Inconveniences (Spacing Limitations):**

*   **Host element spacing:** You cannot apply `margin`, `border`, `padding`, or `background` directly to the `FlexContainer` host element itself to space it from its siblings or define its own visual boundaries. These properties will not have an effect due to `display: contents`.
*   **Workaround for spacing:** To add space between a `FlexContainer` and its siblings, you must use a parent wrapper with a `gap` property or apply margins directly to the `FlexContainer`'s siblings.

**Best Practice for Consumers:**

*   **Documented behavior:** This is an intentional design choice for maximum layout flexibility. Always refer to this documentation for understanding how to style and space `FlexContainer` components.
*   **Wrapping for external spacing:** If you need to apply margins, borders, or backgrounds directly to the conceptual "box" of your `FlexContainer`, wrap it in a `div` and apply styles to the wrapper.
*   **Overriding `display: contents` (Advanced):** For advanced use cases where you *must* have the host element generate its own box (e.g., to apply a background or margin directly), you can override the default `display` property using the `--host-display` CSS custom property:

    ```css
    /* Allows consumer to change display externally */
    ag-flex-container {
      --host-display: flex; /* Or block, grid, etc. */
    }
    ```

    By setting `--host-display` to `flex` (or `block`, `grid`, etc.), the `FlexContainer` will behave like a regular flex item, and you will be able to apply properties like `margin`, `border`, and `background` directly to it. Be aware that this will alter its integration with parent grid/flex layouts.

### Available CSS Custom Properties

Control flex behavior using these CSS custom properties:

| Property  | Custom Property    | Values                                                                              |
| --------- | ------------------ | ----------------------------------------------------------------------------------- |
| Direction | `--flex-direction` | `row`, `row-reverse`, `column`, `column-reverse`                                    |
| Wrap      | `--flex-wrap`      | `nowrap`, `wrap`, `wrap-reverse`                                                    |
| Justify   | `--flex-justify`   | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` |
| Align     | `--flex-align`     | `flex-start`, `flex-end`, `center`, `baseline`, `stretch`                           |
| Gap       | `--flex-gap`       | Any valid CSS gap value (e.g., `1rem`, `20px`, `var(--ag-space-4)`)                 |

### Responsive Patterns

Use your own media queries to control flex properties at different breakpoints. Here are common patterns (you define your own breakpoints):

**Example: Stack on small screens, row on larger screens**

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

**Example: Different gap sizes at different viewport widths**

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

**Example: Center content on small screens, space-between on larger screens**

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

**Note:** The breakpoints shown (641px, 769px, etc.) are just examples. You can use any breakpoints that fit your design.

## Design Tokens

Flex components work seamlessly with AgnosticUI design tokens for spacing:

```html
<ag-flex-row gap="var(--ag-space-4)">...</ag-flex-row>
<ag-flex-col gap="var(--ag-space-2)">...</ag-flex-col>

<ag-flex-row gap="1rem">...</ag-flex-row>
<ag-flex-row gap="2rem 1rem">...</ag-flex-row>
```
