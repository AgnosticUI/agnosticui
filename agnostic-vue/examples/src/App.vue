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
  Input,
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
    Input,
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
        id="aginput-123"
        placeholder="Enter name…"
        label="Default input"
        type="text"
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
</style>
