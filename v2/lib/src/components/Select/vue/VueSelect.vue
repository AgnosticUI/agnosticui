<template>
  <ag-select
    ref="agComponent"
    .size="size"
    .multiple="multiple"
    .disabled="disabled"
    .name="name"
    .multipleSize="multipleSize"
    v-bind="$attrs"
  >
    <slot />
  </ag-select>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, type PropType } from "vue";
import type { SelectProps, SelectSize } from "../core/Select";
import "../core/Select"; // Registers the ag-select web component

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
  },
  emits: ['change', 'focus', 'blur', 'input', 'click', 'keydown', 'keyup'],
  setup(props, { emit }) {
    const agComponent = ref<(HTMLElement & SelectProps) | null>(null);

    // Event handlers
    const handleChange = (event: Event) => {
      emit("change", event);
    };

    const handleFocus = (event: Event) => {
      emit("focus", event);
    };

    const handleBlur = (event: Event) => {
      emit("blur", event);
    };

    const handleInput = (event: Event) => {
      emit("input", event);
    };

    const handleClick = (event: Event) => {
      emit("click", event);
    };

    const handleKeyDown = (event: Event) => {
      emit("keydown", event);
    };

    const handleKeyUp = (event: Event) => {
      emit("keyup", event);
    };

    onMounted(async () => {
      // Ensure the web component is defined
      await customElements.whenDefined("ag-select");

      if (!agComponent.value) return;

      // Attach event listeners
      agComponent.value.addEventListener("change", handleChange);
      agComponent.value.addEventListener("focus", handleFocus);
      agComponent.value.addEventListener("blur", handleBlur);
      agComponent.value.addEventListener("input", handleInput);
      agComponent.value.addEventListener("click", handleClick);
      agComponent.value.addEventListener("keydown", handleKeyDown);
      agComponent.value.addEventListener("keyup", handleKeyUp);
    });

    onUnmounted(() => {
      if (!agComponent.value) return;

      // Remove event listeners
      agComponent.value.removeEventListener("change", handleChange);
      agComponent.value.removeEventListener("focus", handleFocus);
      agComponent.value.removeEventListener("blur", handleBlur);
      agComponent.value.removeEventListener("input", handleInput);
      agComponent.value.removeEventListener("click", handleClick);
      agComponent.value.removeEventListener("keydown", handleKeyDown);
      agComponent.value.removeEventListener("keyup", handleKeyUp);
    });

    return {
      agComponent,
      size: props.size,
      multiple: props.multiple,
      disabled: props.disabled,
      name: props.name,
      multipleSize: props.multipleSize,
    };
  },
});
</script>
