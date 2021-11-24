import './App.css';
// Global AgnosticUI CSS
import 'agnostic-react/dist/common.min.css';
// Component-level CSS Modules
import 'agnostic-react/dist/esm/index.css';
// Component
import { Alert, Avatar, Button, Card, Close, ChoiceInput, Disclose, Header, HeaderNav, HeaderNavItem  } from 'agnostic-react';

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
        <Header isHeaderContentStart>
          <>
            <a href="https://web.dev/">web.dev</a>
            <HeaderNav css="mis16 flex-fill">
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
        <Header isHeaderContentEnd>
          <>
            <a class="flex-fill" href="https://web.dev/">web.dev</a>
            <HeaderNav css="mie16 flex-grow-0">
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
    </div>
  );
}

export default App;
