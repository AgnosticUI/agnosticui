<template>
  <ag-sidebar-nav>
    <slot />
  </ag-sidebar-nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AgSidebarNav } from "../core/SidebarNav.js";

export default defineComponent({
  name: "VueSidebarNav",
});
</script>
