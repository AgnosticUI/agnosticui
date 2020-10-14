<script>
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
  // Looks like the way to propogate boilerplate events is to
  // just declare in template like on:blur on:focus and so on
  // https://github.com/sveltejs/svelte/issues/585
  // Looks like this is what smelte is doing:
  // https://github.com/matyunya/smelte/blob/master/src/components/TextField/TextField.svelte
  export let label = "";
  export let uniqueId = "";
  export let labelCss = "";
  export let helpText = "";
  export let invalidText = "";
  export let hasLeftAddon = false;
  export let hasRightAddon = false;
  export let isInvalid = false;
  export let isRounded = false;
  export let inputCss = "";
  export let isSkinned = true;
  export let isUnderlinedWithBackground = false;
  export let isUnderlined = false;
  export let size = "";
  export let value = "";
  export let type = "text";

  $: if (!value) value = "";

  const labelClasses = () => {
    let labelKlasses = [
      "label",
      isInvalid ? "label-error" : "",
      size ? `label-${size}` : "",
      labelCss ? labelCss : "",
    ];
    labelKlasses = labelKlasses.filter((klass) => klass.length);
    labelKlasses = labelKlasses.join(" ");
    return labelKlasses;
  };
  const inputClasses = () => {
    let inputKlasses = [
      isSkinned ? "input" : "input-base",
      isRounded ? "input-rounded" : "",
      isUnderlined ? "input-underlined" : "",
      hasLeftAddon ? "input-has-left-addon" : "",
      hasRightAddon ? "input-has-right-addon" : "",
      isInvalid ? "input-error" : "",
      isUnderlinedWithBackground ? "input-underlined-bg" : "",
      inputCss ? inputCss : "",
      size ? `input-${size}` : "",
    ];
    inputKlasses = inputKlasses.filter((klass) => klass.length);
    inputKlasses = inputKlasses.join(" ");
    return inputKlasses;
  };

  const invalidClasses = () => {
    return size ? `field-error-${size}` : "field-error";
  };
  const helpClasses = () => {
    return size ? `field-help-${size}` : "field-help";
  };
  const addonContainerClasses = () => "input-addon-container";

  const getInputType = () => {
    if (!TYPES.includes(type)) {
      console.warn(`allowed types are ${TYPES}`);
      type = "text";
    }
    return type;
  };
</script>

<style>
.input-base,
.input {
  user-select: none;
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
  /* These custom props all fallback on the agnosticui main variables so main theme is preserved */
  --agnosticui-input-error-color: var(--agnosticui-error-color, var(--agnosticui-secondary));
  --agnosticui-input-help-color: var(--agnosticui-help-color, var(--agnosticui-gray-dark));
  --agnosticui-input-font-color: var(--agnosticui-font-color, var(--agnosticui-dark));
  --agnosticui-input-font-weight: var(--agnosticui-font-weight, 300);
  --agnosticui-input-font-size: var(--agnosticui-font-size, var(--Space-16));
  --agnosticui-input-label-font-size: calc(var(--agnosticui-input-font-size) - 2px);
  --agnosticui-input-border-size: var(--agnosticui-border-size, 1px);
  --agnosticui-input-border-color: var(--agnosticui-border-color, var(--agnosticui-gray-light));
  --agnosticui-input-radius: var(--agnosticui-border-radius, var(--Space-4));
  --agnosticui-input-underlined-color: var(--agnosticui-underlined-color, var(--agnosticui-gray-mid-dark));
  --agnosticui-input-underlined-bg-color: var(--agnosticui-underlined-bg-color, var(--agnosticui-gray-extra-light));

  /* TODO -- share these with agnosticui buttons */
  --agnosticui-input-disabled-bg: var(--agnosticui-disabled-bg, var(--agnosticui-gray-light));
  --agnosticui-input-disabled-color: var(--agnostic-disabled-color, var(--agnosticui-gray-dark));

  /* these can be overriden, but it might mess with the balance of the inputheights across variants */
  --agnosticui-input-vertical-pad: var(--agnosticui-vertical-pad, var(--Space-8));
  /* Provided --agnosticui-input-vertical-pad isn't overriden we'll get 20px
  label w/a 6px margin then a 38px input = 64 which is on the 8pt grid */
  --agnosticui-input-label-pad: var(--agnosticui-label-pad, var(--Space-6));
  --agnosticui-input-line-height: var(--agnosticui-line-height, 20px);
  --agnosticui-input-side-padding: var(--agnosticui-side-padding, var(--Space-12));
  --agnosticui-input-font-family: var(--agnosticui-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Ubuntu", "Fira Sans", Helvetica, "Droid Sans", "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --agnosticui-input-btn-radius: var(--agnosticui-border-radius, var(--Space-4));
  color: var(--agnosticui-input-font-color);
  font-family: var(--agnosticui-input-font-family);
  font-weight: var(--agnosticui-input-font-weight);
  font-size: var(--agnosticui-input-font-size);
  line-height: var(--agnosticui-input-line-height);
  width: 100%;
  max-width: 100%;
}

.input-skin,
.input {
  border-color: var(--agnosticui-input-border-size,
    var(--agnosticui-default-btn-bgcolor)
  );
  /* seems like a reasonable default as chrome picks `outset` which results in a weird 3d effect */
  border-style: solid;
  /* this can be overriden, but it might mess with the balance of the button heights across variants */
  border-width: var(--agnosticui-input-border-size);
  border-color: var(--agnosticui-input-border-color);
  padding-top: var(--agnosticui-input-vertical-pad);
  padding-bottom: var(--agnosticui-input-vertical-pad);
  padding-left: var(--agnosticui-input-side-padding);
  padding-right: var(--agnosticui-input-side-padding);

  /* Note we only want to set properties that we actually want
  to transition in. For example, if we transition "all", the
  inputs will "grow in" on page load—not a happy effect :) */
  transition-property: box-shadow;
  transition-duration: var(--agnosticui-timing-medium);
}

.label {
  display: inline-block;
  margin: 0 0 var(--agnosticui-input-label-pad);
  vertical-align: initial;
}

/* Reset labels and field errors to be 2px less then input font size */
.field-help,
.field-error,
.label,
.label-skin {
  font-size: var(--agnosticui-input-label-font-size);
}

.label-inline,
.input-inline {
  width: auto;
}

/* When inlined, the margin-bottom will throw the label off-center with adjacent input */
.label-inline {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: var(--agnosticui-input-side-padding);
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
  border-color: var(--agnosticui-input-underlined-color);
  background-color: transparent;
}

.input-underlined-bg {
  background-color: var(--agnosticui-input-underlined-bg-color);
}

/**
* Rounded inputs
*/
.input-rounded {
  border-radius: var(--agnosticui-input-radius);
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
  color: var(--agnosticui-input-error-color);
}
.input-error {
  border-color: var(--agnosticui-input-error-color);
}

.label-error,
.field-error,
.field-error-small,
.field-error-large {
  color: var(--agnosticui-input-error-color);
}

.field-help,
.field-help-small,
.field-help-large {
  color: var(--agnosticui-input-help-color);
}

.field-help,
.field-help-small,
.field-help-large,
.field-error,
.field-error-small,
.field-error-large {
  display: inline-block;
  width: 100%;
  margin-top: calc(var(--agnosticui-input-vertical-pad) / 2);
}

/**
  * Sizes
  */
.input-large {
  font-size: calc(var(--agnosticui-input-font-size) + 4px);
  line-height: calc(var(--agnosticui-input-line-height) + 4px);
}

.field-help-large,
.field-error-large,
.label-large {
  font-size: calc(var(--agnosticui-input-label-font-size) + 2px);
}

.input-small {
  /* TODO -- use + var(--Space-4) if they fix the bug I logged: https://github.com/GoogleChrome/samples/issues/705 */
  font-size: calc(var(--agnosticui-input-font-size) - 4px);
  line-height: calc(var(--agnosticui-input-line-height) - 4px);
}

.field-help-small,
.field-error-small,
.label-small {
  /* Since labels are already smaller, bringing them down var(--Space-4) here
  just looks too small to my eye. */
  font-size: calc(var(--agnosticui-input-label-font-size) - 2px);
}

.input:focus {
  box-shadow: 0 0 0 3px rgba(55, 149, 225, 0.5);
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
.input.disabled,
.input:disabled {
  /* High contrast mode outline hacks */
  outline: 2px solid transparent;
  outline-offset: -2px;
  background: var(--agnosticui-input-disabled-bg) !important;
  color: var(--agnosticui-input-disabled-color) !important;
  cursor: default !important;
  appearance: none !important;
  box-shadow: none !important;
  opacity: 0.8 !important;
  cursor: not-allowed;
}

/**
 * Input "has addon"
 */

.input-addon-container {
  display: flex;
  position: relative;
  width: 100%;
}

.input-has-left-addon,
.input-has-right-addon {
  /* Maybe I should have defined another css prop for addon adjustments but trying
  to avoid any extra variable explosion there--will need to keep an eye on this */
  --addon-padding: calc(var(--agnosticui-input-side-padding) * 1.5);
  flex: 1;
}

.input-has-left-addon  {
  padding-left: calc(var(--addon-padding) * 2.25);
}

.input-has-right-addon  {
  padding-right: calc(var(--addon-padding) * 2.25);
}
</style>

<div>
  <label class={labelClasses()} for={uniqueId}>{label}</label>
  {#if type == 'textarea'}
    <textarea
      id={uniqueId}
      {value}
      class={inputClasses()}
      on:blur
      on:change
      on:input
      on:click
      on:focus
      {...$$restProps} />
  {:else if hasLeftAddon || hasRightAddon}
    <div class={addonContainerClasses()}>
      <slot name="addonLeft" />
      <input
        id={uniqueId}
        {value}
        type={getInputType()}
        class={inputClasses()}
        on:blur
        on:change
        on:input
        on:click
        on:focus
        {...$$restProps} />
      <slot name="addonRight" />
    </div>
  {:else}
    <input
      id={uniqueId}
      type={getInputType()}
      {value}
      class={inputClasses()}
      on:blur
      on:change
      on:input
      on:click
      on:focus
      {...$$restProps} />
  {/if}
  {#if isInvalid}
    <span class={invalidClasses()}> {invalidText} </span>
  {:else if helpText}<span class={helpClasses()}>{helpText}</span>{/if}
</div>