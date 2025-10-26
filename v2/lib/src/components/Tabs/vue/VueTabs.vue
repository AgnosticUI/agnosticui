<template>
  <ag-tabs
    ref="tabsRef"
    :activation="activation"
    :active-tab="activeTab"
    :orientation="orientation"
    :aria-label="ariaLabel"
    :aria-labelledby="ariaLabelledBy"
    v-bind="$attrs"
  >
    <slot />
  </ag-tabs>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import "../core/Tabs"; // Registers the ag-tabs web component
import { type TabsProps } from "../core/Tabs";
/*export interface TabsProps {
  activation?: TabsActivation;
  activeTab?: number;
  orientation?: TabsOrientation;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  onTabChange?: (event: TabChangeEvent) => void;
}*/

// Define props interface
export interface VueTabsProps extends TabsProps {}
// export interface VueTabsProps {
//   activation?: 'manual' | 'automatic';
//   activeTab?: number;
//   orientation?: 'horizontal' | 'vertical';
//   ariaLabel?: string;
//   ariaLabelledBy?: string;
// }

// Define props with defaults
const props = withDefaults(defineProps<VueTabsProps>(), {
  activation: "manual",
  activeTab: 0,
  orientation: "horizontal",
});

// Define emits
const emit = defineEmits<{
  "tab-change": [detail: { activeTab: number; previousTab: number }];
}>();

// Template ref
const tabsRef = ref<HTMLElement>();

// Event handlers
const handleTabChange = (event: Event) => {
  const detail = (event as CustomEvent).detail;
  emit("tab-change", detail);
};

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await Promise.all([
    customElements.whenDefined("ag-tabs"),
    customElements.whenDefined("ag-tab"),
    customElements.whenDefined("ag-tab-panel"),
  ]);

  if (!tabsRef.value) return;

  const tabsEl = tabsRef.value as any;

  // Explicitly set properties to ensure they're properly handled
  if (props.activation !== undefined) {
    tabsEl.activation = props.activation;
  }
  if (props.activeTab !== undefined) {
    tabsEl.activeTab = props.activeTab;
  }
  if (props.orientation !== undefined) {
    tabsEl.orientation = props.orientation;
  }
  if (props.ariaLabel !== undefined) {
    tabsEl.ariaLabel = props.ariaLabel;
  }
  if (props.ariaLabelledBy !== undefined) {
    tabsEl.ariaLabelledBy = props.ariaLabelledBy;
  }

  tabsRef.value.addEventListener("tab-change", handleTabChange);
});

onUnmounted(() => {
  if (!tabsRef.value) return;

  tabsRef.value.removeEventListener("tab-change", handleTabChange);
});

// Watch for prop changes and update web component properties
watch(
  [
    () => props.activation,
    () => props.activeTab,
    () => props.orientation,
    () => props.ariaLabel,
    () => props.ariaLabelledBy,
  ],
  () => {
    if (!tabsRef.value) return;

    const tabsEl = tabsRef.value as any;

    // Update properties when props change
    if (props.activation !== undefined) {
      tabsEl.activation = props.activation;
    }
    if (props.activeTab !== undefined) {
      tabsEl.activeTab = props.activeTab;
    }
    if (props.orientation !== undefined) {
      tabsEl.orientation = props.orientation;
    }
    if (props.ariaLabel !== undefined) {
      tabsEl.ariaLabel = props.ariaLabel;
    }
    if (props.ariaLabelledBy !== undefined) {
      tabsEl.ariaLabelledBy = props.ariaLabelledBy;
    }
  }
);
</script>
