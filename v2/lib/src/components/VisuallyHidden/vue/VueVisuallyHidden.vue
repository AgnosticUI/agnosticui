<template>
  <ag-visually-hidden>
    <slot />
  </ag-visually-hidden>
</template>

<script setup lang="ts">
// By importing the barrel file, we register the web component with Vue
import '../core/VisuallyHidden';
</script>
