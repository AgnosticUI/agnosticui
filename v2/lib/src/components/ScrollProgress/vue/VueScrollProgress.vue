<template>
  <ag-scroll-progress
    ref="agComponent"
    v-bind="$attrs"
  >
    <slot />
  </ag-scroll-progress>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect, nextTick } from "vue";
import type { ScrollProgressProps } from "../core/ScrollProgress";
import "../core/ScrollProgress"; // Registers the ag-scroll-progress web component

export default defineComponent({
  name: "VueScrollProgress",
  props: {
    mode: { type: String, default: 'bar' },
    target: { type: Object, default: null },
    orientation: { type: String, default: 'top' },
    dots: { type: Number, default: 5 },
    badgeVariant: { type: String, default: 'info' },
    ringSize: { type: Number, default: 32 },
    ringStrokeWidth: { type: Number, default: 3 },
    ringVariant: { type: String, default: 'info' },
    precision: { type: Number, default: 0 },
  },
  setup(props) {
    const agComponent = ref<(HTMLElement & ScrollProgressProps) | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      (webComponent as any).mode = props.mode;
      (webComponent as any).target = props.target;
      (webComponent as any).orientation = props.orientation;
      (webComponent as any).dots = props.dots;
      (webComponent as any).badgeVariant = props.badgeVariant;
      (webComponent as any).ringSize = props.ringSize;
      (webComponent as any).ringStrokeWidth = props.ringStrokeWidth;
      (webComponent as any).ringVariant = props.ringVariant;
      (webComponent as any).precision = props.precision;
    };

    onMounted(async () => {
      await customElements.whenDefined("ag-scroll-progress");
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
