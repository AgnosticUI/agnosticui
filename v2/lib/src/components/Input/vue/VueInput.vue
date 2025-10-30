<script setup lang="ts">
import { ref, onMounted, watch, defineEmits, defineProps } from "vue";

// Import your Lit web component (registers <ag-input>)
import "../core/Input";

const props = defineProps({
  modelValue: { type: String, default: "" },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  name: { type: String, default: "" },
  label: { type: String, default: "" },
  labelHidden: { type: Boolean, default: false },
  noLabel: { type: Boolean, default: false },
  ariaLabel: { type: String, default: "" },
  labelledBy: { type: String, default: "" },
  helpText: { type: String, default: "" },
  errorMessage: { type: String, default: "" },
  required: { type: Boolean, default: false },
  invalid: { type: Boolean, default: false },
  // Size variants
  size: { type: String, default: "default" },
  // Styling variants (Vue uses "is" prefix by convention)
  isRounded: { type: Boolean, default: false },
  isUnderlined: { type: Boolean, default: false },
  isUnderlinedWithBackground: { type: Boolean, default: false },
  isInline: { type: Boolean, default: false },
  isCapsule: { type: Boolean, default: false },
  // Addon support
  hasLeftAddon: { type: Boolean, default: false },
  hasRightAddon: { type: Boolean, default: false },
  // Textarea properties
  rows: { type: Number, default: 4 },
  cols: { type: Number, default: 50 },
});

const emit = defineEmits([
  "update:modelValue",
  "input",
  "change",
  "focus",
  "blur",
]);

const inputEl = ref<HTMLElement | null>(null);

onMounted(() => {
  const el = inputEl.value;
  if (!el) return;

  const handle = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (event.type === "input") {
      emit("update:modelValue", target.value);
    }
    emit(event.type as "input" | "change" | "focus" | "blur", event);
  };

  ["input", "change", "focus", "blur"].forEach((evt) =>
    el.addEventListener(evt, handle)
  );
});

// Keep web component and Vue modelValue synced
watch(
  () => props.modelValue,
  (val) => {
    if (inputEl.value && (inputEl.value as any).value !== val) {
      (inputEl.value as any).value = val;
    }
  }
);
</script>

<template>
  <ag-input
    ref="inputEl"
    :value="modelValue || undefined"
    :type="type"
    :placeholder="placeholder || undefined"
    :name="name || undefined"
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
    :rounded="isRounded || undefined"
    :underlined="isUnderlined || undefined"
    :underlinedWithBackground="isUnderlinedWithBackground || undefined"
    :inline="isInline || undefined"
    :capsule="isCapsule || undefined"
    :hasLeftAddon="hasLeftAddon || undefined"
    :hasRightAddon="hasRightAddon || undefined"
    :rows="type === 'textarea' && rows !== 4 ? rows : undefined"
    :cols="type === 'textarea' && cols !== 50 ? cols : undefined"
    v-bind="$attrs"
  >
    <span
      v-if="$slots['addon-left']"
      slot="addon-left"
    >
      <slot name="addon-left"></slot>
    </span>
    <span
      v-if="$slots['addon-right']"
      slot="addon-right"
    >
      <slot name="addon-right"></slot>
    </span>
  </ag-input>
</template>
