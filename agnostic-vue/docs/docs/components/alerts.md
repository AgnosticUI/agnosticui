# Alerts

Alerts provide contextual notifications or messages with [timely information](https://www.w3.org/TR/wai-aria-practices/#alert).

<div class="mbe24"></div>

## Examples

<AlertExamples />

<script setup>
import AlertExamples from '../../components/AlertExamples.vue'
// import { Alert, Button } from "agnostic-vue";
</script>

## Usage

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<template>
  <div class="mbs12 mbe16">
    <Alert>Default</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert isRounded>Rounded</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert isBorderAll>Border all</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert isBorderLeft>Border left</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="success">
      <IconExample
        icon-type="success"
        utility-classes="mie8"
      >
        <template #icon />
      </IconExample>
      <p class="flex-fill">
        Success alert with projected icon
      </p>
    </Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="info">
      <IconExample
        icon-type="info"
        utility-classes="mie8"
      >
        <template #icon />
      </IconExample>
      <p class="flex-fill">
        Info alert with projected icon
      </p>
    </Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="warning">
      <IconExample
        icon-type="warning"
        utility-classes="mie8"
      >
        <template #icon />
      </IconExample>
      <p class="flex-fill">
        Warning alert with projected icon
      </p>
    </Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="error">
      <IconExample
        icon-type="error"
        utility-classes="mie8"
      >
        <template #icon />
      </IconExample>
      <p class="flex-fill">
        Error alert with projected icon
      </p>
    </Alert>
  </div>
</template>

<script setup>
import "agnostic-vue/dist/index.css";
import { Alert } from "agnostic-vue";
import IconExample from "./IconExample.vue";
</script>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Alert.vue)

<div class="mbe24"></div>
