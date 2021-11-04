import Tabs from "./Tabs.svelte";

// It's unfortunate that we have to create all these one-off components but Svelte
// doesn't appear to support dynamic slots: https://github.com/sveltejs/svelte/issues/3480
// so it's easiesst to just leverage <svelte:component /> to achieve customizability
import Tab1 from "./TabPanel1.svelte";
import Tab2 from "./TabPanel2.svelte";
import Tab3 from "./TabPanel3.svelte";
import Tab4 from "./TabPanel4.svelte";
import Tab5 from "./TabPanel5.svelte";
import TabButtonCustom from "./TabButtonCustom.svelte";

export default {
  title: "AG—Svelte (Beta)/Tabs",
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
      ariaControls: 'panel-1',
      tabPanelComponent: Tab1,
    },
    {
      title: "Tab 2",
      ariaControls: 'panel-2',
      tabPanelComponent: Tab2,
    },
    {
      title: "Tab 3",
      ariaControls: 'panel-3',
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
      ariaControls: 'panel-1',
      tabPanelComponent: Tab1,
    },
    {
      title: "Tab 2",
      ariaControls: 'panel-2',
      tabPanelComponent: Tab2,
    },
    {
      title: "Tab 3",
      ariaControls: 'panel-3',
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
      ariaControls: 'panel-1',
      tabPanelComponent: Tab1,
    },
    {
      title: "Tab 2",
      ariaControls: 'panel-2',
      tabPanelComponent: Tab2,
    },
    {
      title: "Tab 3",
      ariaControls: 'panel-3',
      tabPanelComponent: Tab3,
    },
  ],
};

export const TabsDisabled = Template.bind({});
TabsDisabled.args = {
  isDisabled: true,
  tabs: [
    {
      title: "Tab 1",
      ariaControls: 'panel-1',
      tabPanelComponent: Tab1,
    },
    {
      title: "Tab 2",
      ariaControls: 'panel-2',
      tabPanelComponent: Tab2,
    },
    {
      title: "Tab 3",
      ariaControls: 'panel-3',
      tabPanelComponent: Tab3,
    },
  ],
};
export const TabsDisabledOptions = Template.bind({});
TabsDisabledOptions.args = {
  disabledOptions: ["Tab 2", "Tab 4"],
  tabs: [
    {
      title: "Tab 1",
      ariaControls: 'panel-1',
      tabPanelComponent: Tab1,
    },
    {
      title: "Tab 2",
      ariaControls: 'panel-2',
      tabPanelComponent: Tab2,
    },
    {
      title: "Tab 3",
      ariaControls: 'panel-3',
      tabPanelComponent: Tab3,
    },
    {
      title: "Tab 4",
      ariaControls: 'panel-4',
      tabPanelComponent: Tab4,
    },
    {
      title: "Tab 5",
      ariaControls: 'panel-5',
      tabPanelComponent: Tab5,
    },
  ],
};

// See ./TabButtonCustom.svelte for an example on how to setup your custom tab buttons.
// It is a bit complex due to preserving the keyboard navigation for accessibility. To
// do this, the Tabs library needs to obtain "refs" to the tab buttons which we do with:
// svelte:component
//   this="{tab.tabButtonComponent}"
//   bind:this={dynamicComponentRefs[i]}
//   ...
// So we're dynamically instantiating the custom tab button and storing a reference in
// dynamicComponentRefs array. Later, when we're managing keyboard navigation based focus,
// we need to somehow call isDisabled and focus methods on those references. Hence, the
// complexity required -- the custom tab button must bind the raw <button bind:this={btn}
// and then support those methods:
// let btn;
// export function focus() {
//   return btn.focus();
// }
// export function isDisabled () {
//   return btn.disabled;
// }
export const CustomTabButtons = Template.bind({});
CustomTabButtons.args = {
  isBorderless: true,
  tabs: [
    {
      title: "Tab 1",
      ariaControls: 'panel-1',
      tabButtonComponent: TabButtonCustom,
      tabPanelComponent: Tab1,
    },
    {
      title: "Tab 2",
      ariaControls: 'panel-2',
      tabButtonComponent: TabButtonCustom,
      tabPanelComponent: Tab2,
    },
    {
      title: "Tab 3",
      ariaControls: 'panel-3',
      tabButtonComponent: TabButtonCustom,
      tabPanelComponent: Tab3,
    },
  ],
};
