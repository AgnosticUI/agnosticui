import { useState, useEffect } from 'react';
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

// Component-level CSS Modules
import 'agnostic-react/dist/esm/index.css';
// Component
import {
  Alert,
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Close,
  ChoiceInput,
  Disclose,
  EmptyState,
  EmptyStateHeader,
  EmptyStateBody,
  EmptyStateFooter,
  Header,
  HeaderNav,
  HeaderNavItem,
  Icon,
  Input,
  Pagination,
  Progress,
  Select,
  Switch,
  Tag,
  Table,
  Tabs,
  TabButton,
  TabPanel
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

const alertMessage = 'Alerts should be used for timely information.';

const testOptions = [
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

function App() {
  const [page, setPage] = useState(1);
  const paging = usePagination({ offset: 2 });
  const pages = paging.generate(page, 20);

  useEffect(() => {
    paging.generate(page, 20);
  }, [page, pages, paging]);

  const handleChange = checkedItems => console.log(checkedItems)

  return (
    <div className="App">

      <h1 className="mbe24">AgnosticUI React (Beta) — Kitchen Sink</h1>
      <h2 className="mbs40 mbe24">Breadcrumbs</h2>
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
      <h2 className="mbs40 mbe24">Icon</h2>
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
      <h2 className="mbs40 mbe24">Header</h2>
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
        <h2 className="mbs40 mbe12">Header content justify left</h2>
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
        <h2 className="mbs40 mbe12">Header content justify right</h2>
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
      <h2 className="mbs40 mbe24">Inputs</h2>
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
      <h2 className="mbs40 mbe24">Alert</h2>
      <section className="mbe24">
        <Alert>{ alertMessage }</Alert>
        <Alert isRounded>{ alertMessage }</Alert>
        <Alert isBorderAll>Border all</Alert>
        <Alert isBorderLeft>Border left</Alert>
        <Alert type="success">{ alertMessage }</Alert>
        <Alert type="info">{ alertMessage }</Alert>
        <Alert type="warning">{ alertMessage }</Alert>
        <Alert type="error">{ alertMessage }</Alert>
      </section>
      <h2 className="mbs40 mbe24">Avatar</h2>
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
      <h2 className="mbs40 mbe24">Table</h2>
      <section className="mbe24">
        <Table
          headers={headersWithWidths}
          rows={rows}
          isHoverable
          caption="Tennis Superstars (custom header widths)"
        />
      </section>
      <h2 className="mbs40 mbe24">Card</h2>
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
      <h2 className="mbs40 mbe24">ChoiceInput</h2>
      <section className="mbe24">
        <ChoiceInput
          id="ci1"
          type="checkbox"
          options={testOptions}
          legendLabel="Checkbox legend"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci2"
          isDisabled
          type="checkbox"
          options={testOptions}
          legendLabel="Checkbox disabled"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci3"
          disabledOptions={disabledOptions}
          type="checkbox"
          options={testOptions}
          legendLabel="Checkbox specific options disabled"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci4"
          type="checkbox"
          isFieldset={false}
          options={testOptions}
          legendLabel="Checkbox fieldset hidden"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci5"
          type="checkbox"
          isInline
          options={testOptions}
          legendLabel="Checkbox inline"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci6"
          type="checkbox"
          isInline
          size="small"
          options={testOptions}
          legendLabel="Checkbox small"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci7"
          type="checkbox"
          isInline
          size="large"
          options={testOptions}
          legendLabel="Checkbox large"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci8"
          type="checkbox"
          isInline
          size="large"
          checkedOptions={["daily", "weekly"]}
          options={testOptions}
          legendLabel="Checkbox prechecked options"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci10"
          type="radio"
          options={testOptions}
          legendLabel="Radio legend"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="ci11"
          isDisabled
          type="radio"
          options={testOptions}
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
      <h2>Default Buttons</h2>
      <section>
        <Button isBlank onClick={() => console.log('click works')}>
          Go
        </Button>
        <Button isBlock>Go</Button>
        <Button isRounded>Go</Button>
        <Button isRaised isRounded>
          Go
        </Button>
        <Button isBordered isRounded>
          Go
        </Button>
      </section>
      <h2>Primary</h2>
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
        <Button mode="primary" isRaised isRounded>
          Go
        </Button>
        <Button mode="primary" isBordered isRounded>
          Go
        </Button>
      </section>
      <h2>Secondary</h2>
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
        <Button mode="secondary" isRaised isRounded>
          Go
        </Button>
        <Button mode="secondary" isBordered isRounded>
          Go
        </Button>
      </section>
      <h2>Misc</h2>
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
      <h2 className="mbs40 mbe24">Close</h2>
      <section>
        <Close />
        <Close size="small" />
        <Close size="large" />
        <Close size="xlarge" />
      </section>
      <section>
        <h2 class="mbe24">Empty States</h2>
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
        <div class="mbe12"></div>
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
        <div class="mbe12"></div>
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
      <h2 className="mbs40 mbe24">Disclose</h2>
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
        <Disclose title="Stefi Graf">
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
          title="Stefi Graf"
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
      <h2>Tabs</h2>
      <section className="mbs24 mbe40">
        <Tabs tabButtons={tabButtons[0]} tabPanels={tabPanels[0]} />
      </section>
      <h2>Tabs Large</h2>
      <section className="mbs24 mbe40">
        <Tabs size="large" tabButtons={tabButtons[1]} tabPanels={tabPanels[1]} />
      </section>
      <h2>Tabs XLarge</h2>
      <section className="mbs24 mbe40">
        <Tabs size="xlarge" tabButtons={tabButtons[2]} tabPanels={tabPanels[2]} />
      </section>
      <h2>Tabs Vertical</h2>
      <section className="mbs24 mbe40">
        <Tabs isVerticalOrientation tabButtons={tabButtons[3]} tabPanels={tabPanels[3]} />
      </section>
      <h2>Tabs Disabled</h2>
      <section className="mbs24 mbe40">
        <Tabs isDisabled tabButtons={tabButtons[4]} tabPanels={tabPanels[4]} />
      </section>
      <h2>Tabs Disabled Options</h2>
      <section className="mbs24 mbe40">
        <Tabs disabledOptions={[2,3]} tabButtons={tabButtons[5]} tabPanels={tabPanels[5]} />
      </section>
      <h2 className="mbs40 mbe24">Pagination</h2>
      <section className="mbe24">
        <Pagination onPageChange={setPage} current={page} pages={pages} ariaLabel="Pagination to help navigate table" />
      </section>
      <h2>Switch</h2>
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
      <h2>Switch label on right</h2>
      <div>
        <Switch
          id="sw9"
          labelPosition="right"
          label="Switch label on right"
          onChange={ handleChange }
        />
      </div>
      <h2 class="mbs32">Select</h2>
      <div class="mbs12 mbe16">
        <Select
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel1"
          name="select1"
          labelCopy="Select the best tennis player of all time"
        />
      </div>
      <h2>Customize the first option's text copy</h2>
      <div class="mbe16">
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
      <h2>Disabled select</h2>
      <div class="mbs12 mbe16">
        <Select
          is-disabled
          options={[{ value: 'andre', label: 'Andre Agassi' }]}
          uniqueId="sel2"
          name="select2"
          labelCopy="Select -- example disabled"
        />
      </div>
      <h2>Small select</h2>
      <div class="mbs12 mbe16">
        <Select
          size="small"
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel3"
          name="select3"
          labelCopy="Select the best tennis player of all time"
        />
      </div>
      <h2>Large select</h2>
      <div class="mbs12 mbe16">
        <Select
          size="large"
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel4"
          name="select4"
          labelCopy="Select the best tennis player of all time"
        />
      </div>
      <h2>Multiple select size 4</h2>
      <div class="mbs12 mbe16">
        <Select
          isMultiple={true}
          multipleSize="4"
          options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
          uniqueId="sel4"
          name="select4"
          labelCopy="Select the best tennis player of all time"
        />
      </div>

    </div>
  );
}

export default App;
