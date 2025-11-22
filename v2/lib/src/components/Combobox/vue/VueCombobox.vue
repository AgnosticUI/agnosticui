<script setup lang="ts">
import { ref } from "vue";
import type { ComboboxProps, ComboboxOption } from "../core/Combobox";
import "../core/Combobox"; // Registers the ag-combobox web component

/**
 * Vue Combobox Props
 * Following AgnosticUI v2 event conventions:
 * - Omit callback props (Vue uses emits)
 * - Support v-model:value via update:value emit
 */
export interface VueComboboxProps
  extends Omit<
    ComboboxProps,
    | "onChange"
    | "onSelect"
    | "onSearch"
    | "onOpen"
    | "onClose"
    | "onFocus"
    | "onBlur"
  > {}

// Define props with defaults
const props = withDefaults(defineProps<VueComboboxProps>(), {
  options: () => [],
  value: undefined,
  defaultValue: undefined,
  placeholder: "",
  label: "",
  labelHidden: false,
  noLabel: false,
  ariaLabel: null,
  labelledBy: "",
  helpText: "",
  errorText: "",
  autocomplete: "list",
  filterMode: "startsWith",
  clearable: false,
  disabled: false,
  readonly: false,
  required: false,
  invalid: false,
  size: "default",
  variant: "default",
  multiple: false,
  maxOptionsVisible: 3,
  closeOnSelect: true,
  loading: false,
  loadingText: "Loading...",
  noResultsText: "No results found",
});

// Define emits
const emit = defineEmits<{
  change: [detail: { value: string; option: ComboboxOption | null }];
  select: [detail: { option: ComboboxOption; value: string }];
  search: [detail: { searchTerm: string }];
  open: [detail: { open: boolean }];
  close: [detail: { open: boolean }];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  "update:value": [value: string];
}>();

// Template ref
const comboboxRef = ref<HTMLElement>();

// Event handlers
const handleChange = (event: Event) => {
  const customEvent = event as CustomEvent<{
    value: string;
    option: ComboboxOption | null;
  }>;
  emit("change", customEvent.detail);
  // Update v-model
  emit("update:value", customEvent.detail.value);
};

const handleSelect = (event: Event) => {
  const customEvent = event as CustomEvent<{
    option: ComboboxOption;
    value: string;
  }>;
  emit("select", customEvent.detail);
};

const handleSearch = (event: Event) => {
  const customEvent = event as CustomEvent<{ searchTerm: string }>;
  emit("search", customEvent.detail);
};

const handleOpen = (event: Event) => {
  const customEvent = event as CustomEvent<{ open: boolean }>;
  emit("open", customEvent.detail);
};

const handleClose = (event: Event) => {
  const customEvent = event as CustomEvent<{ open: boolean }>;
  emit("close", customEvent.detail);
};

const handleFocus = (event: FocusEvent) => {
  emit("focus", event);
};

const handleBlur = (event: FocusEvent) => {
  emit("blur", event);
};

// Expose public methods
defineExpose({
  focus: () => (comboboxRef.value as any)?.focus?.(),
  blur: () => (comboboxRef.value as any)?.blur?.(),
  open: () => (comboboxRef.value as any)?.open?.(),
  close: () => (comboboxRef.value as any)?.close?.(),
  toggle: () => (comboboxRef.value as any)?.toggle?.(),
  selectOption: (optionOrValue: ComboboxOption | string) =>
    (comboboxRef.value as any)?.selectOption?.(optionOrValue),
  clearSelection: () => (comboboxRef.value as any)?.clearSelection?.(),
});
</script>

<template>
  <ag-combobox
    ref="comboboxRef"
    .labelHidden="labelHidden"
    .noLabel="noLabel"
    .disabled="disabled"
    .invalid="invalid"
    .clearable="clearable"
    .readonly="readonly"
    .required="required"
    .loading="loading"
    .multiple="multiple"
    .closeOnSelect="closeOnSelect"
    .options="options"
    .value="value"
    .defaultValue="defaultValue"
    .maxOptionsVisible="maxOptionsVisible"
    :placeholder="placeholder"
    :label="label"
    :ariaLabel="ariaLabel"
    :labelledBy="labelledBy"
    :helpText="helpText"
    :errorText="errorText"
    :autocomplete="autocomplete"
    :filterMode="filterMode"
    :size="size"
    :variant="variant"
    :loadingText="loadingText"
    :noResultsText="noResultsText"
    @change="handleChange"
    @select="handleSelect"
    @search="handleSearch"
    @open="handleOpen"
    @close="handleClose"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <slot></slot>
  </ag-combobox>
</template>
