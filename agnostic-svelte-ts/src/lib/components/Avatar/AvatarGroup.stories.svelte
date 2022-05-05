<script lang="ts">
import AvatarGroups from "./AvatarGroupSlots.svelte";
import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="AG—Svelte (Beta)/AvatarGroups" component="{AvatarGroups}" />

<Template let:args>
	<AvatarGroups {...args} />
</Template>

<Story name="Examples" />
