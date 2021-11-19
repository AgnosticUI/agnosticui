<style module>
/* Goes on the <ul> */
.header-nav {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 960px) {
  .header-nav {
    flex-direction: row;
  }
}

</style>
<template>
  <nav>
    <ul :class="classes">
      <slot />
    </ul>
  </nav>
</template>
<script>
export default {
  name: "AgHeaderNav",
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
