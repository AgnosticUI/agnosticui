<template>
  <ag-pagination
    ref="paginationRef"
    .bordered="bordered"
    .firstLastNavigation="firstLastNavigation"
    .navigationLabels="navigationLabels"
    :current="current"
    :total-pages="totalPages"
    :offset="offset"
    :justify="justify"
    :aria-label="ariaLabel"
    @page-change="handlePageChange"
    v-bind="$attrs"
  >
    <slot />
  </ag-pagination>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "../core/Pagination";
import type {
  PaginationProps,
  PageChangeEventDetail,
  NavigationLabels,
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
  firstLastNavigation: false,
  navigationLabels: () => ({
    first: "First",
    previous: "Previous",
    next: "Next",
    last: "Last",
  }),
});

// Define emits
const emit = defineEmits<{
  "page-change": [detail: PageChangeEventDetail];
  "update:current": [value: number];
}>();

// Template ref
const paginationRef = ref<HTMLElement>();

// Event handler
const handlePageChange = (event: Event) => {
  const detail = (event as CustomEvent<PageChangeEventDetail>).detail;
  emit("page-change", detail);
  emit("update:current", detail.page);
};
</script>
