import DividerVerticalExample from "./DividerVerticalExample.svelte";
import DividerExample from "./DividerExample.svelte";
import FontDecorator from "./FontDecorator.svelte";

export default {
  title: "AG-Svelte (Beta)/Divider",
  component: DividerExample,
  decorators: [() => FontDecorator],
};

const Template = ({ ...args }) => ({
  Component: DividerExample,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const Start = Template.bind({});
Start.args = {
  justify: "start",
};

export const End = Template.bind({});
End.args = {
  justify: "end",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
};

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

export const VerticalTemplate = ({ ...args }) => ({
  Component: DividerVerticalExample,
  props: args,
});

export const Vertical = VerticalTemplate.bind({});
Vertical.args = {};

export const VerticalSmall = VerticalTemplate.bind({});
VerticalSmall.args = {
  size: "small",
};

export const VerticalLarge = VerticalTemplate.bind({});
VerticalLarge.args = {
  size: "large",
};
export const VerticalXLarge = VerticalTemplate.bind({});
VerticalXLarge.args = {
  size: "xlarge",
};
export const VerticalSuccess = VerticalTemplate.bind({});
VerticalSuccess.args = {
  type: "success",
};
export const VerticalInfo = VerticalTemplate.bind({});
VerticalInfo.args = {
  type: "info",
};
/*
<Divider />
        <Divider>Content</Divider>
        <Divider justify="start">Start</Divider>
        <Divider justify="end">End</Divider>
        <Divider type="success">Success</Divider>
        <Divider type="info">Info</Divider>
        <Divider type="warning">Warning</Divider>
        <Divider type="error">Error</Divider>
        <Divider size="small">Small</Divider>
        <Divider size="large">Large</Divider>
        <Divider size="xlarge">XLarge</Divider>
        <Divider type="info" size="small"><Button mode="primary" isBordered isRounded>Go</Button></Divider>
        <div className="flex mbs40 mbe48">*/
