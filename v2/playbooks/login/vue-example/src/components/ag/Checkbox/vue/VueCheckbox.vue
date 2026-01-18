<template>
  <ag-checkbox
    ref="checkboxRef"
    .checked="checked"
    .indeterminate="indeterminate"
    .disabled="disabled"
    .required="required"
    .invalid="invalid"
    :name="name"
    :value="value"
    :size="size"
    :theme="theme"
    :labelText="labelText"
    :labelPosition="labelPosition"
    :errorMessage="errorMessage"
    :helpText="helpText"
    @click="handleClick"
    @change="handleChange"
    v-bind="$attrs"
  >
    <slot />
  </ag-checkbox>
</template>

<script setup lang="ts">
import type {
  CheckboxProps,
  CheckboxChangeEvent,
  CheckboxChangeEventDetail,
} from "../core/Checkbox";
import "../core/Checkbox"; // Registers the ag-checkbox web component

// Define props interface (omit function props since wrapper uses emits)
export interface VueCheckboxProps
  extends Omit<CheckboxProps, "onClick" | "onChange"> {}

// Define props with defaults
withDefaults(defineProps<VueCheckboxProps>(), {
  name: "",
  value: "",
  checked: false,
  indeterminate: false,
  disabled: false,
  size: "medium",
  theme: "default",
  labelText: "",
  labelPosition: "end",
  required: false,
  invalid: false,
  errorMessage: "",
  helpText: "",
});

// Define emits for all events (native + custom)
const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
  (e: "change", detail: CheckboxChangeEventDetail): void;
  (e: "update:checked", checked: boolean): void;
  (e: "update:indeterminate", indeterminate: boolean): void;
}>();

// Event handlers that bridge web component events to Vue emits
const handleClick = (event: MouseEvent) => {
  emit("click", event);
};

const handleChange = (event: Event) => {
  const changeEvent = event as CheckboxChangeEvent;
  emit("change", changeEvent.detail);
  emit("update:checked", changeEvent.detail.checked);
  emit("update:indeterminate", changeEvent.detail.indeterminate);
};
</script>
