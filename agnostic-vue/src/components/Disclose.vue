<template>
  <details
    :class="discloseClasses"
    :open="isOpen"
  >
    <summary :class="$style['disclose-title']">
      {{ title }}
    </summary>
    <div :class="$style['disclose-panel']">
      <slot />
    </div>
  </details>
</template>
<script>
export default {
  name: "AgDisclose",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    },
    isBackground: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    discloseClasses() {
      return {
        [this.$style["disclose"]]: true,
        [this.$style[`disclose-bg`]]: !!this.isBackground,
      };
    },
  },
};
</script>
<style module>
.disclose {
  margin-block-end: var(--fluid-4);
}

.disclose-title {
  display: block;
  cursor: pointer;
  font-weight: 600;
  padding: var(--fluid-8) var(--fluid-12);

  /* Required to position the icon absolutely */
  position: relative;
  color: inherit;
  transition: color var(--agnostic-timing-slow);
}

.disclose-panel {
  font-weight: 400;
  padding: var(--fluid-16);
}

.disclose-title,
.disclose-panel {
  margin: 0;
}

/* stylelint-disable-next-line selector-pseudo-element-no-unknown */
.disclose-title::webkit-details-marker {
  display: none;
}

.disclose-bg .disclose-title {
  background-color: var(--agnostic-gray-light);
}

.disclose-title:focus {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

.disclose-title::after {
  color: var(--agnostic-gray-dark);
  content: "\203A";
  position: absolute;
  right: var(--fluid-12);
  top: 0;
  bottom: 0;

  /* Chevron thinning :) */
  font-size: var(--fluid-32);
  line-height: 1;
  font-weight: 100;
  transition: transform var(--agnostic-timing-slow);
  transform: rotate(0);
}

@media (prefers-reduced-motion), (update: slow) {
  .disclose-title,
  .disclose-title:focus,
  .disclose-title::after {
    transition: none;
  }
}

.disclose[open] > .disclose-title::after {
  transform: rotate(90deg);
}

</style>
