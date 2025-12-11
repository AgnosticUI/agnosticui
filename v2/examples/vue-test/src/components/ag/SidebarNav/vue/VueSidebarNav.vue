<template>
  <ag-sidebar-nav>
    <slot />
  </ag-sidebar-nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Import for side-effects to register the custom element
import "../core/SidebarNav";

export default defineComponent({
  name: "VueSidebarNav",
});
</script>
