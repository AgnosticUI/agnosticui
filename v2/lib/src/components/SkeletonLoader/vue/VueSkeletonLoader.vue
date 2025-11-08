<template>
  <ag-skeleton
    ref="agComponent"
    :variant="variant"
    :effect="effect"
    :intensity="intensity"
    :width="width"
    :height="height"
    v-bind="$attrs"
  >
    <slot />
  </ag-skeleton>
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
  SkeletonProps,
  SkeletonVariant,
  SkeletonEffect,
  SkeletonIntensity,
} from "../core/SkeletonLoader";
import "../core/SkeletonLoader"; // Registers the ag-skeleton web component

export default defineComponent({
  name: "VueSkeleton",
  props: {
    variant: {
      type: String as PropType<SkeletonVariant>,
      default: "text" as SkeletonVariant,
    },
    effect: {
      type: String as PropType<SkeletonEffect>,
      default: "pulse" as SkeletonEffect,
    },
    intensity: {
      type: String as PropType<SkeletonIntensity>,
      default: "light" as SkeletonIntensity,
    },
    width: {
      type: String,
      default: undefined,
    },
    height: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const agComponent = ref<(HTMLElement & SkeletonProps) | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.variant = props.variant;
      webComponent.effect = props.effect;
      webComponent.intensity = props.intensity;
      webComponent.width = props.width;
      webComponent.height = props.height;
    };

    onMounted(async () => {
      await customElements.whenDefined("ag-skeleton");
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
