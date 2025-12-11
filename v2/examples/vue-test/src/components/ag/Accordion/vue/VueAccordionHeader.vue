<template>
  <span slot="header">
    <slot />
  </span>
</template>

<script setup lang="ts">
// VueAccordionHeader component - simple slot wrapper
export interface VueAccordionHeaderProps {
  // No specific props needed - just slot content
}

// Define props with defaults (empty)
const props = withDefaults(defineProps<VueAccordionHeaderProps>(), {});
</script>