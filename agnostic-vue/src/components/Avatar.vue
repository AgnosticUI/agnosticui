<template>
  <span
    :class="avatarClasses"
    :data-text="text || null"
  >
    <img
      v-if="imgUrl"
      :src="imgUrl"
      :class="avatarImage"
      alt=""
    >
    <slot />
  </span>
</template>
<script>
export default {
  name: "AgAvatar",
  props: {
    isSkinned: {
      type: Boolean,
      default: true,
      required: false,
    },
    isRounded: {
      type: Boolean,
      default: false,
      required: false,
    },
    isSquare: {
      type: Boolean,
      default: false,
      required: false,
    },
    isTransparent: {
      type: Boolean,
      default: false,
      required: false,
    },
    imgUrl: {
      type: String,
      required: false,
      default: "",
    },
    text: {
      type: String,
      required: false,
      default: "",
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
      validator: (value) => {
        const valid = ["warning", "error", "info", "success", ""].includes(
          value
        );
        return valid;
      },
    },
  },
  computed: {
    avatarImage() {
      return {
        [this.$style["avatar-image"]]: true,
      };
    },
    avatarClasses() {
      return {
        [this.$style["avatar"]]: !!this.isSkinned,
        [this.$style["avatar-base"]]: !this.isSkinned,
        [this.$style["avatar-square"]]: !!this.isSquare,
        [this.$style["avatar-rounded"]]: !!this.isRounded,
        [this.$style["avatar-transparent"]]: !!this.isTransparent,
        [this.$style[`avatar-${this.type}`]]: !!this.type,
        [this.$style[`avatar-${this.size}`]]: !!this.size,
      };
    },
  },
};
</script>

<style module>
.avatar,
.avatar-base {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.avatar,
.avatar-skin {
  width: var(--fluid-40);
  height: var(--fluid-40);
  max-width: 100%;
  background: var(--agnostic-gray-extra-light);
  border-radius: 50%;
}

.avatar-square {
  border-radius: 0;
}

.avatar-rounded {
  border-radius: var(--agnostic-radius);
}

.avatar-small {
  font-size: var(--fluid-12);
  width: var(--fluid-32);
  height: var(--fluid-32);
}

.avatar-large {
  width: var(--fluid-48);
  height: var(--fluid-48);
}

.avatar-xlarge {
  font-size: var(--fluid-20);
  width: var(--fluid-64);
  height: var(--fluid-64);
}

.avatar::before {
  content: attr(data-text);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-info {
  background: var(--agnostic-primary-light);
  color: var(--agnostic-primary-dark);
}

.avatar-warning {
  background: var(--agnostic-warning-light);
  color: var(--agnostic-warning-dark);
}

.avatar-success {
  background: var(--agnostic-action-light);
  color: var(--agnostic-action-dark);
}

.avatar-error {
  background: var(--agnostic-error-light);
  color: var(--agnostic-error-dark);
}

/* Must come after avatar-success, avatatar-warning, etc. so specificity is higher */
.avatar-transparent {
  background: transparent;
}

.avatar-group {
  display: flex;
  flex-direction: row;

  /* TBD -- should we stack these on mobile? */
}

/* Helpful for Vue / Svelte SFC where the .avatar child will not be a global
but CSS Modules class. Unfortunately, it means those have to be spans though.
This should be ok -- it's our Avatar.vue and Avatar.svelte, for example, that
respectively generate the <span> tag in their own templates (not the consumer) */
.avatar-group > span,
.avatar-group .avatar {
  border: 2px solid white;
}

.avatar-group > span:not(:first-child),
.avatar-group .avatar:not(:first-child) {
  margin-inline-start: calc(-1 * var(--fluid-10));
}

</style>
