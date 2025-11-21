<template>
  <ag-mark
    ref="agComponent"
    :variant="variant"
    :search="search"
    :case-sensitive="caseSensitive"
    :match-all="matchAll"
  >
    <slot />
  </ag-mark>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect, nextTick, type PropType } from 'vue';
import type { MarkProps, MarkVariant } from '../core/_Mark';
import '../core/Mark'; // Registers the ag-mark web component

export default defineComponent({
  name: 'VueMark',
  props: {
    variant: {
      type: String as PropType<MarkVariant>,
      default: 'warning' as MarkVariant,
    },
    search: {
      type: String,
      default: undefined,
    },
    caseSensitive: {
      type: Boolean,
      default: false,
    },
    matchAll: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const agComponent = ref<HTMLElement & MarkProps | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.variant = props.variant;
      webComponent.search = props.search;
      webComponent.caseSensitive = props.caseSensitive;
      webComponent.matchAll = props.matchAll;
    };

    onMounted(async () => {
      await customElements.whenDefined('ag-mark');
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
