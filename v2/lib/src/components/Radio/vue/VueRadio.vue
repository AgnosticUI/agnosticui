<template>
  <ag-radio
    ref="radioRef"
    .checked="checked"
    .disabled="disabled"
    :name="name"
    :value="value"
    :size="size"
    :theme="theme"
    :labelText="labelText"
    :labelPosition="labelPosition"
    @click="handleClick"
    @change="handleChange"
    v-bind="$attrs"
  >
    <slot />
  </ag-radio>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { RadioSize, RadioTheme } from "../core/Radio";
import "../core/Radio";

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

const props = withDefaults(defineProps<VueRadioProps>(), {
  name: "",
  value: "",
  checked: false,
  disabled: false,
  size: "medium",
  theme: "default",
  labelText: "",
  labelPosition: "end",
});

const emit = defineEmits<{
  click: [event: MouseEvent];
  change: [detail: { checked: boolean; value: string; name: string }];
  "update:checked": [checked: boolean];
}>();

const radioRef = ref<HTMLElement>();

const handleClick = (event: MouseEvent) => {
  emit("click", event);
};

const handleChange = (event: Event) => {
  const detail = (event as CustomEvent).detail;
  emit("change", detail);
  emit("update:checked", detail.checked);
};
</script>
