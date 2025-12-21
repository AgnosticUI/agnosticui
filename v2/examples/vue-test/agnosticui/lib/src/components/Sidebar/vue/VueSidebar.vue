<template>
  <ag-sidebar
    .open="open"
    .collapsed="collapsed"
    :position="position"
    :aria-label="ariaLabel"
    :variant="variant"
    .noTransition="noTransition"
    :width="width"
    .disableCompactMode="disableCompactMode"
    .showMobileToggle="showMobileToggle"
    :mobile-toggle-position="mobileTogglePosition"
    .showHeaderToggle="showHeaderToggle"
    @ag-sidebar-toggle="onToggle"
    @ag-sidebar-collapse="onCollapse"
  >
    <slot />
    <slot name="ag-header" />
    <slot name="ag-header-start" />
    <slot name="ag-header-end" />
    <slot name="ag-header-toggle" />
    <slot name="ag-toggle-icon" />
    <slot name="ag-footer" />
  </ag-sidebar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { AgSidebar } from "../core/Sidebar.js";
import type {
  AgSidebarToggleEvent,
  AgSidebarCollapseEvent,
} from "../core/_Sidebar.js";

export default defineComponent({
  name: "VueSidebar",
  props: {
    open: { type: Boolean, default: false },
    collapsed: { type: Boolean, default: false },
    position: { type: String as PropType<"left" | "right">, default: "left" },
    ariaLabel: { type: String, default: "Navigation" },
    variant: {
      type: String as PropType<"default" | "bordered" | "elevated">,
      default: "default",
    },
    noTransition: { type: Boolean, default: false },
    width: { type: String, default: undefined },
    disableCompactMode: { type: Boolean, default: false },
    showMobileToggle: { type: Boolean, default: true },
    mobileTogglePosition: {
      type: String as PropType<
        "top-left" | "top-right" | "bottom-left" | "bottom-right"
      >,
      default: "top-left",
    },
    showHeaderToggle: { type: Boolean, default: false },
  },
  emits: ["update:open", "update:collapsed"],
  setup(props, { emit }) {
    const onToggle = (event: AgSidebarToggleEvent) => {
      emit("update:open", event.detail.open);
    };

    const onCollapse = (event: AgSidebarCollapseEvent) => {
      emit("update:collapsed", event.detail.collapsed);
    };

    return {
      onToggle,
      onCollapse,
    };
  },
});
</script>
