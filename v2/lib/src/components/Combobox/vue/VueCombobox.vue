<script setup lang="ts">
import { ref, watch } from "vue";
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
    "onChange" | "onSelect" | "onSearch" | "onOpen" | "onClose" | "onFocus" | "onBlur"
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
  maxOptionsVisible: undefined,
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
  const customEvent = event as CustomEvent<{ value: string; option: ComboboxOption | null }>;
  emit("change", customEvent.detail);
  // Update v-model
  emit("update:value", customEvent.detail.value);
};

const handleSelect = (event: Event) => {
  const customEvent = event as CustomEvent<{ option: ComboboxOption; value: string }>;
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

// Keep web component and Vue value synced
watch(
  () => props.value,
  (newValue) => {
    if (comboboxRef.value && (comboboxRef.value as any).value !== newValue) {
      (comboboxRef.value as any).value = newValue;
    }
  }
);

// Sync defaultValue to web component
watch(
  () => props.defaultValue,
  (newDefaultValue) => {
    if (comboboxRef.value && newDefaultValue !== undefined) {
      (comboboxRef.value as any).defaultValue = newDefaultValue;
    }
  },
  { immediate: true }
);

// Expose public methods
defineExpose({
  focus: () => (comboboxRef.value as any)?.focus?.(),
  blur: () => (comboboxRef.value as any)?.blur?.(),
  open: () => (comboboxRef.value as any)?.open?.(),
  close: () => (comboboxRef.value as any)?.close?.(),
  toggle: () => (comboboxRef.value as any)?.toggle?.(),
  selectOption: (optionOrValue: ComboboxOption | string) => (comboboxRef.value as any)?.selectOption?.(optionOrValue),
  clearSelection: () => (comboboxRef.value as any)?.clearSelection?.(),
});
</script>

<template>
  <ag-combobox
    ref="comboboxRef"
    :options="options"
    :value="value"
    :default-value="defaultValue"
    :placeholder="placeholder || undefined"
    :label="label || undefined"
    :label-hidden="labelHidden || undefined"
    :no-label="noLabel || undefined"
    :aria-label="ariaLabel || undefined"
    :labelled-by="labelledBy || undefined"
    :help-text="helpText || undefined"
    :error-text="errorText || undefined"
    :autocomplete="autocomplete"
    :filter-mode="filterMode"
    :clearable="clearable || undefined"
    :disabled="disabled || undefined"
    :readonly="readonly || undefined"
    :required="required || undefined"
    :invalid="invalid || undefined"
    :size="size"
    :variant="variant"
    :multiple="multiple || undefined"
    :max-options-visible="maxOptionsVisible"
    :close-on-select="closeOnSelect"
    :loading="loading || undefined"
    :loading-text="loadingText || undefined"
    :no-results-text="noResultsText || undefined"
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
