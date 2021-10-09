<script>
	import "../node_modules/agnostic-svelte/dist/common.min.css";
	import {
		Button,
		Card,
		ChoiceInput,
		Header,
		HeaderNav,
		HeaderNavItem,
		Input,
		Progress,
		Switch
	} from 'agnostic-svelte';
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
		width: 100%;
		padding: 1rem 2rem;
	}

</style>

<div class="container">
	<Header isSticky="{true}">
		<div slot="logoleft">logo left</div>
		<HeaderNav css="nav-overrides">
			<HeaderNavItem><a href="#home">Home</a></HeaderNavItem>
			<HeaderNavItem><a href="#products">Products</a></HeaderNavItem>
			<HeaderNavItem><a href="#services">Services</a></HeaderNavItem>
			<HeaderNavItem><a href="#about">About</a></HeaderNavItem>
		</HeaderNav>
		<div slot="logoright">logo right</div>
	</Header>

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
				<h2>Input</h2>
				<Input uniqueId="myUniqID" label="Default input" />
				<Input uniqueId="myUniqID2" isRounded label="Rounded input" />
				<Input uniqueId="myUniqID3" isUnderlined label="Underlined input" />
				<Input uniqueId="myUniqID3" isUnderlined isUnderlinedWithBackground label="Underlined with background" />
				<Input uniqueId="myUniqID4" isInline label="Inline input" />
				<Input uniqueId="myUniqID4" size="small" label="Small input" />
				<Input uniqueId="myUniqID4" size="large" label="Large input" />
				<Input uniqueId="myUniqID4" helpText="Some useful help hint…" label="Large input" />
				<Input uniqueId="myUniqID4" isInvalid invalidText="Some error hint…" label="Large input" />
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
	<Card>
			<section class="component-container">
				<h2>Switch</h2>
				<Switch id="switch-1" label="Switch default" />
				<Switch id="switch-small" size="small" label="Switch small" />
				<Switch id="switch-lg" size="large" label="Switch large" />
				<Switch id="switch-prechecked" isChecked size="large" label="Prechecked" />
				<Switch id="switch-disabled" disabled label="Disabled" />
				<Switch id="switch-bordered" isBordered label="Bordered" />
				<Switch id="switch-action" isAction label="Action" />
				<Switch id="switch-action-bordered" isAction isBordered label="Action bordered" />
				<Switch id="switch-right" labelPosition="right" label="Label on right" />
				<Switch id="switch-right-bordered" isBordered labelPosition="right" label="Label on right bordered" />
			</section>
	</Card>
	<Card>
			<section class="component-container">
				<h2>Progress</h2>
				<Progress value="30" max="100" />
			</section>
	</Card>
</div>
