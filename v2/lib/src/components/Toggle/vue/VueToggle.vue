<template>
  <ag-toggle
    ref="toggleRef"
    :label="label"
    :checked="checked || undefined"
    :size="size"
    :variant="variant"
    :disabled="disabled || undefined"
    :readonly="readonly || undefined"
    :labelledby="labelledBy"
    :describedby="describedBy"
    :name="name"
    :value="value"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import "../core/Toggle"; // Registers the ag-toggle web component
import { type ToggleProps } from "../core/Toggle";

// Define props with defaults
const props = withDefaults(defineProps<ToggleProps>(), {
  checked: false,
  size: "md",
  variant: "default",
  disabled: false,
  readonly: false,
});

// Define emits
const emit = defineEmits<{
  "toggle-change": [detail: { checked: boolean; name: string; value: string }];
}>();

// Template ref
const toggleRef = ref<HTMLElement>();

// Event handlers
const handleToggleChange = (event: Event) => {
  const detail = (event as CustomEvent).detail;
  emit("toggle-change", detail);
};

// Setup event listeners
onMounted(async () => {
  // Wait for web components to be defined
  await customElements.whenDefined("ag-toggle");

  if (!toggleRef.value) return;

  toggleRef.value.addEventListener("toggle-change", handleToggleChange);
});

onUnmounted(() => {
  if (!toggleRef.value) return;

  toggleRef.value.removeEventListener("toggle-change", handleToggleChange);
});
</script>
