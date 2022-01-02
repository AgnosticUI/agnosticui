<template>
  <div
    role="separator"
    :class="dividerClasses"
    aria-orientation="horizontal"
  >
    <div
      v-if="hasDividerContentSlot"
      :class="$style['divider-content']"
    >
      <slot name="dividerContent" />
    </div>
  </div>
</template>
<script>
export default {
  name: "AgDivider",
  props: {
    isVertical: {
      type: Boolean,
      required: false,
      default: false,
    },
    justify: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["start", "end", ""].includes(value),
    },
    size: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["small", "large", "xlarge", ""].includes(value),
    },
    type: {
      type: String,
      required: false,
      default: "",
      validator: (value) =>
        ["info", "success", "warning", "error", ""].includes(value),
    },
  },
  computed: {
    dividerClasses() {
      return {
        [this.$style["divider"]]: true,
        [this.$style["divider-vertical"]]: !!this.isVertical,
        [this.$style[`divider-justify-${this.justify}`]]: !!this.justify,
        [this.$style[`divider-${this.size}`]]: !!this.size,
        [this.$style[`divider-${this.type}`]]: !!this.type,
      };
    },
    hasDividerContentSlot() {
      return !!this.$slots.dividerContent;
    },
  },
};
</script>

<style module>
.divider {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  width: 100%;
}

.divider::before,
.divider::after {
  content: "";
  background-color: var(--agnostic-gray-mid);
  height: var(--fluid-2);
  flex-grow: 1;
}

.divider-small::before,
.divider-small::after {
  height: 1px;
}

.divider-large::before,
.divider-large::after {
  height: var(--fluid-4);
}

.divider-xlarge::before,
.divider-xlarge::after {
  height: var(--fluid-6);
}

.divider-justify-end::after,
.divider-justify-start::before {
  flex-grow: 0;
  flex-basis: 3%;
}

.divider-content {
  padding-inline-start: var(--fluid-16);
  padding-inline-end: var(--fluid-16);
}

.divider-vertical {
  height: auto;
  margin: 0 var(--fluid-16);
  width: var(--fluid-16);
  flex-direction: column;
  align-self: stretch;
}

.divider-vertical::before,
.divider-vertical::after {
  width: var(--fluid-2);
}

.divider-vertical.divider-small::before,
.divider-vertical.divider-small::after {
  width: 1px;
}

.divider-vertical.divider-large::before,
.divider-vertical.divider-large::after {
  width: var(--fluid-4);
}

.divider-vertical.divider-xlarge::before,
.divider-vertical.divider-xlarge::after {
  width: var(--fluid-6);
}

.divider-vertical .divider-content {
  padding-inline-start: var(--fluid-24);
  padding-inline-end: var(--fluid-24);

  /* Since we're vertical we need space from line above/below */
  padding-block-start: var(--fluid-6);
  padding-block-end: var(--fluid-6);
}

.divider-warning::before,
.divider-warning::after {
  background-color: var(--agnostic-warning-dark);
}

.divider-warning .divider-content {
  color: var(--agnostic-warning-dark);
}

.divider-error::before,
.divider-error::after {
  background-color: var(--agnostic-error);
}

.divider-error .divider-content {
  color: var(--agnostic-error);
}

.divider-success::before,
.divider-success::after {
  background-color: var(--agnostic-action-from);
}

.divider-success .divider-content {
  color: var(--agnostic-action-from);
}

.divider-info::before,
.divider-info::after {
  background-color: var(--agnostic-primary);
}

.divider-info .divider-content {
  color: var(--agnostic-primary);
}

</style>
