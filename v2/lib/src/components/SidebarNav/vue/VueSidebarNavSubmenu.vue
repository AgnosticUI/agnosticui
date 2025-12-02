<template>
  <ag-sidebar-nav-submenu
    :open="open"
    @update:open="onOpenChange"
  >
    <slot />
  </ag-sidebar-nav-submenu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AgSidebarNavSubmenu } from "../core/SidebarNav.js";

export default defineComponent({
  name: "VueSidebarNavSubmenu",
  props: {
    open: { type: Boolean, default: false },
  },
  emits: ["update:open"],
  setup(props, { emit }) {
    const onOpenChange = (value: boolean) => {
      emit("update:open", value);
    };

    return {
      onOpenChange,
    };
  },
});
</script>
