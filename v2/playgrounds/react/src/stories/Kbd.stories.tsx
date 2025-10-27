import type { Meta, StoryObj } from "@storybook/react";
import { ReactKbd, type KbdProps } from "agnosticui-core/kbd/react";
import React from "react";

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
  args: {
    variant: "default",
    size: "sm",
    bordered: true,
    background: false,
  },
};

export default meta;
type Story = StoryObj<StoryKbdProps>;

export const Default: Story = {
  args: {
    children: "⌘",
    variant: "default",
    size: "sm",
    bordered: true,
    background: false,
  },
  render: (args) => <ReactKbd {...args} />,
};

export const Variants: Story = {
  render: () => (
    <>
      <p>Default is size medium.</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <ReactKbd>⌘</ReactKbd>
        <ReactKbd>⌥</ReactKbd>
        <ReactKbd>⇧</ReactKbd>
        <ReactKbd>⌃</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd>cntrl + shift + del</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd variant="primary">⌘</ReactKbd>
        <ReactKbd variant="primary">⌥</ReactKbd>
        <ReactKbd variant="primary">⇧</ReactKbd>
        <ReactKbd variant="primary">⌃</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd variant="secondary">⌘</ReactKbd>
        <ReactKbd variant="secondary">⌥</ReactKbd>
        <ReactKbd variant="secondary">⇧</ReactKbd>
        <ReactKbd variant="secondary">⌃</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd variant="info">⌘</ReactKbd>
        <ReactKbd variant="info">⌥</ReactKbd>
        <ReactKbd variant="info">⇧</ReactKbd>
        <ReactKbd variant="info">⌃</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd variant="warning">⌘</ReactKbd>
        <ReactKbd variant="warning">⌥</ReactKbd>
        <ReactKbd variant="warning">⇧</ReactKbd>
        <ReactKbd variant="warning">⌃</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd variant="success">⌘</ReactKbd>
        <ReactKbd variant="success">⌥</ReactKbd>
        <ReactKbd variant="success">⇧</ReactKbd>
        <ReactKbd variant="success">⌃</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd variant="danger">⌘</ReactKbd>
        <ReactKbd variant="danger">⌥</ReactKbd>
        <ReactKbd variant="danger">⇧</ReactKbd>
        <ReactKbd variant="danger">⌃</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd variant="error">⌘</ReactKbd>
        <ReactKbd variant="error">⌥</ReactKbd>
        <ReactKbd variant="error">⇧</ReactKbd>
        <ReactKbd variant="error">⌃</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd background variant="primary">
          ⌘
        </ReactKbd>
        <ReactKbd background variant="primary">
          ⌥
        </ReactKbd>
        <ReactKbd background variant="primary">
          ⇧
        </ReactKbd>
        <ReactKbd background variant="primary">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd background variant="secondary">
          ⌘
        </ReactKbd>
        <ReactKbd background variant="secondary">
          ⌥
        </ReactKbd>
        <ReactKbd background variant="secondary">
          ⇧
        </ReactKbd>
        <ReactKbd background variant="secondary">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd background variant="info">
          ⌘
        </ReactKbd>
        <ReactKbd background variant="info">
          ⌥
        </ReactKbd>
        <ReactKbd background variant="info">
          ⇧
        </ReactKbd>
        <ReactKbd background variant="info">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd background variant="warning">
          ⌘
        </ReactKbd>
        <ReactKbd background variant="warning">
          ⌥
        </ReactKbd>
        <ReactKbd background variant="warning">
          ⇧
        </ReactKbd>
        <ReactKbd background variant="warning">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd background variant="success">
          ⌘
        </ReactKbd>
        <ReactKbd background variant="success">
          ⌥
        </ReactKbd>
        <ReactKbd background variant="success">
          ⇧
        </ReactKbd>
        <ReactKbd background variant="success">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd background variant="danger">
          ⌘
        </ReactKbd>
        <ReactKbd background variant="danger">
          ⌥
        </ReactKbd>
        <ReactKbd background variant="danger">
          ⇧
        </ReactKbd>
        <ReactKbd background variant="danger">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd background variant="error">
          ⌘
        </ReactKbd>
        <ReactKbd background variant="error">
          ⌥
        </ReactKbd>
        <ReactKbd background variant="error">
          ⇧
        </ReactKbd>
        <ReactKbd background variant="error">
          ⌃
        </ReactKbd>
      </div>
    </>
  ),
};

export const VariantSizeSmall: Story = {
  render: () => (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <ReactKbd size="sm">⌘</ReactKbd>
        <ReactKbd size="sm">⌥</ReactKbd>
        <ReactKbd size="sm">⇧</ReactKbd>
        <ReactKbd size="sm">⌃</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="md">cntrl + shift + del</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" variant="primary">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" variant="primary">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" variant="primary">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" variant="primary">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" variant="secondary">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" variant="secondary">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" variant="secondary">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" variant="secondary">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" variant="info">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" variant="info">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" variant="info">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" variant="info">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" variant="warning">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" variant="warning">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" variant="warning">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" variant="warning">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" variant="success">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" variant="success">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" variant="success">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" variant="success">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" variant="danger">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" variant="danger">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" variant="danger">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" variant="danger">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" variant="error">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" variant="error">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" variant="error">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" variant="error">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" background variant="primary">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" background variant="primary">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" background variant="primary">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" background variant="primary">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" background variant="secondary">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" background variant="secondary">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" background variant="secondary">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" background variant="secondary">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" background variant="info">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" background variant="info">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" background variant="info">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" background variant="info">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" background variant="warning">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" background variant="warning">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" background variant="warning">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" background variant="warning">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" background variant="success">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" background variant="success">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" background variant="success">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" background variant="success">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" background variant="danger">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" background variant="danger">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" background variant="danger">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" background variant="danger">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="sm" background variant="error">
          ⌘
        </ReactKbd>
        <ReactKbd size="sm" background variant="error">
          ⌥
        </ReactKbd>
        <ReactKbd size="sm" background variant="error">
          ⇧
        </ReactKbd>
        <ReactKbd size="sm" background variant="error">
          ⌃
        </ReactKbd>
      </div>
    </>
  ),
};

export const VariantSizeLarge: Story = {
  render: () => (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <ReactKbd size="lg">⌘</ReactKbd>
        <ReactKbd size="lg">⌥</ReactKbd>
        <ReactKbd size="lg">⇧</ReactKbd>
        <ReactKbd size="lg">⌃</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg">cntrl + shift + del</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" variant="primary">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" variant="primary">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" variant="primary">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" variant="primary">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" variant="secondary">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" variant="secondary">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" variant="secondary">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" variant="secondary">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" variant="info">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" variant="info">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" variant="info">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" variant="info">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" variant="warning">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" variant="warning">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" variant="warning">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" variant="warning">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" variant="success">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" variant="success">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" variant="success">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" variant="success">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" variant="danger">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" variant="danger">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" variant="danger">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" variant="danger">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" variant="error">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" variant="error">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" variant="error">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" variant="error">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" background variant="primary">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" background variant="primary">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" background variant="primary">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" background variant="primary">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" background variant="secondary">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" background variant="secondary">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" background variant="secondary">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" background variant="secondary">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" background variant="info">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" background variant="info">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" background variant="info">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" background variant="info">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" background variant="warning">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" background variant="warning">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" background variant="warning">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" background variant="warning">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" background variant="success">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" background variant="success">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" background variant="success">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" background variant="success">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" background variant="danger">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" background variant="danger">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" background variant="danger">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" background variant="danger">
          ⌃
        </ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg" background variant="error">
          ⌘
        </ReactKbd>
        <ReactKbd size="lg" background variant="error">
          ⌥
        </ReactKbd>
        <ReactKbd size="lg" background variant="error">
          ⇧
        </ReactKbd>
        <ReactKbd size="lg" background variant="error">
          ⌃
        </ReactKbd>
      </div>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <ReactKbd size="sm">⌘</ReactKbd>
        <ReactKbd size="sm">⌥</ReactKbd>
        <ReactKbd size="sm">⇧</ReactKbd>
        <ReactKbd size="sm">⌃</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="md">⌘</ReactKbd>
        <ReactKbd size="md">⌥</ReactKbd>
        <ReactKbd size="md">⇧</ReactKbd>
        <ReactKbd size="md">⌃</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <ReactKbd size="lg">⌘</ReactKbd>
        <ReactKbd size="lg">⌥</ReactKbd>
        <ReactKbd size="lg">⇧</ReactKbd>
        <ReactKbd size="lg">⌃</ReactKbd>
      </div>
    </>
  ),
};

export const Bordered: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <ReactKbd bordered={true}>⌘</ReactKbd>
      <ReactKbd bordered={true}>⌥</ReactKbd>
      <ReactKbd bordered={true}>⇧</ReactKbd>
      <ReactKbd bordered={true}>⌃</ReactKbd>
    </div>
  ),
};

export const Background: Story = {
  render: () => (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <p>With background:</p>
        <ReactKbd background={true}>⌘</ReactKbd>
        <ReactKbd background={true}>⌥</ReactKbd>
        <ReactKbd background={true}>⇧</ReactKbd>
        <ReactKbd background={true}>⌃</ReactKbd>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <p>Default is no background:</p>
        <ReactKbd background={false}>⌘</ReactKbd>
        <ReactKbd background={false}>⌥</ReactKbd>
        <ReactKbd background={false}>⇧</ReactKbd>
        <ReactKbd background={false}>⌃</ReactKbd>
      </div>
    </>
  ),
};
