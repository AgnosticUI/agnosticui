<template>
  <ag-loader ref="agComponent">
    <slot />
  </ag-loader>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect, nextTick, type PropType } from 'vue';
import type { LoaderProps, LoaderSize } from '../core/_Loader';
import '../core/_Loader'; // Registers the ag-loader web component

export default defineComponent({
  name: 'VueLoader',
  props: {
    size: {
      type: String as PropType<LoaderSize>,
      default: 'default' as LoaderSize,
    },
    ariaLabel: {
      type: String,
      default: 'Loading...',
    },
  },
  setup(props) {
    const agComponent = ref<(HTMLElement & LoaderProps) | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.size = props.size;
      webComponent.ariaLabel = props.ariaLabel;
    };

    onMounted(async () => {
      await customElements.whenDefined('ag-loader');
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
