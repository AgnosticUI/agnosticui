<template>
  <ag-breadcrumb
    ref="breadcrumbRef"
    :type="type"
    :primary="primary || undefined"
    :ariaLabel="ariaLabel"
    @breadcrumb-click="handleBreadcrumbClick"
    v-bind="$attrs"
  ></ag-breadcrumb>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import "../core/Breadcrumb"; // Registers the ag-breadcrumb web component
import type {
  BreadcrumbItem,
  BreadcrumbProps,
  BreadcrumbClickEventDetail
} from "../core/Breadcrumb";

// Omit callback props (Vue uses emits instead)
export interface VueBreadcrumbProps extends Omit<BreadcrumbProps, "onBreadcrumbClick"> {}

// Define props with defaults
const props = withDefaults(defineProps<VueBreadcrumbProps>(), {
  type: "default",
  ariaLabel: "Breadcrumb",
  primary: false,
});

// Define emits
const emit = defineEmits<{
  "breadcrumb-click": [detail: BreadcrumbClickEventDetail];
}>();

// Template ref
const breadcrumbRef = ref<HTMLElement>();

// Bridge handler for custom event
const handleBreadcrumbClick = (event: Event) => {
  const clickEvent = event as CustomEvent<BreadcrumbClickEventDetail>;
  emit("breadcrumb-click", clickEvent.detail);
};

// Update items when they change
const updateItems = () => {
  if (breadcrumbRef.value) {
    (breadcrumbRef.value as any).items = props.items;
  }
};

// Watch for items changes
watch(() => props.items, updateItems, { deep: true });

// Setup
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-breadcrumb");

  if (!breadcrumbRef.value) return;

  // Set initial items
  updateItems();
});
</script>
