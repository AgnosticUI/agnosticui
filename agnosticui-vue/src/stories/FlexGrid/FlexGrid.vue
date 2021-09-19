<template>
  <component
    :is="tagName"
    :class="classNames"
  >
    <slot />
  </component>
</template>
<script>
import getClass from "./classNames";
export default {
  name: "ag-flexgrid",
  computed: {
    classNames() {
      const klasses = [this.customClasses, this.containerClass];
      return klasses;
    },
    containerClass() {
      const containerKlass = getClass("flexgrid-container");
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
