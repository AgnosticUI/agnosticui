<template>
  <component :is="tagName" :class="classNames">
    <slot />
  </component>
</template>
<script>
import getClass from "./classNames";
import { GutterSizeTypeProp, ViewportSizeTypeProp } from "./types";
const rowKeys = [
  "start",
  "center",
  "end",
  "top",
  "middle",
  "bottom",
  "around",
  "between",
  "gutter",
];

export default {
  name: "agnostic-flexrow",
  computed: {
    classNames() {
      const modifiers = [this.customClasses, getClass("row")];
      for (let i = 0; i < rowKeys.length; ++i) {
        const key = rowKeys[i];
        console.log("key: ", key);
        const value = this[key];
        console.log("value: ", value);
        if (value) {
          console.log(
            "In value conditional. getClass returns: ",
            getClass(`${key}-${value}`)
          );
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
    gutter: GutterSizeTypeProp,
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
