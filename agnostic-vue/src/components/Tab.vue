<template>
  <div
    class="tab-content"
    v-show="title === selectedTitle"
    role="tabpanel"
    tabindex="0"
  >
    <slot />
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const selectedTitle = inject("selectedTitle");
    return {
      selectedTitle,
    };
  },
};
</script>
