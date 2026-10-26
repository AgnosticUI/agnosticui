<template>
  <ag-slider
    ref="sliderRef"
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
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { type VueSliderProps } from "./index";
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

// Sync the initial baseline prop value when the component mounts onto the tree
onMounted(() => {
  if (sliderRef.value) {
    (sliderRef.value as any).value = props.value;
    (sliderRef.value as any).dual = props.dual;
  }
});

// Watch reactive props changes to completely eliminate cross-framework value mutation desyncs
watch(
  () => props.value,
  (newValue) => {
    if (sliderRef.value && (sliderRef.value as any).value !== newValue) {
      (sliderRef.value as any).value = newValue;
    }
  }
);

watch(
  () => props.dual,
  (newDual) => {
    if (sliderRef.value) {
      (sliderRef.value as any).dual = newDual;
    }
  }
);

const handleInput = (event: Event) => {
  const customEvent = event as CustomEvent<{ value: number | [number, number] }>;
  
  const targetValue = customEvent.detail && customEvent.detail.value !== undefined
    ? customEvent.detail.value 
    : (event.target as any).value;

  emit("input", { value: targetValue });
  emit("update:value", targetValue);
};

const handleChange = (event: Event) => {
  const customEvent = event as CustomEvent<{ value: number | [number, number] }>;
  
  const targetValue = customEvent.detail && customEvent.detail.value !== undefined
    ? customEvent.detail.value 
    : (event.target as any).value;

  emit("change", { value: targetValue });
};

const handleFocus = (event: FocusEvent) => {
  emit("focus", event);
};

const handleBlur = (event: FocusEvent) => {
  emit("blur", event);
};
</script>
