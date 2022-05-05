<script lang="ts">
import DiscloseSlots from "./DiscloseSlots.svelte";
import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="AG—Svelte (Beta)/Disclose" component="{DiscloseSlots}" />


<Template let:args>
  <DiscloseSlots
    {...args}
  />
</Template>

<Story name="Examples" />
