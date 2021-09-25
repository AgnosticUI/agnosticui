<script>
	import "../node_modules/agnosticui-svelte/dist/common.min.css";
	import {
		Button,
		Card,
		ChoiceInput,
		FlexGrid,
		FlexRow,
		FlexCol,
		Header,
		HeaderNav,
		HeaderNavItem
	} from 'agnosticui-svelte';
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
				<h2>Checkbox</h2>
				<ChoiceInput type="checkbox" isInline options={opts} />
				<h2>Radio</h2>
				<ChoiceInput type="radio" isInline options={opts} />
			</section>
	</Card>
	<section class="component-container">
		<FlexGrid customClasses="custom-grid-klass">
			<FlexRow>
				<FlexCol xs="{12}" sm="{4}" lg="{6}" xl="{4}">
					<p>xs=12 sm=4 lg=6 xl=4</p>
				</FlexCol>
				<FlexCol xs="{12}" sm="{4}" lg="{6}" xl="{8}">
					<p>xs=12 sm=4 lg=6 xl=8</p>
				</FlexCol>
			</FlexRow>
		</FlexGrid>
	</section>
	<section class="component-container">
		<FlexGrid customClasses="customKlass1 customKlass2">
			<FlexRow reverse>
				<h1>test</h1>
			</FlexRow>
		</FlexGrid>
	</section>
	<section class="component-container">
		<FlexGrid>
			<FlexRow>
				<FlexCol sm="{2}">
					<p>sm="2"</p>
				</FlexCol>
				<FlexCol sm="{2}" smOffset="{1}">
					<p>sm={2} smOffset={1}</p>
				</FlexCol>
				<FlexCol sm="{2}" smOffset="{1}">
					<p>sm={2} smOffset={1}</p>
				</FlexCol>
				<FlexCol sm="{2}" smOffset="{2}">
					<p>sm={2} smOffset={2}</p>
				</FlexCol>
			</FlexRow>
		</FlexGrid>
	</section>
</div>
