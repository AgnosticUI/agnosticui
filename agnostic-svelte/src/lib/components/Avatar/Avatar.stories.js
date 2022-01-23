import Avatar from "./Avatar.svelte";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";

export default {
  title: "AG—Svelte (Beta)/Avatar",
  component: Avatar,
  decorators: [() => FontDecorator],
};

const Template = ({ ...args }) => ({
  Component: Avatar,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  text: "AB",
};
export const Warning = Template.bind({});
Warning.args = {
  text: "AB",
  type: "warning",
};
export const Info = Template.bind({});
Info.args = {
  text: "AB",
  type: "info",
};
export const Success = Template.bind({});
Success.args = {
  text: "AB",
  type: "success",
};
export const Error = Template.bind({});
Error.args = {
  text: "AB",
  type: "error",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  text: "AB",
  type: "error",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  text: "AB",
  type: "error",
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: "xlarge",
  text: "AB",
  type: "error",
};

export const ImageUrl = Template.bind({});
ImageUrl.args = {
  imgUrl: "https://joeschmoe.io/api/v1/random",
};

export const ImageWithTransparentBackground = Template.bind({});
ImageWithTransparentBackground.args = {
  imgUrl: "https://joeschmoe.io/api/v1/random",
  isTransparent: true,
};

export const ImageSquare = Template.bind({});
ImageSquare.args = {
  imgUrl: "https://joeschmoe.io/api/v1/random",
  isSquare: true,
};
export const ImageRoundedCorners = Template.bind({});
ImageRoundedCorners.args = {
  imgUrl: "https://joeschmoe.io/api/v1/random",
  isRounded: true,
};
