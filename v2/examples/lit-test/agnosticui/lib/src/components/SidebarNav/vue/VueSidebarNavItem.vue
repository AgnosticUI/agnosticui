<template>
  <ag-sidebar-nav-item>
    <slot />
  </ag-sidebar-nav-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AgSidebarNavItem } from "../core/SidebarNav.js";

export default defineComponent({
  name: "VueSidebarNavItem",
});
</script>
