import './App.css';
// Global AgnosticUI CSS
import 'agnostic-react/dist/common.min.css';
// Component-level CSS Modules
import 'agnostic-react/dist/esm/index.css';
// Component
import { Alert, Avatar, Button, Card, Close, ChoiceInput, Disclose, Header, HeaderNav, HeaderNavItem, Icon, Input, Progress, Switch, Tag } from 'agnostic-react';

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
function App() {
  
  const handleChange = checkedItems => console.log(checkedItems)

  return (
    <div className="App">
      <h1 class="mbe24">AgnosticUI React (Beta) — Kitchen Sink</h1>
      <h3 class="mbs40 mbe24">Icon</h3>
      <p class="mbs24 mbe40">
        Test this in Safari! We need to ensure that the component is actually applying a
        <code>width</code> to the SVG itself else Safari the icon won't be visible
      </p>
      <section class="mbe24">
        <Icon size={24}>
          <svg xmlns="http://www.w3.org/2000/svg"
             enable-background="new 0 0 24 24"
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
      <h3 class="mbs40 mbe24">Header</h3>
      <section class="mbe24">
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
        <h3 class="mbs40 mbe12">Header content justify left</h3>
        <p class="mbe24">Pass in <code>isHeaderContentStart</code> and apply a global CSS class with
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
        <h3 class="mbs40 mbe12">Header content justify right</h3>
        <p class="mbe24">Pass in <code>isHeaderContentEnd</code> and apply
          <code>flex-fill</code> to the <code>logoleft</code> content so grows (pushes content over).
        </p>
        <Header isHeaderContentEnd>
          <>
            <a class="flex-fill" href="https://web.dev/">web.dev</a>
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
      <h3 class="mbs40 mbe24">Inputs</h3>
      <section class="mbe24">
        <Input
          id="1"
          size="small"
          placeholder="Enter name…"
          label="Small input"
          type="text"
        />
      </section>
      <section class="mbe24">
        <Input
          id="2"
          placeholder="Enter name…"
          label="Default input"
          type="text"
        />
      </section>
      <section class="mbe24">
        <Input
          id="3"
          size="large"
          placeholder="Enter name…"
          label="Large input"
          type="text"
        />
      </section>

      <section class="mbe24">
        <Input
          id="4"
          isInline
          placeholder="Enter name…"
          label="Inline input"
          type="text"
        />
      </section>
      <section class="mbe24">
        <Input
          id="4"
          isRounded
          placeholder="Enter name…"
          label="Rounded input"
          type="text"
        />
      </section>
      <section class="mbe24">
        <Input
          id="6"
          isUnderlined
          placeholder="Enter name…"
          label="Underlined input"
          type="text"
        />
      </section>
      <section class="mbe24">
        <Input
          id="7"
          isUnderlined
          isUnderlinedWithBackground
          placeholder="Enter name…"
          label="Underlined with background"
          type="text"
        />
      </section>
      <section class="mbe24">
        <Input
          id="10"
          helpText="Some useful help text can go here"
          placeholder="Enter something…"
          label="Help text"
          type="text"
        />
      </section>
      <section class="mbe24">
        <Input
          id="9"
          isInvalid
          invalidText="It's impossible to have a string that is cool enough for this field."
          placeholder="Enter a very cool string…"
          label="Cool factor"
          type="text"
        />
      </section>
      <section class="mbe24">
        <Input
          id="10"
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
                  fill-rule="evenodd"
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
                  fill-rule="evenodd"
                  d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
                />
              </svg>
            </Icon>
          }
          label="Input with addons"
        />
      </section>
      <section class="mbe24">
        <Input
          id="11"
          label="Textarea"
          type="textarea"
        />
      </section>
      <section class="mbe24">
        <Input
          id="12"
          label="Textarea small"
          type="textarea"
          size="small"
          rows={10}
          cols={5}
        />
      </section>
      <section class="mbe24">
        <Input
          id="13"
          label="Textarea large"
          type="textarea"
          size="large"
          rows={10}
          cols={5}
        />
      </section>
      <h3 class="mbs40 mbe24">Alert</h3>
      <section class="mbe24">
        <Alert>{ alertMessage }</Alert>
        <Alert isRounded>{ alertMessage }</Alert>
        <Alert isBorderAll>Border all</Alert>
        <Alert isBorderLeft>Border left</Alert>
        <Alert type="success">{ alertMessage }</Alert>
        <Alert type="info">{ alertMessage }</Alert>
        <Alert type="warning">{ alertMessage }</Alert>
        <Alert type="error">{ alertMessage }</Alert>
      </section>
      <h3 class="mbs40 mbe24">Avatar</h3>
      <section class="mbe24">
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
      <h3 class="mbs40 mbe24">Card</h3>
      <section class="mbe24">
        <Card>
          <div style={{ padding: 24 }}>Default</div>
          <div style={{ padding: 24 }}>Card</div>
        </Card>
        <Card isStacked>
          <div style={{ padding: 24 }}>Stacked</div>
          <div style={{ padding: 24 }}>Card</div>
        </Card>
        <Card
          isAnimated
          isStacked
        >
          <div style={{ padding: 24 }}>Animated & Stacked</div>
          <div style={{ padding: 24 }}>Card</div>
        </Card>
      </section>
      <h3 class="mbs40 mbe24">ChoiceInput</h3>
      <section class="mbe24">
        <ChoiceInput
          id="1"
          type="checkbox"
          options={testOptions}
          legendLabel="Checkbox legend"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="2"
          isDisabled
          type="checkbox"
          options={testOptions}
          legendLabel="Checkbox disabled"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="3"
          disabledOptions={disabledOptions}
          type="checkbox"
          options={testOptions}
          legendLabel="Checkbox specific options disabled"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="4"
          type="checkbox"
          isFieldset={false}
          options={testOptions}
          legendLabel="Checkbox fieldset hidden"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="5"
          type="checkbox"
          isInline
          options={testOptions}
          legendLabel="Checkbox inline"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="6"
          type="checkbox"
          isInline
          size="small"
          options={testOptions}
          legendLabel="Checkbox small"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="7"
          type="checkbox"
          isInline
          size="large"
          options={testOptions}
          legendLabel="Checkbox large"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="8"
          type="checkbox"
          isInline
          size="large"
          checkedOptions={["daily", "weekly"]}
          options={testOptions}
          legendLabel="Checkbox prechecked options"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="10"
          type="radio"
          options={testOptions}
          legendLabel="Radio legend"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="11"
          isDisabled
          type="radio"
          options={testOptions}
          legendLabel="Radio disabled"
          onChange={ handleChange }
        />
        <ChoiceInput
          id="12"
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
          id="14"
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
          id="15"
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
      <h3>Default Buttons</h3>
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
      <h3>Primary</h3>
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
      <h3>Secondary</h3>
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
      <h3>Misc</h3>
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
      <h3 class="mbs40 mbe24">Close</h3>
      <section>
        <Close />
        <Close size="small" />
        <Close size="large" />
        <Close size="xlarge" />
      </section>
      <h3 class="mbs40 mbe24">Disclose</h3>
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
      <section class="mbe48">
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
      <h3>Switch</h3>
      <div class="mbs12 mbe16">
        <Switch
          id={1}
          label="Switch small"
          size="small"
        />
        <Switch
          id={2}
          label="Switch default (medium)"
        />
        <Switch
          id={3}
          label="Switch large"
          size="large"
        />
        <Switch
          id={4}
          isChecked
          label="Switch large prechecked"
          size="large"
        />
        <Switch
          id={5}
          isDisabled
          label="Switch disabled"
          size="large"
        />
        <Switch
          id={6}
          isBordered
          label="Switch bordered"
        />
        <Switch
          id={7}
          isAction
          isChecked
          label="Switch action prechecked"
          size="large"
        />
        <Switch
          id={8}
          isAction
          isBordered
          label="Switch action bordered"
        />
      </div>
      <h3>Switch label on right</h3>
      <div>
        <Switch
          id={9}
          labelPosition="right"
          label="Switch label on right"
        />
      </div>
    </div>

  );
}

export default App;
