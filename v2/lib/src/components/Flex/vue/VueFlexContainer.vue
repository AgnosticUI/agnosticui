<template>
  <ag-flex-container
    ref="agComponent"
    v-bind="$attrs"
  >
    <slot></slot>
  </ag-flex-container>
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
import type { FlexContainerProps } from "../core/_FlexContainer";
import "../core/FlexContainer"; // Registers the ag-flex-container web component

export default defineComponent({
  name: "VueFlexContainer",
  props: {
    direction: {
      type: String as PropType<FlexContainerProps['direction']>,
      default: "row",
    },
    wrap: {
      type: String as PropType<FlexContainerProps['wrap']>,
      default: "nowrap",
    },
    justify: {
      type: String as PropType<FlexContainerProps['justify']>,
      default: "flex-start",
    },
    align: {
      type: String as PropType<FlexContainerProps['align']>,
      default: "stretch",
    },
    alignContent: {
      type: String as PropType<FlexContainerProps['alignContent']>,
      default: "stretch",
    },
    gap: {
      type: String,
      default: "var(--ag-space-0, 0)",
    },
    inline: {
      type: Boolean,
      default: false,
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
    const agComponent = ref<(HTMLElement & FlexContainerProps) | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.direction = props.direction;
      webComponent.wrap = props.wrap;
      webComponent.justify = props.justify;
      webComponent.align = props.align;
      webComponent.alignContent = props.alignContent;
      webComponent.gap = props.gap;
      webComponent.inline = props.inline;
      webComponent.reverse = props.reverse;
      webComponent.stretchChildren = props.stretchChildren;
    };

    onMounted(async () => {
      await customElements.whenDefined("ag-flex-container");
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
