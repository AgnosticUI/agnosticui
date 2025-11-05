<template>
  <ag-pagination
    ref="paginationRef"
    :current="current"
    :total-pages="totalPages"
    :offset="offset"
    :justify="justify"
    :aria-label="ariaLabel"
    :navigationLabels="navigationLabels"
    @page-change="handlePageChange"
    v-bind="dynamicProps"
  >
    <slot />
  </ag-pagination>
</template>

<script setup lang="ts">
import { ref, computed, useAttrs } from "vue";
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

const attrs = useAttrs();
const dynamicProps = computed(() => {
  const result: Record<string, any> = { ...attrs };

  // Only add these props when they're explicitly true
  if (props.bordered) {
    result.bordered = true;
  }
  if (props.firstLastNavigation) {
    result.firstLastNavigation = true;
  }
  console.log("result: ", result);
  return result;
});

// Define props with defaults
const props = withDefaults(defineProps<VuePaginationProps>(), {
  current: 1,
  totalPages: 1,
  offset: 2,
  justify: "",
  ariaLabel: "pagination",
  bordered: false,
  firstLastNavigation: false,
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
