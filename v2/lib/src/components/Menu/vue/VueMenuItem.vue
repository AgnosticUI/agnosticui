<template>
  <ag-menu-item
    ref="menuItemRef"
    :value="value"
    :disabled="disabled || undefined"
    :href="href"
    :target="target"
    v-bind="$attrs"
  >
    <slot />
  </ag-menu-item>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import '../core/_Menu';

// Define props interface
export interface VueMenuItemProps {
  value?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
}

// Define props with defaults
const props = withDefaults(defineProps<VueMenuItemProps>(), {
  value: '',
  disabled: false,
});

// Define emits
const emit = defineEmits<{
  'menu-select': [detail: { value: string }];
}>();

// Template ref
const menuItemRef = ref<HTMLElement>();

// Event handlers
const handleMenuSelect = (event: Event) => {
  const detail = (event as CustomEvent).detail;
  emit('menu-select', detail);
};

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined('ag-menu-item');

  if (!menuItemRef.value) return;

  menuItemRef.value.addEventListener('menu-select', handleMenuSelect);
});

onUnmounted(() => {
  if (!menuItemRef.value) return;

  menuItemRef.value.removeEventListener('menu-select', handleMenuSelect);
});
</script>