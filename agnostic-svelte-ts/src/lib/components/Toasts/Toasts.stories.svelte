<script lang="ts">
  import Toasts from "./ToastSlots.svelte";
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="AG—Svelte (Beta)/Toasts" component="{Toasts}" />
<Template let:args>
  <Toasts {...args} />
</Template>

<Story name="All" args="{{}}" />
