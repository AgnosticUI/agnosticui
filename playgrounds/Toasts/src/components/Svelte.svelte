<script>
  import { Close, Toasts, Toast } from "agnostic-svelte";
  // If you'd like, you can optionally project any icon you choose
  import ToastIconExample from "./ToastIconExample.svelte";

  let toastMessage = 'Svelte: Toasts should be used for timely information.';

  let isToast1Open = true;
  const closeToast1 = () => isToast1Open = false
  let isToast2Open = true;
  const closeToast2 = () => isToast2Open = false
  let isToast3Open = true;
  const closeToast3 = () => isToast3Open = false
  let isToast4Open = true;
  const closeToast4 = () => isToast4Open = false
  let timedToast = true;
  setTimeout(() => {
    timedToast = false;
  }, 10000);
  // See https://docs.astro.build/en/reference/api-reference/#importmeta
  const isSSR = import.meta.env.SSR;
</script>
{#if !isSSR }
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Toast
  </div>
  <Toasts portalRootSelector="body" horizontalPosition="start" verticalPosition="bottom">
    <Toast isOpen={timedToast} type="dark">
      <ToastIconExample type="dark" utilityClasses="mie8" />
      <p>Svelte: This toast will close in 10 seconds</p>
    </Toast>
    <div class="mbe14" />
    <Toast isOpen type="info">
      <ToastIconExample type="info" utilityClasses="mie8" />
      <p>{toastMessage} (sticky)</p>
    </Toast>
  </Toasts>
  <Toasts portalRootSelector="body" horizontalPosition="end" verticalPosition="top">
    <Toast isOpen={isToast1Open} type="info">
      <ToastIconExample type="info" utilityClasses="mie8" />
      <p>{toastMessage}</p>
      <Close color="var(--agnostic-primary-dark)" on:click={closeToast1} />
    </Toast>
    <div class="mbe14" />
    <Toast isOpen={isToast2Open} type="success">
      <ToastIconExample type="success" utilityClasses="mie8" />
      <p>{toastMessage}</p>
      <Close color="var(--agnostic-action-from)" on:click={closeToast2} />
    </Toast>
    <div class="mbe14" />
    <Toast isOpen={isToast3Open} type="warning">
      <ToastIconExample type="warning" utilityClasses="mie8" />
      <p>{toastMessage}</p>
      <Close color="var(--agnostic-warning-dark)" on:click={closeToast3} />
    </Toast>
    <div class="mbe14" />
    <Toast isOpen={isToast4Open} type="error">
      <ToastIconExample type="error" utilityClasses="mie8" />
      <p>{toastMessage}</p>
      <Close color="var(--agnostic-error-dark)" on:click={closeToast4} />
    </Toast>
  </Toasts>
  <Toasts portalRootSelector="body" horizontalPosition="start" verticalPosition="top">
    <Toast isOpen={timedToast} type="dark">
      <ToastIconExample type="dark" utilityClasses="mie8" />
      <p>Svelte: This toast will close in 10 seconds</p>
    </Toast>
  </Toasts>
  <Toasts portalRootSelector="body" horizontalPosition="start" verticalPosition="bottom">
    <Toast isOpen={timedToast} type="dark">
      <ToastIconExample type="dark" utilityClasses="mie8" />
      <p>Svelte: This toast will close in 10 seconds</p>
    </Toast>
  </Toasts>
  <Toasts portalRootSelector="body" horizontalPosition="center" verticalPosition="bottom">
    <Toast isOpen={timedToast} type="dark">
      <ToastIconExample type="dark" utilityClasses="mie8" />
      <p>Svelte: This toast will close in 10 seconds</p>
    </Toast>
  </Toasts>
  <Toasts portalRootSelector="body" horizontalPosition="end" verticalPosition="bottom">
    <Toast isOpen type="dark">
      <ToastIconExample type="dark" utilityClasses="mie8" />
      <p>{toastMessage}</p>
    </Toast>
  </Toasts> 
</section>
{/if}
