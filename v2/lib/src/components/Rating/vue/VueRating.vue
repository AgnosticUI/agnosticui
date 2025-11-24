<template>
  <ag-rating
    ref="ratingRef"
    .value="value"
    .readonly="readonly"
    .allowClear="allowClear"
    .required="required"
    .invalid="invalid"
    :max="max"
    :precision="precision"
    :variant="variant"
    :size="size"
    :name="name"
    :label="label"
    :labelPosition="labelPosition"
    :labelHidden="labelHidden"
    :noLabel="noLabel"
    :errorMessage="errorMessage"
    :helpText="helpText"
    @rating-change="handleChange"
    @rating-hover="handleHover"
    v-bind="$attrs"
  >
    <slot />
  </ag-rating>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "../core/Rating";

/**
 * Vue Rating Props
 * Based on AgnosticUI v2 Rating core component
 * - Omit callback props (Vue uses emits)
 * - Support v-model:value via update:value emit
 */
export interface VueRatingProps {
  value?: number;
  max?: number;
  precision?: "whole" | "half";
  readonly?: boolean;
  allowClear?: boolean;
  variant?:
    | ""
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "monochrome";
  size?: "sm" | "md" | "lg";
  name?: string;
  label?: string;
  labelPosition?: "top" | "start" | "end" | "bottom";
  labelHidden?: boolean;
  noLabel?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
}

const props = withDefaults(defineProps<VueRatingProps>(), {
  value: 0,
  max: 5,
  precision: "whole",
  readonly: false,
  allowClear: false,
  variant: "",
  size: "md",
  name: "",
  label: "",
  labelPosition: "top",
  labelHidden: false,
  noLabel: false,
  required: false,
  invalid: false,
  errorMessage: "",
  helpText: "",
});

const emit = defineEmits<{
  "update:value": [value: number];
  change: [detail: { oldValue: number; newValue: number }];
  hover: [detail: { phase: "start" | "move" | "end"; value: number }];
}>();

const ratingRef = ref<HTMLElement>();

const handleChange = (event: Event) => {
  const customEvent = event as CustomEvent<{
    oldValue: number;
    newValue: number;
  }>;
  emit("change", customEvent.detail);
  emit("update:value", customEvent.detail.newValue);
};

const handleHover = (event: Event) => {
  const customEvent = event as CustomEvent<{
    phase: "start" | "move" | "end";
    value: number;
  }>;
  emit("hover", customEvent.detail);
};
</script>
