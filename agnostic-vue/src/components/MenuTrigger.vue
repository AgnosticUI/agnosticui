<template>
  <button
    ref="triggerRef"
    :class="triggerClasses"
    aria-haspopup="true"
    :aria-expanded="expanded"
    :disabled="isDisabled"
    @keydown="$emit('trigger-keydown', $event)"
    @click="$emit('trigger-click', $event)"
  >
    {{ menuTitle }}
    <span
      :class="styles['menu-icon']"
      aria-hidden="true"
    >
      <slot name="icon" />
    </span>
  </button>
</template>
<script setup>
import { ref, onMounted, onUnmounted, useCssModule, useSlots } from "vue";

// References aka bindings
let triggerRef = ref(null);

// This "exposed" child's (aka MenuTrigger here) ref to the button element
// so that our parent (Menu) can access and use for focus management
defineExpose({
  triggerRef,
});
const styles = useCssModule();
const emit = defineEmits(["open", "close"]);
const props = defineProps({
  size: {
    type: String,
    default: "",
    validator(value) {
      return ["small", "large", ""].includes(value);
    },
  },
  menuTitle: {
    type: String,
    default: "",
  },
  // isDisabled is used to disable "all" items
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isBordered: {
    type: Boolean,
    required: false,
    default: false,
  },
  isRounded: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// const focusTriggerButton = () => triggerRef && triggerRef.value.focus();

// CSS Classes
let triggerSizeClasses;
switch (props.size) {
  case "small":
    triggerSizeClasses = styles["menu-trigger-small"];
    break;
  case "large":
    triggerSizeClasses = styles["menu-trigger-large"];
    break;
  default:
    triggerSizeClasses = "";
}

const triggerClasses = {
  [styles["menu-trigger"]]: true,
  [triggerSizeClasses]: true,
  [styles["menu-trigger-bordered"]]: props.isBordered,
  [styles["menu-trigger-rounded"]]: props.isRounded,
};
</script>
<style module>
.menu-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  background-color: var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));
  cursor: pointer;
  text-align: left;

  /* TODO -- can we compose some of this from the button styles? */
  border-color: var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));
  border-style: solid;
  border-width: var(--agnostic-btn-border-size, 1px);
  font-size: inherit;

  /* this can be overriden, but it might mess with the balance of the button heights across variants */
  line-height: var(--agnostic-line-height, var(--fluid-20, 1.25rem));
  padding-block-start: var(--agnostic-vertical-pad, 0.5rem);
  padding-block-end: var(--agnostic-vertical-pad, 0.5rem);
  padding-inline-start: var(--agnostic-side-padding, 0.75rem);
  padding-inline-end: var(--agnostic-side-padding, 0.75rem);
}

.menu-trigger:focus {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width)
    var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline: var(--agnostic-focus-ring-outline-width)
    var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;

  /* In order for the focused element's box-shadow to appear above its siblings we need to
  establish a new stacking context: https://stackoverflow.com/a/28042700 */
  isolation: isolate;
}

/* Sizes */
.menu-trigger-large {
  font-size: calc(var(--agnostic-btn-font-size, 1rem) + 0.25rem);
  height: 3rem;
  line-height: 2rem;
}

.menu-trigger-small {
  font-size: calc(var(--agnostic-btn-font-size, 1rem) - 0.25rem);
  height: 2rem;
  line-height: 1rem;
}

.menu-trigger-bordered {
  --menu-item-background-color: var(
    --agnostic-menu-item-background-color,
    white
  );

  background-color: var(--menu-item-background-color);
}

.menu-trigger-rounded {
  border-radius: var(--agnostic-radius);
}

/* TODO make this more flexible eventually */
.menu-icon {
  font-family: sans-serif;
  font-size: var(--fluid-18);
  margin-inline-start: var(--fluid-8);
  line-height: 1;
}
</style>
