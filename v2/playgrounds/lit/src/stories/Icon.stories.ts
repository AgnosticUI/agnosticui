// Icon.stories.ts
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { createElement, Star, Info, CheckCircle2, AlertTriangle, AlertCircle, Zap } from "lucide";
import 'agnosticui-core/icon';
import type { IconProps, IconSize, IconType } from 'agnosticui-core/icon';

const meta: Meta<IconProps> = {
  title: 'AgnosticUI Lit/Icon',
  component: 'ag-icon',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: "select",
      options: ['', '14', '16', '18', '20', '24', '32', '36', '40', '48', '56', '64'],
      description: "Size variant for the icon wrapper and SVG",
    },
    type: {
      control: "select",
      options: ['', 'info', 'action', 'success', 'warning', 'error'],
      description: "Semantic type for color theming the icon",
    },
  },
  args: {
    size: '16',
    type: '',
  },
};

export default meta;
type Story = StoryObj<IconProps>;

export const Default: Story = {
  render: ({ size, type }) => html`
    <ag-icon .size=${size} .type=${type} no-fill>
      ${createElement(Star)}
    </ag-icon>
  `,
};

export const Sizes: Story = {
  render: ({ size }) => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center; padding: 2rem;">
      <ag-icon size="14" no-fill>
        ${createElement(Star)}
      </ag-icon>
      <ag-icon size="16" no-fill>
        ${createElement(Star)}
      </ag-icon>
      <ag-icon size="20" no-fill>
        ${createElement(Star)}
      </ag-icon>
      <ag-icon size="24" no-fill>
        ${createElement(Star)}
      </ag-icon>
      <ag-icon size="32" no-fill>
        ${createElement(Star)}
      </ag-icon>
      <ag-icon size="48" no-fill>
        ${createElement(Star)}
      </ag-icon>
    </div>
  `,
};

export const Types: Story = {
  render: ({ type }) => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center; padding: 2rem;">
      <ag-icon type="info" no-fill>
        ${createElement(Info)}
      </ag-icon>
      <ag-icon type="success" no-fill>
        ${createElement(CheckCircle2)}
      </ag-icon>
      <ag-icon type="warning" no-fill>
        ${createElement(AlertTriangle)}
      </ag-icon>
      <ag-icon type="error" no-fill>
        ${createElement(AlertCircle)}
      </ag-icon>
      <ag-icon type="action" no-fill>
        ${createElement(Zap)}
      </ag-icon>
    </div>
  `,
};

export const WithSlot: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; padding: 2rem;">
      <ag-icon size="20" no-fill>
        ${createElement(Star)}
      </ag-icon>
      <ag-icon size="24" type="error" no-fill>
        ${createElement(AlertCircle)}
      </ag-icon>
    </div>
  `,
};

export const CustomizedWithCSSParts: Story = {
  render: () => html`
    <style>
      .custom-icon-base::part(icon-base) {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 8px;
        padding: 0.5rem;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
      }

      .custom-icon-base .icon-svg {
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
      }

      .custom-glow::part(icon-base) {
        filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.5));
      }

      .custom-minimal::part(icon-base) {
        border: 2px solid #e5e7eb;
        border-radius: 4px;
      }
    </style>
    <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;">
      <ag-icon class="custom-icon-base" size="24" no-fill>
        ${createElement(Star)}
      </ag-icon>
      <ag-icon class="custom-glow" size="32" type="info" no-fill>
        ${createElement(Info)}
      </ag-icon>
      <ag-icon class="custom-minimal" size="20" no-fill>
        ${createElement(Star)}
      </ag-icon>
    </div>
  `,
};
