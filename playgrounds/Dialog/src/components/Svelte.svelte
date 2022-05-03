<script>
  import { Button, Input, Dialog } from 'agnostic-svelte';

  // DIALOG
  let dialogInstance;
  const assignDialogInstance = (ev) => {
    console.log('in App.svelte -- assignDialogInstance called...')
    dialogInstance = ev.detail.instance;
  };

  const openDialog = () => {
    console.log('in App.svelte -- openDialog calling instance.show()')
    if (dialogInstance) {
      dialogInstance.show();
    }
  };
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Dialog
  </div>
  <div class="mbs16 mbe24">
    <Button
      mode="primary"
      isBlock
      isBordered
      isRounded
      type="button"
      on:click={openDialog}
    >
      Open the dialog
    </Button>
    <Dialog id="svelte-dialog"
      dialogRoot="#portal-root"
      closeButtonLabel="My close button label"
      closeButtonPosition="last"
      titleId="uniqueTitleId"
      role="dialog"
      classNames={{
        title: 'h4 mbe18 flex justify-center'
      }}
      title="My Dialog Example"
      isAnimationFadeIn
      isAnimationSlideUp
      on:instance={assignDialogInstance}
    >
      <p
        class="mbs16 mbe16"
        id="dialog-example-description"
      >
        Fill in the form below to receive our newsletter! Testing setting close button last.
      </p>
      <form class="dialog-form-demo">
        <Input
          isRounded
          label="Email (required)"
          type="email"
          name="EMAIL"
          id="emailSvelte1"
          placeholder="email@example.com"
          required
        />
        <div class="mbe16" />
        <Button
          type="submit"
          mode="primary"
          isRounded
          isBlock
        >
          Sign Up
        </Button>
      </form>
    </Dialog>
  </div>
  <div class="mbs16 mbe24">
    <Button
      mode="primary"
      isBordered
      isRounded
      isBlock
      css="dialog2-demo-button"
      type="button"
      data-a11y-dialog-show="svelte2-dialog"
    >
      Open dialog 2
    </Button>
    <Dialog id="svelte2-dialog"
      dialogRoot="#portal-root"
      closeButtonLabel="My close button label"
      closeButtonPosition="last"
      role="alertdialog"
      title="Dialog — Custom Close Button"
      classNames={{
        container: 'my-dialog-container',
        overlay: 'my-dialog-overlay',
        document: 'my-dialog-content',
        title: 'my-dialog-title',
        closeButton: 'close-button-demo',
      }}
    >
      <!-- Default slot -->
      <p
        class="mbs16 mbe16"
        id="dialog-example-description"
      >
        For the cancel button we have used an AgnosticUI <code>Button</code> of type <code>type="faux</code>
        This generates a div that looks like a button. As <code>vue-a11y-dialog</code> generates its own
        button around <code>closeButtonContent</code>, this prevents an unwanted nested buttons situation.
      </p>
      <p class="mbe16">
        You'll also notice that this dialog did not &ldquo;slide up&rdquo; or &ldquo;fade in&rdquo;
        as we did NOT pass in either <code>:is-animation-fade-in="true"</code> or <code>:is-animation-slide-up="true"</code>.
        Both of these default to <code>false</code>.
      </p>
      <p class="mbe16">
        Lastly, you'll note that the role is <code>alertdialog</code> which results in opting out of
        ESC closing the dialog.
      </p>
      <form class="dialog-form-demo">
        <Input
          isRounded
          label="Email (required)"
          type="email"
          name="EMAIL"
          id="emailSvelte2"
          placeholder="email@example.com"
          required
        />
        <div class="mbe16" />
        <Button
          type="submit"
          mode="primary"
          isBlock
          isRounded
        >
          Sign Up
        </Button>
      </form>
      <div slot="closeButtonContent">
        <Button
          type="faux"
          isBlock
          isBordered
          isRounded
        >
          Cancel
        </Button>
      </div>
    </Dialog>
  </div>
</section>

<style>
  :global(.my-dialog-title) {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.005em;
    margin-block-start: 0.5rem;
    margin-block-end: 0.25rem;
  }

  /* These have to be global styles because a11y-dialog is going to simply place
  them as class="close-button-demo" and class="my-dialog-container" etc. etc. I
  have seen 3rd party CSS Modules plugins for svelte but they have very little community
  so for now we unfortunately will just use global CSS for his :( */
  :global(.close-button-demo) {
    background-color: transparent;
    width: 100%;
    margin-block-start: 0.5rem;
    border: transparent !important;
    padding: 0 !important;
  }
  :global(.dialog2-demo-button) {
    width: 100%;
    background: transparent;
    border: 1px solid var(--agnostic-primary);
    color: var(--agnostic-primary);
    transition-property: all;
    transition-duration: var(--agnostic-timing-medium);
  }
  :global(.dialog2-demo-button:focus, .close-button-demo:focus) {
    box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);
    /* Needed for High Contrast mode */
    outline:
      var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
      var(--agnostic-focus-ring-outline-color);
    transition: box-shadow var(--agnostic-timing-fast) ease-out;
  }
  :global(.dialog2-demo-button:hover, .dialog2-demo-button:focus) {
    background-color: var(--agnostic-primary);
    color: var(--agnostic-light);
  }

  :global(.my-dialog-container, .dialog) {
    display: flex;
    z-index: 2;
    /* This is just to override the silly centered app demo css :) */
    text-align: left;
  }

  :global(.my-dialog-overlay, .dialog-overlay) {
    background-color: rgba(43, 46, 56, 0.9);
    animation: fade-in 200ms both;
  }

  :global(.my-dialog-overlay, .dialog-overlay),
  :global(.my-dialog-container, .dialog) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  /* Crucial—dialog w/not hide visually without this rule */
  :global([role="dialog"][aria-hidden="true"]),
  :global([role="alertdialog"][aria-hidden="true"]) {
    display: none;
  }

  :global(.my-dialog-content, .dialog-content) {
    background-color: rgb(255, 255, 255);
    margin: auto;
    z-index: 2;
    position: relative;
    padding-block-start: 1.5rem;
    padding-block-end: 2rem;
    padding-inline-start: 2em;
    padding-inline-end: 2rem;
    max-width: 90%;
    width: 600px;
    border-radius: 2px;
  }

  :global(.my-close-button) {
    display: inline-block;
    cursor: pointer;
    padding-inline-start: 2rem;
    padding-inline-end: 2rem;
    background-color: transparent;
    border-radius: 0.1875rem;
    border: 1px solid #036dc9;
    color: #036dc9;
    line-height: 2rem;
    text-align: center;
  }

  :global(.custom-close-button) {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
  }
  :global(.custom-close-button:focus) {
    box-shadow: 0 0 0 3px var(--agnostic-focus-ring-color);
    transition: box-shadow var(--agnostic-timing-fast) ease-out;
  }
  
  @media (prefers-reduced-motion), (update: slow) {
    :global(.custom-close-button:focus) {
      transition-duration: 0.001ms !important;
    }
  }
</style>
