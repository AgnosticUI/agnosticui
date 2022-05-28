<script lang="ts">
  import TooltipSlots from "./TooltipSlots.svelte";
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>
<Meta title="AG—Svelte (Beta)/Tooltip" component="{TooltipSlots}" />

<Template let:args>
  <TooltipSlots {...args} />
</Template>
<Story name="Examples" args="{{}}" />
