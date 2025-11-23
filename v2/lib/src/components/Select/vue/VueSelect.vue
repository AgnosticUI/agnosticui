<template>
  <ag-select
    ref="agComponent"
    .size="size"
    .multiple="multiple"
    .disabled="disabled"
    .name="name"
    .multipleSize="multipleSize"
    .label="label"
    .labelHidden="labelHidden"
    .noLabel="noLabel"
    .required="required"
    .invalid="invalid"
    .errorMessage="errorMessage"
    .helpText="helpText"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    @click="handleClick"
    @keydown="handleKeydown"
    @keyup="handleKeyup"
    v-bind="$attrs"
  >
    <slot />
  </ag-select>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from "vue";
import type { SelectProps, SelectSize, SelectChangeEventDetail } from "../core/Select";
import "../core/Select"; // Registers the ag-select web component

// Re-export event types
export type { SelectChangeEvent, SelectChangeEventDetail } from "../core/Select";

export interface VueSelectProps extends Omit<SelectProps, 'onClick' | 'onFocus' | 'onBlur' | 'onChange'> {
  value?: string | string[];
}

export default defineComponent({
  name: "VueSelect",
  props: {
    size: {
      type: String as PropType<SelectSize>,
      default: "" as SelectSize,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    multipleSize: {
      type: Number,
      default: undefined,
    },
    value: {
      type: [String, Array] as PropType<string | string[]>,
      default: undefined,
    },
    // External label support
    label: {
      type: String,
      default: "",
    },
    labelHidden: {
      type: Boolean,
      default: false,
    },
    noLabel: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    helpText: {
      type: String,
      default: "",
    },
  },
  emits: {
    // Custom event - emit detail payload
    change: (detail: SelectChangeEventDetail) => true,
    // v-model support
    'update:value': (value: string | string[]) => true,
    // Native events - emit full event
    focus: (event: FocusEvent) => true,
    blur: (event: FocusEvent) => true,
    click: (event: MouseEvent) => true,
    keydown: (event: KeyboardEvent) => true,
    keyup: (event: KeyboardEvent) => true,
  },
  setup(props, { emit }) {
    const agComponent = ref<(HTMLElement & SelectProps) | null>(null);

    // Custom event handler - emit detail payload
    const handleChange = (event: CustomEvent<SelectChangeEventDetail>) => {
      emit("change", event.detail);
      emit("update:value", event.detail.value);
    };

    // Native event handlers - emit full event
    const handleFocus = (event: FocusEvent) => {
      emit("focus", event);
    };

    const handleBlur = (event: FocusEvent) => {
      emit("blur", event);
    };

    const handleClick = (event: MouseEvent) => {
      emit("click", event);
    };

    const handleKeydown = (event: KeyboardEvent) => {
      emit("keydown", event);
    };

    const handleKeyup = (event: KeyboardEvent) => {
      emit("keyup", event);
    };

    return {
      agComponent,
      handleChange,
      handleFocus,
      handleBlur,
      handleClick,
      handleKeydown,
      handleKeyup,
    };
  },
});
</script>
