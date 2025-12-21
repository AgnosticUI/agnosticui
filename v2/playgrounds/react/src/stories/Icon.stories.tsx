import type { Meta, StoryObj } from "@storybook/react";
import { Star, Info, CheckCircle2, AlertTriangle, AlertCircle, Zap } from "lucide-react";
import { ReactIcon, type ReactIconProps } from "agnosticui-core/icon/react";

const meta: Meta<typeof ReactIcon> = {
  title: "AgnosticUI React/Icon",
  component: ReactIcon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [
        "",
        "14",
        "16",
        "18",
        "20",
        "24",
        "32",
        "36",
        "40",
        "48",
        "56",
        "64",
      ],
      description: "Size variant for the icon wrapper and SVG",
    },
    type: {
      control: "select",
      options: ["", "info", "action", "success", "warning", "error"],
      description: "Semantic type for color theming the icon",
    },
  },
  args: {
    size: "16",
    type: "",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: ReactIconProps) => (
    <ReactIcon {...args} noFill>
      <Star />
    </ReactIcon>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <ReactIcon size="14" noFill><Star /></ReactIcon>
      <ReactIcon size="16" noFill><Star /></ReactIcon>
      <ReactIcon size="20" noFill><Star /></ReactIcon>
      <ReactIcon size="24" noFill><Star /></ReactIcon>
      <ReactIcon size="32" noFill><Star /></ReactIcon>
      <ReactIcon size="48" noFill><Star /></ReactIcon>
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <ReactIcon type="info" noFill><Info /></ReactIcon>
      <ReactIcon type="success" noFill><CheckCircle2 /></ReactIcon>
      <ReactIcon type="warning" noFill><AlertTriangle /></ReactIcon>
      <ReactIcon type="error" noFill><AlertCircle /></ReactIcon>
      <ReactIcon type="action" noFill><Zap /></ReactIcon>
    </div>
  ),
};

export const WithSlot: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
      }}
    >
      <ReactIcon size="20" noFill><Star /></ReactIcon>
      <ReactIcon size="24" type="error" noFill><AlertCircle /></ReactIcon>
    </div>
  ),
};

export const CustomizedWithCSSParts: Story = {
  render: () => (
    <>
      <style>{`
        .custom-icon-base::part(icon-base) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 8px;
          padding: 0.5rem;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .custom-icon-base svg {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .custom-glow::part(icon-base) {
          filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.5));
        }

        .custom-minimal::part(icon-base) {
          border: 2px solid #e5e7eb;
          border-radius: 4px;
        }
      `}</style>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        <ReactIcon className="custom-icon-base" size="24" noFill>
          <Star />
        </ReactIcon>
        <ReactIcon className="custom-glow" size="32" type="info" noFill>
          <Info />
        </ReactIcon>
        <ReactIcon className="custom-minimal" size="20" noFill>
          <Star />
        </ReactIcon>
      </div>
    </>
  ),
};
