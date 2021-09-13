import AgTabs from './Tabs.vue';
import AgTab from './Tab.vue';

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
  components: { AgTabs, AgTab },
  template: `
    <ag-tabs>
      <ag-tab title="Tab 1">
        Tab 1 content
      </ag-tab>
      <ag-tab title="Tab 2">
        Tab 2 content
      </ag-tab>
  </ag-tabs> 
  `
});
