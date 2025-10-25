<template>
  <ag-header
    ref="agComponent"
    .sticky="sticky"
    .contentJustify="contentJustify"
    .isSkinned="isSkinned"
    v-bind="$attrs"
  >
    <span slot="logo">
      <slot name="logo"></slot>
    </span>
    <slot />
  </ag-header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, type PropType } from "vue";
import type { HeaderProps, HeaderContentJustify } from "../core/Header";
import "../core/Header"; // Registers the ag-header web component

export default defineComponent({
  name: "VueHeader",
  props: {
    sticky: {
      type: Boolean,
      default: false,
    },
    contentJustify: {
      type: String as PropType<HeaderContentJustify>,
      default: "between" as HeaderContentJustify,
    },
    isSkinned: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const agComponent = ref<(HTMLElement & HeaderProps) | null>(null);

    onMounted(async () => {
      // Ensure the web component is defined
      await customElements.whenDefined("ag-header");
    });

    return {
      agComponent,
      sticky: props.sticky,
      contentJustify: props.contentJustify,
      isSkinned: props.isSkinned,
    };
  },
});
</script>
