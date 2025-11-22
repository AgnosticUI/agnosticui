<template>
  <ag-icon-button
    ref="iconButtonRef"
    .disabled="disabled"
    .pressed="pressed"
    .loading="loading"
    :label="ariaLabel || label"
    :icon="icon"
    :unicode="unicode"
    :size="size"
    :variant="variant"
    :type="type"
    :ariaDescribedby="ariaDescribedby"
    @icon-button-click="handleClick"
    @icon-button-activate="handleActivate"
    v-bind="$attrs"
  >
    <slot />
  </ag-icon-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  IconButtonProps,
  IconButtonClickEventDetail,
  IconButtonActivateEventDetail,
} from "../core/IconButton";
import "../core/IconButton"; // Registers the ag-icon-button web component

// Omit callback props (Vue uses emits instead)
export interface VueIconButtonProps
  extends Omit<IconButtonProps, "onIconButtonClick" | "onIconButtonActivate"> {
  /** Additional ARIA label (will override label prop) */
  ariaLabel?: string;
}

// Define props with defaults
withDefaults(defineProps<VueIconButtonProps>(), {
  size: "md",
  variant: "ghost",
  type: "button",
  disabled: false,
  pressed: false,
  loading: false,
});

// Define emits for all events
const emit = defineEmits<{
  "icon-button-click": [detail: IconButtonClickEventDetail];
  "icon-button-activate": [detail: IconButtonActivateEventDetail];
}>();

// Template ref
const iconButtonRef = ref<HTMLElement>();

// Bridge handlers for custom events
const handleClick = (event: Event) => {
  const clickEvent = event as CustomEvent<IconButtonClickEventDetail>;
  emit("icon-button-click", clickEvent.detail);
};

const handleActivate = (event: Event) => {
  const activateEvent = event as CustomEvent<IconButtonActivateEventDetail>;
  emit("icon-button-activate", activateEvent.detail);
};
</script>
