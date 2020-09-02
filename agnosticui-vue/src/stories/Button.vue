<template>
  <button :type="type" :class="classes" @click="onClick">
    <slot name="iconLeft" />
    {{ label }}
    <slot name="iconRight" />
  </button>
</template>

<script>
export default {
  name: 'agnostic-button',
  props: {
    label: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      default: '',
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
    isRounded: {
      type: Boolean,
      default: false,
    },
    isSkinned: {
      type: Boolean,
      default: true,
    },
    isIconLeft: {
      type: Boolean,
      default: false,
    },
    isIconRight: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].includes(value)
    },
    size: {
      type: String,
      default: '',
    },
    css: {
      type: String,
      default: '',
    }
  },
  computed: {
    classes() {
      return {
        [this.$style.btn]: this.isSkinned,
        [this.$style['btn-base']]: !this.isSkinned,
        [this.$style['btn-disabled']]: this.isDisabled,
        [this.$style['btn-bordered']]: this.isBordered,
        [this.$style['btn-blank']]: this.isBlank,
        [this.$style['btn-block']]: this.isBlock,
        [this.$style['btn-rounded']]: this.isRounded,
        [this.$style['btn-raised']]: this.isRaised,
        [this.$style['btn-icon-left']]: this.isIconLeft,
        [this.$style['btn-icon-right']]: this.isIconRight,
        [this.$style['btn-primary']]: this.mode === 'primary',
        [this.$style['btn-secondary']]: this.mode === 'secondary',
        [`${this.css}`]: !!this.css,
        [this.$style[`btn-${this.size}`]]: this.size,
      }
    }
  },
  methods: {
    onClick($event) {
      // See https://vuejs.org/v2/guide/components-custom-events.html and
      // https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event
      this.$emit('click', $event);
    }
  }
}
</script>

<style module>
:root {
  --agnostic-default-btn-bgcolor: #e9e9e9;
  --agnostic-default-btn-raised-from: #f8f8f8;
  --agnostic-default-btn-raised-to: #d8d8d8;
  --agnostic-default-btn-primary-raised-from: #34a5f8;
  --agnostic-default-btn-primary-raised-to: #088ef0;
  --agnostic-default-btn-primary-raised-hover-from: #42abf8;
  --agnostic-default-btn-secondary-raised-from: #ff5d69;
  --agnostic-default-btn-secondary-raised-to: #ff2a39;
  --agnostic-default-btn-secondary-raised-hover-from: #ff6c77;
  --agnostic-default-btn-disabled-bg: #cccccc;
  --agnostic-default-btn-disabled-border: #bbbbbb;
  --agnostic-default-btn-disabled-color: #aaaaaa;
  --agnostic-default-btn-font-color: #333333;
  --agnostic-default-btn-font-weight: 300;
  --agnostic-default-btn-font-size: 16px;
  --agnostic-default-btn-side-padding: calc(
    1.5 * var(--agnostic-default-btn-font-size)
  );
  /* Note that we rely on line-height for the button's height. This used to be problemattic:
  https://cssnewbie.com/input-button-line-height-bug/ in older FF and Opera but we do not support
  this far back and so it seem cleaner to not hack in heights or paddings to defend. Also note, that
  we predict that 16 * 2.5 = 40. If one is to override this setup they should probably be cognizant
  of this math so that they end up with convenient button heights  */
  --agnostic-default-btn-line-height: 2.5;
  --agnostic-default-btn-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Ubuntu", "Fira Sans", Helvetica, "Droid Sans", "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --agnostic-default-btn-primary: #1087db;
  --agnostic-default-btn-primary-color: #ffffff;
  --agnostic-default-btn-secondary: #ff4351;
  --agnostic-default-btn-secondary-color: #ffffff;
  --agnostic-default-btn-radius: 4px;
}

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
  line-height: var(--agnostic-default-btn-line-height);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.3s;
}

.btn-skin,
.btn {
  color: var(
    --agnostic-btn-font-color,
    var(--agnostic-default-btn-font-color)
  );
  background-color: var(
    --agnostic-btn-bgcolor,
    var(--agnostic-default-btn-bgcolor)
  );
  border-color: var(
    --agnostic-btn-bgcolor,
    var(--agnostic-default-btn-bgcolor)
  );
  /* seems like a reasonable default as chrome picks `outset` which results in a weird 3d effect */
  border-style: solid;
  /* We can add back borders for certain types and the border color will then matter :) */
  border-width: 0;
  font-weight: var(
    --agnostic-btn-font-weight,
    var(--agnostic-default-btn-font-weight)
  );
  font-size: var(
    --agnostic-btn-font-size,
    var(--agnostic-default-btn-font-size)
  );
  font-family: var(
    --agnostic-btn-font-family,
    var(--agnostic-default-btn-font-family)
  );
  text-decoration: none;
  text-align: center;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: var(--agnostic-default-btn-side-padding);
  padding-right: var(--agnostic-default-btn-side-padding);
  outline: none;
}

.btn:visited {
  color: var(--agnostic-default-btn-font-color);
}

.btn:hover {
  opacity: 0.7;
  text-decoration: none;
}

.btn:active {
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
  text-decoration: none;
  transition-duration: 0s;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

.btn:focus {
  box-shadow: 0 0 0 3px rgba(55, 149, 225, 0.5);
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
  background: var(
    --agnostic-btn-disabled-bg,
    var(--agnostic-default-btn-disabled-bg)
  ) !important;
  border: 1px solid
    var(
      --agnostic-btn-disabled-border,
      var(--agnostic-default-btn-disabled-border)
    ) !important;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 1) !important;
  color: var(
    --agnostic-btn-disabled-color,
    var(--agnostic-default-btn-disabled-color)
  ) !important;
  cursor: default !important;
  appearance: none !important;
  box-shadow: none !important;
  opacity: 0.8 !important;
}

.btn-primary {
  background-color: var(
    --agnostic-btn-primary,
    var(--agnostic-default-btn-primary)
  );
  border-color: var(
    --agnostic-btn-primary,
    var(--agnostic-default-btn-primary)
  );
  color: var(
    --agnostic-btn-primary-color,
    var(--agnostic-default-btn-primary-color)
  );
}

/* Border and font is primary. When hovered, we invert with primary background and white font */
.btn-primary.btn-bordered {
  color: var(--agnostic-btn-primary, var(--agnostic-default-btn-primary));
}
.btn-primary.btn-bordered:hover,
.btn-primary.btn-bordered:focus {
  background-color: var(
    --agnostic-btn-primary,
    var(--agnostic-default-btn-primary)
  );
  color: var(
    --agnostic-btn-primary-color,
    var(--agnostic-default-btn-primary-color)
  );
}

.btn-primary:visited {
  color: var(
    --agnostic-btn-primary-color,
    var(--agnostic-default-btn-primary-color)
  );
}

.btn-secondary {
  background-color: var(
    --agnostic-btn-secondary,
    var(--agnostic-default-btn-secondary)
  );
  border-color: var(
    --agnostic-btn-secondary,
    var(--agnostic-default-btn-secondary)
  );
  color: var(
    --agnostic-btn-secondary-color,
    var(--agnostic-default-btn-secondary-color)
  );
}

/* Border and font is secondary. When hovered, we invert with secondary background and white font */
.btn-secondary.btn-bordered {
  color: var(--agnostic-btn-secondary, var(--agnostic-default-btn-secondary));
}
.btn-secondary.btn-bordered:hover,
.btn-secondary.btn-bordered:focus {
  background-color: var(
    --agnostic-btn-secondary,
    var(--agnostic-default-btn-secondary)
  );
  color: var(
    --agnostic-btn-secondary-color,
    var(--agnostic-default-btn-secondary-color)
  );
}

.btn-secondary:visited {
  color: var(
    --agnostic-btn-secondary-color,
    var(--agnostic-default-btn-secondary-color)
  );
}

/*
* Raised Buttons
*
* A classic looking button that offers
* great depth and affordance.
*/
.btn-raised {
  border-color: var(
    --agnostic-btn-bgcolor,
    var(--agnostic-default-btn-bgcolor)
  );
  border-style: solid;
  border-width: 1px;
  line-height: 38px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#f6f6f6),
    to(#e1e1e1)
  );
  /* Note that while one can customize some of these slightly, we essentially have hard-coded
  box shadow rgba values so they can't really do so drastically which is probably fine :) */
  background: linear-gradient(
    var(--agnostic-btn-raised-from, var(--agnostic-default-btn-raised-from)),
    var(--agnostic-btn-raised-to, var(--agnostic-default-btn-raised-to))
  );
  -webkit-box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.15);
}
.btn-raised:hover,
.btn-raised:focus {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(white),
    to(gainsboro)
  );
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
  border-color: var(
    --agnostic-btn-primary-raised-to,
    var(--agnostic-default-btn-primary-raised-to)
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(
      var(
        --agnostic-btn-primary-raised-from,
        var(--agnostic-default-btn-primary-raised-from)
      )
    ),
    to(
      var(
        --agnostic-btn-primary-raised-to,
        var(--agnostic-default-btn-primary-raised-to)
      )
    )
  );
  background: linear-gradient(
    var(
      --agnostic-btn-primary-raised-from,
      var(--agnostic-default-btn-primary-raised-from)
    ),
    var(
      --agnostic-btn-primary-raised-to,
      var(--agnostic-default-btn-primary-raised-to)
    )
  );
}

.btn-raised.btn-primary:hover,
.btn-raised.btn-primary:focus {
  background: linear-gradient(to bottom, #42abf8, #0888e6);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(
      var(
        --agnostic-btn-primary-raised-hover-from,
        var(--agnostic-default-btn-primary-raised-hover-from)
      )
    ),
    to(
      var(
        --agnostic-btn-primary-raised-to,
        var(--agnostic-default-btn-primary-raised-to)
      )
    )
  );
  background: linear-gradient(
    var(
      --agnostic-btn-primary-raised-hover-from,
      var(--agnostic-default-btn-primary-raised-hover-from)
    ),
    var(
      --agnostic-btn-primary-raised-to,
      var(--agnostic-default-btn-primary-raised-to)
    )
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
  border-color: var(
    --agnostic-btn-secondary-raised-to,
    var(--agnostic-default-btn-secondary-raised-to)
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(
      var(
        --agnostic-btn-secondary-raised-from,
        var(--agnostic-default-btn-secondary-raised-from)
      )
    ),
    to(
      var(
        --agnostic-btn-secondary-raised-to,
        var(--agnostic-default-btn-secondary-raised-to)
      )
    )
  );
  background: linear-gradient(
    var(
      --agnostic-btn-secondary-raised-from,
      var(--agnostic-default-btn-secondary-raised-from)
    ),
    var(
      --agnostic-btn-secondary-raised-to,
      var(--agnostic-default-btn-secondary-raised-to)
    )
  );
}

.btn-raised.btn-secondary:hover,
.btn-raised.btn-secondary:focus {
  background: linear-gradient(to bottom, #42abf8, #0888e6);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(
      var(
        --agnostic-btn-secondary-raised-hover-from,
        var(--agnostic-default-btn-secondary-raised-hover-from)
      )
    ),
    to(
      var(
        --agnostic-btn-secondary-raised-to,
        var(--agnostic-default-btn-secondary-raised-to)
      )
    )
  );
  background: linear-gradient(
    var(
      --agnostic-btn-secondary-raised-hover-from,
      var(--agnostic-default-btn-secondary-raised-hover-from)
    ),
    var(
      --agnostic-btn-secondary-raised-to,
      var(--agnostic-default-btn-secondary-raised-to)
    )
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
  font-size: calc(
    var(--agnostic-btn-font-size, var(--agnostic-default-btn-font-size)) + 4px
  );
  height: 48px;
  line-height: 48px;
  padding: 0 48px;
}

.btn-small {
  font-size: calc(
    var(--agnostic-btn-font-size, var(--agnostic-default-btn-font-size)) - 4px
  );
  height: 32px;
  line-height: 32px;
  padding: 0 32px;
}

/**
  * Rounded
  */
  .btn-rounded {
    border-radius: var(
      --agnostic-btn-radius,
      var(--agnostic-default-btn-radius)
    );
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
    width: 40px;
    height: 40px;
    padding: 0 !important;
  }
  
  .btn-circle-large {
    font-size: calc(
      var(--agnostic-btn-font-size, var(--agnostic-default-btn-font-size)) + 4px
    );
    width: 48px;
    height: 48px;
  }

  .btn-circle-small {
    font-size: calc(
      var(--agnostic-btn-font-size, var(--agnostic-default-btn-font-size)) - 4px
    );
    width: 32px;
    height: 32px;
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
  margin-top: -1px;
}

/**
  * Button Icons
  */

/* For envs like React, CSS Modules appears to allow element-based selector (e.g. `svg` here)
to leak through. So we leverage that so we don't have to do fancy regex when copying over styles. */
.btn-icon-left svg,
.btn-icon-left .btn-icon { /* When copying needs to become :global(.btn-icon) */
  margin-right: 6px;
}

/* For envs like React, CSS Modules appears to allow element-based selector (e.g. `svg` here)
to leak through. So we leverage that so we don't have to do fancy regex when copying over styles. */
.btn-icon-right svg,
.btn-icon-right .btn-icon { /* When copying needs to become :global(.btn-icon) */
  margin-left: 6px;
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
  outline: none;
  box-shadow: none;
}

</style>
