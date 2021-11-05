<script>
  import Alert from "./Alert.svelte";
  export let type = '';
</script>

<style>
  div {
    margin-block-end: 1rem;
  }
</style>
<div>
  <Alert isRounded {type}>
    <p>Alerts should have timely information.</p>
  </Alert>
</div>
<div>
  <Alert isBorderAll isRounded {type}>
    <p>Alerts should have timely information.</p>
  </Alert>
</div>
<div>
  <Alert isBorderAll {type}>
    <p>Alerts should have timely information.</p>
  </Alert>
</div>
<div>
  <Alert isBorderLeft {type}>
    <p>Alerts should have timely information.</p>
  </Alert>
</div>
<div>
  <Alert isBorderRight {type}>
    <p>Alerts should have timely information.</p>
  </Alert>
</div>
<div>
  <Alert isBorderTop {type}>
    <p>Alerts should have timely information.</p>
  </Alert>
</div>
<div>
  <Alert isBorderBottom {type}>
    <p>Alerts should have timely information.</p>
  </Alert>
</div>
<div>
  <Alert isBlockEnd {type}>
    <p>Alerts should have timely information.</p>
  </Alert>
</div>
<div>
  <Alert isBlockEnd isBorderRight {type}>
    <p>Alerts should have timely information.</p>
  </Alert>
</div>
