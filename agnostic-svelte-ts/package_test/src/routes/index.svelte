<script lang="ts">
  import "./global.css";
	// Global AgnosticUI CSS
	// This way you get the properties, reset, and utilities:
	import 'agnostic-svelte/css/common.min.css';
	import 'agnostic-svelte/css/opinions.min.css';
	import {
		Alert,
		Avatar,
		AvatarGroup,
		Breadcrumb,
		Button,
		ButtonGroup,
		Card,
		ChoiceInput,
		Close,
		Dialog,
		Disclose,
		Divider,
		// Drawer,
		// EmptyState,
		// Header,
		// HeaderNav,
		// HeaderNavItem,
		// Icon,
		// Input,
		// InputAddonItem,
		// Loader,
		// Menu,
		// MenuItem,
		// Pagination,
		// Progress,
		// Select,
		// Spinner,
		// Switch,
		// Table,
		// Tabs,
		Tag
		// Toast,
		// Toasts
	} from 'agnostic-svelte';

  import ToastIconExample from "../components/ToastIconExample.svelte";

  let alertMessage = 'Alerts should be used for timely information.';

  const onClickStub = (e:Event) => console.log('onClickStub called...', e)

  let isButtonDisabled = true;
  const toggleButtonDisabled = () => isButtonDisabled = !isButtonDisabled;
  let value = '';

  /**
   * Breadcrumbs
   */
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

  // DIALOG
  let dialogInstance: any;
  const assignDialogInstance = (ev: any) => {
    console.log('in App.svelte -- assignDialogInstance called...')
    dialogInstance = ev.detail.instance;
  };

  const openDialog = () => {
    console.log('in App.svelte -- openDialog calling instance.show()')
    if (dialogInstance) {
      dialogInstance.show();
    }
  };

  // Choice Inputs Shifting on Small Devices #118
  // Config for an individual checkbox hence array of 1 item
  const checkboxOptions = [{
    name: "tos",
    value: "tos",
    label: "I have read and agree to the terms of service."
  }];
  let tosAgreedValues: string[] = [];
  $: agreed = tosAgreedValues

  /**
   * Choice Inputs
   */
  const opts = [
		{
			value: "daily",
			label: "Daily",
		},
		{
			value: "weekly",
			label: "Weekly",
		},
		{
			value: "monthly",
			label: "Monthly",
		},
	];

  const optionNames = ['frequency', 'schedule', 'howoften', 'when', 'letmeknow', 'whenz', 'times']
  const options: any = []

  for (let i = 0; i < optionNames.length; i += 1) {
    const optionName = optionNames[i];
    const optionsWithNames: any = []
    opts.forEach(o => {
      const copy = Object.assign({}, o, { name: optionName })
      optionsWithNames.push(copy);
    })
    options.push(optionsWithNames);
  }

  // Fixes input bug #114
  let textIsVisible = false;
	const toggleTextVisibility = () => {
		textIsVisible = !textIsVisible;
	};
  let testIsInvalid = false;
  let testHelpText = false;

  // These are used to verify bind:value refactor for Input component
  let valueText = '';
  let addonValueText = '';
  let textareaValueText = '';
  let choiceCheckboxesValue: any;
  let choiceRadioValue: any;
  let checkedValue = false;
  let selectedValue;
  let multiSelectValue;
</script>

<main>
	<div class="container">

    <h2>Svelte Typescript Test Page</h2>
    <section class="mbs40 mbe32">
      <div class="h4">Alerts</div>
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
        <Alert type="success">
          <ToastIconExample type="success" utilityClasses="mie8" />
          <p>{alertMessage}</p>
        </Alert>
      </div>
      <div class="mbe16">
        <Alert type="info">
          <ToastIconExample type="info" utilityClasses="mie8" />
          <p>{alertMessage}</p>
        </Alert>
      </div>
      <div class="mbe16">
        <Alert type="warning">
          <ToastIconExample type="warning" utilityClasses="mie8" />
          <p>{alertMessage}</p>
        </Alert>
      </div>
      <div class="mbe16">
        <Alert type="error">
          <ToastIconExample type="error" utilityClasses="mie8" />
          <p>{alertMessage}</p>
        </Alert>
      </div>
    </section>
    <Card>
      <div class="h4">Avatars</div>
      <div class="mbs16 mbe24">
        <Avatar text="RL" />
        <Avatar type="success" text="RL" />
        <Avatar type="info" text="RL" />
        <Avatar type="warning" text="RL" />
        <Avatar type="error" text="RL" />
        <Avatar size="small" text="S" />
        <Avatar size="large" text="L" />
        <Avatar size="xlarge" text="XL" />
        <Avatar isSquare size="large" text="SQ" />
      </div>
      <div class="mbe24">
        <Avatar>
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

        <Avatar imgUrl="https://joeschmoe.io/api/v1/random" />
        <Avatar
          isTransparent
          imgUrl="https://joeschmoe.io/api/v1/random"
        />
        <Avatar
          type="success"
          imgUrl="https://joeschmoe.io/api/v1/random"
        />
        <Avatar
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
    </Card>
    <section class="mbe24">
      <div class="h4 mbe24">Breadcrumbs</div>
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
    </section>
    <Card>
      <div class="h4">Buttons</div>
      <Button>Go</Button>
      <Button mode="primary">Go</Button>
      <Button mode="primary" isRounded>Go</Button>
      <Button mode="primary" isRounded isBordered>Go</Button>
      <Button size="large">Go</Button>
      <Button isBlock>Go</Button>
      <Button isCircle>Go</Button>
      <Button isBlank>Blank button</Button>
      
    </Card>
    <div class="mbs40 flex flex-column">
      <ButtonGroup ariaLabel="Appropriate label for your button group">
        <Button isGrouped on:click={onClickStub}>One</Button>
        <Button isGrouped on:click={onClickStub}>Two</Button>
        <Button isGrouped on:click={onClickStub}>Three</Button>
      </ButtonGroup>
      <div class="mbe24" />
      <ButtonGroup ariaLabel="Appropriate label for your button group">
        <Button isGrouped mode="primary" on:click={onClickStub}>One</Button>
        <Button isGrouped mode="primary" on:click={onClickStub}>Two</Button>
        <Button isGrouped mode="primary" on:click={onClickStub}>Three</Button>
      </ButtonGroup>
      <div class="mbe24" />
      <ButtonGroup ariaLabel="Appropriate label for your button group">
        <Button isGrouped mode="secondary" on:click={onClickStub}>One</Button>
        <Button isGrouped mode="secondary" on:click={onClickStub}>Two</Button>
        <Button isGrouped mode="secondary" on:click={onClickStub}>Three</Button>
      </ButtonGroup>
      <div class="mbe24" />
      <ButtonGroup ariaLabel="Appropriate label for your button group">
        <Button isGrouped mode="primary" isBordered on:click={onClickStub}>One</Button>
        <Button isGrouped mode="primary" isBordered on:click={onClickStub}>Two</Button>
        <Button isGrouped mode="primary" isBordered on:click={onClickStub}>
          Three
        </Button>
      </ButtonGroup>
      <div class="mbe24" />
      <ButtonGroup ariaLabel="Appropriate label for your button group">
        <Button isGrouped mode="secondary" isBordered on:click={onClickStub}>
          One
        </Button>
        <Button isGrouped mode="secondary" isBordered on:click={onClickStub}>
          Two
        </Button>
        <Button isGrouped mode="secondary" isBordered on:click={onClickStub}>
          Three
        </Button>
      </ButtonGroup>
    </div>
    <div class="mbs48 mbe24">
      <div class="h4">Toggling button disabled</div>
      <Button mode="primary" on:click={toggleButtonDisabled}>Click to Toggle Disabled / Enabled</Button>
      <Button isDisabled={isButtonDisabled}>Disabled</Button>
    </div>
    <Card>
      <div class="h4 w-100">Checkbox</div>
      <div class="block w-100 mbs24 mbe16">
        <div class="mbe16"><code>bind:checked</code> when using checkbox: {choiceCheckboxesValue }</div> 
        <ChoiceInput isFieldset={false} id={options[0][0].name} type="checkbox" isInline options={options[0]} bind:checked={choiceCheckboxesValue} />
      </div>
      <ChoiceInput id={options[1][0].name} type="checkbox" isInline isDisabled options={options[1]} />
      <div class="h4">Weekly disabled only</div>
      <ChoiceInput id={options[2][0].name} type="checkbox" isInline disabledOptions={["weekly"]} options={options[2]} />
    </Card>
    <Card>
      <div class="h4">Radio</div>
      <ChoiceInput id={options[3][0].name} type="radio" isInline options={options[3]} />
      <ChoiceInput id={options[4][0].name} type="radio" isInline isDisabled options={options[4]} />
      <Button css="mie32" on:click={() => testIsInvalid=!testIsInvalid}>Toggle is invalid</Button>
      <ChoiceInput id={options[5][0].name} type="radio" isInvalid={testIsInvalid} options={options[5]} />
      <div class="block w-100 mbs24 mbe16">
        <div class="mbe16"><code>bind:checked</code> when using radios: { choiceRadioValue }</div> 
        <ChoiceInput isFieldset={false} id={options[6][0].name} type="radio" isInline options={options[6]} bind:checked={choiceRadioValue} />
      </div>
    </Card>
    <section class="mbe24">
      <div class="h4">Default close</div>
      <Close />
      <div class="h4 mbs12">Sizes</div>
      <Close />
      <Close size="small" />
      <Close size="large" />
      <Close size="xlarge" />
    </section>
    <section class="mbe24">
      <div class="h4 mbe24">Dialog</div>
      <p class="mbe24">
        The following opens because we've assigned a dialog <code>ref</code>:
      </p>
      <Button
        mode="primary"
        isBlock
        isBordered
        isRounded
        type="button"
        on:click={openDialog}
      >
        Open dialog via dialogRef
      </Button>
      <Dialog id="a11y-dialog"
        dialogRoot="#portal-root"
        closeButtonLabel="My close button label"
        closeButtonPosition="last"
        titleId="uniqueTitleId"
        role="dialog"
        classNames={{
          title: 'h4 mbe18 flex justify-center'
        }}
        title="My Dialog Example"
        isAnimationFadeIn
        isAnimationSlideUp
        on:instance={assignDialogInstance}
      >
        <p
          class="mbs16 mbe16"
          id="dialog-example-description"
        >
          Fill in the form below to receive our newsletter! Testing setting close button last.
        </p>
        <form class="dialog-form-demo">
          <!-- <Input
            isRounded
            label="Email (required)"
            type="email"
            name="EMAIL"
            id="email"
            placeholder="email@example.com"
            required
          /> -->
          <div class="mbe16" />
          <Button
            type="submit"
            mode="primary"
            isRounded
            isBlock
          >
            Sign Up
          </Button>
        </form>
      </Dialog>
      <div class="container flex flex-column items-center">
        <div class="h4 mbe24">Dialog 2</div>
        <button
          class="dialog2-demo-button"
          type="button"
          data-a11y-dialog-show="a11y-dialog2"
        >
          Open dialog 2
        </button>
        <Dialog id="a11y-dialog2"
          dialogRoot="#portal-root"
          closeButtonLabel="My close button label"
          closeButtonPosition="last"
          role="alertdialog"
          title="Dialog — Custom Close Button"
          classNames={{
            container: 'my-dialog-container',
            overlay: 'my-dialog-overlay',
            document: 'my-dialog-content',
            title: 'my-dialog-title',
            closeButton: 'close-button-demo',
          }}
        >
          <!-- Default slot -->
          <p
            class="mbs16 mbe16"
            id="dialog-example-description"
          >
            For the cancel button we have used an AgnosticUI <code>Button</code> of type <code>type="faux</code>
            This generates a div that looks like a button. As <code>vue-a11y-dialog</code> generates its own
            button around <code>closeButtonContent</code>, this prevents an unwanted nested buttons situation.
          </p>
          <p class="mbe16">
            You'll also notice that this dialog did not &ldquo;slide up&rdquo; or &ldquo;fade in&rdquo;
            as we did NOT pass in either <code>:is-animation-fade-in="true"</code> or <code>:is-animation-slide-up="true"</code>.
            Both of these default to <code>false</code>.
          </p>
          <p class="mbe16">
            Lastly, you'll note that the role is <code>alertdialog</code> which results in opting out of
            ESC closing the dialog.
          </p>
          <form class="dialog-form-demo">
            <!-- <Input
              isRounded
              label="Email (required)"
              type="email"
              name="EMAIL"
              id="email2"
              placeholder="email@example.com"
              required
            /> -->
            <div class="mbe16" />
            <Button
              type="submit"
              mode="primary"
              isBlock
              isRounded
            >
              Sign Up
            </Button>
          </form>
          <div slot="closeButtonContent">
            <Button
              type="faux"
              isBlock
              isBordered
              isRounded
            >
              Cancel
            </Button>
          </div>
        </Dialog>
      </div>
    </section>
    <section class="mbe24">
      <div class="h4">Disclose</div> 
      <Disclose
        isOpen
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
      <Disclose title="Steffi Graf">
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
      <div class="h4 mbe24">Disclose with background</div> 
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
      <Disclose isBackground title="Steffi Graf">
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
		<section class="mbs40 mbe24">
			<div class="h4">Divider</div>
			<div class="mbs16 mbe16">
				<Divider />
			</div>
			<div class="mbs16 mbe16">
				<Divider justify="start">
					<div slot="dividerContent">Start</div>
				</Divider>
			</div>
			<div class="mbs16 mbe16">
				<Divider justify="end">
					<div slot="dividerContent">End</div>
				</Divider>
			</div>
			<div class="mbs16 mbe16">
				<Divider size="small">
					<div slot="dividerContent">Small</div>
				</Divider>
			</div>
			<div class="mbs16 mbe16">
				<Divider size="large">
					<div slot="dividerContent">Large</div>
				</Divider>
			</div>
			<div class="mbs16 mbe16">
				<Divider size="xlarge">
					<div slot="dividerContent">XLarge</div>
				</Divider>
			</div>
			<div class="mbs16 mbe16">
				<Divider type="success">
					<div slot="dividerContent">Success</div>
				</Divider>
			</div>
			<div class="mbs16 mbe16">
				<Divider type="info">
					<div slot="dividerContent">Info</div>
				</Divider>
			</div>
			<div class="mbs16 mbe16">
				<Divider type="warning">
					<div slot="dividerContent">Warning</div>
				</Divider>
			</div>
			<div class="mbs16 mbe16">
				<Divider type="error">
					<div slot="dividerContent">Error</div>
				</Divider>
			</div>
			<p class="mbs16 mbe16">With no <code>dividerContent</code> slot:</p>
			<div class="mbs16 mbe16">
				<Divider type="success" />
			</div>
			<div class="mbe16">
				<Divider type="info" />
			</div>
			<div class="mbe16">
				<Divider type="warning" />
			</div>
			<div class="mbe16">
				<Divider type="error" />
			</div>
			<div class="mbe16">
				<Divider size="small" />
			</div>
			<div class="mbe16">
				<Divider size="large" />
			</div>
			<div class="mbe16">
				<Divider size="xlarge" />
			</div>
			<div class="flex mbe48">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<Divider isVertical="{true}">
					<div slot="dividerContent">yes</div>
				</Divider>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
					dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
					quia non numquam eius modi tempora incidunt ut labore et dolore magnam
					aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
					exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
					ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
					ea voluptate velit esse quam nihil molestiae consequatur, vel illum
					qui dolorem eum fugiat quo voluptas nulla pariatur?
				</p>
				<Divider isVertical="{true}">
					<div slot="dividerContent">sir!</div>
				</Divider>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<p class="mbs16 mbe16">With no <code>dividerContent</code> slot:</p>
			<div class="flex mbe48">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<Divider isVertical="{true}" />
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
					dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
					quia non numquam eius modi tempora incidunt ut labore et dolore magnam
					aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
					exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
					ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
					ea voluptate velit esse quam nihil molestiae consequatur, vel illum
					qui dolorem eum fugiat quo voluptas nulla pariatur?
				</p>
				<Divider isVertical="{true}" />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</section>
    <section class="mbe24">
      <div class="h4">Tags</div>
      <Tag>unknown</Tag>
      <Tag shape="round">Rounded</Tag>
      <Tag shape="pill">Badge</Tag>
      <Tag type="success" isUppercase={true}>success</Tag>
      <Tag type="info" isUppercase={true}>info</Tag>
      <Tag type="warning" isUppercase={true}>warning</Tag>
      <Tag type="error" isUppercase={true}>error</Tag>
      <Tag type="error" shape="circle">2</Tag>
    </section>
	</div>
</main>

<style>
  :global(.my-dialog-title) {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.005em;
    margin-block-start: 0.5rem;
    margin-block-end: 0.25rem;
  }

  /* These have to be global styles because a11y-dialog is going to simply place
  them as class="close-button-demo" and class="my-dialog-container" etc. etc. I
  have seen 3rd party CSS Modules plugins for svelte but they have very little community
  so for now we unfortunately will just use global CSS for his :( */
  :global(.close-button-demo) {
    background-color: transparent;
    width: 100%;
    margin-block-start: 0.5rem;
    border: transparent !important;
    padding: 0 !important;
  }
  :global(.dialog2-demo-button) {
    width: 100%;
    background: transparent;
    border: 1px solid var(--agnostic-primary);
    color: var(--agnostic-primary);
    transition-property: all;
    transition-duration: var(--agnostic-timing-medium);
  }
  :global(.dialog2-demo-button:focus, .close-button-demo:focus) {
    box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);
    /* Needed for High Contrast mode */
    outline:
      var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
      var(--agnostic-focus-ring-outline-color);
    transition: box-shadow var(--agnostic-timing-fast) ease-out;
  }
  :global(.dialog2-demo-button:hover, .dialog2-demo-button:focus) {
    background-color: var(--agnostic-primary);
    color: var(--agnostic-light);
  }

  :global(.my-dialog-container, .dialog) {
    display: flex;
    z-index: 2;
    /* This is just to override the silly centered app demo css :) */
    text-align: left;
  }

  :global(.my-dialog-overlay, .dialog-overlay) {
    background-color: rgba(43, 46, 56, 0.9);
    animation: fade-in 200ms both;
  }

  :global(.my-dialog-overlay, .dialog-overlay),
  :global(.my-dialog-container, .dialog) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  /* Crucial—dialog w/not hide visually without this rule */
  :global([role="dialog"][aria-hidden="true"]),
  :global([role="alertdialog"][aria-hidden="true"]) {
    display: none;
  }

  :global(.my-dialog-content, .dialog-content) {
    background-color: rgb(255, 255, 255);
    margin: auto;
    z-index: 2;
    position: relative;
    padding-block-start: 1.5rem;
    padding-block-end: 2rem;
    padding-inline-start: 2em;
    padding-inline-end: 2rem;
    max-width: 90%;
    width: 600px;
    border-radius: 2px;
  }

  :global(.my-close-button) {
    display: inline-block;
    cursor: pointer;
    padding-inline-start: 2rem;
    padding-inline-end: 2rem;
    background-color: transparent;
    border-radius: 0.1875rem;
    border: 1px solid #036dc9;
    color: #036dc9;
    line-height: 2rem;
    text-align: center;
  }

  :global(.custom-close-button) {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
  }
  :global(.custom-close-button:focus) {
    box-shadow: 0 0 0 3px var(--agnostic-focus-ring-color);
    transition: box-shadow var(--agnostic-timing-fast) ease-out;
  }
  
  @media (prefers-reduced-motion), (update: slow) {
    :global(.custom-close-button:focus) {
      transition-duration: 0.001ms !important;
    }
  }
</style>
