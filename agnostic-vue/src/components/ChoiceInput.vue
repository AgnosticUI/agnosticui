<template>
  <fieldset :class="fieldsetClasses">
    <legend :class="legendClasses">
      {{ legendLabel }}
    </legend>
    <label
      v-for="(option, index) in options"
      :key="index"
      :class="labelClasses(option.value)"
    >
      <input
        :id="`${option.name}-${index}`"
        :class="inputClasses"
        :type="choiceType"
        :name="option.name"
        :value="option.value"
        :disabled="isChoiceInputDisabled(option.value)"
        :checked="isChoiceInputPrechecked(option.value)"
        @change="triggerChange"
      >
      <span :class="labelSpanClasses">{{ option.label }}</span>
    </label>
  </fieldset>
</template>
<script>
const TYPES = ["checkbox", "radio"];
export default {
  name: "AgChoiceInput",
  props: {
    isFieldset: {
      type: Boolean,
      default: true,
    },
    // isDisabled is used to disable "all" options in the choice input
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isInline: {
      type: Boolean,
      default: false,
    },
    // Array for providing individual option(s) that should be disabled
    disabledOptions: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    // For radio choice inputs this should ideally be an array of one option
    // else it will result in the last item being what's checked.
    checkedOptions: {
      type: Array,
      default() {
        return [];
      },
      required: false,
    },
    options: {
      type: Array,
      required: true,
    },
    css: {
      type: String,
      required: false,
      default: "",
    },
    legendLabel: {
      type: String,
      required: true,
    },
    isSkinned: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "checkbox",
      validator: (value) => {
        const isValid = TYPES.includes(value);
        if (!isValid) {
          console.warn(`Allowed types for ChoiceInput are: ${TYPES}`);
        }
        return isValid;
      },
    },
    size: {
      type: String,
      default: null,
      validator: (value) => ["large", "small"].includes(value),
    },
  },
  emits: ["change"],
  data: function () {
    return {
      // This gets around Vue's "avoid mutating a prop directly since
      // value will be overwritten on re-render" issue https://stackoverflow.com/a/43828751
      // Update: I'm now also using this to keep track of checked options state in triggerChange
      mutableCheckedOptions: Array.from(this.checkedOptions),
    };
  },
  computed: {
    // uniqId() {
    //   return `${this.type}-${uuid.v4()}`;
    // },
    choiceType() {
      return this.type;
    },
    inputClasses() {
      return {
        [this.$style[`${this.type}`]]: this.type,
        [this.$style[`${this.type}-${this.size}`]]: !!this.size,
      };
    },
    fieldsetClasses() {
      const overrides = this.css;
      // If consumer sets is skinned to false we don't style the fieldset
      const skin = this.isSkinned ? this.$style[`${this.type}-group`] : "";
      const sizeSkin =
        this.isSkinned && this.size === "large"
          ? this.$style[`${this.type}-group-${this.size}`]
          : "";

      return {
        [skin]: true,
        [sizeSkin]: true,
        [overrides]: overrides,
        // we only add the fieldset class for large (not small) e.g. radio|checkbox-group-large
        [this.$style[`${this.type}-group-hidden`]]: this.isFieldset === false,
      };
    },
    labelSpanClasses() {
      return {
        [this.$style[`${this.type}-label`]]: this.type,
        [this.$style[`${this.type}-label-${this.size}`]]: !!this.size,
      };
    },
    legendClasses() {
      // If consumer sets is skinned to false we don't style the legend
      let skin = this.isSkinned ? this.$style[`${this.type}-legend`] : "";
      return {
        [skin]: true,
        // .screenreader-only is expected to be globally available via common.min.css
        ["screenreader-only"]: this.isFieldset === false,
      };
    },
  },
  methods: {
    isChoiceInputPrechecked(optionValue) {
      if (this.mutableCheckedOptions.length) {
        if (this.mutableCheckedOptions.includes(optionValue)) {
          return true;
        }
      }
      return false;
    },
    labelClasses(optionValue) {
      return {
        // checkbox-label-wrap checkbox-label-wrap-inline
        [this.$style[`${this.type}-label-wrap`]]: this.type,
        [this.$style[`${this.type}-label-wrap-inline`]]: !!this.isInline,
        [this.$style["disabled"]]: this.isChoiceInputDisabled(optionValue),
      };
    },
    isChoiceInputDisabled(optionValue) {
      // First we check isDisabled which signifies we should disable "all"
      // options for the choice input
      if (this.isDisabled) {
        return true;
      }

      // Next we check for this.disabledOptions which is an array used for
      // providing individual option(s) we should disable by their option value
      if (this.disabledOptions && this.disabledOptions.includes(optionValue)) {
        return true;
      }
    },
    triggerChange(e) {
      const checked = e.target.checked;
      const value = e.target.value;
      if (checked) {
        if (!this.mutableCheckedOptions.includes(value)) {
          this.mutableCheckedOptions.push(value);
        }
      } else {
        const filtered = this.mutableCheckedOptions.filter(
          (item) => item !== value
        );
        this.mutableCheckedOptions = filtered;
      }
      this.$emit("change", this.mutableCheckedOptions);
    },
  },
};
</script>

<style module>
/**
 * These radio and checkbox customizations are an amalgamation of various resources I've
 * found on the internets; from Heydon Pickering's radio article (and his Inclusive Components
 * book), to Sara Soueidan, Scott O'Hara, MDO, and Adrian Roselli's research on the matter
 * of inclusive hiding and custom radio/checkbox inputs.
 */

.checkbox-group,
.radio-group {
  --width-28: calc(7 * var(--fluid-4)); /* 1.75rem/28px */

  border: 1px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));
  padding: var(--fluid-24);
  padding-top: var(--fluid-14);
  border-radius: var(--fluid-8);
}

.checkbox-group-large,
.radio-group-large {
  padding: var(--width-28);
  padding-top: var(--fluid-16);
}

.checkbox-legend,
.radio-legend {
  padding: var(--fluid-2) var(--fluid-14);
  border-radius: var(--fluid-2);
}

/* Hiding technique from https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/
*/
.checkbox,
.radio {
  position: absolute;
  width: var(--fluid-14);
  height: var(--fluid-14);
  opacity: 0%;
}

.checkbox-small,
.radio-small {
  width: var(--fluid-12);
  height: var(--fluid-12);
}

.checkbox-large,
.radio-large {
  width: var(--fluid-16);
  height: var(--fluid-16);
}

.checkbox-label-wrap,
.radio-label-wrap {
  display: block;
  cursor: pointer;
  user-select: none;
  position: relative;
  line-height: var(--fluid-36);
}

.checkbox-label-wrap-inline,
.radio-label-wrap-inline {
  display: inline-flex;
}

.checkbox-label-wrap-inline:not(:last-child),
.radio-label-wrap-inline:not(:last-child) {
  margin-inline-end: var(--fluid-8);
}

/* These are not actual <label> elements but the <span> label copy elements */
.checkbox-label,
.radio-label {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

/* The checkmark itself */
.checkbox-label::after {
  content: "";
  position: absolute;
  left: var(--fluid-6);
  top: var(--fluid-10);
  width: var(--fluid-6);
  height: var(--fluid-12);
  border: solid white;
  border-width: 0 var(--fluid-2) var(--fluid-2) 0;
  transform-origin: center center;
  transform: rotate(40deg) scale(0);
  transition-property: border, background-color, transform;
  transition-duration: var(--agnostic-timing-fast);
  transition-timing-function: ease-in-out;
}

.checkbox-label::before,
.radio-label::before {
  content: "";
  display: inline-block;
  margin-inline-end: var(--agnostic-checkbox-spacing-end, 0.75rem);
  transition: var(--agnostic-timing-fast) ease-out all;
}

/* Since we build up the radio size outwardly, it's naturally larger then the checkboxes
so we add a multiplyer to even those out initially */
.checkbox-label::before {
  border: 2px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));
  width: var(--fluid-16);
  height: var(--fluid-16);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

.radio-label::before {
  width: var(--fluid-14);
  height: var(--fluid-14);
  vertical-align: calc(-1 * var(--fluid-2));
  border-radius: 50%;
  border: var(--fluid-2) solid var(--agnostic-checkbox-light, var(--agnostic-light));
  box-shadow: 0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

@media (prefers-reduced-motion), (update: slow) {
  .checkbox-label::after,
  .checkbox-label::before,
  .radio-label::before {
    transition-duration: 0.001ms !important;
  }
}

.checkbox-label-small::after {
  left: calc(1.25 * var(--fluid-4));
}

.checkbox-label-small::before {
  width: var(--fluid-14);
  height: var(--fluid-14);
}

.radio-label-small::before {
  width: var(--fluid-12);
  height: var(--fluid-12);
}

.checkbox-label-large::after {
  left: calc(1.75 * var(--fluid-4));
}

.checkbox-label-large::before {
  width: var(--fluid-18);
  height: var(--fluid-18);
}

.radio-label-large::before {
  width: var(--fluid-16);
  height: var(--fluid-16);
}

/* the checked style using the :checked pseudo class */
.radio:checked + .radio-label::before {
  background: var(--agnostic-checkbox-fill-color, #08a880);
  box-shadow: 0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));
}

.radio:focus + .radio-label::before {
  box-shadow:
    0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light)),
    0 0 0 calc(1.5 * var(--fluid-2)) white,
    0 0 0 calc(2.25 * var(--fluid-2)) var(--agnostic-focus-ring-color);
}

.checkbox:focus + .checkbox-label::before {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
}

.checkbox:checked + .checkbox-label::after {
  transform: rotate(40deg) scale(1);
}

.checkbox:checked + .checkbox-label::before {
  background: var(--agnostic-checkbox-fill-color, #08a880);
  border: 2px solid var(--agnostic-checkbox-fill-color, #08a880);
}

/**
 * Consumer styles <legend> themselves, and can opt to use the .screenreader-only from
 * utilities.css if they're design requires it.
 */
.checkbox-group-hidden,
.radio-group-hidden {
  border: 0;
  margin-block-start: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  margin-block-end: 0;
  padding-block-start: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  padding-block-end: 0;
}

/* Targets both the label container and the span label that is used
to style the custom radio / checkbox. Note it does NOT target the input
itself. */
.checkbox[disabled] + .checkbox-label,
.radio[disabled] + .radio-label,
.checkbox-label-wrap.disabled,
.radio-label-wrap.disabled,
.checkbox-label-wrap-inline.disabled,
.radio-label-wrap-inline.disabled {
  color: var(--agnostic-input-disabled-color, var(--agnostic-disabled-color)) !important;
  appearance: none !important;
  box-shadow: none !important;
  cursor: not-allowed !important;
  opacity: 80% !important;
}

@media screen and (-ms-high-contrast: active) {
  /* High contrast mode outline hacks */
  .checkbox-label-wrap.disabled,
  .radio-label-wrap.disabled,
  .checkbox-label-wrap-inline.disabled,
  .radio-label-wrap-inline.disabled {
    outline: 2px solid transparent;
    outline-offset: -2px;
  }
}

</style>
