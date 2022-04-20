<style>
  div {
    margin-block-end: 1rem;
  }
</style>

<script>
  import Close from "../Close/Close.svelte";
  import Toasts from "./Toasts.svelte";
  import Toast from "./Toast.svelte";
  import ToastIconExample from "../Alert/AlertIconExample.svelte";
  const message = "Toasts should be used for timely information.";
  let isToast1Open = true;
  const closeToast1 = () => (isToast1Open = false);
  let isToast2Open = true;
  const closeToast2 = () => (isToast2Open = false);
  let isToast3Open = true;
  const closeToast3 = () => (isToast3Open = false);
  let isToast4Open = true;
  const closeToast4 = () => (isToast4Open = false);
</script>

<div>
  <Toasts
    portalRootSelector="body"
    horizontalPosition="center"
    verticalPosition="top"
  >
    <Toast isOpen type="dark">
      <ToastIconExample type="dark" utilityClasses="mie8" />
      <p>{message}</p>
    </Toast>
    <div class="mbe14"></div>
    <Toast isOpen type="info">
      <ToastIconExample type="info" utilityClasses="mie8" />
      <p>{message}</p>
    </Toast>
  </Toasts>
  <Toasts
    portalRootSelector="body"
    horizontalPosition="end"
    verticalPosition="top"
  >
    <Toast isOpen="{isToast1Open}" type="info">
      <ToastIconExample type="info" utilityClasses="mie8" />
      <p>{message}</p>
      <Close color="var(--agnostic-primary-dark)" on:click="{closeToast1}" />
    </Toast>
    <div class="mbe14"></div>
    <Toast isOpen="{isToast2Open}" type="success">
      <ToastIconExample type="success" utilityClasses="mie8" />
      <p>{message}</p>
      <Close color="var(--agnostic-action-dark)" on:click="{closeToast2}" />
    </Toast>
    <div class="mbe14"></div>
    <Toast isOpen="{isToast3Open}" type="warning">
      <ToastIconExample type="warning" utilityClasses="mie8" />
      <p>{message}</p>
      <Close color="var(--agnostic-warning-dark)" on:click="{closeToast3}" />
    </Toast>
    <div class="mbe14"></div>
    <Toast isOpen="{isToast4Open}" type="error">
      <ToastIconExample type="error" utilityClasses="mie8" />
      <p>{message}</p>
      <Close color="var(--agnostic-error-dark)" on:click="{closeToast4}" />
    </Toast>
  </Toasts>
  <Toasts
    portalRootSelector="body"
    horizontalPosition="start"
    verticalPosition="top"
  >
    <Toast isOpen type="dark">
      <ToastIconExample type="dark" utilityClasses="mie8" />
      <p>{message}</p>
    </Toast>
  </Toasts>
  <Toasts
    portalRootSelector="body"
    horizontalPosition="start"
    verticalPosition="bottom"
  >
    <Toast isOpen type="dark">
      <ToastIconExample type="dark" utilityClasses="mie8" />
      <p>{message}</p>
    </Toast>
  </Toasts>
  <Toasts
    portalRootSelector="body"
    horizontalPosition="center"
    verticalPosition="bottom"
  >
    <Toast isOpen type="dark">
      <ToastIconExample type="dark" utilityClasses="mie8" />
      <p>{message}</p>
    </Toast>
  </Toasts>
  <Toasts
    portalRootSelector="body"
    horizontalPosition="end"
    verticalPosition="bottom"
  >
    <Toast isOpen type="dark">
      <ToastIconExample type="dark" utilityClasses="mie8" />
      <p>{message}</p>
    </Toast>
  </Toasts>
</div>
