<script lang="ts">
  import Tag from './Tag.svelte';
  import Tags from "./TagSlots.svelte";
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="AG—Svelte (Beta)/Tags" component="{Tag}" />

<Template let:args>
	<Tags {...args} />
</Template>

<Story name="All" />
