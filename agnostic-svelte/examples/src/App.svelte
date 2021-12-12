<script>
  // Global AgnosticUI CSS
  // This way you get the properties, reset, and utilities:
  // import 'agnostic-svelte/dist/common.min.css';

  // But, you can also import them individually. Here we're just testing
  // importing all of them, but, you can imagine a case where you don't
  // want the CSS Utilities because they add to the payload weight.
  import 'agnostic-svelte/dist/common.properties.min.css';
  import 'agnostic-svelte/dist/common.resets.min.css';
  import 'agnostic-svelte/dist/common.utilities.min.css';


	import {
    Alert,
    Avatar,
    AvatarGroup,
    Breadcrumb,
		Button,
		Card,
		ChoiceInput,
    Close,
    Disclose,
		Header,
		HeaderNav,
		HeaderNavItem,
		Input,
    InputAddonItem,
		Icon,
		Progress,
		Select,
		Switch,
    Tag,
    Tabs,
	} from 'agnostic-svelte';

  import Tab1 from "../../src/stories/TabPanel1.svelte";
  import Tab2 from "../../src/stories/TabPanel2.svelte";
  import Tab3 from "../../src/stories/TabPanel3.svelte";
  import Tab4 from "../../src/stories/TabPanel3.svelte";

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
  let alertMessage = 'Alerts should be used for timely information.';

  const trailOfTennisRoutes = [
    {
      label: "Tennis",
      url: "#tennis",
    },
    {
      label: "Superstars",
      url: "#tennis-superstars",
    },
    {
      label: "Serena Williams",
      url: "#tennis-superstars-serena",
    },
  ];

  const tennisOptions = [
    { value: 'andre', label: 'Andre Agassi' },
    { value: 'serena', label: 'Serena Williams' },
    { value: 'mac', label: 'John McEnroe' },
    { value: 'borg', label: 'Bjorn Borg' },
    { value: 'althea', label: 'Althea Gibson' },
    { value: 'roger', label: 'Roger Federer' },
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

  .custom-wrap {
    padding: 16px 32px;
  }
  .custom-card {
    border: 1px solid #d6d6d6;
    margin: 36px auto;
    padding: 24px;
    transition: 0.5s transform;
    transform: scale(1);
  }
  .custom-card:hover {
    transform: scale(1.1);
    box-shadow: 4px 8px 4px #cdcdcd;
  }
</style>

<div class="container">
  

  <div class="mbe32"></div>

	<Header>
		<div slot="logoleft">logo left</div>
		<HeaderNav css="nav-overrides">
			<HeaderNavItem><a href="#home">Home</a></HeaderNavItem>
			<HeaderNavItem><a href="#products">Products</a></HeaderNavItem>
			<HeaderNavItem><a href="#services">Services</a></HeaderNavItem>
			<HeaderNavItem><a href="#about">About</a></HeaderNavItem>
		</HeaderNav>
		<div slot="logoright">logo right</div>
	</Header>
</div>
<div class="container">
  <h3 class="mbs40 mbe12">Header content justify left</h3>
  <p class="mbe24">Pass in <code>isHeaderContentStart</code> and apply a global CSS class with
    <code>flex-grow: 0</code> on mobile (so it will stack as column), and <code>flex-grow: 1</code>
    at a breakpoint of your choosing to push other content over. Inspect <code>.header-flex-fill</code>
    in devtools to see an example.
  </p>	
  <Header isHeaderContentStart="{true}">
    <div slot="logoleft"><a href="https://www.w3.org/">w3</a></div>
    <HeaderNav css="header-flex-fill">
      <HeaderNavItem><a href="https://web.dev/">web.dev</a></HeaderNavItem>
      <HeaderNavItem>
        <a href="https://css-tricks.com/">CSS-Tricks</a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a href="https://developer.mozilla.org/en-US/">MDN</a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
      </HeaderNavItem>
    </HeaderNav>
    <div slot="logoright">
      <a href="https://www.w3.org/TR/wai-aria-practices-1.1/">wai-aria</a>
    </div>
  </Header>
</div>
<div class="container">
  <h3 class="mbs40 mbe12">Header content justify right</h3>
  <p class="mbe24">Pass in <code>isHeaderContentEnd</code> and apply
    <code>flex-fill</code> to the <code>logoleft</code> content so grows (pushes content over).
  </p>
  <Header isHeaderContentEnd="{true}">
    <a class="flex-fill" href="https://web.dev/">web.dev</a>
    <HeaderNav css="header-mbe16">
      <HeaderNavItem><a href="https://web.dev/">web.dev</a></HeaderNavItem>
      <HeaderNavItem>
        <a href="https://css-tricks.com/">CSS-Tricks</a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a href="https://developer.mozilla.org/en-US/">MDN</a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
      </HeaderNavItem>
    </HeaderNav>
    <div slot="logoright">
      <a href="https://www.w3.org/TR/wai-aria-practices-1.1/">wai-aria</a>
    </div>
  </Header>
</div>
<div class="container">
  <h2 class="mbs40 mbe24">Breadcrumbs</h2>
  <div class="mbs24 mbe16">
    <Breadcrumb routes={ trailOfTennisRoutes } />
    <Breadcrumb
      type="slash"
      routes={ trailOfTennisRoutes }
    />
    <Breadcrumb
      type="bullet"
      routes={ trailOfTennisRoutes }
    />
    <Breadcrumb
      type="arrow"
      routes={ trailOfTennisRoutes }
    />
    <Breadcrumb routes={[{ label: 'A single route will look *linkless*' }]} />
    <Breadcrumb routes={[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]} />
  </div>
</div>

<div class="container">
  <h3 class="mbs40 mbe24">Tabs</h3>
  <Tabs size="large" tabs={[
    {
      title: "Tab 1",
      ariaControls: "panel-1",
      tabPanelComponent: Tab1,
    },
    {
      title: "Tab 2",
      ariaControls: "panel-2",
      tabPanelComponent: Tab2,
    },
    {
      title: "Tab 3",
      ariaControls: "panel-3",
      tabPanelComponent: Tab3,
    },
    {
      title: "Tab 4",
      ariaControls: "panel-4",
      tabPanelComponent: Tab4,
    },
  ]}></Tabs>
</div>
<div class="container">
  <section class="mbe24">
    <h3>Tags</h3>
    <Tag>unknown</Tag>
    <Tag shape="round">Rounded</Tag>
    <Tag shape="pill">Badge</Tag>
    <Tag type="success" isUppercase="true">success</Tag>
    <Tag type="info" isUppercase="true">info</Tag>
    <Tag type="warning" isUppercase="true">warning</Tag>
    <Tag type="error" isUppercase="true">error</Tag>
    <Tag type="error" shape="circle">2</Tag>
  </section>
  <section class="mbe24">
    <h3>Default close</h3>
    <Close />
    <h3 class="mbs12">Sizes</h3>
    <Close />
    <Close size="small" />
    <Close size="large" />
    <Close size="xlarge" />
  </section>
  <section class="mbe24">
    <h3>Icons</h3>
    <p class="mbs24 mbe40">
      Test this in Safari! We need to ensure that the component is actually applying a
      <code>width</code> to the SVG itself else Safari the icon won't be visible
    </p>
    <div class="mie8">
      <Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          viewBox="0 0 24 24"
        >
          <g>
            <rect
              fill="none"
              height="24"
              width="24"
            />
          </g>
          <g>
            <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h6v-6h2v6h6v-8h3L19,9.3z M17,18h-2v-6H9v6H7v-7.81l5-4.5l5,4.5V18z" />
            <path d="M10,10h4c0-1.1-0.9-2-2-2S10,8.9,10,10z" />
          </g>
        </svg>
      </Icon>
    </div>
    <div class="mie8">
      <Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.03 2.59a1.5 1.5 0 011.94 0l7.5 6.363a1.5 1.5 0 01.53 1.144V19.5a1.5 1.5 0 01-1.5 1.5h-5.75a.75.75 0 01-.75-.75V14h-2v6.25a.75.75 0 01-.75.75H4.5A1.5 1.5 0 013 19.5v-9.403c0-.44.194-.859.53-1.144l7.5-6.363zM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v6.25h5v-9.403L12 3.734z"
          />
        </svg>
      </Icon>
    </div>
    <div class="mie8">
      <Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
        </svg>
      </Icon>
    </div>
  </section>

  <section class="mbe24">
    <h2>Disclose</h2> 
    <Disclose
      is-open
      title="Roger Federer"
    >
      Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the
      Association of Tennis Professionals. He has won 20 Grand Slam men&apos;s singles titles, an
      all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia).
    </Disclose>
    <Disclose title="Serena Williams">
      Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam
      singles titles, the most by any player in the Open Era, and the second-most of all time behind
      Margaret Court. The Women&apos;s Tennis Association ranked her singles world No. 1 on eight
      separate occasions between 2002 and 2017.(Wikipedia).
    </Disclose>
    <Disclose title="Stefi Graf">
      Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1
      for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since
      the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and
      Serena Williams (Wikipedia).
    </Disclose>
    <Disclose title="Andre Agassi">
      Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major
      champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam
      tournaments. Agassi was the first man to win four Australian Open singles titles in the Open
      Era (Wikipedia).
    </Disclose>
  </section>
  <section class="mbe24">
    <h2 class="mbe24">Disclose with background</h2> 
    <Disclose isBackground title="Roger Federer">
      Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the
      Association of Tennis Professionals. He has won 20 Grand Slam men&apos;s singles titles, an
      all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia).
    </Disclose>
    <Disclose isBackground title="Serena Williams">
      Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam
      singles titles, the most by any player in the Open Era, and the second-most of all time behind
      Margaret Court. The Women&apos;s Tennis Association ranked her singles world No. 1 on eight
      separate occasions between 2002 and 2017.(Wikipedia).
    </Disclose>
    <Disclose isBackground title="Stefi Graf">
      Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1
      for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since
      the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and
      Serena Williams (Wikipedia).
    </Disclose>
    <Disclose isBackground title="Andre Agassi">
      Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major
      champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam
      tournaments. Agassi was the first man to win four Australian Open singles titles in the Open
      Era (Wikipedia).
    </Disclose>
  </section>

  <section class="mbs40 mbe32">
    <h2>Alerts</h2>
    <div class="mbe16">
      <Alert>{ alertMessage }</Alert>
    </div>
    <div class="mbe16">
      <Alert isRounded>{ alertMessage }</Alert>
    </div>
    <div class="mbe16">
      <Alert isBorderAll>Border all</Alert>
    </div>
    <div class="mbe16">
      <Alert isBorderLeft>Border left</Alert>
    </div>
    <div class="mbe16">
      <Alert type="success">{ alertMessage }</Alert>
    </div>
    <div class="mbe16">
      <Alert type="info">{ alertMessage }</Alert>
    </div>
    <div class="mbe16">
      <Alert type="warning">{ alertMessage }</Alert>
    </div>
    <div class="mbe16">
      <Alert type="error">{ alertMessage }</Alert>
    </div>
  </section>
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
      <Input uniqueId="1" label="Default input" />
      <Input uniqueId="2" isRounded label="Rounded input" />
      <Input uniqueId="3" isUnderlined label="Underlined input" />
      <Input uniqueId="4" isUnderlined isUnderlinedWithBackground label="Underlined with background" />
      <Input uniqueId="5" isInline label="Inline input" />
      <Input uniqueId="6" size="small" label="Small input" />
      <Input uniqueId="7" size="large" label="Large input" />
      <Input uniqueId="8" helpText="Some useful help hint…" label="Large input" />
      <Input uniqueId="9" isInvalid invalidText="Some error hint…" label="Large input" />
      <Input
        hasLeftAddon="{true}"
        hasRightAddon="{true}"
        id="10"
        label="Input with addons"
      >
        <div slot="addonLeft">
          <InputAddonItem addonLeft="{true}"><span>L</span></InputAddonItem>
        </div>
        <div slot="addonRight">
          <InputAddonItem addonRight="{true}"><span>R</span></InputAddonItem>
        </div>
      </Input>
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
        <Switch
          id="switch-prechecked"
          isChecked={true}
          size="large"
          label="Prechecked"
        />
        <Switch id="switch-disabled" isDisabled={true} label="Disabled" />
        <Switch id="switch-bordered" isBordered={true} label="Bordered" />
        <Switch id="switch-action" isAction={true} label="Action" />
        <Switch id="switch-action-bordered"
          isAction={true}
          isBordered={true}
          label="Action bordered"
        />
        <Switch
          id="switch-right"
          labelPosition="right"
          label="Label on right"
        />
        <Switch id="switch-right-bordered"
          isBordered={true}
          labelPosition="right"
          label="Label on right bordered"
        />
      </section>
  </Card>
  <Card>
    <section class="component-container">
      <h2>Progress</h2>
      <Progress value="30" max="100" />
    </section>
  </Card>
  <Card>
    <section class="component-container">
      <h2>Avatars</h2>
      <div class="mbs16 mbe24">
        <Avatar class="mie12" text="RL" />
        <Avatar class="mie12" type="success" text="RL" />
        <Avatar class="mie12" type="info" text="RL" />
        <Avatar class="mie12" type="warning" text="RL" />
        <Avatar class="mie12" type="error" text="RL" />
        <Avatar class="mie12" size="small" text="S" />
        <Avatar class="mie12" size="large" text="L" />
        <Avatar class="mie12" size="xlarge" text="XL" />
        <Avatar class="mie12" isSquare size="large" text="SQ" />
      </div>
      <div class="mbe24">
        <Avatar class="mie12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
            />
          </svg>
        </Avatar>

        <Avatar class="mie12" imgUrl="https://joeschmoe.io/api/v1/random" />
        <Avatar
          class="mie12" 
          isTransparent
          imgUrl="https://joeschmoe.io/api/v1/random"
        />
        <Avatar
          class="mie12" 
          type="success"
          imgUrl="https://joeschmoe.io/api/v1/random"
        />
        <Avatar
          class="mie12" 
          type="info"
          imgUrl="https://joeschmoe.io/api/v1/random"
        />
      </div>
      <div>
        <AvatarGroup>
          <Avatar type="success" text="SC" />
          <Avatar type="info" text="IN" />
          <Avatar type="warning" text="WN" />
          <Avatar type="error" text="ER" />
        </AvatarGroup>
      </div>
    </section>
    <section class="component-container">
      <h2>Select default</h2>
      <Select
        uniqueId="sel1"
        name="select1"
        labelCopy="Select the best tennis player of all time"
        options={tennisOptions}
      />
      <h2>Select default option customized</h2>
      <Select
        uniqueId="sel2"
        name="select2"
        labelCopy="Select the best tennis player of all time"
        defaultOptionLabel="Select your favorite tennis player of all-time"
        options={tennisOptions}
      />
      <h2>Select disabled</h2>
      <Select
        uniqueId="sel3"
        name="select3"
        isDisabled={true}
        labelCopy="Select the best tennis player of all time"
        defaultOptionLabel="Select your favorite tennis player of all-time"
        options={tennisOptions}
      />
      <h2>Select small</h2>
      <Select
        uniqueId="sel3"
        name="select3"
        size="small"
        labelCopy="Select the best tennis player of all time"
        defaultOptionLabel="Select your favorite tennis player of all-time"
        options={tennisOptions}
      />
      <h2>Select large</h2>
      <Select
        uniqueId="sel3"
        name="select3"
        size="large"
        labelCopy="Select the best tennis player of all time"
        defaultOptionLabel="Select your favorite tennis player of all-time"
        options={tennisOptions}
      />
    </section>
  </Card>
  
  <div class="mbe24" />
  
  <Card isBorder="{true}">
    <div style="flex: 1;" class="custom-wrap">
      <h3>Border Card</h3>
    </div>
    <div style="flex: 2;" class="custom-wrap">
      <p>
        This card comes with some
        <span class="quoted">skinning css</span>
        included. Also, it's a flex container with direction of
        <i>row</i>
        , so each child with a
        <i>flex</i>
        rule with get placed as a sort of column in the row (until the viewport is
        shrunk below a certain breakpoint and then it will stack).
      </p>
    </div>
  </Card>
  
  <div class="mbe24" />
  
  <Card isBorder="{true}" isRounded="{true}">
    <div style="flex: 1;" class="custom-wrap">
      <h3>Border and Rounded</h3>
    </div>
    <div style="flex: 2;" class="custom-wrap">
      <p>
        This card comes with some
        <span class="quoted">skinning css</span>
        included. Also, it's a flex container with direction of
        <i>row</i>
        , so each child with a
        <i>flex</i>
        rule with get placed as a sort of column in the row (until the viewport is
        shrunk below a certain breakpoint and then it will stack).
      </p>
    </div>
  </Card>
  
  <div class="mbe24" />
  
  <Card isBorder="{true}" isStacked="{true}">
    <div style="flex: 1;" class="custom-wrap">
      <h3>Border and stacked</h3>
    </div>
    <div style="flex: 2;" class="custom-wrap">
      <p>
        This card comes with some
        <span class="quoted">skinning css</span>
        included. Also, it's a flex container with direction of
        <i>row</i>
        , so each child with a
        <i>flex</i>
        rule with get placed as a sort of column in the row (until the viewport is
        shrunk below a certain breakpoint and then it will stack).
      </p>
    </div>
  </Card>
  
  <div class="mbe24" />
  
  <Card isShadow="{true}" isStacked="{true}">
    <div style="flex: 1;" class="custom-wrap">
      <h3>Shadow and stacked</h3>
    </div>
    <div style="flex: 2;" class="custom-wrap">
      <p>
        This card comes with some
        <span class="quoted">skinning css</span>
        included. Also, it's a flex container with direction of
        <i>row</i>
        , so each child with a
        <i>flex</i>
        rule with get placed as a sort of column in the row (until the viewport is
        shrunk below a certain breakpoint and then it will stack).
      </p>
    </div>
  </Card>
  
  <div class="mbe24" />
  
  <Card isStacked="{true}" isShadow="{true}" isAnimated="{true}">
    <div class="custom-wrap">
      <h3 style="flex: 1; display: flex; justify-content: center;">
        Animated, Shadow, & Stacked Card
      </h3>
      <div style="flex 1;">
        <p>
          This card comes with some
          <span class="quoted">skinning css</span>
          included. Also, it's a flex container with direction of
          <i>column</i>
          , so each child with a
          <i>flex</i>
          rule with get placed as a sort of row in the stack.
        </p>
      </div>
    </div>
  </Card>
  
  <div class="mbe24" />
  
  <Card type="success" isStacked="{true}">
    <div class="custom-wrap">
      <h3 style="flex: 1; display: flex; justify-content: center;">Success</h3>
      <div style="flex 1;">
        <p>
          This card comes with some
          <span class="quoted">skinning css</span>
          included. Also, it's a flex container with direction of
          <i>column</i>
          , so each child with a
          <i>flex</i>
          rule with get placed as a sort of row in the stack.
        </p>
      </div>
    </div>
  </Card>
  
  <div class="mbe24" />
  
  <Card type="info" isStacked="{true}">
    <div class="custom-wrap">
      <h3 style="flex: 1; display: flex; justify-content: center;">Info</h3>
      <div style="flex 1;">
        <p>
          This card comes with some
          <span class="quoted">skinning css</span>
          included. Also, it's a flex container with direction of
          <i>column</i>
          , so each child with a
          <i>flex</i>
          rule with get placed as a sort of row in the stack.
        </p>
      </div>
    </div>
  </Card>
  
  <div class="mbe24" />
  
  <Card type="warning" isStacked="{true}">
    <div class="custom-wrap">
      <h3 style="flex: 1; display: flex; justify-content: center;">Warning</h3>
      <div style="flex 1;">
        <p>
          This card comes with some
          <span class="quoted">skinning css</span>
          included. Also, it's a flex container with direction of
          <i>column</i>
          , so each child with a
          <i>flex</i>
          rule with get placed as a sort of row in the stack.
        </p>
      </div>
    </div>
  </Card>
  
  <div class="mbe24" />
  
  <Card type="error" isStacked="{true}">
    <div class="custom-wrap">
      <h3 style="flex: 1; display: flex; justify-content: center;">Error</h3>
      <div style="flex 1;">
        <p>
          This card comes with some
          <span class="quoted">skinning css</span>
          included. Also, it's a flex container with direction of
          <i>column</i>
          , so each child with a
          <i>flex</i>
          rule with get placed as a sort of row in the stack.
        </p>
      </div>
    </div>
  </Card>
  
  <div class="mbe24" />
  
  <Card isSkinned="{false}">
    <div class="custom-card custom-wrap">
      <h3>Card With No Skinning</h3>
      <p>
        This card omits any
        <span class="quoted">skinning css</span>
        but includes the base or core CSS. So, we can style it without the need to
        resort to css custom theming at all -- we simply define our own customized
        styles. It does come with some base styles but hopefully not too
        opinionated for your use case.
      </p>
    </div>
  </Card>
  

</div>
