<template>
  <ag-empty-state
    ref="agComponent"
    .bordered="bordered"
    .rounded="rounded"
    :title="title"
    :subtitle="subtitle"
    :buttonText="buttonText"
    :size="size"
    v-bind="$attrs"
  >
    <template v-if="$slots.icon">
      <span slot="icon">
        <slot name="icon" />
      </span>
    </template>
    <template v-if="$slots.actions">
      <span slot="actions">
        <slot name="actions" />
      </span>
    </template>
  </ag-empty-state>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "../core/EmptyState";

export interface VueEmptyStateProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  size?: "sm" | "md" | "lg";
  bordered?: boolean;
  rounded?: boolean;
}

const props = withDefaults(defineProps<VueEmptyStateProps>(), {
  title: "",
  subtitle: "",
  buttonText: "",
  size: "md",
  bordered: false,
  rounded: false,
});

const agComponent = ref<HTMLElement>();
</script>
