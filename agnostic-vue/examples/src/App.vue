<script>
// Import the required AgnosticUI global common and component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, Card, ChoiceInput, Input } from "agnostic-vue";

export default {
  name: "App",
  components: {
    Button,
    Card,
    ChoiceInput,
    Disclose,
    Input,
  },
};
</script>
<template>
  <div id="app">
    <h1>AgnosticUI Vue</h1>
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
}
</style>
