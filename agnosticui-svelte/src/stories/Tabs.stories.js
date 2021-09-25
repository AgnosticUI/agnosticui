import Tabs from "./Tabs.svelte";

// It's unfortunate that we have to create all these one-off components but Svelte
// doesn't appear to support dynamic slots: https://github.com/sveltejs/svelte/issues/3480
// so it's easiesst to just leverage <svelte:component /> to achieve customizability
import Tab1 from "./TabPanel1.svelte";
import Tab2 from "./TabPanel2.svelte";
import Tab3 from "./TabPanel3.svelte";
import TabButton1 from "./TabButton1.svelte";
import TabButton2 from "./TabButton2.svelte";
import TabButton3 from "./TabButton3.svelte";

export default {
  title: "AG—Svelte/Tabs",
  tabPanelComponent: Tabs,
};

const Template = ({ ...args }) => ({
  Component: Tabs,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      title: "Tab 1",
      tabPanelComponent: Tab1,
    },
    {
      title: "Tab 2",
      tabPanelComponent: Tab2,
    },
    {
      title: "Tab 3",
      tabPanelComponent: Tab3,
    },
  ],
};

export const TabsLarge = Template.bind({});
TabsLarge.args = {
  size: "large",
  tabs: [
    {
      title: "Tab 1",
      tabPanelComponent: Tab1,
    },
    {
      title: "Tab 2",
      tabPanelComponent: Tab2,
    },
    {
      title: "Tab 3",
      tabPanelComponent: Tab3,
    },
  ],
};

export const TabsJumbo = Template.bind({});
TabsJumbo.args = {
  size: "jumbo",
  tabs: [
    {
      title: "Tab 1",
      tabPanelComponent: Tab1,
    },
    {
      title: "Tab 2",
      tabPanelComponent: Tab2,
    },
    {
      title: "Tab 3",
      tabPanelComponent: Tab3,
    },
  ],
};

// See ./TabButtonCustom.svelte for an example on how to setup your custom tab buttons.
export const CustomTabButtons = Template.bind({});
CustomTabButtons.args = {
  isBorderless: true,
  tabs: [
    {
      title: "Tab 1",
      tabButtonComponent: TabButton1,
      tabPanelComponent: Tab1,
    },
    {
      title: "Tab 2",
      tabButtonComponent: TabButton2,
      tabPanelComponent: Tab2,
    },
    {
      title: "Tab 3",
      tabButtonComponent: TabButton3,
      tabPanelComponent: Tab3,
    },
  ],
};
