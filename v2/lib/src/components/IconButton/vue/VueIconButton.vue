<template>
  <ag-icon-button
    ref="iconButtonRef"
    :label="ariaLabel || label"
    :icon="icon"
    :unicode="unicode"
    :size="size"
    :variant="variant"
    :type="type"
    :disabled="disabled || undefined"
    :pressed="pressed || undefined"
    :loading="loading || undefined"
    :ariaDescribedby="ariaDescribedby"
    v-bind="$attrs"
  >
    <slot />
  </ag-icon-button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import "../core/IconButton"; // Registers the ag-icon-button web component

// Define props interface
export interface VueIconButtonProps {
  /** Required accessible name for the button */
  label: string;

  /** Icon identifier or name (for icon systems) */
  icon?: string;

  /** Unicode symbol for simple icons (×, ☰, etc.) */
  unicode?: string;

  /** Button size variant */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /** Visual variant */
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "ghost";

  /** Button type */
  type?: "button" | "submit" | "reset";

  /** Disabled state */
  disabled?: boolean;

  /** Pressed state for toggle buttons */
  pressed?: boolean;

  /** Loading state */
  loading?: boolean;

  /** Additional ARIA label (will override label prop) */
  ariaLabel?: string;

  /** ARIA described by reference */
  ariaDescribedby?: string;
}

// Define props with defaults
const props = withDefaults(defineProps<VueIconButtonProps>(), {
  size: "md",
  variant: "ghost",
  type: "button",
  disabled: false,
  pressed: false,
  loading: false,
});

// Define emits
const emit = defineEmits<{
  click: [event: Event];
  activate: [
    detail: { label: string; pressed: boolean; originalEvent: KeyboardEvent }
  ];
}>();

// Template ref
const iconButtonRef = ref<HTMLElement>();

// Event handlers
const handleClick = (event: Event) => {
  console.log("VueIconButton click:", {
    label: props.ariaLabel || props.label,
    pressed: props.pressed,
    timestamp: new Date().toISOString(),
    event: event.type,
  });
  emit("click", event);
};

const handleActivate = (event: Event) => {
  const customEvent = event as CustomEvent;
  console.log("VueIconButton keyboard activate:", {
    label: props.ariaLabel || props.label,
    key: customEvent.detail.originalEvent?.key,
    timestamp: new Date().toISOString(),
    detail: customEvent.detail,
  });
  emit("activate", customEvent.detail);
};

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-icon-button");

  if (!iconButtonRef.value) return;

  iconButtonRef.value.addEventListener("icon-button-click", handleClick);
  iconButtonRef.value.addEventListener("icon-button-activate", handleActivate);
});

onUnmounted(() => {
  if (!iconButtonRef.value) return;

  iconButtonRef.value.removeEventListener("icon-button-click", handleClick);
  iconButtonRef.value.removeEventListener(
    "icon-button-activate",
    handleActivate
  );
});
</script>
