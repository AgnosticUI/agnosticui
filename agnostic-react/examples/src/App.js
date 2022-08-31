import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Global AgnosticUI CSS
// This way you get the properties, reset, and utilities:
// import 'agnostic-react/dist/common.min.css';

// But, you can also import them individually. Here we're just testing
// importing all of them, but, you can imagine a case where you don't
// want the CSS Utilities because they add to the payload weight.
import 'agnostic-react/dist/common.properties.min.css';
import 'agnostic-react/dist/common.resets.min.css';
import 'agnostic-react/dist/common.utilities.min.css';
import 'agnostic-react/dist/opinions.min.css';

// Component-level CSS Modules
import 'agnostic-react/dist/esm/index.css';
// Component
import {
  Alert,
  Avatar,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  Close,
  ChoiceInput,
  Dialog,
  Disclose,
  Divider,
  Drawer,
  EmptyState,
  EmptyStateHeader,
  EmptyStateBody,
  EmptyStateFooter,
  Header,
  HeaderNav,
  HeaderNavItem,
  Icon,
  Input,
  Loader,
  Menu, 
  MenuItem,
  Pagination,
  Progress,
  Select,
  Spinner,
  Switch,
  Tag,
  Table,
  Tabs,
  TabButton,
  TabPanel,
  Toasts,
  Toast,
  Tooltip,
} from 'agnostic-react';

import {
  usePagination,
} from "agnostic-helpers/dist/index.esm.js";


const SvgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
    />
  </svg>
);

const getColor = (type) => {
  switch (type) {
    case 'warning':
      return 'var(--agnostic-warning-border-accent)';
    case 'info':
      return 'var(--agnostic-primary-dark)';
    case 'success':
      return 'var(--agnostic-action-dark)';
    case 'error':
      return 'var(--agnostic-error-dark)';
    default:
      return 'var(--agnostic-gray-mid-dark)';
  }
};

const DemoIcon = ({ type, utilityClasses }) => {
  return (
    <svg
      className={utilityClasses}
      style={{ color: getColor(type) }}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  );
};
const customSpinnerStyle = { '--agnostic-spinner-color': 'salmon' };
const customLoadingStyle = { '--agnostic-loading-color': 'salmon' };

const alertMessage = 'Alerts should be used for timely information.';

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
const optionNames = ['frequency', 'schedule', 'howoften', 'when', 'letmeknow', 'whenz', 'often', 'freq', 'frekuency', 'whattimes']
const options = []
for (let i = 0; i < optionNames.length; i += 1) {
  const optionName = optionNames[i];
  const optionsWithNames = []
  opts.forEach(o => {
    const copy = Object.assign({}, o, { name: optionName })
    optionsWithNames.push(copy);
  })
  options.push(optionsWithNames);
}
const disabledOptions = ['weekly', 'monthly'];

/**
 * This is a contrived setup to support the example, but,
 * we * DO need to ensure IDs (and ARIA IDs) are unique.
 */
const tabButtons = [];
const tabPanels = [];

[...Array(6)].forEach((_, i) => {
  tabButtons[i] = [
    <TabButton controlsPanelId={`panel1-${i}`} key={1}>
      Tab 1
    </TabButton>,
    <TabButton controlsPanelId={`panel2-${i}`} key={2}>
      Tab 2
    </TabButton>,
    <TabButton controlsPanelId={`panel3-${i}`} key={3}>
      Tab 3
    </TabButton>,
    <TabButton controlsPanelId={`panel4-${i}`} key={4}>
      Tab 4
    </TabButton>,
    <TabButton controlsPanelId={`panel5-${i}`} key={5}>
      Tab 5
    </TabButton>,
  ];

  tabPanels[i] = [
    <TabPanel id={`panel1-${i}`} key={1}>
      <p>Tab 1 content (no padding or margins so consumer can control desired gutters)</p>
    </TabPanel>,
    <TabPanel id={`panel2-${i}`} key={2}>
      <p>Tab 2 content (no padding or margins so consumer can control desired gutters)</p>
    </TabPanel>,
    <TabPanel id={`panel3-${i}`} key={3}>
      <p>Tab 3 content</p>
    </TabPanel>,
    <TabPanel id={`panel4-${i}`} key={4}>
      <p>Tab 4 content</p>
    </TabPanel>,
    <TabPanel id={`panel5-${i}`} key={5}>
      <p>Tab 5 content</p>
    </TabPanel>,
  ];
});

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


// For table example
const headersWithWidths = [
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
    width: '13%',
    sortable: true,
    renderFn: (key, value) => (
      <td key={key} style={{ textAlign: 'center' }}>
        {value}
        <span className="mis6">🏆</span>
      </td>
    ),
  },
  {
    label: 'Birthdate',
    key: 'birthdate',
    width: '17%',
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
];

const createRow = (name, weapon, slams, birthdate) => ({ name, weapon, slams, birthdate });

const rows = [
  createRow(
    'Serena Williams',
    "Biggest serve in women's tennis all-time",
    23,
    'September 26, 1981',
  ),
  createRow('Roger Federer', 'Forehand and serve', 20, 'August 8, 1981'),
  createRow('Andre Agassi', 'Return of serve. Groundstrokes', 8, 'April 29, 1970'),
  createRow('Steffi Graf', 'Forehand', 22, 'June 14, 1969'),
  createRow('Martina Navratilova', 'Serve and volley', 18, 'October 18, 1956'),
  createRow('Rafael Nadal', 'Backhand and speed', 20, 'June 3, 1986'),
  createRow('Althea Gibson', 'Speed, strength, and fluidity ', 11, 'August 25, 1927'),
  createRow('Novak Djokovic', 'Backhand and speed', 20, 'May 22, 1987'),
  createRow('Arthur Ashe', 'Serve and volley', 3, 'July 10, 1943'),
];

// See A11yDialogProps
// https://github.com/KittyGiraudel/react-a11y-dialog/blob/main/index.d.ts#L11
const props = ['dialog', 'drawer1', 'drawer2', 'drawer3', 'drawer4'].map((item) => {
  return {
    id: `ag-test-${item}`,
    title: `Test ${item}`,
    classNames: {
      // Note we don't have to pass in ALL classNames props and those
      // not included will fallback to react-a11y-dialog's defaults
      // See https://github.com/KittyGiraudel/react-a11y-dialog#api
      title: 'h3 mbe18 h4 mbe18 flex justify-center',
    }
  }
})
const dialogPropsDefault = props[0];
const drawer1PropsDefault = props[1];
const drawer2PropsDefault = props[2];
const drawer3PropsDefault = props[3];
const drawer4PropsDefault = props[4];

function App() {
  const [page, setPage] = useState(1);
  const paging = usePagination({ offset: 2 });
  const pages = paging.generate(page, 20);
  
  const dialog = useRef();
  const dialog2 = useRef();
  const drawer1Ref = useRef();
  const drawer2Ref = useRef();
  const drawer3Ref = useRef();
  const drawer4Ref = useRef();

  /**
   * Controls if Toast is open. In useEffect below we use a timeout of 10 seconds
   * and then set to false thus closing those Toasts with isOpen={toastIsOpen}
   */
  const [toastIsOpen, setToastIsOpen] = useState(true);
  const [toastIsOpen2, setToastIsOpen2] = useState(true);
  const [toastIsOpen3, setToastIsOpen3] = useState(true);
  const [toastIsOpen4, setToastIsOpen4] = useState(true);

  useEffect(() => {
    paging.generate(page, 20);
    const tout = setTimeout(() => setToastIsOpen(false), 10000)
    return () => {
      clearTimeout(tout)
    }
  }, [page, pages, paging, toastIsOpen, setToastIsOpen]);

  const handleChange = checkedItems => console.log(checkedItems)
  const onClickStub = (e) => console.log('onClickStub called...', e)

  return (
    <main className="App">
    <div className="container">
      <h1 className="mbe24">AgnosticUI React (Beta) — Kitchen Sink</h1>
      <div className="h4 mbs40 mbe24">Breadcrumbs</div>
      <div className="mbs24 mbe16">
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
      <div className="h4 mbs40 mbe24">Icon</div>
      <p className="mbs24 mbe40">
        Test this in Safari! We need to ensure that the component is actually applying a
        <code>width</code> to the SVG itself else Safari the icon won't be visible
      </p>
      <section className="mbe24">
        <Icon size={24}>
          <svg xmlns="http://www.w3.org/2000/svg"
             enableBackground="new 0 0 24 24"
             viewBox="0 0 24 24">
          <g>
            <rect fill="none"
                  height="24"
                  width="24" />
          </g>
          <g>
            <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h6v-6h2v6h6v-8h3L19,9.3z M17,18h-2v-6H9v6H7v-7.81l5-4.5l5,4.5V18z" />
            <path d="M10,10h4c0-1.1-0.9-2-2-2S10,8.9,10,10z" />
          </g>
        </svg>
        </Icon>
        <Icon type="info" size="64">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
        </svg>
      </Icon>
      </section>
      <div className="h4 mbs40 mbe24">Header</div>
      <section className="mbe24">
        <Header>
          <>
            <a href="https://web.dev/">web.dev</a>
            <HeaderNav>
              <HeaderNavItem>
                <a href="https://css-tricks.com/">CSS-Tricks</a>
              </HeaderNavItem>
              <HeaderNavItem>
                <a href="https://developer.mozilla.org/en-US/">MDN</a>
              </HeaderNavItem>
            </HeaderNav>
            <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
          </>
        </Header>
        <div className="h4 mbs40 mbe12">Header content justify left</div>
        <p className="mbe24">Pass in <code>isHeaderContentStart</code> and apply a global CSS class with
          <code>flex-grow: 0</code> on mobile (so it will stack as column), and <code>flex-grow: 1</code>
          at a breakpoint of your choosing to push other content over. Inspect <code>.header-flex-fill</code>
          in devtools to see an example.
        </p>
        <Header isHeaderContentStart>
          <>
            <a href="https://web.dev/">web.dev</a>
            <HeaderNav css="header-flex-fill">
              <HeaderNavItem>
                <a href="https://css-tricks.com/">CSS-Tricks</a>
              </HeaderNavItem>
              <HeaderNavItem>
                <a href="https://developer.mozilla.org/en-US/">MDN</a>
              </HeaderNavItem>
            </HeaderNav>
            <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
          </>
        </Header>
        <div className="h4 mbs40 mbe12">Header content justify right</div>
        <p className="mbe24">Pass in <code>isHeaderContentEnd</code> and apply
          <code>flex-fill</code> to the <code>logoleft</code> content so grows (pushes content over).
        </p>
        <Header isHeaderContentEnd>
          <>
            <a className="flex-fill" href="https://web.dev/">web.dev</a>
            <HeaderNav css="header-mbe16">
              <HeaderNavItem>
                <a href="https://css-tricks.com/">CSS-Tricks</a>
              </HeaderNavItem>
              <HeaderNavItem>
                <a href="https://developer.mozilla.org/en-US/">MDN</a>
              </HeaderNavItem>
            </HeaderNav>
            <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
          </>
        </Header>
      </section>
      <div className="h4 mbs40 mbe24">Inputs</div>
      <section className="mbe24">
        <Input
          id="inp1"
          size="small"
          placeholder="Enter name…"
          label="Small input"
          type="text"
        />
      </section>
      <section className="mbe24">
        <Input
          id="inp2"
          placeholder="Enter name…"
          label="Default input"
          type="text"
        />
      </section>
      <section className="mbe24">
        <Input
          id="inp3"
          size="large"
          placeholder="Enter name…"
          label="Large input"
          type="text"
        />
      </section>
      <section className="mbe24">
        <Input
          id="inp4"
          isInline
          placeholder="Enter name…"
          label="Inline input"
          type="text"
        />
      </section>
      <section className="mbe24">
        <Input
          id="inp5"
          isRounded
          placeholder="Enter name…"
          label="Rounded input"
          type="text"
        />
      </section>
      <section className="mbe24">
        <Input
          id="inp6"
          isUnderlined
          placeholder="Enter name…"
          label="Underlined input"
          type="text"
        />
      </section>
      <section className="mbe24">
        <Input
          id="inp7"
          isUnderlined
          isUnderlinedWithBackground
          placeholder="Enter name…"
          label="Underlined with background"
          type="text"
        />
      </section>
      <section className="mbe24">
        <Input
          id="inp10"
          helpText="Some useful help text can go here"
          placeholder="Enter something…"
          label="Help text"
          type="text"
        />
      </section>
      <section className="mbe24">
        <Input
          id="inp9"
          isInvalid
          invalidText="It's impossible to have a string that is cool enough for this field."
          placeholder="Enter a very cool string…"
          label="Cool factor"
          type="text"
        />
      </section>
      <section className="mbe24">
        <Input
          id="inp99"
          hasLeftAddon
          addOnLeft={
            <Icon
              size={18}
              type="success"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M21.03 5.72a.75.75 0 010 1.06l-11.5 11.5a.75.75 0 01-1.072-.012l-5.5-5.75a.75.75 0 111.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 011.06 0z"
                />
              </svg>
            </Icon>
          }
          hasRightAddon
          addOnRight={
            <Icon
              size={18}
              type="info"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 7.5a1 1 0 11-2 0 1 1 0 012 0zm-3 3.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v4.25h.75a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h.75V12h-.75a.75.75 0 01-.75-.75z" />
                <path
                  fillRule="evenodd"
                  d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
                />
              </svg>
            </Icon>
          }
          label="Input with addons"
        />
      </section>
      <section className="mbe24">
        <Input
          id="inp50"
          label="Textarea"
          type="textarea"
        />
      </section>
      <section className="mbe24">
        <Input
          id="inp51"
          label="Textarea small"
          type="textarea"
          size="small"
          rows={10}
          cols={5}
        />
      </section>
      <section className="mbe24">
        <Input
          id="inp52"
          label="Textarea large"
          type="textarea"
          size="large"
          rows={10}
          cols={5}
        />
      </section>
      <div className="h4 mbs40 mbe24">Alert</div>
      <section className="mbe24">
        <Alert>{ alertMessage }</Alert>
        <div className="mbe16" />
        <Alert isRounded>{ alertMessage }</Alert>
        <div className="mbe16" />
        <Alert isBorderAll>Border all</Alert>
        <div className="mbe16" />
        <Alert isBorderLeft>Border left</Alert>
        <div className="mbe16" />
        <Alert type="dark">
          <DemoIcon type="dark" utilityClasses="mie8" />
          <p className='flex-fill'>{ alertMessage }</p>
        </Alert>
        <div className="mbe16" />
        <Alert type="success">
          <DemoIcon type="success" utilityClasses="mie8" />
          <p className='flex-fill'>{ alertMessage }</p>
        </Alert>
        <div className="mbe16" />
        <Alert type="info">
          <DemoIcon type="info" utilityClasses="mie8" />
          <p className='flex-fill'>{ alertMessage }</p>
        </Alert>
        <div className="mbe16" />
        <Alert type="warning">
          <DemoIcon type="warning" utilityClasses="mie8" />
          <p className='flex-fill'>{ alertMessage }</p>
        </Alert>
        <div className="mbe16" />
        <Alert type="error">
          <DemoIcon type="error" utilityClasses="mie8" />
          <p className='flex-fill'>{ alertMessage }</p>
        </Alert>
      </section>
      <div className="h4 mbs40 mbe24">Avatar</div>
      <section className="mbe24">
        <Avatar text="AB" />
        <Avatar text="RL" size="small" />
        <Avatar text="RL" size="large" />
        <Avatar text="RL" size="xlarge" />
        <Avatar imgUrl="https://joeschmoe.io/api/v1/random" />
        <Avatar isTransparent imgUrl="https://joeschmoe.io/api/v1/random" />
        <Avatar>
          <SvgIcon />
        </Avatar>
      </section>
      <div className="h4 mbs40 mbe24">Table</div>
      <section className="mbe24">
        <Table
          headers={headersWithWidths}
          rows={rows}
          isHoverable
          caption="Tennis Superstars (custom header widths)"
        />
      </section>
      <div className="h4 mbs40 mbe24">Card</div>
      <section className="mbe24">
      <Card isBorder>
        <>
          <div className="p16">Border Card</div>
          <div className="p16 flex-grow-1 flex-shrink-1" style={{flexBasis: "50ch"}}>
            The card comes with minimal
            <span className="quoted">skinning css</span>
            and no padding (the padding you see here is from the demo styles). By default Cards have a
            flex direction of
            {' '}
            <i>row</i>
            , so each child with a
            {' '}
            <i>flex</i>
            {' '}
            rule will get placed as a
            sort of column in the row (until the viewport is shrunk below a size that can support the
            content's flex-basis; under that it will wrap and thus stack).
          </div>
        </>
      </Card>
      <div className="mbe24" />
      <Card isBorder isRounded>
        <>
          <div className="p16">Border & Rounded</div>
          <div className="p16 flex-grow-1 flex-shrink-1" style={{flexBasis: "50ch"}}>
            The card comes with minimal
            <span className="quoted">skinning css</span>
            and no padding (the padding you see here is from the demo styles). By default Cards have a
            flex direction of
            {' '}
            <i>row</i>
            , so each child with a
            {' '}
            <i>flex</i>
            {' '}
            rule will get placed as a
            sort of column in the row (until the viewport is shrunk below a size that can support the
            content's flex-basis; under that it will wrap and thus stack).
          </div>
        </>
      </Card>
        <div className="mbe24" />
        <Card isBorder isRounded>
          <>
            <div style={{ padding: 24 }}>Rounded with border</div>
            <div style={{ padding: 24 }}>Card</div>
          </>
        </Card>
        <div className="mbe24" />
        <Card isStacked isBorder>
          <>
            <div style={{ padding: 24 }}>Stacked (direction column)</div>
            <div style={{ padding: 24 }}>Card</div>
          </>
        </Card>
        <div className="mbe24" />
        <Card isStacked isShadow>
          <>
            <div style={{ padding: 24 }}>Stacked with shadow</div>
            <div style={{ padding: 24 }}>Card</div>
          </>
        </Card>
        <div className="mbe24" />
        <Card isAnimated isShadow isStacked>
          <>
            <div style={{ padding: 24 }}>Animated, stacked, with shadow</div>
            <div style={{ padding: 24 }}>Card</div>
          </>
        </Card>
        <div className="mbe24" />
        <Card type="success" isStacked>
          <>
            <div style={{ padding: 24 }}>Success</div>
            <div style={{ padding: 24 }}>Card</div>
          </>
        </Card>
        <div className="mbe24" />
        <Card type="success" isRounded isStacked>
          <>
            <div style={{ padding: 24 }}>Success rounded</div>
            <div style={{ padding: 24 }}>Card</div>
          </>
        </Card>
        <div className="mbe24" />
        <Card type="info" isStacked>
          <>
            <div style={{ padding: 24 }}>Info</div>
            <div style={{ padding: 24 }}>Card</div>
          </>
        </Card>
        <div className="mbe24" />
        <Card type="warning" isStacked>
          <>
            <div style={{ padding: 24 }}>Warning</div>
            <div style={{ padding: 24 }}>Card</div>
          </>
        </Card>
        <div className="mbe24" />
        <Card type="error" isStacked>
          <>
            <div style={{ padding: 24 }}>Error</div>
            <div style={{ padding: 24 }}>Card</div>
          </>
        </Card>
        <div className="mbe24" />
        <Card isSkinned={false}>
          <>
            <div style={{ padding: 24 }}>Base Card</div>
            <div style={{ padding: 24 }}>No Skin</div>
          </>
        </Card>
        <div className="mbe24" />
        <Card css="foo-bar">
          <>
            <div style={{ padding: 24 }}>Custom CSS Class</div>
            <div style={{ padding: 24 }}>Inspect to see the class: foo-bar</div>
          </>
        </Card>
      </section>
      <div className="h4 mbs40 mbe24">ChoiceInput</div>
      <section className="mbe24">
        <ChoiceInput
          id="ci1"
          type="checkbox"
          options={options[0]}
          legendLabel="Checkbox legend"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci2"
          isDisabled
          type="checkbox"
          options={options[1]}
          legendLabel="Checkbox disabled"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci3"
          disabledOptions={disabledOptions}
          type="checkbox"
          options={options[2]}
          legendLabel="Checkbox specific options disabled"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci4"
          type="checkbox"
          isFieldset={false}
          options={options[3]}
          legendLabel="Checkbox fieldset hidden"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci5"
          type="checkbox"
          isInline
          options={options[4]}
          legendLabel="Checkbox inline"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci6"
          type="checkbox"
          isInline
          size="small"
          options={options[5]}
          legendLabel="Checkbox small"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci7"
          type="checkbox"
          isInline
          size="large"
          options={options[6]}
          legendLabel="Checkbox large"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci8"
          type="checkbox"
          isInline
          size="large"
          checkedOptions={["daily", "weekly"]}
          options={options[7]}
          legendLabel="Checkbox prechecked options"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci10"
          type="radio"
          options={options[8]}
          legendLabel="Radio legend"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci11"
          isDisabled
          type="radio"
          options={options[9]}
          legendLabel="Radio disabled"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci12"
          disabledOptions={['two']}
          type="radio"
          options={[
            {
              name: 'numbers',
              value: 'one',
              label: 'one',
            },
            {
              name: 'numbers',
              value: 'two',
              label: 'two',
            },
            {
              name: 'numbers',
              value: 'three',
              label: 'three',
            },
          ]}
          legendLabel="Radio specific options disabled"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci14"
          type="radio"
          isInline
          size="small"
          options={[
            {
              name: 'shape',
              value: 'square',
              label: 'Square',
            },
            {
              name: 'shape',
              value: 'circle',
              label: 'Circle',
            },
          ]}
          legendLabel="Radio small"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci15"
          type="radio"
          isInline
          size="large"
          options={[
            {
              name: 'bands',
              value: 'bonjovi',
              label: 'Bon Jovi',
            },
            {
              name: 'bands',
              value: 'stones',
              label: 'Rolling Stones',
            },
            {
              name: 'bands',
              value: 'isleybros',
              label: 'Isley Brothers',
            },
          ]}
          legendLabel="Radio large"
          onChange={ handleChange }
        />
      </section>
      <div className="h4">Default Buttons</div>
      <section>
        <Button isBlank onClick={() => console.log('click works')}>
          Go
        </Button>
        <Button isBlock>Go</Button>
        <Button isRounded>Go</Button>
        <Button isBordered isRounded>
          Go
        </Button>
      </section>
      <div className="h4">Primary</div>
      <section>
        <Button mode="primary">Go</Button>
        <Button mode="primary" isBlank>
          Go
        </Button>
        <Button mode="primary" isBlock>
          Go
        </Button>
        <Button mode="primary" isRounded>
          Go
        </Button>
        <Button mode="primary" isBordered isRounded>
          Go
        </Button>
      </section>
      <div className="h4">Secondary</div>
      <section>
        <Button mode="secondary">Go</Button>
        <Button mode="secondary" isBordered>
          Go
        </Button>
        <Button mode="secondary" isBlank>
          Go
        </Button>
        <Button mode="secondary" isBlock>
          Go
        </Button>
        <Button mode="secondary" isRounded>
          Go
        </Button>
        <Button mode="secondary" isBordered isRounded>
          Go
        </Button>
      </section>
      <div className="h4">Misc</div>
      <section>
        <Button isDisabled>Go</Button>
        <Button mode="primary" isDisabled>
          Go
        </Button>
        <Button mode="secondary" isDisabled>
          Go
        </Button>
        <Button size="small">Go</Button>
        <Button size="large">Go</Button>
        <Button isSkinned="false">No Skin</Button>
      </section>
      <div className="mbs40 flex flex-column">
        <ButtonGroup ariaLabel="Appropriate label for your button group">
          <Button isGrouped onClick={onClickStub}>One</Button>
          <Button isGrouped onClick={onClickStub}>Two</Button>
          <Button isGrouped onClick={onClickStub}>Three</Button>
        </ButtonGroup>
        <div className="mbe24" />
        <ButtonGroup ariaLabel="Appropriate label for your button group">
          <Button isGrouped mode="primary" onClick={onClickStub}>One</Button>
          <Button isGrouped mode="primary" onClick={onClickStub}>Two</Button>
          <Button isGrouped mode="primary" onClick={onClickStub}>Three</Button>
        </ButtonGroup>
        <div className="mbe24" />
        <ButtonGroup ariaLabel="Appropriate label for your button group">
          <Button isGrouped mode="secondary" onClick={onClickStub}>One</Button>
          <Button isGrouped mode="secondary" onClick={onClickStub}>Two</Button>
          <Button isGrouped mode="secondary" onClick={onClickStub}>Three</Button>
        </ButtonGroup>
        <div className="mbe24" />
        <ButtonGroup ariaLabel="Appropriate label for your button group">
          <Button isGrouped mode="primary" isBordered onClick={onClickStub}>One</Button>
          <Button isGrouped mode="primary" isBordered onClick={onClickStub}>Two</Button>
          <Button isGrouped mode="primary" isBordered onClick={onClickStub}>
            Three
          </Button>
        </ButtonGroup>
        <div className="mbe24" />
        <ButtonGroup ariaLabel="Appropriate label for your button group">
          <Button isGrouped mode="secondary" isBordered onClick={onClickStub}>
            One
          </Button>
          <Button isGrouped mode="secondary" isBordered onClick={onClickStub}>
            Two
          </Button>
          <Button isGrouped mode="secondary" isBordered onClick={onClickStub}>
            Three
          </Button>
        </ButtonGroup>
      </div>
      <div className="h4 mbs40 mbe24">Close</div>
      <section>
        <Close />
        <Close size="small" />
        <Close size="large" />
        <Close size="xlarge" />
      </section>
      <section>
        <div className="h4 mbe24">Empty States</div>
        <EmptyState isBordered>
          <EmptyStateHeader>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#999" width="40" height="40" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z" />
            </svg>
          </EmptyStateHeader>
          <EmptyStateBody>
            <div className="h4">No connections yet</div>
            <p className="mbe16">Click below to add some friends</p>
          </EmptyStateBody>
          <EmptyStateFooter>
            <Button mode="primary">Invite friends</Button>
          </EmptyStateFooter>
        </EmptyState>
        <div className="mbe12"></div>
        <EmptyState>
          <EmptyStateHeader>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#999" width="40" height="40" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z" />
            </svg>
          </EmptyStateHeader>
          <EmptyStateBody>
            <div className="h4">No connections yet</div>
            <p className="mbe16">Click below to add some friends</p>
          </EmptyStateBody>
          <EmptyStateFooter>
            <Button mode="primary">Invite friends</Button>
          </EmptyStateFooter>
        </EmptyState>
        <div className="mbe12"></div>
        <EmptyState isRounded>
          <EmptyStateHeader>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#999" width="40" height="40" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z" />
            </svg>
          </EmptyStateHeader>
          <EmptyStateBody>
            <div className="h4">No connections yet</div>
            <p className="mbe16">Click below to add some friends</p>
          </EmptyStateBody>
          <EmptyStateFooter>
            <Button isRounded mode="primary">Invite friends</Button>
          </EmptyStateFooter>
        </EmptyState>
      </section>
      <section>
        <div className="h4 mbs40 mbe24">Dividers</div>
        <Divider />
        <Divider>Content</Divider>
        <Divider justify="start">Start</Divider>
        <Divider justify="end">End</Divider>
        <Divider type="success">Success</Divider>
        <Divider type="info">Info</Divider>
        <Divider type="warning">Warning</Divider>
        <Divider type="error">Error</Divider>
        <Divider size="small">Small</Divider>
        <Divider size="large">Large</Divider>
        <Divider size="xlarge">XLarge</Divider>
        <Divider type="info" size="small"><Button mode="primary" isBordered isRounded>Go</Button></Divider>
        <div className="flex mbs40 mbe48">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Divider isVertical>Yes</Divider>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
          qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?
        </p>
        <Divider isVertical>Sir!</Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      </section>
      <div className="h4 mbs40 mbe24">Disclose</div>
      <section>
        <Disclose
          is-open
          title="Roger Federer"
        >
          Roger Federer is a Swiss professional tennis player. 
        </Disclose>
        <Disclose title="Serena Williams">
          Serena Jameka Williams is an American professional tennis
          player who has won 23 Grand Slams.
        </Disclose>
        <Disclose title="Steffi Graf">
          Stefanie Maria Graf is a former professional tennis
          player who won 22 Grand Slams.
        </Disclose>
        <Disclose title="Andre Agassi">
          Andre Kirk Agassi is an American former world No. 1
          tennis player who has won 8 Grand Slams. 
        </Disclose>
      </section>
      <section className="mbe48">
        <Disclose
          isBackground
          title="Roger Federer"
        >
          Roger Federer is a Swiss professional tennis player.
        </Disclose>
        <Disclose
          isBackground
          title="Serena Williams"
        >
          Serena Jameka Williams is an American professional tennis player.
        </Disclose>
        <Disclose
          isBackground
          title="Steffi Graf"
        >
          Stefanie Maria Graf is a German former professional tennis player.
        </Disclose>
        <Disclose
          isBackground
          title="Andre Agassi"
        >
          Andre Kirk Agassi is an American former world No. 1 tennis player.
        </Disclose>
      </section>
      <section>
        <Progress value={30} max={100} />
      </section>
      <div class="h4 mbs40">Tooltips</div>
      <div class="text-center tooltips-container">
        <section class="mbs56 mbe40 flex-inline justify-between w-100">
          <Tooltip placement="top-start" label="Tooltip hover text…">
            <span className='demo-tooltip'>Tooltip (top-start). Hover me!</span>
          </Tooltip>
          <Tooltip placement="top" label="Tooltip hover text…">
            <span className='demo-tooltip'>Tooltip (top). Hover me!</span>
          </Tooltip>
          <Tooltip placement="top-right" label="Tooltip hover text…">
            <span className='demo-tooltip'>Tooltip (top-right). Hover me!</span>
          </Tooltip>
        </section>
        <section
          class="flex flex-column items-center"
          style={{gap: 'var(--fluid-18)'}}
        >
          <Tooltip placement="left-start" label="Tooltip hover text…">
            <span className='demo-tooltip'>Tooltip (left-start). Hover me!</span>
          </Tooltip>
          <Tooltip placement="left" label="Tooltip hover text…">
            <span className='demo-tooltip'>Tooltip (left). Hover me!</span>
          </Tooltip>
          <Tooltip placement="left-end" label="Tooltip hover text…">
            <span className='demo-tooltip'>Tooltip (left-end). Hover me!</span>
          </Tooltip>
          <Tooltip placement="right-start" label="Tooltip hover text…">
            <span className='demo-tooltip'>Tooltip (right-start). Hover me!</span>
          </Tooltip>
          <Tooltip placement="right" label="Tooltip hover text…">
            <span className='demo-tooltip'>Tooltip (right). Hover me!</span>
          </Tooltip>
          <Tooltip placement="right-end" label="Tooltip hover text…">
            <span className='demo-tooltip'>Tooltip (right-end). Hover me!</span>
          </Tooltip>
        </section>
        <section class="mbs56 mbe40 flex-inline justify-between w-100">
          <Tooltip placement="bottom-start" label="Tooltip hover text…">
            <span className='demo-tooltip'>Tooltip (bottom-start). Hover me!</span>
          </Tooltip>
          <Tooltip placement="bottom" label="Tooltip hover text…">
            <span className='demo-tooltip'>Tooltip (bottom). Hover me!</span>
          </Tooltip>
          <Tooltip placement="bottom-end" label="Tooltip hover text…">
            <span className='demo-tooltip'>Tooltip (bottom-end). Hover me!</span>
          </Tooltip>
        </section>
      </div>
      <section>
        <Tag type="success" isUppercase>success</Tag>
        <Tag type="info" isUppercase>info</Tag>
        <Tag type="warning" isUppercase>warning</Tag>
        <Tag type="error" isUppercase>error</Tag>
        <Tag shape="pill" type="success" isUppercase>You did it!</Tag>
        <Tag shape="circle" type="error" isUppercase>2</Tag>
        <Tag shape="round" type="error">Round</Tag>
        <Tag shape="round" type="success">Round</Tag>
      </section>
      <div className="h4">Tabs</div>
      <section className="mbs24 mbe40">
        <Tabs tabButtons={tabButtons[0]} tabPanels={tabPanels[0]} />
      </section>
      <div className="h4">Tabs Large</div>
      <section className="mbs24 mbe40">
        <Tabs size="large" tabButtons={tabButtons[1]} tabPanels={tabPanels[1]} />
      </section>
      <div className="h4">Tabs XLarge</div>
      <section className="mbs24 mbe40">
        <Tabs size="xlarge" tabButtons={tabButtons[2]} tabPanels={tabPanels[2]} />
      </section>
      <div className="h4">Tabs Vertical</div>
      <section className="mbs24 mbe40">
        <Tabs isVerticalOrientation tabButtons={tabButtons[3]} tabPanels={tabPanels[3]} />
      </section>
      <div className="h4">Tabs Disabled</div>
      <section className="mbs24 mbe40">
        <Tabs isDisabled tabButtons={tabButtons[4]} tabPanels={tabPanels[4]} />
      </section>
      <div className="h4">Tabs Disabled Options</div>
      <section className="mbs24 mbe40">
        <Tabs disabledOptions={[2,3]} tabButtons={tabButtons[5]} tabPanels={tabPanels[5]} />
      </section>
      <div className="h4 mbs40 mbe24">Pagination</div>
      <section className="mbe24">
        <Pagination onPageChange={setPage} current={page} pages={pages} ariaLabel="Pagination to help navigate table" />
      </section>
      <div className="h4">Switch</div>
      <div className="mbs12 mbe16">
        <Switch
          id="sw1"
          label="Switch small"
          size="small"
          onChange={ handleChange }
        />
        <Switch
          id="sw2"
          label="Switch default (medium)"
          onChange={ handleChange }
        />
        <Switch
          id="sw3"
          label="Switch large"
          size="large"
          onChange={ handleChange }
        />
        <Switch
          id="sw4"
          isChecked
          label="Switch large prechecked"
          size="large"
          onChange={ handleChange }
        />
        <Switch
          id="sw5"
          isDisabled
          label="Switch disabled"
          size="large"
          onChange={ handleChange }
        />
        <Switch
          id="sw6"
          isBordered
          label="Switch bordered"
          onChange={ handleChange }
        />
        <Switch
          id="sw7"
          isAction
          isChecked
          label="Switch action prechecked"
          size="large"
          onChange={ handleChange }
        />
        <Switch
          id="sw8"
          isAction
          isBordered
          label="Switch action bordered"
          onChange={ handleChange }
        />
      </div>
      <div className="h4">Switch label on right</div>
      <div>
        <Switch
          id="sw9"
          labelPosition="right"
          label="Switch label on right"
          onChange={ handleChange }
        />
      </div>
      <div className="h4 mbs32">Select</div>
      <div className="mbs12 mbe16">
        <Select
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel1"
          name="select1"
          labelCopy="Select the best tennis player of all time"
        />
      </div>
      <div className="h4">Customize the first option's text copy</div>
      <div className="mbe16">
        <p className="mbe24">
          Pass <code>defaultOptionLabel</code> to specify the text copy to use for the first option
        </p>
        <Select
          defaultOptionLabel="Select your favorite tennis player"
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel1b"
          name="select1b"
          labelCopy="Select the best tennis player of all time"
        />
      </div>
      <div className="h4">Disabled select</div>
      <div className="mbs12 mbe16">
        <Select
          is-disabled
          options={[{ value: 'andre', label: 'Andre Agassi' }]}
          uniqueId="sel2"
          name="select2"
          labelCopy="Select -- example disabled"
        />
      </div>
      <div className="h4">Small select</div>
      <div className="mbs12 mbe16">
        <Select
          size="small"
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel3"
          name="select3"
          labelCopy="Select the best tennis player of all time"
        />
      </div>
      <div className="h4">Large select</div>
      <div className="mbs12 mbe16">
        <Select
          size="large"
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel4"
          name="select4"
          labelCopy="Select the best tennis player of all time"
          onChange={(e) => {
            console.log('Single: selected item: ', e.target.value);
          }}
        />
      </div>
      <div className="h4">Multiple select size 4</div>
      <div className="mbs12 mbe16">
        <Select
          isMultiple={true}
          multipleSize="4"
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel4"
          onChange={(e) => {
            const selectedItems = Array.from(e.target.selectedOptions, (item) => item.value);
            console.log('Multi: selected items: ', selectedItems);
          }}
          name="select4"
          labelCopy="Select the best tennis player of all time"
        />
      </div>
      <div className="h4">Spinners</div>
      <div className="mbs12 mbe16">
        <Spinner
          size="small"
          aria-label="Custom aria"
        />
        <div className="mbe24" />
        <Spinner aria-label="Custom aria" />
        <div className="mbe24" />
        <Spinner
          size="large"
          aria-label="Custom aria"
        />
        <p className="mbs16 mbe24">
          Custom color via <code>--agnostic-spinner-color</code> and size <code>xlarge</code>:
        </p>
        <div
          className="mbe24"
          style={customSpinnerStyle} 
        >
          <Spinner
            size="xlarge"
            aria-label="Custom aria"
          />
        </div>
      </div>
      <div className="h4">Loaders</div>
      <div className="mbs12 mbe16">
        <Loader />
      </div>
      <p className="mbs16 mbe24">
        Custom color via <code>--agnostic-loading-color</code> and size <code>large</code>:
      </p>
      <div
        className="mbe24"
        style={customLoadingStyle}
      >
        <Loader size="large" />
      </div>
      <div className="mbs16 mbe24">
        <div className="h4">Menu</div>
        <p className="mbs24 mbe14">Default Menu</p>
        <Menu
          id="mymenu1"
          buttonLabel="Players"
          onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
          onClose={() => console.log('onClose called...')}
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
        <p className="mbs24 mbe14"><code>closeOnClickOutside</code> set to false</p>
        <Menu
          closeOnClickOutside={false}
          id="mymenu2"
          buttonLabel="Players"
          onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
          onClose={() => console.log('onClose called...')}
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
        <p className="mbs24 mbe14"><code>closeOnSelect</code> set to false</p>
        <Menu
          closeOnSelect={false}
          id="mymenu3"
          buttonLabel="Players"
          onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
          onClose={() => console.log('onClose called...')}
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
        <p className="mbs24 mbe14">Stays open on click outside or select with: <code>closeOnSelect</code> &amp; <code>closeOnClickOutside</code> set to false</p>
        <Menu
          closeOnSelect={false}
          closeOnClickOutside={false}
          id="mymenu4"
          buttonLabel="Players"
          onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
          onClose={() => console.log('onClose called...')}
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
        <p className="mbs24 mbe14">small with: <code>size="small"</code></p>
        <Menu
          id="mymenu5"
          size="small"
          buttonLabel="Players"
          onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
          onClose={() => console.log('onClose called...')}
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
        <p className="mbs24 mbe14">Large with: <code>size="large"</code></p>
        <Menu
          id="mymenu6"
          size="large"
          buttonLabel="Players"
          onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
          onClose={() => console.log('onClose called...')}
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
        <p className="mbs24 mbe14">Rounded with: <code>isRounded</code></p>
        <Menu
          isRounded
          id="mymenu7"
          size="large"
          buttonLabel="Players"
          onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
          onClose={() => console.log('onClose called...')}
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
        <p className="mbs24 mbe14">Bordered with <code>isBordered</code></p>
        <Menu
          isBordered
          id="mymenu8"
          size="large"
          buttonLabel="Players"
          onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
          onClose={() => console.log('onClose called...')}
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
        <p className="mbs24 mbe14">Kebab with <code>type='kebab'</code></p>
        <Menu
          id="kebab1"
          type="kebab"
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
        <p className="mbs24 mbe14">Kebab on right. Set <code>isItemsRight</code> if you'd like
        the menu items to align flush to right side of the trigger button. Probabaly also wrap it
        in a container that has the utility classes <code>flex justify-end</code> applied.</p>
        <div className="flex justify-end">
          <Menu
            id="kebab2"
            type="kebab"
            isItemsRight
            menuItems={[
              <MenuItem>Andre Agassi</MenuItem>,
              <MenuItem>Serena Williams</MenuItem>,
              <MenuItem isDisabled>Rafael Nadal</MenuItem>,
              <MenuItem>Roger Federer</MenuItem>,
              <MenuItem>Althea Gibson</MenuItem>,
              <MenuItem>Bjorn Borg</MenuItem>,
            ]}
          />
        </div>
        <p className="mbs24 mbe14">Meatball with <code>type='meatball'</code></p>
        <Menu
          id="meatball1"
          type="meatball"
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
        <p className="mbs24 mbe14">Meatball on right. Set <code>isItemsRight</code> if you'd like
        the menu items to align flush to right side of the trigger button. Probabaly also wrap it
        in a container that has the utility classes <code>flex justify-end</code> applied.</p>
        <div className="flex justify-end">
          <Menu
            id="meatball2"
            type="meatball"
            isItemsRight
            menuItems={[
              <MenuItem>Andre Agassi</MenuItem>,
              <MenuItem>Serena Williams</MenuItem>,
              <MenuItem isDisabled>Rafael Nadal</MenuItem>,
              <MenuItem>Roger Federer</MenuItem>,
              <MenuItem>Althea Gibson</MenuItem>,
              <MenuItem>Bjorn Borg</MenuItem>,
            ]}
          />
        </div>
        <p className="mbs24 mbe14">Hamburger with <code>type='hamburger'</code></p>
        <Menu
          id="hamburger1"
          type="hamburger"
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
        <p className="mbs24 mbe14">Burger on right. Set <code>isItemsRight</code> if you'd like
        the menu items to align flush to right side of the trigger button. Probabaly also wrap it
        in a container that has the utility classes <code>flex justify-end</code> applied.</p>
        <div className="flex justify-end">
          <Menu
            id="hamburger2"
            type="hamburger"
            isItemsRight
            menuItems={[
              <MenuItem>Andre Agassi</MenuItem>,
              <MenuItem>Serena Williams</MenuItem>,
              <MenuItem isDisabled>Rafael Nadal</MenuItem>,
              <MenuItem>Roger Federer</MenuItem>,
              <MenuItem>Althea Gibson</MenuItem>,
              <MenuItem>Bjorn Borg</MenuItem>,
            ]}
          />
        </div>
      </div>
      <div className="h4">Drawer</div>
      <div className="mbs16 mbe24">
        <Button onClick={() => drawer1Ref.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open Drawer Top</Button>
        <Drawer
          {...drawer1PropsDefault}
          drawerRef={drawerInstance => (drawer1Ref.current = drawerInstance)}
          placement="top"
        >
          <p className="mbs16 mbe16">
            default slot
          </p>
        </Drawer>
        <div className="mbs16 mbe24" />
        <Button onClick={() => drawer2Ref.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open Drawer Bottom</Button>
        <Drawer
          {...drawer2PropsDefault}
          drawerRef={drawerInstance => (drawer2Ref.current = drawerInstance)}
          placement="bottom"
        >
           <div className="flex-fill">
            <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
            <button
              style={{position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem'}}
              onClick={() => drawer2Ref.current.hide()}
            >
              Close from within slot using instance
            </button>
          </div>
        </Drawer>
        <div className="mbs16 mbe24" />
        <Button onClick={() => drawer3Ref.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open Drawer Start</Button>
        <Drawer
          {...drawer3PropsDefault}
          drawerRef={drawerInstance => (drawer3Ref.current = drawerInstance)}
          placement="start"
        >
          <p className="mbs16 mbe16">
            default slot
          </p>
        </Drawer>
        <div className="mbs16 mbe24" />
        <Button onClick={() => drawer4Ref.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open Drawer End</Button>
        <Drawer
          {...drawer4PropsDefault}
          drawerRef={drawerInstance => (drawer4Ref.current = drawerInstance)}
          placement="end"
        >
          <p className="mbs16 mbe16">
            default slot
          </p>
        </Drawer>
      </div>
      <div className="h4">Dialog</div>
      <div className="mbs16 mbe24">
        <Button onClick={() => dialog.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open the dialog</Button>
        <Dialog
          {...dialogPropsDefault}
          dialogRef={dialogInstance => (dialog.current = dialogInstance)}
          isAnimationSlideUp={true}
        >
          <p className="mbs16 mbe16" id="dialog-example-description">
            Fill in the form below to receive our newsletter!
          </p>
          <form className="dialog-form-demo">
            <Input isRounded label="Email (required)" type="email" name="EMAIL" id="email" placeholder="email@example.com" required />
            <div className="mbe16" />
            <Button type="submit" mode="primary" isRounded isBlock>Sign Up</Button>
          </form>
        </Dialog>
      </div>
      <div className="mbs16 mbe24">
        <Button onClick={() => dialog2.current.show()} type="button" mode="primary" isBordered isRounded isBlock>Open dialog 2</Button>
        <Dialog
          {...dialogPropsDefault}
          id="dialog-2"
          title="Dialog — Custom Close Button"
          dialogRef={instance => (dialog2.current = instance)}
          classNames={{ title: 'h4 mbe18', closeButton: 'close-button-demo' }}
          isAnimationFadeIn
          isAnimationSlideUp
          closeButtonPosition="last"
          closeButtonContent={<Button type="faux" isRounded isBordered isBlock>Cancel</Button>}
        >
          <p className="mbs16 mbe16" id="dialog-example-description">
            The <code>close-button-demo</code> class is in App.css (for the Cancel button at bottom).
            Otherwise, we use an AgnosticUI button of <code>type="faux</code> which generates a div that
            looks like a button. As <code>react-a11y-dialog</code> generates its own button
            around <code>closeButtonContent</code>, this prevents an unwanted nested buttons situation.
          </p>
          <p className="mbe16">You'll also notice that this dialog did not &ldquo;slide up&rdquo; as we have not
          passed in true to <code>isAnimationSlideUp</code> and this animation defaults to false. The other animation
          is <code>isAnimationFadeIn</code> which defaults to true. You can set it <code>false</code> if you wish to
          remove it.
          </p>
          <form className="dialog-form-demo">
            <Input isRounded label="Email (required)" type="email" name="EMAIL" id="email" placeholder="email@example.com" required />
            <div className="mbe16" />
            <Button type="submit" mode="primary" isRounded isBlock>Sign Up</Button>
          </form>
        </Dialog>
      </div>
      <Toasts verticalPosition="top" horizontalPosition="end">
        <Toast type="dark">Toast top end. Sticky.</Toast>
        <div className="mbe14" />
        <Toast type="dark">Toast 2 top end. Sticky.</Toast>
      </Toasts>
      <Toasts verticalPosition="top" horizontalPosition="center">
        <Toast isOpen={toastIsOpen} icon={<DemoIcon type="dark" utilityClasses="mie8" />} type="dark">
          Toast custom icon dark (10 seconds)
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={toastIsOpen} icon={<DemoIcon type="success" utilityClasses="mie8" />} type="success">
          Toast custom icon success (10 seconds)
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={toastIsOpen} icon={<DemoIcon type="warning" utilityClasses="mie8" />} type="warning">
          Toast custom icon warning (10 seconds)
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={toastIsOpen} icon={<DemoIcon type="info" utilityClasses="mie8" />} type="info">
          Toast custom icon info (10 seconds)
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={toastIsOpen} icon={<DemoIcon type="error" utilityClasses="mie8" />} type="error">
          Toast custom icon error (10 seconds)
        </Toast>
        <div className="mbe14" />
      </Toasts>
      <Toasts verticalPosition="bottom" horizontalPosition="center">
        <Toast isOpen={toastIsOpen2} isAnimationSlideUp icon={<DemoIcon type="dark" utilityClasses="mie8" />} type="dark">
          <div className="flex-fill">Closable via close button.</div>
          {/* Close SVG uses fill="currentColor" so we can set as follows */}
          <Close style={{ color: 'var(--agnostic-light)' }} onClick={() => setToastIsOpen2(false)} />
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={toastIsOpen3} isAnimationSlideUp icon={<DemoIcon type="success" utilityClasses="mie8" />} type="success">
          <div className="flex-fill">Closable via close button.</div>
          <Close style={{ color: 'var(--agnostic-action-dark)' }} onClick={() => setToastIsOpen3(false)} />
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={toastIsOpen4} isAnimationSlideUp icon={<DemoIcon type="info" utilityClasses="mie8" />} type="info">
          <div className="flex-fill">Closable via close button.</div>
          <Close style={{ color: 'var(--agnostic-primary-dark)' }} onClick={() => setToastIsOpen4(false)} />
        </Toast>
      </Toasts>
    </div>
    </main>
  );
}

export default App;
