<script lang="ts">
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { action } from "@storybook/addon-actions";
  const actionsData = {
    click: action("click"),
  };
</script>
  
<Meta title="AG—Svelte (Beta)/Menu" component="{Menu}" />
<Template let:args>
  <Menu
    {...args} 
    on:click={actionsData.click}
  />
</Template>

<Story name="Default" args="{{
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />

<Story name="Kebab" args="{{
  id: "kebab1",
  menuTitle: "Players",
  type: "kebab",
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />

<Story name="KebabRight" args="{{
  id: "kebab2",
  menuTitle: "Players",
  type: "kebab",
  isItemsRight: true,
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />

<Story name="Meatball" args="{{
  id: "meatball1",
  menuTitle: "Players",
  type: "meatball",
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />

<Story name="MeatballRight" args="{{
  id: "meatball2",
  menuTitle: "Players",
  type: "meatball",
  isItemsRight: true,
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />

<Story name="Burger" args="{{
  id: "hamburger1",
  menuTitle: "Players",
  type: "hamburger",
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />

<Story name="BurgerRight" args="{{
  id: "hamburger2",
  menuTitle: "Players",
  type: "hamburger",
  isItemsRight: true,
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />

<Story name="NoCloseOnClickOutside" args="{{
  id: "mymenu2",
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />

<Story name="NoCloseOnSelect" args="{{
  id: "mymenu3",
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />

<Story name="NoCloseOnSelectOrClickOutside" args="{{
  id: "mymenu4",
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />

<Story name="Small" args="{{
  id: "mymenu5",
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />

<Story name="Large" args="{{
  id: "mymenu6",
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />

<Story name="Rounded" args="{{
  id: "mymenu7",
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />

<Story name="Bordered" args="{{
  id: "mymenu8",
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
    {
      label: "Menu Item 4",
      menuItemComponent: MenuItem
    },
  ],
}}" />
