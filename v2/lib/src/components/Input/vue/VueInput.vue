<script setup lang="ts">
import { ref, watch } from "vue";
import type { InputProps } from "../core/Input";
import "../core/Input"; // Registers the ag-input web component

/**
 * Vue Input Props
 * Following AgnosticUI v2 event conventions:
 * - Omit callback props (Vue uses emits)
 * - Support v-model:value via update:value emit
 */
export interface VueInputProps
  extends Omit<
    InputProps,
    "onClick" | "onInput" | "onChange" | "onFocus" | "onBlur"
  > {}

// Define props with defaults
const props = withDefaults(defineProps<VueInputProps>(), {
  value: "",
  label: "",
  labelHidden: false,
  noLabel: false,
  ariaLabel: "",
  labelledBy: "",
  type: "text",
  placeholder: "",
  rows: 4,
  cols: 50,
  size: "default",
  capsule: false,
  rounded: false,
  underlined: false,
  underlinedWithBackground: false,
  inline: false,
  required: false,
  disabled: false,
  readonly: false,
  invalid: false,
  errorMessage: "",
  helpText: "",
});

// Define emits - native events emit full event object
const emit = defineEmits<{
  click: [event: MouseEvent];
  input: [event: InputEvent];
  change: [event: Event];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  "update:value": [value: string];
}>();

// Template ref
const inputRef = ref<HTMLElement>();

// Event handlers - native events emit full event object
const handleClick = (event: MouseEvent) => {
  emit("click", event);
};

const handleInput = (event: Event) => {
  emit("input", event as InputEvent);
  // Update v-model
  const target = event.target as HTMLInputElement;
  emit("update:value", target.value);
};

const handleChange = (event: Event) => {
  emit("change", event);
};

const handleFocus = (event: FocusEvent) => {
  emit("focus", event);
};

const handleBlur = (event: FocusEvent) => {
  emit("blur", event);
};

// Keep web component and Vue value synced
watch(
  () => props.value,
  (newValue) => {
    if (inputRef.value && (inputRef.value as any).value !== newValue) {
      (inputRef.value as any).value = newValue;
    }
  }
);
</script>

<template>
  <ag-input
    ref="inputRef"
    :value="value || undefined"
    :type="type"
    :placeholder="placeholder || undefined"
    :label="label || undefined"
    :ariaLabel="ariaLabel || undefined"
    :labelledBy="labelledBy || undefined"
    :helpText="helpText || undefined"
    :errorMessage="errorMessage || undefined"
    :size="size !== 'default' ? size : undefined"
    :disabled="disabled || undefined"
    :readonly="readonly || undefined"
    :labelHidden="labelHidden || undefined"
    :noLabel="noLabel || undefined"
    :required="required || undefined"
    :invalid="invalid || undefined"
    :rounded="rounded || undefined"
    :underlined="underlined || undefined"
    :underlinedWithBackground="underlinedWithBackground || undefined"
    :inline="inline || undefined"
    :capsule="capsule || undefined"
    :rows="type === 'textarea' && rows !== 4 ? rows : undefined"
    :cols="type === 'textarea' && cols !== 50 ? cols : undefined"
    @click="handleClick"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    v-bind="$attrs"
  >
    <!-- Fix: The slot attribute goes on the content being passed through, not the slot element -->
    <template v-if="$slots['addon-left']">
      <span slot="addon-left">
        <slot name="addon-left"></slot>
      </span>
    </template>
    <template v-if="$slots['addon-right']">
      <span slot="addon-right">
        <slot name="addon-right"></slot>
      </span>
    </template>
  </ag-input>
</template>
