<template>
  <ag-fieldset
    ref="agComponent"
    :legend="legend"
    :bordered="bordered || undefined"
    :layout="layout"
    :legend-hidden="legendHidden || undefined"
    v-bind="$attrs"
  >
    <slot />
  </ag-fieldset>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, type PropType } from "vue";
import type { FieldsetProps } from "../core/_Fieldset";
import "../Fieldset"; // Registers the ag-fieldset web component

export default defineComponent({
  name: "VueFieldset",
  props: {
    legend: {
      type: String,
      default: "",
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    layout: {
      type: String as PropType<"vertical" | "horizontal">,
      default: "vertical" as "vertical" | "horizontal",
    },
    legendHidden: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const agComponent = ref<(HTMLElement & FieldsetProps) | null>(null);

    onMounted(async () => {
      // Ensure the web component is defined
      await customElements.whenDefined("ag-fieldset");
    });

    return {
      agComponent,
      legend: props.legend,
      bordered: props.bordered,
      layout: props.layout,
      legendHidden: props.legendHidden,
    };
  },
});
</script>
