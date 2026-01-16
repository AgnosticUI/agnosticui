<template>
  <ag-divider
    ref="agComponent"
    v-bind="$attrs"
  >
    <slot></slot>
  </ag-divider>
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
import type {
  DividerProps,
  DividerJustify,
  DividerSize,
  DividerVariant,
} from "../core/Divider";
import "../core/Divider"; // Registers the ag-divider web component

export default defineComponent({
  name: "VueDivider",
  props: {
    vertical: { type: Boolean, default: false },
    justify: {
      type: String as PropType<DividerJustify>,
      default: "center" as DividerJustify,
    },
    size: {
      type: String as PropType<DividerSize>,
      default: "default" as DividerSize,
    },
    variant: {
      type: String as PropType<DividerVariant>,
      default: "default" as DividerVariant,
    },
  },
  setup(props) {
    const agComponent = ref<(HTMLElement & DividerProps) | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.vertical = props.vertical;
      webComponent.justify = props.justify;
      webComponent.size = props.size;
      webComponent.variant = props.variant;
    };

    onMounted(async () => {
      await customElements.whenDefined("ag-divider");
      await nextTick();
      syncProps();

      // Manually trigger slot content detection for Vue
      // Vue's slot content might not trigger slotchange event reliably
      await nextTick();
      const webComponent = agComponent.value;
      if (webComponent) {
        const slot = webComponent.shadowRoot?.querySelector("slot");
        if (slot) {
          // Force the slot change handler to run
          slot.dispatchEvent(new Event("slotchange"));
        }
      }
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
