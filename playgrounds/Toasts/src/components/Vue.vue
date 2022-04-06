<template>
  <section
    :v-if="!isSSR"
    class="mbe40"
  >
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Toast
    </div>
    <Toasts
      vertical-position="top"
      horizontal-position="start"
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
        Vue: Self timed toast that will close in 10 seconds.
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
          Vue: Self timed toast that will close in 10 seconds.
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
        Vue: Error toast with &nbsp;<code>aria-live</code>&nbsp;
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
          Vue: This is a closable toast message
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
          Vue: This is a closable toast message
        </div>
        <Close
          @click="close2Toast()"
          :style="{ 'color': 'var(--agnostic-warning-dark)' }"
        />
      </Toast>
    </Toasts>
  </section>
</template>
<script setup>
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
// See https://docs.astro.build/en/reference/api-reference/#importmeta
const isSSR = import.meta.env.SSR;
</script>
