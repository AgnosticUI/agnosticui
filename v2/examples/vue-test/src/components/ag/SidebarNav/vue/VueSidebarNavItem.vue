<template>
  <ag-sidebar-nav-item>
    <slot />
  </ag-sidebar-nav-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Import for side-effects to register the custom element
import "../core/SidebarNav";

export default defineComponent({
  name: "VueSidebarNavItem",
});
</script>
