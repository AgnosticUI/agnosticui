<script>
  import { createEventDispatcher } from "svelte";
  export let mode = "";
  export let label = "";
  export let size = "";
  export let isBordered = false;
  export let isDisabled = false;
  export let isRaised = false;
  export let isRounded = false;
  export let isIconLeft = false;
  export let isIconRight = false;
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
    "btn",
    mode ? `btn-${mode}` : "",
    size ? `btn-${size}` : "",
    isBordered ? "btn-bordered" : "",
    isRounded ? "btn-rounded" : "",
    isDisabled ? "disabled" : "",
    isRaised ? "btn-raised" : "",
    isIconLeft ? "btn-icon-left" : "",
    isIconRight ? "btn-icon-right" : "",
    css ? `${css}` : "",
  ];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");

  const dispatch = createEventDispatcher();
  function onClick(event) {
    dispatch("click", event);
  }
</script>

<style>
  :root {
    --agnostic-default-btn-bgcolor: #e9e9e9;
    --agnostic-default-btn-raised-from: #f8f8f8;
    --agnostic-default-btn-raised-to: #d8d8d8;
    --agnostic-default-btn-primary-raised-from: #34a5f8;
    --agnostic-default-btn-primary-raised-to: #088ef0;
    --agnostic-default-btn-primary-raised-hover-from: #42abf8;
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
    --agnostic-default-btn-font-family: "Open Sans", "Helvetica Neue Light",
      "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    --agnostic-default-btn-primary: #1087db;
    --agnostic-default-btn-primary-color: #ffffff;
    --agnostic-default-btn-radius: 4px;
  }

  /*
* Base Button Style
*
* The default values for the .btn class
*/
  .btn {
    /* TODO test this fallback override syntax is correct */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    line-height: var(--agnostic-default-btn-line-height);
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
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: var(--agnostic-default-btn-side-padding);
    padding-right: var(--agnostic-default-btn-side-padding);
    cursor: pointer;
    box-sizing: border-box;
    transition-property: all;
    transition-duration: 0.3s;
    /* We add this back in the :focus box-shadow further down */
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
  .btn-primary.btn-bordered:hover {
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
  .btn-raised:active,
  .btn-raised.active,
  .btn-raised.is-active {
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
          --agnostic-default-btn-primary-raised-from,
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
        --agnostic-default-btn-primary-raised-from,
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
          --agnostic-default-btn-primary-raised-hover-from,
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
        --agnostic-default-btn-primary-raised-hover-from,
        var(--agnostic-default-btn-primary-raised-hover-from)
      ),
      var(
        --agnostic-btn-primary-raised-to,
        var(--agnostic-default-btn-primary-raised-to)
      )
    );
  }

  .btn-raised.btn-primary:active,
  .btn-raised.btn-primary.active,
  .btn-raised.btn-primary.is-active {
    opacity: 0.9;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
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
  * Button Icons
  *
  * TODO -- this breaks if they use something like an <i class="fa"> or anything not SVG really
  */
  .btn-icon-left :global(svg) {
    /* Svelte needs :global(svg) here! */
    margin-right: 6px;
  }
  .btn-icon-right :global(svg) {
    /* Svelte needs :global(svg) here! */
    margin-left: 6px;
  }
</style>

<button {type} class={klasses} on:click={onClick}>
  {#if isIconLeft}
    <slot />
  {/if}
  {label}
  {#if isIconRight}
    <slot />
  {/if}
</button>
