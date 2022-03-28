import Menu from "./Menu.svelte";
import { action } from "@storybook/addon-actions";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";
import MenuItem from "./MenuItem.svelte";

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
      label: "Menu Item 1",
      menuItemComponent: MenuItem
    },
    {
      isDisabled: true,
      label: "Menu Item 2",
      menuItemComponent: MenuItem
    },
    {
      label: "Menu Item 3",
      menuItemComponent: MenuItem
    },
  ],
};

export const NoCloseOnClickOutside = Template.bind({});
NoCloseOnClickOutside.args = {
  id: "mymenu1",
  closeOnClickOutside: false,
  menuTitle: "Players",
  menuItems: [
    {
      label: "Menu Item 1",
      menuItemComponent: MenuItem
    },
    {
      isDisabled: true,
      label: "Menu Item 2",
      menuItemComponent: MenuItem
    },
    {
      label: "Menu Item 3",
      menuItemComponent: MenuItem
    },
  ],
};

export const NoCloseOnSelect = Template.bind({});
NoCloseOnSelect.args = {
  id: "mymenu1",
  closeOnSelect: false,
  menuTitle: "Players",
  menuItems: [
    {
      label: "Menu Item 1",
      menuItemComponent: MenuItem
    },
    {
      isDisabled: true,
      label: "Menu Item 2",
      menuItemComponent: MenuItem
    },
    {
      label: "Menu Item 3",
      menuItemComponent: MenuItem
    },
  ],
};

export const NoCloseOnSelectOrClickOutside = Template.bind({});
NoCloseOnSelectOrClickOutside.args = {
  id: "mymenu1",
  closeOnSelect: false,
  closeOnClickOutside: false,
  menuTitle: "Players",
  menuItems: [
    {
      label: "Menu Item 1",
      menuItemComponent: MenuItem
    },
    {
      isDisabled: true,
      label: "Menu Item 2",
      menuItemComponent: MenuItem
    },
    {
      label: "Menu Item 3",
      menuItemComponent: MenuItem
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
      label: "Menu Item 1",
      menuItemComponent: MenuItem
    },
    {
      isDisabled: true,
      label: "Menu Item 2",
      menuItemComponent: MenuItem
    },
    {
      label: "Menu Item 3",
      menuItemComponent: MenuItem
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
      label: "Menu Item 1",
      menuItemComponent: MenuItem
    },
    {
      isDisabled: true,
      label: "Menu Item 2",
      menuItemComponent: MenuItem
    },
    {
      label: "Menu Item 3",
      menuItemComponent: MenuItem
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
      label: "Menu Item 1",
      menuItemComponent: MenuItem
    },
    {
      isDisabled: true,
      label: "Menu Item 2",
      menuItemComponent: MenuItem
    },
    {
      label: "Menu Item 3",
      menuItemComponent: MenuItem
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
      label: "Menu Item 1",
      menuItemComponent: MenuItem
    },
    {
      isDisabled: true,
      label: "Menu Item 2",
      menuItemComponent: MenuItem
    },
    {
      label: "Menu Item 3",
      menuItemComponent: MenuItem
    },
  ],
};
