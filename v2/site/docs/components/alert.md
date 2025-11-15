# Alert

Alerts are used to provide timely feedback to the user.

## Examples

<AlertExamples />

<script setup>
import AlertExamples from '../examples/AlertExamples.vue'
</script>

## Usage

::: details Vue

```vue
<template>
  <section>
    <div class="mbe4">
      <h3>Alerts</h3>
    </div>
    <div class="stacked">
      <VueAlert class="mbe2">Default alert</VueAlert>
      <VueAlert class="mbe2" type="success">Success alert</VueAlert>
      <VueAlert class="mbe2" type="info">Info alert</VueAlert>
      <VueAlert class="mbe2" type="warning">Warning alert</VueAlert>
      <VueAlert class="mbe2" type="danger">Danger alert</VueAlert>
      <VueAlert class="mbe2" type="error">Error alert</VueAlert>
      <VueAlert class="mbe2" type="monochrome">Monochrome alert</VueAlert>
    </div>

    <div class="mbe4">
      <h3>Bordered</h3>
    </div>
    <div class="stacked">
      <VueAlert class="mbe2" bordered>Default alert</VueAlert>
      <VueAlert class="mbe2" bordered type="success">Success alert</VueAlert>
      <VueAlert class="mbe2" bordered type="info">Info alert</VueAlert>
      <VueAlert class="mbe2" bordered type="warning">Warning alert</VueAlert>
      <VueAlert class="mbe2" bordered type="danger">Danger alert</VueAlert>
      <VueAlert class="mbe2" bordered type="error">Error alert</VueAlert>
      <VueAlert class="mbe2" bordered type="monochrome">Monochrome alert</VueAlert>
    </div>
    <div class="mbe4">
      <h3>Bordered Left with Icon</h3>
    </div>
    <div class="stacked">
      <VueAlert class="mbe2" borderedLeft>
        <div class="flex-inline items-center justify-center">
          <Info color="var(--ag-secondary)" :size="18" class="mie2" />
          Default alert
        </div>
      </VueAlert>
      <VueAlert class="mbe2" borderedLeft type="success">
        <div class="flex-inline items-center justify-center">
          <Info color="var(--ag-secondary)" :size="18" class="mie2" />Success
          alert
        </div>
      </VueAlert>
      <VueAlert class="mbe2" borderedLeft type="info">
        <div class="flex-inline items-center justify-center">
          <Info color="var(--ag-secondary)" :size="18" class="mie2" />Info alert
        </div>
      </VueAlert>
      <VueAlert class="mbe2" borderedLeft type="warning">
        <div class="flex-inline items-center justify-center">
          <Info color="var(--ag-warning-dark)" :size="18" class="mie2" />Warning
          alert
        </div>
      </VueAlert>
      <VueAlert class="mbe2" borderedLeft type="danger">
        <div class="flex-inline items-center justify-center">
          <Info color="var(--ag-danger-dark)" :size="18" class="mie2" />Danger
          alert
        </div>
      </VueAlert>
      <VueAlert class="mbe2" borderedLeft type="error">
        <div class="flex-inline items-center justify-center">
          <Info color="var(--ag-error-dark)" :size="18" class="mie2" />Error
          alert
        </div>
      </VueAlert>
    </div>
    <div class="mbe4">
      <h3>Rounded</h3>
    </div>
    <div class="stacked">
      <VueAlert class="mbe2" rounded>Default alert</VueAlert>
      <VueAlert class="mbe2" rounded type="success">Success alert</VueAlert>
      <VueAlert class="mbe2" rounded type="info">Info alert</VueAlert>
      <VueAlert class="mbe2" rounded type="warning">Warning alert</VueAlert>
      <VueAlert class="mbe2" rounded type="danger">Danger alert</VueAlert>
      <VueAlert class="mbe2" rounded type="error">Error alert</VueAlert>
      <VueAlert class="mbe2" rounded type="monochrome">Monochrome alert</VueAlert>
    </div>
  </section>
</template>
<script>
import { Info } from "lucide-vue-next";
import VueAlert from "agnosticui-core/alert/vue";
export default {
  name: "AlertExamples",
  components: { VueAlert, Info },
};
</script>
```

:::

::: details React

```tsx
import { ReactAlert } from "agnosticui-core/alert/react";

export default function AlertExamples() {
  return (
    <section>
      <div className="mbe4">
        <h3>Alerts</h3>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2">Default alert</ReactAlert>
        <ReactAlert className="mbe2" type="success">
          Success alert
        </ReactAlert>
        <ReactAlert className="mbe2" type="info">
          Info alert
        </ReactAlert>
        <ReactAlert className="mbe2" type="primary">
          Primary alert
        </ReactAlert>
        <ReactAlert className="mbe2" type="warning">
          Warning alert
        </ReactAlert>
        <ReactAlert className="mbe2" type="danger">
          Danger alert
        </ReactAlert>
        <ReactAlert className="mbe2" type="error">
          Error alert
        </ReactAlert>
      </div>

      <div className="mbe4">
        <h3>Bordered</h3>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2" bordered>
          Default alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered type="success">
          Success alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered type="info">
          Info alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered type="primary">
          Primary alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered type="warning">
          Warning alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered type="danger">
          Danger alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered type="error">
          Error alert
        </ReactAlert>
      </div>

      <div className="mbe4">
        <h3>Rounded</h3>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2" rounded>
          Default alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded type="success">
          Success alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded type="info">
          Info alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded type="primary">
          Primary alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded type="warning">
          Warning alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded type="danger">
          Danger alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded type="error">
          Error alert
        </ReactAlert>
      </div>

      <div className="mbe4">
        <h3>Bordered Left</h3>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2" borderedLeft>
          Default alert
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft type="success">
          Success alert
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft type="warning">
          Warning alert
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft type="danger">
          Danger alert
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft type="error">
          Error alert
        </ReactAlert>
      </div>
    </section>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/alert";
</script>

<section>
  <div class="mbe4">
    <h3>Alerts</h3>
  </div>
  <div class="stacked">
    <ag-alert class="mbe2">Default alert</ag-alert>
    <ag-alert class="mbe2" type="success">Success alert</ag-alert>
    <ag-alert class="mbe2" type="info">Info alert</ag-alert>
    <ag-alert class="mbe2" type="primary">Primary alert</ag-alert>
    <ag-alert class="mbe2" type="warning">Warning alert</ag-alert>
    <ag-alert class="mbe2" type="danger">Danger alert</ag-alert>
    <ag-alert class="mbe2" type="error">Error alert</ag-alert>
  </div>

  <div class="mbe4">
    <h3>Bordered</h3>
  </div>
  <div class="stacked">
    <ag-alert class="mbe2" bordered>Default alert</ag-alert>
    <ag-alert class="mbe2" bordered type="success">Success alert</ag-alert>
    <ag-alert class="mbe2" bordered type="info">Info alert</ag-alert>
    <ag-alert class="mbe2" bordered type="primary">Primary alert</ag-alert>
    <ag-alert class="mbe2" bordered type="warning">Warning alert</ag-alert>
    <ag-alert class="mbe2" bordered type="danger">Danger alert</ag-alert>
    <ag-alert class="mbe2" bordered type="error">Error alert</ag-alert>
  </div>

  <div class="mbe4">
    <h3>Rounded</h3>
  </div>
  <div class="stacked">
    <ag-alert class="mbe2" rounded>Default alert</ag-alert>
    <ag-alert class="mbe2" rounded type="success">Success alert</ag-alert>
    <ag-alert class="mbe2" rounded type="info">Info alert</ag-alert>
    <ag-alert class="mbe2" rounded type="primary">Primary alert</ag-alert>
    <ag-alert class="mbe2" rounded type="warning">Warning alert</ag-alert>
    <ag-alert class="mbe2" rounded type="danger">Danger alert</ag-alert>
    <ag-alert class="mbe2" rounded type="error">Error alert</ag-alert>
  </div>

  <div class="mbe4">
    <h3>Bordered Left</h3>
  </div>
  <div class="stacked">
    <ag-alert class="mbe2" borderedLeft>Default alert</ag-alert>
    <ag-alert class="mbe2" borderedLeft type="success">Success alert</ag-alert>
    <ag-alert class="mbe2" borderedLeft type="warning">Warning alert</ag-alert>
    <ag-alert class="mbe2" borderedLeft type="danger">Danger alert</ag-alert>
    <ag-alert class="mbe2" borderedLeft type="error">Error alert</ag-alert>
  </div>
</section>
```

:::

## Dismissible Alerts

Alerts can be made dismissible by adding the `dismissible` prop. This displays a close button and fires the `alert-dismiss` event when clicked.

::: details Vue

```vue
<template>
  <div>
    <VueAlert
      v-if="showAlert"
      type="success"
      dismissible
      @alert-dismiss="showAlert = false"
      class="mbe2"
    >
      This is a dismissible success alert. Click the × to dismiss.
    </VueAlert>

    <VueAlert
      v-if="showWarning"
      type="warning"
      dismissible
      rounded
      @alert-dismiss="handleWarningDismiss"
      class="mbe2"
    >
      Warning: This action cannot be undone!
    </VueAlert>

    <button v-if="!showAlert" @click="showAlert = true">
      Show Success Alert
    </button>
    <button v-if="!showWarning" @click="showWarning = true">
      Show Warning Alert
    </button>
  </div>
</template>

<script>
import VueAlert from "agnosticui-core/alert/vue";

export default {
  components: { VueAlert },
  data() {
    return {
      showAlert: true,
      showWarning: true,
    };
  },
  methods: {
    handleWarningDismiss(event) {
      console.log('Warning dismissed, type:', event.detail.type);
      this.showWarning = false;
    },
  },
};
</script>
```

:::

::: details React

```tsx
import { useState } from 'react';
import { ReactAlert } from 'agnosticui-core/alert/react';

export default function DismissibleAlertExample() {
  const [showAlert, setShowAlert] = useState(true);
  const [showWarning, setShowWarning] = useState(true);

  const handleWarningDismiss = (event) => {
    console.log('Warning dismissed, type:', event.detail.type);
    setShowWarning(false);
  };

  return (
    <div>
      {showAlert && (
        <ReactAlert
          type="success"
          dismissible
          onAlertDismiss={() => setShowAlert(false)}
          className="mbe2"
        >
          This is a dismissible success alert. Click the × to dismiss.
        </ReactAlert>
      )}

      {showWarning && (
        <ReactAlert
          type="warning"
          dismissible
          rounded
          onAlertDismiss={handleWarningDismiss}
          className="mbe2"
        >
          Warning: This action cannot be undone!
        </ReactAlert>
      )}

      {!showAlert && (
        <button onClick={() => setShowAlert(true)}>
          Show Success Alert
        </button>
      )}
      {!showWarning && (
        <button onClick={() => setShowWarning(true)}>
          Show Warning Alert
        </button>
      )}
    </div>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/alert";

  document.addEventListener('DOMContentLoaded', () => {
    const successAlert = document.querySelector('#success-alert');
    const warningAlert = document.querySelector('#warning-alert');
    const showSuccessBtn = document.querySelector('#show-success');
    const showWarningBtn = document.querySelector('#show-warning');

    // Using addEventListener pattern
    successAlert?.addEventListener('alert-dismiss', (e) => {
      console.log('Success alert dismissed, type:', e.detail.type);
      successAlert.style.display = 'none';
      showSuccessBtn.style.display = 'inline-block';
    });

    // Using callback prop pattern
    if (warningAlert) {
      warningAlert.onAlertDismiss = (e) => {
        console.log('Warning dismissed, type:', e.detail.type);
        warningAlert.style.display = 'none';
        showWarningBtn.style.display = 'inline-block';
      };
    }

    showSuccessBtn?.addEventListener('click', () => {
      successAlert.style.display = 'block';
      showSuccessBtn.style.display = 'none';
    });

    showWarningBtn?.addEventListener('click', () => {
      warningAlert.style.display = 'block';
      showWarningBtn.style.display = 'none';
    });
  });
</script>

<div>
  <ag-alert
    id="success-alert"
    type="success"
    dismissible
    class="mbe2"
  >
    This is a dismissible success alert. Click the × to dismiss.
  </ag-alert>

  <ag-alert
    id="warning-alert"
    type="warning"
    dismissible
    rounded
    class="mbe2"
  >
    Warning: This action cannot be undone!
  </ag-alert>

  <button id="show-success" style="display: none;">
    Show Success Alert
  </button>
  <button id="show-warning" style="display: none;">
    Show Warning Alert
  </button>
</div>
```

:::

## Props

| Prop           | Type                                                                                | Default     | Description                            |
| -------------- | ----------------------------------------------------------------------------------- | ----------- | -------------------------------------- |
| `type`         | `'default' \| 'primary' \| 'success' \| 'info' \| 'warning' \| 'danger' \| 'error'` | `'default'` | The alert variant type                 |
| `bordered`     | `boolean`                                                                           | `false`     | Adds a border around the alert         |
| `rounded`      | `boolean`                                                                           | `false`     | Applies rounded corners to the alert   |
| `borderedLeft` | `boolean`                                                                           | `false`     | Adds a left border accent to the alert |
| `dismissible`  | `boolean`                                                                           | `false`     | Shows a close button to dismiss the alert |

## Events

| Event | Framework | Detail | Description |
|-------|-----------|--------|-------------|
| `alert-dismiss` | Vue: `@alert-dismiss`<br>React: `onAlertDismiss`<br>Lit: `@alert-dismiss` or `.onAlertDismiss` | `{ type: AlertType }` | Fired when the alert's close button is clicked. Provides the alert type in the detail. |

### Event Patterns

AgnosticUI Alert supports **three event handling patterns**:

1. **addEventListener** (Lit/Vanilla JS):
```javascript
const alert = document.querySelector('ag-alert');
alert.addEventListener('alert-dismiss', (e) => {
  console.log('Alert dismissed, type:', e.detail.type);
  // Remove the alert from the DOM
  alert.remove();
});
```

2. **Callback props** (Lit/Vanilla JS):
```javascript
const alert = document.querySelector('ag-alert');
alert.onAlertDismiss = (e) => {
  console.log('Alert dismissed, type:', e.detail.type);
  alert.remove();
};
```

3. **Framework event handlers** (Vue/React):
```vue
<!-- Vue -->
<VueAlert
  dismissible
  @alert-dismiss="handleDismiss"
>
  Dismissible alert
</VueAlert>
```
```tsx
// React
<ReactAlert
  dismissible
  onAlertDismiss={handleDismiss}
>
  Dismissible alert
</ReactAlert>
```

All three patterns work identically thanks to the **dual-dispatch** system.

## CSS Shadow Parts

Shadow Parts allow you to style internal elements of the alert from outside the shadow DOM using the `::part()` CSS selector.

| Part       | Description                      |
| ---------- | -------------------------------- |
| `ag-alert` | The main alert container element |

### Customization Example

```css
/* Customize the alert container */
ag-alert::part(ag-alert) {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border: 3px solid #fa709a;
  box-shadow: 0 4px 12px rgba(250, 112, 154, 0.3);
  font-weight: 600;
}
```

## Notes

- **Type variants**: Both `type="error"` and `type="danger"` are supported and interchangeable (they render identically)
- **Lit**: Properties can be set via attributes (e.g., `<ag-alert bordered>`) or via property binding in Lit templates (e.g., `.bordered=${true}`)
- All three implementations share the same underlying styles and behavior
