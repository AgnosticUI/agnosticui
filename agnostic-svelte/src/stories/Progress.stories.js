import Progress from "./Progress.svelte";
import FontDecorator from "./FontDecorator.svelte";

export default {
  title: "AG—Svelte (Beta)/Progress",
  component: Progress,
  decorators: [() => FontDecorator],
  argTypes: {
    value: { control: "number" },
    max: { control: "number" },
  },
};

const Template = ({ ...args }) => ({
  Component: Progress,
  props: args,
});

export const ProgressTest = Template.bind({});
ProgressTest.args = {
  value: 30,
  max: 100,
};

export const ProgressCSS = Template.bind({});
ProgressCSS.args = {
  value: 30,
  max: 100,
  css: "foo-bar-baz",
};
