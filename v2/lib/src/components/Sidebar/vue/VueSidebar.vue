<template>
  <ag-sidebar
    :open="open"
    :collapsed="collapsed"
    :position="position"
    :aria-label="ariaLabel"
    :breakpoint="breakpoint"
    :variant="variant"
    :no-transition="noTransition"
    :width="width"
    @ag-sidebar-toggle="onToggle"
    @ag-sidebar-collapse="onCollapse"
    @ag-sidebar-breakpoint-change="onBreakpointChange"
  >
    <slot />
    <slot name="ag-header" />
    <slot name="ag-toggle-button" />
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
  AgSidebarBreakpointChangeEvent,
} from "../core/_Sidebar.js";

export default defineComponent({
  name: "VueSidebar",
  props: {
    open: { type: Boolean, default: false },
    collapsed: { type: Boolean, default: false },
    position: { type: String as PropType<"left" | "right">, default: "left" },
    ariaLabel: { type: String, default: "Navigation" },
    breakpoint: { type: Number, default: 1024 },
    variant: {
      type: String as PropType<"default" | "bordered" | "elevated">,
      default: "default",
    },
    noTransition: { type: Boolean, default: false },
    width: { type: String, default: undefined },
  },
  emits: ["update:open", "update:collapsed", "breakpointChange"],
  setup(props, { emit }) {
    const onToggle = (event: AgSidebarToggleEvent) => {
      emit("update:open", event.detail.open);
    };

    const onCollapse = (event: AgSidebarCollapseEvent) => {
      emit("update:collapsed", event.detail.collapsed);
    };

    const onBreakpointChange = (event: AgSidebarBreakpointChangeEvent) => {
      emit("breakpointChange", event.detail);
    };

    return {
      onToggle,
      onCollapse,
      onBreakpointChange,
    };
  },
});
</script>
