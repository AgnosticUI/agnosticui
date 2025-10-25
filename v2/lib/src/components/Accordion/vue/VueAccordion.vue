<template>
  <ag-accordion
    ref="accordionRef"
    v-bind="$attrs"
  >
    <slot />
  </ag-accordion>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import "../core/Accordion";

// VueAccordion is the group container component
export interface VueAccordionProps {
  // No specific props for the group container
}

// Define props with defaults (empty for the group)
const props = withDefaults(defineProps<VueAccordionProps>(), {});

// Define emits for accordion group events (if needed)
const emit = defineEmits<{
  // Group-level events can be added here if needed
}>();

// Template ref
const accordionRef = ref<HTMLElement>();

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-accordion");

  if (!accordionRef.value) return;

  // Group-level event handling can be added here if needed
});

onUnmounted(() => {
  // Cleanup if needed
});
</script>
