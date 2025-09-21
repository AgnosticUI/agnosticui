<template>
  <ag-input
    ref="inputRef"
    :label="label"
    :aria-label="ariaLabel"
    :labelled-by="labelledBy"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    :rows="rows"
    :cols="cols"
    :size="size"
    :error-message="errorMessage"
    :help-text="helpText"
    :label-hidden="labelHidden || undefined"
    :no-label="noLabel || undefined"
    :is-rounded="isRounded || undefined"
    :is-underlined="isUnderlined || undefined"
    :is-underlined-with-background="isUnderlinedWithBackground || undefined"
    :is-inline="isInline || undefined"
    :has-left-addon="hasLeftAddon || undefined"
    :has-right-addon="hasRightAddon || undefined"
    :required="required || undefined"
    :disabled="disabled || undefined"
    :readonly="readonly || undefined"
    :invalid="invalid || undefined"
    v-bind="$attrs"
  >
    <slot />
  </ag-input>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import '../core/_Input';

// Define props interface
export interface VueInputProps {
  label?: string;
  labelHidden?: boolean;
  noLabel?: boolean;
  ariaLabel?: string;
  labelledBy?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  size?: 'small' | 'default' | 'large';
  isRounded?: boolean;
  isUnderlined?: boolean;
  isUnderlinedWithBackground?: boolean;
  isInline?: boolean;
  hasLeftAddon?: boolean;
  hasRightAddon?: boolean;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
}

// Define props with defaults
withDefaults(defineProps<VueInputProps>(), {
  label: '',
  labelHidden: false,
  noLabel: false,
  ariaLabel: '',
  labelledBy: '',
  type: 'text',
  value: '',
  placeholder: '',
  rows: 4,
  cols: 50,
  size: 'default',
  isRounded: false,
  isUnderlined: false,
  isUnderlinedWithBackground: false,
  isInline: false,
  hasLeftAddon: false,
  hasRightAddon: false,
  required: false,
  disabled: false,
  readonly: false,
  invalid: false,
  errorMessage: '',
  helpText: '',
});

// Define emits
const emit = defineEmits<{
  change: [event: Event];
  input: [event: Event];
  focus: [event: Event];
  blur: [event: Event];
}>();

// Template ref
const inputRef = ref<HTMLElement>();

// Event handlers
const handleChange = (event: Event) => {
  emit('change', event);
};

const handleInput = (event: Event) => {
  emit('input', event);
};

const handleFocus = (event: Event) => {
  emit('focus', event);
};

const handleBlur = (event: Event) => {
  emit('blur', event);
};

// Expose methods for parent components if needed
const focus = () => {
  const inputElement = inputRef.value?.shadowRoot?.querySelector('input, textarea') as HTMLInputElement | HTMLTextAreaElement;
  inputElement?.focus();
};

const blur = () => {
  const inputElement = inputRef.value?.shadowRoot?.querySelector('input, textarea') as HTMLInputElement | HTMLTextAreaElement;
  inputElement?.blur();
};

const select = () => {
  const inputElement = inputRef.value?.shadowRoot?.querySelector('input, textarea') as HTMLInputElement | HTMLTextAreaElement;
  inputElement?.select();
};

// Expose methods for parent components
defineExpose({
  focus,
  blur,
  select
});

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined('ag-input');

  if (!inputRef.value) return;

  inputRef.value.addEventListener('change', handleChange);
  inputRef.value.addEventListener('input', handleInput);
  inputRef.value.addEventListener('focus', handleFocus);
  inputRef.value.addEventListener('blur', handleBlur);
});

onUnmounted(() => {
  if (!inputRef.value) return;

  inputRef.value.removeEventListener('change', handleChange);
  inputRef.value.removeEventListener('input', handleInput);
  inputRef.value.removeEventListener('focus', handleFocus);
  inputRef.value.removeEventListener('blur', handleBlur);
});
</script>