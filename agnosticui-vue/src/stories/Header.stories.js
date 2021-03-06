import AgnosticHeader from "./Header.vue";
import AgnosticHeaderNav from "./HeaderNav.vue";
import AgnosticHeaderNavItem from "./HeaderNavItem.vue";

export default {
  title: 'Header',
  components: [
    AgnosticHeader,
    AgnosticHeaderNav,
    AgnosticHeaderNavItem,
  ],
  argTypes: {
    isSkinned: { control: 'boolean' },
    isSticky: { control: 'boolean' },
    css: { control: 'text' },
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AgnosticHeader, AgnosticHeaderNav, AgnosticHeaderNavItem },
  template: '<AgnosticHeader v-bind="$props"><template v-slot:logoleft><a href="#">Logo on Left</a></template><template v-slot:headernav><AgnosticHeaderNav><AgnosticHeaderNavItem><a href="#">Home</a></AgnosticHeaderNavItem><AgnosticHeaderNavItem><a href="#">About</a></AgnosticHeaderNavItem></AgnosticHeaderNav></template><template v-slot:logoright><a href="#">Logo on Right</a></template></AgnosticHeader>'
});

export const HeaderDefault = Template.bind({});
HeaderDefault.args = {};

export const HeaderCustomCSSClass = Template.bind({});
HeaderCustomCSSClass.args = {
  css: 'foo'
}

export const HeaderUnskinnedOnlyBase = Template.bind({});
HeaderUnskinnedOnlyBase.args = {
  isSkinned: false,
};

export const HeaderSticky = Template.bind({});
HeaderSticky.args = {
  isSticky: true,
};
