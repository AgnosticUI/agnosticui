# Divider

<AlphaWarning />


Divider components visually separate content in your application. They support both horizontal and vertical orientations, optional text or icon content, and can be customized with different sizes and color variants.

<DividerExamples />

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import DividerExamples from '../examples/DividerExamples.vue'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add Divider
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue
```vue
<template>
  <div>
    <VueDivider />

    <VueDivider>Section Title</VueDivider>

    <VueDivider justify="start">Left aligned</VueDivider>
    <VueDivider justify="end">Right aligned</VueDivider>

    <div style="display: flex;">
      <p>Left content</p>
      <VueDivider vertical />
      <p>Right content</p>
    </div>

    <VueDivider size="large" variant="success">Success</VueDivider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueDivider } from 'agnosticui-core/divider/vue';

export default defineComponent({
  components: { VueDivider }
});
</script>
```
:::

::: details React
```tsx
import { ReactDivider } from 'agnosticui-core/divider/react';

export default function Example() {
  return (
    <div>
      <ReactDivider />

      <ReactDivider>Section Title</ReactDivider>

      <ReactDivider justify="start">Left aligned</ReactDivider>
      <ReactDivider justify="end">Right aligned</ReactDivider>

      <div style={{ display: 'flex' }}>
        <p>Left content</p>
        <ReactDivider vertical />
        <p>Right content</p>
      </div>

      <ReactDivider size="large" variant="success">Success</ReactDivider>
    </div>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/divider';
</script>

<ag-divider></ag-divider>

<ag-divider>Section Title</ag-divider>

<ag-divider justify="start">Left aligned</ag-divider>
<ag-divider justify="end">Right aligned</ag-divider>

<div style="display: flex;">
  <p>Left content</p>
  <ag-divider vertical></ag-divider>
  <p>Right content</p>
</div>

<ag-divider size="large" variant="success">Success</ag-divider>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `vertical` | `boolean` | `false` | Vertical orientation (divides content left/right instead of top/bottom) |
| `justify` | `'center' \| 'start' \| 'end'` | `'center'` | Content justification (horizontal only). Center places content in middle, start on left, end on right |
| `size` | `'default' \| 'small' \| 'large' \| 'xlarge'` | `'default'` | Thickness of the divider line |
| `variant` | `'default' \| 'success' \| 'info' \| 'warning' \| 'error'` | `'default'` | Color variant |

## Events

The Divider component does not emit any events. It is a presentational component.

## CSS Shadow Parts

| Part | Description |
| --- | --- |
| `ag-divider` | The main divider container element |
| `ag-divider-content` | The content container (when slotted content is provided) |

### Customization Example

```css
.custom-divider::part(ag-divider)::before,
.custom-divider::part(ag-divider)::after {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  height: 4px;
}

.custom-divider::part(ag-divider-content) {
  color: #667eea;
  font-weight: 700;
  font-size: 1.125rem;
}

.custom-dotted::part(ag-divider)::before,
.custom-dotted::part(ag-divider)::after {
  background: repeating-linear-gradient(
    90deg,
    #10b981 0,
    #10b981 10px,
    transparent 10px,
    transparent 20px
  );
  height: 3px;
}

.custom-vertical::part(ag-divider)::before,
.custom-vertical::part(ag-divider)::after {
  background: linear-gradient(180deg, #ef4444 0%, #fbbf24 100%);
  width: 6px;
}
```

```html
<VueDivider class="custom-divider">Gradient Divider</VueDivider>
<VueDivider class="custom-dotted">Dotted Pattern</VueDivider>
<VueDivider class="custom-vertical" vertical>Vertical</VueDivider>

<ReactDivider className="custom-divider">Gradient Divider</ReactDivider>
<ReactDivider className="custom-dotted">Dotted Pattern</ReactDivider>
<ReactDivider className="custom-vertical" vertical>Vertical</ReactDivider>

<ag-divider class="custom-divider">Gradient Divider</ag-divider>
<ag-divider class="custom-dotted">Dotted Pattern</ag-divider>
<ag-divider class="custom-vertical" vertical>Vertical</ag-divider>
```

## Accessibility

The Divider component is designed to be accessible by default:

- **Role**: Uses `role="separator"` to indicate its purpose as a visual divider
- **Orientation**: Automatically sets `aria-orientation` to:
  - `"horizontal"` for horizontal dividers (default)
  - `"vertical"` for vertical dividers (when `vertical` is true)
- **Semantics**: The separator role is non-interactive and properly indicates content divisions to assistive technologies

### Best Practices

- **Meaningful Separators**: Use dividers to create clear visual hierarchy and group related content
- **Text Content**: When adding text to dividers, ensure it meaningfully describes the section it precedes or separates
- **Don't Overuse**: Too many dividers can create visual clutter. Use them strategically
- **Vertical Dividers**: Ensure vertical dividers have adequate height through their parent container's styling

### Examples

```html
<section>
  <h2>User Profile</h2>
</section>
<ag-divider></ag-divider>
<section>
  <h2>Settings</h2>
</section>

<ag-divider>Account Information</ag-divider>

<div style="display: flex; min-height: 200px;">
  <div>Left panel content</div>
  <ag-divider vertical></ag-divider>
  <div>Right panel content</div>
</div>
```

## Common Patterns

### Section Headers

Use dividers with text to create section headers:

```html
<ag-divider size="large">Personal Details</ag-divider>
<form>
</form>
```

### Card Separators

Separate items within cards or lists:

```html
<div style="padding: 1rem; border: 1px solid #ccc;">
  <div>Item 1</div>
  <ag-divider size="small"></ag-divider>
  <div>Item 2</div>
  <ag-divider size="small"></ag-divider>
  <div>Item 3</div>
</div>
```

### Sidebar Layouts

Use vertical dividers in sidebar layouts:

```html
<div style="display: flex; min-height: 100vh;">
  <aside style="width: 250px; padding: 1rem;">
  </aside>
  <ag-divider vertical></ag-divider>
  <main style="flex: 1; padding: 1rem;">
  </main>
</div>
```

### Justified Content

Align divider text to create different visual effects:

```vue
<template>
  <div>
    <VueDivider justify="start">Beginning</VueDivider>

    <VueDivider>Centered Section</VueDivider>

    <VueDivider justify="end">End</VueDivider>
  </div>
</template>
```
