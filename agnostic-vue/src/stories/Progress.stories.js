import AgnosticProgress from '../components/Progress.vue';

export default {
  title: "AG—Vue (Beta)/Progress",
  component: AgnosticProgress,
  argTypes: {
    value: { control: "number" },
    max: { control: "number" },
    css: { control: "text" }
  }
};

const Template = args => ({
  components: { AgnosticProgress },
  setup() {
    return { args };
  },
  template: '<agnostic-progress v-bind="args" />',
});

export const QuarterWay = Template.bind({});
QuarterWay.args = {
  value: 25,
  max: 100,
};

export const CustomCss = Template.bind({});
CustomCss.args = {
  value: 25,
  max: 100,
  css: 'foo-bar-baz',
};
