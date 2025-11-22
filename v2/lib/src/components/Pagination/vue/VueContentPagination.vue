<template>
  <ag-content-pagination
    ref="contentPaginationRef"
    :aria-label="ariaLabel"
    .bordered="bordered"
    @navigate="handleNavigate"
    v-bind="dynamicProps"
  >
    <!--
      Only forward slots if they're actually provided by the parent component.
      This allows the web component's default icons to show when no custom icons are provided.
      
      The 'slot' attribute is used to target the web component's named slots.
      The 'vue/no-deprecated-slot-attribute' ESLint rule is disabled because it's
      designed for Vue-to-Vue communication and doesn't recognize web component slots.
    -->
    <span
      v-if="$slots['previous-icon']"
      slot="previous-icon"
    > <!-- eslint-disable-line vue/no-deprecated-slot-attribute -->
      <slot name="previous-icon"></slot>
    </span>
    <span
      v-if="$slots['next-icon']"
      slot="next-icon"
    > <!-- eslint-disable-line vue/no-deprecated-slot-attribute -->
      <slot name="next-icon"></slot>
    </span>
    <span
      v-if="$slots['parent-icon']"
      slot="parent-icon"
    > <!-- eslint-disable-line vue/no-deprecated-slot-attribute -->
      <slot name="parent-icon"></slot>
    </span>
  </ag-content-pagination>
</template>

<script setup lang="ts">
import { ref, computed, useAttrs } from "vue";
import "../core/ContentPagination"; // Registers the ag-content-pagination web component
import type {
  ContentPaginationProps,
  NavigateEventDetail,
  ContentNavigationItem,
} from "../core/ContentPagination";

// Re-export event types
export type {
  NavigateEvent,
  NavigateEventDetail,
  ContentNavigationItem,
} from "../core/ContentPagination";

// Define props interface, omit callback props for Vue
export interface VueContentPaginationProps
  extends Omit<ContentPaginationProps, "onNavigate"> {
  previous?: ContentNavigationItem;
  next?: ContentNavigationItem;
  parent?: ContentNavigationItem;
  bordered?: boolean;
}

const attrs = useAttrs();
const dynamicProps = computed(() => {
  const result: Record<string, any> = { ...attrs };
  if (props.previous) {
    result.previous = props.previous;
  }
  if (props.next) {
    result.next = props.next;
  }
  if (props.parent) {
    result.parent = props.parent;
  }
  return result;
});

// Define props with defaults
const props = withDefaults(defineProps<VueContentPaginationProps>(), {
  ariaLabel: "content navigation",
  bordered: false,
});

// Define emits
const emit = defineEmits<{
  // Custom event - emit detail payload
  navigate: [detail: NavigateEventDetail];
}>();

// Template ref
const contentPaginationRef = ref<HTMLElement>();

// Event handler - emit detail payload for custom event
const handleNavigate = (event: Event) => {
  const detail = (event as CustomEvent<NavigateEventDetail>).detail;
  emit("navigate", detail);
};
</script>
