<template>
  <ag-button
    ref="buttonRef"
    :type="type"
    :aria-label="ariaLabel"
    :aria-describedby="ariaDescribedby"
    :disabled="disabled || undefined"
    :loading="loading || undefined"
    :toggle="toggle || undefined"
    :pressed="pressed || undefined"
    v-bind="$attrs"
  >
    <slot />
  </ag-button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import '../core/_Button';

// Define props interface
export interface VueButtonProps {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  toggle?: boolean;
  pressed?: boolean;
  ariaLabel?: string;
  ariaDescribedby?: string;
}

// Define props with defaults
const props = withDefaults(defineProps<VueButtonProps>(), {
  type: 'button',
  disabled: false,
  loading: false,
  toggle: false,
  pressed: false,
});

// Define emits
const emit = defineEmits<{
  click: [event: Event];
  toggle: [detail: { pressed: boolean }];
}>();

// Template ref
const buttonRef = ref<HTMLElement>();

// Event handlers
const handleClick = (event: Event) => {
  emit('click', event);
};

const handleToggle = (event: Event) => {
  const detail = (event as CustomEvent).detail;
  emit('toggle', detail);
};

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined('ag-button');

  if (!buttonRef.value) return;

  buttonRef.value.addEventListener('click', handleClick);
  if (props.toggle) {
    buttonRef.value.addEventListener('toggle', handleToggle);
  }
});

onUnmounted(() => {
  if (!buttonRef.value) return;

  buttonRef.value.removeEventListener('click', handleClick);
  if (props.toggle) {
    buttonRef.value.removeEventListener('toggle', handleToggle);
  }
});
</script>