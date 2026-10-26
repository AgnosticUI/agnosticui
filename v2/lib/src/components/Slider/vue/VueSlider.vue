<template>
  <ag-slider
    ref="sliderRef"
    .value="value"
    .dual="dual"
    .vertical="vertical"
    .filled="filled"
    .monochrome="monochrome"
    .labelHidden="labelHidden"
    .labelPosition="labelPosition"
    .noLabel="noLabel"
    .disabled="disabled"
    .readonly="readonly"
    .required="required"
    .invalid="invalid"
    .showTooltip="showTooltip"
    .showTicks="showTicks"
    :min="min"
    :max="max"
    :step="step"
    :size="size"
    :label="label"
    :ariaLabel="ariaLabel"
    :errorMessage="errorMessage"
    :helpText="helpText"
    :name="name"
    :tickStep="tickStep"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { type VueSliderProps } from "./index"; // Pull the consolidated type definitions from the barrel file
import "../core/Slider";

const props = withDefaults(defineProps<VueSliderProps>(), {
  label: "",
  labelPosition: "top",
  labelHidden: false,
  noLabel: false,
  ariaLabel: "",
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  dual: false,
  vertical: false,
  filled: false,
  monochrome: false,
  size: "default",
  disabled: false,
  readonly: false,
  required: false,
  invalid: false,
  errorMessage: "",
  helpText: "",
  name: "",
  showTooltip: false,
  showTicks: false,
  tickStep: 25,
});

const emit = defineEmits<{
  input: [detail: { value: number | [number, number] }];
  change: [detail: { value: number | [number, number] }];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  "update:value": [value: number | [number, number]];
}>();

const sliderRef = ref<HTMLElement>();

const handleInput = (event: Event) => {
  const customEvent = event as CustomEvent<{
    value: number | [number, number];
  }>;
  emit("input", customEvent.detail);
  emit("update:value", customEvent.detail.value);
};

const handleChange = (event: Event) => {
  const customEvent = event as CustomEvent<{
    value: number | [number, number];
  }>;
  emit("change", customEvent.detail);
};

const handleFocus = (event: FocusEvent) => {
  emit("focus", event);
};

const handleBlur = (event: FocusEvent) => {
  emit("blur", event);
};
</script>
