<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Alerts
    </div>
    <div style="color: var(--agnostic-dark)">
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
    </div>
    <div class="mbs12 mbe16">
      <Alert type="dark">
        <AlertIconExample
          icon-type="dark"
          utility-classes="mie8"
        >
          <template #icon />
        </AlertIconExample>
        <p class="flex-fill">
          {{ message }}
        </p>
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert type="success">
        <AlertIconExample
          icon-type="success"
          utility-classes="mie8"
        >
          <template #icon />
        </AlertIconExample>
        <p class="flex-fill">
          {{ message }}
        </p>
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert type="info">
        <AlertIconExample
          icon-type="info"
          utility-classes="mie8"
        >
          <template #icon />
        </AlertIconExample>
        <p class="flex-fill">
          {{ message }}
        </p>
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert type="warning">
        <AlertIconExample
          icon-type="warning"
          utility-classes="mie8"
        >
          <template #icon />
        </AlertIconExample>
        <p class="flex-fill">
          {{ message }}
        </p>
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert type="error">
        <AlertIconExample
          icon-type="error"
          utility-classes="mie8"
        >
          <template #icon />
        </AlertIconExample>
        <p class="flex-fill">
          {{ message }}
        </p>
      </Alert>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, useCssModule } from "vue";
// Components CSS
import "agnostic-vue/dist/index.css";
import { Alert } from "agnostic-vue";
import AlertIconExample from "./AlertIconExample.vue";
const message = "Alerts should be used for timely information.";
</script>
