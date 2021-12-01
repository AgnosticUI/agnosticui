<template>
  <span :class="iconClasses">
    <slot />
  </span>
</template>
<script>
export default {
  name: "AgIcon",
  props: {
    isSkinned: {
      type: Boolean,
      required: false,
      default: true,
    },
    size: {
      type: Number,
      required: false,
      default: 18,
      validator: (value) =>
        [14, 16, 18, 20, 24, 32, 36, 40, 48, 56, 64].includes(value),
    },
    type: {
      type: String,
      required: false,
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
        ["icon-base"]: !this.isSkinned,
        ["icon"]: !!this.isSkinned,
        [`icon-${this.type}`]: !!this.type,
        [`icon-${this.size}`]: !!this.size,
      };
    },
  },
};
</script>
<style>
.icon-base > svg,
.icon > svg {
  display: inline-flex;
  text-align: center;

  /* Ensures no "stretching" of icons to reach 100% of container's width */
  max-width: 100%;

  /* Ensure SVGs don't have click events -- typically we want enclosing button to handle */
  pointer-events: none;
  user-select: none;
}

.icon-skin,
/* We need to make both the span and svg same height (span > svg) */
.icon,
.icon > svg {
  width: var(--fluid-16);
  height: var(--fluid-16);
}

.icon > svg {
  fill: currentColor;
}

.icon-14,
.icon-14 > svg {
  width: var(--fluid-14);
  height: var(--fluid-14);
}

.icon-16,
.icon-16 > svg {
  width: var(--fluid-16);
  height: var(--fluid-16);
}

.icon-18,
.icon-18 > svg {
  width: var(--fluid-18);
  height: var(--fluid-18);
}

.icon-20,
.icon-20 > svg {
  width: var(--fluid-20);
  height: var(--fluid-20);
}

.icon-24,
.icon-24 > svg {
  width: var(--fluid-24);
  height: var(--fluid-24);
}

.icon-32,
.icon-32 > svg {
  width: var(--fluid-32);
  height: var(--fluid-32);
}

.icon-36,
.icon-36 > svg {
  width: var(--fluid-36);
  height: var(--fluid-36);
}

.icon-40,
.icon-40 > svg {
  width: var(--fluid-40);
  height: var(--fluid-40);
}

.icon-48,
.icon-48 > svg {
  width: var(--fluid-48);
  height: var(--fluid-48);
}

.icon-56,
.icon-56 > svg {
  width: var(--fluid-56);
  height: var(--fluid-56);
}

.icon-64,
.icon-64 > svg {
  width: var(--fluid-64);
  height: var(--fluid-64);
}

.icon-info > svg {
  color: var(--agnostic-primary);
}

.icon-success > svg {
  color: var(--agnostic-action);
}

.icon-warning > svg {
  color: var(--agnostic-warning-border-accent);
}

.icon-error > svg {
  color: var(--agnostic-error);
}

</style>
