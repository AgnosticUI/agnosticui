<template>
  <div slot="content">
    <slot />
  </div>
</template>

<script setup lang="ts">
// VueAccordionContent component - simple slot wrapper
export interface VueAccordionContentProps {
  // No specific props needed - just slot content
}

// Define props with defaults (empty)
const props = withDefaults(defineProps<VueAccordionContentProps>(), {});
</script>