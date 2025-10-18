import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/alert';
import type { AlertProps } from 'agnosticui-core/alert';

const meta: Meta<AlertProps> = {
  title: 'AgnosticUI Lit/Alert',
  component: 'ag-alert',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'info', 'danger', 'warning', 'error'],
      description: 'The alert variant type',
    },
    bordered: {
      control: 'boolean',
      description: 'Adds a border around the alert',
    },
    rounded: {
      control: 'boolean',
      description: 'Applies rounded corners to the alert',
    },
    borderedLeft: {
      control: 'boolean',
      description: 'Adds a left border accent to the alert',
    },
  },
  args: {
    type: 'info',
    bordered: false,
    rounded: false,
    borderedLeft: false,
  },
};

export default meta;

type Story = StoryObj<AlertProps>;

export const Default: Story = {
  args: {
    type: 'info',
  },
  render: ({ type, bordered, rounded, borderedLeft }) => html`
    <ag-alert
      .type=${type}
      .bordered=${bordered}
      .rounded=${rounded}
      .borderedLeft=${borderedLeft}
    >
      This is a default alert.
    </ag-alert>
  `,
};

export const Info: Story = {
  args: {
    type: 'info',
  },
  render: ({ type }) => html`<ag-alert .type=${type}>This is an info alert.</ag-alert>`,
};

export const Success: Story = {
  args: {
    type: 'success',
  },
  render: ({ type }) => html`<ag-alert .type=${type}>This is a success alert.</ag-alert>`,
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
  render: ({ type }) => html`<ag-alert .type=${type}>This is a warning alert.</ag-alert>`,
};

export const Error: Story = {
  args: {
    type: 'error',
  },
  render: ({ type }) => html`<ag-alert .type=${type}>This is an error alert.</ag-alert>`,
};

export const Primary: Story = {
  args: {
    type: 'primary',
  },
  render: ({ type }) => html`<ag-alert .type=${type}>This is a primary alert.</ag-alert>`,
};

export const Bordered: Story = {
  args: {
    bordered: true,
  },
  render: ({ bordered }) => html`<ag-alert .bordered=${bordered}>This is a bordered alert.</ag-alert>`,
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
  render: ({ rounded }) => html`<ag-alert .rounded=${rounded}>This is a rounded alert.</ag-alert>`,
};

export const BorderedLeft: Story = {
  args: {
    borderedLeft: true,
    type: 'warning', // To make the left border visible
  },
  render: ({ borderedLeft, type }) => html`<ag-alert .borderedLeft=${borderedLeft} .type=${type}>This alert has a left border.</ag-alert>`,
};

export const AllModifiers: Story = {
  args: {
    type: 'success',
    bordered: true,
    rounded: true,
    borderedLeft: true,
  },
  render: ({ type, bordered, rounded, borderedLeft }) => html`
    <ag-alert
      .type=${type}
      .bordered=${bordered}
      .rounded=${rounded}
      .borderedLeft=${borderedLeft}
    >
      This alert has all modifiers applied.
    </ag-alert>
  `,
};

// CSS Parts customization
export const CSSPartsCustomization: Story = {
  render: () => html`
    <style>
      /* Gradient alert style */
      .custom-gradient-alert::part(ag-alert) {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1.5rem;
        border-radius: 12px;
        border: none;
        box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
        font-weight: 600;
      }

      /* Neon glow alert */
      .custom-neon-alert::part(ag-alert) {
        background: #1a1a2e;
        color: #0ff;
        border: 2px solid #0ff;
        padding: 1rem;
        border-radius: 8px;
        box-shadow:
          0 0 10px #0ff,
          0 0 20px #0ff,
          inset 0 0 10px rgba(0, 255, 255, 0.2);
        text-shadow: 0 0 5px #0ff;
      }

      /* Minimalist alert with accent */
      .custom-minimal-alert::part(ag-alert) {
        background: var(--ag-background-secondary);
        color: var(--ag-text-primary);
        padding: 1rem 1rem 1rem 1.5rem;
        border-left: 4px solid var(--ag-primary);
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      /* Card-style elevated alert */
      .custom-card-alert::part(ag-alert) {
        background: white;
        color: #333;
        padding: 1.5rem;
        border-radius: 16px;
        border: 1px solid #e5e7eb;
        box-shadow:
          0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .custom-card-alert::part(ag-alert):hover {
        transform: translateY(-2px);
        box-shadow:
          0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    </style>

    <div style="padding: 50px; max-width: 800px;">
      <h3 style="margin-top: 0;">Styled with CSS Shadow Parts</h3>
      <p style="margin-bottom: 2rem; color: #6b7280;">
        Alert can be customized using CSS Shadow Parts:
        <code>::part(ag-alert)</code>
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h4>Gradient Style</h4>
          <ag-alert class="custom-gradient-alert">
            🎨 This alert uses a vibrant gradient background with custom shadows
          </ag-alert>
        </div>

        <div>
          <h4>Neon Glow Effect</h4>
          <ag-alert class="custom-neon-alert">
            ⚡ Futuristic neon-themed alert with glowing effects
          </ag-alert>
        </div>

        <div>
          <h4>Minimal with Left Accent</h4>
          <ag-alert class="custom-minimal-alert">
            💡 Clean, minimal design with a colored left border accent
          </ag-alert>
        </div>

        <div>
          <h4>Elevated Card Style</h4>
          <ag-alert class="custom-card-alert">
            📋 Card-style alert with elevation and hover effect
          </ag-alert>
        </div>
      </div>
    </div>
  `,
};
