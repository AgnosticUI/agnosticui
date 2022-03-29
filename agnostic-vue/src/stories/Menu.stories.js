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
    <template #icon>&#x2715;</template>
  </Menu>`
});
