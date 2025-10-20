<template>
  <ag-checkbox
    ref="checkboxRef"
    :name="name"
    :value="value"
    :checked="checked || undefined"
    :indeterminate="indeterminate || undefined"
    :disabled="disabled || undefined"
    :size="size"
    :theme="theme"
    :label-text="labelText"
    :label-position="labelPosition"
    v-bind="$attrs"
  >
    <slot />
  </ag-checkbox>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { CheckboxSize, CheckboxTheme } from '../core/_Checkbox';
import '../core/_Checkbox';

// Define props interface
export interface VueCheckboxProps {
  name?: string;
  value?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  size?: CheckboxSize;
  theme?: CheckboxTheme;
  labelText?: string;
  labelPosition?: 'end' | 'start';
}

// Define props with defaults
withDefaults(defineProps<VueCheckboxProps>(), {
  name: '',
  value: '',
  checked: false,
  indeterminate: false,
  disabled: false,
  size: 'medium',
  theme: 'default',
  labelText: '',
  labelPosition: 'end',
});

// Define emits
const emit = defineEmits<{
  change: [
    detail: {
      checked: boolean;
      value: string;
      name: string;
      indeterminate: boolean;
    }
  ];
}>();

// Template ref
const checkboxRef = ref<HTMLElement>();

// Event handlers
const handleChange = (event: Event) => {
  const detail = (event as CustomEvent).detail;
  emit('change', detail);
};

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined('ag-checkbox');

  if (!checkboxRef.value) return;

  checkboxRef.value.addEventListener('ag-change', handleChange);
});

onUnmounted(() => {
  if (!checkboxRef.value) return;

  checkboxRef.value.removeEventListener('ag-change', handleChange);
});
</script>
