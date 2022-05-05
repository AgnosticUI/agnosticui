<script lang="ts">
  import ButtonGroup from "./ButtonGroup.svelte";
  import Button from "./Button.svelte";
  import { action } from "@storybook/addon-actions";

  const actionsData = {
    click: action("click"),
  };
</script>

<p class="mbe32">To use <code>ButtonGroup</code> you will need to project buttons that have the
<code>isGrouped</code> prop.</p>

<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button isGrouped on:click="{actionsData.click}">One</Button>
  <Button isGrouped on:click="{actionsData.click}">Two</Button>
  <Button isGrouped on:click="{actionsData.click}">Three</Button>
</ButtonGroup>

<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button isGrouped mode="primary" on:click="{actionsData.click}">One</Button>
  <Button isGrouped mode="primary" on:click="{actionsData.click}">Two</Button>
  <Button isGrouped mode="primary" on:click="{actionsData.click}">Three</Button>
</ButtonGroup>

<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button isGrouped mode="secondary" on:click="{actionsData.click}">One</Button>
  <Button isGrouped mode="secondary" on:click="{actionsData.click}">Two</Button>
  <Button isGrouped mode="secondary" on:click="{actionsData.click}">Three</Button>
</ButtonGroup>

<div style="margin-bottom: 40px;"></div>
<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button isGrouped mode="primary" isBordered on:click="{actionsData.click}">One</Button>
  <Button isGrouped mode="primary" isBordered on:click="{actionsData.click}">Two</Button>
  <Button isGrouped mode="primary" isBordered on:click="{actionsData.click}">
    Three
  </Button>
</ButtonGroup>

<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button isGrouped mode="secondary" isBordered on:click="{actionsData.click}">
    One
  </Button>
  <Button isGrouped mode="secondary" isBordered on:click="{actionsData.click}">
    Two
  </Button>
  <Button isGrouped mode="secondary" isBordered on:click="{actionsData.click}">
    Three
  </Button>
</ButtonGroup>
