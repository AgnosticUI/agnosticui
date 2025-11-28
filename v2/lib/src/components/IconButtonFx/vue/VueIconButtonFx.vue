<template>
  <ag-icon-button-fx
    ref="iconButtonFxRef"
    .disabled="disabled"
    .pressed="pressed"
    .loading="loading"
    .label="label"
    .icon="icon"
    .unicode="unicode"
    .fx="fx"
    .fxDisabled="fxDisabled"
    :type="type"
    :variant="variant"
    :size="size"
    :fx-speed="fxSpeed"
    :fx-ease="fxEase"
    @click="handleClick"
    @icon-button-click="handleIconButtonClick"
    @icon-button-activate="handleIconButtonActivate"
    v-bind="$attrs"
  >
    <slot />
  </ag-icon-button-fx>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IconButtonFxProps } from "../core/_IconButtonFx";
import type {
  IconButtonClickEvent,
  IconButtonActivateEvent,
  IconButtonClickEventDetail,
  IconButtonActivateEventDetail,
} from "../../IconButton/core/_IconButton";
import "../core/IconButtonFx"; // Registers the ag-icon-button-fx web component

// Define props interface (omit function props since wrapper uses emits)
export interface VueIconButtonFxProps
  extends Omit<
    IconButtonFxProps,
    "onIconButtonClick" | "onIconButtonActivate"
  > {}

// Define props with defaults
const props = withDefaults(defineProps<VueIconButtonFxProps>(), {
  label: "",
  icon: "",
  unicode: "",
  size: "md",
  variant: "ghost",
  type: "button",
  disabled: false,
  pressed: false,
  loading: false,
  fxSpeed: "md",
  fxEase: "ease",
  fxDisabled: false,
});

// Define emits
const emit = defineEmits<{
  click: [event: MouseEvent];
  "icon-button-click": [detail: IconButtonClickEventDetail];
  "icon-button-activate": [detail: IconButtonActivateEventDetail];
}>();

// Template ref
const iconButtonFxRef = ref<HTMLElement>();

// Event handlers
const handleClick = (event: MouseEvent) => {
  emit("click", event);
};

const handleIconButtonClick = (event: Event) => {
  const customEvent = event as IconButtonClickEvent;
  emit("icon-button-click", customEvent.detail);
};

const handleIconButtonActivate = (event: Event) => {
  const customEvent = event as IconButtonActivateEvent;
  emit("icon-button-activate", customEvent.detail);
};
</script>
