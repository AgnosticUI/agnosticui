<style module>
:root {
  --agnostic-default-header-color: #333333;
  --agnostic-default-header-nav-spacing: 32px;
}

.header-nav a {
  color: var(--agnostic-header-color, var(--agnostic-default-header-color));
  text-decoration: none;
}

.header-nav ul {
  margin: 0;
  padding: 0;
}

.header-nav li {
  display: inline-block;
}

.header-nav li:not(:last-child) {
  margin-right: var(
    --agnostic-header-nav-spacing,
    var(--agnostic-default-header-nav-spacing)
  );
}
</style>
<template>
  <nav :class="classes">
    <slot />
  </nav>
</template>
<script>
export default {
  name: "agnosticui-header-nav",
  props: {
    css: {
      type: String,
      default: "",
    },
  },
  computed: {
    classes() {
      return {
        [this.$style["header-nav"]]: true,
        [`${this.css}`]: !!this.css,
      };
    },
  },
};
</script>