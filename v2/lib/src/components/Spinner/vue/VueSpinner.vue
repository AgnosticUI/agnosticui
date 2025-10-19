<template>
  <ag-spinner ref="agComponent">
    <slot />
  </ag-spinner>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect, nextTick, type PropType } from 'vue';
import type { SpinnerProps, SpinnerSize } from '../core/_Spinner';
import '../core/_Spinner'; // Registers the ag-spinner web component

export default defineComponent({
  name: 'VueSpinner',
  props: {
    size: {
      type: String as PropType<SpinnerSize>,
      default: 'default' as SpinnerSize,
    },
    ariaLabel: {
      type: String,
      default: 'Loading...',
    },
  },
  setup(props) {
    const agComponent = ref<(HTMLElement & SpinnerProps) | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.size = props.size;
      webComponent.ariaLabel = props.ariaLabel;
    };

    onMounted(async () => {
      await customElements.whenDefined('ag-spinner');
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
