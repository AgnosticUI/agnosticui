import Menu from "../components/Menu.vue";

const wrapper = () => {
  return {
    template: '<div style="padding: 0.5rem;"><story /></div>',
  };
};

export default {
  title: "AG—Vue (Beta)/Menu",
  decorators: [wrapper],
  component: Menu
};

export const Default = () => ({
  components: { Menu },
  template:`<Menu id="menu1" menuTitle="Players">
    <template #menuitem-1>Menu Item 1</template>
    <template #menuitem-2>Menu Item 2</template>
    <template #menuitem-3>Menu Item 3</template>
    <template #menuitem-4>Menu Item 4</template>
    <template #menuitem-5>Menu Item 5</template>
    <template #icon>&#9662;</template>
  </Menu>`
});

export const NoCloseOnClickOutside = () => ({
  components: { Menu },
  template:`<Menu :closeOnClickOutside="false" id="menu2" menuTitle="Players">
    <template #menuitem-1>Menu Item 1</template>
    <template #menuitem-2>Menu Item 2</template>
    <template #menuitem-3>Menu Item 3</template>
    <template #menuitem-4>Menu Item 4</template>
    <template #menuitem-5>Menu Item 5</template>
    <template #icon>&#9662;</template>
  </Menu>`
});

export const NoCloseOnSelect = () => ({
  components: { Menu },
  template:`<Menu :closeOnSelect="false" id="menu3" menuTitle="Players">
    <template #menuitem-1>Menu Item 1</template>
    <template #menuitem-2>Menu Item 2</template>
    <template #menuitem-3>Menu Item 3</template>
    <template #menuitem-4>Menu Item 4</template>
    <template #menuitem-5>Menu Item 5</template>
    <template #icon>&#9662;</template>
  </Menu>`
});

export const NoCloseOnSelectOrClickOutside = () => ({
  components: { Menu },
  closeOnSelect: true,
  NoCloseOnClickOutside: true,
  template:`<Menu :closeOnSelect="false" :closeOnClickOutside="false" id="menu4" menuTitle="Players">
    <template #menuitem-1>Menu Item 1</template>
    <template #menuitem-2>Menu Item 2</template>
    <template #menuitem-3>Menu Item 3</template>
    <template #menuitem-4>Menu Item 4</template>
    <template #menuitem-5>Menu Item 5</template>
    <template #icon>&#9662;</template>
  </Menu>`
});

export const Small = () => ({
  components: { Menu },
  template:`<Menu size="small" id="menu4" menuTitle="Players">
    <template #menuitem-1>Menu Item 1</template>
    <template #menuitem-2>Menu Item 2</template>
    <template #menuitem-3>Menu Item 3</template>
    <template #menuitem-4>Menu Item 4</template>
    <template #menuitem-5>Menu Item 5</template>
    <template #icon>&#9662;</template>
  </Menu>`
});

export const Large = () => ({
  components: { Menu },
  template:`<Menu size="large" id="menu4" menuTitle="Players">
    <template #menuitem-1>Menu Item 1</template>
    <template #menuitem-2>Menu Item 2</template>
    <template #menuitem-3>Menu Item 3</template>
    <template #menuitem-4>Menu Item 4</template>
    <template #menuitem-5>Menu Item 5</template>
    <template #icon>&#9662;</template>
  </Menu>`
});

export const Rounded = () => ({
  components: { Menu },
  template:`<Menu :isRounded="true" id="menu4" menuTitle="Players">
    <template #menuitem-1>Menu Item 1</template>
    <template #menuitem-2>Menu Item 2</template>
    <template #menuitem-3>Menu Item 3</template>
    <template #menuitem-4>Menu Item 4</template>
    <template #menuitem-5>Menu Item 5</template>
    <template #icon>&#9662;</template>
  </Menu>`
});

export const Bordered = () => ({
  components: { Menu },
  template:`<Menu :isBordered="true" id="menu4" menuTitle="Players">
    <template #menuitem-1>Menu Item 1</template>
    <template #menuitem-2>Menu Item 2</template>
    <template #menuitem-3>Menu Item 3</template>
    <template #menuitem-4>Menu Item 4</template>
    <template #menuitem-5>Menu Item 5</template>
    <template #icon>&#9662;</template>
  </Menu>`
});
