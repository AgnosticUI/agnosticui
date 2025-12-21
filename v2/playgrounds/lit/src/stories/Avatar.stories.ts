import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/avatar";
import type { AvatarProps } from "agnosticui-core/avatar";

const meta: Meta<AvatarProps> = {
  title: "AgnosticUI Lit/Avatar",
  component: "ag-avatar",
  argTypes: {
    text: { control: "text", description: "Text content (initials)" },
    imgSrc: { control: "text", description: "Image source URL" },
    imgAlt: { control: "text", description: "Image alt text" },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Avatar size",
    },
    shape: {
      control: "select",
      options: ["circle", "square", "rounded"],
      description: "Avatar shape",
    },
    variant: {
      control: "select",
      options: [
        "default",
        "info",
        "warning",
        "success",
        "error",
        "transparent",
      ],
      description: "Color variant",
    },
    ariaLabel: { control: "text", description: "ARIA label" },
  },
  args: {
    text: "",
    imgSrc: "",
    imgAlt: "",
    size: "md",
    shape: "circle",
    variant: "default",
    ariaLabel: "",
  },
};

export default meta;
type Story = StoryObj<AvatarProps>;

export const Default: Story = {
  args: {
    text: "AB",
  },
  render: ({ text, imgSrc, imgAlt, size, shape, variant, ariaLabel }) => html`
    <ag-avatar
      .text=${text}
      .imgSrc=${imgSrc}
      .imgAlt=${imgAlt}
      .size=${size}
      .shape=${shape}
      .variant=${variant}
      .ariaLabel=${ariaLabel}
    ></ag-avatar>
  `,
};

export const TextInitials: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-avatar text="AB"></ag-avatar>
      <ag-avatar text="CD"></ag-avatar>
      <ag-avatar text="EF"></ag-avatar>
      <ag-avatar text="GH"></ag-avatar>
    </div>
  `,
};

export const WithImage: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-avatar
        img-src="https://i.pravatar.cc/150?img=1"
        img-alt="User 1"
      ></ag-avatar>
      <ag-avatar
        img-src="https://i.pravatar.cc/150?img=2"
        img-alt="User 2"
      ></ag-avatar>
      <ag-avatar
        img-src="https://i.pravatar.cc/150?img=3"
        img-alt="User 3"
      ></ag-avatar>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-avatar text="XS" size="xs"></ag-avatar>
      <ag-avatar text="SM" size="sm"></ag-avatar>
      <ag-avatar text="MD" size="md"></ag-avatar>
      <ag-avatar text="LG" size="lg"></ag-avatar>
      <ag-avatar text="XL" size="xl"></ag-avatar>
    </div>
  `,
};

export const Shapes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-avatar text="AB" shape="circle"></ag-avatar>
      <ag-avatar text="CD" shape="square"></ag-avatar>
      <ag-avatar text="EF" shape="rounded"></ag-avatar>
    </div>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-avatar text="DF" variant="default"></ag-avatar>
      <ag-avatar text="IN" variant="info"></ag-avatar>
      <ag-avatar text="WN" variant="warning"></ag-avatar>
      <ag-avatar text="SC" variant="success"></ag-avatar>
      <ag-avatar text="ER" variant="error"></ag-avatar>
    </div>
  `,
};

export const TransparentVariant: Story = {
  render: () => html`
    <div
      style="display: flex; gap: 1rem; align-items: center; background: #f0f0f0; padding: 2rem;"
    >
      <ag-avatar
        img-src="https://i.pravatar.cc/150?img=5"
        img-alt="Transparent avatar"
        variant="transparent"
      ></ag-avatar>
      <ag-avatar text="TR" variant="transparent"></ag-avatar>
    </div>
  `,
};

export const WithIcon: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-avatar>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
          />
        </svg>
      </ag-avatar>
      <ag-avatar size="lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
          />
        </svg>
      </ag-avatar>
    </div>
  `,
};

export const AvatarGroup: Story = {
  render: () => html`
    <style>
      ag-avatar-group ag-avatar::part(ag-avatar) {
        border: 2px solid white;
      }
    </style>
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Text Avatars</h4>
        <ag-avatar-group>
          <ag-avatar text="AB" variant="info" size="lg"></ag-avatar>
          <ag-avatar text="CD" variant="info" size="lg"></ag-avatar>
          <ag-avatar text="EF" variant="info" size="lg"></ag-avatar>
          <ag-avatar text="GH" variant="info" size="lg"></ag-avatar>
        </ag-avatar-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Mixed Content</h4>
        <ag-avatar-group>
          <ag-avatar text="AB" variant="info" size="lg"></ag-avatar>
          <ag-avatar text="RL" variant="info" size="lg"></ag-avatar>
          <ag-avatar size="lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
              />
            </svg>
          </ag-avatar>
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=10"
            img-alt="User 1"
            size="lg"
          ></ag-avatar>
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=11"
            img-alt="User 2"
            size="lg"
          ></ag-avatar>
        </ag-avatar-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Images</h4>
        <ag-avatar-group>
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=1"
            img-alt="User 1"
            size="lg"
          ></ag-avatar>
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=2"
            img-alt="User 2"
            size="lg"
          ></ag-avatar>
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=3"
            img-alt="User 3"
            size="lg"
          ></ag-avatar>
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=4"
            img-alt="User 4"
            size="lg"
          ></ag-avatar>
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=5"
            img-alt="User 5"
            size="lg"
          ></ag-avatar>
        </ag-avatar-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Different Sizes</h4>
        <ag-avatar-group>
          <ag-avatar text="SM" size="sm"></ag-avatar>
          <ag-avatar text="SM" size="sm"></ag-avatar>
          <ag-avatar text="SM" size="sm"></ag-avatar>
        </ag-avatar-group>
        <br />
        <ag-avatar-group>
          <ag-avatar text="MD" size="md"></ag-avatar>
          <ag-avatar text="MD" size="md"></ag-avatar>
          <ag-avatar text="MD" size="md"></ag-avatar>
        </ag-avatar-group>
        <br />
        <ag-avatar-group>
          <ag-avatar text="XL" size="xl"></ag-avatar>
          <ag-avatar text="XL" size="xl"></ag-avatar>
          <ag-avatar text="XL" size="xl"></ag-avatar>
        </ag-avatar-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">With Variants</h4>
        <ag-avatar-group>
          <ag-avatar text="DF" variant="default" size="lg"></ag-avatar>
          <ag-avatar text="IN" variant="info" size="lg"></ag-avatar>
          <ag-avatar text="WN" variant="warning" size="lg"></ag-avatar>
          <ag-avatar text="SC" variant="success" size="lg"></ag-avatar>
          <ag-avatar text="ER" variant="error" size="lg"></ag-avatar>
        </ag-avatar-group>
      </div>
    </div>
  `,
};

export const AvatarGroupCustomStyling: Story = {
  render: () => html`
    <style>
      ag-avatar-group ag-avatar::part(ag-avatar) {
        border: 2px solid white;
      }

      .custom-avatar-group::part(ag-avatar-group) {
        gap: 0.5rem;
      }

      .custom-avatar-group ag-avatar::part(ag-avatar) {
        border: 3px solid #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .custom-avatar-group ag-avatar:not(:first-child) {
        margin-inline-start: 0;
      }

      .stacked-group ag-avatar::part(ag-avatar) {
        border: 3px solid #10b981;
      }

      .stacked-group ag-avatar {
        transition: all 0.3s ease;
      }

      .stacked-group ag-avatar:hover {
        transform: translateY(-8px) scale(1.1);
        z-index: 100 !important;
      }
    </style>
    <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Custom Spacing (No Overlap)</h4>
        <ag-avatar-group class="custom-avatar-group">
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=20"
            img-alt="User 1"
            size="lg"
          ></ag-avatar>
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=21"
            img-alt="User 2"
            size="lg"
          ></ag-avatar>
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=22"
            img-alt="User 3"
            size="lg"
          ></ag-avatar>
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=23"
            img-alt="User 4"
            size="lg"
          ></ag-avatar>
        </ag-avatar-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Enhanced Hover Effects</h4>
        <ag-avatar-group class="stacked-group">
          <ag-avatar text="AB" variant="info" size="lg"></ag-avatar>
          <ag-avatar text="CD" variant="success" size="lg"></ag-avatar>
          <ag-avatar text="EF" variant="warning" size="lg"></ag-avatar>
          <ag-avatar text="GH" variant="error" size="lg"></ag-avatar>
        </ag-avatar-group>
      </div>
    </div>
  `,
};

export const CustomizedWithCSSParts: Story = {
  args: {
    text: "CP",
  },
  render: ({ text }) => html`
    <style>
      .custom-avatar::part(ag-avatar) {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: 3px solid #fff;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        font-weight: 700;
      }

      .custom-avatar-image::part(ag-avatar) {
        border: 4px solid #10b981;
        box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
      }

      .custom-avatar-text::part(ag-avatar-text) {
        font-family: "Courier New", monospace;
        letter-spacing: 2px;
      }
    </style>
    <div style="display: flex; gap: 2rem; align-items: center; padding: 2rem;">
      <ag-avatar class="custom-avatar" text="${text}"></ag-avatar>
      <ag-avatar
        class="custom-avatar-image"
        img-src="https://i.pravatar.cc/150?img=8"
        img-alt="Custom styled"
      ></ag-avatar>
      <ag-avatar
        class="custom-avatar custom-avatar-text"
        text="TX"
        size="lg"
      ></ag-avatar>
    </div>
  `,
};
