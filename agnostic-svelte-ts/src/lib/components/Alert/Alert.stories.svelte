<script lang="ts">
	import Alerts from './AlertSlots.svelte';
	import Alert from './Alert.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="AG—Svelte (Beta)/Alerts" component="{Alert}" />

<Template let:args>
	<Alerts {...args} />
</Template>

<Story name="Default" />

<Story name="Warning" args="{{ type: 'warning' }}" />

<Story name="Info" args="{{ type: 'info' }}" />

<Story name="Success" args="{{ type: 'success' }}" />

<Story name="Error" args="{{ type: 'error' }}" />
