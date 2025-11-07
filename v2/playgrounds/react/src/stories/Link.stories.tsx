
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ReactLink } from 'agnosticui-core/link/react';
import { action } from 'storybook/actions';
import { type ReactLinkProps } from 'agnosticui-core/link/react';

const meta: Meta<ReactLinkProps> = {
  title: 'AgnosticUI React/Link',
  component: ReactLink,
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
  parameters: {
    actions: {
      handles: ['onClick', 'focus', 'blur'],
    },
    controls: {
      hideNoControlsWarning: false,
    },
    docs: {
      source: {
        state: 'open',
        transform: (src: string) => {
          return src.replace(/<F\s/g, '<ReactLink ').replace(/<\/F>/g, '</ReactLink>');
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with all controls
export const Default: Story = {
  args: {
    href: '/example',
    variant: '',
    isButton: false,
    external: false,
    disabled: false,
    ariaLabel: '',
  },
  render: (args) => <ReactLink onClick={action('Default')} {...args}>Default Link</ReactLink>,
};

// Basic link
export const Basic: Story = {
  args: { href: '/home' },
  render: ({ href }) => <ReactLink onClick={action('Basic')} href={href}>Go to Home Page</ReactLink>,
};

// Variant Stories
export const Success: Story = {
  args: { href: '/success', variant: 'success' },
  render: ({ href, variant }) => (
    <ReactLink onClick={action('Success')} href={href} variant={variant}>
      Success Link
    </ReactLink>
  ),
};

export const Warning: Story = {
  args: { href: '/warning', variant: 'warning' },
  render: ({ href, variant }) => (
    <ReactLink onClick={action('Warning')} href={href} variant={variant}>
      Warning Link
    </ReactLink>
  ),
};

export const Danger: Story = {
  args: { href: '/danger', variant: 'danger' },
  render: ({ href, variant }) => (
    <ReactLink onClick={action('Danger')} href={href} variant={variant}>
      Danger Link
    </ReactLink>
  ),
};

// Button Style Links
export const ButtonStyle: Story = {
  args: { href: '/action', isButton: true },
  render: ({ href, isButton }) => (
    <ReactLink onClick={action('ButtonStyle')} href={href} isButton={isButton}>
      Button Style Link
    </ReactLink>
  ),
};

export const ButtonStyleSuccess: Story = {
  args: { href: '/action', isButton: true, variant: 'success' },
  render: ({ href, isButton, variant }) => (
    <ReactLink onClick={action('ButtonStyleSuccess')} href={href} isButton={isButton} variant={variant}>
      Success Button Link
    </ReactLink>
  ),
};

export const ButtonStyleWarning: Story = {
  args: { href: '/action', isButton: true, variant: 'warning' },
  render: ({ href, isButton, variant }) => (
    <ReactLink onClick={action('ButtonStyleWarning')} href={href} isButton={isButton} variant={variant}>
      Warning Button Link
    </ReactLink>
  ),
};

export const ButtonStyleDanger: Story = {
  args: { href: '/action', isButton: true, variant: 'danger' },
  render: ({ href, isButton, variant }) => (
    <ReactLink onClick={action('ButtonStyleDanger')} href={href} isButton={isButton} variant={variant}>
      Danger Button Link
    </ReactLink>
  ),
};

// External Link
export const External: Story = {
  args: { href: 'https://example.com', external: true },
  render: ({ href, external }) => (
    <ReactLink onClick={action('External')} href={href} external={external}>
      External Link (opens in new tab) →
    </ReactLink>
  ),
};

// Disabled State
export const Disabled: Story = {
  args: { href: '/disabled', disabled: true },
  render: ({ href, disabled }) => (
    <ReactLink onClick={action('Disabled')} href={href} disabled={disabled}>
      Disabled Link
    </ReactLink>
  ),
};

export const DisabledButton: Story = {
  args: { href: '/disabled', disabled: true, isButton: true, variant: 'success' },
  render: ({ href, disabled, isButton, variant }) => (
    <ReactLink onClick={action('DisabledButton')} href={href} disabled={disabled} isButton={isButton} variant={variant}>
      Disabled Button Link
    </ReactLink>
  ),
};

// Accessibility Story
export const Accessible: Story = {
  args: { href: '/accessible' },
  render: ({ href }) => (
    <div>
      <p>Links with icons should have descriptive aria-labels:</p>
      <ReactLink onClick={action('Accessible')} href={href} aria-label="Download PDF report">
        📄
      </ReactLink>
    </div>
  ),
};

// CSS Parts Customization Story
export const Customization: Story = {
  args: { href: '/custom', variant: 'success' },
  render: ({ href, variant }) => (
    <>
      <style>{`
        .custom-link::part(ag-link) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 2px solid #667eea;
          transition: all 0.3s ease;
        }
        .custom-link::part(ag-link):hover {
          border-bottom-width: 4px;
        }
      `}</style>
      <ReactLink className="custom-link" href={href} variant={variant}>
        Customized Link with Gradient
      </ReactLink>
    </>
  ),
};

// Multiple Links
export const MultipleLinks: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <ReactLink onClick={action('Link1')} href="/page1">Regular Link</ReactLink>
      </div>
      <div>
        <ReactLink onClick={action('Link2')} href="/page2" variant="success">Success Link</ReactLink>
      </div>
      <div>
        <ReactLink onClick={action('Link3')} href="/page3" variant="warning">Warning Link</ReactLink>
      </div>
      <div>
        <ReactLink onClick={action('Link4')} href="/page4" variant="danger">Danger Link</ReactLink>
      </div>
      <div>
        <ReactLink onClick={action('Link5')} href="https://example.com" external>External Link →</ReactLink>
      </div>
    </div>
  ),
};

// Multiple Button Links
export const MultipleButtonLinks: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <ReactLink onClick={action('Btn1')} href="/action1" isButton>Default Button</ReactLink>
      <ReactLink onClick={action('Btn2')} href="/action2" isButton variant="success">Success Button</ReactLink>
      <ReactLink onClick={action('Btn3')} href="/action3" isButton variant="warning">Warning Button</ReactLink>
      <ReactLink onClick={action('Btn4')} href="/action4" isButton variant="danger">Danger Button</ReactLink>
    </div>
  ),
};
