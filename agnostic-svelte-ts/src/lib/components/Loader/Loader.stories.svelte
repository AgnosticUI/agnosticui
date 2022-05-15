<script lang="ts">
  import Loader from "./Loader.svelte";
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="AG—Svelte (Beta)/Loader" component="{Loader}" />
<Template let:args>
  <Loader {...args} />
</Template>

<Story name="Default" args="{{
  // Please use a better aria label -- this is just an example of how ;)
  ariaLabel: "Loader to indicate data is loading…",
}}" />

<Story name="Small" args="{{
  size: "small",
}}" />

<Story name="Large" args="{{
  size: "large",
}}" />
