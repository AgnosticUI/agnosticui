<!-- v2/lib/src/components/Input/vue/VueInput.vue -->
<template>
  <ag-input
    ref="agComponent"
    :name.prop="name"
    :value.prop="value"
    :labelHidden.prop="labelHidden"
    :noLabel.prop="noLabel"
    :capsule.prop="capsule"
    :rounded.prop="rounded"
    :underlined.prop="underlined"
    :underlinedWithBackground.prop="underlinedWithBackground"
    :inline.prop="inline"
    :required.prop="required"
    :disabled.prop="disabled"
    :readonly.prop="readonly"
    :invalid.prop="invalid"
    :type.prop="type"
    :placeholder.prop="placeholder"
    :label.prop="label"
    :labelPosition.prop="labelPosition"
    :ariaLabel.prop="ariaLabel"
    :helpText.prop="helpText"
    :errorMessage.prop="errorMessage"
    :size.prop="size"
    :rows.prop="rows"
    :cols.prop="cols"
    :min.prop="min"
    :max.prop="max"
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
import "../core/Input.js"; // Registers the ag-input web component
import type { VueInputProps } from "./index.js";

// Define props with defaults leveraging our shared external contract
withDefaults(defineProps<VueInputProps>(), {
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
