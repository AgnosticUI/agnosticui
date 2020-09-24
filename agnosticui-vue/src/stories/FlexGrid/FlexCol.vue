<template>
  <component :is="tagName" :class="classNames">
    <slot />
  </component>
</template>

<script>
import getClass from "./classNames";
import { ColumnSizeType, ViewportSizeTypeProp } from "./types";

const isInteger = (value) => {
  return (
    typeof value === "number" && isFinite(value) && Math.floor(value) === value
  );
};

const classMap = {
  xs: "col-xs",
  sm: "col-sm",
  md: "col-md",
  lg: "col-lg",
  xl: "col-xl",
  xsOffset: "col-xs-offset",
  smOffset: "col-sm-offset",
  mdOffset: "col-md-offset",
  lgOffset: "col-lg-offset",
  xlOffset: "col-xl-offset",
  auto: "auto",
};

export default {
  name: "agnostic-flexcol",
  props: {
    /** xs - number of units when viewport is "extra small" */
    xs: { type: ColumnSizeType },
    /** sm - number of units when viewport is "small" */
    sm: { type: ColumnSizeType },
    /** md - number of units when viewport is "medium" */
    md: { type: ColumnSizeType },
    /** lg - number of units when viewport is "large" */
    lg: { type: ColumnSizeType },
    /** xl - number of units when viewport is "extra large" */
    xl: { type: ColumnSizeType },
    /** xsOffset - number of units to offset when viewport is "extra small" */
    xsOffset: { type: Number },
    /** smOffset - number of units to offset when viewport is "small" */
    smOffset: { type: Number },
    /** mdOffset - number of units to offset when viewport is "medium" */
    mdOffset: { type: Number },
    /** lgOffset - number of units to offset when viewport is "large" */
    lgOffset: { type: Number },
    /** xlOffset - number of units to offset when viewport is "extra large" */
    xlOffset: { type: Number },
    /** auto - boolean. Useful if row has had gutters applied and you want the
     * columns to grow/shrink against those gutters. Cards is an example use case.
     */
    auto: { type: Boolean },
    /** first - Forces a column to appear first */
    first: ViewportSizeTypeProp,
    /** last - Forces a column to appear last */
    last: ViewportSizeTypeProp,
    /** className - additional custom class to use */
    customClasses: { type: String, default: "" },
    /** tagName - tag to use defaults to div */
    tagName: { type: String, default: "div" },
  },
  computed: {
    classNames() {
      const props = this.$props;
      const extraClasses = [];

      if (this.customClasses) {
        extraClasses.push(this.customClasses);
      }

      if (this.auto) {
        extraClasses.push(getClass("auto"));
      }

      if (this.first) {
        extraClasses.push(getClass("first-" + this.first));
      }

      if (this.last) {
        extraClasses.push(getClass("last-" + this.last));
      }

      // Loop ALL props (so we reject if prop wasn't passed in)
      const extraKlasses = Object.keys(props)
        .filter((key) => classMap[key])
        .map((key) => {
          const propValue = props[key];
          // Reject since prop wasn't passed in w/a truthy value
          if (!propValue) {
            return false;
          }
          return getClass(
            isInteger(propValue)
              ? classMap[key] + "-" + propValue
              : classMap[key]
          );
        })
        // filter back out falsy (rejected propValue's from above)
        .filter((key) => key)
        .concat(extraClasses);

      return extraKlasses;
    },
  },
};
</script>
