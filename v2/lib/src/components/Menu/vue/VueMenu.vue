<template>
  <ag-menu-button
    ref="menuButtonRef"
    .disabled="disabled"
    .loading="loading"
    .bordered="bordered"
    .ghost="ghost"
    .link="link"
    .grouped="grouped"
    :menu-variant="menuVariant"
    :menu-align="menuAlign"
    :button-variant="buttonVariant"
    :size="size"
    :shape="shape"
    :ariaLabel="ariaLabel"
    :ariaDescribedby="ariaDescribedby"
    :unicode="unicode"
    :additional-gutter="additionalGutter"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown="handleKeyDown"
    @menu-open="handleMenuOpen"
    @menu-close="handleMenuClose"
    @menu-select="handleMenuSelect"
    v-bind="$attrs"
  >
    <slot />
    <ag-menu
      ref="menuRef"
      slot="menu"
      .open="open"
      .checkHiddenItems="checkHiddenItems"
      :placement="placement"
      :type="menuType"
      :selected-value="selectedValue"
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
  MenuSelectEventDetail,
} from "../core/Menu";
import "../core/Menu";

export interface VueMenuProps
  extends Omit<
    MenuButtonProps,
    | "onClick"
    | "onFocus"
    | "onBlur"
    | "onKeyDown"
    | "onMenuOpen"
    | "onMenuClose"
  > {
  open?: boolean;
  placement?: string;
  menuAriaLabel?: string;
  menuAriaLabelledBy?: string;
  menuAlign?: "left" | "right";
  menuType?: "default" | "single-select";
  selectedValue?: string;
  checkHiddenItems?: boolean;
}

const props = withDefaults(defineProps<VueMenuProps>(), {
  disabled: false,
  placement: "bottom-start",
  menuAlign: "left",
  menuType: "default",
  checkHiddenItems: false,
  open: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  keydown: [event: KeyboardEvent];
  "menu-keydown": [event: KeyboardEvent];
  "menu-open": [detail: MenuOpenEventDetail];
  "menu-close": [detail: MenuCloseEventDetail];
  "menu-select": [detail: MenuSelectEventDetail];
  "update:open": [open: boolean];
}>();

const menuButtonRef = ref<HTMLElement>();
const menuRef = ref<HTMLElement>();

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

const handleMenuSelect = (event: Event) => {
  const menuSelectEvent = event as CustomEvent<MenuSelectEventDetail>;
  emit("menu-select", menuSelectEvent.detail);
};
</script>
