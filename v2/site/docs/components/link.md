# Link

The Link component is a semantic, accessible wrapper around the native HTML `<a>` element that provides consistent styling, variants, and states while preserving native browser accessibility features.

<LinkExamples />

<script setup>
import LinkExamples from '../examples/LinkExamples.vue'
</script>

## Usage

::: details Vue

```vue
<template>
  <VueLink href="/home">Go to Home</VueLink>
  <VueLink href="/success" variant="success">Success Link</VueLink>
  <VueLink href="https://example.com" external>External Link</VueLink>
  <VueLink href="/action" :isButton="true" variant="primary"
    >Button Link</VueLink
  >
  <VueLink
    href="/action"
    :isButton="true"
    buttonSize="lg"
    buttonShape="capsule"
  >
    Large Capsule Button
  </VueLink>
  <VueLink
    href="/action"
    :isButton="true"
    :buttonBordered="true"
    variant="primary"
  >
    Bordered Button
  </VueLink>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VueLink } from "agnosticui-core/link/vue";
export default defineComponent({
  components: { VueLink },
});
</script>
```

:::

::: details React

```tsx
import { ReactLink } from "agnosticui-core/link/react";
export default function Example() {
  return (
    <>
      <ReactLink href="/home">Go to Home</ReactLink>
      <ReactLink href="/success" variant="success">
        Success Link
      </ReactLink>
      <ReactLink href="https://example.com" external>
        External Link
      </ReactLink>
      <ReactLink href="/action" isButton variant="primary">
        Button Link
      </ReactLink>
      <ReactLink href="/action" isButton buttonSize="lg" buttonShape="capsule">
        Large Capsule Button
      </ReactLink>
      <ReactLink href="/action" isButton buttonBordered variant="primary">
        Bordered Button
      </ReactLink>
    </>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/link";
</script>
<ag-link href="/home">Go to Home</ag-link>
<ag-link href="/success" variant="success">Success Link</ag-link>
<ag-link href="https://example.com" external>External Link</ag-link>
<ag-link href="/action" isButton variant="primary">Button Link</ag-link>
<ag-link href="/action" isButton buttonSize="lg" buttonShape="capsule">
  Large Capsule Button
</ag-link>
<ag-link href="/action" isButton buttonBordered variant="primary">
  Bordered Button
</ag-link>
```

:::

## Props

| Prop             | Type                                                                       | Default     | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------- |
| `href`           | `string`                                                                   | `''`        | URL the link points to                                                           |
| `variant`        | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'monochrome' \| ''`    | `''`        | Visual style variant                                                             |
| `isButton`       | `boolean`                                                                  | `false`     | Styles the link to look like a button                                            |
| `buttonSize`     | `'x-sm' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                   | `'md'`      | Size variant for button-style links (only applies when `isButton` is `true`)     |
| `buttonShape`    | `'capsule' \| 'rounded' \| 'circle' \| 'square' \| 'rounded-square' \| ''` | `''`        | Shape variant for button-style links (only applies when `isButton` is `true`)    |
| `buttonBordered` | `boolean`                                                                  | `false`     | Bordered style for button-style links (only applies when `isButton` is `true`)   |
| `external`       | `boolean`                                                                  | `false`     | Indicates external link (adds `rel="noopener noreferrer"` and `target="_blank"`) |
| `disabled`       | `boolean`                                                                  | `false`     | Disables the link (renders as span, adds `aria-disabled="true"`)                 |
| `ariaLabel`      | `string`                                                                   | `''`        | ARIA label for accessibility                                                     |
| `onClick`        | `(event: MouseEvent) => void`                                              | `undefined` | Click event handler                                                              |
| `onFocus`        | `(event: FocusEvent) => void`                                              | `undefined` | Focus event handler                                                              |
| `onBlur`         | `(event: FocusEvent) => void`                                              | `undefined` | Blur event handler                                                               |

### Variant Details

The `variant` prop controls the color scheme of the link:

- **`primary`** - Primary brand color (default blue)
- **`success`** - Success/positive actions (green)
- **`warning`** - Warning/caution actions (orange/yellow)
- **`danger`** - Destructive/dangerous actions (red)
- **`monochrome`** - Neutral grayscale appearance
- **`''` (empty)** - Default styling without variant

### Button-Specific Props

When `isButton` is `true`, you can customize the button appearance:

#### Button Sizes

- **`x-sm`** - Extra small button
- **`sm`** - Small button
- **`md`** - Medium button (default)
- **`lg`** - Large button
- **`xl`** - Extra large button

#### Button Shapes

- **`''` (default)** - Standard
- **`rounded`** - Medium rounded corners
- **`capsule`** - Fully rounded pill shape
- **`circle`** - Perfect circle (best for icon-only buttons)
- **`square`** - Sharp corners, square shape
- **`rounded-square`** - Square with rounded corners

#### Button Bordered

When `buttonBordered` is `true`, the button has a transparent background with a colored border that matches the variant. On hover, the background fills with the variant color.

## Slots

| Slot    | Description          |
| ------- | -------------------- |
| default | Link text or content |

## CSS Parts

| Part      | Description                            |
| --------- | -------------------------------------- |
| `ag-link` | The internal `<a>` or `<span>` element |

Use CSS parts to customize the link appearance:

```css
ag-link::part(ag-link) {
  text-decoration: none;
  border-bottom: 2px solid currentColor;
}

/* Custom gradient link */
ag-link::part(ag-link) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}
```

## Events

The Link component relies on native browser events which bubble automatically:

| Event   | Type         | Description                        |
| ------- | ------------ | ---------------------------------- |
| `click` | `MouseEvent` | Fires when the link is clicked     |
| `focus` | `FocusEvent` | Fires when the link receives focus |
| `blur`  | `FocusEvent` | Fires when the link loses focus    |

## Accessibility

### Native Semantics

- Renders a native `<a>` element for proper semantics
- Automatic keyboard navigation (Tab key)
- Screen reader announcements
- Native focus management
- Browser right-click context menu support

### Keyboard Navigation

- Links with `href` are automatically keyboard-focusable
- Clear, visible focus indicator using design token `--ag-focus`
- Enter key activates the link (browser default)

### Disabled State

- When disabled, renders a `<span>` instead of `<a>` to remove interactivity
- Adds `aria-disabled="true"` and `role="link"` for assistive technologies
- Visual styling indicates disabled state

### External Links

- Automatically adds `rel="noopener noreferrer"` and `target="_blank"` when `external` prop is true
- Consider adding visual indicator (e.g., arrow icon) to inform users

### Best Practices

- Use descriptive link text that clearly indicates the link's purpose
- Avoid generic text like "Click Here" or "Learn More" without context
- For icon-only links, provide an `aria-label`
- Do not wrap links around other interactive elements
- Links should be visually distinguishable from non-link text (underlined by default)
