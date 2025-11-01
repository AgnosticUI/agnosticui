# Divider

Divider components visually separate content in your application. They support both horizontal and vertical orientations, optional text or icon content, and can be customized with different sizes and color variants.

<DividerExamples />

<script setup>
import DividerExamples from '../examples/DividerExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <div>
    <!-- Basic horizontal divider -->
    <VueDivider />

    <!-- With content -->
    <VueDivider>Section Title</VueDivider>

    <!-- Justified content -->
    <VueDivider justify="start">Left aligned</VueDivider>
    <VueDivider justify="end">Right aligned</VueDivider>

    <!-- Vertical divider -->
    <div style="display: flex;">
      <p>Left content</p>
      <VueDivider vertical />
      <p>Right content</p>
    </div>

    <!-- Sizes and variants -->
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
      {/* Basic horizontal divider */}
      <ReactDivider />

      {/* With content */}
      <ReactDivider>Section Title</ReactDivider>

      {/* Justified content */}
      <ReactDivider justify="start">Left aligned</ReactDivider>
      <ReactDivider justify="end">Right aligned</ReactDivider>

      {/* Vertical divider */}
      <div style={{ display: 'flex' }}>
        <p>Left content</p>
        <ReactDivider vertical />
        <p>Right content</p>
      </div>

      {/* Sizes and variants */}
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

<!-- Basic horizontal divider -->
<ag-divider></ag-divider>

<!-- With content -->
<ag-divider>Section Title</ag-divider>

<!-- Justified content -->
<ag-divider justify="start">Left aligned</ag-divider>
<ag-divider justify="end">Right aligned</ag-divider>

<!-- Vertical divider -->
<div style="display: flex;">
  <p>Left content</p>
  <ag-divider vertical></ag-divider>
  <p>Right content</p>
</div>

<!-- Sizes and variants -->
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
<!-- Vue -->
<VueDivider class="custom-divider">Gradient Divider</VueDivider>
<VueDivider class="custom-dotted">Dotted Pattern</VueDivider>
<VueDivider class="custom-vertical" vertical>Vertical</VueDivider>

<!-- React -->
<ReactDivider className="custom-divider">Gradient Divider</ReactDivider>
<ReactDivider className="custom-dotted">Dotted Pattern</ReactDivider>
<ReactDivider className="custom-vertical" vertical>Vertical</ReactDivider>

<!-- Lit (Web Components) -->
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
<!-- Good: Separating distinct content sections -->
<section>
  <h2>User Profile</h2>
  <!-- profile content -->
</section>
<ag-divider></ag-divider>
<section>
  <h2>Settings</h2>
  <!-- settings content -->
</section>

<!-- Good: Labeled section divider -->
<ag-divider>Account Information</ag-divider>

<!-- Good: Vertical divider with adequate container height -->
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
  <!-- form fields -->
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
    <!-- sidebar navigation -->
  </aside>
  <ag-divider vertical></ag-divider>
  <main style="flex: 1; padding: 1rem;">
    <!-- main content -->
  </main>
</div>
```

### Justified Content

Align divider text to create different visual effects:

```vue
<template>
  <div>
    <VueDivider justify="start">Beginning</VueDivider>
    <!-- left-weighted content -->

    <VueDivider>Centered Section</VueDivider>
    <!-- balanced content -->

    <VueDivider justify="end">End</VueDivider>
    <!-- right-weighted content -->
  </div>
</template>
```
