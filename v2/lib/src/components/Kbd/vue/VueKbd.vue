<template>
  <ag-kbd
    ref="agComponent"
    .bordered="bordered"
    .background="background"
    :variant="variant"
    :size="size"
    v-bind="$attrs"
  >
    <slot />
  </ag-kbd>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { KbdProps } from "../core/Kbd.js";
import "../core/Kbd.js";

withDefaults(defineProps<KbdProps>(), {
  variant: "default",
  bordered: true,
  background: false,
  size: "md",
});

const agComponent = ref<HTMLElement>();
</script>
