<template>
  <ag-menu-item
    ref="menuItemRef"
    :value="value"
    :disabled="disabled || undefined"
    :href="href"
    :target="target"
    :variant="variant"
    :checked="checked || selected"
    @click="handleClick"
    @menu-select="handleMenuSelect"
    v-bind="$attrs"
  >
    <slot />
  </ag-menu-item>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { MenuItemProps, MenuSelectEventDetail } from "../core/Menu";
import "../core/Menu";

// Omit callback props (Vue uses emits instead)
export interface VueMenuItemProps
  extends Omit<MenuItemProps, "onClick" | "onMenuSelect"> {
  selected?: boolean; // Add support for 'selected' as an alias for 'checked'
}

// Define props with defaults
withDefaults(defineProps<VueMenuItemProps>(), {
  value: "",
  disabled: false,
  variant: "default", // Add default for variant
  checked: false, // Add default for checked
  selected: false, // Add default for selected
});

// Define emits for all events (native + custom)
const emit = defineEmits<{
  click: [event: MouseEvent];
  "menu-select": [detail: MenuSelectEventDetail];
}>();

// Template ref
const menuItemRef = ref<HTMLElement>();

// Bridge handlers
const handleClick = (event: MouseEvent) => {
  emit("click", event);
};

const handleMenuSelect = (event: Event) => {
  const menuSelectEvent = event as CustomEvent<MenuSelectEventDetail>;
  emit("menu-select", menuSelectEvent.detail);
};
</script>
