<script>
  import ButtonGroup from "./ButtonGroup.svelte";
  import Button from "./Button.svelte";
</script>

<ButtonGroup>
  <Button label="one" />
  <Button label="two" />
  <Button label="three" />
</ButtonGroup>

<ButtonGroup>
  <Button label="one" mode="primary" />
  <Button label="two" mode="primary" />
  <Button label="three" mode="primary" />
</ButtonGroup>

<ButtonGroup>
  <Button label="one" mode="secondary" />
  <Button label="two" mode="secondary" />
  <Button label="three" mode="secondary" />
</ButtonGroup>

<div style="margin-bottom: 40px;" />
<ButtonGroup>
  <Button label="one" mode="primary" isBordered />
  <Button label="two" mode="primary" isBordered />
  <Button label="three" mode="primary" isBordered />
</ButtonGroup>

<ButtonGroup>
  <Button label="one" mode="secondary" isBordered />
  <Button label="two" mode="secondary" isBordered />
  <Button label="three" mode="secondary" isBordered />
</ButtonGroup>
