<template>
  <ag-menu-button
    ref="menuButtonRef"
    :disabled="disabled || undefined"
    :ariaLabel="ariaLabel"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown="handleKeyDown"
    @menu-open="handleMenuOpen"
    @menu-close="handleMenuClose"
    v-bind="$attrs"
  >
    <slot />
    <ag-menu
      ref="menuRef"
      slot="menu"
      v-bind="open === true ? { open: true } : {}"
      :placement="placement"
      :ariaLabel="menuAriaLabel"
      :ariaLabelledBy="menuAriaLabelledBy"
      @keydown="handleMenuKeyDown"
    >
      <slot name="menu" />
    </ag-menu>
  </ag-menu-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  MenuButtonProps,
  MenuOpenEventDetail,
  MenuCloseEventDetail,
} from "../core/Menu";
import "../core/Menu"; // Registers the ag-menu web component

// Omit callback props (Vue uses emits instead)
export interface VueMenuProps
  extends Omit<MenuButtonProps, "onClick" | "onFocus" | "onBlur" | "onKeyDown" | "onMenuOpen" | "onMenuClose"> {
  open?: boolean;
  placement?: string;
  menuAriaLabel?: string;
  menuAriaLabelledBy?: string;
}

// Define props with defaults
withDefaults(defineProps<VueMenuProps>(), {
  disabled: false,
  placement: "bottom-start",
});

// Define emits for all events (native + custom)
const emit = defineEmits<{
  click: [event: MouseEvent];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  keydown: [event: KeyboardEvent];
  "menu-keydown": [event: KeyboardEvent];
  "menu-open": [detail: MenuOpenEventDetail];
  "menu-close": [detail: MenuCloseEventDetail];
  "update:open": [open: boolean];
}>();

// Template refs
const menuButtonRef = ref<HTMLElement>();
const menuRef = ref<HTMLElement>();

// Bridge handlers for native events
const handleClick = (event: MouseEvent) => {
  emit("click", event);
};

const handleFocus = (event: FocusEvent) => {
  emit("focus", event);
};

const handleBlur = (event: FocusEvent) => {
  emit("blur", event);
};

const handleKeyDown = (event: KeyboardEvent) => {
  emit("keydown", event);
};

const handleMenuKeyDown = (event: KeyboardEvent) => {
  emit("menu-keydown", event);
};

// Bridge handlers for custom events
const handleMenuOpen = (event: Event) => {
  const menuOpenEvent = event as CustomEvent<MenuOpenEventDetail>;
  emit("menu-open", menuOpenEvent.detail);
  emit("update:open", menuOpenEvent.detail.open);
};

const handleMenuClose = (event: Event) => {
  const menuCloseEvent = event as CustomEvent<MenuCloseEventDetail>;
  emit("menu-close", menuCloseEvent.detail);
  emit("update:open", menuCloseEvent.detail.open);
};
</script>
