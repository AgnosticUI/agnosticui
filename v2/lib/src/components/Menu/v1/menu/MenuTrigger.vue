<template>
  <!--  Nominal default menu trigger aka 'simple' -->
  <button
    v-if="type === 'simple'"
    ref="triggerRef"
    :class="triggerClasses"
    aria-haspopup="true"
    :aria-expanded="isExpanded"
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
  <!--  Kebab | Meatball (horizontal kebab) | Hamburger variants -->
  <button
    v-if="type === 'kebab' || type === 'meatball' || type === 'hamburger'"
    ref="triggerRef"
    :class="kebabMeatballBurgerClasses"
    aria-haspopup="true"
    :aria-expanded="isExpanded"
    :disabled="isDisabled"
    @keydown="$emit('trigger-keydown', $event)"
    @click="$emit('trigger-click', $event)"
  >
    <span class="screenreader-only">{menuTitle}</span>
    <span :class="styles[`${type == 'hamburger' ? 'bar' : 'dot'}`]"></span>
    <span :class="styles[`${type == 'hamburger' ? 'bar' : 'dot'}`]"></span>
    <span :class="styles[`${type == 'hamburger' ? 'bar' : 'dot'}`]"></span>
  </button>
</template>
<script setup lang="ts">
import { ref, useCssModule } from "vue";
export interface MenuTriggerProps {
  menuTitle: string;
  type?: "simple" | "kebab" | "hamburger" | "meatball";
  size?: "small" | "large" | "";
  isExpanded?: boolean;
  isDisabled?: boolean;
  isBordered?: boolean;
  isRounded?: boolean;
}
const styles = useCssModule();

// References aka bindings
let triggerRef = ref<InstanceType<typeof HTMLButtonElement> | null>(null);

// This "exposed" child's (aka MenuTrigger here) ref to the button element
// so that our parent (Menu) can access and use for focus management
// See https://vuejs.org/api/sfc-script-setup.html#defineexpose
defineExpose({
  triggerRef,
});
const emit = defineEmits(["trigger-keydown", "trigger-click"]);

const props = withDefaults(defineProps<MenuTriggerProps>(), {
  type: "simple",
  size: "",
});

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

const kebabMeatballBurgerClasses = {
  [styles["btn-base"]]: true,
  [styles["btn-blank"]]: true,
  [styles["btn-kebab"]]: props.type === "kebab",
  [styles["btn-meatball"]]: props.type === "meatball",
  [styles["btn-hamburger"]]: props.type === "hamburger",
  // TODO -- need to test sizes, bordered, and rounded
  [triggerSizeClasses]: true,
  [styles["menu-trigger-bordered"]]: props.isBordered,
  [styles["menu-trigger-rounded"]]: props.isRounded,
};
</script>
<style module>.btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  appearance: none;
  cursor: pointer;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: var(--agnostic-timing-medium);
}

/**
 * Invisible buttons. Generally used for a Cancel or icon button that behaves like a button,
 * semantically and for a11y, but, does so without all the typical "button chrome" behind it.
 */
:is(.btn-link, .btn-blank) {
  font-family: var(--agnostic-btn-font-family, var(--agnostic-font-family-body));
  font-size: var(--agnostic-btn-font-size, 1rem);
  background-color: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  transition: none;
}

/* Since blank buttons can be used for things like input addons we don't want to go crazy
on the side padding. As such, these have a good bit less then regular buttons. */
.btn-blank {
  --agnostic-btn-blank-side-padding: var(--btn-blank-side-padding, 0.25rem);

  padding-inline-start: var(--agnostic-btn-blank-side-padding);
  padding-inline-end: var(--agnostic-btn-blank-side-padding);
}

/* A button blank with link color text */
.btn-link {
  color: var(--agnostic-btn-primary, var(--agnostic-primary));
}

.btn-link:hover {
  cursor: pointer;
}

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

.menu-trigger[disabled] {
  background: var(--agnostic-input-disabled-bg, var(--agnostic-disabled-bg)) !important;
  color: var(--agnostic-input-disabled-color, var(--agnostic-disabled-color)) !important;
  cursor: not-allowed !important;
  opacity: 80% !important;
}

.menu-trigger:focus {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
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
  --menu-item-background-color: var(--agnostic-menu-item-background-color, inherit);

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

:is(.btn-kebab, .btn-meatball) {
  justify-content: space-around;
  height: var(--fluid-24);
  width: var(--fluid-24);

  /* Rest here is supplied by btn-base and btn-blank */
}

/* We use btn-blank which doesn't include this :( */
:is(.btn-hamburger:focus, .btn-kebab:focus, .btn-meatball:focus) {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);
  outline:
    var(--agnostic-focus-ring-outline-width)
    var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

.btn-hamburger,
.btn-kebab {
  flex-direction: column;
}

.btn-meatball {
  flex-direction: row;
}

/* stylelint-disable-next-line no-duplicate-selectors */
.btn-meatball {
  --block-padding: var(--agnostic-side-padding);

  padding-block-start: var(--block-padding);
  padding-block-end: var(--block-padding);
  padding-inline-start: 0;
  padding-inline-end: 0;
}

.btn-hamburger {
  --vertical-padding: 3px;

  padding-block-start: var(--vertical-padding);
  padding-block-end: var(--vertical-padding);
  padding-inline-end: var(--fluid-2);
  padding-inline-start: var(--fluid-2);
}

.dot,
.bar {
  background-color: var(--agnostic-dark);
}

.dot {
  width: 5px;
  height: 5px;
  border-radius: 50px;
}

.bar {
  width: var(--fluid-20);
  height: var(--fluid-2);
  margin: var(--fluid-2) 0;
}

</style>
