<script lang="ts">
import Spinner from "./Spinner.svelte";
import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="AG—Svelte (Beta)/Spinner" component="{Spinner}" />
<Template let:args>
  <Spinner {...args} />
</Template>

<Story name="Default" args="{{
  ariaLabel: "Spinner to indicate data is loading…",
}}" />

<Story name="Small" args="{{
  size: "small"
}}" />

<Story name="Large" args="{{
  size: "large"
}}" />

<Story name="XLarge" args="{{
  size: "xlarge"
}}" />
