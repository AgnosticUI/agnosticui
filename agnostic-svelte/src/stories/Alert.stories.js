import Alerts from "./AlertSlots.svelte";
import Alert from "./Alert.svelte";

export default {
  title: "AG—Svelte (Beta)/Alerts",
  component: Alert,
};

const Template = ({ ...args }) => ({
  Component: Alerts,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
};
export const Info = Template.bind({});
Info.args = {
  type: "info",
};
export const Success = Template.bind({});
Success.args = {
  type: "success",
};
export const Error = Template.bind({});
Error.args = {
  type: "error",
};
