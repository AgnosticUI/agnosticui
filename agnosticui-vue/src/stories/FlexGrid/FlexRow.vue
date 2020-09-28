<template>
  <component :is="tagName" :class="classNames">
    <slot />
  </component>
</template>
<script>
import getClass from "./classNames";
import { ViewportSizeTypeProp } from "./types";
const rowKeys = [
  "start",
  "center",
  "end",
  "top",
  "middle",
  "bottom",
  "around",
  "between",
];

export default {
  name: "agnostic-flexrow",
  computed: {
    classNames() {
      const modifiers = [this.customClasses, getClass("row")];
      for (let i = 0; i < rowKeys.length; ++i) {
        const key = rowKeys[i];
        const value = this[key];
        if (value) {
          modifiers.push(getClass(`${key}-${value}`));
        }
      }

      if (this.reverse) {
        modifiers.push(getClass("reverse"));
      }
      return modifiers;
    },
  },
  props: {
    // see https://roylee0704.github.io/react-flexbox-grid/
    reverse: {
      type: Boolean,
      default: false,
    },
    start: ViewportSizeTypeProp,
    center: ViewportSizeTypeProp,
    end: ViewportSizeTypeProp,
    top: ViewportSizeTypeProp,
    middle: ViewportSizeTypeProp,
    bottom: ViewportSizeTypeProp,
    around: ViewportSizeTypeProp,
    between: ViewportSizeTypeProp,
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
