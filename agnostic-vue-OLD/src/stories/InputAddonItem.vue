<style module>
/*
* Input addons e.g. icons inside the input
*/
.input-addon-right,
.input-addon-left {
  /* Maybe I should have defined another css prop for addon adjustments but trying
  to avoid any extra variable explosion there--will need to keep an eye on this */
  --addon-padding: calc(var(--agnostic-input-side-padding) * 1.5);

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.input-addon-left {
  left: var(--addon-padding);
}

.input-addon-right {
  right: var(--addon-padding);
}

</style>
<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ag-input-addon-item",
  props: {
    css: {
      type: String,
      default: "",
    },
    addonLeft: {
      type: Boolean,
      default: false,
    },
    addonRight: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        [this.$style["input-addon-left"]]: !!this.addonLeft,
        [this.$style["input-addon-right"]]: !!this.addonRight,
        [`${this.css}`]: !!this.css,
      };
    },
  },
};
</script>
