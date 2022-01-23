<script>
  import SvelteA11yDialog from 'svelte-a11y-dialog';
  import { onMount } from 'svelte';
  onMount(() => {
    console.log('Dialog.svelte -- mounting...')
  });
  let dialogInstance;
  const assignDialogInstance = (ev) => {
    console.log('assignDialogInstance called...')
    dialogInstance = ev.detail.instance;
  };
  /*
    <svelte:fragment slot="closeButtonContent">
    <span>Close</span>
  </svelte:fragment> 
  <svelte:fragment slot="title">
    <span data-test-id="dialogTitle">A11yDialog Test</span>
  </svelte:fragment> 
  <div>
    <p>This is some content</p>
  </div>
  */

  const openDialog = () => {
    console.log('assignDialogInstance called...')
    if (dialogInstance) {
      dialogInstance.show();
    }
  };
  /*
  SLOTS
  @ContentChild('title')
  @ContentChild('mainContent', { read: TemplateRef }) public main: any;
  @ContentChild('closeButtonContentFirst')
  @ContentChild('closeButtonContentLast')
  export let id;
  export let appRoot;
  export let dialogRoot;
  export let role = 'dialog';
  export let titleId?: string;
  export let closeButtonLabel = 'Close button';
  export let closeButtonPosition: closeButtonPositionType = 'first';
*/
  export let classNames = {
    container: 'dialog',
    document: 'dialog-content',
    overlay: 'dialog-overlay',
    title: 'h3 mbe16',
    // Borrows .close-button (from close.css) as it gives us the transparent
    // style plus the a11y focus ring we want applied to dialog's close button
    closeButton: 'dialog-close close-button',
  };
  /**
   * Animates the dialog content by fading in. Set to false to disable.
   */
  // export let isAnimationFadeIn = false;

  /**
  * Animates the dialog content by sliding up. Set to false to disable.
  */
  // export let isAnimationSlideUp = false;
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
<button
  type="button"
  data-test-id="dialogRefBtn"
  on:click={openDialog}
>
  Open dialog via dialogRef
</button>
<p>The following opens because a11y-dialog uses the <code>data-a11y-dialog-show</code> data attribute:</p>
<button
  type="button"
  data-test-id="dataA11yBtn"
  data-a11y-dialog-show="a11y-dialog"
>
  Open the dialog via data attribute
</button>
<SvelteA11yDialog 
  id="a11y-dialog"
  appRoot="#app"
  dialogRoot="#dialog-root"
  closeButtonLabel="My close button label"
  closeButtonPosition="last"
  titleId="uniqueTitleId"
  role="dialog"
  classNames={classNames}
  on:instance={assignDialogInstance}
>

</SvelteA11yDialog>
