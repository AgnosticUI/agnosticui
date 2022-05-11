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
      <ToastIconExample
        icon-type="success"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      <p class="flex-fill">
        Success alert with projected icon
      </p>
    </Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="info">
      <ToastIconExample
        icon-type="info"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      <p class="flex-fill">
        Info alert with projected icon
      </p>
    </Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="warning">
      <ToastIconExample
        icon-type="warning"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      <p class="flex-fill">
        Warning alert with projected icon
      </p>
    </Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="error">
      <ToastIconExample
        icon-type="error"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      <p class="flex-fill">
      </p>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import Alert from "../../src/components/Alert.vue";
import ToastIconExample from "./ToastIconExample.vue";
</script>
