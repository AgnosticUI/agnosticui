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
    @click="handleClick"
    @toggle-change="handleToggleChange"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  ToggleProps,
  ToggleChangeEvent,
  ToggleChangeEventDetail,
} from "../core/Toggle";
import "../core/Toggle"; // Registers the ag-toggle web component

// Define props interface (omit function props since wrapper uses emits)
export interface VueToggleProps
  extends Omit<ToggleProps, "onClick" | "onToggleChange"> {}

// Define props with defaults
const props = withDefaults(defineProps<VueToggleProps>(), {
  checked: false,
  size: "md",
  variant: "default",
  disabled: false,
  readonly: false,
});

// Define emits for all events (native + custom)
const emit = defineEmits<{
  click: [event: MouseEvent];
  "toggle-change": [detail: ToggleChangeEventDetail];
  "update:checked": [checked: boolean];
}>();

// Template ref
const toggleRef = ref<HTMLElement>();

// Event handlers that bridge web component events to Vue emits
const handleClick = (event: MouseEvent) => {
  emit("click", event);
};

const handleToggleChange = (event: Event) => {
  const toggleEvent = event as ToggleChangeEvent;
  emit("toggle-change", toggleEvent.detail);
  emit("update:checked", toggleEvent.detail.checked);
};
</script>
