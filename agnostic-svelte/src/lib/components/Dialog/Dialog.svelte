<script>
  import SvelteA11yDialog from 'svelte-a11y-dialog';
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import Close from '../Close/Close.svelte';
  export let id;
  export let appRoot;
  export let dialogRoot;
  export let role = 'dialog';
  export let titleId = '';
  export let closeButtonLabel = 'Close button';
  export let closeButtonPosition = 'first';

  export let classNames = {
    container: 'dialog',
    document: 'dialog-content',
    overlay: 'dialog-overlay',
    title: 'h4 mbe16',
    // Borrows .close-button (from close.css) as it gives us the transparent
    // style plus the a11y focus ring we want applied to dialog's close button
    closeButton: 'dialog-close close-button',
  };

  /**
   * Animates the dialog content by fading in. Set to false to disable.
   */
  export let isAnimationFadeIn = false;

  /**
  * Animates the dialog content by sliding up. Set to false to disable.
  */
  export let isAnimationSlideUp = false;

  /**
   * Handles a11y-dialog instantiation and assigning of dialog instance
   */
  let dialogInstance;
  const assignDialogInstance = (ev) => {
    dialogInstance = ev.detail.instance;
    dispatch("instance", {
      "instance": dialogInstance
    });
  };

  // If classNames.document is defined still ensure that's still there
  let dialogDocumentClasses = classNames.document ? [classNames.document] : [];

  // Now check our animation props to see what if what else needs to be added
  if (isAnimationFadeIn && isAnimationSlideUp) {
    // Cannot use two separate CSS classes with animation: foo, bar
    // as the later class will overwrite the first one (so here we've combined)
    dialogDocumentClasses.push('dialog-slide-up-fade-in');
  } else if (isAnimationFadeIn) {
    dialogDocumentClasses.push('dialog-fade-in');
  } else if (isAnimationSlideUp) {
    dialogDocumentClasses.push('dialog-slide-up');
  }
  // Finally we rewrite our classNames.document with updated classes
  classNames.document = dialogDocumentClasses.filter((cls) => cls).join(' ');
</script>
<style global>
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

<SvelteA11yDialog 
  id="{id}"
  appRoot="{appRoot}"
  dialogRoot="{dialogRoot}"
  closeButtonLabel="{closeButtonLabel}"
  closeButtonPosition="{closeButtonPosition}"
  titleId="{titleId}"
  role="{role}"
  classNames={classNames}
  on:instance={assignDialogInstance}
>
  <svelte:fragment slot="closeButtonContent">
    <Close isFaux>Close</Close>
  </svelte:fragment> 
  <svelte:fragment slot="title">A11yDialog Test</svelte:fragment> 
  <slot></slot>
</SvelteA11yDialog>
