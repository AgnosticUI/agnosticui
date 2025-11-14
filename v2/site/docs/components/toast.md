# Toast

Toast notification is a non-modal element that appears at viewport edges or corners to provide brief, contextual feedback to a user. It can auto-dismiss after a duration and support pause-on-hover behavior.

## Examples

<ToastExamples />

<script setup>
import ToastExamples from '../examples/ToastExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <div class="mbe4">
      <h3>Toast Types</h3>
    </div>
    <div class="stacked">
      <button @click="showDefault = true">Show Default Toast</button>
      <VueToast v-model:open="showDefault">
        Default toast notification
      </VueToast>

      <button @click="showSuccess = true">Show Success Toast</button>
      <VueToast v-model:open="showSuccess" type="success">
        Operation completed successfully!
      </VueToast>

      <button @click="showError = true">Show Error Toast</button>
      <VueToast v-model:open="showError" type="error">
        An error occurred. Please try again.
      </VueToast>

      <button @click="showWarning = true">Show Warning Toast</button>
      <VueToast v-model:open="showWarning" type="warning">
        Warning: This action cannot be undone.
      </VueToast>

      <button @click="showInfo = true">Show Info Toast</button>
      <VueToast v-model:open="showInfo" type="info">
        New message received!
      </VueToast>
    </div>

    <div class="mbe4">
      <h3>Positions</h3>
    </div>
    <div class="stacked">
      <button @click="showTopStart = true">Top Start</button>
      <VueToast v-model:open="showTopStart" position="top-start">
        Toast at top-start
      </VueToast>

      <button @click="showTopEnd = true">Top End</button>
      <VueToast v-model:open="showTopEnd" position="top-end">
        Toast at top-end (default)
      </VueToast>

      <button @click="showBottomStart = true">Bottom Start</button>
      <VueToast v-model:open="showBottomStart" position="bottom-start">
        Toast at bottom-start
      </VueToast>

      <button @click="showBottomEnd = true">Bottom End</button>
      <VueToast v-model:open="showBottomEnd" position="bottom-end">
        Toast at bottom-end
      </VueToast>
    </div>

    <div class="mbe4">
      <h3>With Border Styles</h3>
    </div>
    <div class="stacked">
      <button @click="showBordered = true">Bordered Toast</button>
      <VueToast v-model:open="showBordered" type="info" bordered>
        Toast with border
      </VueToast>

      <button @click="showBorderedLeft = true">Left Border Toast</button>
      <VueToast v-model:open="showBorderedLeft" type="success" borderedLeft>
        Toast with left border accent
      </VueToast>
    </div>

    <div class="mbe4">
      <h3>Auto-Dismiss Options</h3>
    </div>
    <div class="stacked">
      <button @click="showAutoDismiss = true">Auto-Dismiss (3s)</button>
      <VueToast 
        v-model:open="showAutoDismiss" 
        :duration="3000"
        type="info"
      >
        This toast will auto-dismiss in 3 seconds
      </VueToast>

      <button @click="showNoAutoDismiss = true">No Auto-Dismiss</button>
      <VueToast 
        v-model:open="showNoAutoDismiss" 
        :auto-dismiss="false"
        type="info"
      >
        This toast will not auto-dismiss. Click X to close.
      </VueToast>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { VueToast } from 'agnosticui-core/toast/vue';

export default {
  name: 'ToastExamples',
  components: { VueToast },
  setup() {
    const showDefault = ref(false);
    const showSuccess = ref(false);
    const showError = ref(false);
    const showWarning = ref(false);
    const showInfo = ref(false);
    const showTopStart = ref(false);
    const showTopEnd = ref(false);
    const showBottomStart = ref(false);
    const showBottomEnd = ref(false);
    const showBordered = ref(false);
    const showBorderedLeft = ref(false);
    const showAutoDismiss = ref(false);
    const showNoAutoDismiss = ref(false);

    return {
      showDefault,
      showSuccess,
      showError,
      showWarning,
      showInfo,
      showTopStart,
      showTopEnd,
      showBottomStart,
      showBottomEnd,
      showBordered,
      showBorderedLeft,
      showAutoDismiss,
      showNoAutoDismiss,
    };
  },
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactToast } from 'agnosticui-core/toast/react';

export default function ToastExamples() {
  const [showDefault, setShowDefault] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section>
      <div className="mbe4">
        <h3>Toast Types</h3>
      </div>
      <div className="stacked">
        <button onClick={() => setShowDefault(true)}>Show Default Toast</button>
        <ReactToast open={showDefault} onToastClose={() => setShowDefault(false)}>
          Default toast notification
        </ReactToast>

        <button onClick={() => setShowSuccess(true)}>Show Success Toast</button>
        <ReactToast 
          open={showSuccess} 
          type="success"
          onToastClose={() => setShowSuccess(false)}
        >
          Operation completed successfully!
        </ReactToast>

        <button onClick={() => setShowError(true)}>Show Error Toast</button>
        <ReactToast 
          open={showError} 
          type="error"
          onToastClose={() => setShowError(false)}
        >
          An error occurred. Please try again.
        </ReactToast>

        <button onClick={() => setShowWarning(true)}>Show Warning Toast</button>
        <ReactToast 
          open={showWarning} 
          type="warning"
          onToastClose={() => setShowWarning(false)}
        >
          Warning: This action cannot be undone.
        </ReactToast>

        <button onClick={() => setShowInfo(true)}>Show Info Toast</button>
        <ReactToast 
          open={showInfo} 
          type="info"
          onToastClose={() => setShowInfo(false)}
        >
          New message received!
        </ReactToast>
      </div>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/toast';
</script>

<section>
  <div class="mbe4">
    <h3>Toast Types</h3>
  </div>
  <div class="stacked">
    <button onclick="document.querySelector('#toast-default').open = true">
      Show Default Toast
    </button>
    <ag-toast id="toast-default">
      Default toast notification
    </ag-toast>

    <button onclick="document.querySelector('#toast-success').open = true">
      Show Success Toast
    </button>
    <ag-toast id="toast-success" type="success">
      Operation completed successfully!
    </ag-toast>

    <button onclick="document.querySelector('#toast-error').open = true">
      Show Error Toast
    </button>
    <ag-toast id="toast-error" type="error">
      An error occurred. Please try again.
    </ag-toast>

    <button onclick="document.querySelector('#toast-warning').open = true">
      Show Warning Toast
    </button>
    <ag-toast id="toast-warning" type="warning">
      Warning: This action cannot be undone.
    </ag-toast>

    <button onclick="document.querySelector('#toast-info').open = true">
      Show Info Toast
    </button>
    <ag-toast id="toast-info" type="info">
      New message received!
    </ag-toast>
  </div>

  <div class="mbe4">
    <h3>Positions</h3>
  </div>
  <div class="stacked">
    <button onclick="document.querySelector('#toast-top-start').open = true">
      Top Start
    </button>
    <ag-toast id="toast-top-start" position="top-start">
      Toast at top-start
    </ag-toast>

    <button onclick="document.querySelector('#toast-top-end').open = true">
      Top End
    </button>
    <ag-toast id="toast-top-end" position="top-end">
      Toast at top-end (default)
    </ag-toast>

    <button onclick="document.querySelector('#toast-bottom-start').open = true">
      Bottom Start
    </button>
    <ag-toast id="toast-bottom-start" position="bottom-start">
      Toast at bottom-start
    </ag-toast>

    <button onclick="document.querySelector('#toast-bottom-end').open = true">
      Bottom End
    </button>
    <ag-toast id="toast-bottom-end" position="bottom-end">
      Toast at bottom-end
    </ag-toast>
  </div>

  <div class="mbe4">
    <h3>With Border Styles</h3>
  </div>
  <div class="stacked">
    <button onclick="document.querySelector('#toast-bordered').open = true">
      Bordered Toast
    </button>
    <ag-toast id="toast-bordered" type="info" bordered>
      Toast with border
    </ag-toast>

    <button onclick="document.querySelector('#toast-bordered-left').open = true">
      Left Border Toast
    </button>
    <ag-toast id="toast-bordered-left" type="success" borderedLeft>
      Toast with left border accent
    </ag-toast>
  </div>

  <div class="mbe4">
    <h3>Auto-Dismiss Options</h3>
  </div>
  <div class="stacked">
    <button onclick="document.querySelector('#toast-auto-dismiss').open = true">
      Auto-Dismiss (3s)
    </button>
    <ag-toast id="toast-auto-dismiss" duration="3000" type="info">
      This toast will auto-dismiss in 3 seconds
    </ag-toast>

    <button onclick="document.querySelector('#toast-no-auto-dismiss').open = true">
      No Auto-Dismiss
    </button>
    <ag-toast id="toast-no-auto-dismiss" auto-dismiss="false" type="info">
      This toast will not auto-dismiss. Click X to close.
    </ag-toast>
  </div>
</section>
```
:::

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
