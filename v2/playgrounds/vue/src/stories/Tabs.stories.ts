import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { fn } from "storybook/test";
import { VueTabs, VueTab, VueTabPanel } from "agnosticui-core/tabs/vue";
import type { VueTabsProps, VueTabsPropsWithEvents } from "agnosticui-core/tabs/vue";
import { ref } from 'vue';

const meta = {
  title: "AgnosticUI Vue/Tabs",
  component: VueTabs as any,
  tags: ["autodocs"],
  argTypes: {
    activation: {
      control: "select",
      options: ["manual", "automatic"],
      description: "Determines how tabs are activated.",
    },
    activeTab: {
      control: "number",
      description: "The index of the currently active tab.",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the tabs.",
    },
    ariaLabel: {
      control: "text",
      description: "ARIA label for the tabs container.",
    },
    ariaLabelledBy: {
      control: "text",
      description: "ID of the element that labels the tabs container.",
    },
  },
  args: {
    activation: "manual",
    activeTab: 0,
    orientation: "horizontal",
    ariaLabel: "AgnosticUI Tabs",
    onTabChange: fn(),
  },
} satisfies Meta<VueTabsPropsWithEvents>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base render function to reduce repetition for simple variants
const renderTabs = (args: VueTabsProps) => ({
  components: { VueTabs, VueTab, VueTabPanel },
  setup() {
    // In a real app, you'd use a ref to manage activeTab and update it on @tab-change.
    // For storybook, we pass the args directly to show props being applied.
    return { args };
  },
  template: `
    <VueTabs
      :active-tab="args.activeTab"
      :activation="args.activation"
      :orientation="args.orientation"
      :aria-label="args.ariaLabel"
      :aria-labelledby="args.ariaLabelledBy"
      @tab-change="args.onTabChange"
    >
      <VueTab panel="panel-1">Tab 1</VueTab>
      <VueTab panel="panel-2">Tab 2</VueTab>
      <VueTab panel="panel-3">Tab 3</VueTab>
      <VueTabPanel panel="panel-1">Content for Tab 1</VueTabPanel>
      <VueTabPanel panel="panel-2">Content for Tab 2</VueTabPanel>
      <VueTabPanel panel="panel-3">Content for Tab 3</VueTabPanel>
    </VueTabs>
  `,
});

export const Default: Story = {
  args: {
    ariaLabel: "Default Tabs",
  },
  render: (args) => ({
    components: { VueTabs, VueTab, VueTabPanel },
    setup() {
      return { args };
    },
    template: `
      <VueTabs
        :aria-label="args.ariaLabel"
        @tab-change="args.onTabChange"
      >
        <VueTab panel="panel-1">Tab 1</VueTab>
        <VueTab panel="panel-2">Tab 2</VueTab>
        <VueTab panel="panel-3">Tab 3</VueTab>
        <VueTabPanel panel="panel-1">Content for Tab 1</VueTabPanel>
        <VueTabPanel panel="panel-2">Content for Tab 2</VueTabPanel>
        <VueTabPanel panel="panel-3">Content for Tab 3</VueTabPanel>
      </VueTabs>
    `,
  }),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    ariaLabel: 'Vertical Tabs',
  },
  render: renderTabs,
};

export const AutomaticActivation: Story = {
  args: {
    activation: 'automatic',
    ariaLabel: 'Automatic Activation Tabs',
  },
  render: renderTabs,
};

export const InitialTab: Story = {
  args: {
    activeTab: 2,
    ariaLabel: 'Initial Tab Example',
  },
  render: renderTabs,
};

export const DisabledTab: Story = {
  args: {
    ariaLabel: 'Disabled Tab Example',
  },
  render: (args) => ({
    components: { VueTabs, VueTab, VueTabPanel },
    setup() {
      return { args };
    },
    template: `
      <VueTabs
        :active-tab="args.activeTab"
        :aria-label="args.ariaLabel"
        @tab-change="args.onTabChange"
      >
        <VueTab panel="panel-1">Tab 1</VueTab>
        <VueTab panel="panel-2" :disabled="true">Tab 2 (Disabled)</VueTab>
        <VueTab panel="panel-3">Tab 3</VueTab>
        <VueTabPanel panel="panel-1">Content for Tab 1</VueTabPanel>
        <VueTabPanel panel="panel-2">Content for Tab 2</VueTabPanel>
        <VueTabPanel panel="panel-3">Content for Tab 3</VueTabPanel>
      </VueTabs>
    `,
  }),
};

export const EventTesting: Story = {
  args: {
    ariaLabel: 'Event Testing Tabs',
  },
  render: (args: VueTabsPropsWithEvents) => ({
    components: { VueTabs, VueTab, VueTabPanel },
    setup() {
      const activeTab = ref(args.activeTab || 0);
      const eventMessage = ref('');
      const onTabChange = (detail: { activeTab: number; previousTab: number }) => {
        activeTab.value = detail.activeTab;
        eventMessage.value = `Tab changed from ${detail.previousTab} to ${detail.activeTab}`;
        args.onTabChange?.(detail);
      };
      return { args, activeTab, onTabChange, eventMessage };
    },
    template: `
      <div>
        <VueTabs
          :active-tab="activeTab"
          :aria-label="args.ariaLabel"
          @tab-change="onTabChange"
        >
          <VueTab panel="panel-1">Tab 1</VueTab>
          <VueTab panel="panel-2">Tab 2</VueTab>
          <VueTab panel="panel-3">Tab 3</VueTab>
          <VueTabPanel panel="panel-1">Content for Tab 1. Interact to see event message below.</VueTabPanel>
          <VueTabPanel panel="panel-2">Content for Tab 2. Interact to see event message below.</VueTabPanel>
          <VueTabPanel panel="panel-3">Content for Tab 3. Interact to see event message below.</VueTabPanel>
        </VueTabs>
        <p v-if="eventMessage" style="margin-top: 1rem; color: green;">{{ eventMessage }}</p>
      </div>
    `,
  }),
};

export const LabelledBy: Story = {
  args: {
    ariaLabel: undefined, // Unset aria-label to use aria-labelledby
    ariaLabelledBy: 'tabs-heading',
  },
  render: (args) => ({
    components: { VueTabs, VueTab, VueTabPanel },
    setup() {
      return { args };
    },
    template: `
      <div>
        <h2 id="tabs-heading">Tabs controlled by an external label</h2>
        <VueTabs
          :active-tab="args.activeTab"
          :aria-labelledby="args.ariaLabelledBy"
          @tab-change="args.onTabChange"
        >
          <VueTab panel="panel-1">Tab 1</VueTab>
          <VueTab panel="panel-2">Tab 2</VueTab>
          <VueTab panel="panel-3">Tab 3</VueTab>
          <VueTabPanel panel="panel-1">Content for Tab 1</VueTabPanel>
          <VueTabPanel panel="panel-2">Content for Tab 2</VueTabPanel>
          <VueTabPanel panel="panel-3">Content for Tab 3</VueTabPanel>
        </VueTabs>
      </div>
    `,
  }),
};
