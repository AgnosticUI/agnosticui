<template>
  <ag-tabs
    ref="tabsRef"
    :activation="activation"
    :activeTab="activeTab"
    :orientation="orientation"
    :ariaLabel="ariaLabel"
    @tab-change="handleTabChange"
    v-bind="$attrs"
  >
    <slot />
  </ag-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "../core/Tabs"; // Registers the ag-tabs web component
import type { TabChangeEventDetail } from "../core/Tabs";
import type { VueTabsProps } from "./index";

// Re-export event types
export type { TabChangeEvent, TabChangeEventDetail } from "../core/Tabs";

// Define props with defaults
const props = withDefaults(defineProps<VueTabsProps>(), {
  activation: "manual",
  activeTab: 0,
  orientation: "horizontal",
});

// Define emits
const emit = defineEmits<{
  // Custom event - emit detail payload
  "tab-change": [detail: TabChangeEventDetail];
  // v-model support
  "update:activeTab": [value: number];
}>();

// Template ref
const tabsRef = ref<HTMLElement>();

// Event handler - emit detail payload for custom event
const handleTabChange = (event: Event) => {
  const detail = (event as CustomEvent<TabChangeEventDetail>).detail;
  emit("tab-change", detail);
  // Also emit for v-model support
  emit("update:activeTab", detail.activeTab);
};
</script>
