<template>
  <ag-flex-inline
    ref="agComponent"
    v-bind="$attrs"
  >
    <slot></slot>
  </ag-flex-inline>
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
import type { FlexInlineProps } from "../core/index";
import "../FlexInline"; // Registers the ag-flex-inline web component

export default defineComponent({
  name: "VueFlexInline",
  props: {
    direction: {
      type: String as PropType<FlexInlineProps['direction']>,
      default: "row",
    },
    wrap: {
      type: String as PropType<FlexInlineProps['wrap']>,
      default: "nowrap",
    },
    justify: {
      type: String as PropType<FlexInlineProps['justify']>,
      default: "flex-start",
    },
    align: {
      type: String as PropType<FlexInlineProps['align']>,
      default: "stretch",
    },
    alignContent: {
      type: String as PropType<FlexInlineProps['alignContent']>,
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
    const agComponent = ref<(HTMLElement & FlexInlineProps) | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.direction = props.direction;
      webComponent.wrap = props.wrap;
      webComponent.justify = props.justify;
      webComponent.align = props.align;
      webComponent.alignContent = props.alignContent;
      webComponent.gap = props.gap;
      webComponent.reverse = props.reverse;
      webComponent.stretchChildren = props.stretchChildren;
    };

    onMounted(async () => {
      await customElements.whenDefined("ag-flex-inline");
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
