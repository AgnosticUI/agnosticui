<template>
  <ag-sidebar-nav-popover-submenu>
    <slot />
  </ag-sidebar-nav-popover-submenu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Import for side-effects to register the custom element
import "../core/SidebarNav";

export default defineComponent({
  name: "VueSidebarNavPopoverSubmenu",
});
</script>
