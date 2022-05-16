<template>
  <a11y-dialog
    :id="id"
    :dialog-root="dialogRoot"
    :close-button-label="closeButtonLabel"
    :close-button-position="closeButtonPosition"
    :title-id="titleId"
    :class-names="getClassNames()"
    :role="role"
    @dialog-ref="assignDialogRef"
  >
    <template #closeButtonContent>
      <slot name="closeButtonContent">
        <Close
          is-faux
          size="large"
        >
          Close
        </Close>
      </slot>
    </template>
    <template #title>
      <slot name="title" />
    </template>
    <template #default>
      <slot name="default" />
    </template>
  </a11y-dialog>
</template>
<script setup lang="ts">
import { A11yDialog } from "vue-a11y-dialog";
import Close from "./Close.vue";
import {
  DialogClassNames,
  DialogCloseButtonPositions,
  DialogDrawerPlacement,
  DialogRoles,
} from "./DialogApi";
import { useCssModule } from "vue";

export interface DialogProps {
  id: string;
  dialogRoot: string;
  classNames?: DialogClassNames;
  role?: DialogRoles;
  titleId?: string;
  closeButtonLabel?: string;
  closeButtonPosition?: DialogCloseButtonPositions;
  isAnimationFadeIn?: boolean;
  isAnimationSlideUp?: boolean;
  drawerPlacement?: DialogDrawerPlacement;
}

const styles = useCssModule();
const emit = defineEmits(["instance"]);

const props = withDefaults(defineProps<DialogProps>(), {
  // classNames: {} as DialogClassNames,
  role: "dialog",
  closeButtonLabel: "Close this dialog window",
  closeButtonPosition: "first",
  isAnimationFadeIn: false,
  isAnimationSlideUp: false,
  // drawerPlacement: [],
});

const assignDialogRef = (instance) => {
  emit("instance", instance);
};

/**
 * classNamesProps is passed so we can check before using our local CSS Modules styles,
 * as we don't want to overwrite consumer set classNames if passed in.
 */
// const getClassNames = (classNamesProps, isFadeIn, isSlideUp) => {
const getClassNames = () => {
  const { classNames, drawerPlacement, isAnimationFadeIn, isAnimationSlideUp } =
    props;

  const documentClasses = {
    [styles["dialog-content"]]: true,
    [styles["dialog-slide-up-fade-in"]]:
      isAnimationFadeIn && isAnimationSlideUp,
    [styles["dialog-slide-up"]]: !isAnimationFadeIn && isAnimationSlideUp,
    [styles["dialog-fade-in"]]: isAnimationFadeIn && !isAnimationSlideUp,
    [styles["drawer-content"]]: drawerPlacement?.length,
  };
  const containerClasses = {
    [styles.dialog]: true,
    [styles[`drawer-${drawerPlacement}`]]: drawerPlacement,
  };
  const defaultClassNames = {
    container: containerClasses,
    overlay: styles["dialog-overlay"],
    document: documentClasses,
    title: "h4 mbe16",
    closeButton: `${styles["dialog-close"]} dialog-close-button`,
  };
  // Anything defined on classNames props passed in will override our defaults
  return { ...defaultClassNames, ...classNames };
};
</script>

<style>
/* These are styles for the case where classNames.closeButton property was NOT
passed in and so we're generating the default close 'X' button on the upper right. */
.dialog-close-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  width: var(--fluid-32);
  height: var(--fluid-32);
}

.dialog-close-button:hover,
.dialog-close-button:active,
.dialog-close-button:focus {
  background: none;

  /* Needed for High Contrast mode */
  outline: var(--agnostic-focus-ring-outline-width)
    var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
}

.dialog-close-button:focus {
  box-shadow: 0 0 0 3px var(--agnostic-focus-ring-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

@media (prefers-reduced-motion), (update: slow) {
  .dialog-close-button:focus {
    transition-duration: 0.001ms !important;
  }
}

.close-button-large > .close {
  width: var(--fluid-16);
  height: var(--fluid-16);
}

.dialog-close-button:hover .close {
  opacity: 100%;
}
</style>

<style module>
.dialog,
.dialog-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.dialog {
  z-index: 1001;
  display: flex;
}

.dialog[aria-hidden="true"] {
  display: none;
}

.dialog-overlay {
  background-color: rgb(50 50 50 / 60%);
  animation: fade-in var(--agnostic-timing-fast) both;
}

.dialog-content {
  background-color: var(--agnostic-light);
  margin: auto;
  z-index: 1001;
  position: relative;
  padding: var(--fluid-16);
  max-width: 90%;
  width: 600px;
  border-radius: var(--agnostic-radius);
}

.dialog-fade-in {
  animation: fade-in var(--agnostic-timing-fast) both;
}

.dialog-slide-up {
  animation: slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both;
}

/**
 * Cannot use two separate CSS classes with animation: foo, bar
 * as the later class will overwrite the first (so this combines)
 */
.dialog-slide-up-fade-in {
  animation:
    fade-in var(--agnostic-timing-fast) both,
    slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both;
}

@media screen and (min-width: 700px) {
  .dialog-content {
    padding: var(--fluid-32);
  }
}

@keyframes fade-in {
  from {
    opacity: 0%;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(10%);
  }
}

/* Shared with AgnosticUI close buton so only need positioning and transition */
.dialog-close {
  position: absolute;
  top: var(--fluid-8);
  right: var(--fluid-8);
}

@media (prefers-reduced-motion), (update: slow) {
  .dialog-slide-up-fade-in,
  .dialog-fade-in,
  .dialog-slide-up,
  .dialog-content {
    transition-duration: 0.001ms !important;
  }
}

@media only screen and (min-width: 576px) {
  .dialog-close {
    top: var(--fluid-12);
    right: var(--fluid-12);
  }
}

@media screen and (min-width: 768px) {
  .dialog-close {
    top: var(--fluid-16);
    right: var(--fluid-16);
  }
}

.drawer-start {
  right: initial;
}

.drawer-start[aria-hidden] {
  transform: none;
}

.drawer-end {
  left: initial;
}

.drawer-end[aria-hidden] {
  transform: none;
}

.drawer-top {
  bottom: initial;
  transform: none;
}

.drawer-top[aria-hidden] {
  transform: none;
}

.drawer-bottom {
  top: initial;
  transform: none;
}

.drawer-bottom[aria-hidden] {
  transform: none;
}

.drawer-content {
  margin: initial;
  max-width: initial;
  border-radius: initial;
}

.drawer-start .drawer-content,
.drawer-end .drawer-content {
  width: 25rem;
}

.drawer-top .drawer-content,
.drawer-bottom .drawer-content {
  height: 25vh;
  width: 100%;
}

</style>
