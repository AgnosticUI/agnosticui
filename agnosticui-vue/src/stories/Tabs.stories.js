import AgTabs from './Tabs.vue';
import AgTabPanel from './TabPanel.vue';
import Button from "./Button.vue";

const wrapper = () => {
  return {
    template: '<div style="padding: 0.5rem;"><story/></div>',
  };
};

export default {
  title: 'AG—Vue/Tabs',
  decorators: [wrapper],
  component: AgTabs,
};

export const TabsDefault = () => ({
  components: { AgTabs, AgTabPanel },
  template: `
    <ag-tabs :tabs="['1', '2']">
      <template slot="tab-button-1">
        Tab 1
      </template>
      <template slot="tab-button-2">
        Tab 2
      </template>
      <template slot="tab-panel-1">
        <ag-tab-panel  title="Tab 1">
          Tab 1 content
        </ag-tab-panel>
      </template>
      <template slot="tab-panel-2">
        <ag-tab-panel  title="Tab 2">
          Tab 2 content
        </ag-tab-panel>
      </template>
  </ag-tabs>
  `
});

export const TabsLarge = () => ({
  components: { AgTabs, AgTabPanel },
  template: `
    <ag-tabs size="large" :tabs="['1', '2']">
      <template slot="tab-button-1">
        Tab 1
      </template>
      <template slot="tab-button-2">
        Tab 2
      </template>
      <template slot="tab-panel-1">
        <ag-tab-panel  title="Tab 1">
          Tab 1 content
        </ag-tab-panel>
      </template>
      <template slot="tab-panel-2">
        <ag-tab-panel  title="Tab 2">
          Tab 2 content
        </ag-tab-panel>
      </template>
  </ag-tabs>
  `
});

export const TabsJumbo = () => ({
  components: { AgTabs, AgTabPanel },
  template: `
    <ag-tabs size="jumbo" :tabs="['1', '2']">
      <template slot="tab-button-1">
        Tab 1
      </template>
      <template slot="tab-button-2">
        Tab 2
      </template>
      <template slot="tab-panel-1">
        <ag-tab-panel  title="Tab 1">
          Tab 1 content
        </ag-tab-panel>
      </template>
      <template slot="tab-panel-2">
        <ag-tab-panel  title="Tab 2">
          Tab 2 content
        </ag-tab-panel>
      </template>
  </ag-tabs>
  `
});

export const TabsWithButtons = () => ({
  components: { AgTabs, AgTabPanel, Button },
  template: `
    <ag-tabs size="jumbo" :tabs="tabs" tabType="button">
      <template slot="tab-button-one">
        <Button type="faux" mode="primary" isBordered>Tab One</Button>
      </template>
      <template slot="tab-panel-one">
        <ag-tab-panel>
          <p>Tab buttons can be achieved by using <i>tabType</i> of button and passing in your
          own AgnosticUI Buttons. Note, it's important to pass the <i>type="faux"</i> prop for the
          AgnosticUI Button you use for the tab buttons! Doing so will result in a <i>div</i> that
          is styled like a button. This is important for a11y compliance since otherwise you'll get
          nested focusable buttons as these get wrapped by buttons internally.</p>
        </ag-tab-panel>
      </template>
      <template slot="tab-button-two">
        <Button type="faux" mode="primary" isBordered>Tab Two</Button>
      </template>
      <template slot="tab-panel-two">
        <ag-tab-panel>
          Note you don't have to use AgnosticUI buttons if you prefer to use your own custom buttons. Just
          remember to build "faux buttons" (only style the element like a button—don't use a button tag) or
          else you'll trigger an a11y violation due to nested buttons.
        </ag-tab-panel>
      </template>
    </ag-tabs> 
  `,
  data() {
    return {
      tabs: ['one', 'two']
    };
  }
});

export const TabsWithButtonsCrayCray = () => ({
  components: { AgTabs, AgTabPanel, Button },
  template: `
    <ag-tabs size="jumbo" :tabs="tabs" tabType="button">
      <template slot="tab-button-one">
        <Button type="faux" mode="primary" isBordered>Quick start</Button>
      </template>
      <template slot="tab-panel-one">
        <ag-tab-panel>
          <p>You can use whatever combination of AgnosticUI buttons you wish to. Of course
          there's no guarantee every combination will look good together :-)</p>
        </ag-tab-panel>
      </template>
      <template slot="tab-button-two">
        <Button type="faux" mode="secondary" isBordered>Common issues</Button>
      </template>
      <template slot="tab-panel-two">
        <ag-tab-panel>
          Second panel here…
        </ag-tab-panel>
      </template>
    </ag-tabs> 
  `,
  data() {
    return {
      tabs: ['one', 'two']
    };
  }
});
