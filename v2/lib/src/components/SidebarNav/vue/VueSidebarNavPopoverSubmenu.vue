<template>
  <ag-sidebar-nav-popover-submenu>
    <slot />
  </ag-sidebar-nav-popover-submenu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AgSidebarNavPopoverSubmenu } from "../core/SidebarNav.js";

export default defineComponent({
  name: "VueSidebarNavPopoverSubmenu",
});
</script>
