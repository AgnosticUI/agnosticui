<template>
  <ag-tag
    ref="agComponent"
    :variant="variant"
    :shape="shape"
    :uppercase="uppercase || undefined"
    :removable="removable || undefined"
    @tag-remove="handleRemove"
    v-bind="$attrs"
  >
    <slot />
    <slot name="close" />
  </ag-tag>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  TagProps,
  TagRemoveEventDetail
} from "../core/Tag";
import type { AgTag } from "../core/Tag"; // For stricter ref typing
import "../core/Tag"; // Registers <ag-tag> on wrapper load

// Omit callback props (Vue uses emits instead)
export interface VueTagProps extends Omit<TagProps, "onTagRemove"> {}

// Define props
defineProps<VueTagProps>();

// Define emits for all events
const emit = defineEmits<{
  "tag-remove": [detail: TagRemoveEventDetail];
}>();

const agComponent = ref<InstanceType<typeof AgTag> | null>(null);

// Bridge handler for custom event
const handleRemove = (event: Event) => {
  const removeEvent = event as CustomEvent<TagRemoveEventDetail>;
  emit("tag-remove", removeEvent.detail);
};
</script>
