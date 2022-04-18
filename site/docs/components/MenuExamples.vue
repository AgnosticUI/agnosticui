<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Menu } from "agnostic-vue";

export default {
  name: "MenuExamples",
  components: {
    Menu,
  },
  setup() {
    const log = (message, extra) => {
      console.log(message, extra);
    };
    return {
      log: log,
    };
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
      id="menu4"
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
    <div class="mbe16" />
    <Menu
      id="kebab1"
      type="kebab"
    >
      <template #menuitem-1>Menu Item 1</template>
      <template #menuitem-2>Menu Item 2</template>
      <template #menuitem-3>Menu Item 3</template>
      <template #menuitem-4>Menu Item 4</template>
      <template #menuitem-5>Menu Item 5</template>
    </Menu>
    <div class="mbe16" />
    <div class="flex justify-end">
      <Menu
        id="kebab2"
        :isItemsRight="true"
        type="kebab"
      >
        <template #menuitem-1>Menu Item 1</template>
        <template #menuitem-2>Menu Item 2</template>
        <template #menuitem-3>Menu Item 3</template>
        <template #menuitem-4>Menu Item 4</template>
        <template #menuitem-5>Menu Item 5</template>
      </Menu>
    </div>
    <div class="mbe16" />
    <Menu
      id="meatball1"
      type="meatball"
    >
      <template #menuitem-1>Menu Item 1</template>
      <template #menuitem-2>Menu Item 2</template>
      <template #menuitem-3>Menu Item 3</template>
      <template #menuitem-4>Menu Item 4</template>
      <template #menuitem-5>Menu Item 5</template>
    </Menu>
    <div class="mbe16" />
    <div class="flex justify-end">
      <Menu
        id="meatball2"
        :isItemsRight="true"
        type="meatball"
      >
        <template #menuitem-1>Menu Item 1</template>
        <template #menuitem-2>Menu Item 2</template>
        <template #menuitem-3>Menu Item 3</template>
        <template #menuitem-4>Menu Item 4</template>
        <template #menuitem-5>Menu Item 5</template>
      </Menu>
    </div>
    <div class="mbe16" />
    <Menu
      id="hamburger1"
      type="hamburger"
    >
      <template #menuitem-1>Menu Item 1</template>
      <template #menuitem-2>Menu Item 2</template>
      <template #menuitem-3>Menu Item 3</template>
      <template #menuitem-4>Menu Item 4</template>
      <template #menuitem-5>Menu Item 5</template>
    </Menu>
    <div class="mbe16" />
    <div class="flex justify-end">
      <Menu
        id="hamburger2"
        :isItemsRight="true"
        type="hamburger"
      >
        <template #menuitem-1>Menu Item 1</template>
        <template #menuitem-2>Menu Item 2</template>
        <template #menuitem-3>Menu Item 3</template>
        <template #menuitem-4>Menu Item 4</template>
        <template #menuitem-5>Menu Item 5</template>
      </Menu>
    </div>
    <div class="mbe16" />
  </section>
</template>
