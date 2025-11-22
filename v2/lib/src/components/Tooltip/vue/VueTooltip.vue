<template>
  <ag-tooltip
    ref="tooltipRef"
    :content="content"
    :placement="placement"
    :distance="distance"
    :skidding="skidding"
    :trigger="trigger"
    .disabled="disabled"
    @show="handleShow"
    @hide="handleHide"
    v-bind="$attrs"
  >
    <slot />
  </ag-tooltip>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  TooltipProps,
  TooltipShowEventDetail,
  TooltipHideEventDetail,
} from "../core/Tooltip";
import "../core/Tooltip"; // Registers the ag-tooltip web component

// Omit callback props (Vue uses emits instead)
export interface VueTooltipProps
  extends Omit<TooltipProps, "onShow" | "onHide"> {}

// Define props with defaults
withDefaults(defineProps<VueTooltipProps>(), {
  content: "",
  placement: "top",
  distance: 8,
  skidding: 0,
  trigger: "hover focus",
  disabled: false,
});

// Define emits for all events
const emit = defineEmits<{
  show: [detail: TooltipShowEventDetail];
  hide: [detail: TooltipHideEventDetail];
}>();

// Template ref
const tooltipRef = ref<
  HTMLElement & {
    show: () => void;
    hide: () => void;
    toggle: () => void;
  }
>();

// Bridge handlers for custom events
const handleShow = (event: Event) => {
  const showEvent = event as CustomEvent<TooltipShowEventDetail>;
  emit("show", showEvent.detail);
};

const handleHide = (event: Event) => {
  const hideEvent = event as CustomEvent<TooltipHideEventDetail>;
  emit("hide", hideEvent.detail);
};

// Expose imperative methods
const show = () => {
  tooltipRef.value?.show();
};

const hide = () => {
  tooltipRef.value?.hide();
};

const toggle = () => {
  tooltipRef.value?.toggle();
};

// Expose methods for parent components
defineExpose({
  show,
  hide,
  toggle,
});
</script>
