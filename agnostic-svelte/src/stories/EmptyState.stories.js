import EmptyStateExample from "./EmptyStateExample.svelte";
import FontDecorator from "./FontDecorator.svelte";

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
