<script>
	import "../node_modules/agnosticui-svelte/dist/common.min.css";
	import { Button, Card, ChoiceInput } from 'agnosticui-svelte';
	const opts = [
		{
			name: "frequency",
			value: "daily",
			label: "Daily",
		},
		{
			name: "frequency",
			value: "weekly",
			label: "Weekly",
		},
		{
			name: "frequency",
			value: "monthly",
			label: "Monthly",
		},
	];
</script>
<style>
	.container {
		margin: 2rem 5rem;
	}
	.component-container {
		padding: 1rem 2rem;
	}

</style>

<div class="container">
	<Card>
		<section class="component-container">
				<h2>Buttons</h2>
				<Button>Go</Button>
				<Button mode="primary">Go</Button>
				<Button mode="primary" isRounded>Go</Button>
				<Button mode="primary" isRounded isBordered>Go</Button>
				<Button size="large">Go</Button>
				<Button isBlock>Go</Button>
				<Button isCircle>Go</Button>
				<Button isRaised>Go</Button>
				<Button mode="primary" isRaised>Go</Button>
				<Button mode="secondary" isRaised>Go</Button>
				<Button isBlank>Blank button</Button>
				<Button isDisabled>Disabled</Button>
		</section>
	</Card>
	<Card>
			<section class="component-container">
				<h2>Checkbox</h2>
				<ChoiceInput type="checkbox" isInline options={opts} />
				<h2>Radio</h2>
				<ChoiceInput type="radio" isInline options={opts} />
			</section>
	</Card>
</div>
