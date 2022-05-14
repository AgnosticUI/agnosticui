<script lang="ts">
import HeaderExample from "./HeaderExample.svelte";
import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="AG—Svelte (Beta)/Header" component="{HeaderExample}" />
<Template let:args>
  <HeaderExample {...args} />
</Template>

<Story name="HeaderTest" args="{{}}" />
