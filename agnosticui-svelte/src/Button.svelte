<style>
  :root {
    --agnosticui-default-btn-bgcolor: #e9e9e9;
    --agnosticui-default-btn-raised-from: #f8f8f8;
    --agnosticui-default-btn-raised-to: #d8d8d8;
    --agnosticui-default-btn-primary-raised-from: #34a5f8;
    --agnosticui-default-btn-primary-raised-to: #088ef0;
    --agnosticui-default-btn-primary-raised-hover-from: #42abf8;
    --agnosticui-default-btn-disabled-bg: #cccccc;
    --agnosticui-default-btn-disabled-border: #bbbbbb;
    --agnosticui-default-btn-disabled-color: #aaaaaa;
    --agnosticui-default-btn-font-color: #333333;
    --agnosticui-default-btn-font-weight: 300;
    --agnosticui-default-btn-font-size: 16px;
    --agnosticui-default-btn-side-padding: calc(
      1.5 * var(--agnosticui-default-btn-font-size)
    );
    /* Note that we rely on line-height for the button's height. This used to be problemattic:
  https://cssnewbie.com/input-button-line-height-bug/ in older FF and Opera but we do not support
  this far back and so it seem cleaner to not hack in heights or paddings to defend. Also note, that
  we predict that 16 * 2.5 = 40. If one is to override this setup they should probably be cognizant
  of this math so that they end up with convenient button heights  */
    --agnosticui-default-btn-line-height: 2.5;
    --agnosticui-default-btn-font-family: -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Open Sans", "Ubuntu", "Fira Sans", Helvetica, "Droid Sans",
      "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    --agnosticui-default-btn-primary: #1087db;
    --agnosticui-default-btn-primary-color: #ffffff;
    --agnosticui-default-btn-radius: 4px;
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
    line-height: var(--agnosticui-default-btn-line-height);
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
    /* We can add back borders for certain types and the border color will then matter :) */
    border-width: 0;
    font-weight: var(
      --agnosticui-btn-font-weight,
      var(--agnosticui-default-btn-font-weight)
    );
    font-size: var(
      --agnosticui-btn-font-size,
      var(--agnosticui-default-btn-font-size)
    );
    font-family: var(
      --agnosticui-btn-font-family,
      var(--agnosticui-default-btn-font-family)
    );
    text-decoration: none;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: var(--agnosticui-default-btn-side-padding);
    padding-right: var(--agnosticui-default-btn-side-padding);
    cursor: pointer;
    box-sizing: border-box;
    transition-property: all;
    transition-duration: 0.3s;
    /* We add this back in the :focus box-shadow further down */
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
  .btn.is-disabled,
  .btn:disabled {
    top: 0 !important;
    background: var(
      --agnosticui-btn-disabled-bg,
      var(--agnosticui-default-btn-disabled-bg)
    ) !important;
    border: 1px solid
      var(
        --agnosticui-btn-disabled-border,
        var(--agnosticui-default-btn-disabled-border)
      ) !important;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 1) !important;
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
  .btn-primary.btn-bordered:hover {
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
  .btn-raised:active,
  .btn-raised.active,
  .btn-raised.is-active {
    /* TODO -- maybe this shouldn't be hard coded */
    background: #eeeeee;
    -webkit-box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white;
  }

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
          --agnosticui-default-btn-primary-raised-from,
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
        --agnosticui-default-btn-primary-raised-from,
        var(--agnosticui-default-btn-primary-raised-from)
      ),
      var(
        --agnosticui-btn-primary-raised-to,
        var(--agnosticui-default-btn-primary-raised-to)
      )
    );
  }
  /* .btn-raised.btn-primary:hover, .btn-raised.btn-primary:focus {
  background: -webkit-gradient(linear, left top, left bottom, from(#42abf8), to(#0888e6));
  background: linear-gradient(to bottom, #42abf8, #0888e6);
}
.btn-raised.btn-primary:active, .btn-raised.btn-primary.active, .btn-raised.btn-primary.is-active {
  border-color: #0880d7;
  background: #2798eb;
} */

  .btn-rounded {
    border-radius: var(
      --agnosticui-btn-radius,
      var(--agnosticui-default-btn-radius)
    );
  }

  .btn-bordered {
    border-width: 1px;
    background: transparent;
  }

  .btn-large {
    font-size: calc(
      var(--agnosticui-btn-font-size, var(--agnosticui-default-btn-font-size)) + 4px
    );
    height: 50px;
    line-height: 50px;
    padding: 0 50px;
  }

  .btn-small {
    font-size: calc(
      var(--agnosticui-btn-font-size, var(--agnosticui-default-btn-font-size)) - 4px
    );
    height: 30px;
    line-height: 30px;
    padding: 0 30px;
  }
  .btn > .icon-left {
    margin-right: 0.25em;
  }

  .btn > .icon-right {
    margin-left: 0.25em;
  }
</style>

<div>
  <h1>Buttons</h1>
</div>
<div>
  <h3>Natural</h3>
  <button class="btn">Go</button>
</div>
<div>
  <h3>Natural Rounded</h3>
  <button class="btn btn-rounded">Go</button>
</div>
<div>
  <h3>Primary</h3>
  <button class="btn btn-primary">Go</button>
</div>
<div>
  <h3>Primary Rounded</h3>
  <button class="btn btn-primary btn-rounded">Go</button>
</div>
