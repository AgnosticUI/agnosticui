<template>
  <div style="padding: 2rem">
    <h1>Vue Button Examples</h1>

    <section style="margin-bottom: 2rem">
      <h2>Basic Variants</h2>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap">
        <VueButton>Default Button</VueButton>
        <VueButton @click="handleClick">
          Clicked {{ clickCount }} times
        </VueButton>
      </div>
    </section>

    <section style="margin-bottom: 2rem">
      <h2>Button Types</h2>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap">
        <VueButton type="button">Button Type</VueButton>
        <VueButton type="submit">Submit Type</VueButton>
        <VueButton type="reset">Reset Type</VueButton>
      </div>
    </section>

    <section style="margin-bottom: 2rem">
      <h2>Button States</h2>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap">
        <VueButton :disabled="true">Disabled Button</VueButton>
        <VueButton :loading="isLoading" @click="handleAsyncAction">
          {{ isLoading ? "Loading..." : "Async Action" }}
        </VueButton>
      </div>
    </section>

    <section style="margin-bottom: 2rem">
      <h2>Toggle Functionality</h2>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap">
        <VueButton :toggle="true" :pressed="togglePressed" @toggle="handleToggle">
          Toggle Button {{ togglePressed ? "(Pressed)" : "(Not Pressed)" }}
        </VueButton>
      </div>
    </section>

    <section style="margin-bottom: 2rem">
      <h2>With Icons</h2>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap">
        <VueButton>
          <span style="margin-right: 0.5rem">📥</span>
          Download
        </VueButton>
        <VueButton>⚙️</VueButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VueButton from "agnosticui-core/vue";
import "agnosticui-core";

const clickCount = ref(0);
const togglePressed = ref(false);
const isLoading = ref(false);

const handleClick = (event: Event) => {
  console.log("Vue button clicked:", event);
  clickCount.value++;
};

const handleToggle = (detail: { pressed: boolean }) => {
  console.log("Toggle state:", detail);
  togglePressed.value = detail.pressed;
};

const handleAsyncAction = async () => {
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isLoading.value = false;
};
</script>
