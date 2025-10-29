<template>
  <ag-collapsible
    ref="collapsibleRef"
    :open="open || undefined"
    :isBordered="isBordered || undefined"
    :isShadow="isShadow || undefined"
    :useChevron="useChevron || undefined"
    :useX="useX || undefined"
    :useMinus="useMinus || undefined"
    :noIndicator="noIndicator || undefined"
    :onToggle="internalOnToggle"
    v-bind="$attrs"
  >
    <span slot="summary">
      <slot name="summary"></slot>
    </span>
    <slot />
  </ag-collapsible>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import type {
  CollapsibleProps,
  CollapsibleToggleEvent,
} from "../core/Collapsible";
import "../core/Collapsible"; // Registers the ag-collapsible web component

// Define props interface (omit function props since wrapper uses emits)
export interface VueCollapsibleProps
  extends Omit<CollapsibleProps, "onToggle"> {}

// Define props with defaults
const props = withDefaults(defineProps<VueCollapsibleProps>(), {
  open: false,
  isBordered: false,
  isShadow: false,
  useChevron: true,
  useX: false,
  useMinus: false,
  noIndicator: false,
});

// Define emits
const emit = defineEmits<{
  toggle: [event: CollapsibleToggleEvent];
  "update:open": [open: boolean];
}>();

// Template ref
const collapsibleRef = ref<HTMLElement>();

// Internal handler for onToggle prop
const internalOnToggle = (event: CollapsibleToggleEvent) => {
  emit("toggle", event);
  emit("update:open", event.detail.open);
};

// No need for additional listeners since onToggle handles it
</script>
