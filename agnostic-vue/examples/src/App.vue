<script>
// Import the required AgnosticUI global common and component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
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
  Icon,
  Input,
  InputAddonItem,
  Switch,
  Tag,
} from "agnostic-vue";

export default {
  name: "App",
  components: {
    Alert,
    AvatarGroup,
    Avatar,
    Button,
    Card,
    ChoiceInput,
    Close,
    Disclose,
    Header,
    HeaderNav,
    HeaderNavItem,
    Icon,
    Input,
    InputAddonItem,
    Switch,
    Tag,
  },
};
</script>
<template>
  <div id="app">
    <h1>AgnosticUI Vue</h1>
    <div class="mbs12 mbe16">
      <Avatar
        text="RL"
        size="small"
      />
      <Avatar text="AB" />
      <Avatar
        text="RL"
        size="large"
      />
      <Avatar
        text="RL"
        size="xlarge"
      />
      <Avatar
        is-square
        type="error"
        text="Sq"
      />
    </div>
    <div class="mbs12 mbe16">
      <h2>Icon</h2>
      <p class="mbs24 mbe40">
        Test this in Safari! We need to ensure that the component is actually applying a
        <code>width</code> to the SVG itself else Safari the icon won't be visible
      </p>
      <Icon :size="24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
        </svg>
      </Icon>
    </div>
    <div class="mbs12 mbe16">
      <h2>Avatars</h2>
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
      <Avatar type="info">
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
    </div>
    <div class="mbs12 mbe16">
      <Avatar img-url="https://joeschmoe.io/api/v1/random" />
      <Avatar
        is-transparent
        img-url="https://joeschmoe.io/api/v1/random"
      />
      <Avatar
        type="success"
        img-url="https://joeschmoe.io/api/v1/random"
      />
      <Avatar
        type="info"
        img-url="https://joeschmoe.io/api/v1/random"
      />
    </div>
    <div class="mbs12 mbe16">
      <span class="mie6">
        <Avatar
          type="success"
          text="S"
        />
      </span>
      <span class="mie6">
        <Avatar
          type="info"
          text="I"
        />
      </span>
      <span class="mie6">
        <Avatar
          type="warning"
          text="W"
        />
      </span>
      <span class="mie6">
        <Avatar
          type="error"
          text="E"
        />
      </span>
    </div>
    <h3 class="mbe16">
      Groups
    </h3>
    <div class="mbe16">
      <AvatarGroup>
        <Avatar text="AB" />
        <Avatar text="CD" />
        <Avatar text="WX" />
        <Avatar text="YZ" />
      </AvatarGroup>
    </div>
    <div class="mbe16">
      <AvatarGroup>
        <Avatar img-url="https://joeschmoe.io/api/v1/random" />
        <Avatar
          type="success"
          text="Yes"
        />
        <Avatar img-url="https://joeschmoe.io/api/v1/random" />
        <Avatar
          type="info"
          text="We"
        />
        <Avatar img-url="https://joeschmoe.io/api/v1/random" />
        <Avatar
          type="success"
          text="Can"
        />
      </AvatarGroup>
    </div>

    <div class="mbs12 mbe16">
      <Alert>Default</Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert is-rounded>
        Rounded
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert is-border-all>
        Border all
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert is-border-left>
        Border left
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert type="success">
        Success
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert type="info">
        Info
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert type="warning">
        Warning
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert type="error">
        Error
      </Alert>
    </div>
    <h3>Switch</h3>
    <div class="mbs12 mbe16">
      <Switch
        id="1"
        label="Switch small"
        size="small"
      />
      <Switch
        id="2"
        label="Switch default (medium)"
      />
      <Switch
        id="3"
        label="Switch large"
        size="large"
      />
      <Switch
        id="4"
        is-checked
        label="Switch large prechecked"
        size="large"
      />
      <Switch
        id="5"
        is-disabled
        label="Switch disabled"
        size="large"
      />
      <Switch
        id="6"
        is-bordered
        label="Switch bordered"
      />
      <Switch
        id="7"
        is-action
        is-checked
        label="Switch action prechecked"
        size="large"
      />
      <Switch
        id="8"
        is-action
        is-bordered
        label="Switch action bordered"
      />
    </div>
    <h3>Switch label on right</h3>
    <div>
      <Switch
        id="9"
        label-position="right"
        label="Switch label on right"
      />
    </div>
    <h3>Default Buttons</h3>
    <section>
      <Button is-bordered>
        Go
      </Button>
      <Button is-blank>
        Go
      </Button>
      <Button is-block>
        Go
      </Button>
      <Button is-rounded>
        Go
      </Button>
      <Button
        is-raised
        is-rounded
      >
        Go
      </Button>
      <Button
        is-bordered
        is-rounded
      >
        Go
      </Button>
    </section>
    <h3>Primary</h3>
    <section>
      <Button mode="primary">
        Go
      </Button>
      <Button
        mode="primary"
        :is-bordered="true"
      >
        Go
      </Button>
      <Button
        mode="primary"
        is-blank
      >
        Go
      </Button>
      <Button
        mode="primary"
        is-block
      >
        Go
      </Button>
      <Button
        mode="primary"
        is-rounded
      >
        Go
      </Button>
      <Button
        mode="primary"
        is-raised
        is-rounded
      >
        Go
      </Button>
      <Button
        mode="primary"
        is-bordered
        is-rounded
      >
        Go
      </Button>
    </section>
    <h3>Secondary</h3>
    <section>
      <Button mode="secondary">
        Go
      </Button>
      <Button
        mode="secondary"
        :is-bordered="true"
      >
        Go
      </Button>
      <Button
        mode="secondary"
        is-blank
      >
        Go
      </Button>
      <Button
        mode="secondary"
        is-block
      >
        Go
      </Button>
      <Button
        mode="secondary"
        is-rounded
      >
        Go
      </Button>
      <Button
        mode="secondary"
        is-raised
        is-rounded
      >
        Go
      </Button>
      <Button
        mode="secondary"
        is-bordered
        is-rounded
      >
        Go
      </Button>
    </section>
    <h3>Misc</h3>
    <section>
      <Button :is-disabled="true">
        Go
      </Button>
      <Button
        mode="primary"
        is-disabled
      >
        Go
      </Button>
      <Button
        mode="secondary"
        is-disabled
      >
        Go
      </Button>
      <Button size="small">
        Go
      </Button>
      <Button size="large">
        Go
      </Button>
      <Button :is-skinned="false">
        No Skin
      </Button>
    </section>
    <section>
      <Card>
        <div style="padding: 24px;">
          Default
        </div>
        <div style="padding: 24px;">
          Card
        </div>
      </Card>
      <Card is-stacked>
        <div style="padding: 24px;">
          Stacked
        </div>
        <div style="padding: 24px;">
          Card
        </div>
      </Card>
      <Card
        is-stacked
        is-animated
      >
        <div style="padding: 24px;">
          Stacked & Animated
        </div>
        <div style="padding: 24px;">
          Card
        </div>
      </Card>
      <Card is-skinned>
        <div style="padding: 24px;">
          Base Card
        </div>
        <div style="padding: 24px;">
          No Skin
        </div>
      </Card>
      <Card css="addition-classes">
        <div style="padding: 24px;">
          Custom CSS Class Overrides
        </div>
        <div style="padding: 24px;">
          Inspect to see additional-classes
        </div>
      </Card>
    </section>
    <section>
      <ChoiceInput
        type="radio"
        legend-label="Radio"
        :options="[{ name: 'solo', value: 'stevie', label: 'Stevie Wonder'}, { name: 'solo', value: 'whitney', label: 'Whitney Houston' }, { name: 'solo', value: 'charlie', label: 'Charlie Wilson' }]"
      />

      <ChoiceInput
        type="checkbox"
        :options="[{ name: 'bands', value: 'bonjovi', label: 'Bon Jovi'}, { name: 'bands', value: 'stones', label: 'Rolling Stones' }, { name: 'bands', value: 'isleybros', label: 'Isley Brothers' }]"
        legend-label="Large"
        size="large"
        is-inline
      />
    </section>
    <section>
      <Input
        id="1"
        size="small"
        placeholder="Enter name…"
        label="Small input"
        type="text"
      />
    </section>
    <section>
      <Input
        id="2"
        placeholder="Enter name…"
        label="Default input"
        type="text"
      />
    </section>
    <section>
      <Input
        id="3"
        size="large"
        placeholder="Enter name…"
        label="Large input"
        type="text"
      />
    </section>
    <section>
      <Input
        id="4"
        is-inline
        placeholder="Enter name…"
        label="Inline input"
        type="text"
      />
    </section>
    <section>
      <Input
        id="4b"
        is-rounded
        placeholder="Enter name…"
        label="Rounded input"
        type="text"
      />
    </section>
    <section>
      <Input
        id="6"
        is-underlined
        placeholder="Enter name…"
        label="Underlined input"
        type="text"
      />
    </section>
    <section>
      <Input
        id="7"
        is-underlined
        is-underlined-with-background
        placeholder="Enter name…"
        label="Underlined with background"
        type="text"
      />
    </section>
    <section>
      <Input
        id="10"
        help-text="Some useful help text can go here"
        placeholder="Enter something…"
        label="Help text"
        type="text"
      />
    </section>
    <section>
      <Input
        id="9"
        is-invalid
        invalid-text="It's impossible to have a string that is cool enough for this field."
        placeholder="Enter a very cool string…"
        label="Cool factor"
        type="text"
      />
    </section>
    <section>
      <Input
        id="8"
        has-left-addon
        has-right-addon
        label="Input with addons"
      >
      <template #addonLeft>
        <InputAddonItem addon-left>
          <Icon
            :size="18"
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
        </InputAddonItem>
      </template>
      <template #addonRight>
        <InputAddonItem addon-right>
          <Icon
            :size="18"
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
        </InputAddonItem>
      </template>
      </Input>
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
        :rows="10"
        :cols="5"
      />
    </section>
    <section class="mbe24">
      <Input
        id="13"
        label="Textarea large"
        type="textarea"
        size="large"
        :rows="10"
        cols="5"
      />
    </section>
    <section>
      <h3>Default close</h3>
      <Close />
      <h3>Sizes</h3>
      <Close />
      <Close size="small" />
      <Close size="large" />
      <Close size="xlarge" />
    </section>
    <section>
      <h3>Tags</h3>
      <Tag>unknown</Tag>
      <Tag is-uppercase>
        UpperCasE
      </Tag>
      <Tag
        shape="round"
        is-uppercase
      >
        round
      </Tag>
      <Tag shape="pill">
        pill badge
      </Tag>
      <Tag
        shape="circle"
        type="error"
      >
        2
      </Tag>
      <Tag type="success">
        success
      </Tag>
      <Tag type="info">
        info
      </Tag>
      <Tag type="warning">
        warning
      </Tag>
    </section>
    <section>
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

    <section>
      <h3 class="mbe12">
        Header defaults to space between
      </h3>
      <Header>
        <template #logoleft>
          <a href="https://web.dev/">web.dev</a>
        </template>
        <template #headernav>
          <HeaderNav>
            <HeaderNavItem>
              <a href="https://css-tricks.com/">CSS-Tricks</a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="https://developer.mozilla.org/en-US/">MDN</a>
            </HeaderNavItem>
          </HeaderNav>
        </template>
        <template #logoright>
          <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
        </template>
      </Header>
      <h3 class="mbe12">
        Header content justify left
      </h3>
      <p class="mbe16">
        Pass in <code>isHeaderContentStart</code> and apply a global CSS class with
        <code>flex-grow: 0</code> on mobile (so it will stack as column), and <code>flex-grow: 1</code>
        at a breakpoint of your choosing to push other content over. Inspect <code>.header-flex-fill</code>
        in devtools to see an example.
      </p>
      <Header is-header-content-start>
        <template #logoleft>
          <a href="https://web.dev/">web.dev</a>
        </template>
        <template #headernav>
          <HeaderNav css="header-flex-fill">
            <HeaderNavItem>
              <a href="https://css-tricks.com/">CSS-Tricks</a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="https://developer.mozilla.org/en-US/">MDN</a>
            </HeaderNavItem>
          </HeaderNav>
        </template>
        <template #logoright>
          <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
        </template>
      </Header>
      <h3 class="mbe12">
        Header content justify right
      </h3>
      <p class="mbe16">
        Pass in <code>isHeaderContentEnd</code> and apply
        <code>flex-fill</code> to the <code>logoleft</code> content so grows (pushes content over).
      </p>
      <Header is-header-content-end>
        <template #logoleft>
          <a
            class="flex-fill"
            href="https://web.dev/"
          >web.dev</a>
        </template>
        <template #headernav>
          <HeaderNav css="header-mbe16">
            <HeaderNavItem>
              <a href="https://css-tricks.com/">CSS-Tricks</a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="https://developer.mozilla.org/en-US/">MDN</a>
            </HeaderNavItem>
          </HeaderNav>
        </template>
        <template #logoright>
          <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
        </template>
      </Header>
    </section>
  </div>
</template>
<style>
/* these styles are purely demonstration related styles only */
body {
  width: 600px;
  margin: 40px auto;
}
h1,
h3 {
  display: block;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
button:not(:first-child) {
  margin-left: 0.25rem;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
}

details {
  width: 100%;
}

/**
 * Header Examples
 */
.header-flex-fill {
  flex-grow: 0;
}
.header-flex-fill {
  margin-inline-start: 0;
}

.header-mbe16 {
  margin-inline-end: 0;
}

@media (min-width: 970px) {
  .header-flex-fill {
    flex-grow: 1;
    margin-inline-start: var(--fluid-16);
  }

  .header-mbe16 {
    margin-inline-end: var(--fluid-16);
  }
}
</style>
