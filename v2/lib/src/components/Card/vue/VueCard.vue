<template>
  <ag-card
    ref="agComponent"
    :skinned="skinned || undefined"
    :stacked="stacked || undefined"
    :shadow="shadow || undefined"
    :animated="animated || undefined"
    :rounded="rounded"
    :variant="variant"
    v-bind="$attrs"
  >
    <slot
      name="header"
      slot="header"
    />
    <slot />
    <slot
      name="footer"
      slot="footer"
    />
  </ag-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, type PropType } from "vue";
import type { CardProps, CardVariant, CardRounded } from "../core/Card";
import "../core/Card"; // Registers the ag-card web component

export default defineComponent({
  name: "VueCard",
  props: {
    skinned: {
      type: Boolean,
      default: true,
    },
    stacked: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: String as PropType<CardRounded>,
      default: "" as CardRounded,
    },
    variant: {
      type: String as PropType<CardVariant>,
      default: "" as CardVariant,
    },
  },
  setup(props, { emit }) {
    const agComponent = ref<(HTMLElement & CardProps) | null>(null);

    onMounted(async () => {
      // Ensure the web component is defined
      await customElements.whenDefined("ag-card");
      // TODO: Set up event listeners to emit Vue events if needed
      // if (agComponent.value) {
      //   agComponent.value.addEventListener('event-name', (e) => emit('eventName', e.detail));
      // }
    });

    return {
      agComponent,
      skinned: props.skinned,
      stacked: props.stacked,
      shadow: props.shadow,
      animated: props.animated,
      rounded: props.rounded,
      variant: props.variant,
    };
  },
});
</script>
