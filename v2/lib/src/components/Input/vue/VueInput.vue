<template>
  <ag-input
    ref="inputRef"
    .value="value"
    .labelHidden="labelHidden"
    .noLabel="noLabel"
    .capsule="capsule"
    .rounded="rounded"
    .underlined="underlined"
    .underlinedWithBackground="underlinedWithBackground"
    .inline="inline"
    .required="required"
    .disabled="disabled"
    .readonly="readonly"
    .invalid="invalid"
    :type="type"
    :placeholder="placeholder"
    :label="label"
    :ariaLabel="ariaLabel"
    :helpText="helpText"
    :errorMessage="errorMessage"
    :size="size"
    :rows="rows"
    :cols="cols"
    @click="handleClick"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    v-bind="$attrs"
  >
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

<script setup lang="ts">
import { ref } from "vue";
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
</script>
