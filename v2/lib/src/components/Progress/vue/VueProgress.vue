<template>
  <ag-progress
    ref="agComponent"
    v-bind="$attrs"
  >
    <slot />
  </ag-progress>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect, nextTick } from "vue";
import type { ProgressProps } from "../core/_Progress";
import "../core/Progress"; // Registers the ag-progress web component

export default defineComponent({
  name: "VueProgress",
  props: {
    value: { type: Number, default: undefined },
    max: { type: Number, default: 100 },
    label: { type: String, default: "" },
  },
  setup(props) {
    const agComponent = ref<(HTMLElement & ProgressProps) | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.value = props.value;
      webComponent.max = props.max;
      webComponent.label = props.label;
    };

    onMounted(async () => {
      await customElements.whenDefined("ag-progress");
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
