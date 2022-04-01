# Menu

The `Menu` component contains a list of menu options that appears
when a user interacts with the trigger button via clicking or keyboard interactions. Below is a table that describes how keyboard navigation works.

<div class="mbs24"></div>

### Keyboard Navigation

| Command | Action |
| ----------- | ----------- |
| Tab | Puts focus on menu or next item on the page. Once menu is focused, use the arrow keys to navigate within |
| Enter/Space | Opens menu on menu button. Selects an item if within list |
| Down Arrow | Moves focus to next menu item or first item if on last one. When focused on trigger button and menu is closed, opens the menu items |
| Up Arrow | Moves focus to previous menu item or last item if on first one |
| Escape | Closes menu and focuses back on the trigger menu button |
| Select Closes | Defaults to closing menu on selecting item. Can opt-out via setting closeOnSelect to false |
| Click Outside Closes | Defaults to closing menu on clicking outside of menu. Can opt-out via setting closeOnClickOutside to false |

<div class="mbe24"></div>

## Examples

In the menu examples below, set focus and then keyboard navigate the menu's items below.

<MenuExamples />

_See also <code>isBordered</code> and <code>isRounded</code> props._

<script setup>
import MenuExamples from '../../components/MenuExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```jsx
import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import { Menu, MenuItem, } from "agnostic-react";
export const YourComponent = () => (
  return (
    <div className="mbs16 mbe24">
      <h2>Menu</h2>
      <p class="mbs24 mbe14">Default Menu</p>
      <Menu
        id="mymenu1"
        buttonLabel="Players"
        onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
        onClose={() => console.log('onClose called...')}
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p class="mbs24 mbe14"><code>closeOnClickOutside</code> set to false</p>
      <Menu
        closeOnClickOutside={false}
        id="mymenu2"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p class="mbs24 mbe14"><code>closeOnSelect</code> set to false</p>
      <Menu
        closeOnSelect={false}
        id="mymenu3"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p class="mbs24 mbe14">Stays open on click outside or select with: <code>closeOnSelect</code> &amp; <code>closeOnClickOutside</code> set to false</p>
      <Menu
        closeOnSelect={false}
        closeOnClickOutside={false}
        id="mymenu4"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p class="mbs24 mbe14">small with: <code>size="small"</code></p>
      <Menu
        id="mymenu5"
        size="small"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p class="mbs24 mbe14">Large with: <code>size="large"</code></p>
      <Menu
        id="mymenu6"
        size="large"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p class="mbs24 mbe14">Rounded with: <code>isRounded</code></p>
      <Menu
        isRounded
        id="mymenu7"
        size="large"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p class="mbs24 mbe14">Bordered with <code>isBordered</code></p>
      <Menu
        isBordered
        id="mymenu8"
        size="large"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
    </div>
  )
)
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Menu.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Menu.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Menu } from "agnostic-vue";

export default {
  name: "MenuExamples",
  components: {
    Menu,
  },
};
</script>
<template>
  <section>
    <h2>Menu</h2>
    <Menu
      id="menu1"
      menuTitle="Players"
      disabledItems="['menuitem-3']"
      @open="(selectedItem) => log('Single: selected item:', selectedItem)"
      @close="() => log('close called...')"
    >
      <template #menuitem-1>Menu Item 1</template>
      <template #menuitem-2>Menu Item 2</template>
      <template #menuitem-3>Menu Item 3</template>
      <template #menuitem-4>Menu Item 4</template>
      <template #menuitem-5>Menu Item 5</template>
      <template #icon>&#9662;</template>
    </Menu>
    <div class="mbe16" />
    <Menu
      id="menu2"
      menuTitle="Players (!closeOnClickOutside)"
      :closeOnClickOutside="false"
    >
      <template #menuitem-1>Menu Item 1</template>
      <template #menuitem-2>Menu Item 2</template>
      <template #menuitem-3>Menu Item 3</template>
      <template #menuitem-4>Menu Item 4</template>
      <template #menuitem-5>Menu Item 5</template>
      <template #icon>&#9662;</template>
    </Menu>
    <div class="mbe16" />
    <Menu
      id="menu3"
      menuTitle="Players (!closeOnSelect)"
      :closeOnSelect="false"
    >
      <template #menuitem-1>Menu Item 1</template>
      <template #menuitem-2>Menu Item 2</template>
      <template #menuitem-3>Menu Item 3</template>
      <template #menuitem-4>Menu Item 4</template>
      <template #menuitem-5>Menu Item 5</template>
      <template #icon>&#9662;</template>
    </Menu>
    <div class="mbe16" />
    <Menu
      id="menu5"
      menuTitle="Players (small)"
      size="small"
    >
      <template #menuitem-1>Menu Item 1</template>
      <template #menuitem-2>Menu Item 2</template>
      <template #menuitem-3>Menu Item 3</template>
      <template #menuitem-4>Menu Item 4</template>
      <template #menuitem-5>Menu Item 5</template>
      <template #icon>&#9662;</template>
    </Menu>
    <div class="mbe16" />
    <Menu
      id="menu5"
      menuTitle="Players (large)"
      size="large"
      disabledItems="['menuitem-2', 'menuitem-5']"
    >
      <template #menuitem-1>Menu Item 1</template>
      <template #menuitem-2>Menu Item 2</template>
      <template #menuitem-3>Menu Item 3</template>
      <template #menuitem-4>Menu Item 4</template>
      <template #menuitem-5>Menu Item 5</template>
      <template #icon>&#9662;</template>
    </Menu>
  </section>
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Menu.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Menu.stories.js)

<div class="mbe24"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<script>
  import 'agnostic-svelte/css/common.min.css';
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
<section class="mbe24">
  <h3 class="mbe24">Menu</h3>
  <Menu
    menuItems={menuItems}
    id="mymenu1"
    menuTitle="Players"
    onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
    onClose={() => console.log('onClose called...')}
  />
  <span class="mie12" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (closeOnClickOutside false)"
    closeOnClickOutside={false}
  />
  <span class="mie12" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (closeOnSelect false)"
    closeOnSelect={false}
  />
  <span class="mie12" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (closeOnSelect & closeOnClickOutside false)"
    closeOnSelect={false}
    closeOnClickOutside={false}
  />
  <span class="mie12" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (small)"
    size="small"
  />
  <div class="mbe18" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (large)"
    size="large"
  />
  <div class="mbe18" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (bordered)"
    isBordered
  />
  <div class="mbe18" />
  <Menu menuItems={menuItems}
    id="mymenu2"
    menuTitle="Players (rounded)"
    isRounded
  />
</section>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Menu/Menu.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Menu/Menu.stories.js)

<div class="flex">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-icon.svg" alt="Angular logo">Angular (Experimental)
  </h3>
</div>

**Angular menu is not currently available**

<div class="mbe32"></div>

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, and Angular (experimental). The following will set this up locally:

```shell
git clone git@github.com:AgnosticUI/agnosticui.git
cd agnosticui/<PACKAGE_NAME> && npm i # e.g. cd agnosticui/agnostic-react && npm i
# You can then run any of the top-level scripts:
npm run start:react # or cd agnostic-react && npm run storybook
npm run start:vue # or cd agnostic-vue && npm run storybook
npm run start:angular # or cd agnostic-angular && npm run storybook
npm run start:svelte # or cd agnostic-angular && npm run storybook
```

See [Running Storybook](https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#usage).
