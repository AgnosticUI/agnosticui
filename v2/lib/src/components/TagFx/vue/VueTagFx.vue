<template>
  <ag-tag-fx
    ref="agComponent"
    :variant="variant"
    :shape="shape"
    .uppercase="uppercase"
    .removable="removable"
    :fx="fx"
    :fx-speed="fxSpeed"
    :fx-ease="fxEase"
    .fxDisabled="fxDisabled"
    @tag-remove="handleRemove"
    v-bind="$attrs"
  >
    <slot />
    <slot name="close" />
  </ag-tag-fx>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TagVariant, TagShape, TagRemoveEventDetail } from "../../Tag/core/Tag";
import type { TagFx } from "../core/TagFx";
import "../core/TagFx";

interface VueTagFxProps {
  variant?: TagVariant;
  shape?: TagShape;
  uppercase?: boolean;
  removable?: boolean;
  fx?: string;
  fxSpeed?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fxEase?:
    | 'ease'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'bounce'
    | 'spring-sm'
    | 'spring-md'
    | 'spring-lg';
  fxDisabled?: boolean;
}

const props = withDefaults(defineProps<VueTagFxProps>(), {
  variant: '',
  shape: '',
  uppercase: false,
  removable: false,
  fxSpeed: 'md',
  fxEase: 'ease',
  fxDisabled: false,
});

const emit = defineEmits<{
  "tag-remove": [detail: TagRemoveEventDetail];
}>();

const agComponent = ref<InstanceType<typeof TagFx> | null>(null);

const handleRemove = (event: Event) => {
  const removeEvent = event as CustomEvent<TagRemoveEventDetail>;
  emit("tag-remove", removeEvent.detail);
};
</script>
