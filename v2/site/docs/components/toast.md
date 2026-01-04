# Toast

<AlphaWarning />


Toast notification is a non-modal element that appears at viewport edges or corners to provide brief, contextual feedback to a user. It can auto-dismiss after a duration and support pause-on-hover behavior.

## Examples

<FrameworkExample
  component="toast"
  :vue-code="vueCode"
  :lit-code="litCode"
  :react-code="reactCode"
>
  <template #vue>
    <ToastExamples />
  </template>
  <template #lit>
    <toast-lit-examples></toast-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import ToastExamples from '../examples/ToastExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/ToastLitExamples.js'
import vueCode from '../examples/ToastExamples.vue?raw'
import litCode from '../examples/ToastLitExamples.js?raw'
import reactCode from '../examples/ToastReactExamples.jsx?raw'
</script>



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls visibility of the toast |
| `type` | `'default' \| 'primary' \| 'success' \| 'info' \| 'warning' \| 'danger' \| 'error'` | `'default'` | The toast variant type |
| `position` | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'start' \| 'end'` | `'top-end'` | Viewport position where the toast appears |
| `duration` | `number` | `5000` | Auto-dismiss duration in milliseconds |
| `autoDismiss` | `boolean` | `true` | Enable auto-dismiss functionality |
| `showCloseButton` | `boolean` | `true` | Show the close button |
| `pauseOnHover` | `boolean` | `true` | Pause auto-dismiss timer when hovering |
| `bordered` | `boolean` | `false` | Adds a border around the toast |
| `rounded` | `boolean` | `true` | Applies rounded corners to the toast |
| `borderedLeft` | `boolean` | `false` | Adds a left border accent to the toast |

## Events

| Event | Framework | Detail | Description |
|-------|-----------|--------|-------------|
| `toast-open` | Vue: `@toast-open`<br>React: `onToastOpen`<br>Lit: `@toast-open` | `void` | Emitted when toast becomes visible |
| `toast-close` | Vue: `@toast-close`<br>React: `onToastClose`<br>Lit: `@toast-close` | `void` | Emitted when toast is closed (manually or via auto-dismiss) |
| `toast-dismiss` | Vue: `@toast-dismiss`<br>React: `onToastDismiss`<br>Lit: `@toast-dismiss` | `void` | Emitted specifically when auto-dismiss timer completes (not when closed manually) |

**Note:** All events use the dual-dispatch pattern:
- Native web component events (`toast-open`, `toast-close`, `toast-dismiss`) are dispatched with `bubbles: true` and `composed: true`
- Callback props (`onToastOpen`, `onToastClose`, `onToastDismiss`) are also invoked when set

### Event Handling Examples

::: details Vue
```vue
<template>
  <VueToast
    v-model:open="showToast"
    @toast-open="handleOpen"
    @toast-close="handleClose"
    @toast-dismiss="handleDismiss"
  >
    Toast with event handlers
  </VueToast>
</template>

<script setup>
import { ref } from 'vue';
import { VueToast } from 'agnosticui-core/toast/vue';

const showToast = ref(false);

const handleOpen = () => {
  console.log('Toast opened');
};

const handleClose = () => {
  console.log('Toast closed');
};

const handleDismiss = () => {
  console.log('Toast auto-dismissed');
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactToast } from 'agnosticui-core/toast/react';

export default function Example() {
  const [showToast, setShowToast] = useState(false);

  const handleOpen = () => {
    console.log('Toast opened');
  };

  const handleClose = () => {
    console.log('Toast closed');
    setShowToast(false);
  };

  const handleDismiss = () => {
    console.log('Toast auto-dismissed');
  };

  return (
    <ReactToast
      open={showToast}
      onToastOpen={handleOpen}
      onToastClose={handleClose}
      onToastDismiss={handleDismiss}
    >
      Toast with event handlers
    </ReactToast>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/toast';

  const toast = document.querySelector('#toast-with-events');
  
  toast.addEventListener('toast-open', () => {
    console.log('Toast opened');
  });
  
  toast.addEventListener('toast-close', () => {
    console.log('Toast closed');
  });
  
  toast.addEventListener('toast-dismiss', () => {
    console.log('Toast auto-dismissed');
  });
</script>

<ag-toast id="toast-with-events">
  Toast with event handlers
</ag-toast>
```
:::

## CSS Shadow Parts

Shadow Parts allow you to style internal elements of the toast from outside the shadow DOM using the `::part()` CSS selector.

| Part | Description |
|------|-------------|
| `ag-toast` | The outer container element |
| `ag-toast-content` | The content wrapper (wraps the alert component) |

### Customization Example

```css
/* Customize the toast container */
ag-toast::part(ag-toast) {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

/* Customize the content wrapper */
ag-toast::part(ag-toast-content) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  border: none;
}
```

## Accessibility

The Toast component is designed to be accessible by default:

- **ARIA Role**: Uses `role="status"` for informational toasts and `role="alert"` for urgent types (error, danger, warning)
- **ARIA Live Region**: Automatically sets `aria-live="polite"` for normal toasts and `aria-live="assertive"` for urgent toasts
- **ARIA Atomic**: Uses `aria-atomic="true"` to ensure the entire message is announced
- **Keyboard Support**: Press `Escape` to dismiss toast when close button is visible
- **Focus Management**: Toast appears without stealing focus, allowing users to continue their work
- **Pause on Hover**: Auto-dismiss pauses when hovering, giving users more time to read

### Best Practices

- **Keep Messages Brief**: Toast messages should be concise and easily scannable
- **Use Appropriate Types**: Use `error`/`danger` for critical errors, `warning` for important cautions, `success` for confirmations, and `info` for general notifications
- **Consider Auto-Dismiss**: For non-critical messages, enable auto-dismiss. For important messages requiring action, disable auto-dismiss or use longer durations
- **Position Thoughtfully**: Place toasts where they won't obscure important content. Top-end is conventional for most applications
- **Limit Frequency**: Avoid overwhelming users with too many toast notifications

## Common Patterns

### Toast with Icon

```vue
<template>
  <VueToast v-model:open="showToast" type="success">
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <CheckCircle :size="20" />
      <span>Profile updated successfully!</span>
    </div>
  </VueToast>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next';
import { VueToast } from 'agnosticui-core/toast/vue';
</script>
```

## Notes

- **Type variants**: Both `type="error"` and `type="danger"` are supported and interchangeable (they render identically)
- **Position behavior**: Corner positions (e.g., `top-end`) have max-width constraints (400px) while edge positions (e.g., `top`) span the full width
- **Animation**: Toasts animate in from their position direction (top positions slide down, bottom positions slide up, etc.)
- **Reduced motion**: Respects `prefers-reduced-motion` and uses only opacity transitions when enabled
- **Stacking**: Multiple toasts at the same position will overlap. See the Implementation Guide in the Examples section above for patterns on managing multiple toasts.
