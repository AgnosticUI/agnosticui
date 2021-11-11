import IconSlot from "./IconSlot.svelte";

export default {
  title: "AG-Svelte (Beta)/Icon",
  component: IconSlot,
};

const Template = ({ ...args }) => ({
  Component: IconSlot,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
