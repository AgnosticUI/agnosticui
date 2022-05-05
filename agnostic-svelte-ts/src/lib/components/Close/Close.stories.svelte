<script lang="ts">
import Close from "./Close.svelte";
import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
import { action } from "@storybook/addon-actions";
const actionsData = {
  click: action("click"),
};
</script>
<Meta title="AG—Svelte (Beta)/Close" component="{Close}" />

<Template let:args>
  <Close
    {...args}
    on:click={actionsData.click}
  />
</Template>

<Story name="Default" args="{{}}" />

<Story name="Small" args="{{
  size: "small"
}}" />

<Story name="Large" args="{{
  size: "large"
}}" />

<Story name="XLarge" args="{{
  size: "xlarge"
}}" />
