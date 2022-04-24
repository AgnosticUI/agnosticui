<style>
	div {
		margin-block-end: 1rem;
	}
</style>

<script lang="ts">
	import Alert from './Alert.svelte';
	import AlertIcon from './AlertIconExample.svelte';
	export let type = '';
	let message = 'Alerts should be used for timely information.';
</script>

<div>
	<Alert isRounded type="{type}">
		<AlertIcon type="{type}" utilityClasses="mie8" />
		<p>{message}</p>
	</Alert>
</div>
<div>
	<Alert isBorderAll isRounded type="{type}">
		<AlertIcon type="{type}" utilityClasses="mie8" />
		<p>{message}</p>
	</Alert>
</div>
<div>
	<Alert isBorderAll type="{type}">
		<AlertIcon type="{type}" utilityClasses="mie8" />
		<p>{message}</p>
	</Alert>
</div>
<div>
	<Alert isBorderLeft type="{type}">
		<AlertIcon type="{type}" utilityClasses="mie8" />
		<p>{message}</p>
	</Alert>
</div>
<div>
	<Alert isBorderRight type="{type}">
		<AlertIcon type="{type}" utilityClasses="mie8" />
		<p>{message}</p>
	</Alert>
</div>
<div>
	<Alert isBorderTop type="{type}">
		<AlertIcon type="{type}" utilityClasses="mie8" />
		<p>{message}</p>
	</Alert>
</div>
<div>
	<Alert isBorderBottom type="{type}">
		<AlertIcon type="{type}" utilityClasses="mie8" />
		<p>{message}</p>
	</Alert>
</div>
<div>
	<Alert isBlockEnd type="{type}">
		<p>{message}</p>
		<AlertIcon type="{type}" utilityClasses="mis8" />
	</Alert>
</div>
<div>
	<Alert isBlockEnd isBorderRight type="{type}">
		<p>{message}</p>
		<AlertIcon type="{type}" utilityClasses="mis8" />
	</Alert>
</div>
