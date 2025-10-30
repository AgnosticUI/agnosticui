<template>
  <ag-accordion-item
    ref="accordionItemRef"
    :headingLevel="headingLevel"
    :open="open || undefined"
    :disabled="disabled || undefined"
    :useChevron="useChevron || undefined"
    :useX="useX || undefined"
    :useMinus="useMinus || undefined"
    :noIndicator="noIndicator || undefined"
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
  toggle: [detail: { open: boolean }];
}>();

// Template ref
const accordionItemRef = ref<HTMLElement>();

// Event handlers
const handleToggle = (event: Event) => {
  const detail = (event as CustomEvent).detail;
  emit("toggle", detail);
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
