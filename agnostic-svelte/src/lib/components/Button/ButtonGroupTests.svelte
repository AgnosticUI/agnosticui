<script>
  import ButtonGroup from "./ButtonGroup.svelte";
  import Button from "./Button.svelte";
  import { action } from "@storybook/addon-actions";

  const actionsData = {
    click: action("click"),
  };

</script>

<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button on:click="{actionsData.click}">One</Button>
  <Button on:click="{actionsData.click}">Two</Button>
  <Button on:click="{actionsData.click}">Three</Button>
</ButtonGroup>

<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button mode="primary" on:click="{actionsData.click}">One</Button>
  <Button mode="primary" on:click="{actionsData.click}">Two</Button>
  <Button mode="primary" on:click="{actionsData.click}">Three</Button>
</ButtonGroup>

<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button mode="secondary" on:click="{actionsData.click}">One</Button>
  <Button mode="secondary" on:click="{actionsData.click}">Two</Button>
  <Button mode="secondary" on:click="{actionsData.click}">Three</Button>
</ButtonGroup>

<div style="margin-bottom: 40px;"></div>
<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button mode="primary" isBordered on:click="{actionsData.click}">One</Button>
  <Button mode="primary" isBordered on:click="{actionsData.click}">Two</Button>
  <Button mode="primary" isBordered on:click="{actionsData.click}">
    Three
  </Button>
</ButtonGroup>

<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button mode="secondary" isBordered on:click="{actionsData.click}">
    One
  </Button>
  <Button mode="secondary" isBordered on:click="{actionsData.click}">
    Two
  </Button>
  <Button mode="secondary" isBordered on:click="{actionsData.click}">
    Three
  </Button>
</ButtonGroup>
