<script>
  import ButtonGroup from "./ButtonGroup.svelte";
  import Button from "./Button.svelte";
</script>

<ButtonGroup>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>

<ButtonGroup>
  <Button mode="primary">One</Button>
  <Button mode="primary">Two</Button>
  <Button mode="primary">Three</Button>
</ButtonGroup>

<ButtonGroup>
  <Button mode="secondary">One</Button>
  <Button mode="secondary">Two</Button>
  <Button mode="secondary">Three</Button>
</ButtonGroup>

<div style="margin-bottom: 40px;" />
<ButtonGroup>
  <Button mode="primary" isBordered>One</Button>
  <Button mode="primary" isBordered>Two</Button>
  <Button mode="primary" isBordered>Three</Button>
</ButtonGroup>

<ButtonGroup>
  <Button mode="secondary" isBordered>One</Button>
  <Button mode="secondary" isBordered>Two</Button>
  <Button mode="secondary" isBordered>Three</Button>
</ButtonGroup>
