<style>
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
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
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
.checkbox-label-copy,
.radio-label-copy,
.checkbox-label,
.radio-label {
  display: inline-flex;
  position: relative;
  align-items: center;
  flex-wrap: wrap;
}

.checkbox-label-copy-small,
.radio-label-copy-small {
  font-size: var(--agnostic-small); /* 0.875rem */
}

.checkbox-label-copy-large,
.radio-label-copy-large {
  font-size: calc(var(--agnostic-body) + 2px); /* 1rem + 2px (~18px) */
}

/* The checkmark itself */
.checkbox-label::after {
  content: "";
  position: absolute;
  left: var(--fluid-6);
  top: 1px;
  width: var(--fluid-6);
  height: var(--fluid-12);
  border: solid var(--agnostic-light);
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
  top: 0;
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
  /* stylelint-disable-next-line max-line-length */
  box-shadow: 0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light)), 0 0 0 calc(1.5 * var(--fluid-2)) var(--agnostic-light), 0 0 0 calc(2.25 * var(--fluid-2)) var(--agnostic-focus-ring-color);
}

.checkbox:focus + .checkbox-label::before {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  /* stylelint-disable-next-line max-line-length */
  outline: var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);
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
.checkbox[disabled] ~ .checkbox-label-copy,
.radio[disabled] ~ .radio-label-copy,
.checkbox-label-wrap[class="disabled"],
.radio-label-wrap[class="disabled"],
.checkbox-label-wrap-inline[class="disabled"],
.radio-label-wrap-inline[class="disabled"] {
  color: var(--agnostic-input-disabled-color, var(--agnostic-disabled-color)) !important;
  appearance: none !important;
  box-shadow: none !important;
  cursor: not-allowed !important;
  opacity: 80% !important;
}

.choice-input-error {
  color: var(--agnostic-input-error-color, var(--agnostic-error));
}

@media screen and (-ms-high-contrast: active) {
  /* High contrast mode outline hacks */
  .checkbox-label-wrap[class="disabled"],
  .radio-label-wrap[class="disabled"],
  .checkbox-label-wrap-inline[class="disabled"],
  .radio-label-wrap-inline[class="disabled"] {
    outline: 2px solid transparent;
    outline-offset: -2px;
  }
}

</style>

<script>
  const TYPE = ["checkbox", "radio"];
  export let id;
  export let isSkinned = true;
  export let isFieldset = true;
  export let isInline = false;
  export let isDisabled = undefined;
  export let isInvalid = false;
  export let options = [];
  export let disabledOptions = [];
  export let checkedOptions = [];
  // If isFieldset falsy this will be screenreader only. If legendLabel is not passed
  // in, it will fallback to the type prop or string choice input. Some content must be
  // within the <legenc>CONTENT</legend> element to meet accessibility requirements
  export let type = "checkbox";
  export let legendLabel = type || "choice input";
  export let size = "";

  // Provides bind:checked capabilities that consumer can use
  export let checked = [];

  $: labelClasses = [
    type ? `${type}-label-wrap` : "",
    isInline ? `${type}-label-wrap-inline` : "",
    isDisabled ? "disabled" : "",
  ].filter((c) => c.length).join(" ");
  
  $: labelSpanClasses = [
    type ? `${type}-label` : "",
    isInvalid ? 'choice-input-error' : "",
    size ? `${type}-label-${size}` : "",
  ].filter((c) => c.length).join(" ");

  // If consumer sets is skinned to false we don't style the legend
  $: skin = isSkinned ? `${type}-legend` : "";

  $: labelCopyClasses = [
    // Will also need to work in the small
    // and large sizes here for the text copy
    type ? `${type}-label-copy` : "",
    size ? `${type}-label-copy-${size}` : "",
    isInvalid ? 'choice-input-error' : "",
  ].filter((c) => c.length).join(" ");

  $: legendClasses = [
    skin,
    // .screenreader-only is expected to be globally available via common.min.css
    isFieldset === false ? "screenreader-only" : ""
  ].filter(c => c).join(" ");

  $: fieldsetClasses = () => {
    // If consumer sets is skinned to false we don't style the fieldset
    const skin = isSkinned ? `${type}-group` : "";

    // we only add the fieldset class for large (not small) e.g. radio|checkbox-group-large
    const sizeSkin =
      isSkinned && size === "large" ? `${type}-group-${size}` : "";

    let klasses = [
      skin,
      sizeSkin,
      isFieldset === false ? `${type}-group-hidden` : "",
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(" ");
  };

  $: inputClasses = () => {
    let inputKlasses = [
      type ? `${type}` : "",
      size ? `${type}-${size}` : "",
      // isDisabled ? "disabled" : "",
    ];
    inputKlasses = inputKlasses.filter((klass) => klass.length);
    return inputKlasses.join(" ");
  };
</script>

<fieldset class={fieldsetClasses()}>
  <legend class={legendClasses}>{legendLabel}</legend>
  {#each options as { name, value, label }, index}
    <label
      class={labelClasses}
      class:disabled={isDisabled || disabledOptions.includes(value) || undefined}
    >
      <input
        class={inputClasses()}
        id="{id}-{name}-{index}"
        type={type}
        name={name}
        value={value}
        disabled={isDisabled || disabledOptions.includes(value)}
        checked={checkedOptions.includes(value)}
        on:blur
        on:change={(e) => {
          // This allows the consumer to use bind:checked={checkedValues} idiom.
          // We cannot use the bind:group idiom as we're using dynamic type above,
          // So, essentially, we're manually implementing two-way binding here ;-)
          checked =
            Array.from(document.getElementsByName(e.target.name))
              .filter(el => el.checked)
              .map(el => el.value);
        }}
        on:input
        on:click
        on:focus
        {...$$restProps}
      />
      <span class={labelSpanClasses} aria-hidden="true"></span>
      <span class={labelCopyClasses}>{label}</span>
    </label>
  {/each}
</fieldset>
