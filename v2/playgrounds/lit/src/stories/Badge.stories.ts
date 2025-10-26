
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/badge';
import 'agnosticui-core/button';
import 'agnosticui-core/icon';
import type { BadgeVariant, BadgeShape } from 'agnosticui-core/badge';

type BadgeStoryArgs = {
  variant: BadgeVariant;
  shape: BadgeShape;
  isDot: boolean;
};

const meta: Meta<BadgeStoryArgs> = {
  title: 'AgnosticUI Lit/Badge',
  component: 'ag-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: "select",
      options: ["", "info", "warning", "error", "success"],
      description: "The visual variant of the badge",
    },
    shape: {
      control: "select",
      options: ["", "pill", "round", "circle"],
      description: "The shape of the badge",
    },
    isDot: {
      control: "boolean",
      description: "Render as a dot",
    }
  },
  args: {
    variant: "",
    shape: "",
    isDot: false,
  },
};

export default meta;
type Story = StoryObj<BadgeStoryArgs>;

export const Default: Story = {
  render: ({ variant, shape }) => html`
    <ag-badge .variant=${variant} .shape=${shape}>
      Default Badge
    </ag-badge>
  `,
};

export const CountBadge: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-badge variant="success">1</ag-badge>
      <ag-badge variant="error">99+</ag-badge>
      <ag-badge variant="info" shape="pill">23</ag-badge>
    </div>
  `,
};

export const DotBadge: Story = {
  args: { isDot: true },
  render: ({ isDot, variant }) => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-badge .isDot=${isDot}></ag-badge>
      <ag-badge .isDot=${isDot} .variant=${"info"}></ag-badge>
      <ag-badge .isDot=${isDot} .variant=${"success"}></ag-badge>
      <ag-badge .isDot=${isDot} .variant=${"warning"}></ag-badge>
      <ag-badge .isDot=${isDot} .variant=${"error"}></ag-badge>
    </div>
  `,
};

export const StatusBadge: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <ag-badge .isDot=${true} .variant=${"success"}>Online</ag-badge>
      <ag-badge .isDot=${true} .variant=${"warning"}>Away</ag-badge>
      <ag-badge .isDot=${true} .variant=${"error"}>Busy</ag-badge>
      <ag-badge .isDot=${true} .variant=${"info"}>Connecting</ag-badge>
    </div>
  `,
};

export const BadgeOnButton: Story = {
  render: () => html`
    <ag-button>
      Notifications
      <ag-badge variant="error" style="margin-left: 0.5rem;">99+</ag-badge>
    </ag-button>
  `,
};

export const BadgeOnIcon: Story = {
  render: () => html`
    <div style="position: relative; display: inline-block;">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
      </svg>
      <ag-badge
        variant="error"
        shape="circle"
        style="position: absolute; top: -5px; right: -5px;"
      >
        3
      </ag-badge>
    </div>
  `,
};

export const CSSPartsCustomization: Story = {
  render: () => html`
    <style>
      .custom-gradient-badge::part(badge) {
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-weight: 600;
        padding: 0.5rem 1rem;
      }

      .custom-outline-badge::part(badge) {
        background: transparent;
        color: #764ba2;
        border: 2px solid #764ba2;
      }

      .custom-minimal-badge::part(badge) {
        background: var(--ag-background-subtle);
        color: var(--ag-text-secondary);
        border-radius: 6px;
        font-size: 0.85rem;
        padding: 0.25rem 0.75rem;
      }
    </style>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap; padding: 1rem;">
      <ag-badge class="custom-gradient-badge">Gradient Badge</ag-badge>
      <ag-badge class="custom-outline-badge">Outline Badge</ag-badge>
      <ag-badge class="custom-minimal-badge">Minimal Badge</ag-badge>
    </div>
  `,
};
