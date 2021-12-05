import AgnosticHeader from "../components/Header.vue";
import AgnosticHeaderNav from "../components/HeaderNav.vue";
import AgnosticHeaderNavItem from "../components/HeaderNavItem.vue";

export default {
  title: "AG—Vue (Beta)/Header",
  components: [AgnosticHeader, AgnosticHeaderNav, AgnosticHeaderNavItem],
};

const Template = (args) => ({
  components: { AgnosticHeader, AgnosticHeaderNav, AgnosticHeaderNavItem },
  setup() {
    return { args };
  },
  template: '<AgnosticHeader v-bind="args"><template v-slot:logoleft><a href="#">Logo on Left</a></template><template v-slot:headernav><AgnosticHeaderNav><AgnosticHeaderNavItem><a href="#">Home</a></AgnosticHeaderNavItem><AgnosticHeaderNavItem><a href="#">About</a></AgnosticHeaderNavItem></AgnosticHeaderNav></template><template v-slot:logoright><a href="#">Logo on Right</a></template></AgnosticHeader>'
});

export const HeaderDefault = Template.bind({});
HeaderDefault.args = {};

export const HeaderCustomCSSClass = Template.bind({});
HeaderCustomCSSClass.args = {
  css: 'foo'
};

export const HeaderUnskinnedOnlyBase = Template.bind({});
HeaderUnskinnedOnlyBase.args = {
  isSkinned: false,
};

export const HeaderSticky = Template.bind({});
HeaderSticky.args = {
  isSticky: true,
};
