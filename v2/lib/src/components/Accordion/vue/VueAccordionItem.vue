<template>
  <ag-accordion-item
    ref="accordionItemRef"
    :heading-level="headingLevel"
    :open="open || undefined"
    :disabled="disabled || undefined"
    :use-chevron="useChevron || undefined"
    :use-x="useX || undefined"
    :use-minus="useMinus || undefined"
    :no-indicator="noIndicator || undefined"
    :background="background || undefined"
    :bordered="bordered || undefined"
    v-bind="$attrs"
  >
    <slot />
  </ag-accordion-item>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import "../core/Accordion";

// Re-export event types
export type { AccordionItemToggleEvent, AccordionItemToggleEventDetail } from '../core/Accordion';

// VueAccordionItem component
export interface VueAccordionItemProps {
  open?: boolean;
  headingLevel?: number;
  disabled?: boolean;
  background?: boolean;
  bordered?: boolean;
  // Indicator variants (mutually exclusive, priority: noIndicator > useX > useMinus > useChevron)
  useChevron?: boolean;
  useX?: boolean;
  useMinus?: boolean;
  noIndicator?: boolean;
}

// Define props with defaults
const props = withDefaults(defineProps<VueAccordionItemProps>(), {
  open: false,
  headingLevel: 3,
  disabled: false,
  background: false,
  bordered: false,
  useChevron: true,
  useX: false,
  useMinus: false,
  noIndicator: false,
});

// Define emits
const emit = defineEmits<{
  // Custom event - emit detail payload
  toggle: [detail: { open: boolean }];
  // v-model support
  'update:open': [value: boolean];
}>();

// Template ref
const accordionItemRef = ref<HTMLElement>();

// Event handlers - emit detail payload for custom event
const handleToggle = (event: Event) => {
  const detail = (event as CustomEvent).detail;
  emit("toggle", detail);
  // Also emit for v-model support
  emit("update:open", detail.open);
};

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-accordion-item");

  if (!accordionItemRef.value) return;

  accordionItemRef.value.addEventListener("toggle", handleToggle);
});

onUnmounted(() => {
  if (!accordionItemRef.value) return;

  accordionItemRef.value.removeEventListener("toggle", handleToggle);
});
</script>
