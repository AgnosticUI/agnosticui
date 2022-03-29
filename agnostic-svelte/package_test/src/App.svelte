<script>
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
    Drawer,
    EmptyState,
    Header,
    HeaderNav,
    HeaderNavItem,
    Icon,
    Input,
    InputAddonItem,
    Loader,
    Menu, 
    MenuItem,
    Pagination,
    Progress,
    Select,
    Spinner,
    Switch,
    Table,
    Tabs,
    Tag,
    Toast,
    Toasts
  } from 'agnostic-svelte';

  import { usePagination } from "agnostic-helpers/dist/index.esm";

  import Tab1 from "./components/TabPanel1.svelte";
  import Tab2 from "./components/TabPanel2.svelte";
  import Tab3 from "./components/TabPanel3.svelte";
  import Tab4 from "./components/TabPanel4.svelte";
  import TabButtonCustom from "./components/TabButtonCustom.svelte";
  import TableCustomRenderComponent from "./components/TableCustomRenderComponent.svelte";
  import ToastIconExample from "./components/ToastIconExample.svelte";
  
  let alertMessage = 'Alerts should be used for timely information.';
  let isToast1Open = true;
  const closeToast1 = () => isToast1Open = false
  let isToast2Open = true;
  const closeToast2 = () => isToast2Open = false
  let isToast3Open = true;
  const closeToast3 = () => isToast3Open = false
  let isToast4Open = true;
  const closeToast4 = () => isToast4Open = false
  let timedToast = true;
  setTimeout(() => {
    timedToast = false;
  }, 10000);

  let isButtonDisabled = false;
  const toggleButtonDisabled = () => isButtonDisabled = !isButtonDisabled;
  let value = '';


  // Choice Inputs Shifting on Small Devices #118
  // Config for an individual checkbox hence array of 1 item
  const checkboxOptions = [{
    name: "tos",
    value: "tos",
    label: "I have read and agree to the terms of service."
  }];
  let tosAgreedTo = false;
  const toggleTosAgreedTo = () => tosAgreedTo = !tosAgreedTo;

  /**
   * Choice Inputs
   */
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

  /**
   * Select options
   */
  const tennisOptions = [
    { value: 'andre', label: 'Andre Agassi' },
    { value: 'serena', label: 'Serena Williams' },
    { value: 'mac', label: 'John McEnroe' },
    { value: 'borg', label: 'Bjorn Borg' },
    { value: 'althea', label: 'Althea Gibson' },
    { value: 'roger', label: 'Roger Federer' },
  ];

  /**
   * Table
   */
  const createRow = (name, weapon, slams, birthdate) => ({
    name,
    weapon,
    slams,
    birthdate,
  });

  const tableArgs = {
    rows: [
      createRow("Roger Federer", "Forehand and serve", 20, "August 8, 1981"),
      createRow(
        "Andre Agassi",
        "Return of serve. Groundstrokes",
        8,
        "April 29, 1970"
      ),
      createRow("Steffi Graf", "Forehand", 22, "June 14, 1969"),
      createRow(
        "Martina Navratilova",
        "Serve and volley",
        18,
        "October 18, 1956"
      ),
      createRow("Rafael Nadal", "Backhand and speed", 20, "June 3, 1986"),
      createRow(
        "Althea Gibson",
        "Speed, strength, and fluidity ",
        11,
        "August 25, 1927"
      ),
      createRow("Novak Djokovic", "Backhand and speed", 20, "May 22, 1987"),
      createRow("Arthur Ashe", "Serve and volley", 3, "July 10, 1943"),
    ],
    headers: [
      {
        label: 'Name',
        key: 'name',
        width: '25%',
        sortable: true,
      },
      {
        label: 'Weapon',
        key: 'weapon',
        width: '45%',
      },
      {
        label: 'Grand Slams',
        key: 'slams',
        width: '10%',
        sortable: true,
        // See https://svelte.dev/repl/74593f36569a4c268d8a6ab277db34b5?version=3.12.1
        // for how all this is wired together
        renderComponent: () => TableCustomRenderComponent
      },
      {
        label: "Birthdate",
        key: "birthdate",
        width: '20%',
        sortable: true,
        sortFn: (a, b) => {
          // Naive date comparisons; but we're controlling data so ;-)
          const d1 = new Date(a).getTime() || -Infinity;
          const d2 = new Date(b).getTime() || -Infinity;
          if (d1 > d2) {
            return 1;
          }
          if (d1 < d2) {
            return -1;
          }
          return 0;
        },
      },
    ],
    caption: "Tennis Superstars (custom header widths)",
  }
  /**
   * Menu
   */
  const menuItems = [
    {
      label: "Menu Item 1",
      menuItemComponent: MenuItem
    },
    {
      isDisabled: true,
      label: "Menu Item 2",
      menuItemComponent: MenuItem
    },
    {
      label: "Menu Item 3",
      menuItemComponent: MenuItem
    },
  ]

  /**
   * Pagination
   */
  const paging = usePagination({ offset: 1 });
  let currentPage = 1;
  $: paginationPages = paging.generate(currentPage, 50);

  const onPageUpdated = async (pageNumber) => {
    console.log("onPageUpdated called with page: ", pageNumber)
    currentPage = pageNumber;
  };
  
  const paginationArgs = {
    onPageChange: onPageUpdated,
    navigationLabels: {
      previous: "Previa",
      next: "Siguiente",
      first: "Primera",
      last: "Última",
    },
    ariaLabel: "Pagination",
    justify: "center"
  }

  const onClickStub = (e) => console.log('onClickStub called...', e)

  // DIALOG
  let dialogInstance;
  const assignDialogInstance = (ev) => {
    console.log('in App.svelte -- assignDialogInstance called...')
    dialogInstance = ev.detail.instance;
  };

  const openDialog = () => {
    console.log('in App.svelte -- openDialog calling instance.show()')
    if (dialogInstance) {
      dialogInstance.show();
    }
  };

  // DRAWER
  let drawer = null;
  const openDrawer = () => {
    if (drawer) {
      drawer.show();
    }
  };

  const closeDrawer = () => {
    if (drawer) {
      drawer.hide();
    }
  };

  const assignDrawerRef = (ev) => {
    drawer = ev.detail.instance;
  };

  // Fixes input bug #114
  let textIsVisible = false;
	const toggleTextVisibility = () => {
		textIsVisible = !textIsVisible;
	};
  let testIsInvalid = false;
  let testHelpText = false;

</script>

<main class="container">
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
  <div>
    <Toasts portalRootSelector="body" horizontalPosition="center" verticalPosition="top">
      <Toast isOpen={timedToast} type="dark">
        <ToastIconExample type="dark" utilityClasses="mie8" />
        <p>This toast will close in 10 seconds</p>
      </Toast>
      <div class="mbe14" />
      <Toast isOpen type="info">
        <ToastIconExample type="info" utilityClasses="mie8" />
        <p>{alertMessage}</p>
      </Toast>
    </Toasts>
    <Toasts portalRootSelector="body" horizontalPosition="end" verticalPosition="top">
      <Toast isOpen={isToast1Open} type="info">
        <ToastIconExample type="info" utilityClasses="mie8" />
        <p>{alertMessage}</p>
        <Close color="var(--agnostic-primary-dark)" on:click={closeToast1} />
      </Toast>
      <div class="mbe14" />
      <Toast isOpen={isToast2Open} type="success">
        <ToastIconExample type="success" utilityClasses="mie8" />
        <p>{alertMessage}</p>
        <Close color="var(--agnostic-action-from)" on:click={closeToast2} />
      </Toast>
      <div class="mbe14" />
      <Toast isOpen={isToast3Open} type="warning">
        <ToastIconExample type="warning" utilityClasses="mie8" />
        <p>{alertMessage}</p>
        <Close color="var(--agnostic-warning-dark)" on:click={closeToast3} />
      </Toast>
      <div class="mbe14" />
      <Toast isOpen={isToast4Open} type="error">
        <ToastIconExample type="error" utilityClasses="mie8" />
        <p>{alertMessage}</p>
        <Close color="var(--agnostic-error-dark)" on:click={closeToast4} />
      </Toast>
    </Toasts>
    <Toasts portalRootSelector="body" horizontalPosition="start" verticalPosition="top">
      <Toast isOpen={timedToast} type="dark">
        <ToastIconExample type="dark" utilityClasses="mie8" />
        <p>This toast will close in 10 seconds</p>
      </Toast>
    </Toasts>
    <Toasts portalRootSelector="body" horizontalPosition="start" verticalPosition="bottom">
      <Toast isOpen={timedToast} type="dark">
        <ToastIconExample type="dark" utilityClasses="mie8" />
        <p>This toast will close in 10 seconds</p>
      </Toast>
    </Toasts>
    <Toasts portalRootSelector="body" horizontalPosition="center" verticalPosition="bottom">
      <Toast isOpen={timedToast} type="dark">
        <ToastIconExample type="dark" utilityClasses="mie8" />
        <p>This toast will close in 10 seconds</p>
      </Toast>
    </Toasts>
    <Toasts portalRootSelector="body" horizontalPosition="end" verticalPosition="bottom">
      <Toast isOpen type="dark">
        <ToastIconExample type="dark" utilityClasses="mie8" />
        <p>{alertMessage}</p>
      </Toast>
    </Toasts>
  </div>
  <Card>
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
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button on:click={onClickStub}>One</Button>
      <Button on:click={onClickStub}>Two</Button>
      <Button on:click={onClickStub}>Three</Button>
    </ButtonGroup>

    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" on:click={onClickStub}>One</Button>
      <Button mode="primary" on:click={onClickStub}>Two</Button>
      <Button mode="primary" on:click={onClickStub}>Three</Button>
    </ButtonGroup>

    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="secondary" on:click={onClickStub}>One</Button>
      <Button mode="secondary" on:click={onClickStub}>Two</Button>
      <Button mode="secondary" on:click={onClickStub}>Three</Button>
    </ButtonGroup>

    <div style="margin-bottom: 40px;"></div>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" isBordered on:click={onClickStub}>One</Button>
      <Button mode="primary" isBordered on:click={onClickStub}>Two</Button>
      <Button mode="primary" isBordered on:click={onClickStub}>
        Three
      </Button>
    </ButtonGroup>

    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="secondary" isBordered on:click={onClickStub}>
        One
      </Button>
      <Button mode="secondary" isBordered on:click={onClickStub}>
        Two
      </Button>
      <Button mode="secondary" isBordered on:click={onClickStub}>
        Three
      </Button>
    </ButtonGroup>
  </Card>
  <div class="mbs48 mbe24">
    <h2>Toggling button disabled</h2>
    <Button mode="primary" on:click={toggleButtonDisabled}>Click to Toggle</Button>
    <Button isDisabled={isButtonDisabled}>Disabled</Button>
  </div>
  <Card>
    <h2>Input</h2>
    <Input id="1" label="Default input" />
    <Input id="2" isRounded label="Rounded input" />
    <Input id="3" isUnderlined label="Underlined input" />
    <Input id="4" isUnderlined isUnderlinedWithBackground label="Underlined with background" />
    <Input id="5" isInline label="Inline input" />
    <Input id="6" size="small" label="Small input" />
    <Input id="7" size="large" label="Large input" />
    <button class="mie32" on:click={() => testHelpText=!testHelpText}>Toggle help text</button>
    <Input id="8" helpText={testHelpText ? 'Some useful help hint…' : null} label="Help text" />
    <button class="mie32" on:click={() => testIsInvalid=!testIsInvalid}>Toggle is invalid</button>
    <Input id="9" isInvalid={testIsInvalid} invalidText="Some error hint…" label="Error hints" />
    <Input
      hasLeftAddon={true}
      hasRightAddon={true}
      id="10"
      label="Input with addons"
    >
      <div slot="addonLeft">
        <InputAddonItem addonLeft={true}><span>L</span></InputAddonItem>
      </div>
      <div slot="addonRight">
        <InputAddonItem addonRight={true}><span>R</span></InputAddonItem>
      </div>
    </Input>
    <p class="mbs24">Dynamic Input (#114)</p>
    <Input
      hasRightAddon={true}
      id="bug114"
      bind:value
      type={textIsVisible ? 'text' : 'password'}
      label="Password input toggle (visible / invisible)"
    >
      <div slot="addonRight">
        <InputAddonItem addonRight={true}>
          <Button isBlank on:click={toggleTextVisibility}>
            {#if textIsVisible}
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ion" width="1.125rem" height="1.125rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" data-icon="ion:md-eye-off"><path d="M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z" fill="currentColor"></path></svg>
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ion" width="1.125rem" height="1.125rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" data-icon="ion:md-eye"><path d="M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z" fill="currentColor"></path></svg>
            {/if}
          </Button>
        </InputAddonItem>
      </div>
    </Input>
  </Card>
  <Card>
    <h2>Checkbox</h2>
    <ChoiceInput type="checkbox" isInline options={opts} />
    <ChoiceInput type="checkbox" isInline isDisabled options={opts} />
    <h2>Weekly disabled only</h2>
    <ChoiceInput type="checkbox" isInline disabledOptions={["weekly"]} options={opts} />
  </Card>
  <Card>
    <h2>Radio</h2>
    <ChoiceInput type="radio" isInline options={opts} />
    <ChoiceInput type="radio" isInline isDisabled options={opts} />
    <button class="mie32" on:click={() => testIsInvalid=!testIsInvalid}>Toggle is invalid</button>
    <ChoiceInput type="radio" isInvalid={testIsInvalid} options={opts} />
  </Card>
  <Card>
    <div class="mbs40">
    <Divider size="small" />
    <p class="mbs40 mbe24">Choice Inputs Shifting #118. Remove body widths and narrow viewport.
    Once text wraps, the check should maintain integrity:</p>
    <ChoiceInput
      type="checkbox"
      isFieldset={false}
      legendLabel="agree to terms of service toggle"
      isInvalid={!tosAgreedTo}
      options={checkboxOptions}
      on:change={toggleTosAgreedTo}
    />
    <div class="mbe24"></div>
    <Button mode="primary" isRounded isBlock isDisabled={!tosAgreedTo}>Submit</Button>
  </Card>
  <section class="mbs32 mbe24">
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
    <h1>Svelte examples</h1>
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
  </section>
  <section class="mbe24">
    <h3 class="mbs40 mbe12">Header content justify left</h3>
    <p class="mbe24">Pass in <code>isHeaderContentStart</code> and apply a global CSS class with
      <code>flex-grow: 0</code> on mobile (so it will stack as column), and <code>flex-grow: 1</code>
      at a breakpoint of your choosing to push other content over. Inspect <code>.header-flex-fill</code>
      in devtools to see an example.
    </p>	
    <Header isHeaderContentStart={true}>
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
  </section>
  <section class="mbe24">
    <h3 class="mbs40 mbe12">Header content justify right</h3>
    <p class="mbe24">Pass in <code>isHeaderContentEnd</code> and apply
      <code>flex-fill</code> to the <code>logoleft</code> content so grows (pushes content over).
    </p>
    <Header isHeaderContentEnd={true}>
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
    <EmptyState>
      <div slot="header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#999"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
          />
        </svg>
      </div>
      <div slot="body">
        <div class="h4">
          No connections yet
        </div>
        <p
          class="mbe16"
          style="color: var(--agnostic-gray-dark);"
        >
          Click below to add some friends
        </p>
      </div>
      <div slot="footer">
        <Button mode="primary">
          Invite friend
        </Button>
      </div>
    </EmptyState>
  </section>
  <section class="mbe24">
    <h2>Divider</h2> 
    <div class="mbs16 mbe16">
      <Divider />
    </div>
    <div class="mbs16 mbe16">
      <Divider justify="start">
        <div slot="dividerContent">
          Start
        </div>
      </Divider>
    </div>
    <div class="mbs16 mbe16">
      <Divider justify="end">
        <div slot="dividerContent">
          End
        </div>
      </Divider>
    </div>
    <div class="mbs16 mbe16">
      <Divider size="small">
        <div slot="dividerContent">
          Small
        </div>
      </Divider>
    </div>
    <div class="mbs16 mbe16">
      <Divider size="large">
        <div slot="dividerContent">
          Large
        </div>
      </Divider>
    </div>
    <div class="mbs16 mbe16">
      <Divider size="xlarge">
        <div slot="dividerContent">
          XLarge
        </div>
      </Divider>
    </div>
    <div class="mbs16 mbe16">
      <Divider type="success">
        <div slot="dividerContent">
          Success
        </div>
      </Divider>
    </div>
    <div class="mbs16 mbe16">
      <Divider type="info">
        <div slot="dividerContent">
          Info
        </div>
      </Divider>
    </div>
    <div class="mbs16 mbe16">
      <Divider type="warning">
        <div slot="dividerContent">
          Warning
        </div>
      </Divider>
    </div>
    <div class="mbs16 mbe16">
      <Divider type="error">
        <div slot="dividerContent">
          Error
        </div>
      </Divider>
    </div>
    <p class="mbs16 mbe16">With no <code>dividerContent</code> slot:</p>
    <div class="mbs16 mbe16">
      <Divider type="success"></Divider>
    </div>
    <div class="mbe16">
      <Divider type="info"></Divider>
    </div>
    <div class="mbe16">
      <Divider type="warning"></Divider>
    </div>
    <div class="mbe16">
      <Divider type="error"></Divider>
    </div>
    <div class="mbe16">
      <Divider size="small"></Divider>
    </div>
    <div class="mbe16">
      <Divider size="large"></Divider>
    </div>
    <div class="mbe16">
      <Divider size="xlarge"></Divider>
    </div>
    <div class="flex mbe48">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Divider isVertical={true}>
        <div slot="dividerContent">
          yes
        </div>
      </Divider>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      <Divider isVertical={true}>
        <div slot="dividerContent">
          sir!
        </div>
      </Divider>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <p class="mbs16 mbe16">With no <code>dividerContent</code> slot:</p>
    <div class="flex mbe48">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Divider isVertical={true}></Divider>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      <Divider isVertical={true}></Divider>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </section>
  <section class="mbe24">
    <h2>Disclose</h2> 
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
  <section class="mbe24">
    <h2 class="mbe24">Breadcrumbs</h2>
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
  <section class="mbe24">
    <h3 class="mbs40 mbe24">Tables</h3>
    <Table {...tableArgs} />
  </section>
  <section class="mbe24">
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
  </section>
  <section class="mbe24">
    <h3 class="mbs40 mbe24">Vertical Tabs</h3>
    <Tabs isBorderless isVerticalOrientation size="large" tabs={[
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
  </section>
  <section class="mbe24">
    <h3 class="mbs40 mbe24">Vertical Tabs with Custom Buttons</h3>
    <Tabs isBorderless isVerticalOrientation size="large" tabs={[
      {
        title: "Tab 1",
        ariaControls: "panel-1",
        tabPanelComponent: Tab1,
        tabButtonComponent: TabButtonCustom,
      },
      {
        title: "Tab 2",
        ariaControls: "panel-2",
        tabPanelComponent: Tab2,
        tabButtonComponent: TabButtonCustom,
      },
      {
        title: "Tab 3",
        ariaControls: "panel-3",
        tabPanelComponent: Tab3,
        tabButtonComponent: TabButtonCustom,
      },
      {
        title: "Tab 4",
        ariaControls: "panel-4",
        tabPanelComponent: Tab4,
        tabButtonComponent: TabButtonCustom,
      },
    ]}></Tabs>
  </section>
  <section class="mbe24">
    <h3>Tags</h3>
    <Tag>unknown</Tag>
    <Tag shape="round">Rounded</Tag>
    <Tag shape="pill">Badge</Tag>
    <Tag type="success" isUppercase={true}>success</Tag>
    <Tag type="info" isUppercase={true}>info</Tag>
    <Tag type="warning" isUppercase={true}>warning</Tag>
    <Tag type="error" isUppercase={true}>error</Tag>
    <Tag type="error" shape="circle">2</Tag>
  </section>
  <Card>
    <h2>Progress</h2>
    <Progress value={30} max={100} />
  </Card>
  <Card>
    <h2>Avatars</h2>
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
  <section class="mbs32 mbe24">
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
      uniqueId="sel4"
      name="select4"
      size="small"
      labelCopy="Select the best tennis player of all time"
      defaultOptionLabel="Select your favorite tennis player of all-time"
      options={tennisOptions}
    />
    <h2>Select large</h2>
    <Select
      uniqueId="sel5"
      name="select5"
      size="large"
      labelCopy="Select the best tennis player of all time"
      defaultOptionLabel="Select your favorite tennis player of all-time"
      options={tennisOptions}
      on:selected={(e) => {
        console.log('Single select: ', e.detail);
      }}
    />
    <h2>Multiple select size 4</h2>
    <div class="mbs12 mbe16">
      <Select
        isMultiple
        multipleSize={4}
        options={tennisOptions}
        on:selected={(e) => {
          console.log('Multi select: ', e.detail);
        }}
        unique-id="sel6"
        name="select6"
        label-copy="Select the best tennis player of all time"
      />
    </div>
  </section>
  <div class="mbe24" />
  
  <Card isBorder={true}>
    <div class="p16">Border Card</div>
    <div class="p16 flex-grow-1 flex-shrink-1"
         style="flex-basis: 50ch;">
      The card comes with minimal
      <span class="quoted">skinning css</span>
      and no padding (the padding you see here is from the demo styles).
      By default Cards have a flex direction of <i>row</i>, so each child
      with a <i>flex</i> rule will get placed as a sort of column
      in the row (until the viewport is shrunk below a size that can support
      the content's flex-basis; under that it will wrap and thus stack).
    </div>
  </Card>
  
  <div class="mbe24" />
  
  <Card isBorder={true} isRounded={true}>
    <div class="p16">
      Border & Rounded
    </div>
    <div class="p16 flex-grow-1 flex-shrink-1"
         style="flex-basis: 50ch;">
      The card comes with minimal
      <span class="quoted">skinning css</span>
      and no padding (the padding you see here is from the demo styles).
      By default Cards have a flex direction of <i>row</i>, so each child
      with a <i>flex</i> rule will get placed as a sort of column
      in the row (until the viewport is shrunk below a size that can support
      the content's flex-basis; under that it will wrap and thus stack).
    </div>
  </Card>
  
  <div class="mbe24" />
  
  <Card isBorder={true} isStacked={true}>
    <div class="p16">
      Stacked & Border
    </div>
    <div style="padding: 24px">
      Stacked cards start their lives with flex direction <i>column</i>, so each child
      be stacked one on top of the other and continue to grow downward.
    </div>
  </Card>
  
  <div class="mbe24" />
  
  <Card isShadow={true} isStacked={true}>
    <div style="padding: 24px;">Stacked and shadow</div>
    <div style="padding: 24px;">Card</div>
  </Card>
  
  <div class="mbe24" />
  
  <Card isStacked={true} isShadow={true} isAnimated={true}>
    <div style="padding: 24px;">Stacked, shadown, and animated</div>
    <div style="padding: 24px;">Card</div>
  </Card>
  
  <div class="mbe24" />
  
  <Card type="success" isStacked={true}>
    <div class="custom-wrap">
      <div style="padding: 24px;">Success stacked</div>
      <div style="padding: 24px;">Card</div>
    </div>
  </Card>
  
  <div class="mbe24" />
  
  <Card type="info" isStacked={true}>
    <div style="padding: 24px;">Info and stacked</div>
    <div style="padding: 24px;">Card</div>
  </Card>
  
  <div class="mbe24" />
  
  <Card type="warning" isStacked={true}>
    <div style="padding: 24px;">Warning and stacked</div>
    <div style="padding: 24px;">Card</div>
  </Card>
  
  <div class="mbe24" />
  
  <Card type="error" isStacked={true}>
    <div style="padding: 24px;">Error and stacked</div>
    <div style="padding: 24px;">Card</div>
  </Card>
  
  <div class="mbe24" />
  
  <Card isSkinned={false}>
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
  <section class="mbe24">
    <h3 class="mbe24">Pagination (centered)</h3>
    <!-- Most of the arguments to pagination component can be stuffed in a default
      object like we have here in paginationArgs. But current and pages need to be
      reactive so those should be passed in individually as you see here. -->
    <Pagination {...paginationArgs} current={currentPage} pages={paginationPages} />
  </section>
  <section class="mbe24">
    <h3 class="mbe24">Menu</h3>
    <Menu
      menuItems={menuItems}
      id="mymenu1"
      menuTitle="Players"
      onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
      onClose={() => console.log('onClose called...')}
    />
    <span class="mie12" />
    <Menu menuItems={menuItems}
      id="mymenu2"
      menuTitle="Players (closeOnClickOutside false)"
      closeOnClickOutside={false}
      onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
      onClose={() => console.log('onClose called...')}
    />
    <span class="mie12" />
    <Menu menuItems={menuItems}
      id="mymenu2"
      menuTitle="Players (closeOnSelect false)"
      closeOnSelect={false}
      onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
      onClose={() => console.log('onClose called...')}
    />
    <span class="mie12" />
    <Menu menuItems={menuItems}
      id="mymenu2"
      menuTitle="Players (closeOnSelect & closeOnClickOutside false)"
      closeOnSelect={false}
      closeOnClickOutside={false}
      onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
      onClose={() => console.log('onClose called...')}
    />
    <span class="mie12" />
    <Menu menuItems={menuItems}
      id="mymenu2"
      menuTitle="Players (small)"
      size="small"
      onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
      onClose={() => console.log('onClose called...')}
    />
    <div class="mbe18" />
    <Menu menuItems={menuItems}
      id="mymenu2"
      menuTitle="Players (large)"
      size="large"
      onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
      onClose={() => console.log('onClose called...')}
    />
    <div class="mbe18" />
    <Menu menuItems={menuItems}
      id="mymenu2"
      menuTitle="Players (bordered)"
      isBordered
      onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
      onClose={() => console.log('onClose called...')}
    />
    <div class="mbe18" />
    <Menu menuItems={menuItems}
      id="mymenu2"
      menuTitle="Players (rounded)"
      isRounded
      onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
      onClose={() => console.log('onClose called...')}
    />
  </section>
  <div class="container flex flex-column items-center">
    <h3 class="mbe24">Spinners</h3>
    <Spinner size="small"/>
    <div class="mbe24" />
    <Spinner />
    <div class="mbe24" />
    <Spinner size="large"/>
    <p class="mbs16 mbe24">
      Custom color via <code>--agnostic-spinner-color</code>
    </p>
    <div class="mbe24" style="--agnostic-spinner-color: salmon;">
      <Spinner size="large"/>
    </div>
  </div>
  <div class="container flex flex-column items-center">
    <h3 class="mbe24">Loaders</h3>
    <Loader size="small"/>
    <div class="mbe24" />
    <Loader />
    <div class="mbe24" />
    <Loader size="large"/>
    <p class="mbs16 mbe24">
      Custom color via <code>--agnostic-loading-color</code>
    </p>
    <div class="mbe24" style="--agnostic-loading-color: salmon;">
      <Loader size="large"/>
    </div>
  </div>
  <div class="container flex flex-column items-center">
    <h3 class="mbe24">Drawer</h3>
    <Button
      mode="primary"
      isBordered
      isBlock
      isRounded
      type="button"
      on:click={openDrawer}
    >
      Open first drawer via drawerRef
    </Button>
    <div class="mbs24 mbe16" />
    <Button
      type="button"
      data-a11y-dialog-show="drawer-bottom-test"
      mode="primary"
      isBordered
      isBlock
      isRounded
    >
      Open the first bottom drawer via data attribute
    </Button>
    <Drawer
      id="drawer-bottom-test"
      drawerRoot="#portal-root"
      placement="bottom"
      title="My Drawer Title"
      on:instance={assignDrawerRef}
    >
      <div class="flex-fill">
        <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
        <button
          class="custom-close-button"
          on:click={closeDrawer}
        >
          Close from within slot using instance
        </button>
      </div>
    </Drawer>
    <div class="mbs24 mbe16" />
    <Button
      type="button"
      data-a11y-dialog-show="drawer-top-test"
      mode="primary"
      isBordered
      isBlock
      isRounded
    >
      Open the top drawer via data attribute
    </Button>
    <Drawer
      id="drawer-top-test"
      drawerRoot="#portal-root"
      placement="top"
      title="My Drawer Title"
    >
      <div class="flex-fill">
        <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
      </div>
    </Drawer>
    <div class="mbs24 mbe16" />
    <Button
      type="button"
      data-a11y-dialog-show="drawer-start-test"
      mode="primary"
      isBordered
      isBlock
      isRounded
    >
      Open the start drawer via data attribute
    </Button>
    <Drawer
      id="drawer-start-test"
      drawerRoot="#portal-root"
      placement="start"
      title="My Drawer Title"
    >
      <div class="flex-fill">
        <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
      </div>
    </Drawer>
    <div class="mbs24 mbe16" />
    <Button
      type="button"
      data-a11y-dialog-show="drawer-end-test"
      mode="primary"
      isBordered
      isBlock
      isRounded
    >
      Open the end drawer via data attribute
    </Button>
    <Drawer
      id="drawer-end-test"
      drawerRoot="#portal-root"
      placement="end"
      title="My Drawer Title"
    >
      <div class="flex-fill" style="display: grid; grid-template-columns: 1fr; grid-template-rows: 100px 1fr; height: 50vh;">
        <div style="background-color: var(--agnostic-primary)"></div>
        <div style="background-color: var(--agnostic-action)"></div>
        <p class="mbs40">Just testing some random use of CSS grid inside the drawer. No biggie.</p>
      </div>
    </Drawer>
    <div class="mbs24 mbe16" />
    <h3 class="mbe24">Dialog</h3>
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
        <Input
          isRounded
          label="Email (required)"
          type="email"
          name="EMAIL"
          id="email"
          placeholder="email@example.com"
          required
        />
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
  </div>
  <div class="container flex flex-column items-center">
    <h3 class="mbe24">Dialog 2</h3>
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
        <Input
          isRounded
          label="Email (required)"
          type="email"
          name="EMAIL"
          id="email2"
          placeholder="email@example.com"
          required
        />
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
