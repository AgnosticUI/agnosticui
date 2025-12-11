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
// Import for side-effects to register the custom element
import "../core/SidebarNav";

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
