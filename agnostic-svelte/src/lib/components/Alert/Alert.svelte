<style>
.alert-base,
.alert {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
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
  color: var(--agnostic-action-from);
}

.alert-success-icon {
  color: var(--agnostic-action-from);
  margin-inline-end: var(--fluid-8);

  /* Ensures our icon doesn't flex grow or shrink */
  flex: 0 0 var(--fluid-24);
}

.alert-success.alert-border-top {
  border-top-color: var(--agnostic-action-from);
}

.alert-success.alert-border-left {
  border-left-color: var(--agnostic-action-from);
}

.alert-success.alert-border-bottom {
  border-bottom-color: var(--agnostic-action-from);
}

.alert-success.alert-border-right {
  border-right-color: var(--agnostic-action-from);
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

<script>
  export let isAnimationFadeIn = true;
  export let isAnimationSlideUp = false;
  export let isToast = false;

  export let isRounded = false;
  export let isBorderAll = false;
  export let isBorderLeft = false;
  export let isBorderRight = false;
  export let isBorderTop = false;
  export let isBorderBottom = false;
  export let isBlockEnd = false;
  export let type = "";
  let typeClass;
  switch (type) {
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

  const ariaAtomicValue = isToast ? true : undefined;

  const ariaLiveValue = () => {
    let ariaLiveValue;
    if (isToast && type === "error") {
      ariaLiveValue = "assertive";
    } else if (isToast) {
      ariaLiveValue = "polite";
    } else {
      ariaLiveValue = undefined;
    }
    return ariaLiveValue;
  };

  const classes = [
    "alert",
    typeClass,
    isRounded ? "alert-rounded" : "",
    isBorderAll ? "alert-border-all" : "",
    isBorderLeft ? "alert-border-left" : "",
    isBorderRight ? "alert-border-right" : "",
    isBorderTop ? "alert-border-top" : "",
    isBorderBottom ? "alert-border-bottom" : "",
    isBlockEnd ? "alert-end" : "",
    isAnimationFadeIn && !isAnimationSlideUp ? "fade-in" : "",
    !isAnimationFadeIn && isAnimationSlideUp ? "slide-up" : "",
    isAnimationFadeIn && isAnimationSlideUp ? "slide-up-fade-in" : "",
  ]
    .filter((klass) => klass.length)
    .join(" ");
</script>

<div
  class={classes}
  role="alert"
  aria-atomic={ariaAtomicValue}
  aria-live={ariaLiveValue()}
>
  <slot name="icon" />
  <slot />
</div>
