<style>

  /* ---------- GLOBAL STYLES ---------- */
  /* Note this component requires global styles and doesn't get copied over from copystyles.js
  and is "locked down". Svelte no longer appears to support <style global> and CSS Modules support
  isn't built in. So, not ideal, but this is what we'll have to do for this component. */
  
  /* These are styles for the case where classNames.closeButton property was NOT
  passed in and so we're generating the default close 'X' button on the upper right. */
  :global(.dialog-close-button) {
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
  
  :global(.dialog-close-button:hover,
  .dialog-close-button:active,
  .dialog-close-button:focus) {
    background: none;
  
    /* Needed for High Contrast mode */
    outline: var(--agnostic-focus-ring-outline-width)
      var(--agnostic-focus-ring-outline-style)
      var(--agnostic-focus-ring-outline-color);
  }
  
  :global(.dialog-close-button:focus) {
    box-shadow: 0 0 0 3px var(--agnostic-focus-ring-color);
    transition: box-shadow var(--agnostic-timing-fast) ease-out;
  }
  
  @media (prefers-reduced-motion), (update: slow) {
    :global(.dialog-close-button:focus) {
      transition-duration: 0.001ms !important;
    }
  }
  
  :global(.close-button-large > .close) {
    width: var(--fluid-16);
    height: var(--fluid-16);
  }
  
  :global(.dialog-close-button:hover .close) {
    opacity: 100%;
  }
  
  
  :global(.dialog),
  :global(.dialog-overlay) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  
  :global(.dialog) {
    z-index: 1001;
    display: flex;
  }
  
  :global(.dialog[aria-hidden="true"]) {
    display: none;
  }
  
  :global(.dialog-overlay) {
    background-color: rgb(50 50 50 / 60%);
    animation: fade-in var(--agnostic-timing-fast) both;
  }
  
  :global(.dialog-content) {
    background-color: white;
    margin: auto;
    z-index: 1001;
    position: relative;
    padding: var(--fluid-16);
    max-width: 90%;
    width: 600px;
    border-radius: var(--agnostic-radius);
  }
  
  :global(.dialog-fade-in) {
    animation: fade-in var(--agnostic-timing-fast) both;
  }
  
  :global(.dialog-slide-up) {
    animation: slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both;
  }
  
  /**
   * Cannot use two separate CSS classes with animation: foo, bar
   * as the later class will overwrite the first (so this combines)
   */
  :global(.dialog-slide-up-fade-in) {
    animation:
      fade-in var(--agnostic-timing-fast) both,
      slide-up var(--agnostic-timing-slow) var(--agnostic-timing-fast) both;
  }
  
  @media screen and (min-width: 700px) {
    :global(.dialog-content) {
      padding: var(--fluid-32);
    }
  }
  
  @keyframes -global-fade-in {
    from {
      opacity: 0%;
    }
  }
  
  @keyframes -global-slide-up {
    from {
      transform: translateY(10%);
    }
  }
  
  /* Shared with AgnosticUI close buton so only need positioning and transition */
  :global(.dialog-close) {
    position: absolute;
    top: var(--fluid-8);
    right: var(--fluid-8);
  }
  
  @media (prefers-reduced-motion), (update: slow) {
    :global(.dialog-slide-up-fade-in, .dialog-fade-in, .dialog-slide-up, .dialog-content) {
      transition-duration: 0.001ms !important;
    }
  }
  
  @media only screen and (min-width: 576px) {
    :global(.dialog-close) {
      top: var(--fluid-12);
      right: var(--fluid-12);
    }
  }
  
  @media screen and (min-width: 768px) {
    :global(.dialog-close) {
      top: var(--fluid-16);
      right: var(--fluid-16);
    }
  }
  
  /* We use div.drawer-* for specificity battle :( */
  :global(div.drawer-start) {
    right: initial;
  }
  
  :global(div.drawer-start[aria-hidden]) {
    transform: none;
  }
  
  :global(div.drawer-end) {
    left: initial;
  }
  
  :global(div.drawer-end[aria-hidden]) {
    transform: none;
  }
  
  :global(div.drawer-top) {
    bottom: initial;
    transform: none;
  }
  
  :global(div.drawer-top[aria-hidden]) {
    transform: none;
  }
  
  :global(div.drawer-bottom) {
    top: initial;
    transform: none;
  }
  
  :global(div.drawer-bottom[aria-hidden]) {
    transform: none;
  }
  
  :global(div.drawer-content) {
    margin: initial;
    max-width: initial;
    border-radius: initial;
  }
  
  :global(div.drawer-start div.drawer-content, div.drawer-end div.drawer-content) {
    width: 25rem;
  }
  
  :global(div.drawer-top div.drawer-content, div.drawer-bottom div.drawer-content) {
    height: 25vh;
    width: 100%;
  }
  </style>
  
  <script lang="ts">
    import Close from "../Close/Close.svelte";
    import SvelteA11yDialog from "svelte-a11y-dialog/SvelteA11yDialog.svelte";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
  
    export let id;
    export let title;
    export let dialogRoot;
    export let role: "dialog" | "alertdialog" = "dialog";
    export let titleId = "";
    export let closeButtonLabel = "Close button";
    export let closeButtonPosition: "first" | "last" | "none" = "first";
    export let drawerPlacement = "";
  
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
        instance: dialogInstance,
      });
    };
  
    export let classNames = {};
    const documentClasses = [
      "dialog-content",
      isAnimationFadeIn && isAnimationSlideUp ? "dialog-slide-up-fade-in" : "",
      !isAnimationFadeIn && isAnimationSlideUp ? "dialog-slide-up" : "",
      isAnimationFadeIn && !isAnimationSlideUp ? "dialog-fade-in" : "",
      drawerPlacement.length ? "drawer-content" : "",
    ]
      .filter((c) => c)
      .join(" ");
  
    const containerClasses = [
      "dialog",
      drawerPlacement ? `drawer-${drawerPlacement}` : "",
      ]
      .filter((c) => c)
      .join(" ");
  
    const defaultClassNames = {
      container: containerClasses,
      document: documentClasses,
      overlay: "dialog-overlay",
      title: "h4 mbe16",
      // Borrows .close-button (from close.css) as it gives us the transparent
      // style plus the a11y focus ring we want applied to dialog's close button
      closeButton: "dialog-close dialog-close-button",
    };
  
    $: getClassNames = () => {
      return { ...defaultClassNames, ...classNames };
    };
  </script>
  
  <SvelteA11yDialog
    id={id}
    dialogRoot={dialogRoot}
    closeButtonLabel={closeButtonLabel}
    closeButtonPosition={closeButtonPosition}
    title={title}
    titleId={titleId}
    role={role}
    classNames={getClassNames()}
    on:instance={assignDialogInstance}
  >
    <slot name="closeButtonContent" slot="closeButtonContent">
      <Close isFaux size="large" />
    </slot>
    <slot />
  </SvelteA11yDialog>
  