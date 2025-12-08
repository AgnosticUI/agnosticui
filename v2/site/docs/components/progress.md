# Progress

A progress component is used to display the progress of a task. It can show determinate progress (with a specific value) or indeterminate progress (loading state without a known duration).

<ProgressExamples />

<script setup>
import ProgressExamples from '../examples/ProgressExamples.vue'
</script>

## Usage

::: details Vue

```vue
<template>
  <VueProgress :value="50" :max="100" label="Loading..." />
  
  <!-- Indeterminate progress (no value) -->
  <VueProgress label="Processing..." />
  
  <!-- Custom size -->
  <VueProgress :value="75" :max="100" label="Uploading..." size="large" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueProgress } from 'agnosticui-core/Progress/vue/VueProgress';

export default defineComponent({
  components: { VueProgress }
});
</script>
```

:::

::: details React

```tsx
import { ReactProgress } from 'agnosticui-core/Progress/react/ReactProgress';

export default function Example() {
  return (
    <>
      <ReactProgress value={50} max={100} label="Loading..." />
      
      {/* Indeterminate progress (no value) */}
      <ReactProgress label="Processing..." />
      
      {/* Custom size */}
      <ReactProgress value={75} max={100} label="Uploading..." size="large" />
    </>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import 'agnosticui-core/Progress/core/Progress';
</script>

<!-- Determinate progress -->
<ag-progress value="50" max="100" label="Loading..."></ag-progress>

<!-- Indeterminate progress (no value attribute) -->
<ag-progress label="Processing..."></ag-progress>

<!-- Custom size -->
<ag-progress value="75" max="100" label="Uploading..." size="large"></ag-progress>
```

**Using property binding in Lit templates:**

```javascript
import { html } from 'lit';
import 'agnosticui-core/Progress/core/Progress';

const template = html`
  <ag-progress .value=${50} .max=${100} .label=${"Loading..."}></ag-progress>
`;
```

:::

## Props

| Prop    | Type                               | Default     | Description                                                                                              |
| ------- | ---------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `value` | `number \| undefined`              | `undefined` | The current value of the progress bar. If not provided, the progress bar is indeterminate.               |
| `max`   | `number`                           | `100`       | The maximum value of the progress bar.                                                                   |
| `label` | `string`                           | `''`        | An accessible label for the progress bar. This label is visually hidden but announced by screen readers. |
| `size`  | `'small' \| 'medium' \| 'large'` | `'medium'`  | Size of the progress bar.                                                                                |

## CSS Shadow Parts

| Part                  | Description                                  |
| --------------------- | -------------------------------------------- |
| `ag-progress-wrapper` | The main container element for the component |
| `progress-label`      | The visually hidden label element            |
| `ag-progress-bar`     | The native `<progress>` element              |

## CSS Custom Properties

The Progress component can be customized using CSS custom properties:

| Property              | Description                    | Default              |
| --------------------- | ------------------------------ | -------------------- |
| `--ag-progress-width` | Width of the progress bar      | `100%`               |
| `--ag-progress-height`| Height of the progress bar     | Size-dependent       |

### Customization Example

```css
/* Custom width */
ag-progress {
  --ag-progress-width: 300px;
}

/* Custom styling via shadow parts */
ag-progress::part(ag-progress-bar) {
  border-radius: 4px;
}

ag-progress::part(ag-progress-bar)::-webkit-progress-value {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
}

ag-progress::part(ag-progress-bar)::-moz-progress-bar {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
}
```

## Sizes

The Progress component supports three sizes:

- **`small`**: Compact progress bar (height: `var(--ag-space-2)`)
- **`medium`** (default): Standard progress bar (height: `var(--ag-space-3)`)
- **`large`**: Prominent progress bar (height: `var(--ag-space-4)`)

## Determinate vs Indeterminate

### Determinate Progress

Shows a specific completion percentage. Use when you know the progress amount:

```vue
<VueProgress :value="75" :max="100" label="75% complete" />
```

### Indeterminate Progress

Shows an animated loading state. Use when progress duration is unknown:

```vue
<VueProgress label="Loading..." />
```

The indeterminate state displays an animated gradient that moves across the progress bar.

## Accessibility

The Progress component follows WCAG accessibility guidelines:

- Uses the native HTML5 `<progress>` element for proper semantics
- The `label` prop provides accessible text that is visually hidden but announced by screen readers
- The `<progress>` element has `aria-label` set to the label value
- Indeterminate state is properly indicated to assistive technologies
- The component maintains proper ARIA attributes (`value`, `max`) for determinate progress

### Best Practices

- Always provide a meaningful `label` that describes what is progressing
- For determinate progress, update the `value` prop as the task progresses
- Use indeterminate progress when you cannot calculate completion percentage
- Consider pairing with text to show actual numbers (e.g., "Uploading 5 of 10 files")
- Ensure adequate color contrast (4.5:1 minimum) for the progress indicator

## Browser Support

The Progress component uses the native HTML5 `<progress>` element with enhanced styling. The indeterminate animation is supported in all modern browsers. Custom styling is applied using browser-specific pseudo-elements:

- Chrome/Safari/Edge: `::-webkit-progress-bar`, `::-webkit-progress-value`
- Firefox: `::-moz-progress-bar`

## Examples

### File Upload Progress

```vue
<template>
  <div>
    <VueProgress 
      :value="uploadProgress" 
      :max="100" 
      :label="`Uploading ${fileName}...`" 
    />
    <p>{{ uploadProgress }}% complete</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { VueProgress } from 'agnosticui-core/Progress/vue/VueProgress';

const uploadProgress = ref(0);
const fileName = ref('document.pdf');

// Simulate upload progress
const interval = setInterval(() => {
  uploadProgress.value += 10;
  if (uploadProgress.value >= 100) {
    clearInterval(interval);
  }
}, 500);
</script>
```

### Loading State

```vue
<template>
  <div>
    <VueProgress label="Loading content..." />
    <p>Please wait...</p>
  </div>
</template>
```
