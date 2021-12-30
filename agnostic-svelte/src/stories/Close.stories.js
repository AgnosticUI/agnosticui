import Close from "./Close.svelte";
import FontDecorator from "./FontDecorator.svelte";

export default {
  title: "AG-Svelte (Beta)/Close",
  component: Close,
  decorators: [() => FontDecorator],
};

const Template = ({ ...args }) => ({
  Component: Close,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: "xlarge",
};
