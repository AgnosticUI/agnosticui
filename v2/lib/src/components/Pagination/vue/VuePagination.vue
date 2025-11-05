<template>
  <ag-pagination
    ref="paginationRef"
    :current="current"
    :total-pages="totalPages"
    :offset="offset"
    :justify="justify"
    :aria-label="ariaLabel"
    :bordered="bordered || null"
    :first-last-navigation="firstLastNavigation"
    :navigationLabels="navigationLabels"
    @page-change="handlePageChange"
    v-bind="$attrs"
  >
    <slot />
  </ag-pagination>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "../core/Pagination"; // Registers the ag-pagination web component
import type {
  PaginationProps,
  PageChangeEventDetail,
} from "../core/Pagination";

// Re-export event types
export type {
  PageChangeEvent,
  PageChangeEventDetail,
} from "../core/Pagination";

// Define props interface, omit callback props for Vue
export interface VuePaginationProps
  extends Omit<PaginationProps, "onPageChange"> {
  current?: number;
}

// Define props with defaults
const props = withDefaults(defineProps<VuePaginationProps>(), {
  current: 1,
  totalPages: 1,
  offset: 2,
  justify: "",
  ariaLabel: "pagination",
  bordered: false,
  firstLastNavigation: true,
});

// Define emits
const emit = defineEmits<{
  // Custom event - emit detail payload
  "page-change": [detail: PageChangeEventDetail];
  // v-model support
  "update:current": [value: number];
}>();

// Template ref
const paginationRef = ref<HTMLElement>();

// Event handler - emit detail payload for custom event
const handlePageChange = (event: Event) => {
  const detail = (event as CustomEvent<PageChangeEventDetail>).detail;
  emit("page-change", detail);
  // Also emit for v-model support
  emit("update:current", detail.page);
};
</script>
