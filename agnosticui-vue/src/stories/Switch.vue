<template>
  <label :class="switchContainer" :for="id">
    <span :class="switchLabel" v-if="labelPosition === 'left'">{{ label }}</span>
    <input
      type="checkbox"
      :class="switchInput"
      :id="id"
      :checked="isChecked"
      :disabled="disabled"
      @change="triggerChange"
      @click="handleClick"
      @keypress="handleKeypress"
      role="switch"
      aria-pressed="false"
    />
    <span :class="switchSpan" aria-hidden="true"></span>
    <span :class="switchLabel" v-if="labelPosition === 'right'">{{ label }}</span>
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
    },
    labelPosition: {
      type: String,
      default: "left",
      validator: (value) => ["left", "right"].includes(value),
    },
    size: {
      type: String,
      default: null,
      validator: (value) => ["large", "small"].includes(value),
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isBordered: {
      type: Boolean,
      default: false,
    },
    isAction: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    switchSpan() {
      return {
        [this.$style[`switch`]]: true,
        [this.$style["switch-border"]]: !!this.isBordered,
        [this.$style["switch-action"]]: !!this.isAction,
        [this.$style[`switch-${this.size}`]]: !!this.size,
      };
    },
    switchInput() {
      return [this.$style[`switch-input`]];
    },
    switchLabel() {
      return [this.$style[`switch-label`]];
    },
    switchContainer() {
      return {
        [this.$style[`switch-container`]]: true,
        [this.$style['switch-right']]: this.labelPosition ==='right',
        [this.$style['disabled']]: !!this.disabled,
      }
    }
  },
  methods: {
    handleClick (evt) {
      const el = evt.target
      if (el.getAttribute('aria-pressed') == 'true') {
        el.setAttribute('aria-pressed', 'false')
      } else {
        el.setAttribute('aria-pressed', 'true')
      }
    },
    handleKeypress (evt) {
      const keyCode = evt.keyCode || evt.which
      switch (keyCode) {
        case 13:
          evt.preventDefault();
          evt.target.click();
          break;
      }
    },
    triggerChange (e) {
      console.log('in Trigger change', e)
      console.log('checked: ', e.target.checked)
      this.$emit('input', e.target.checked)
    }
  },
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
  /* TODO: Hopefully this doesn't become a problem but since we use absolute
  positioning extensively, we need some way to have adjacent spaced lines */
  min-height: 2.25rem;
  width: 100%;
  padding: 0.5rem;
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
  width: 1.4rem;
  height: 1.4rem;
  right: 1.4rem;
  transition: right var(--agnosticui-timing-fast) ease-in-out;
}

/* styling specific to the knob "container" */
.switch:before {
  background: #eee;
  border-radius: 1.75rem;
  width: 2.75rem;
  height: 1.75rem;
  right: 0.25rem;
  transition: background var(--agnosticui-timing-medium) ease-in-out;
}

/* Sizes */
.switch-small:after {
  width: 1.25rem;
  height: 1.25rem;
  right: 1.125rem;
}

.switch-small:before {
  width: 2.25rem;
  height: 1.5rem;
}

.switch-large:after {
  width: 1.65rem;
  height: 1.65rem;
  right: 1.65rem;
}

.switch-large:before {
  width: 3.25rem;
  height: 2rem;
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

/* ---- CHECKED STATE ----- */

/* change the position of the knob to indicate it has been checked*/
.switch-input:checked + .switch:after {
  right: 0.5em;
}
.switch-input:checked + .switch-small:after {
  right: 0.425rem;
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

/* Switch label on right */

/* Flips transition target to left to preserve our smooth transitions */
.switch-right .switch:after {
  transition: left var(--agnosticui-timing-fast) ease-in-out;
}

.switch-right .switch-input:checked + .switch:after {
  right: initial;
  left: 0.5em;
}
.switch-right .switch-input:checked + .switch-small:after {
  right: initial;
  left: 0.425rem;
}

/* We have to flip the positioning when the label is on the right of switch */
.switch-right .switch:before {
  right: initial;
  left: 0.25rem;
}

.switch-right .switch::after {
  right: initial;
  left: 1.4rem;
}

.switch-right .switch-label {
  position: absolute;
  top: 0;
  right: 0;
}

/* Switch sizes w/label on right -- I expect SMACSS so .switch .switch-small
classes should both exist so the right: initial was taken care of above :) */
.switch-right .switch-small:after {
  left: 1.125rem;
}

.switch-right .switch-large:after {
  left: 1.65rem;
}

/* Disabled aka :disabled is not actually supported for <label>
element so we use attribute selector for that:
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled#:~:text=The%20disabled%20attribute%20is%20supported,control%20or%20its%20descendant%20controls.
*/
.switch-input[disabled] + .switch,
.switch-input[disabled] + .switch-label,
.switch-container.disabled {
  color: var(--agnosticui-input-disabled-color, var(--agnosticui-disabled-color)) !important;
  appearance: none !important;
  box-shadow: none !important;
  cursor: not-allowed !important;
  opacity: 0.8 !important;
}

@media screen and (-ms-high-contrast: active) {
  .switch:after {
    background-color: windowText;
  }

  /* High contrast mode outline hacks */
  .switch-input[disabled] + .switch-label,
  .switch-container.disabled {
    outline: 2px solid transparent;
    outline-offset: -2px;
  }
}

</style>
