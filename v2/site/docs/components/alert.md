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
      <VueAlert
        class="mbe2"
        type="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="danger"
      >Danger alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="error"
      >Error alert</VueAlert>
    </div>

    <div class="mbe4">
      <h3>Bordered</h3>
    </div>
    <div class="stacked">
      <VueAlert
        class="mbe2"
        bordered
      >Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        type="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        type="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        type="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        type="danger"
      >Danger alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        type="error"
      >Error alert</VueAlert>
    </div>
    <div class="mbe4">
      <h3>Bordered Left with Icon</h3>
    </div>
    <div class="stacked">
      <VueAlert
        class="mbe2"
        borderedLeft
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-secondary)"
            :size="18"
            class="mie2"
          />
          Default alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="success"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-secondary)"
            :size="18"
            class="mie2"
          />Success alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="info"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-secondary)"
            :size="18"
            class="mie2"
          />Info alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="warning"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-warning)"
            :size="18"
            class="mie2"
          />Warning alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="danger"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-danger)"
            :size="18"
            class="mie2"
          />Danger alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="error"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-error)"
            :size="18"
            class="mie2"
          />Error alert
        </div>
      </VueAlert>
    </div>
    <div class="mbe4">
      <h3>Rounded</h3>
    </div>
    <div class="stacked">
      <VueAlert
        class="mbe2"
        rounded
      >Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        type="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        type="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        type="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        type="danger"
      >Danger alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        type="error"
      >Error alert</VueAlert>
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
import { ReactAlert } from 'agnosticui-core/alert/react';

export default function AlertExamples() {
  return (
    <section>
      <div className="mbe4">
        <h3>Alerts</h3>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2">Default alert</ReactAlert>
        <ReactAlert className="mbe2" type="success">Success alert</ReactAlert>
        <ReactAlert className="mbe2" type="info">Info alert</ReactAlert>
        <ReactAlert className="mbe2" type="primary">Primary alert</ReactAlert>
        <ReactAlert className="mbe2" type="warning">Warning alert</ReactAlert>
        <ReactAlert className="mbe2" type="danger">Danger alert</ReactAlert>
        <ReactAlert className="mbe2" type="error">Error alert</ReactAlert>
      </div>

      <div className="mbe4">
        <h3>Bordered</h3>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2" bordered>Default alert</ReactAlert>
        <ReactAlert className="mbe2" bordered type="success">Success alert</ReactAlert>
        <ReactAlert className="mbe2" bordered type="info">Info alert</ReactAlert>
        <ReactAlert className="mbe2" bordered type="primary">Primary alert</ReactAlert>
        <ReactAlert className="mbe2" bordered type="warning">Warning alert</ReactAlert>
        <ReactAlert className="mbe2" bordered type="danger">Danger alert</ReactAlert>
        <ReactAlert className="mbe2" bordered type="error">Error alert</ReactAlert>
      </div>

      <div className="mbe4">
        <h3>Rounded</h3>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2" rounded>Default alert</ReactAlert>
        <ReactAlert className="mbe2" rounded type="success">Success alert</ReactAlert>
        <ReactAlert className="mbe2" rounded type="info">Info alert</ReactAlert>
        <ReactAlert className="mbe2" rounded type="primary">Primary alert</ReactAlert>
        <ReactAlert className="mbe2" rounded type="warning">Warning alert</ReactAlert>
        <ReactAlert className="mbe2" rounded type="danger">Danger alert</ReactAlert>
        <ReactAlert className="mbe2" rounded type="error">Error alert</ReactAlert>
      </div>

      <div className="mbe4">
        <h3>Bordered Left</h3>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2" borderedLeft>Default alert</ReactAlert>
        <ReactAlert className="mbe2" borderedLeft type="success">Success alert</ReactAlert>
        <ReactAlert className="mbe2" borderedLeft type="warning">Warning alert</ReactAlert>
        <ReactAlert className="mbe2" borderedLeft type="danger">Danger alert</ReactAlert>
        <ReactAlert className="mbe2" borderedLeft type="error">Error alert</ReactAlert>
      </div>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/alert';
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

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'default' \| 'primary' \| 'success' \| 'info' \| 'warning' \| 'danger' \| 'error'` | `'default'` | The alert variant type |
| `bordered` | `boolean` | `false` | Adds a border around the alert |
| `rounded` | `boolean` | `false` | Applies rounded corners to the alert |
| `borderedLeft` | `boolean` | `false` | Adds a left border accent to the alert |

## Notes

- **Type variants**: Both `type="error"` and `type="danger"` are supported and interchangeable (they render identically)
- **Lit**: Properties can be set via attributes (e.g., `<ag-alert bordered>`) or via property binding in Lit templates (e.g., `.bordered=${true}`)
- All three implementations share the same underlying styles and behavior
