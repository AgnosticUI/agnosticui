<template>
  <ag-flex-col
    ref="agComponent"
    v-bind="$attrs"
  >
    <slot></slot>
  </ag-flex-col>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  watchEffect,
  nextTick,
  type PropType,
} from "vue";
import type { FlexColProps } from "../core/index";
import "../FlexCol"; // Registers the ag-flex-col web component

export default defineComponent({
  name: "VueFlexCol",
  props: {
    wrap: {
      type: String as PropType<FlexColProps['wrap']>,
      default: "nowrap",
    },
    justify: {
      type: String as PropType<FlexColProps['justify']>,
      default: "flex-start",
    },
    align: {
      type: String as PropType<FlexColProps['align']>,
      default: "stretch",
    },
    alignContent: {
      type: String as PropType<FlexColProps['alignContent']>,
      default: "stretch",
    },
    gap: {
      type: String,
      default: "var(--ag-space-0, 0)",
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    stretchChildren: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const agComponent = ref<(HTMLElement & FlexColProps) | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.wrap = props.wrap;
      webComponent.justify = props.justify;
      webComponent.align = props.align;
      webComponent.alignContent = props.alignContent;
      webComponent.gap = props.gap;
      webComponent.reverse = props.reverse;
      webComponent.stretchChildren = props.stretchChildren;
    };

    onMounted(async () => {
      await customElements.whenDefined("ag-flex-col");
      await nextTick();
      syncProps();
    });

    watchEffect(() => {
      if (agComponent.value) {
        syncProps();
      }
    });

    return { agComponent };
  },
});
</script>
