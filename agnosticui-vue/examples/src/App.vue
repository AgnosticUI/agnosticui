<script>

// Import the required AgnosticUI global common CSS
import "agnosticui-vue/dist/common.min.css";
import { Button, Card, ChoiceInput, Input, Switch as SwitchComponent, Tabs, TabPanel } from "agnosticui-vue";

export default {
  name: 'App',
  components: {
    Button,
    Card,
    ChoiceInput,
    Input,
    SwitchComponent,
    Tabs,
    TabPanel
  }
}
</script>

<style>
  /* these styles are purely demonstration related styles only */
  body {
    width: 600px;
    margin: 40px auto;
  }
  h1, h3 {
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
<template>
  <div id="app">
    <h1>AgnosticUI Vue</h1>
    <h3>Default Buttons</h3>
    <section>
      <Button isBordered>Go</Button>
      <Button isBlank>Go</Button>
      <Button isBlock>Go</Button>
      <Button isRounded>Go</Button>
      <Button isRaised isRounded>Go</Button>
      <Button isBordered isRounded>Go</Button>
    </section>
    <h3>Primary</h3>
    <section>
      <Button mode="primary">Go</Button>
      <Button mode="primary" :isBordered="true">Go</Button>
      <Button mode="primary" isBlank>Go</Button>
      <Button mode="primary" isBlock>Go</Button>
      <Button mode="primary" isRounded>Go</Button>
      <Button mode="primary" isRaised isRounded>Go</Button>
      <Button mode="primary" isBordered isRounded>Go</Button>
    </section>
    <h3>Secondary</h3>
    <section>
      <Button mode="secondary">Go</Button>
      <Button mode="secondary" :isBordered="true">Go</Button>
      <Button mode="secondary" isBlank>Go</Button>
      <Button mode="secondary" isBlock>Go</Button>
      <Button mode="secondary" isRounded>Go</Button>
      <Button mode="secondary" isRaised isRounded>Go</Button>
      <Button mode="secondary" isBordered isRounded>Go</Button>
    </section>
    <h3>Misc</h3>
    <section>
      <Button :isDisabled="true">Go</Button>
      <Button mode="primary" isDisabled>Go</Button>
      <Button mode="secondary" isDisabled>Go</Button>
      <Button size="small">Go</Button>
      <Button size="large">Go</Button>
      <Button :isSkinned="false">No Skin</Button>
    </section>
      <section>
    <Card>
      <div style="padding: 24px;">Default</div>
      <div style="padding: 24px;">Card</div>
    </Card>
    <Card isStacked>
      <div style="padding: 24px;">Stacked</div>
      <div style="padding: 24px;">Card</div>
    </Card>
    <Card isStacked isAnimated>
      <div style="padding: 24px;">Stacked & Animated</div>
      <div style="padding: 24px;">Card</div>
    </Card>
    <Card isSkinned>
      <div style="padding: 24px;">Base Card</div>
      <div style="padding: 24px;">No Skin</div>
    </Card>
    <Card css="addition-classes">
      <div style="padding: 24px;">Custom CSS Class Overrides</div>
      <div style="padding: 24px;">Inspect to see additional-classes</div>
    </Card>
  </section>
  <section>
    <ChoiceInput type="radio"
                     legendLabel="Radio"
                     :options="[{ name: 'solo', value: 'stevie', label: 'Stevie Wonder'}, { name: 'solo', value: 'whitney', label: 'Whitney Houston' }, { name: 'solo', value: 'charlie', label: 'Charlie Wilson' }]">
    </ChoiceInput>
  
    <ChoiceInput type="checkbox"
                     :options="[{ name: 'bands', value: 'bonjovi', label: 'Bon Jovi'}, { name: 'bands', value: 'stones', label: 'Rolling Stones' }, { name: 'bands', value: 'isleybros', label: 'Isley Brothers' }]"
                     legendLabel="Large"
                     size="large"
                     isInline></ChoiceInput>
  
  </section>
  <section>
    <Input
      id="aginput-123"
      placeholder="Enter name…"
      label="Default input"
      type="text"
    ></Input>
  </section>
  <section>
    <SwitchComponent id="1" label="Small" size="small" labelPosition="right"></SwitchComponent>
    <SwitchComponent id="2" label="Switch default"></SwitchComponent>
  </section>
  <section>
  <Tabs size="jumbo" tabType="button" :tabs="['one', 'two']">
      <template slot="tab-button-one">
        <Button type="faux" mode="primary" isBordered>Tab One</Button>
      </template>
      <template slot="tab-panel-one">
        <TabPanel>
          <p>Tab buttons can be achieved by using <i>tabType</i> of button and passing in your
          own AgnosticUI Buttons. Note, it's important to pass the <i>type="faux"</i> prop for the
          AgnosticUI Button you use for the tab buttons! Doing so will result in a <i>div</i> that
          is styled like a button. This is important for a11y compliance since otherwise you'll get
          nested focusable buttons as these get wrapped by buttons internally.</p>
        </TabPanel>
      </template>
      <template slot="tab-button-two">
        <Button type="faux" mode="primary" isBordered>Tab Two</Button>
      </template>
      <template slot="tab-panel-two">
        <TabPanel>
          Note you don't have to use AgnosticUI buttons if you prefer to use your own custom buttons. Just
          remember to build "faux buttons" (only style the element like a button—don't use a button tag) or
          else you'll trigger an a11y violation due to nested buttons.
        </TabPanel>
      </template>
    </Tabs>
  </section>
  </div>
</template>
