<script lang="ts">
  import IconSlot from "./IconSlot.svelte";
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>
  
<Meta title="AG—Svelte (Beta)/Icon" component="{IconSlot}" />
<Template let:args>
  <IconSlot {...args} />
</Template>

<Story name="Default" args="{{}}" />
