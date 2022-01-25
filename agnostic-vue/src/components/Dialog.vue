<template>
  <a11y-dialog
    :id="id"
    :app-root="appRoot"
    :dialog-root="dialogRoot"
    :close-button-label="closeButtonLabel"
    :close-button-position="closePosition"
    :title-id="titleId"
    :role="role"
    :class-names="getClassNames(isAnimationFadeIn, isAnimationSlideUp)"
    @dialog-ref="assignDialogRef"
  >
    <template #closeButtonContent>
      <span>Close</span>
    </template>
    <template #title>
      <span data-test-id="dialogTitle">A11yDialog Test</span>
    </template>
    <div>
      <p>This is some content</p>
    </div>
  </a11y-dialog>
</template>
<script setup>
import { A11yDialog } from "vue-a11y-dialog";

import { useCssModule } from "vue";
const styles = useCssModule();

const emit = defineEmits(["instance"]);

const assignDialogRef = (instance) => {
  emit("instance", instance);
};

const getClassNames = (isFadeIn, isSlideUp) => {
  const resolvedClassNames = {
    container: styles.dialog,
    overlay: styles["dialog-overlay"],
    title: "h4 mbe16",
    // Borrows .close-button (from close.css) as it gives us the transparent
    // style plus the a11y focus ring we want applied to dialog's close button
    closeButton: "dialog-close close-button",
  };
  const documentClasses = {
    [styles["dialog-content"]]: true,
    [styles["dialog-slide-up-fade-in"]]: isFadeIn && isSlideUp,
    [styles["dialog-slide-up"]]: !isFadeIn && isSlideUp,
    [styles["dialog-fade-in"]]: isFadeIn && !isSlideUp,
  };
  resolvedClassNames.document = documentClasses;
  return resolvedClassNames;
};
</script>

<script>
export default {
  name: "AgDialog",
  props: {
    id: {
      type: String,
      required: true,
    },
    appRoot: {
      type: String,
      required: true,
    },
    dialogRoot: {
      type: String,
      required: true,
    },
    /**
     * Object representing the classes for each HTML element of the dialog
     * element. See: https://a11y-dialog.netlify.app/usage/markup
     */
    classNames: {
      type: Object,
      default() {},
    },
    role: {
      type: String,
      required: false,
      default: "dialog",
      validator(value) {
        return ["dialog", "alertdialog"].includes(value);
      },
    },
    titleId: {
      type: String,
      default: "",
    },
    closeButtonLabel: {
      type: String,
      default: "Close this dialog window",
    },
    closeButtonPosition: {
      type: String,
      required: false,
      default: "first",
      validator(value) {
        return ["first", "last", "none"].includes(value);
      },
    },
    isAnimationFadeIn: {
      type: Boolean,
      required: false,
      default: false,
    },
    isAnimationSlideUp: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
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
  background-color: white;
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

</style>
