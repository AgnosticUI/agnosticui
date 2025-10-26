import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/badge';
import 'agnosticui-core/button';
import 'agnosticui-core/icon';
import type { BadgeProps } from 'agnosticui-core/badge';

const meta: Meta<BadgeProps> = {
  title: 'AgnosticUI Lit/Badge',
  component: 'ag-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "warning", "danger", "success", "neutral"],
      description: "The visual variant of the badge",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md"],
      description: "The size of the badge",
    },
    dot: {
      control: "boolean",
      description: "Render as a dot",
    }
  },
  args: {
    variant: "default",
    size: "md",
    dot: false,
  },
};

export default meta;
type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {},
  render: (args) => html`
    <ag-badge .variant=${args.variant} .size=${args.size} .dot=${args.dot}>
      Default Badge
    </ag-badge>
  `,
};

export const CountBadge: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-badge variant="success">1</ag-badge>
      <ag-badge variant="danger">99+</ag-badge>
      <ag-badge variant="info">23</ag-badge>
    </div>
  `,
};

export const DotBadge: Story = {
  args: { dot: true },
  render: (args) => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-badge .dot=${args.dot}></ag-badge>
      <ag-badge .dot=${args.dot} variant="info"></ag-badge>
      <ag-badge .dot=${args.dot} variant="success"></ag-badge>
      <ag-badge .dot=${args.dot} variant="warning"></ag-badge>
      <ag-badge .dot=${args.dot} variant="danger"></ag-badge>
    </div>
  `,
};

export const StatusBadge: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <ag-badge dot variant="success"></ag-badge>
        Online
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <ag-badge dot variant="warning"></ag-badge>
        Away
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <ag-badge dot variant="danger"></ag-badge>
        Busy
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <ag-badge dot variant="info"></ag-badge>
        Connecting
      </div>
    </div>
  `,
};

export const BadgeOnButton: Story = {
  render: () => html`
    <div style="margin-block-end: var(--ag-space-4);">Inside Button</div>
    <ag-button bordered variant="primary" shape="capsule" style="position: relative;">
      Inbox
      <ag-badge variant="danger" size="sm">99+</ag-badge>
    </ag-button>
    <div style="margin-block-start: var(--ag-space-6); margin-block-end: var(--ag-space-4);">Absolutely Positioned</div>
    <ag-button bordered variant="primary" shape="capsule" style="position: relative;">
      Inbox
      <ag-badge variant="danger" size="sm" style="position: absolute; top: -10px; right: -13px;">99+</ag-badge>
    </ag-button>
  `,
};

export const BadgeOnIcon: Story = {
  render: () => {
    const bellSvg = html`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
      </svg>
    `;
    return html`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <div style="position: relative; display: inline-block;">
          <ag-icon size="16">
            ${bellSvg}
          </ag-icon>
          <ag-badge
            variant="danger"
            size="xs"
            style="position: absolute; top: -6px; right: -7px;"
          >
            3
          </ag-badge>
        </div>
        <div style="position: relative; display: inline-block;">
          <ag-icon size="20">
            ${bellSvg}
          </ag-icon>
          <ag-badge
            variant="danger"
            size="sm"
            style="position: absolute; top: -7px; right: -9px;"
          >
            3
          </ag-badge>
        </div>
        <div style="position: relative; display: inline-block;">
          <ag-icon size="24">
            ${bellSvg}
          </ag-icon>
          <ag-badge
            variant="danger"
            size="md"
            style="position: absolute; top: -7px; right: -10px;"
          >
            3
          </ag-badge>
        </div>
      </div>
    `;
  },
};

export const CSSPartsCustomization: Story = {
  render: () => html`
    <style>
      .custom-gradient-badge::part(ag-badge) {
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-weight: 600;
        padding: 0.5rem 1rem;
      }

      .custom-outline-badge::part(ag-badge) {
        background: transparent;
        color: #764ba2;
        border: 2px solid #764ba2;
      }

      .custom-minimal-badge::part(ag-badge) {
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
