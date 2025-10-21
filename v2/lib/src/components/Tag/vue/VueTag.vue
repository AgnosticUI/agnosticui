<template>
  <ag-tag
    ref="agComponent"
    :variant="variant"
    :shape="shape"
    :is-uppercase="isUppercase"
  >
    <slot />
    <slot name="close" />
  </ag-tag>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TagShape, TagVariant } from "../core/_Tag";
import type { AgTag } from "../core/_Tag"; // For stricter ref typing

const props = defineProps<{
  variant?: TagVariant;
  shape?: TagShape;
  isUppercase?: boolean;
}>();

const agComponent = ref<InstanceType<typeof AgTag> | null>(null);
</script>
