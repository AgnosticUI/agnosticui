<template>
  <ag-avatar-group
    ref="agComponent"
    v-bind="$attrs"
  >
    <slot />
  </ag-avatar-group>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "../core/Avatar"; // Registers the ag-avatar-group web component

export default defineComponent({
  name: "VueAvatarGroup",
  setup() {
    const agComponent = ref<HTMLElement | null>(null);

    return { agComponent };
  },
});
</script>
