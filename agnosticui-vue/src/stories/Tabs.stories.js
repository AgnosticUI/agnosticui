import AgTabs from './Tabs.vue';
import AgTabPanel from './TabPanel.vue';

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

export const TabsExample = () => ({
  components: { AgTabs, AgTabPanel },
  template: `
    <ag-tabs>
      <template v-slot:panels>
        <ag-tab-panel  title="Tab 1">
          Tab 1 content
        </ag-tab-panel>
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
    <ag-tabs size="large">
      <template v-slot:panels>
        <ag-tab-panel  title="Tab 1">
          Tab 1 content
        </ag-tab-panel>
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
    <ag-tabs size="jumbo">
      <template v-slot:panels>
        <ag-tab-panel  title="Tab 1">
          Tab 1 content
        </ag-tab-panel>
        <ag-tab-panel  title="Tab 2">
          Tab 2 content
        </ag-tab-panel>
      </template>
  </ag-tabs> 
  `
});
