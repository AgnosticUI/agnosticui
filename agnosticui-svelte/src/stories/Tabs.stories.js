import Tabs from "./Tabs.svelte";
import Tab1 from "./TabEx1.svelte";
import Tab2 from "./TabEx2.svelte";
import Tab3 from "./TabEx3.svelte";

export default {
  title: "AG—Svelte/Tabs",
  component: Tabs,
};

const Template = ({ ...args }) => ({
  Component: Tabs,
  props: args,
});

export const TabsExample = Template.bind({});
TabsExample.args = {
  tabs: [
    {
      title: "Tab 1",
      component: Tab1,
    },
    {
      title: "Tab 2",
      component: Tab2,
    },
    {
      title: "Tab 3",
      component: Tab3,
    },
  ],
};

export const TabsLarge = Template.bind({});
TabsLarge.args = {
  size: "large",
  tabs: [
    {
      title: "Tab 1",
      component: Tab1,
    },
    {
      title: "Tab 2",
      component: Tab2,
    },
    {
      title: "Tab 3",
      component: Tab3,
    },
  ],
};

export const TabsJumbo = Template.bind({});
TabsJumbo.args = {
  size: "jumbo",
  tabs: [
    {
      title: "Tab 1",
      component: Tab1,
    },
    {
      title: "Tab 2",
      component: Tab2,
    },
    {
      title: "Tab 3",
      component: Tab3,
    },
  ],
};
