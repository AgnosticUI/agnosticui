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
      options: ['', 'primary', 'success', 'warning', 'danger', 'monochrome'],
      description: 'Visual style variant of the link',
    },
    isButton: {
      control: 'boolean',
      description: 'Styles the link to look like a button',
    },
    buttonSize: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
      description: 'Size variant for button-style links (only applies when isButton is true)',
    },
    buttonShape: {
      control: 'select',
      options: ['', 'capsule', 'rounded', 'circle', 'square', 'rounded-square'],
      description: 'Shape variant for button-style links (only applies when isButton is true)',
    },
    buttonBordered: {
      control: 'boolean',
      description: 'Bordered style for button-style links (only applies when isButton is true)',
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
    buttonSize: 'md',
    buttonShape: '',
    buttonBordered: false,
    external: false,
    disabled: false,
    ariaLabel: '',
  },
  render: (args) => html`<ag-link
    href=${args.href}
    variant=${args.variant}
    ?isButton=${args.isButton}
    buttonSize=${args.buttonSize}
    buttonShape=${args.buttonShape}
    ?buttonBordered=${args.buttonBordered}
    ?external=${args.external}
    ?disabled=${args.disabled}
    aria-label=${args.ariaLabel}
  >Default Link</ag-link>`,
};

export const Basic: Story = {
  args: { href: '/home' },
  render: (args) => html`<ag-link href=${args.href}>Go to Home Page</ag-link>`,
};

export const Primary: Story = {
  args: { href: '/primary', variant: 'primary' },
  render: (args) => html`<ag-link href=${args.href} variant=${args.variant}>Primary Link</ag-link>`,
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

export const Monochrome: Story = {
  args: { href: '/monochrome', variant: 'monochrome' },
  render: (args) => html`<ag-link href=${args.href} variant=${args.variant}>Monochrome Link</ag-link>`,
};

export const ButtonStyle: Story = {
  args: { href: '/action', isButton: true },
  render: (args) => html`<ag-link href=${args.href} ?isButton=${args.isButton}>Button Style Link</ag-link>`,
};

export const ButtonStylePrimary: Story = {
  args: { href: '/action', isButton: true, variant: 'primary' },
  render: (args) => html`<ag-link href=${args.href} ?isButton=${args.isButton} variant=${args.variant}>Primary Button Link</ag-link>`,
};

export const ButtonStyleSuccess: Story = {
  args: { href: '/action', isButton: true, variant: 'success' },
  render: (args) => html`<ag-link href=${args.href} ?isButton=${args.isButton} variant=${args.variant}>Success Button Link</ag-link>`,
};

export const ButtonStyleWarning: Story = {
  args: { href: '/action', isButton: true, variant: 'warning' },
  render: (args) => html`<ag-link href=${args.href} ?isButton=${args.isButton} variant=${args.variant}>Warning Button Link</ag-link>`,
};

export const ButtonStyleDanger: Story = {
  args: { href: '/action', isButton: true, variant: 'danger' },
  render: (args) => html`<ag-link href=${args.href} ?isButton=${args.isButton} variant=${args.variant}>Danger Button Link</ag-link>`,
};

export const ButtonStyleMonochrome: Story = {
  args: { href: '/action', isButton: true, variant: 'monochrome' },
  render: (args) => html`<ag-link href=${args.href} ?isButton=${args.isButton} variant=${args.variant}>Monochrome Button Link</ag-link>`,
};

export const ButtonSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <ag-link href="/action" isButton buttonSize="x-sm">Extra Small</ag-link>
      <ag-link href="/action" isButton buttonSize="sm">Small</ag-link>
      <ag-link href="/action" isButton buttonSize="md">Medium</ag-link>
      <ag-link href="/action" isButton buttonSize="lg">Large</ag-link>
      <ag-link href="/action" isButton buttonSize="xl">Extra Large</ag-link>
    </div>
  `,
};

export const ButtonShapes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <ag-link href="/action" isButton>Default</ag-link>
      <ag-link href="/action" isButton buttonShape="rounded">Rounded</ag-link>
      <ag-link href="/action" isButton buttonShape="capsule">Capsule</ag-link>
      <ag-link href="/action" isButton buttonShape="circle">●</ag-link>
      <ag-link href="/action" isButton buttonShape="square">■</ag-link>
      <ag-link href="/action" isButton buttonShape="rounded-square">▢</ag-link>
    </div>
  `,
};

export const ButtonBordered: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ag-link href="/action" isButton buttonBordered variant="primary">
        Primary Bordered
      </ag-link>
      <ag-link href="/action" isButton buttonBordered variant="success">
        Success Bordered
      </ag-link>
      <ag-link href="/action" isButton buttonBordered variant="warning">
        Warning Bordered
      </ag-link>
      <ag-link href="/action" isButton buttonBordered variant="danger">
        Danger Bordered
      </ag-link>
      <ag-link href="/action" isButton buttonBordered variant="monochrome">
        Monochrome Bordered
      </ag-link>
    </div>
  `,
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
      <div><ag-link href="/page2" variant="primary">Primary Link</ag-link></div>
      <div><ag-link href="/page3" variant="success">Success Link</ag-link></div>
      <div><ag-link href="/page4" variant="warning">Warning Link</ag-link></div>
      <div><ag-link href="/page5" variant="danger">Danger Link</ag-link></div>
      <div><ag-link href="/page6" variant="monochrome">Monochrome Link</ag-link></div>
      <div><ag-link href="https://example.com" external>External Link →</ag-link></div>
    </div>
  `,
};

export const MultipleButtonLinks: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ag-link href="/action1" isButton>Default Button</ag-link>
      <ag-link href="/action2" isButton variant="primary">Primary Button</ag-link>
      <ag-link href="/action3" isButton variant="success">Success Button</ag-link>
      <ag-link href="/action4" isButton variant="warning">Warning Button</ag-link>
      <ag-link href="/action5" isButton variant="danger">Danger Button</ag-link>
      <ag-link href="/action6" isButton variant="monochrome">Monochrome Button</ag-link>
    </div>
  `,
};

export const ComplexButtons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4>Large Capsule Buttons</h4>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem;">
          <ag-link href="/action" isButton buttonSize="lg" buttonShape="capsule" variant="primary">
            Primary Capsule
          </ag-link>
          <ag-link href="/action" isButton buttonSize="lg" buttonShape="capsule" variant="success">
            Success Capsule
          </ag-link>
        </div>
      </div>
      
      <div>
        <h4>Bordered Button Variants</h4>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem;">
          <ag-link href="/action" isButton buttonBordered variant="primary">
            Primary Outlined
          </ag-link>
          <ag-link href="/action" isButton buttonBordered variant="success" buttonSize="lg">
            Large Success Outlined
          </ag-link>
          <ag-link href="/action" isButton buttonBordered variant="danger" buttonShape="capsule">
            Danger Capsule Outlined
          </ag-link>
        </div>
      </div>
      
      <div>
        <h4>Icon Buttons (Circle & Square Shapes)</h4>
        <div style="display: flex; gap: 1rem; align-items: center; margin-top: 0.5rem;">
          <ag-link href="/action" isButton buttonShape="circle" variant="primary" aria-label="Add">
            +
          </ag-link>
          <ag-link href="/action" isButton buttonShape="circle" variant="danger" aria-label="Delete">
            ×
          </ag-link>
          <ag-link href="/action" isButton buttonShape="square" variant="success" aria-label="Check">
            ✓
          </ag-link>
          <ag-link href="/action" isButton buttonShape="rounded-square" variant="warning" aria-label="Warning">
            !
          </ag-link>
        </div>
      </div>
    </div>
  `,
};
