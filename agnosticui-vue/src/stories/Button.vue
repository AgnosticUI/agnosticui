<template>
  <button
    :type="type"
    :class="classes"
    @click="onClick"
    :disabled="isButtonDisabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "agnostic-button",
  props: {
    mode: {
      type: String,
      default: "",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isBlank: {
      type: Boolean,
      default: false,
    },
    isBlock: {
      type: Boolean,
      default: false,
    },
    isBordered: {
      type: Boolean,
      default: false,
    },
    isRaised: {
      type: Boolean,
      default: false,
    },
    isCircle: {
      type: Boolean,
      default: false,
    },
    isRounded: {
      type: Boolean,
      default: false,
    },
    isSkinned: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "button",
      validator: (value) => ["button", "submit", "reset"].includes(value),
    },
    size: {
      type: String,
      default: "",
    },
    css: {
      type: String,
      default: "",
    },
  },
  computed: {
    isButtonDisabled() {
      return this.isDisabled ? true : undefined;
    },
    classes() {
      return {
        [this.$style.btn]: this.isSkinned,
        [this.$style["btn-base"]]: !this.isSkinned,
        [this.$style["disabled"]]: this.isDisabled,
        [this.$style["btn-bordered"]]: this.isBordered,
        [this.$style["btn-blank"]]: this.isBlank,
        [this.$style["btn-block"]]: this.isBlock,
        [this.$style["btn-rounded"]]: this.isRounded,
        [this.$style["btn-circle"]]: this.isCircle,
        [this.$style["btn-raised"]]: this.isRaised,
        [this.$style["btn-primary"]]: this.mode === "primary",
        [this.$style["btn-secondary"]]: this.mode === "secondary",
        [`${this.css}`]: !!this.css,
        [this.$style[`btn-${this.size}`]]: this.size,
      };
    },
  },
  methods: {
    onClick($event) {
      // See https://vuejs.org/v2/guide/components-custom-events.html and
      // https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event
      this.$emit("click", $event);
    },
  },
};
</script>

<style module>
/*
* Base Button Style
*
* Please note that we have two versions of this:
* `.btn` which encompasses both the base and skin styles
* `.btn-base` and `btn-skin`.
* The reason we've done this is to provide you with some convenience but
* also flexibility. Most will just want to apply `.btn`. However, if the
* base skin of the button does not work for you, another option is to only
* apply `.btn-base` and then set your own "button skin".
*/
.btn-base,
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
  transition-duration: var(--agnosticui-timing-medium);
}

.btn-skin,
.btn {
  color: var(--agnosticui-btn-font-color, var(--agnosticui-dark));
  background-color: var(--agnosticui-btn-bgcolor, var(--agnosticui-gray-light));
  border-color: var(--agnosticui-btn-bgcolor, var(--agnosticui-gray-light));
  /* seems like a reasonable default as chrome picks `outset` which results in a weird 3d effect */
  border-style: solid;
  border-width: var(--agnosticui-btn-border-size, 1px);
  font-family: var(--agnosticui-btn-font-family, var(--agnosticui-font-family));
  font-weight: var(--agnosticui-btn-font-weight, 400);
  font-size: var(--agnosticui-btn-font-size, 1rem);
  /* this can be overriden, but it might mess with the balance of the button heights across variants */
  line-height: var(--agnosticui-line-height, 1.25rem);
  padding-block-start: var(--agnosticui-vertical-pad, 0.5rem);
  padding-block-end: var(--agnosticui-vertical-pad, 0.5rem);
  padding-inline-start: var(--agnosticui-side-padding, 0.75rem);
  padding-inline-end: var(--agnosticui-side-padding, 0.75rem);
  text-decoration: none;
  text-align: center;
  outline: none;
}

.btn:visited {
  color: var(--agnosticui-btn-font-color, var(--agnosticui-dark));
}

.btn:hover {
  opacity: 0.85;
  text-decoration: none;
}

.btn:active {
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
  text-decoration: none;
  transition-duration: 0s;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

.btn:focus {
  box-shadow: 0 0 0 3px var(--agnosticui-focus-ring-color);
  /* Needed for High Contrast mode */
  outline: 3px solid transparent;
  transition: box-shadow var(--agnosticui-timing-fast) ease-out;
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
  background: var(--agnosticui-btn-disabled-bg, var(--agnosticui-gray-mid-dark)) !important;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 1) !important;
  /* primary, secondary, natural, all look same when disabled; and we don't want to
  have an inadvertant looking blue primary border when disabled so it's transparent */
  border-color: transparent;
  color: var(--agnosticui-btn-disabled-color, var(--agnosticui-gray-dark)) !important;
  cursor: default !important;
  appearance: none !important;
  box-shadow: none !important;
  opacity: 0.8 !important;
}

.btn-primary {
  background-color: var(--agnosticui-btn-primary, var(--agnosticui-primary));
  border-color: var(--agnosticui-btn-primary, var(--agnosticui-primary));
  color: var(--agnosticui-btn-primary-color, var(--agnosticui-light));
}

/* Border and font is primary. When hovered, we invert with primary background and white font */
.btn-primary.btn-bordered {
  color: var(--agnosticui-btn-primary, var(--agnosticui-primary));
}
.btn-primary.btn-bordered:hover,
.btn-primary.btn-bordered:focus {
  background-color: var(--agnosticui-btn-primary, var(--agnosticui-primary));
  color: var(--agnosticui-btn-primary-color, var(--agnosticui-light));
}

.btn-primary:visited {
  color: var(--agnosticui-btn-primary-color, var(--agnosticui-light));
}

.btn-secondary {
  background-color: var(--agnosticui-btn-secondary, var(--agnosticui-secondary));
  border-color: var(--agnosticui-btn-secondary, var(--agnosticui-secondary));
  color: var(--agnosticui-btn-secondary-color, var(--agnosticui-light));
}

/* Border and font is secondary. When hovered, we invert with secondary background and white font */
.btn-secondary.btn-bordered {
  color: var(--agnosticui-btn-secondary, var(--agnosticui-secondary));
}
.btn-secondary.btn-bordered:hover,
.btn-secondary.btn-bordered:focus {
  background-color: var(--agnosticui-btn-secondary, var(--agnosticui-secondary));
  color: var(--agnosticui-btn-secondary-color, var(--agnosticui-light));
}

.btn-secondary:visited {
  color: var(--agnosticui-btn-secondary-color, var(--agnosticui-light));
}

/*
* Raised Buttons
*
* A classic looking button that offers
* great depth and affordance.
*/
.btn-raised {
  border-color: var(--agnosticui-btn-bgcolor, var(--agnosticui-gray-light));
  border-style: solid;
  background: -webkit-gradient(linear, left top, left bottom, from(#f6f6f6), to(#e1e1e1));
  /* Note that while one can customize some of these slightly, we essentially have hard-coded
  box shadow rgba values so they can't really do so drastically which is probably fine :) */
  background: linear-gradient(
    var(--agnosticui-btn-raised-from, var(--agnosticui-gray-mid)),
    var(--agnosticui-btn-raised-to, var(--agnosticui-gray-extra-light))
  );
  -webkit-box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.15);
}
.btn-raised:hover,
.btn-raised:focus {
  background: -webkit-gradient(linear, left top, left bottom, from(white), to(gainsboro));
  background: linear-gradient(to bottom, white, gainsboro);
}
.btn-raised.active {
  /* TODO -- maybe this shouldn't be hard coded */
  background: #eeeeee;
  -webkit-box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white;
}

/*
* Raised Primary Buttons
*/
.btn-raised.btn-primary {
  border-color: var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-from));
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(var(--agnosticui-btn-primary-raised-from, var(--agnosticui-primary-from))),
    to(var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-to)))
  );
  background: linear-gradient(
    var(--agnosticui-btn-primary-raised-from, var(--agnosticui-primary-from)),
    var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-to))
  );
}

.btn-raised.btn-primary:hover,
.btn-raised.btn-primary:focus {
  background: linear-gradient(
    to bottom,
    var(--agnosticui-btn-primary-raised-hover-from, var(--agnosticui-primary-hover)),
    var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-from))
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(var(--agnosticui-btn-primary-raised-hover-from, var(--agnosticui-primary-hover))),
    to(var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-from)))
  );
  background: linear-gradient(
    var(--agnosticui-btn-primary-raised-hover-from, var(--agnosticui-primary-hover)),
    var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-from))
  );
}

.btn-raised.btn-primary:active,
.btn-raised.btn-primary.active {
  opacity: 0.9;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
}

/*
* Raised Secondary Buttons
*/
.btn-raised.btn-secondary {
  border-color: var(--agnosticui-btn-secondary-raised-to, var(--agnosticui-secondary-to));
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(var(--agnosticui-btn-secondary-raised-from, var(--agnosticui-secondary-from))),
    to(var(--agnosticui-btn-secondary-raised-to, var(--agnosticui-secondary-to)))
  );
  background: linear-gradient(
    var(--agnosticui-btn-secondary-raised-from, var(--agnosticui-secondary-from)),
    var(--agnosticui-btn-secondary-raised-to, var(--agnosticui-secondary-to))
  );
}

.btn-raised.btn-secondary:hover,
.btn-raised.btn-secondary:focus {
  background: linear-gradient(
    to bottom,
    var(--agnosticui-btn-secondary-raised-hover-from, var(--agnosticui-secondary-hover)),
    var(--agnosticui-btn-secondary-raised-to, var(--agnosticui-secondary-to))
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(var(--agnosticui-btn-secondary-raised-hover-from, var(--agnosticui-secondary-hover))),
    to(var(--agnosticui-btn-secondary-raised-to, var(--agnosticui-secondary-to)))
  );
  background: linear-gradient(
    var(--agnosticui-btn-secondary-raised-hover-from, var(--agnosticui-secondary-hover)),
    var(--agnosticui-btn-secondary-raised-to, var(--agnosticui-secondary-to))
  );
}

.btn-raised.btn-secondary:active,
.btn-raised.btn-secondary.active {
  opacity: 0.9;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
}

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
  font-size: calc(var(--agnosticui-btn-font-size, 1rem) + 0.25rem);
  height: 3rem;
  line-height: 3rem;
  padding: 0 3rem;
}

.btn-small {
  font-size: calc(var(--agnosticui-btn-font-size, 1rem) - 0.25rem);
  height: 2rem;
  line-height: 2rem;
  padding: 0 2rem;
}

/**
  * Rounded
  */
.btn-rounded {
  border-radius: var(--agnosticui-btn-radius, 0.25rem);
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
  font-size: calc(var(--agnosticui-btn-font-size, 1rem) + 0.25rem);
  width: 3rem;
  height: 3rem;
}

.btn-circle-small {
  font-size: calc(var(--agnosticui-btn-font-size, 1rem) - 0.25rem);
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

/**
 * Invisible buttons. Generally used for a Cancel or icon button that behaves like a button,
 * semantically and for a11y, but, does so without all the typical "button chrome" behind it.
 */
.btn-blank {
  background-color: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
}
.btn-blank:hover,
.btn-blank:active,
.btn-blank:focus {
  background: none;
  outline: 3px solid transparent;
}

</style>
