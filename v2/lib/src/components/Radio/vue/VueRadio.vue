<template>
  <ag-radio
    ref="radioRef"
    :name="name"
    :value="value"
    :checked="checked || undefined"
    :disabled="disabled || undefined"
    :size="size"
    :theme="theme"
    :label-text="labelText"
    :label-position="labelPosition"
    v-bind="$attrs"
  >
    <slot />
  </ag-radio>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import type { RadioSize, RadioTheme } from "../core/Radio";
import "../core/Radio"; // Registers the ag-radio web component

// Define props interface (Omit callback props - Vue uses emits)
export interface VueRadioProps {
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  size?: RadioSize;
  theme?: RadioTheme;
  labelText?: string;
  labelPosition?: "end" | "start";
}

// Define props with defaults
withDefaults(defineProps<VueRadioProps>(), {
  name: "",
  value: "",
  checked: false,
  disabled: false,
  size: "medium",
  theme: "default",
  labelText: "",
  labelPosition: "end",
});

// Define emits
const emit = defineEmits<{
  click: [event: MouseEvent];
  change: [detail: { checked: boolean; value: string; name: string }];
  "update:checked": [checked: boolean];
}>();

// Template ref
const radioRef = ref<HTMLElement>();

// Event handlers
const handleClick = (event: Event) => {
  emit("click", event as MouseEvent);
};

const handleChange = (event: Event) => {
  const detail = (event as CustomEvent).detail;
  emit("change", detail);
  emit("update:checked", detail.checked);
};

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-radio");

  if (!radioRef.value) return;

  radioRef.value.addEventListener("click", handleClick);
  radioRef.value.addEventListener("change", handleChange);
});

onUnmounted(() => {
  if (!radioRef.value) return;

  radioRef.value.removeEventListener("click", handleClick);
  radioRef.value.removeEventListener("change", handleChange);
});
</script>
