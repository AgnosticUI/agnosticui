import Tab from "../components/Tab.vue";
import TabsWrapper from "../components/TabsWrapper.vue";
import Button from "../components/Button.vue";

const wrapper = () => {
  return {
    template: '<div style="padding: 0.5rem;"><story /></div>',
  };
};

export default {
  title: "AG—Vue (Beta)/Tab",
  decorators: [wrapper],
  component: TabsWrapper
};

export const TabsDefault = () => ({
  components: { TabsWrapper, Tab },
  template:`<TabsWrapper>
    <Tab title="Tab 1">Hello from Tab 1</Tab>
    <Tab title="Tab 2">Hello from Tab 2</Tab>
    <Tab title="Tab 3">Hello from Tab 3</Tab>
  </TabsWrapper>
  `
});
