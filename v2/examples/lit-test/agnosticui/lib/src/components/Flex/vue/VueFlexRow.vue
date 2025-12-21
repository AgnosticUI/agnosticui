<template>
  <ag-flex-row
    ref="agComponent"
    v-bind="$attrs"
  >
    <slot></slot>
  </ag-flex-row>
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
import type { FlexRowProps } from "../core/index";
import "../FlexRow"; // Registers the ag-flex-row web component

export default defineComponent({
  name: "VueFlexRow",
  props: {
    wrap: {
      type: String as PropType<FlexRowProps['wrap']>,
      default: "nowrap",
    },
    justify: {
      type: String as PropType<FlexRowProps['justify']>,
      default: "flex-start",
    },
    align: {
      type: String as PropType<FlexRowProps['align']>,
      default: "stretch",
    },
    alignContent: {
      type: String as PropType<FlexRowProps['alignContent']>,
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
    const agComponent = ref<(HTMLElement & FlexRowProps) | null>(null);

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
      await customElements.whenDefined("ag-flex-row");
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
