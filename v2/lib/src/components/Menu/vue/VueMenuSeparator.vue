<template>
  <ag-menu-separator
    ref="menuSeparatorRef"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import '../core/_Menu';

// Template ref
const menuSeparatorRef = ref<HTMLElement>();

// Setup component
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined('ag-menu-separator');
});
</script>