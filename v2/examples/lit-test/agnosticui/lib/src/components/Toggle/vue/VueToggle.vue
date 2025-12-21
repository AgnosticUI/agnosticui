<template>
  <ag-toggle
    ref="toggleRef"
    :label="label"
    .labelPosition="labelPosition"
    .labelHidden="labelHidden"
    .noLabel="noLabel"
    :size="size"
    :variant="variant"
    .checked="checked"
    .disabled="disabled"
    .readonly="readonly"
    .required="required"
    .invalid="invalid"
    :errorMessage="errorMessage"
    :helpText="helpText"
    :name="name"
    :value="value"
    @click="handleClick"
    @toggle-change="handleToggleChange"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
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
  labelPosition: "top",
  labelHidden: false,
  noLabel: false,
  size: "md",
  variant: "default",
  disabled: false,
  readonly: false,
  required: false,
  invalid: false,
  errorMessage: "",
  helpText: "",
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

// Keep web component and Vue checked state synced
watch(
  () => props.checked,
  (newValue) => {
    if (toggleRef.value && (toggleRef.value as any).checked !== newValue) {
      (toggleRef.value as any).checked = newValue;
    }
  }
);
</script>
