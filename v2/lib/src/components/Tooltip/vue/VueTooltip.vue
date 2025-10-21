<template>
  <ag-tooltip
    ref="tooltipRef"
    :content="content"
    :placement="placement"
    :distance="distance"
    :skidding="skidding"
    :trigger="trigger"
    :disabled="disabled || undefined"
    v-bind="$attrs"
  >
    <slot />
  </ag-tooltip>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import "../core/_Tooltip"; // Registers the ag-tooltip web component

// Define props interface
export interface VueTooltipProps {
  content?: string;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "left-start"
    | "left-end"
    | "right-start"
    | "right-end";
  distance?: number;
  skidding?: number;
  trigger?: string;
  disabled?: boolean;
}

// Define props with defaults
withDefaults(defineProps<VueTooltipProps>(), {
  content: "",
  placement: "top",
  distance: 8,
  skidding: 0,
  trigger: "hover focus",
  disabled: false,
});

// Define emits
const emit = defineEmits<{
  show: [];
  hide: [];
}>();

// Template ref
const tooltipRef = ref<
  HTMLElement & {
    show: () => void;
    hide: () => void;
    toggle: () => void;
  }
>();

// Event handlers
const handleShow = () => {
  emit("show");
};

const handleHide = () => {
  emit("hide");
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

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-tooltip");

  if (!tooltipRef.value) return;

  tooltipRef.value.addEventListener("show", handleShow);
  tooltipRef.value.addEventListener("hide", handleHide);
});

onUnmounted(() => {
  if (!tooltipRef.value) return;

  tooltipRef.value.removeEventListener("show", handleShow);
  tooltipRef.value.removeEventListener("hide", handleHide);
});
</script>
