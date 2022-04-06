<script>
  import { Menu, MenuItem } from "agnostic-svelte";
  const menuItems = [
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
    {
      label: "Menu Item 5",
      menuItemComponent: MenuItem
    },
  ]
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Close
  </div>
  <Menu
    menuItems={menuItems}
    id="mymenu1"
    menuTitle="Players"
    onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
    onClose={() => console.log('onClose called...')}
  />
  <div class="mbs24" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (closeOnClickOutside false)"
    closeOnClickOutside={false}
  />
  <div class="mbs24" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (closeOnSelect false)"
    closeOnSelect={false}
  />
  <div class="mbs24" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (closeOnSelect & closeOnClickOutside false)"
    closeOnSelect={false}
    closeOnClickOutside={false}
  />
  <div class="mbs24" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (small)"
    size="small"
  />
  <div class="mbs24" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (large)"
    size="large"
  />
  <div class="mbs24" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (bordered)"
    isBordered
  />
  <div class="mbs24" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (rounded)"
    isRounded
  />
</section>
