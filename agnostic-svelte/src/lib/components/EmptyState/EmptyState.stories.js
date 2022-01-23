import EmptyStateExample from "./EmptyStateExample.svelte";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";

export default {
  title: "AG-Svelte (Beta)/EmptyState",
  component: EmptyStateExample,
  decorators: [() => FontDecorator],
};

const Template = ({ ...args }) => ({
  Component: EmptyStateExample,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const Rounded = Template.bind({});
Rounded.args = {
  isRounded: true,
};

export const Bordered = Template.bind({});
Bordered.args = {
  isBordered: true,
};

export const RoundedAndBordered = Template.bind({});
RoundedAndBordered.args = {
  isBordered: true,
  isRounded: true,
};
