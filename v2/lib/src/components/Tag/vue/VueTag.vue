<template>
  <ag-tag
    :variant="variant"
    :shape="shape"
    .uppercase="uppercase"
    .removable="removable"
    @tag-remove="handleRemove"
    v-bind="$attrs"
  >
    <slot />
    <slot name="close" />
  </ag-tag>
</template>

<script setup lang="ts">
import type { TagProps, TagRemoveEventDetail } from "../core/Tag.js";
import "../core/Tag.js";

export interface VueTagProps extends Omit<TagProps, "onTagRemove"> {}

defineProps<VueTagProps>();

const emit = defineEmits<{
  "tag-remove": [detail: TagRemoveEventDetail];
}>();

const handleRemove = (event: Event) => {
  const removeEvent = event as CustomEvent<TagRemoveEventDetail>;
  emit("tag-remove", removeEvent.detail);
};
</script>
