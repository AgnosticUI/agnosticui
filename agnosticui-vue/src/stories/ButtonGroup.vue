<template>
  <div :class="classes" role="group" :aria-label="ariaLabel">
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
  border-radius: var(
    --agnosticui-btn-radius,
    var(--agnosticui-default-btn-radius)
  );
}
.btn-group > button:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: -1px;
}
.btn-group > button:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

</style>

<script>
export default {
  name: "agnostic-button-group",
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
