
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/link';
import type { LinkProps } from 'agnosticui-core/link';

const meta: Meta<LinkProps> = {
  title: 'AgnosticUI Lit/Link',
  component: 'ag-link',
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'URL the link points to',
    },
    variant: {
      control: 'select',
      options: ['', 'success', 'warning', 'danger'],
      description: 'Visual style variant of the link',
    },
    isButton: {
      control: 'boolean',
      description: 'Styles the link to look like a button',
    },
    external: {
      control: 'boolean',
      description: 'Indicates external link (adds rel and target attributes)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the link',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<LinkProps>;

export const Default: Story = {
  args: {
    href: '/example',
    variant: '',
    isButton: false,
    external: false,
    disabled: false,
    ariaLabel: '',
  },
  render: (args) => html`<ag-link
    href=${args.href}
    variant=${args.variant}
    ?isButton=${args.isButton}
    ?external=${args.external}
    ?disabled=${args.disabled}
    aria-label=${args.ariaLabel}
  >Default Link</ag-link>`,
};

export const Basic: Story = {
  args: { href: '/home' },
  render: (args) => html`<ag-link href=${args.href}>Go to Home Page</ag-link>`,
};

export const Success: Story = {
  args: { href: '/success', variant: 'success' },
  render: (args) => html`<ag-link href=${args.href} variant=${args.variant}>Success Link</ag-link>`,
};

export const Warning: Story = {
  args: { href: '/warning', variant: 'warning' },
  render: (args) => html`<ag-link href=${args.href} variant=${args.variant}>Warning Link</ag-link>`,
};

export const Danger: Story = {
  args: { href: '/danger', variant: 'danger' },
  render: (args) => html`<ag-link href=${args.href} variant=${args.variant}>Danger Link</ag-link>`,
};

export const ButtonStyle: Story = {
  args: { href: '/action', isButton: true },
  render: (args) => html`<ag-link href=${args.href} ?isButton=${args.isButton}>Button Style Link</ag-link>`,
};

export const ButtonStyleSuccess: Story = {
  args: { href: '/action', isButton: true, variant: 'success' },
  render: (args) => html`<ag-link href=${args.href} ?isButton=${args.isButton} variant=${args.variant}>Success Button Link</ag-link>`,
};

export const External: Story = {
  args: { href: 'https://example.com', external: true },
  render: (args) => html`<ag-link href=${args.href} ?external=${args.external}>External Link (opens in new tab) →</ag-link>`,
};

export const Disabled: Story = {
  args: { href: '/disabled', disabled: true },
  render: (args) => html`<ag-link href=${args.href} ?disabled=${args.disabled}>Disabled Link</ag-link>`,
};

export const DisabledButton: Story = {
  args: { href: '/disabled', disabled: true, isButton: true, variant: 'success' },
  render: (args) => html`<ag-link href=${args.href} ?disabled=${args.disabled} ?isButton=${args.isButton} variant=${args.variant}>Disabled Button Link</ag-link>`,
};

export const MultipleLinks: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div><ag-link href="/page1">Regular Link</ag-link></div>
      <div><ag-link href="/page2" variant="success">Success Link</ag-link></div>
      <div><ag-link href="/page3" variant="warning">Warning Link</ag-link></div>
      <div><ag-link href="/page4" variant="danger">Danger Link</ag-link></div>
      <div><ag-link href="https://example.com" external>External Link →</ag-link></div>
    </div>
  `,
};

export const MultipleButtonLinks: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ag-link href="/action1" isButton>Default Button</ag-link>
      <ag-link href="/action2" isButton variant="success">Success Button</ag-link>
      <ag-link href="/action3" isButton variant="warning">Warning Button</ag-link>
      <ag-link href="/action4" isButton variant="danger">Danger Button</ag-link>
    </div>
  `,
};
