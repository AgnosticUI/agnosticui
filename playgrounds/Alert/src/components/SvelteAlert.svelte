<script>
  import { Alert } from 'agnostic-svelte';
  import AlertIconExample from './AlertIconExample.svelte';

  let alertMessage = "Alerts should be used for timely information.";
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Alerts
  </div>
  <div style="color: var(--agnostic-dark)">
    <Alert>Default</Alert>
    <div class="mbe16" />
    <Alert isRounded>Rounded</Alert>
    <div class="mbe16" />
    <Alert isBorderAll>Border all</Alert>
    <div class="mbe16" />
    <Alert isBorderLeft>Border left</Alert>
  </div>
  <div class="mbe16" />
  <Alert type="dark">
    <AlertIconExample type="dark" utilityClasses="mie8" />
    <p>{alertMessage}</p>
  </Alert>
  <div class="mbe16" />
  <Alert type="success">
    <AlertIconExample type="success" utilityClasses="mie8" />
    <p>{alertMessage}</p>
  </Alert>
  <div class="mbe16" />
  <Alert type="info">
    <AlertIconExample type="info" utilityClasses="mie8" />
    <p>{alertMessage}</p>
  </Alert>
  <div class="mbe16" />
  <Alert type="warning">
    <AlertIconExample type="warning" utilityClasses="mie8" />
    <p>{alertMessage}</p>
  </Alert>
  <div class="mbe16" />
  <Alert type="error">
    <AlertIconExample type="error" utilityClasses="mie8" />
    <p>{alertMessage}</p>
  </Alert>
</section>
