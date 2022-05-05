<script lang="ts">
import CardExample from "./CardExample.svelte";
import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
import { action } from "@storybook/addon-actions";
const actionsData = {
  click: action("click"),
  blur: action("blur"),
  focus: action("focus"),
};
</script>

<Meta title="AG—Svelte (Beta)/Cards" component="{CardExample}" />

<Template let:args>
  <CardExample
    {...args}
    actions={actionsData}

  ></CardExample>
</Template>

<Story name="Examples"/>
