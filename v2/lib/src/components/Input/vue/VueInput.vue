<script setup lang="ts">
import { ref, onMounted, watch, defineEmits, defineProps } from "vue";

// Import your Lit web component (registers <ag-input>)
import "../core/_Input";

const props = defineProps({
  modelValue: { type: String, default: "" },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  name: { type: String, default: "" },
  label: { type: String, default: "" },
  helpText: { type: String, default: "" },
  errorMessage: { type: String, default: "" },
  required: { type: Boolean, default: false },
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
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :name="name"
    :label="label"
    :help-text="helpText"
    :error-message="errorMessage"
    :required="required"
  >
    <slot
      name="addon-left"
      slot="addon-left"
    ></slot>
    <slot
      name="addon-right"
      slot="addon-right"
    ></slot>
  </ag-input>
</template>
