<template>
  <ag-content-pagination
    ref="contentPaginationRef"
    :previous="previous"
    :next="next"
    :parent="parent"
    :aria-label="ariaLabel"
    :bordered="bordered"
    @navigate="handleNavigate"
  >
    <!--
      We are using the 'slot' attribute here to pass a named slot to the underlying
      'ag-content-pagination' web component. The 'slot' attribute is the standard HTML
      way to target a web component's slot from the outside.
      The 'vue/no-deprecated-slot-attribute' ESLint rule is disabled because it is
      designed for Vue-to-Vue component communication and does not distinguish
      that we are targeting a native web component.
      The nested <slot> tag is used to pass through the content that this Vue
      wrapper component receives in its own named slot. This 'span-wrapping'
      pattern is a common workaround in Vue for forwarding named slots to web
      components.
      See: https://github.com/orgs/vuejs/discussions/12875
      https://github.com/vuejs/vue/issues/6553
    -->
    <span slot="previous-icon"> <!-- eslint-disable-line vue/no-deprecated-slot-attribute -->
      <slot name="previous-icon"></slot>
    </span>
    <span slot="next-icon"> <!-- eslint-disable-line vue/no-deprecated-slot-attribute -->
      <slot name="next-icon"></slot>
    </span>
    <span slot="parent-icon"> <!-- eslint-disable-line vue/no-deprecated-slot-attribute -->
      <slot name="parent-icon"></slot>
    </span>
  </ag-content-pagination>
</template>

<script setup lang="ts">
import { ref } from "vue";
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
