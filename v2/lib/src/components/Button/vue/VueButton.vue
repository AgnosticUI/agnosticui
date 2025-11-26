<template>
  <ag-button
    ref="buttonRef"
    .disabled="disabled"
    .loading="loading"
    .toggle="toggle"
    .pressed="pressed"
    .bordered="bordered"
    .ghost="ghost"
    .link="link"
    .grouped="grouped"
    .ariaLabel="ariaLabel"
    :type="type"
    :variant="variant"
    :size="size"
    :shape="shape"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
    @toggle="handleToggle"
    v-bind="$attrs"
  >
    <slot />
  </ag-button>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type {
  ButtonProps,
  ButtonToggleEvent,
  ButtonToggleEventDetail,
} from "../core/Button";
import "../core/Button"; // Registers the ag-button web component

// Define props interface (omit function props since wrapper uses emits)
export interface VueButtonProps
  extends Omit<ButtonProps, "onClick" | "onFocus" | "onBlur" | "onToggle"> {}

// Define props with defaults
const props = withDefaults(defineProps<VueButtonProps>(), {
  type: "button",
  disabled: false,
  loading: false,
  toggle: false,
  pressed: false,
  variant: "",
  size: "md",
  shape: "",
  bordered: false,
  ghost: false,
  link: false,
  grouped: false,
  ariaLabel: "",
});

// Define emits
const emit = defineEmits<{
  click: [event: MouseEvent];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  toggle: [detail: ButtonToggleEventDetail];
  "update:pressed": [pressed: boolean];
}>();

// Template ref
const buttonRef = ref<HTMLElement>();

// Event handlers
const handleClick = (event: MouseEvent) => {
  emit("click", event);
};

const handleFocus = (event: FocusEvent) => {
  emit("focus", event);
};

const handleBlur = (event: FocusEvent) => {
  emit("blur", event);
};

const handleToggle = (event: Event) => {
  const toggleEvent = event as ButtonToggleEvent;
  emit("toggle", toggleEvent.detail);
  emit("update:pressed", toggleEvent.detail.pressed);
};

// Watch for pressed prop changes and sync with web component
// This ensures two-way binding works correctly
watch(
  () => props.pressed,
  (newPressed) => {
    if (buttonRef.value && props.toggle) {
      (buttonRef.value as any).pressed = newPressed;
    }
  }
);
</script>
