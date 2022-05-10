<template>
  <label
    :class="switchContainer"
    :for="id"
  >
    <span
      v-if="labelPosition === 'left'"
      :class="switchLabel"
    >{{ label }}</span>
    <input
      :id="id"
      type="checkbox"
      :class="switchInput"
      :checked="modelValue"
      :disabled="isDisabled"
      role="switch"
      @change="triggerChange($event)"
      @click="handleClick"
      @keypress="handleKeypress"
    >
    <span
      :class="switchSpan"
      aria-hidden="true"
    />
    <span
      v-if="labelPosition === 'right'"
      :class="switchLabel"
    >{{ label }}</span>
  </label>
</template>
<script setup lang="ts">
import { computed, useCssModule } from "vue";
export interface SwitchProps {
  modelValue?: boolean;
  id: string;
  label: string;
  css?: string;
  labelPosition?: "left" | "right";
  size?: "small" | "large" | null;
  isChecked?: boolean;
  isDisabled?: boolean;
  isBordered?: boolean;
  isAction?: boolean;
}

const props = withDefaults(defineProps<SwitchProps>(), {
  css: "",
  labelPosition: "left",
  size: null,
});

const styles = useCssModule();

const emit = defineEmits(["update:modelValue"]);

const switchSpan = computed(() => {
  return {
    [styles[`switch`]]: true,
    [styles["switch-border"]]: !!props.isBordered,
    [styles["switch-action"]]: !!props.isAction,
    [styles[`switch-${props.size}`]]: !!props.size,
  };
});

const switchInput = computed(() => {
  return [styles[`switch-input`]];
});

const switchLabel = computed(() => {
  return [styles[`switch-label`]];
});

const switchContainer = computed(() => {
  return {
    [styles[`switch-container`]]: true,
    [props.css]: !!props.css,
    [styles["switch-right"]]: props.labelPosition === "right",
    [styles["disabled"]]: !!props.isDisabled,
  };
});

const handleClick = (evt) => {
  const el = evt.target;
  if (el.getAttribute("aria-checked") == "true") {
    el.setAttribute("aria-checked", "false");
  } else {
    el.setAttribute("aria-checked", "true");
  }
};

const handleKeypress = (evt) => {
  const keyCode = evt.keyCode || evt.which;
  switch (keyCode) {
    case 13:
      evt.preventDefault();
      evt.target.click();
      break;
  }
};

const triggerChange = (e) => {
  emit("update:modelValue", e.target.checked);
};
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
.switch::before,
.switch::after {
  border: 1px solid var(--agnostic-gray-mid-dark);
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

/* styling specific to the knob of the switch */
.switch::after {
  background: #fff;
  border-radius: 100%;
  width: 1.4rem;
  height: 1.4rem;
  right: 1.4rem;
  transition: right var(--agnostic-timing-fast) ease-in-out;
}

/* styling specific to the knob "container" */
.switch::before {
  background: #eee;
  border-radius: 1.75rem;
  width: 2.75rem;
  height: 1.75rem;
  right: 0.25rem;
  transition: background var(--agnostic-timing-medium) ease-in-out;
}

/* Sizes */
.switch-small::after {
  width: 1.25rem;
  height: 1.25rem;
  right: 1.125rem;
}

.switch-small::before {
  width: 2.25rem;
  height: 1.5rem;
}

.switch-large::after {
  width: 1.65rem;
  height: 1.65rem;
  right: 1.65rem;
}

.switch-large::before {
  width: 3.25rem;
  height: 2rem;
}

.switch-border::before {
  border: 1px solid var(--agnostic-primary);
}

.switch-action.switch-border::before {
  border: 1px solid var(--agnostic-action);
}

/* Switch label on right */

/* We have to flip the positioning when the label is on the right of switch */
.switch-right .switch::before {
  right: initial;
  left: 0.25rem;
}

.switch-right .switch::after {
  right: initial;
  left: 1.4rem;
}

/* Switch sizes w/label on right -- I expect SMACSS so .switch .switch-small
classes should both exist so the right: initial was taken care of above :) */
.switch-right .switch-small::after {
  left: 1.125rem;
}

.switch-right .switch-large::after {
  left: 1.65rem;
}

/* ---- CHECKED STATE ----- */

/* change the position of the knob to indicate it has been checked */

.switch-input:checked + .switch-small::after {
  right: 0.425rem;
}

.switch-input:checked + .switch::after {
  right: 0.5em;
}

.switch-right .switch-label {
  position: absolute;
  right: 0;

  /* Flips transition target to left to preserve our smooth transitions */
  transition: left var(--agnostic-timing-fast) ease-in-out;
}

.switch-right .switch-input:checked + .switch::after {
  right: initial;
  left: 0.5em;
}

.switch-right .switch-input:checked + .switch-small::after {
  right: initial;
  left: 0.425rem;
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
  opacity: 0.01%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.switch-input:focus + .switch::before {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);
}

/* update the color of the "container" to further visually indicate state */
.switch-input:checked + .switch:not(.switch-border)::before {
  background: var(--agnostic-primary);
}

.switch-input:checked + .switch-action:not(.switch-border)::before {
  background: var(--agnostic-action);
}

/* Border switch on checked the thumb gets primary or action bg respectively */
.switch-input:checked + .switch-border::after {
  background: var(--agnostic-primary);
}

.switch-input:checked + .switch-action.switch-border::after {
  background: var(--agnostic-action);
}

/* Disabled aka :disabled is not actually supported for <label>
element so we use attribute selector for that:
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled#:~:text=The%20disabled%20attribute%20is%20supported,control%20or%20its%20descendant%20controls.
*/
.switch-input[disabled] + .switch,
.switch-input[disabled] + .switch-label,
.switch-container.disabled {
  color: var(--agnostic-input-disabled-color, var(--agnostic-disabled-color)) !important;
  appearance: none !important;
  box-shadow: none !important;
  cursor: not-allowed !important;
  opacity: 80% !important;
}

@media screen and (-ms-high-contrast: active) {
  .switch::after {
    background-color: windowText;
  }

  /* High contrast mode outline hacks */
  .switch-input[disabled] + .switch-label,
  .switch-container.disabled {
    outline: 2px solid transparent;
    outline-offset: -2px;
  }
}

@media (prefers-reduced-motion), (update: slow) {
  .switch::after,
  .switch::before {
    transition-duration: 0.001ms !important;
  }
}

</style>
