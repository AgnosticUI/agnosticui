<script>
// Import the required AgnosticUI global common and component CSS
import "agnosticvue/dist/common.min.css";
import "agnosticvue/dist/style.css";
import { Button, Card, ChoiceInput, Input } from "agnosticvue";

export default {
  name: "App",
  components: {
    Button,
    Card,
    ChoiceInput,
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
