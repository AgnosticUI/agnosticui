// Icon.stories.ts
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
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
    <ag-icon .size=${size} .type=${type}>
      <!-- Slot for SVG or icon content -->
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    </ag-icon>
  `,
};

export const Sizes: Story = {
  render: ({ size }) => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center; padding: 2rem;">
      <ag-icon size="14">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
      <ag-icon size="16">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
      <ag-icon size="20">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
      <ag-icon size="24">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
      <ag-icon size="32">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
      <ag-icon size="48">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
    </div>
  `,
};

export const Types: Story = {
  render: ({ type }) => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center; padding: 2rem;">
      <ag-icon type="info">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
      <ag-icon type="success">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
      <ag-icon type="warning">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
      <ag-icon type="error">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
      <ag-icon type="action">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
    </div>
  `,
};

export const WithSlot: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; padding: 2rem;">
      <ag-icon size="20">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
      <ag-icon size="24" type="error">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 001-1v-4a1 1 0 00-1-1H9z"/>
        </svg>
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
      <ag-icon class="custom-icon-base" size="24">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
      <ag-icon class="custom-glow" size="32" type="info">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 001-1v-4a1 1 0 00-1-1H9z"/>
        </svg>
      </ag-icon>
      <ag-icon class="custom-minimal" size="20">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </ag-icon>
    </div>
  `,
};
