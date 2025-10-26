# Spinner

A spinner component displays a circular rotating animation to indicate loading state or ongoing activity. Use spinners to provide visual feedback when content is loading, processing, or waiting for a response.

## Examples

<SpinnerExamples />

<script setup>
import SpinnerExamples from '../examples/SpinnerExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
      <VueSpinner />
    </div>

    <div class="mbe4">
      <h3>Sizes</h3>
      <div class="flex flex-col items-center" style="gap: 24px">
        <VueSpinner size="small" />
        <VueSpinner />
        <VueSpinner size="large" />
        <VueSpinner size="xlarge" />
      </div>
    </div>

    <div class="mbe4">
      <h3>Custom Aria Label</h3>
      <VueSpinner ariaLabel="Processing your request..." />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueSpinner } from 'agnosticui-core/spinner/vue';
export default defineComponent({
  components: { VueSpinner }
});
</script>
```
:::

::: details React
```tsx
import { ReactSpinner } from 'agnosticui-core/spinner/react';

export default function SpinnerExamples() {
  return (
    <section>
      <div className="mbe4">
        <h3>Default</h3>
        <ReactSpinner />
      </div>

      <div className="mbe4">
        <h3>Sizes</h3>
        <div className="flex flex-col items-center" style={{ gap: '24px' }}>
          <ReactSpinner size="small" />
          <ReactSpinner />
          <ReactSpinner size="large" />
          <ReactSpinner size="xlarge" />
        </div>
      </div>

      <div className="mbe4">
        <h3>Custom Aria Label</h3>
        <ReactSpinner ariaLabel="Processing your request..." />
      </div>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/spinner';
</script>

<section>
  <div class="mbe4">
    <h3>Default</h3>
    <ag-spinner></ag-spinner>
  </div>

  <div class="mbe4">
    <h3>Sizes</h3>
    <div class="flex flex-col items-center" style="gap: 24px">
      <ag-spinner size="small"></ag-spinner>
      <ag-spinner></ag-spinner>
      <ag-spinner size="large"></ag-spinner>
      <ag-spinner size="xlarge"></ag-spinner>
    </div>
  </div>

  <div class="mbe4">
    <h3>Custom Aria Label</h3>
    <ag-spinner aria-label="Processing your request..."></ag-spinner>
  </div>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `small` \| `default` \| `large` \| `xlarge` | `default` | Sets the spinner size. |
| `ariaLabel` | `string` | `Loading...` | The ARIA label for accessibility. |

## Variants

The `spinner` component has `size` variants that include: `small`, `default`, `large`, and `xlarge`.

## CSS Shadow Parts

Shadow Parts allow you to style internal elements of the spinner from outside the shadow DOM using the `::part()` CSS selector.

| Part | Description |
|------|-------------|
| `ag-spinner` | The main spinner container element. |
| `ag-spinner-label` | The screen reader text element (visually hidden but accessible to screen readers). |

### Customization Example

You can customize the spinner color by setting the `--spinner-color` CSS custom property:

```css
/* Customize the spinner color */
ag-spinner::part(ag-spinner) {
  --spinner-color: var(--ag-primary);
}

/* Or use any color value */
ag-spinner.custom-spinner::part(ag-spinner) {
  --spinner-color: #ff6b6b;
}

/* You can also adjust the size with custom CSS */
ag-spinner.large-custom {
  width: 100px;
  height: 100px;
}

ag-spinner.large-custom::part(ag-spinner)::after {
  width: 100px;
  height: 100px;
  border-width: 8px;
}
```

## Events

The Spinner component does not emit any custom events.

## Accessibility

The Spinner component is built with accessibility in mind and includes several features to ensure it works well with assistive technologies:

### ARIA Attributes

- **`role="status"`**: Identifies the spinner as a status indicator, telling screen readers this is dynamic content
- **`aria-live="polite"`**: Announces loading state changes to screen readers without interrupting the user
- **`aria-busy="true"`**: Indicates that the element is currently in a busy/loading state
- **`aria-label`**: Provides customizable screen reader text (default: "Loading...")

### Screen Reader Support

The spinner includes visually hidden text that is accessible to screen readers. You can customize this text using the `ariaLabel` prop:

```html
<ag-spinner aria-label="Processing your payment..."></ag-spinner>
```

Or use the default slot to provide custom text:

```html
<ag-spinner>
  <span>Please wait while we fetch your data</span>
</ag-spinner>
```

### Motion Considerations

The spinner respects the user's motion preferences:

- **`prefers-reduced-motion`**: When users have reduced motion enabled in their system settings, the spinner animation duration is reduced to nearly instant (0.001ms), effectively disabling the animation while maintaining visual indication

### Best Practices

1. **Always provide context**: Use descriptive `ariaLabel` text that explains what is being loaded
2. **Don't overuse**: Only show spinners when content is actually loading or processing
3. **Consider placement**: Position spinners where users expect to see loading feedback
4. **Complement with text**: For longer operations, consider adding visible status text alongside the spinner
5. **Remove when complete**: Hide or remove the spinner once loading is complete to indicate the action is finished

### Keyboard Navigation

The spinner component is a non-interactive visual indicator and does not receive keyboard focus, which is the correct behavior for status indicators.

## Notes

- **Size variants**: Choose the appropriate size based on the context - use `small` for inline loading, `default` for standard content areas, `large` for larger containers, and `xlarge` for full-page loading states
- **Color customization**: The spinner inherits the text color by default (`--ag-text-primary`), but you can customize it using the `--spinner-color` CSS custom property
- **Lit**: Properties can be set via attributes (e.g., `<ag-spinner size="large">`) or via property binding in Lit templates (e.g., `.size=${'large'}`)
- **Performance**: The spinner uses CSS animations with GPU acceleration for smooth performance
- **Responsive motion**: The animation automatically adjusts based on user's system motion preferences, ensuring accessibility for users sensitive to motion
- All three implementations (Lit, React, Vue) share the same underlying styles and behavior
