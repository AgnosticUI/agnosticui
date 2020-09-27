<style module>
.header-nav-item {
  display: inline-block;
}
.header-nav-item:not(:last-child) {
  margin-right: initial;
}
.header-nav-item :global(a) {
  color: var(--agnosticui-header-color, var(--agnosticui-default-header-color));
  text-decoration: none;
}

@media (min-width: 960px) {
  .header-nav-item:not(:last-child) {
    margin-right: var(--agnosticui-header-nav-spacing, var(--agnosticui-default-header-nav-spacing));
  }
}
</style>
<template>
  <li :class="classes">
    <slot />
  </li>
</template>
<script>
export default {
  name: "agnosticui-header-nav-item",
  props: {
    css: {
      type: String,
      default: "",
    },
  },
  computed: {
    classes() {
      return {
        [this.$style["header-nav-item"]]: true,
        [`${this.css}`]: !!this.css,
      };
    },
  },
};
</script>