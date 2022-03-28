import Menu from "./Menu.svelte";
import { action } from "@storybook/addon-actions";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";
import MenuItem1 from "./MenuItem1.svelte";
import MenuItem2 from "./MenuItem2.svelte";
import MenuItem3 from "./MenuItem3.svelte";

const actionsData = {
  click: action("click"),
};

export default {
  title: "AG-Svelte (Beta)/Menu",
  component: Menu,
  on: {
    ...actionsData,
  },
  decorators: [() => FontDecorator],
};

const Template = ({ ...args }) => ({
  Component: Menu,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  id: "mymenu1",
  menuTitle: "Players",
  menuItems: [
    {
      menuItemComponent: MenuItem1
    },
    {
      isDisabled: true,
      menuItemComponent: MenuItem2
    },
    {
      menuItemComponent: MenuItem3
    },
  ],
};

export const Small = Template.bind({});
Small.args = {
  id: "mymenu1",
  menuTitle: "Players",
  size: "small",
  menuItems: [
    {
      menuItemComponent: MenuItem1
    },
    {
      isDisabled: true,
      menuItemComponent: MenuItem2
    },
    {
      menuItemComponent: MenuItem3
    },
  ],
};

export const Large = Template.bind({});
Large.args = {
  id: "mymenu1",
  menuTitle: "Players",
  size: "large",
  menuItems: [
    {
      menuItemComponent: MenuItem1
    },
    {
      isDisabled: true,
      menuItemComponent: MenuItem2
    },
    {
      menuItemComponent: MenuItem3
    },
  ],
};

export const Rounded = Template.bind({});
Rounded.args = {
  id: "mymenu1",
  menuTitle: "Players",
  isRounded: true,
  menuItems: [
    {
      menuItemComponent: MenuItem1
    },
    {
      isDisabled: true,
      menuItemComponent: MenuItem2
    },
    {
      menuItemComponent: MenuItem3
    },
  ],
};

export const Bordered = Template.bind({});
Bordered.args = {
  id: "mymenu1",
  menuTitle: "Players",
  isBordered: true,
  menuItems: [
    {
      menuItemComponent: MenuItem1
    },
    {
      isDisabled: true,
      menuItemComponent: MenuItem2
    },
    {
      menuItemComponent: MenuItem3
    },
  ],
};
