<script lang="ts">
  import InputAddonsExample from "./InputAddonsExample.svelte";
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>
  
<Meta title="AG—Svelte (Beta)/InputAddons" component="{InputAddonsExample}" />
<Template let:args>
  <InputAddonsExample {...args} />
</Template>
  
<Story name="InputAddons" args="{{}}" />
