<script lang="ts">
import DividerExample from "./DividerExample.svelte";
import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="AG—Svelte (Beta)/Divider" component="{DividerExample}" />

<Template let:args>
  <DividerExample {...args} />
</Template>

<Story name="Default" args="{{}}" />

<Story name="Start" args="{{
  justify: "start",
}}" />

<Story name="End" args="{{
  justify: "end",
}}" />

<Story name="Success" args="{{
  type: "success",
}}" />

<Story name="Info" args="{{
  type: "info",
}}" />

<Story name="Warning" args="{{
  type: "warning",
}}" />

<Story name="Error" args="{{
  type: "error",
}}" />

<Story name="Small" args="{{
  size: "small",
}}" />

<Story name="Large" args="{{
  size: "large"
}}" />

<Story name="XLarge" args="{{
  size: "xlarge"
}}" />
