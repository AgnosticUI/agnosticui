<template>
  <component
    :is="currentComponentType"
    :type="type === 'faux' ? false : type"
    :class="classes"
    :disabled="isButtonDisabled"
    @click="emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useCssModule } from "vue";
import { ButtonSize, ButtonType } from "./ButtonApi";

export interface ButtonProps {
  mode?: string;
  isDisabled?: boolean;
  isBlank?: boolean;
  isLink?: boolean;
  isBlock?: boolean;
  isCapsule?: boolean;
  isBordered?: boolean;
  isGrouped?: boolean;
  isCircle?: boolean;
  isRounded?: boolean;
  isSkinned?: boolean;
  type?: ButtonType;
  size?: ButtonSize;
  css?: string;
}

interface Emits {
  (e: "click"): void;
}

const emit = defineEmits(["click"]);

const props = withDefaults(defineProps<ButtonProps>(), {
  primary: false,
  isSkinned: true,
  type: "button",
  size: "",
  css: "",
});

const styles = useCssModule();

const currentComponentType = computed(() => {
  // `faux` will result in a div that "looks like" a button.
  return props.type === "faux" ? "div" : "button";
});

const isButtonDisabled = computed(() => {
  return props.isDisabled ? true : undefined;
});

const classes = computed(() => {
  return {
    [styles.btn]: props.isSkinned,
    [styles["btn-base"]]: !props.isSkinned,
    [styles["disabled"]]: props.isDisabled,
    [styles["btn-bordered"]]: props.isBordered,
    [styles["btn-capsule"]]: props.isCapsule,
    [styles["btn-grouped"]]: props.isGrouped,
    [styles["btn-blank"]]: props.isBlank,
    [styles["btn-link"]]: props.isLink,
    [styles["btn-block"]]: props.isBlock,
    [styles["btn-rounded"]]: props.isRounded,
    [styles["btn-circle"]]: props.isCircle,
    [styles["btn-primary"]]: props.mode === "primary",
    [styles["btn-secondary"]]: props.mode === "secondary",
    [`${props.css}`]: !!props.css,
    [styles[`btn-${props.size}`]]: props.size,
  };
});
</script>

<style module>
.btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  appearance: none;
  cursor: pointer;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: var(--agnostic-timing-medium);
}

.btn {
  /* TODO test this fallback override syntax is correct */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  appearance: none;
  cursor: pointer;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: var(--agnostic-timing-medium);
}

.btn-skin,
.btn {
  color: var(--agnostic-btn-font-color, var(--agnostic-dark));
  background-color: var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));
  border-color: var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));

  /* seems like a reasonable default as chrome picks `outset` which results in a weird 3d effect */
  border-style: solid;
  border-width: var(--agnostic-btn-border-size, 1px);
  font-family: var(--agnostic-btn-font-family, var(--agnostic-font-family-body));
  font-weight: var(--agnostic-btn-font-weight, 400);
  font-size: var(--agnostic-btn-font-size, 1rem);

  /* this can be overriden, but it might mess with the balance of the button heights across variants */
  line-height: var(--agnostic-line-height, var(--fluid-20, 1.25rem));
  padding-block-start: var(--agnostic-vertical-pad, 0.5rem);
  padding-block-end: var(--agnostic-vertical-pad, 0.5rem);
  padding-inline-start: var(--agnostic-side-padding, 0.75rem);
  padding-inline-end: var(--agnostic-side-padding, 0.75rem);
  text-decoration: none;
  text-align: center;
  outline: none;
}

.btn:visited {
  color: var(--agnostic-btn-font-color, var(--agnostic-dark));
}

.btn:hover {
  opacity: 85%;
  text-decoration: none;
}

.btn:active {
  text-shadow: 0 1px 0 rgb(255 255 255 / 30%);
  text-decoration: none;
  transition-duration: 0s;
  box-shadow: inset 0 1px 3px rgb(0 0 0 / 20%);
}

.btn:focus {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;

  /* In order for the focused element's box-shadow to appear above its siblings we need to
  establish a new stacking context: https://stackoverflow.com/a/28042700 */
  isolation: isolate;
}

/*
* Disabled State
*
* The disabled state uses the class .disabled, is-disabled,
* and the form attribute disabled="disabled".
* The use of !important is only added because this is a state
* that must be applied to all buttons when in a disabled state.
*/
.btn.disabled,
.btn:disabled {
  top: 0 !important;
  background: var(--agnostic-btn-disabled-bg, var(--agnostic-gray-mid-dark)) !important;
  text-shadow: 0 1px 1px rgb(255 255 255 / 100%) !important;

  /* primary, secondary, natural, all look same when disabled; and we don't want to
  have an inadvertant looking blue primary border when disabled so it's transparent */
  border-color: transparent;
  color: var(--agnostic-btn-disabled-color, var(--agnostic-gray-dark)) !important;
  cursor: default !important;
  appearance: none !important;
  box-shadow: none !important;
  opacity: 80% !important;
}

.btn-primary {
  background-color: var(--agnostic-btn-primary, var(--agnostic-primary));
  border-color: var(--agnostic-btn-primary, var(--agnostic-primary));
  color: var(--agnostic-btn-primary-color, var(--agnostic-light));
}

/* Border and font is primary. When hovered, we invert with primary background and white font */
.btn-primary.btn-bordered {
  color: var(--agnostic-btn-primary, var(--agnostic-primary));
}

.btn-primary.btn-bordered:hover,
.btn-primary.btn-bordered:focus {
  background-color: var(--agnostic-btn-primary, var(--agnostic-primary));
  color: var(--agnostic-btn-primary-color, var(--agnostic-light));
}

.btn-primary:visited {
  color: var(--agnostic-btn-primary-color, var(--agnostic-light));
}

.btn-secondary {
  background-color: var(--agnostic-btn-secondary, var(--agnostic-secondary));
  border-color: var(--agnostic-btn-secondary, var(--agnostic-secondary));
  color: var(--agnostic-btn-secondary-color, var(--agnostic-light));
}

/* Border and font is secondary. When hovered, we invert with secondary background and white font */
.btn-secondary.btn-bordered {
  color: var(--agnostic-btn-secondary, var(--agnostic-secondary));
}

.btn-secondary.btn-bordered:hover,
.btn-secondary.btn-bordered:focus {
  background-color: var(--agnostic-btn-secondary, var(--agnostic-secondary));
  color: var(--agnostic-btn-secondary-color, var(--agnostic-light));
}

.btn-secondary:visited {
  color: var(--agnostic-btn-secondary-color, var(--agnostic-light));
}

/*
/**
  * Border Buttons
  */
.btn-bordered {
  border-width: 1px;
  background: transparent;
}

/**
  * Sizes
  */
.btn-large {
  font-size: calc(var(--agnostic-btn-font-size, 1rem) + 0.25rem);
  height: 3rem;
  line-height: 3rem;
  padding: 0 3rem;
}

.btn-small {
  font-size: calc(var(--agnostic-btn-font-size, 1rem) - 0.25rem);
  height: 2rem;
  line-height: 2rem;
  padding: 0 2rem;
}

/**
  * Rounded
  */
.btn-rounded {
  border-radius: var(--agnostic-btn-radius, var(--agnostic-radius, 0.25rem));
}

.btn-pill {
  border-radius: 200px;
}

/*
  * Size Adjustment for equal height & width buttons
  *
  * Remove padding
  */
.btn-circle {
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0 !important;
}

.btn-circle-large {
  font-size: calc(var(--agnostic-btn-font-size, 1rem) + 0.25rem);
  width: 3rem;
  height: 3rem;
}

.btn-circle-small {
  font-size: calc(var(--agnostic-btn-font-size, 1rem) - 0.25rem);
  width: 2rem;
  height: 2rem;
}

/**
 * Button Block (stacked)
 */
.btn-block {
  width: 100%;
}

/* This is a utility class used if you literally want to stack block buttons one after another.
Apply this class to the nth-of-type(2) onwards to ensure the borders line up properly. */
.btn-block-following {
  margin-block-start: -1px;
}

.btn-grouped {
  border-radius: var(--agnostic-btn-radius, var(--agnostic-radius, 0.25rem));
}

.btn-grouped:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-inline-end: -1px;
}

.btn-grouped:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-capsule {
  --padding-side: calc(var(--agnostic-side-padding, 0.75rem) * 1.5);

  border-radius: var(--agnostic-radius-capsule);
  padding-inline-start: var(--padding-side);
  padding-inline-end: var(--padding-side);
}

@media (prefers-reduced-motion), (update: slow) {
  .btn,
  .btn:focus {
    transition-duration: 0.001ms !important;
  }
}

/**
 * Invisible buttons. Generally used for a Cancel or icon button that behaves like a button,
 * semantically and for a11y, but, does so without all the typical "button chrome" behind it.
 */
:is(.btn-link, .btn-blank) {
  font-family: var(--agnostic-btn-font-family, var(--agnostic-font-family-body));
  font-size: var(--agnostic-btn-font-size, 1rem);
  background-color: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  transition: none;
}

/* Since blank buttons can be used for things like input addons we don't want to go crazy
on the side padding. As such, these have a good bit less then regular buttons. */
.btn-blank {
  --agnostic-btn-blank-side-padding: var(--btn-blank-side-padding, 0.25rem);

  padding-inline-start: var(--agnostic-btn-blank-side-padding);
  padding-inline-end: var(--agnostic-btn-blank-side-padding);
}

/* A button blank with link color text */
.btn-link {
  color: var(--agnostic-btn-primary, var(--agnostic-primary));
}

.btn-link:hover {
  cursor: pointer;
}
</style>
