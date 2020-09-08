import AgnosticHeader from "./Header.vue";
import AgnosticHeaderNav from "./HeaderNav.vue";

export default {
  title: 'Header',
  components: [
    AgnosticHeader,
    AgnosticHeaderNav,
  ],
  argTypes: {
    isSkinned: { control: 'boolean' },
    css: { control: 'text' },
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AgnosticHeader, AgnosticHeaderNav },
  template: '<agnostic-header v-bind="$props"><template v-slot:logoleft><a href="#">Logo on Left</a></template><template v-slot:headernav><agnostic-header-nav><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li></ul></agnostic-header-nav></template><template v-slot:logoright><a href="#">Logo on Right</a></template></agnostic-header>'
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
