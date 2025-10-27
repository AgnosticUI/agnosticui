import type { Meta, StoryObj } from "@storybook/react";
import { ReactKbd, type KbdProps } from "agnosticui-core/kbd/react";
import React from "react"; // Import React for typing children

type StoryKbdProps = KbdProps & {
  children?: React.ReactNode;
};

const meta: Meta<StoryKbdProps> = {
  title: "AgnosticUI React/Kbd",
  component: ReactKbd,
  argTypes: {
    children: {
      control: "text",
      description:
        "The content to display inside the Kbd component (e.g., a key symbol)",
    },
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "info",
        "warning",
        "success",
        "danger",
        "error",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    bordered: {
      control: "boolean",
    },
    background: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<StoryKbdProps>;

export const Default: Story = {
  args: {
    children: "⌘",
  },
  render: (args) => <ReactKbd {...args} />,
};

export const Variants: Story = {
  render: () => (
    <>
      <ReactKbd>⌘</ReactKbd>
      <ReactKbd>cntrl + shift + del</ReactKbd>
      <ReactKbd variant="primary">⌘</ReactKbd>
      <ReactKbd variant="secondary">⌘</ReactKbd>
      <ReactKbd variant="info">⌘</ReactKbd>
      <ReactKbd variant="warning">⌘</ReactKbd>
      <ReactKbd variant="success">⌘</ReactKbd>
      <ReactKbd variant="danger">⌘</ReactKbd>
      <ReactKbd variant="error">⌘</ReactKbd>
      <ReactKbd background variant="primary">
        ⌘
      </ReactKbd>
      <ReactKbd background variant="secondary">
        ⌘
      </ReactKbd>
      <ReactKbd background variant="info">
        ⌘
      </ReactKbd>
      <ReactKbd background variant="warning">
        ⌘
      </ReactKbd>
      <ReactKbd background variant="success">
        ⌘
      </ReactKbd>
      <ReactKbd background variant="danger">
        ⌘
      </ReactKbd>
      <ReactKbd background variant="error">
        ⌘
      </ReactKbd>
    </>
  ),
};

export const VariantSizeMedium: Story = {
  render: () => (
    <>
      <ReactKbd size="md">⌘</ReactKbd>
      <ReactKbd size="md">cntrl + shift + del</ReactKbd>
      <ReactKbd size="md" variant="primary">
        ⌘
      </ReactKbd>
      <ReactKbd size="md" variant="secondary">
        ⌘
      </ReactKbd>
      <ReactKbd size="md" variant="info">
        ⌘
      </ReactKbd>
      <ReactKbd size="md" variant="warning">
        ⌘
      </ReactKbd>
      <ReactKbd size="md" variant="success">
        ⌘
      </ReactKbd>
      <ReactKbd size="md" variant="danger">
        ⌘
      </ReactKbd>
      <ReactKbd size="md" variant="error">
        ⌘
      </ReactKbd>
      <ReactKbd size="md" background variant="primary">
        ⌘
      </ReactKbd>
      <ReactKbd size="md" background variant="secondary">
        ⌘
      </ReactKbd>
      <ReactKbd size="md" background variant="info">
        ⌘
      </ReactKbd>
      <ReactKbd size="md" background variant="warning">
        ⌘
      </ReactKbd>
      <ReactKbd size="md" background variant="success">
        ⌘
      </ReactKbd>
      <ReactKbd size="md" background variant="danger">
        ⌘
      </ReactKbd>
      <ReactKbd size="md" background variant="error">
        ⌘
      </ReactKbd>
    </>
  ),
};

export const VariantSizeLarge: Story = {
  render: () => (
    <>
      <ReactKbd size="lg">⌘</ReactKbd>
      <ReactKbd size="lg">cntrl + shift + del</ReactKbd>
      <ReactKbd size="lg" variant="primary">
        ⌘
      </ReactKbd>
      <ReactKbd size="lg" variant="secondary">
        ⌘
      </ReactKbd>
      <ReactKbd size="lg" variant="info">
        ⌘
      </ReactKbd>
      <ReactKbd size="lg" variant="warning">
        ⌘
      </ReactKbd>
      <ReactKbd size="lg" variant="success">
        ⌘
      </ReactKbd>
      <ReactKbd size="lg" variant="danger">
        ⌘
      </ReactKbd>
      <ReactKbd size="lg" variant="error">
        ⌘
      </ReactKbd>
      <ReactKbd size="lg" background variant="primary">
        ⌘
      </ReactKbd>
      <ReactKbd size="lg" background variant="secondary">
        ⌘
      </ReactKbd>
      <ReactKbd size="lg" background variant="info">
        ⌘
      </ReactKbd>
      <ReactKbd size="lg" background variant="warning">
        ⌘
      </ReactKbd>
      <ReactKbd size="lg" background variant="success">
        ⌘
      </ReactKbd>
      <ReactKbd size="lg" background variant="danger">
        ⌘
      </ReactKbd>
      <ReactKbd size="lg" background variant="error">
        ⌘
      </ReactKbd>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <ReactKbd size="sm">⌘</ReactKbd>
      <ReactKbd size="md">⌘</ReactKbd>
      <ReactKbd size="lg">⌘</ReactKbd>
    </>
  ),
};

export const Bordered: Story = {
  render: () => (
    <>
      <ReactKbd bordered={true}>⌘</ReactKbd>
      <ReactKbd bordered={false}>⌘</ReactKbd>
    </>
  ),
};

export const Background: Story = {
  render: () => (
    <>
      <ReactKbd background={true}>⌘</ReactKbd>
      <ReactKbd background={false}>⌘</ReactKbd>
    </>
  ),
};
