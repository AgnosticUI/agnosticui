<template>
  <ag-card
    ref="agComponent"
    .isSkinned="isSkinned"
    .isStacked="isStacked"
    .isShadow="isShadow"
    .isAnimated="isAnimated"
    .isRounded="isRounded"
    .variant="variant"
  >
    <slot name="header" slot="header" />
    <slot />
    <slot name="footer" slot="footer" />
  </ag-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, type PropType } from 'vue';
import type { CardProps, CardVariant } from '../core/_Card';
import '../core/Card'; // Registers the ag-card web component

export default defineComponent({
  name: 'VueCard',
  props: {
    isSkinned: {
      type: Boolean,
      default: true,
    },
    isStacked: {
      type: Boolean,
      default: false,
    },
    isShadow: {
      type: Boolean,
      default: false,
    },
    isAnimated: {
      type: Boolean,
      default: false,
    },
    isRounded: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String as PropType<CardVariant>,
      default: '' as CardVariant,
    },
  },
  setup(props, { emit }) {
    const agComponent = ref<HTMLElement & CardProps | null>(null);

    onMounted(async () => {
      // Ensure the web component is defined
      await customElements.whenDefined('ag-card');
      // TODO: Set up event listeners to emit Vue events if needed
      // if (agComponent.value) {
      //   agComponent.value.addEventListener('event-name', (e) => emit('eventName', e.detail));
      // }
    });

    return {
      agComponent,
      isSkinned: props.isSkinned,
      isStacked: props.isStacked,
      isShadow: props.isShadow,
      isAnimated: props.isAnimated,
      isRounded: props.isRounded,
      variant: props.variant,
    };
  },
});
</script>
