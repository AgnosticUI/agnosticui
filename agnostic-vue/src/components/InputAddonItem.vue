<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AgInputAddonItem",
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

<style module>
/*
* Input addons e.g. icons inside the input
*/
.input-addon-right,
.input-addon-left {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;

  /* This allows an icon to sit in the vertical center regardless
  of if we've applied input-large or input-small */
  min-height: 100%;
}

.input-addon-left {
  left: var(--agnostic-input-side-padding);
}

.input-addon-right {
  right: var(--agnostic-input-side-padding);
}

</style>
