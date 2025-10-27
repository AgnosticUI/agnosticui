<template>
  <ag-kbd
    ref="agComponent"
    :variant="variant"
    :size="size"
    :bordered="bordered"
    :background="background"
    v-bind="$attrs"
  >
    <slot />
  </ag-kbd>
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
import type { KbdProps, KbdVariant, KbdSize } from "../core/Kbd";
import "../core/Kbd"; // Registers the ag-kbd web component

export default defineComponent({
  name: "VueKbd",
  props: {
    variant: {
      type: String as PropType<KbdVariant>,
      default: "default" as KbdVariant,
    },
    bordered: {
      type: Boolean,
      default: true,
    },
    background: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<KbdSize>,
      default: "sm" as KbdSize,
    },
  },
  setup(props) {
    const agComponent = ref<(HTMLElement & KbdProps) | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.variant = props.variant;
      webComponent.bordered = props.bordered;
      webComponent.background = props.background;
      webComponent.size = props.size;
    };

    onMounted(async () => {
      await customElements.whenDefined("ag-kbd");
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
