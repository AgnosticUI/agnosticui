<template>
  <ag-tag
    ref="agComponent"
    :variant="variant"
    :shape="shape"
    :isUppercase="isUppercase"
    v-bind="$attrs"
  >
    <slot />
    <slot name="close" />
  </ag-tag>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TagShape, TagVariant } from "../core/_Tag";
import type { AgTag } from "../core/_Tag"; // For stricter ref typing
import "agnosticui-core/tag"; // Registers <ag-tag> on wrapper load

const props = defineProps<{
  variant?: TagVariant;
  shape?: TagShape;
  isUppercase?: boolean;
}>();

const agComponent = ref<InstanceType<typeof AgTag> | null>(null);
</script>
