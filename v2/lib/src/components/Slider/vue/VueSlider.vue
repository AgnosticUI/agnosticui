<script setup lang="ts">
import { ref, watch } from "vue";
import type { SliderProps } from "../core/Slider";
import "../core/Slider"; // Registers the ag-slider web component

/**
 * Vue Slider Props
 * Following AgnosticUI v2 event conventions:
 * - Omit callback props (Vue uses emits)
 * - Support v-model:value via update:value emit
 */
export interface VueSliderProps
  extends Omit<
    SliderProps,
    "onChange" | "onInput" | "onFocus" | "onBlur"
  > {}

// Define props with defaults
const props = withDefaults(defineProps<VueSliderProps>(), {
  label: "",
  labelHidden: false,
  noLabel: false,
  ariaLabel: "",
  labelledBy: "",
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
  invalid: false,
  errorMessage: "",
  helpText: "",
  name: "",
  showTooltip: false,
  showTicks: false,
  tickStep: 25,
});

// Define emits - custom events emit detail, native events emit full event
const emit = defineEmits<{
  input: [detail: { value: number | [number, number] }];
  change: [detail: { value: number | [number, number] }];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  "update:value": [value: number | [number, number]];
}>();

// Template ref
const sliderRef = ref<HTMLElement>();

// Event handlers
const handleInput = (event: Event) => {
  const customEvent = event as CustomEvent<{ value: number | [number, number] }>;
  emit("input", customEvent.detail);
  // Update v-model
  emit("update:value", customEvent.detail.value);
};

const handleChange = (event: Event) => {
  const customEvent = event as CustomEvent<{ value: number | [number, number] }>;
  emit("change", customEvent.detail);
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
    if (sliderRef.value && (sliderRef.value as any).value !== newValue) {
      (sliderRef.value as any).value = newValue;
    }
  }
);
</script>

<template>
  <ag-slider
    ref="sliderRef"
    :value="value"
    :min="min"
    :max="max"
    :step="step"
    :dual="dual || undefined"
    :vertical="vertical || undefined"
    :filled="filled || undefined"
    :monochrome="monochrome || undefined"
    :size="size !== 'default' ? size : undefined"
    :disabled="disabled || undefined"
    :readonly="readonly || undefined"
    :invalid="invalid || undefined"
    :label="label || undefined"
    :labelHidden="labelHidden || undefined"
    :noLabel="noLabel || undefined"
    :ariaLabel="ariaLabel || undefined"
    :labelledBy="labelledBy || undefined"
    :errorMessage="errorMessage || undefined"
    :helpText="helpText || undefined"
    :name="name || undefined"
    :showTooltip="showTooltip || undefined"
    :showTicks="showTicks || undefined"
    :tickStep="tickStep"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    v-bind="$attrs"
  />
</template>
