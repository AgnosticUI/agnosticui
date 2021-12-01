<template>
  <span :class="tagClasses">
    <slot />
  </span>
</template>
<script>
export default {
  name: "AgTag",
  props: {
    isSkinned: {
      type: Boolean,
      required: false,
      default: true,
    },
    isUppercase: {
      type: Boolean,
      required: false,
      default: false,
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
    shape: {
      type: String,
      required: false,
      default: "",
      validator: (value) => {
        const valid = ["pill", "circle", "round", "square", ""].includes(value);
        return valid;
      },
    },
  },
  computed: {
    tagClasses() {
      return {
        [this.$style["tag"]]: !!this.isSkinned,
        [this.$style["tag-base"]]: !this.isSkinned,
        [this.$style[`tag-${this.type}`]]: !!this.type,
        [this.$style[`tag-${this.shape}`]]: !!this.shape,
        [this.$style["tag-upper"]]: !!this.isUppercase,
      };
    },
  },
};
</script>
<style module>
.tag-base,
.tag {
  display: inline-flex;
  justify-content: center;
  white-space: nowrap;
}

.tag-skin,
.tag {
  background-color: var(--agnostic-gray-light);
  color: var(--agnostic-dark);
  font-size: var(--fluid-12);
  line-height: var(--agnostic-line-height, var(--fluid-20, 1.25rem));
  padding-block-start: var(--fluid-2);
  padding-block-end: var(--fluid-2);
  padding-inline-start: var(--fluid-8);
  padding-inline-end: var(--fluid-8);
}

.tag-info {
  background: var(--agnostic-primary-light);
  color: var(--agnostic-primary-dark);
}

.tag-warning {
  background: var(--agnostic-warning-light);
  color: var(--agnostic-warning-dark);
}

.tag-error {
  background: var(--agnostic-error-light);
  color: var(--agnostic-error-dark);
}

.tag-success {
  background: var(--agnostic-action-light);
  color: var(--agnostic-action-from);
}

.tag-upper {
  font-size: var(--fluid-10);
  text-transform: uppercase;
}

.tag-circle {
  border-radius: 50%;
}

.tag-round {
  border-radius: var(--agnostic-radius);
}

.tag-pill {
  border-radius: 200px;
}

</style>
