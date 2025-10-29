
<template>
  <ag-collapsible ref="agComponent">
    <span slot="summary">
      <slot name="summary"></slot>
    </span>
    <slot />
    <span slot="indicator">
      <slot name="indicator"></slot>
    </span>
  </ag-collapsible>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect, nextTick } from 'vue';
import type { CollapsibleProps } from '../core/_Collapsible';
import '../core/Collapsible'; // Registers the ag-collapsible web component

export default defineComponent({
  name: 'VueCollapsible',
  props: {
    isOpen: { type: Boolean, default: false },
    isSkinned: { type: Boolean, default: true },
    isBordered: { type: Boolean, default: false },
    isShadow: { type: Boolean, default: false },
  },
  setup(props) {
    const agComponent = ref<HTMLElement & CollapsibleProps | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.isOpen = props.isOpen;
      webComponent.isSkinned = props.isSkinned;
      webComponent.isBordered = props.isBordered;
      webComponent.isShadow = props.isShadow;
    };

    onMounted(async () => {
      await customElements.whenDefined('ag-collapsible');
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
