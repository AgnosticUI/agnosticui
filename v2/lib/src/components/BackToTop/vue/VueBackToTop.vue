<template>
  <ag-back-to-top ref="agComponent" :visible="visible" :threshold="threshold">
    <slot />
  </ag-back-to-top>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect, nextTick, type PropType } from 'vue';
import { BackToTop, type BackToTopProps } from '../core/_BackToTop';
import '../core/BackToTop'; // Registers the ag-back-to-top web component

export default defineComponent({
  name: 'VueBackToTop',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    threshold: {
      type: Number,
      default: 400,
    },
  },
  setup(props) {
    const agComponent = ref<HTMLElement & BackToTopProps | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.visible = props.visible;
      webComponent.threshold = props.threshold;
    };

    onMounted(async () => {
      await customElements.whenDefined('ag-back-to-top');
      await nextTick();
      syncProps();
    });

    watchEffect(() => {
      if (agComponent.value) {
        syncProps();
      }
    });

    return {
      agComponent,
    };
  },
});
</script>