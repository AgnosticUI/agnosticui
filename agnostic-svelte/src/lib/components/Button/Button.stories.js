import ButtonSlot from "./ButtonSlot.svelte";
import { action } from "@storybook/addon-actions";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";

const actionsData = {
  click: action("click"),
  blur: action("blur"),
  focus: action("focus"),
};

export default {
  title: "AG—Svelte (Beta)/Button",
  component: ButtonSlot,
  decorators: [() => FontDecorator],
  argTypes: {
    // ******************** HEY! ************************
    // You will need to also add these to the buttonslot:
    // agnostic-svelte/src/stories/ButtonSlot.svelte
    mode: { control: "text" },
    css: { control: "text" },
    isBordered: { control: "boolean" },
    isCapsule: { control: "boolean" },
    isBlock: { control: "boolean" },
    isDisabled: { control: "boolean" },
    isCircle: { control: "boolean" },
    isRounded: { control: "boolean" },
    isSkinned: { control: "boolean" },
    isBlank: { control: "boolean" },
    isLink: { control: "boolean" },
    size: {
      control: { type: "select", options: ["small", "large"] },
    },
    // on: {
    //   ...actionsData,
    // },
  },
};

const Template = ({ ...args }) => ({
  Component: ButtonSlot,
  props: args,
  on: {
    ...actionsData,
  },
});

export const Primary = Template.bind({});
Primary.args = {
  mode: "primary",
};

export const PrimaryBordered = Template.bind({});
PrimaryBordered.args = {
  mode: "primary",
  isBordered: true,
};

export const PrimaryCapsule = Template.bind({});
PrimaryCapsule.args = {
  mode: "primary",
  isCapsule: true,
};

export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = {
  mode: "primary",
  isRounded: true,
};

export const PrimaryRoundedRaised = Template.bind({});
PrimaryRoundedRaised.args = {
  mode: "primary",
  isRounded: true,
};

export const PrimaryBorderedRounded = Template.bind({});
PrimaryBorderedRounded.args = {
  mode: "primary",
  isBordered: true,
  isRounded: true,
};

export const PrimaryTest = Template.bind({});
PrimaryTest.args = {
  isCircle: true,
};

export const PrimaryCircle = Template.bind({});
PrimaryCircle.args = {
  mode: "primary",
  isBordered: true,
  isCircle: true,
};

export const PrimaryBlock = Template.bind({});
PrimaryBlock.args = {
  mode: "primary",
  isBlock: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
};

export const SecondaryBordered = Template.bind({});
SecondaryBordered.args = {
  mode: "secondary",
  isBordered: true,
};

export const SecondaryCapsule = Template.bind({});
SecondaryCapsule.args = {
  mode: "secondary",
  isCapsule: true,
};

export const SecondaryRounded = Template.bind({});
SecondaryRounded.args = {
  mode: "secondary",
  isRounded: true,
};

export const SecondaryCircle = Template.bind({});
SecondaryCircle.args = {
  mode: "secondary",
  isCircle: true,
};

export const SecondaryRoundedRaised = Template.bind({});
SecondaryRoundedRaised.args = {
  mode: "secondary",
  isRounded: true,
};

export const SecondaryBorderedRounded = Template.bind({});
SecondaryBorderedRounded.args = {
  mode: "secondary",
  isBordered: true,
  isRounded: true,
};

export const Default = Template.bind({});
Default.args = {};

export const DefaultBordered = Template.bind({});
DefaultBordered.args = {
  isBordered: true,
};

export const DefaultRounded = Template.bind({});
DefaultRounded.args = {
  isRounded: true,
};

export const DefaultCircle = Template.bind({});
DefaultCircle.args = {
  isRounded: true,
  isCircle: true,
};

export const DefaultBorderedRounded = Template.bind({});
DefaultBorderedRounded.args = {
  isBordered: true,
  isRounded: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const ButtonTypeSubmit = Template.bind({});
ButtonTypeSubmit.args = {
  type: "submit",
};

export const ButtonTypeReset = Template.bind({});
ButtonTypeReset.args = {
  type: "reset",
};

export const ButtonOverrides = Template.bind({});
ButtonOverrides.args = {
  css: "my-custom-css-klass",
};

export const ButtonBlank = Template.bind({});
ButtonBlank.args = {
  isBlank: true,
};

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  isLink: true,
};

export const ButtonLinkUnskinned = Template.bind({});
ButtonLinkUnskinned.args = {
  isLink: true,
  isSkinned: false,
};

export const ButtonBase = Template.bind({});
ButtonBase.args = {
  isSkinned: false,
};
