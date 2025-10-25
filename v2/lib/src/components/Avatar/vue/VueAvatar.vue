<template>
  <ag-avatar
    ref="agComponent"
    v-bind="$attrs"
  >
    <slot />
  </ag-avatar>
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
  AvatarProps,
  AvatarSize,
  AvatarShape,
  AvatarVariant,
} from "../core/Avatar";
import "../core/Avatar"; // Registers the ag-avatar web component

export default defineComponent({
  name: "VueAvatar",
  props: {
    text: { type: String, default: "" },
    imgSrc: { type: String, default: "" },
    imgAlt: { type: String, default: "" },
    size: {
      type: String as PropType<AvatarSize>,
      default: "md" as AvatarSize,
    },
    shape: {
      type: String as PropType<AvatarShape>,
      default: "circle" as AvatarShape,
    },
    variant: {
      type: String as PropType<AvatarVariant>,
      default: "default" as AvatarVariant,
    },
    ariaLabel: { type: String, default: "" },
  },
  setup(props) {
    const agComponent = ref<(HTMLElement & AvatarProps) | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.text = props.text;
      webComponent.imgSrc = props.imgSrc;
      webComponent.imgAlt = props.imgAlt;
      webComponent.size = props.size;
      webComponent.shape = props.shape;
      webComponent.variant = props.variant;
      webComponent.ariaLabel = props.ariaLabel;
    };

    onMounted(async () => {
      await customElements.whenDefined("ag-avatar");
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
