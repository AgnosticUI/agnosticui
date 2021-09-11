import AgnosticProgress from './Progress.vue';

export default {
  title: 'AG—Vue/Progress',
  component: AgnosticProgress,
  argTypes: {
    value: { control: 'number' },
    max: { control: 'number' },
    css: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AgnosticProgress },
  template: '<agnostic-progress v-bind="$props" />',
});

export const ProgressTest = Template.bind({});
ProgressTest.args = {
  value: 25,
  max: 100,
};

export const ProgressCss = Template.bind({});
ProgressCss.args = {
  value: 25,
  max: 100,
  css: 'foo-bar-baz',
};
