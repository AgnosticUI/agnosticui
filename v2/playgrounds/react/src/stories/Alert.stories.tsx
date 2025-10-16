import type { Meta, StoryObj } from "@storybook/react";
import { ReactAlert, type ReactAlertProps } from "agnosticui-core/alert/react";

const meta: Meta<ReactAlertProps> = {
  title: "AgnosticUI React/Alert",
  component: ReactAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: "select",
      options: [
        "default",
        "primary",
        "success",
        "info",
        "danger",
        "warning",
        "error",
      ],
      description: "The alert variant type",
    },
    bordered: {
      control: "boolean",
      description: "Adds a border around the alert",
    },
    rounded: {
      control: "boolean",
      description: "Applies rounded corners to the alert",
    },
    borderedLeft: {
      control: "boolean",
      description: "Adds a left border accent to the alert",
    },
  },
  args: {
    type: "info",
    bordered: false,
    rounded: false,
    borderedLeft: false,
    children: "This is a default alert.",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ReactAlert {...args} />,
};

export const Info: Story = {
  args: {
    type: "info",
    children: "This is an info alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const Success: Story = {
  args: {
    type: "success",
    children: "This is a success alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const Warning: Story = {
  args: {
    type: "warning",
    children: "This is a warning alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const Error: Story = {
  args: {
    type: "error",
    children: "This is an error alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const Primary: Story = {
  args: {
    type: "primary",
    children: "This is a primary alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const Bordered: Story = {
  args: {
    bordered: true,
    children: "This is a bordered alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const Rounded: Story = {
  args: {
    rounded: true,
    children: "This is a rounded alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const BorderedLeft: Story = {
  args: {
    borderedLeft: true,
    type: "warning",
    children: "This alert has a left border.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const AllModifiers: Story = {
  args: {
    type: "success",
    bordered: true,
    rounded: true,
    borderedLeft: true,
    children: "This alert has all modifiers applied.",
  },
  render: (args) => <ReactAlert {...args} />,
};
