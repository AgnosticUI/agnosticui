# Toast

The `Toast` component is a type of alert dialog either appears for a finite period of time (e.g. 10 seconds) and then is dismissed, or, it may be <span class="quoted">sticky</span> until dismissed by user clicking a close button.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<ToastExamples />

<script setup>
import ToastExamples from '../../components/ToastExamples.vue'
import Alert from "../../../src/components/Alert.vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<script setup>
import "agnostic-vue/dist/common.min.css";
// Components CSS
import "agnostic-vue/dist/index.css";
import { Close, Toasts, Toast } from "agnostic-vue";
import ToastIconExample from "./ToastIconExample.vue";
import { ref } from "vue";
const timedToast = ref(true);
setTimeout(() => {
  timedToast.value = false;
}, 10000);

const toast1IsOpen = ref(true);
const close1Toast = () => {
  toast1IsOpen.value = false;
};
const toast2IsOpen = ref(true);
const close2Toast = () => {
  toast2IsOpen.value = false;
};
</script>
<template>
  <Toasts
    vertical-position="top"
    horizontal-position="end"
  >
    <Toast
      :is-open="timedToast"
      type="info"
    >
      <ToastIconExample
        icon-type="info"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      Self timed toast that will close in 10 seconds.
    </Toast>
    <Toast
      :is-open="timedToast"
      type="success"
    >
      <ToastIconExample
        icon-type="success"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      <div class="flex-fill">
        Self timed toast that will close in 10 seconds.
      </div>
    </Toast>
  </Toasts>
  <Toasts
    vertical-position="top"
    horizontal-position="center"
  >

    <Toast
      :is-open="timedToast"
      type="error"
    >
      <ToastIconExample
        icon-type="error"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      Error toast with &nbsp;<code>aria-live</code>&nbsp;
      <span class="quoted">assertive</span> (10 seconds)
    </Toast>
  </Toasts>
  <Toasts
    vertical-position="bottom"
    horizontal-position="end"
  >
    <Toast
      :is-open="toast1IsOpen"
      type="dark"
    >
      <ToastIconExample
        icon-type="dark"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      <div class="flex-fill">
        This is a closable toast message
      </div>
      <Close
        @click="close1Toast()"
        :style="{ 'color': 'var(--agnostic-light)' }"
      />
    </Toast>
    <div className="mbe14" />
    <Toast
      :is-open="toast2IsOpen"
      type="warning"
    >
      <ToastIconExample
        icon-type="warning"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      <div class="flex-fill">
        This is a closable toast message
      </div>
      <Close
        @click="close2Toast()"
        :style="{ 'color': 'var(--agnostic-warning-dark)' }"
      />
    </Toast>
  </Toasts>
</template>
```
</details>

Vue 3: [Toasts](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Toasts.vue) and [Toast](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Toast.vue) components.
