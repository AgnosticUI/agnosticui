import type { Meta, StoryObj } from "@storybook/react";
import {
  ReactProgress,
  type ProgressProps,
} from "agnosticui-core/progress/react";

const meta: Meta<ProgressProps> = {
  title: "AgnosticUI React/Progress",
  component: ReactProgress,
  argTypes: {
    value: {
      control: "number",
    },
    max: {
      control: "number",
    },
    label: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<ProgressProps>;

export const Default: Story = {
  args: {
    label: "Default progress",
  },
};

export const WithValue: Story = {
  args: {
    label: "Progress with value",
    value: 50,
  },
};

export const CustomMax: Story = {
  args: {
    label: "Progress with custom max",
    value: 150,
    max: 200,
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Indeterminate progress",
  },
};
