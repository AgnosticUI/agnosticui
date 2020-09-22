<template>
  <component :is="tagName" :class="classNames">
    <slot />
  </component>
</template>
<script>
import getClass from "./classNames";
export default {
  name: "agnostic-flexgrid",
  computed: {
    classNames() {
      const klasses = [this.customClasses, this.containerClass];
      // console.log("in classNames() -- klasses: ", klasses);
      return klasses;
    },
    containerClass() {
      const containerKlass = getClass("flexgrid-container");
      // console.log("in containerClass() -- containerKlass: ", containerKlass);
      return containerKlass;
    },
  },
  props: {
    customClasses: {
      type: String,
      default: "",
    },
    tagName: {
      type: String,
      default: "div",
    },
  },
};
</script>
