<template>
  <ag-menu-button
    ref="menuButtonRef"
    :disabled="disabled || undefined"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <slot />
    <ag-menu
      ref="menuRef"
      slot="menu"
      v-bind="open === true ? { open: true } : {}"
      :placement="placement"
      :aria-label="menuAriaLabel"
      :aria-labelledby="menuAriaLabelledBy"
    >
      <slot name="menu" />
    </ag-menu>
  </ag-menu-button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import "../core/Menu"; // Registers the ag-menu web component

// Define props interface
export interface VueMenuProps {
  disabled?: boolean;
  ariaLabel?: string;
  open?: boolean;
  placement?: string;
  menuAriaLabel?: string;
  menuAriaLabelledBy?: string;
}

// Define props with defaults
const props = withDefaults(defineProps<VueMenuProps>(), {
  disabled: false,
  placement: "bottom-start",
});

// Define emits
const emit = defineEmits<{
  "menu-open": [];
  "menu-close": [];
  "menu-select": [detail: { value: string }];
}>();

// Template refs
const menuButtonRef = ref<HTMLElement>();
const menuRef = ref<HTMLElement>();

// Event handlers
const handleMenuOpen = (event: Event) => {
  emit("menu-open");
};

const handleMenuClose = (event: Event) => {
  emit("menu-close");
};

const handleMenuSelect = (event: Event) => {
  const detail = (event as CustomEvent).detail;
  emit("menu-select", detail);
};

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await Promise.all([
    customElements.whenDefined("ag-menu-button"),
    customElements.whenDefined("ag-menu"),
    customElements.whenDefined("ag-menu-item"),
    customElements.whenDefined("ag-menu-separator"),
  ]);

  if (menuButtonRef.value) {
    menuButtonRef.value.addEventListener("menu-open", handleMenuOpen);
    menuButtonRef.value.addEventListener("menu-close", handleMenuClose);
  }

  if (menuRef.value) {
    menuRef.value.addEventListener("menu-select", handleMenuSelect);
  }
});

onUnmounted(() => {
  if (menuButtonRef.value) {
    menuButtonRef.value.removeEventListener("menu-open", handleMenuOpen);
    menuButtonRef.value.removeEventListener("menu-close", handleMenuClose);
  }

  if (menuRef.value) {
    menuRef.value.removeEventListener("menu-select", handleMenuSelect);
  }
});
</script>
