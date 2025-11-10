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
    <template v-if="$slots.icon">
      <span slot="icon">
        <slot name="icon" />
      </span>
    </template>
    <template v-if="$slots.actions">
      <span slot="actions">
        <slot name="actions" />
      </span>
    </template>
  </ag-empty-state>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, nextTick, type PropType } from "vue";
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
      await nextTick();

      // Manually trigger slot content detection for Vue
      // Vue's slot content might not trigger slotchange event reliably
      await nextTick();
      const webComponent = agComponent.value;
      if (webComponent) {
        const iconSlot = webComponent.shadowRoot?.querySelector('slot[name="icon"]');
        const actionsSlot = webComponent.shadowRoot?.querySelector('slot[name="actions"]');

        if (iconSlot) {
          // Force the slot change handler to run
          iconSlot.dispatchEvent(new Event("slotchange"));
        }
        if (actionsSlot) {
          // Force the slot change handler to run
          actionsSlot.dispatchEvent(new Event("slotchange"));
        }
      }
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
