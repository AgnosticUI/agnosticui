import type { Meta, StoryObj } from "@storybook/react";
import {
  ReactTag,
  type ReactTagVariant,
  type ReactTagShape,
} from "agnosticui-core/react";

type TagStoryArgs = {
  variant: ReactTagVariant;
  shape: ReactTagShape;
  isUppercase: boolean;
};

const meta: Meta<TagStoryArgs> = {
  title: "AgnosticUI React/Tag",
  component: ReactTag,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["", "info", "warning", "error", "success"],
      description: "The visual variant of the tag",
    },
    shape: {
      control: "select",
      options: ["", "pill", "round", "circle"],
      description: "The shape of the tag",
    },
    isUppercase: {
      control: "boolean",
      description: "Whether to render the text in uppercase",
    },
  },
  args: {
    variant: "",
    shape: "",
    isUppercase: false,
  },
};

export default meta;
type Story = StoryObj<TagStoryArgs>;

export const Default: Story = {
  render: ({ variant, shape, isUppercase }) => (
    <ReactTag variant={variant} shape={shape} isUppercase={isUppercase}>
      Default Tag
    </ReactTag>
  ),
};

export const Info: Story = {
  args: { variant: "info" },
  render: ({ variant }) => <ReactTag variant={variant}>Info Tag</ReactTag>,
};

export const Success: Story = {
  args: { variant: "success" },
  render: ({ variant }) => <ReactTag variant={variant}>Success Tag</ReactTag>,
};

export const Warning: Story = {
  args: { variant: "warning" },
  render: ({ variant }) => <ReactTag variant={variant}>Warning Tag</ReactTag>,
};

export const Error: Story = {
  args: { variant: "error" },
  render: ({ variant }) => <ReactTag variant={variant}>Error Tag</ReactTag>,
};

export const PillShape: Story = {
  args: { shape: "pill", variant: "info" }, // Corrected to valid variant
  render: ({ shape, variant }) => (
    <ReactTag shape={shape} variant={variant}>
      Pill Tag
    </ReactTag>
  ),
};

export const CircleShape: Story = {
  args: { shape: "circle", variant: "success" },
  render: ({ shape, variant }) => (
    <ReactTag shape={shape} variant={variant}>
      C
    </ReactTag>
  ),
};

export const Uppercase: Story = {
  args: { isUppercase: true, variant: "warning" },
  render: ({ isUppercase, variant }) => (
    <ReactTag isUppercase={isUppercase} variant={variant}>
      Uppercase Tag
    </ReactTag>
  ),
};

export const WithCloseSlotError: Story = {
  render: () => (
    <ReactTag variant="error">
      Deletable
      <button slot="close" aria-label="close">
        ✕
      </button>
    </ReactTag>
  ),
};

export const WithCloseSlotPrimary: Story = {
  render: () => (
    <ReactTag variant="info">
      {" "}
      {/* Using 'info' as proxy for 'primary' since not in TagVariant */}
      Primary
      <button slot="close" aria-label="close">
        ✕
      </button>
    </ReactTag>
  ),
};

export const WithCloseSlotSuccess: Story = {
  render: () => (
    <ReactTag variant="success">
      Success
      <button slot="close" aria-label="close">
        ✕
      </button>
    </ReactTag>
  ),
};

export const WithCloseSlotWarning: Story = {
  render: () => (
    <ReactTag variant="warning">
      Warning
      <button slot="close" aria-label="close">
        ✕
      </button>
    </ReactTag>
  ),
};

export const WithCloseSlotPrimaryPill: Story = {
  render: () => (
    <ReactTag variant="info" shape="pill">
      {" "}
      {/* Using 'info' as proxy */}
      Primary Pill Tag
      <button slot="close" aria-label="close">
        ✕
      </button>
    </ReactTag>
  ),
};

export const CSSPartsCustomization: Story = {
  render: () => (
    <>
      <style>{`
        .custom-gradient-tag::part(ag-tag-wrapper) {
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 600;
          padding: 0.5rem 1rem;
        }

        .custom-outline-tag::part(ag-tag-wrapper) {
          background: transparent;
          color: #764ba2;
          border: 2px solid #764ba2;
        }

        .custom-minimal-tag::part(ag-tag-wrapper) {
          background: var(--ag-background-subtle);
          color: var(--ag-text-secondary);
          border-radius: 6px;
          font-size: 0.85rem;
          padding: 0.25rem 0.75rem;
        }
      `}</style>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          padding: "1rem",
        }}
      >
        <ReactTag className="custom-gradient-tag">Gradient Tag</ReactTag>
        <ReactTag className="custom-outline-tag">Outline Tag</ReactTag>
        <ReactTag className="custom-minimal-tag">Minimal Tag</ReactTag>
      </div>
    </>
  ),
};
