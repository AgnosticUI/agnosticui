<template>
  <span :class="iconClasses">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: "ag-icon",
  props: {
    size: {
      type: Number,
      require: false,
      default: 18,
      validator: (value) =>
        [14, 16, 18, 20, 24, 32, 36, 40, 48, 56, 64].includes(value),
    },
    type: {
      type: String,
      require: false,
      default: "",
      validator: (value) => {
        const valid = ["warning", "error", "info", "success", ""].includes(
          value
        );
        return valid;
      },
    },
  },
  computed: {
    iconClasses() {
      return {
        [this.$style.icon]: true,
        [this.$style[`icon-${this.type}`]]: !!this.type,
        [this.$style[`icon-${this.size}`]]: !!this.size,
      };
    },
  },
};
</script>
<style module>
.icon-base,
.icon {
  display: inline-flex;
  margin: auto;
  text-align: center;
  /* Ensures no "stretching" of icons to reach 100% of container's width */
  max-width: 100%;
  /* Ensure SVGs don't have click events -- typically we want enclosing button to handle */
  pointer-events: none;
  user-select: none;
}

.icon-skin,
.icon {
  fill: currentcolor;
  width: var(--fluid-16);
  height: var(--fluid-16);
}

.icon-14 {
  width: var(--fluid-14);
  height: var(--fluid-14);
}
.icon-16 {
  width: var(--fluid-16);
  height: var(--fluid-16);
}
.icon-18 {
  width: var(--fluid-18);
  height: var(--fluid-18);
}
.icon-20 {
  width: var(--fluid-20);
  height: var(--fluid-20);
}
.icon-24 {
  width: var(--fluid-24);
  height: var(--fluid-24);
}
.icon-32 {
  width: var(--fluid-32);
  height: var(--fluid-32);
}
.icon-36 {
  width: var(--fluid-36);
  height: var(--fluid-36);
}
.icon-40 {
  width: var(--fluid-40);
  height: var(--fluid-40);
}
.icon-48 {
  width: var(--fluid-48);
  height: var(--fluid-48);
}
.icon-56 {
  width: var(--fluid-56);
  height: var(--fluid-56);
}
.icon-64 {
  width: var(--fluid-64);
  height: var(--fluid-64);
}
.icon-info {
  color: var(--agnostic-primary);
}
.icon-success {
  color: var(--agnostic-action);
}
.icon-warning {
  color: var(--agnostic-warning-border-accent);
}
.icon-error {
  color: var(--agnostic-error);
}
</style>
