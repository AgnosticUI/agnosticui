<script>
  import { createEventDispatcher } from "svelte";
  export let mode = "";
  export let size = "";
  export let isBordered = false;
  export let isBlock = false;
  export let isBlank = false;
  export let isDisabled = false;
  export let isRaised = false;
  export let isRounded = false;
  export let isSkinned = true;
  /**
   * This prop is an escape hatch for global CSS overrides. Likely, the most useful reason to
   * leverage this is to add custom responsive media query code. Note that you'll likely need
   * to add specificity to beat out the Svelte based CSS, and, in Svelte land you'll need to
   * utilize globals functionality which might look like:
   * @media all and (min-width: 769px) {
   *   :global(button.btn.button-overrides) {
   *     font-size: 18px;
   *     ...etc.
   */
  export let css = "";

  /**
   * Button type: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
   * submit: submits form data to the server
   * reset: resets all the controls to their initial values, like <input type="reset">
   * button: button has no default behavior, and does nothing when pressed by default.
   */
  export let type = "button";

  let klasses = [
    isSkinned ? "btn" : "btn-base",
    mode ? `btn-${mode}` : "",
    size ? `btn-${size}` : "",
    isBordered ? "btn-bordered" : "",
    isBlock ? "btn-block" : "",
    isRounded ? "btn-rounded" : "",
    isDisabled ? "disabled" : "",
    isRaised ? "btn-raised" : "",
    isBlank ? "btn-blank" : "",
    css ? `${css}` : "",
  ];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");

  export let onClick = null;

  function handleClick(event) {
    if (onClick) {
      onClick(event);
    }
  }
</script>

<style>
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
  --agnosticui-default-btn-bgcolor: #e9e9e9;
  --agnosticui-default-btn-raised-from: #f8f8f8;
  --agnosticui-default-btn-raised-to: #d8d8d8;
  --agnosticui-default-btn-primary: #1087db;
  --agnosticui-default-btn-primary-color: #ffffff;
  --agnosticui-default-btn-primary-raised-from: #34a5f8;
  --agnosticui-default-btn-primary-raised-to: #088ef0;
  --agnosticui-default-btn-primary-raised-hover-from: #42abf8;
  --agnosticui-default-btn-secondary: #ff4351;
  --agnosticui-default-btn-secondary-color: #ffffff;
  --agnosticui-default-btn-secondary-raised-from: #ff5d69;
  --agnosticui-default-btn-secondary-raised-to: #ff2a39;
  --agnosticui-default-btn-secondary-raised-hover-from: #ff6c77;
  --agnosticui-default-btn-disabled-bg: #cccccc;
  --agnosticui-default-btn-disabled-color: #aaaaaa;
  --agnosticui-default-btn-font-color: #333333;
  --agnosticui-default-btn-font-weight: 300;
  --agnosticui-default-btn-font-size: 16px;
  /* The next few properties are actually quite important and influenced by an interview I heard
  with Adam Wathan re building TailwindUI: https://fullstackradio.com/135 and it made me realize
  some inconsistencies we had in button heights across the variants available. Now fixed! The
  default button height is 38px (I like bigger fonts then them, but otherwise it's quite similar).
   */
  --agnosticui-default-btn-border-size: 1px;
  --agnosticui-default-btn-vertical-pad: 8px;
  --agnosticui-default-btn-line-height: 20px;
  --agnosticui-default-btn-side-padding: calc(
    1.5 * var(--agnosticui-default-btn-font-size)
  );
  --agnosticui-default-btn-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Ubuntu", "Fira Sans", Helvetica, "Droid Sans", "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --agnosticui-default-btn-radius: 4px;

  color: var(
    --agnosticui-btn-font-color,
    var(--agnosticui-default-btn-font-color)
  );
  background-color: var(
    --agnosticui-btn-bgcolor,
    var(--agnosticui-default-btn-bgcolor)
  );
  border-color: var(
    --agnosticui-btn-bgcolor,
    var(--agnosticui-default-btn-bgcolor)
  );
  /* seems like a reasonable default as chrome picks `outset` which results in a weird 3d effect */
  border-style: solid;
  /* this can be overriden, but it might mess with the balance of the button heights across variants */
  border-width: var(--agnosticui-btn-border-size, var(--agnosticui-default-btn-border-size));
  
  font-family: var(
    --agnosticui-btn-font-family,
    var(--agnosticui-default-btn-font-family)
  );
  font-weight: var(
    --agnosticui-btn-font-weight,
    var(--agnosticui-default-btn-font-weight)
  );
  font-size: var(
    --agnosticui-btn-font-size,
    var(--agnosticui-default-btn-font-size)
  );
  /* this can be overriden, but it might mess with the balance of the button heights across variants */
  line-height: var(--agnosticui-default-btn-line-height);
  text-decoration: none;
  text-align: center;
  /* this can be overriden, but it might mess with the balance of the button heights across variants */
  padding-top: var(--agnosticui-btn-vertical-pad, var(--agnosticui-default-btn-vertical-pad));
  padding-bottom: var(--agnosticui-btn-vertical-pad, var(--agnosticui-default-btn-vertical-pad));
  padding-left: var(--agnosticui-default-btn-side-padding);
  padding-right: var(--agnosticui-default-btn-side-padding);
  outline: none;
}

.btn:visited {
  color: var(--agnosticui-default-btn-font-color);
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
    --agnosticui-btn-disabled-bg,
    var(--agnosticui-default-btn-disabled-bg)
  ) !important;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 1) !important;
  /* primary, secondary, natural, all look same when disabled; and we don't want to
  have an inadvertant looking blue primary border when disabled so it's transparent */
  border-color: transparent;
  color: var(
    --agnosticui-btn-disabled-color,
    var(--agnosticui-default-btn-disabled-color)
  ) !important;
  cursor: default !important;
  appearance: none !important;
  box-shadow: none !important;
  opacity: 0.8 !important;
}

.btn-primary {
  background-color: var(
    --agnosticui-btn-primary,
    var(--agnosticui-default-btn-primary)
  );
  border-color: var(
    --agnosticui-btn-primary,
    var(--agnosticui-default-btn-primary)
  );
  color: var(
    --agnosticui-btn-primary-color,
    var(--agnosticui-default-btn-primary-color)
  );
}

/* Border and font is primary. When hovered, we invert with primary background and white font */
.btn-primary.btn-bordered {
  color: var(--agnosticui-btn-primary, var(--agnosticui-default-btn-primary));
}
.btn-primary.btn-bordered:hover,
.btn-primary.btn-bordered:focus {
  background-color: var(
    --agnosticui-btn-primary,
    var(--agnosticui-default-btn-primary)
  );
  color: var(
    --agnosticui-btn-primary-color,
    var(--agnosticui-default-btn-primary-color)
  );
}

.btn-primary:visited {
  color: var(
    --agnosticui-btn-primary-color,
    var(--agnosticui-default-btn-primary-color)
  );
}

.btn-secondary {
  background-color: var(
    --agnosticui-btn-secondary,
    var(--agnosticui-default-btn-secondary)
  );
  border-color: var(
    --agnosticui-btn-secondary,
    var(--agnosticui-default-btn-secondary)
  );
  color: var(
    --agnosticui-btn-secondary-color,
    var(--agnosticui-default-btn-secondary-color)
  );
}

/* Border and font is secondary. When hovered, we invert with secondary background and white font */
.btn-secondary.btn-bordered {
  color: var(--agnosticui-btn-secondary, var(--agnosticui-default-btn-secondary));
}
.btn-secondary.btn-bordered:hover,
.btn-secondary.btn-bordered:focus {
  background-color: var(
    --agnosticui-btn-secondary,
    var(--agnosticui-default-btn-secondary)
  );
  color: var(
    --agnosticui-btn-secondary-color,
    var(--agnosticui-default-btn-secondary-color)
  );
}

.btn-secondary:visited {
  color: var(
    --agnosticui-btn-secondary-color,
    var(--agnosticui-default-btn-secondary-color)
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
    --agnosticui-btn-bgcolor,
    var(--agnosticui-default-btn-bgcolor)
  );
  border-style: solid;
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
    var(--agnosticui-btn-raised-from, var(--agnosticui-default-btn-raised-from)),
    var(--agnosticui-btn-raised-to, var(--agnosticui-default-btn-raised-to))
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
    --agnosticui-btn-primary-raised-to,
    var(--agnosticui-default-btn-primary-raised-to)
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(
      var(
        --agnosticui-btn-primary-raised-from,
        var(--agnosticui-default-btn-primary-raised-from)
      )
    ),
    to(
      var(
        --agnosticui-btn-primary-raised-to,
        var(--agnosticui-default-btn-primary-raised-to)
      )
    )
  );
  background: linear-gradient(
    var(
      --agnosticui-btn-primary-raised-from,
      var(--agnosticui-default-btn-primary-raised-from)
    ),
    var(
      --agnosticui-btn-primary-raised-to,
      var(--agnosticui-default-btn-primary-raised-to)
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
        --agnosticui-btn-primary-raised-hover-from,
        var(--agnosticui-default-btn-primary-raised-hover-from)
      )
    ),
    to(
      var(
        --agnosticui-btn-primary-raised-to,
        var(--agnosticui-default-btn-primary-raised-to)
      )
    )
  );
  background: linear-gradient(
    var(
      --agnosticui-btn-primary-raised-hover-from,
      var(--agnosticui-default-btn-primary-raised-hover-from)
    ),
    var(
      --agnosticui-btn-primary-raised-to,
      var(--agnosticui-default-btn-primary-raised-to)
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
    --agnosticui-btn-secondary-raised-to,
    var(--agnosticui-default-btn-secondary-raised-to)
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(
      var(
        --agnosticui-btn-secondary-raised-from,
        var(--agnosticui-default-btn-secondary-raised-from)
      )
    ),
    to(
      var(
        --agnosticui-btn-secondary-raised-to,
        var(--agnosticui-default-btn-secondary-raised-to)
      )
    )
  );
  background: linear-gradient(
    var(
      --agnosticui-btn-secondary-raised-from,
      var(--agnosticui-default-btn-secondary-raised-from)
    ),
    var(
      --agnosticui-btn-secondary-raised-to,
      var(--agnosticui-default-btn-secondary-raised-to)
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
        --agnosticui-btn-secondary-raised-hover-from,
        var(--agnosticui-default-btn-secondary-raised-hover-from)
      )
    ),
    to(
      var(
        --agnosticui-btn-secondary-raised-to,
        var(--agnosticui-default-btn-secondary-raised-to)
      )
    )
  );
  background: linear-gradient(
    var(
      --agnosticui-btn-secondary-raised-hover-from,
      var(--agnosticui-default-btn-secondary-raised-hover-from)
    ),
    var(
      --agnosticui-btn-secondary-raised-to,
      var(--agnosticui-default-btn-secondary-raised-to)
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
    var(--agnosticui-btn-font-size, var(--agnosticui-default-btn-font-size)) + 4px
  );
  height: 48px;
  line-height: 48px;
  padding: 0 48px;
}

.btn-small {
  font-size: calc(
    var(--agnosticui-btn-font-size, var(--agnosticui-default-btn-font-size)) - 4px
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
      --agnosticui-btn-radius,
      var(--agnosticui-default-btn-radius)
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
      var(--agnosticui-btn-font-size, var(--agnosticui-default-btn-font-size)) + 4px
    );
    width: 48px;
    height: 48px;
  }

  .btn-circle-small {
    font-size: calc(
      var(--agnosticui-btn-font-size, var(--agnosticui-default-btn-font-size)) - 4px
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

<button {type} class={klasses} on:click={handleClick}>
  <slot />
</button>
