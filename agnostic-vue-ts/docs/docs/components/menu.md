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
import Alert from "../../../src/components/Alert.vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<script setup>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Menu } from "agnostic-vue";
</script>
<template>
  <section>
    <h2>Menu</h2>
    <Menu
      id="menu1"
      menuTitle="Players"
      :disabledItems="['menuitem-3']"
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
      :disabledItems="['menuitem-2', 'menuitem-5']"
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

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Menu.vue)
