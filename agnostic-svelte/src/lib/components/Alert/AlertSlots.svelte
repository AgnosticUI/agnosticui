<style>
  div {
    margin-block-end: 1rem;
  }
</style>

<script>
  import Alert from "./Alert.svelte";
  export let type = "";
  let message = "Alerts should be used for timely information.";
</script>

<div>
  <Alert isRounded type="{type}">
    <p>{message}</p>
  </Alert>
</div>
<div>
  <Alert isBorderAll isRounded type="{type}">
    <p>{message}</p>
  </Alert>
</div>
<div>
  <Alert isBorderAll type="{type}">
    <p>{message}</p>
  </Alert>
</div>
<div>
  <Alert isBorderLeft type="{type}">
    <p>{message}</p>
  </Alert>
</div>
<div>
  <Alert isBorderRight type="{type}">
    <p>{message}</p>
  </Alert>
</div>
<div>
  <Alert isBorderTop type="{type}">
    <p>{message}</p>
  </Alert>
</div>
<div>
  <Alert isBorderBottom type="{type}">
    <p>{message}</p>
  </Alert>
</div>
<div>
  <Alert isBlockEnd type="{type}">
    <p>{message}</p>
  </Alert>
</div>
<div>
  <Alert isBlockEnd isBorderRight type="{type}">
    <p>{message}</p>
  </Alert>
</div>
