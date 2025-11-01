<template>
  <ag-tag
    ref="agComponent"
    :variant="variant"
    :shape="shape"
    :uppercase="uppercase"
    v-bind="$attrs"
  >
    <slot />
    <slot name="close" />
  </ag-tag>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TagShape, TagVariant } from "../core/Tag";
import type { AgTag } from "../core/Tag"; // For stricter ref typing
import "../core/Tag"; // Registers <ag-tag> on wrapper load

const props = defineProps<{
  variant?: TagVariant;
  shape?: TagShape;
  uppercase?: boolean;
}>();

const agComponent = ref<InstanceType<typeof AgTag> | null>(null);
</script>
