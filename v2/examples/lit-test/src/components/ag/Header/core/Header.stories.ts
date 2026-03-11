import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Header';

const meta: Meta = {
  title: 'AgnosticUI/Header',
  component: 'ag-header',
  tags: ['autodocs'],
  render: () => html`
    <ag-header>
      <a href="#" slot="logo" style="text-decoration: none; color: inherit; font-weight: 700; font-size: 1.25rem;">
        AgnosticUI
      </a>
      <nav>
        <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
          <li><a href="#home" style="text-decoration: none; color: inherit;">Home</a></li>
          <li><a href="#about" style="text-decoration: none; color: inherit;">About</a></li>
          <li><a href="#docs" style="text-decoration: none; color: inherit;">Docs</a></li>
        </ul>
      </nav>
    </ag-header>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const WithLogo: Story = {
  render: () => html`
    <ag-header>
      <a href="#" slot="logo" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: inherit;">
        <svg width="28" height="28" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="14" fill="var(--ag-primary, #6366f1)" />
          <text x="16" y="22" text-anchor="middle" fill="white" font-size="16" font-weight="bold">A</text>
        </svg>
        <span style="font-weight: 700; font-size: 1.25rem;">MyApp</span>
      </a>
      <nav>
        <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
          <li><a href="#home" style="text-decoration: none; color: inherit;">Home</a></li>
          <li><a href="#features" style="text-decoration: none; color: inherit;">Features</a></li>
          <li><a href="#pricing" style="text-decoration: none; color: inherit;">Pricing</a></li>
        </ul>
      </nav>
    </ag-header>
  `,
};
