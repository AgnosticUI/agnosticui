<template>
  <ag-breadcrumb
    ref="breadcrumbRef"
    :type="type"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  ></ag-breadcrumb>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import "../core/_Breadcrumb"; // Registers the ag-breadcrumb web component
import type { BreadcrumbItem } from "../core/_Breadcrumb";

// Define props interface
export interface VueBreadcrumbProps {
  items: BreadcrumbItem[];
  type?: "default" | "slash" | "bullet" | "arrow";
  ariaLabel?: string;
}

// Define props with defaults
const props = withDefaults(defineProps<VueBreadcrumbProps>(), {
  type: "default",
  ariaLabel: "Breadcrumb",
});

// Define emits
const emit = defineEmits<{
  "breadcrumb-click": [
    detail: { item: BreadcrumbItem; index: number; event: MouseEvent }
  ];
}>();

// Template ref
const breadcrumbRef = ref<HTMLElement>();

// Event handlers
const handleBreadcrumbClick = (event: Event) => {
  const detail = (event as CustomEvent).detail;
  emit("breadcrumb-click", detail);
};

// Update items when they change
const updateItems = () => {
  if (breadcrumbRef.value) {
    (breadcrumbRef.value as any).items = props.items;
  }
};

// Watch for items changes
watch(() => props.items, updateItems, { deep: true });

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-breadcrumb");

  if (!breadcrumbRef.value) return;

  // Set initial items
  updateItems();

  breadcrumbRef.value.addEventListener(
    "breadcrumb-click",
    handleBreadcrumbClick
  );
});

onUnmounted(() => {
  if (!breadcrumbRef.value) return;

  breadcrumbRef.value.removeEventListener(
    "breadcrumb-click",
    handleBreadcrumbClick
  );
});
</script>
