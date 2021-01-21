<template>
  <label :class="switchContainer" :for="id">
    {{ label }}
    <input
      :class="switchInput"
      type="checkbox"
      :id="id"
      role="switch"
      aria-pressed="false"
      data-agnostic-switch
    />
    <span :class="switchSpan" aria-hidden="true"></span>
  </label>
</template>
<script>
export default {
  name: "agnosticui-switch",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    }
  },
  computed: {
    switchSpan() {
      return [this.$style[`switch`]];
    },
    switchInput() {
      return [this.$style[`switch-input`]];
    },
    switchContainer() {
      return [this.$style[`switch-container`]];
    }
  }
}
</script>
<style module>
/**
 * Switch
 * 
 * This switch is inspired by Scott Ohara's checkbox switch:
 * https://scottaohara.github.io/a11y_styled_form_controls/src/checkbox--switch/
 */
.switch-container {
  display: block;
  overflow: hidden;
  padding: 0.5em;
  position: relative;
}

.switch-container:hover {
  cursor: pointer;
}

/* using the before/after pseudo elements of the span to create the "switch" */
.switch:before,
.switch:after {
  border: 1px solid var(--agnosticui-gray-mid-dark);
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

/* styling specific to the knob of the switch */
.switch:after {
  background: #fff;
  border-radius: 100%;
  height: 1.4em;
  right: 1.4em;
  transition: right var(--agnosticui-timing-fast) ease-in-out;
  width: 1.4em;
}

/* styling specific to the knob "container" */
.switch:before {
  background: #eee;
  border-radius: 1.75em;
  height: 1.75em;
  right: 0.25em;
  transition: background var(--agnosticui-timing-medium) ease-in-out;
  width: 2.75em;
}

.switch-border:before {
  border: 1px solid var(--agnosticui-primary);
}

.switch-action.switch-border:before {
  border: 1px solid var(--agnosticui-action);
}

/* From: https://scottaohara.github.io/a11y_styled_form_controls/src/checkbox--switch/
  hide the actual checkbox from view, but not from keyboards or ATs.
  Instead of standard visually hidden styling, instead set opacity to
  almost 0 (not zero for ChomeVox legacy bug), pointer-events none, and
  then set to full height/width of container element so that VO focus
  ring outlines the component, instead of a tiny box within the component
*/
.switch-input {
  margin: 0;
  opacity: 0.0001;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.switch-input:focus + .switch:before {
  box-shadow: 0 0 0 3px var(--agnosticui-focus-ring-color);
}

/* change the position of the knob to indicate it has been checked*/
.switch-input:checked + .switch:after {
  right: 0.5em;
}

/* update the color of the "container" to further visually indicate state */
.switch-input:checked + .switch:not(.switch-border):before {
  background: var(--agnosticui-primary);
}

.switch-input:checked + .switch-action:not(.switch-border):before {
  background: var(--agnosticui-action);
}

/* Border switch on checked the thumb gets primary or action bg respectively */
.switch-input:checked + .switch-border:after {
  background: var(--agnosticui-primary);
}
.switch-input:checked + .switch-action.switch-border:after {
  background: var(--agnosticui-action);
}

@media screen and (-ms-high-contrast: active) {
  .switch:after {
    background-color: windowText;
  }
}

</style>
