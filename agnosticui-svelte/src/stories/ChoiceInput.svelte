<script>
  import { stringify } from "querystring";

  const TYPE = ["checkbox", "radio"];
  export let isFieldset = true;
  export let isInline = true;
  export let isDisabled = undefined;
  export let options = [];
  export let legendLabel = "";
  export let type = "checkbox";
  export let size = "";
  const getType = () => {
    if (!TYPE.includes(type)) {
      console.warn(`allowed types are ${TYPE}`);
      type = "checkbox";
    }
    return type;
  };

  const labelClasses = () => {
    let klasses = [
      type ? `${type}-label-wrap` : "",
      !!isInline ? `${type}-label-wrap-inline` : "",
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(" ");
  };

  const labelSpanClasses = () => {
    let klasses = [
      type ? `${type}-label` : "",
      !!size ? `${type}-label-${size}` : "",
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(" ");
  };

  const fieldsetClasses = () => {
    let klasses = [
      type ? `${type}-group` : "",
      // we only add the fieldset class for large (not small) e.g. radio|checkbox-group-large
      size === "large" ? `${type}-group-${size}` : "",
      isFieldset === false ? `${type}-group-hidden` : "",
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(" ");
  };

  const inputClasses = () => {
    let inputKlasses = [
      type ? `${type}` : "",
      !!size ? `${type}-${size}` : "",
      isDisabled ? "disabled" : "",
    ];
    inputKlasses = inputKlasses.filter((klass) => klass.length);
    return inputKlasses.join(" ");
  };
</script>

<style>
/**
 * These radio and checkbox customizations are an amalgamation of various resources I've found on the internets; from Heydon
 * Pickering's radio article (and his Inclusive Components book), to Sara Soueidan, Scott O'Hara, MDO, and Adrian Roselli's
 * research on the matter of inclusive hiding and custom radio/checkbox inputs.
 */

.checkbox-group,
.radio-group {
  --width-28: calc(7 * var(--fluid-4)); /* 1.75rem/28px */
  border: 1px solid var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light));
  padding: var(--fluid-24);
  padding-top: var(--fluid-14);
  border-radius: 0.5rem;
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
  opacity: 0;
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
.checkbox-label:after {
  content: "";
  position: absolute;
  left: var(--fluid-6);
  top: var(--fluid-10);
  width: var(--fluid-6);
  height: var(--fluid-12);
  border: solid white;
  border-width: 0
    var(--fluid-2)
    var(--fluid-2)
    0;
  transform-origin: center center;
  transform: rotate(40deg) scale(0);
  transition-property: border, background-color, transform;
  transition-duration: var(--agnosticui-timing-fast);
  transition-timing-function: ease-in-out;
}
.checkbox-label:before,
.radio-label:before {
  content: '';
  display: inline-block;
  margin-inline-end: var(--agnosticui-checkbox-spacing-end, 0.75rem);
  transition: var(--agnosticui-timing-fast) ease-out all;
}

/* Since we build up the radio size outwardly, it's naturally larger then the checkboxes
so we add a multiplyer to even those out initially */
.checkbox-label:before {
  border: 2px solid var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light));
  width: var(--fluid-16);
  height: var(--fluid-16);
  transition: box-shadow var(--agnosticui-timing-fast) ease-out;
}

.radio-label:before {
  width: var(--fluid-14);
  height: var(--fluid-14);
  vertical-align: calc(-1 * var(--fluid-2));
  border-radius: 50%;
  border: var(--fluid-2) solid var(--agnosticui-checkbox-light, var(--agnosticui-light));
  box-shadow: 0 0 0 var(--fluid-2) var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light));
  transition: box-shadow var(--agnosticui-timing-fast) ease-out;
}

.checkbox-label-small:after {
  left: calc(1.25 * var(--fluid-4));
}
.checkbox-label-small:before {
  width: var(--fluid-14);
  height: var(--fluid-14);
}

.radio-label-small:before {
  width: var(--fluid-12);
  height: var(--fluid-12);
}

.checkbox-label-large:after {
  left: calc(1.75 * var(--fluid-4));
}

.checkbox-label-large:before {
  width: var(--fluid-18);
  height: var(--fluid-18);
}

.radio-label-large:before {
  width: var(--fluid-16);
  height: var(--fluid-16);
}

/* the checked style using the :checked pseudo class */
.radio:checked + :global(.radio-label:before) {
  background: var(--agnosticui-checkbox-fill-color, #08a880);
  box-shadow: 0 0 0 var(--fluid-2) var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light));
}

.radio:focus + :global(.radio-label:before) {
  box-shadow: 0 0 0 var(--fluid-2) var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light)),
    0 0 0 calc(1.5 * var(--fluid-2)) white,
    0 0 0 calc(2.25 * var(--fluid-2)) var(--agnosticui-focus-ring-color);
}

.checkbox:focus + :global(.checkbox-label:before) {
  box-shadow: 0 0 0 3px var(--agnosticui-focus-ring-color);
  outline: 3px solid transparent;
}

.checkbox:checked + :global(.checkbox-label:after) {
  transform: rotate(40deg) scale(1);
}
.checkbox:checked + :global(.checkbox-label:before) {
  background: var(--agnosticui-checkbox-fill-color, #08a880);
  border: 2px solid var(--agnosticui-checkbox-fill-color, #08a880);
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


/* Disabled aka :disabled is not actually supported for <label>
element so we use attribute selector for that:
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled#:~:text=The%20disabled%20attribute%20is%20supported,control%20or%20its%20descendant%20controls.
*/
.checkbox[disabled],
.radio[disabled],
.checkbox-label-wrap[disabled],
.radio-label-wrap[disabled],
.checkbox-label-wrap-inline[disabled],
.radio-label-wrap-inline[disabled] {
  /* High contrast mode outline hacks */
  outline: 2px solid transparent;
  outline-offset: -2px;
  color: var(--agnosticui-input-disabled-color, var(--agnosticui-disabled-color)) !important;
  appearance: none !important;
  box-shadow: none !important;
  opacity: 0.8 !important;
  cursor: not-allowed !important;
}


</style>

<fieldset class={fieldsetClasses()}>
  <legend>{legendLabel}</legend>
  {#each options as { name, value, label }, index}
    <label class={labelClasses()}>
      <input
        class={inputClasses()}
        id="choice-{name}-{index}"
        type={getType()}
        {name}
        {value}
        aria-hidden="true"
        disabled={isDisabled}
        on:blur
        on:change
        on:input
        on:click
        on:focus
        {...$$restProps} />
      <span class={labelSpanClasses()}>{label}</span>
    </label>
  {/each}
</fieldset>
