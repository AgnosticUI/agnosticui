import Toasts from "./ToastSlots.svelte";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";

export default {
  title: "AG-Svelte (Beta)/Toasts",
  components: [Toasts],
  decorators: [() => FontDecorator],
};

const Template = ({ ...args }) => ({
  Component: Toasts,
  props: args,
});

export const All = Template.bind({});
All.args = {};
