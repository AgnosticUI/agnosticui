<style module>
.header-nav {
  --agnosticui-default-header-color: #333333;
  --agnosticui-default-header-nav-spacing: 32px;
}

.header-nav a {
  color: var(--agnosticui-header-color, var(--agnosticui-default-header-color));
  text-decoration: none;
}

.header-nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-nav li {
  display: inline-block;
}

.header-nav li:not(:last-child) {
  margin-right: initial;
}

@media (min-width: 960px) {
  .header-nav ul {
    flex-direction: row;
  }

  .header-nav li:not(:last-child) {
    margin-right: var(
      --agnosticui-header-nav-spacing,
      var(--agnosticui-default-header-nav-spacing)
    );
  }
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