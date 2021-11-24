<script>
	import "../node_modules/agnostic-svelte/dist/common.min.css";
	import {
    Alert,
    Avatar,
    AvatarGroup,
		Button,
		Card,
		ChoiceInput,
    Close,
    Disclose,
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
  let alertMessage = 'Alerts should be used for timely information.';
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
	
  <Header isHeaderContentStart="{true}">
    <div slot="logoleft"><a href="https://www.w3.org/">w3</a></div>
    <HeaderNav css="mis16 flex-fill">
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
    <Header isHeaderContentEnd="{true}">
      <a class="flex-fill" href="https://web.dev/">web.dev</a>
      <HeaderNav css="mie16">
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
    <section>
      <h3>Default close</h3>
      <Close />
      <h3 class="mbs12">Sizes</h3>
      <Close />
      <Close size="small" />
      <Close size="large" />
      <Close size="xlarge" />
    </section>

    <section class="mbs32">
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
    <section class="mbs24">
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

    <section class="mbs40">
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
    </Card>

  </div>
