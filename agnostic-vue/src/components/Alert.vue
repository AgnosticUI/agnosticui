<template>
  <div
    :class="alertClasses"
    role="alert"
    :aria-atomic="ariaAtomicValue"
    :aria-live="ariaLiveValue"
  >
    <slot name="icon" />
    <slot />
  </div>
</template>

<script>
export default {
  name: "AgAlert",
  props: {
    type: {
      type: String,
      required: false,
      default: "",
      validator: (value) =>
        ["warning", "error", "info", "success", "dark", ""].includes(value),
    },
    isBorderAll: {
      type: Boolean,
      required: false,
      default: false,
    },

    isBorderTop: {
      type: Boolean,
      required: false,
      default: false,
    },
    isBorderBottom: {
      type: Boolean,
      required: false,
      default: false,
    },
    isBorderLeft: {
      type: Boolean,
      required: false,
      default: false,
    },
    isBorderRight: {
      type: Boolean,
      required: false,
      default: false,
    },
    isRounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    isBlockEnd: {
      type: Boolean,
      required: false,
      default: false,
    },
    isAnimationFadeIn: {
      type: Boolean,
      required: false,
      default: true,
    },
    isAnimationSlideUp: {
      type: Boolean,
      required: false,
      default: false,
    },
    isToast: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    ariaAtomicValue() {
      if (this.isToast) {
        return true;
      }
      return undefined;
    },
    ariaLiveValue() {
      let ariaLiveValue;
      if (this.isToast && this.type === "error") {
        ariaLiveValue = "assertive";
      } else if (this.isToast) {
        ariaLiveValue = "polite";
      } else {
        ariaLiveValue = undefined;
      }
      return ariaLiveValue;
    },
    svgClasses() {
      return this.type
        ? [
            this.$style[`alert-${this.type}-icon`],
            this.$style["alert-icon"],
          ].join(" ")
        : this.$style["alert-icon"];
    },
    alertClasses() {
      let typeClass;
      switch (this.type) {
        case "warning":
          typeClass = "alert-warning";
          break;
        case "dark":
          typeClass = "alert-dark";
          break;
        case "error":
          typeClass = "alert-error";
          break;
        case "info":
          typeClass = "alert-info";
          break;
        case "success":
          typeClass = "alert-success";
          break;
        default:
          typeClass = "";
      }
      return {
        [this.$style["fade-in"]]:
          this.isAnimationFadeIn && !this.isAnimationSlideUp,
        [this.$style["slide-up"]]:
          this.isAnimationSlideUp && !this.isAnimationFadeIn,
        [this.$style["slide-up-fade-in"]]:
          this.isAnimationSlideUp && this.isAnimationFadeIn,
        [this.$style["alert"]]: true,
        [this.$style[typeClass]]: typeClass.length,
        [this.$style["alert-rounded"]]: this.isRounded,
        [this.$style["alert-border-all"]]: this.isBorderAll,
        [this.$style["alert-border-left"]]: this.isBorderLeft,
        [this.$style["alert-border-right"]]: this.isBorderRight,
        [this.$style["alert-border-top"]]: this.isBorderTop,
        [this.$style["alert-border-bottom"]]: this.isBorderBottom,
        [this.$style["alert-end"]]: this.isBlockEnd,
      };
    },
  },
};
</script>
<style module>
.alert-base,
.alert {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
}

.alert-end {
  justify-content: flex-end;
}

.alert-skin,
.alert {
  padding: var(--agnostic-side-padding);
  background: var(--agnostic-gray-light);
}

.alert-icon {
  color: var(--agnostic-gray-mid-dark);
  margin-inline-end: var(--fluid-8);

  /* Ensures our icon doesn't flex grow or shrink */
  flex: 0 0 var(--fluid-24);
}

.alert-border-top {
  border-top: var(--fluid-8) solid var(--agnostic-gray-mid-dark);
}

.alert-border-left {
  border-left: var(--fluid-8) solid var(--agnostic-gray-mid-dark);
}

.alert-border-bottom {
  border-bottom: var(--fluid-8) solid var(--agnostic-gray-mid-dark);
}

.alert-border-right {
  border-right: var(--fluid-8) solid var(--agnostic-gray-mid-dark);
}

.alert-border-all {
  border: var(--fluid-2) solid var(--agnostic-gray-mid-dark);
}

.alert-rounded {
  border-radius: var(--agnostic-alert-radius, var(--agnostic-radius, 0.25rem));
}

.alert-dark {
  color: var(--agnostic-light);
  background: rgb(48 48 48);
}

.alert-warning {
  background: var(--agnostic-warning-light);
  color: var(--agnostic-warning-dark);
}

.alert-warning-icon {
  color: var(--agnostic-warning-border-accent);
  margin-inline-end: var(--fluid-8);

  /* Ensures our icon doesn't flex grow or shrink */
  flex: 0 0 var(--fluid-24);
}

.alert-warning.alert-border-top {
  border-top-color: var(--agnostic-warning-border-accent);
}

.alert-warning.alert-border-left {
  border-left-color: var(--agnostic-warning-border-accent);
}

.alert-warning.alert-border-bottom {
  border-bottom-color: var(--agnostic-warning-border-accent);
}

.alert-warning.alert-border-right {
  border-right-color: var(--agnostic-warning-border-accent);
}

.alert-warning.alert-border-all {
  border: var(--fluid-2) solid var(--agnostic-warning-border);
}

.alert-info {
  background: var(--agnostic-primary-light);
  color: var(--agnostic-primary-dark);
}

.alert-info-icon {
  color: var(--agnostic-primary-dark);
  margin-inline-end: var(--fluid-8);

  /* Ensures our icon doesn't flex grow or shrink */
  flex: 0 0 var(--fluid-24);
}

.alert-info.alert-border-top {
  border-top-color: var(--agnostic-primary-dark);
}

.alert-info.alert-border-left {
  border-left-color: var(--agnostic-primary-dark);
}

.alert-info.alert-border-bottom {
  border-bottom-color: var(--agnostic-primary-dark);
}

.alert-info.alert-border-right {
  border-right-color: var(--agnostic-primary-dark);
}

.alert-info.alert-border-all {
  border: var(--fluid-2) solid var(--agnostic-primary-border);
}

.alert-error {
  background: var(--agnostic-error-light);
  color: var(--agnostic-error-dark);
}

.alert-error-icon {
  color: var(--agnostic-error-dark);
  margin-inline-end: var(--fluid-8);

  /* Ensures our icon doesn't flex grow or shrink */
  flex: 0 0 var(--fluid-24);
}

.alert-error.alert-border-top {
  border-top-color: var(--agnostic-error-dark);
}

.alert-error.alert-border-left {
  border-left-color: var(--agnostic-error-dark);
}

.alert-error.alert-border-bottom {
  border-bottom-color: var(--agnostic-error-dark);
}

.alert-error.alert-border-right {
  border-right-color: var(--agnostic-error-dark);
}

.alert-error.alert-border-all {
  border: var(--fluid-2) solid var(--agnostic-error-border);
}

.alert-success {
  background: var(--agnostic-action-light);
  color: var(--agnostic-action-dark);
}

.alert-success-icon {
  color: var(--agnostic-action-dark);
  margin-inline-end: var(--fluid-8);

  /* Ensures our icon doesn't flex grow or shrink */
  flex: 0 0 var(--fluid-24);
}

.alert-success.alert-border-top {
  border-top-color: var(--agnostic-action-dark);
}

.alert-success.alert-border-left {
  border-left-color: var(--agnostic-action-dark);
}

.alert-success.alert-border-bottom {
  border-bottom-color: var(--agnostic-action-dark);
}

.alert-success.alert-border-right {
  border-right-color: var(--agnostic-action-dark);
}

.alert-success.alert-border-all {
  border: var(--fluid-2) solid var(--agnostic-action-border);
}

/**
 * This is not in toast.css because it's actually applied on the Alert child element
 * conditionally if the Alert is a Toast alert :-)
 */
.alert-toast-shadow {
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 6%), 0 3px 8px 0 rgb(0 0 0 / 7%), 0 6px 18px 0 rgb(0 0 0 / 6%);
}

.fade-in {
  animation: fade-in var(--agnostic-timing-fast) both;
}

.slide-up {
  animation: slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both;
}

/**
 * Cannot use two separate CSS classes with animation: foo, bar
 * as the later class will overwrite the first (so this combines)
 */
.slide-up-fade-in {
  animation:
    fade-in var(--agnostic-timing-fast) both,
    slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both;
}

@keyframes fade-in {
  from {
    opacity: 0%;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(10%);
  }
}

@media (prefers-reduced-motion), (update: slow) {
  .slide-up-fade-in,
  .fade-in,
  .slide-up {
    transition-duration: 0.001ms !important;
  }
}

</style>
