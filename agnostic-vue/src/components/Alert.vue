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

<script setup lang="ts">
import { computed, ref, useCssModule } from "vue";

export interface AlertProps {
  type?: "warning" | "error" | "info" | "success" | "dark" | "";
  isBorderAll?: boolean;
  isBorderTop?: boolean;
  isBorderBottom?: boolean;
  isBorderLeft?: boolean;
  isBorderRight?: boolean;
  isRounded?: boolean;
  isBlockEnd?: boolean;
  isAnimationFadeIn?: boolean;
  isAnimationSlideUp?: boolean;
  isToast?: boolean;
}

const styles = useCssModule();

defineEmits(["input", "update:modelValue"]);

const props = withDefaults(defineProps<AlertProps>(), {
  type: "",
});

const ariaAtomicValue = computed((): boolean | undefined => {
  if (props.isToast) {
    return true;
  }
  return undefined;
});

const ariaLiveValue = computed(
  (): "assertive" | "polite" | "off" | undefined => {
    let ariaLiveValue;
    if (props.isToast && props.type === "error") {
      ariaLiveValue = "assertive";
    } else if (props.isToast) {
      ariaLiveValue = "polite";
    } else {
      ariaLiveValue = undefined;
    }
    return ariaLiveValue;
  }
);

const svgClasses = computed(() => {
  return props.type
    ? [styles[`alert-${props.type}-icon`], styles["alert-icon"]].join(" ")
    : styles["alert-icon"];
});

const alertClasses = computed(() => {
  let typeClass;
  switch (props.type) {
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
    [styles["fade-in"]]: props.isAnimationFadeIn && !props.isAnimationSlideUp,
    [styles["slide-up"]]: props.isAnimationSlideUp && !props.isAnimationFadeIn,
    [styles["slide-up-fade-in"]]:
      props.isAnimationSlideUp && props.isAnimationFadeIn,
    [styles["alert"]]: true,
    [styles[typeClass]]: typeClass.length,
    [styles["alert-rounded"]]: props.isRounded,
    [styles["alert-border-all"]]: props.isBorderAll,
    [styles["alert-border-left"]]: props.isBorderLeft,
    [styles["alert-border-right"]]: props.isBorderRight,
    [styles["alert-border-top"]]: props.isBorderTop,
    [styles["alert-toast-shadow"]]: props.isToast,
    [styles["alert-border-bottom"]]: props.isBorderBottom,
    [styles["alert-end"]]: props.isBlockEnd,
  };
});
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
  background: var(--agnostic-dark);
}

.alert-dark .alert-icon,
.alert-dark {
  color: var(--agnostic-light);
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
