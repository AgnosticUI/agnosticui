<template>
  <ag-empty-state
    ref="agComponent"
    :title="title"
    :subtitle="subtitle"
    :button-text="buttonText"
    :size="size"
    :bordered="bordered || undefined"
    :rounded="rounded || undefined"
    v-bind="$attrs"
  >
    <!-- Using native slot attribute for web component slot forwarding -->
    <!-- See: https://vuejs.org/guide/extras/web-components#slots -->
    <slot
      name="icon"
      slot="icon"
    />
    <slot
      name="actions"
      slot="actions"
    />
  </ag-empty-state>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, type PropType } from "vue";
import type { AgEmptyState } from "../core/_EmptyState";
import "../core/EmptyState"; // Registers the ag-empty-state web component

export default defineComponent({
  name: "VueEmptyState",
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      default: "",
    },
    size: {
      type: String as PropType<"sm" | "md" | "lg">,
      default: "md" as "sm" | "md" | "lg",
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const agComponent = ref<(HTMLElement & AgEmptyState) | null>(null);

    onMounted(async () => {
      // Ensure the web component is defined
      await customElements.whenDefined("ag-empty-state");
    });

    return {
      agComponent,
      title: props.title,
      subtitle: props.subtitle,
      buttonText: props.buttonText,
      size: props.size,
      bordered: props.bordered,
      rounded: props.rounded,
    };
  },
});
</script>
