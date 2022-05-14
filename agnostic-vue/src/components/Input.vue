<template>
  <div class="w-100">
    <label
      :class="labelClasses"
      :for="id"
    >
      {{ label }}
    </label>
    <textarea
      v-if="type == 'textarea'"
      :id="id"
      :class="inputClasses"
      v-bind="$attrs"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event?.target as HTMLTextAreaElement).value)"
      :disabled="isInputDisabled"
    />
    <div
      v-else-if="hasLeftAddon || hasRightAddon"
      :class="addonContainerClasses"
    >
      <slot name="addonLeft" />
      <input
        :id="id"
        :class="inputClasses"
        v-bind="$attrs"
        :type="type"
        :disabled="isInputDisabled"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
      >
      <slot name="addonRight" />
    </div>
    <input
      v-else
      :id="id"
      :class="inputClasses"
      v-bind="$attrs"
      :type="type"
      :disabled="isInputDisabled"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
    >
    <span
      v-if="isInvalid"
      :class="invalidClasses"
      role="status"
      aria-live="polite"
    >
      {{ invalidText }}
    </span>
    <span
      v-else-if="helpText"
      :class="helpClasses"
    >{{ helpText }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useCssModule } from "vue";

export interface InputProps {
  modelValue?: string;
  label: string;
  id: string;
  placeholder?: string;
  labelCss?: string;
  css?: string;
  helpText?: string;
  invalidText?: string;
  isInvalid?: boolean;
  hasLeftAddon?: boolean;
  hasRightAddon?: boolean;
  isInline?: boolean;
  isDisabled?: boolean;
  isSkinned?: boolean;
  isRounded?: boolean;
  isUnderlined?: boolean;
  isUnderlinedWithBackground?: boolean;
  isLabelHidden?: boolean;
  size?: "small" | "large" | "";
  value?: string | number;
  type?:
    | "text"
    | "textarea"
    | "email"
    | "search"
    | "password"
    | "tel"
    | "number"
    | "url"
    | "month"
    | "time"
    | "week"
    | "date"
    | "datetime-local"
    | "color";
}

const styles = useCssModule();

defineEmits(["input", "update:modelValue"]);

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: "",
  size: "",
  value: "",
  type: "text",
  isSkinned: true,
});

const isInputDisabled = computed(() => {
  return props.isDisabled ? true : undefined;
});

const helpClasses = computed(() => {
  return {
    [styles["field-help"]]: !props.size,
    [styles[`field-help-${props.size}`]]: props.size,
  };
});

const loaderClasses = computed(() => {
  return {
    [styles["loader"]]: true,
    [styles[`loader-${props.size}`]]: !!props.size,
  };
});

const invalidClasses = computed(() => {
  return {
    [styles["field-error"]]: !props.size,
    [styles[`field-error-${props.size}`]]: props.size,
  };
});

const addonContainerClasses = computed(() => {
  return {
    [styles["input-addon-container"]]: true,
  };
});

const inputClasses = computed(() => {
  return {
    [styles["input"]]: props.isSkinned,
    [styles["input-base"]]: !props.isSkinned,
    [styles["input-rounded"]]: props.isRounded,
    [styles["input-underlined"]]: props.isUnderlined,
    [styles["input-has-left-addon"]]: props.hasLeftAddon,
    [styles["input-has-right-addon"]]: props.hasRightAddon,
    [styles["input-error"]]: props.isInvalid,
    [styles["input-inline"]]: props.isInline,
    [styles["input-underlined-bg"]]: props.isUnderlinedWithBackground,
    [`${props.css}`]: !!props.css,
    [styles[`input-${props.size}`]]: props.size,
  };
});

const labelClasses = computed(() => {
  return {
    [styles["label"]]: true,
    [styles["label-error"]]: props.isInvalid,
    [styles["label-inline"]]: props.isInline,
    [styles[`label-${props.size}`]]: props.size,
    ["screenreader-only"]: props.isLabelHidden,
    [`${props.labelCss}`]: !!props.labelCss,
  };
});
</script>
<style module>
.input-base,
.input {
  /* Note this cannot be user-select: none else mobile safari won't accept input:
  https://stackoverflow.com/questions/49889003/cannot-write-into-input-field-on-safari/49901069
   */
  user-select: initial;
  appearance: none;
  box-sizing: border-box;

  /* Use the same color for the cursor */
  caret-color: currentColor;
}

.label,
.label-base {
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: inherit;
}

/* Electing to scope these as opposed to doing :root level definitions */
.field-help,
.field-help-large,
.field-help-small,
.field-error,
.field-error-large,
.field-error-small,
.label-skin,
.label,
.input-addon-container,
.input-small,
.input-large,
.input-skin,
.input-underlined,
.input-underlined-bg,
.input {
  color: var(--agnostic-font-color, var(--agnostic-dark));
  font-family: var(--agnostic-font-family-body);
  font-weight: var(--agnostic-font-weight, 300);
  font-size: var(--agnostic-font-size, 1rem);
  line-height: var(--agnostic-line-height, var(--fluid-20, 1.25rem));
  width: 100%;
  max-width: 100%;
}

.input-skin,
.input {
  /* seems like a reasonable default as chrome picks `outset` which results in a weird 3d effect */
  border-style: solid;

  /* this can be overriden, but it might mess with the balance of the button heights across variants */
  border-width: var(--agnostic-input-border-size, 1px);
  border-color: var(--agnostic-input-border-color, var(--agnostic-gray-light));

  /* these can be overriden, but it might mess with the balance of the inputheights across variants */
  padding-block-start: var(--agnostic-input-vertical-pad, 0.5rem);
  padding-block-end: var(--agnostic-input-vertical-pad, 0.5rem);
  padding-inline-start: var(--agnostic-input-side-padding, 0.75rem);
  padding-inline-end: var(--agnostic-input-side-padding, 0.75rem);

  /* Note we only want to set properties that we actually want
  to transition in. For example, if we transition "all", the
  inputs will "grow in" on page load—not a happy effect :) */
  transition-property: box-shadow;
  transition-duration: var(--agnostic-input-timing, var(--agnostic-timing-medium));
}

.label {
  display: inline-block;

  /* Provided --agnostic-input-vertical-pad isn't overriden we'll get 20px
  label w/a 6px margin then a 38px input = 64 which is on the 8pt grid */
  margin-block-start: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  margin-block-end: var(--agnostic-input-label-pad, 0.375rem);
  vertical-align: initial;
}

/* Reset field errors and help text to be 2px less then input font size */
.field-help,
.field-error {
  font-size: calc(var(--agnostic-font-size, 1rem) - 2px);
}

.label-inline,
.input-inline {
  width: auto;
}

/* When inlined, the margin-block-end will throw the label off-center with adjacent input */
.label-inline {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: var(--agnostic-input-side-padding, 0.75rem);
}

/**
* Placeholder
*/

/* stylelint-disable-next-line */
.input::-webkit-input-placeholder {
  color: currentColor;
  opacity: 50%;
  transition: opacity var(--agnostic-timing-fast) ease-out;
}

/* stylelint-disable-next-line */
.input::placeholder {
  color: currentColor;
  opacity: 50%;
  transition: opacity var(--agnostic-timing-fast) ease-out;
}

/* stylelint-disable-next-line */
.input::-ms-placeholder {
  color: currentColor;
  opacity: 50%;
  transition: opacity var(--agnostic-timing-fast) ease-out;
}

/* stylelint-disable-next-line */
.input:-ms-placeholder {
  color: currentColor;
  opacity: 50%;
  transition: opacity var(--agnostic-timing-fast) ease-out;
}

/**
* Underlined inputs
*/
.input-underlined {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-color: var(--agnostic-input-underlined-color, var(--agnostic-gray-mid-dark));
  background-color: transparent;
}

.input-underlined-bg {
  background-color: var(--agnostic-input-underlined-bg-color, var(--agnostic-gray-extra-light));
}

/**
* Rounded inputs
*/
.input-rounded {
  border-radius: var(--agnostic-radius, 0.25rem);
}

/**
 * Errors
 * We provide a class-based approach to setting errors which means we do
 * not support :invalid, so it requires custom use of html4 validation API
 * (see https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
 * of the example in corresponding input.html file). The reason I elected to
 * not include :invalid, is it seems to result in "shouting" at the user as
 * I did not find an easy way to only kick in errors after a certain number
 * of characters have been type (blur is actually better but I did not
 * implement that in the contrived example).
 */
.label-error {
  color: var(--agnostic-input-error-color, var(--agnostic-error));
}

.input-error {
  border-color: var(--agnostic-input-error-color, var(--agnostic-error));
}

.label-error,
.field-error,
.field-error-small,
.field-error-large {
  color: var(--agnostic-input-error-color, var(--agnostic-error));
}

.field-help,
.field-help-small,
.field-help-large {
  color: var(--agnostic-input-help-color, var(--agnostic-gray-dark));
}

.field-help,
.field-help-small,
.field-help-large,
.field-error,
.field-error-small,
.field-error-large {
  display: inline-block;
  width: 100%;
  margin-block-start: calc(var(--agnostic-input-vertical-pad, 0.5rem) / 2);
}

/**
  * Sizes
  */
.input-large {
  font-size: calc(var(--agnostic-font-size, 1rem) + 0.25rem);
  line-height: 1.6rem;
}

.field-help-large,
.field-error-large {
  /* We initially remove -2px from font-size so setting to font-size essentially adds the 2px back */
  font-size: var(--agnostic-font-size, 1rem);
}

.label-large {
  font-size: calc(var(--agnostic-font-size, 1rem) + 0.25rem);
}

.input-small {
  font-size: calc(var(--agnostic-font-size, 1rem) - 0.25rem);
  line-height: 1rem;
}

.field-help-small,
.field-error-small,
.label-small {
  font-size: calc(var(--agnostic-font-size, 1rem) - 0.25rem);
}

.input:focus {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

/* Set the focus to transparent when there's an error since we use
borders that visually conflict. */
.input-error:focus {
  box-shadow: 0 0 0 3px transparent;
}

/*
* Disabled State
*
* The disabled state uses the class .disabled,
* and the form attribute disabled="disabled".
* The use of !important is only added because this is a state
* that must be applied to all inputs when in a disabled state.
*/
.input.disabled, /* DEPRECATED -- TODO remove class based disabled */
.input:disabled {
  background: var(--agnostic-input-disabled-bg, var(--agnostic-disabled-bg)) !important;
  color: var(--agnostic-input-disabled-color, var(--agnostic-disabled-color)) !important;
  appearance: none !important;
  box-shadow: none !important;
  cursor: not-allowed !important;
  opacity: 80% !important;
}

@media screen and (-ms-high-contrast: active) {
  /* High contrast mode outline hacks */

  /* styleint-disable-next-line no-descending-specificity  */
  .input:disabled {
    outline: 2px solid transparent;
    outline-offset: -2px;
  }
}

/**
 * Input "has addon"
 */

.input-addon-container {
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100%;
}

.input-has-left-addon {
  padding-left: calc(var(--agnostic-side-padding) * 3);
}

.input-has-right-addon {
  padding-right: calc(var(--agnostic-side-padding) * 3);
}

.input-addon-left {
  left: var(--agnostic-input-side-padding);
}

.input-addon-right {
  right: var(--agnostic-input-side-padding);
}

@media (prefers-reduced-motion), (update: slow) {
  /* stylelint-disable selector-no-vendor-prefix */
  .input-skin,
  .input,
  .input::placeholder,
  .input::-webkit-input-placeholder,
  .input::-ms-placeholder,
  .input:-ms-placeholder,
  .input:focus {
    transition-duration: 0.001ms !important;
  }
}

</style>
