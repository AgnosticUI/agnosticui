<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Close, Toasts, Toast } from "agnostic-vue";
import ToastIconExample from "./ToastIconExample.vue";
import { ref } from "vue";

export default {
  name: "CloseExamples",
  components: {
    Close,
    Toasts,
    Toast,
    ToastIconExample,
  },

  setup() {
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

    return {
      timedToast,
      toast1IsOpen,
      toast2IsOpen,
      close1Toast,
      close2Toast,
    };
  },
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
    <div className="mbe14" />
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
      &ldquo;assertive&rdquo; (10 seconds)
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
