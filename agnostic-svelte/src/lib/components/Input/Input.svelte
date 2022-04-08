<style>
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

<script lang="ts">
  // Looks like the way to propogate boilerplate events is to
  // just declare in template like on:blur on:focus and so on
  // https://github.com/sveltejs/svelte/issues/585
  // Looks like this is what smelte is doing:
  // https://github.com/matyunya/smelte/blob/master/src/components/TextField/TextField.svelte
  export let label = "";
  export let id = "";
  export let labelCss = "";
  export let helpText = "";
  export let invalidText = "";
  export let hasLeftAddon = false;
  export let hasRightAddon = false;
  export let isInvalid = false;
  export let isInline = false;
  export let isRounded = false;
  export let isDisabled = undefined;
  export let css = "";
  export let isSkinned = true;
  export let isUnderlinedWithBackground = false;
  export let isUnderlined = false;
  export let size = "";
  
  export let value = "";
  // Consumer can pass any valid html5 input type. Default is text
  export let type = 'text';

  $: if (!value) value = "";
  $: inputType = type;

  $: labelClasses = [
    "label",
    isInvalid ? "label-error" : "",
    isInline ? "label-inline" : "",
    size ? `label-${size}` : "",
    labelCss ? labelCss : "",
  ].filter(c => c).join(" ");

  $: inputClasses = [
    isSkinned ? "input" : "input-base",
    isRounded ? "input-rounded" : "",
    isUnderlined ? "input-underlined" : "",
    hasLeftAddon ? "input-has-left-addon" : "",
    hasRightAddon ? "input-has-right-addon" : "",
    isDisabled ? "disabled" : "",
    isInvalid ? "input-error" : "",
    isInline ? "input-inline" : "",
    isUnderlinedWithBackground ? "input-underlined-bg" : "",
    css ? css : "",
    size ? `input-${size}` : "",
  ].filter(c => c).join(" ");

  $: invalidClasses = () => {
    return size ? `field-error-${size}` : "field-error";
  };
  
  $: helpClasses = () => {
    return size ? `field-help-${size}` : "field-help";
  };
  
  $: addonContainerClasses = () => "input-addon-container";

  $: updateType = (node) => {
    console.log('updateType: ', inputType)
    node.type = inputType;
  }
</script>
<div class="w-100">
  <label class={labelClasses} for={id}>{label}</label>
  {#if type == "textarea"}
    <textarea
      id={id}
      bind:value
      class={inputClasses}
      on:blur
      on:change
      on:input
      on:click
      on:focus
      {...$$restProps}></textarea>
  {:else if hasLeftAddon || hasRightAddon}
    <div class={addonContainerClasses()}>
      <slot name="addonLeft" />
      <input
        id={id}
        use:updateType
        bind:value
        class={inputClasses}
        disabled={isDisabled}
        on:blur
        on:change
        on:input
        on:click
        on:focus
        {...$$restProps}
      />
      <slot name="addonRight" />
    </div>
  {:else}
    <input
      id={id}
      use:updateType
      bind:value
      class={inputClasses}
      disabled={isDisabled}
      on:blur
      on:change
      on:input
      on:click
      on:focus
      {...$$restProps}
    />
  {/if}
  {#if isInvalid}
    <span role="status" aria-live="polite" class={invalidClasses()}>
      {invalidText}
    </span>
  {:else if helpText}<span class={helpClasses()}>{helpText}</span>{/if}
</div>
