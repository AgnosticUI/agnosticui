<template>
  <div class="width-full">
    <label :class="labelClasses" :for="uniqueId">
      {{ label }}
    </label>
    <textarea
      v-if="type == 'textarea'"
      :id="uniqueId"
      :class="inputClasses"
      v-bind="$attrs"
      :value="value"
      :disabled="isInputDisabled"
    />
    <div
      v-else-if="hasLeftAddon || hasRightAddon"
      :class="addonContainerClasses"
    >
      <slot name="addonLeft"></slot>
      <input
        :id="uniqueId"
        :class="inputClasses"
        v-bind="$attrs"
        :type="type"
        :value="value"
        :disabled="isInputDisabled"
        v-on="{
          ...$listeners,
          input: (event) => $emit('input', event.target.value),
        }"
      />
      <slot name="addonRight"></slot>
    </div>
    <input
      v-else
      :id="uniqueId"
      :class="inputClasses"
      v-bind="$attrs"
      :type="type"
      :value="value"
      :disabled="isInputDisabled"
      v-on="{
        ...$listeners,
        input: (event) => $emit('input', event.target.value),
      }"
    />
    <span v-if="isInvalid" :class="invalidClasses">
      {{ invalidText }}
    </span>
    <span v-else-if="helpText" :class="helpClasses">{{ helpText }}</span>
  </div>
</template>

<script>
/*
NOTE: I originally tried to do:
      v-on="$listeners"
      @input="$emit('input', $event.target.value)"

But, apparently you need to overwrite the more generic $listeners explicitly ¯\_(ツ)_/¯
https://github.com/vuejs/vue/issues/7042#issuecomment-344948474
 */
const TYPES = [
  "text",
  "password",
  "email",
  "number",
  "url",
  "tel",
  "search",
  "textarea",
];

export default {
  // This will be useful if we decided to wrap the input and we want the attrs
  // to be bound to the input itself.
  // see https://blog.oddeven.ch/blog/how-to-make-reusable-form-input-element-in-vue-js-2-6-and-vue-js-3-0/
  inheritAttrs: false,
  name: "agnosticui-input",
  props: {
    label: {
      type: String,
      default: "",
      required: true,
    },
    uniqueId: {
      type: String,
      required: true,
    },
    labelCss: {
      type: String,
      default: "",
    },
    inputCss: {
      type: String,
      default: "",
    },
    helpText: {
      type: String,
      default: "",
    },
    invalidText: {
      type: String,
      default: "",
    },
    hasLeftAddon: {
      type: Boolean,
      default: false,
    },
    hasRightAddon: {
      type: Boolean,
      default: false,
    },
    isInline: {
      type: Boolean,
      default: false,
    },
    isInvalid: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isSkinned: {
      type: Boolean,
      default: true,
    },
    isRounded: {
      type: Boolean,
      default: false,
    },
    isUnderlinedWithBackground: {
      type: Boolean,
      default: false,
    },
    isUnderlined: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
      validator: (value) => {
        const isValid = TYPES.includes(value);
        if (!isValid) {
          console.warn(`Allowed types for Input: are ${TYPES}`);
        }
        return isValid;
      },
    },
  },
  computed: {
    isInputDisabled() {
      return this.isDisabled ? true : undefined;
    },
    helpClasses() {
      return {
        [this.$style["field-help"]]: !this.size,
        [this.$style[`field-help-${this.size}`]]: this.size,
      };
    },
    invalidClasses() {
      return {
        [this.$style["field-error"]]: !this.size,
        [this.$style[`field-error-${this.size}`]]: this.size,
      };
    },
    addonContainerClasses() {
      return {
        [this.$style["input-addon-container"]]: true,
      };
    },
    inputClasses() {
      // const sizeKlass = `input-${this.size}`;
      // console.log("sizeKlass: ", sizeKlass);
      // console.log("this.$style[input-large]: ", this.$style[sizeKlass]);
      // console.log("this.$style[input-large]: ", this.$style["input-large"]);
      return {
        [this.$style["input"]]: this.isSkinned,
        [this.$style["input-base"]]: !this.isSkinned,
        [this.$style["input-rounded"]]: this.isRounded,
        [this.$style["input-underlined"]]: this.isUnderlined,
        [this.$style["input-has-left-addon"]]: this.hasLeftAddon,
        [this.$style["input-has-right-addon"]]: this.hasRightAddon,
        [this.$style["input-error"]]: this.isInvalid,
        [this.$style["input-inline"]]: this.isInline,
        [this.$style["input-underlined-bg"]]: this.isUnderlinedWithBackground,
        [`${this.inputCss}`]: !!this.inputCss,
        [this.$style[`input-${this.size}`]]: this.size,
      };
    },
    labelClasses() {
      return {
        [this.$style["label"]]: true,
        [this.$style["label-error"]]: this.isInvalid,
        [this.$style["label-inline"]]: this.isInline,
        [this.$style[`label-${this.size}`]]: this.size,
        [`${this.labelCss}`]: !!this.labelCss,
      };
    },
  },
};
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

.label, .label-base {
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
  color: var(--agnosticui-font-color, var(--agnosticui-dark));;
  font-family: var(--agnosticui-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Ubuntu", "Fira Sans", Helvetica, "Droid Sans", "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  font-weight: var(--agnosticui-font-weight, 300);
  font-size: var(--agnosticui-font-size, 1rem);
  line-height: var(--agnosticui-line-height, 1.25rem);
  width: 100%;
  max-width: 100%;
}

.input-skin,
.input {
  /* seems like a reasonable default as chrome picks `outset` which results in a weird 3d effect */
  border-style: solid;
  /* this can be overriden, but it might mess with the balance of the button heights across variants */
  border-width: var(--agnosticui-input-border-size, 1px);
  border-color: var(--agnosticui-input-border-color, var(--agnosticui-gray-light));
  /* these can be overriden, but it might mess with the balance of the inputheights across variants */
  padding-block-start: var(--agnosticui-input-vertical-pad, .5rem);;
  padding-block-end: var(--agnosticui-input-vertical-pad, .5rem);;
  padding-inline-start: var(--agnosticui-input-side-padding, .75rem);
  padding-inline-end: var(--agnosticui-input-side-padding, .75rem);

  /* Note we only want to set properties that we actually want
  to transition in. For example, if we transition "all", the
  inputs will "grow in" on page load—not a happy effect :) */
  transition-property: box-shadow;
  transition-duration: var(--agnosticui-input-timing, var(--agnosticui-timing-medium));
}

.label {
  display: inline-block;
  /* Provided --agnosticui-input-vertical-pad isn't overriden we'll get 20px
  label w/a 6px margin then a 38px input = 64 which is on the 8pt grid */
  margin-block-start: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  margin-block-end: var(--agnosticui-input-label-pad, .375rem);
  vertical-align: initial;
}

/* Reset labels and field errors to be 2px less then input font size */
.field-help,
.field-error,
.label,
.label-skin {
  font-size: calc(var(--agnosticui-font-size, 1rem) - 2px);
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
  margin-inline-end: var(--agnosticui-input-side-padding, .75rem);
}

/**
* Placeholder
*/
.input::-webkit-input-placeholder {
  color: currentColor;
  opacity: 0.5;
  transition: opacity var(--agnosticui-timing-fast) ease-out;
}

.input::-moz-placeholder {
  color: currentColor;
  opacity: 0.5;
  transition: opacity var(--agnosticui-timing-fast) ease-out;
}

.input::-ms-placeholder {
  color: currentColor;
  opacity: 0.5;
  transition: opacity var(--agnosticui-timing-fast) ease-out;
}

.input:-ms-placeholder {
  color: currentColor;
  opacity: 0.5;
  transition: opacity var(--agnosticui-timing-fast) ease-out;
}

/**
* Underlined inputs
*/
.input-underlined {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-color: var(--agnosticui-input-underlined-color, var(--agnosticui-gray-mid-dark)); 
  background-color: transparent;
}

.input-underlined-bg {
  background-color: var(--agnosticui-input-underlined-bg-color, var(--agnosticui-gray-extra-light));
}

/**
* Rounded inputs
*/
.input-rounded {
  border-radius: var(--agnosticui-border-radius, .25rem);
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
  color: var(--agnosticui-input-error-color, var(--agnosticui-error-color));
}
.input-error {
  border-color: var(--agnosticui-input-error-color, var(--agnosticui-error-color));
}

.label-error,
.field-error,
.field-error-small,
.field-error-large {
  color: var(--agnosticui-input-error-color, var(--agnosticui-error-color));
}

.field-help,
.field-help-small,
.field-help-large {
  color: var(--agnosticui-input-help-color, var(--agnosticui-gray-dark));
}

.field-help,
.field-help-small,
.field-help-large,
.field-error,
.field-error-small,
.field-error-large {
  display: inline-block;
  width: 100%;
  margin-block-start: calc(var(--agnosticui-input-vertical-pad, .5rem) / 2);
}

/**
  * Sizes
  */
.input-large {
  font-size: calc(var(--agnosticui-font-size, 1rem) + .25rem);
  line-height: 1.5rem;
}

.field-help-large,
.field-error-large,
.label-large {
  /* We initially remove -2px from font-size so setting to font-size essentially adds the 2px back */
  font-size: var(--agnosticui-font-size, 1rem);
}

.input-small {
  font-size: calc(var(--agnosticui-font-size, 1rem) - .25rem);
  line-height: 1rem;
}

.field-help-small,
.field-error-small,
.label-small {
  font-size: calc(var(--agnosticui-font-size, 1rem) - .25rem);
}

.input:focus {
  box-shadow: 0 0 0 3px var(--agnosticui-focus-ring-color);
  /* High contrast mode outline */
  outline: 3px solid transparent;
  transition: box-shadow var(--agnosticui-timing-fast) ease-out;
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
  /* High contrast mode outline hacks */
  outline: 2px solid transparent;
  outline-offset: -2px;
  background: var(--agnosticui-input-disabled-bg, var(--agnosticui-disabled-bg)) !important;
  color: var(--agnosticui-input-disabled-color, var(--agnosticui-disabled-color)) !important;
  appearance: none !important;
  box-shadow: none !important;
  opacity: 0.8 !important;
  cursor: not-allowed !important;
}

/**
 * Input "has addon"
 */

.input-addon-container {
  display: flex;
  position: relative;
  width: 100%;
  /* Maybe I should have defined another css prop for addon adjustments but trying
  to avoid any extra variable explosion there--will need to keep an eye on this */
  --addon-padding: calc(var(--agnosticui-input-side-padding, .75rem) * 1.5);
}

.input-has-left-addon,
.input-has-right-addon {
  flex: 1;
}

.input-has-left-addon  {
  padding-inline-start: calc(var(--addon-padding) * 2.25);
}

.input-has-right-addon  {
  padding-inline-end: calc(var(--addon-padding) * 2.25);
}
</style>
