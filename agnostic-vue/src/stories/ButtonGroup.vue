<template>
  <div
    :class="classes"
    role="group"
    :aria-label="ariaLabel"
  >
    <slot />
  </div>
</template>

<style module>
/**
 * Button Groups
 */
.btn-group {
  display: inline-flex;
  flex-direction: row;
}

.btn-group > button {
  border-radius: var(--agnostic-btn-radius, var(--agnostic-radius, 0.25rem));
}
.btn-group > button:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-inline-end: -1px;
}
.btn-group > button:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

</style>

<script>
export default {
  name: "ag-button-group",
  props: {
    ariaLabel: {
      type: String,
      default: "",
      required: true,
    },
    css: {
      type: String,
      default: "",
    },
  },
  computed: {
    classes() {
      return {
        [this.$style["btn-group"]]: true,
        [`${this.css}`]: this.css,
      };
    },
  },
};
</script>
