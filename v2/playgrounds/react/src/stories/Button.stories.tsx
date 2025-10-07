import type { Meta, StoryObj } from '@storybook/react';
import { ReactButton } from 'agnosticui-core/react';
import { type ReactButtonProps } from 'agnosticui-core/button/react';

const meta: Meta<ReactButtonProps> = {
  title: 'Components/Button',
  component: ReactButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
    },
    shape: {
      control: 'select',
      options: ['', 'capsule', 'rounded', 'circle', 'square', 'rounded-square'],
      description: 'Shape of the button',
    },
    bordered: {
      control: 'boolean',
      description: 'Applies a bordered style with transparent background',
    },
    ghost: {
      control: 'boolean',
      description: 'Minimal button with transparent background',
    },
    link: {
      control: 'boolean',
      description: 'Link-style button with underline on hover',
    },
    grouped: {
      control: 'boolean',
      description: 'For buttons in a group, removes inner radii',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type for form behavior',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading state',
    },
    toggle: {
      control: 'boolean',
      description: 'Enables toggle mode with pressed state',
    },
    pressed: {
      control: 'boolean',
      description: 'Pressed state for toggle buttons',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    ariaDescribedby: {
      control: 'text',
      description: 'ARIA described-by for accessibility',
    },
    className: {
      control: 'text',
      description: 'CSS class for additional styling',
    },
    id: {
      control: 'text',
      description: 'ID for the button element',
    },
  },
  parameters: {
    actions: {
      handles: ['click', 'toggle'],
    },
    controls: {
      hideNoControlsWarning: false,
    },
    docs: {
      source: {
        state: 'open',
        // Explicitly format source to show ReactButton
        transform: (src: string) => {
          return src.replace(/<F\s/g, '<ReactButton ').replace(/<\/F>/g, '</ReactButton>');
        },
      },
    },
  },
} satisfies Meta<ReactButtonProps>;;

type Story = StoryObj<typeof meta>;

// Default story with all controls and debugging
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    shape: '',
    bordered: false,
    ghost: false,
    link: false,
    grouped: false,
    type: 'button',
    disabled: false,
    loading: false,
    toggle: false,
    pressed: false,
    ariaLabel: '',
    ariaDescribedby: '',
    className: '',
    id: '',
    onClick: () => console.log('Click'),
    onToggle: (detail) => console.log('Toggle:', detail),
  },
  render: (args) => {
    console.log('Default story args:', args); // Debug prop changes
    return <ReactButton {...args} > Controlled Button </ReactButton>;
  },
};

// Variant Stories
export const Primary: Story = {
  args: { variant: 'primary' },
  render: ({ variant }) => <ReactButton variant={variant}> Primary Button </ReactButton>,
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
  render: ({ variant }) => <ReactButton variant={variant}> Secondary Button </ReactButton>,
};

export const Success: Story = {
  args: { variant: 'success' },
  render: ({ variant }) => <ReactButton variant={variant}> Success Button </ReactButton>,
};

export const Warning: Story = {
  args: { variant: 'warning' },
  render: ({ variant }) => <ReactButton variant={variant}> Warning Button </ReactButton>,
};

export const Danger: Story = {
  args: { variant: 'danger' },
  render: ({ variant }) => <ReactButton variant={variant}> Danger Button </ReactButton>,
};

// Size Stories
export const ExtraSmall: Story = {
  args: { variant: 'primary', size: 'x-sm' },
  render: ({ variant, size }) => <ReactButton variant={variant} size={size} > X - Small Button</ReactButton>,
};

export const Small: Story = {
  args: { variant: 'primary', size: 'sm' },
  render: ({ variant, size }) => <ReactButton variant={variant} size={size} > Small Button</ReactButton>,
};

export const Medium: Story = {
  args: { variant: 'primary', size: 'md' },
  render: ({ variant, size }) => <ReactButton variant={variant} size={size} > Medium Button</ReactButton>,
};

export const Large: Story = {
  args: { variant: 'primary', size: 'lg' },
  render: ({ variant, size }) => <ReactButton variant={variant} size={size} > Large Button</ReactButton>,
};

export const ExtraLarge: Story = {
  args: { variant: 'primary', size: 'xl' },
  render: ({ variant, size }) => <ReactButton variant={variant} size={size} > Extra Large Button</ReactButton>,
};

// Shape Stories
export const Capsule: Story = {
  args: { variant: 'primary', shape: 'capsule' },
  render: ({ variant, shape }) => <ReactButton variant={variant} shape={shape} > Capsule Button</ReactButton>,
};

export const Rounded: Story = {
  args: { variant: 'primary', shape: 'rounded' },
  render: ({ variant, shape }) => <ReactButton variant={variant} shape={shape} > Rounded Button</ReactButton>,
};

export const Circle: Story = {
  args: { variant: 'primary', shape: 'circle' },
  render: ({ variant, shape }) => <ReactButton variant={variant} shape={shape} >★</ReactButton>,
};

export const Square: Story = {
  args: { variant: 'primary', shape: 'square' },
  render: ({ variant, shape }) => <ReactButton variant={variant} shape={shape} >★</ReactButton>,
};

export const RoundedSquare: Story = {
  args: { variant: 'primary', shape: 'rounded-square' },
  render: ({ variant, shape }) => <ReactButton variant={variant} shape={shape} >★</ReactButton>,
};

// Style Stories
export const BorderedPrimary: Story = {
  args: { variant: 'primary', bordered: true },
  render: ({ variant, bordered }) => <ReactButton variant={variant} bordered={bordered} > Bordered Primary</ReactButton>,
};

export const BorderedSecondary: Story = {
  args: { variant: 'secondary', bordered: true },
  render: ({ variant, bordered }) => <ReactButton variant={variant} bordered={bordered} > Bordered Secondary</ReactButton>,
};

export const GhostPrimary: Story = {
  args: { variant: 'primary', ghost: true },
  render: ({ variant, ghost }) => <ReactButton variant={variant} ghost={ghost} > Ghost Primary</ReactButton>,
};

export const GhostSuccess: Story = {
  args: { variant: 'success', ghost: true },
  render: ({ variant, ghost }) => <ReactButton variant={variant} ghost={ghost} > Ghost Success</ReactButton>,
};

export const LinkPrimary: Story = {
  args: { variant: 'primary', link: true },
  render: ({ variant, link }) => <ReactButton variant={variant} link={link} > Link Primary</ReactButton>,
};

export const Grouped: Story = {
  args: { variant: 'primary', grouped: true },
  render: ({ variant, grouped }) => (
    <div style={{ display: 'flex' }}>
      <ReactButton variant={variant} grouped={grouped} > First </ReactButton>
      < ReactButton variant={variant} grouped={grouped} > Middle </ReactButton>
      < ReactButton variant={variant} grouped={grouped} > Last </ReactButton>
    </div>
  ),
};

// State Stories
export const Disabled: Story = {
  args: { variant: 'primary', disabled: true },
  render: ({ variant, disabled }) => <ReactButton variant={variant} disabled={disabled} > Disabled Button</ReactButton>,
};

export const Loading: Story = {
  args: { variant: 'primary', loading: true },
  render: ({ variant, loading }) => <ReactButton variant={variant} loading={loading} > Loading Button</ReactButton>,
};

export const ToggleOn: Story = {
  args: {
    variant: 'primary',
    toggle: true,
    pressed: true,
    onToggle: (detail) => console.log('Toggle:', detail),
  },
  render: ({ variant, toggle, pressed, onToggle }) => (
    <ReactButton variant={variant} toggle={toggle} pressed={pressed} onToggle={onToggle} >
      Toggle On
    </ ReactButton >
  ),
};

export const ToggleOff: Story = {
  args: {
    variant: 'primary',
    toggle: true,
    pressed: false,
    onToggle: (detail) => console.log('Toggle:', detail),
  },
  render: ({ variant, toggle, pressed, onToggle }) => (
    <ReactButton variant={variant} toggle={toggle} pressed={pressed} onToggle={onToggle} >
      Toggle Off
    </ ReactButton >
  ),
};

// Type Stories
export const FormButton: Story = {
  args: { variant: 'primary', type: 'button' },
  render: ({ variant, type }) => (
    <form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
      <ReactButton variant={variant} type={type} > Button Type </ReactButton>
    </form>
  ),
};

export const FormSubmit: Story = {
  args: { variant: 'primary', type: 'submit' },
  render: ({ variant, type }) => (
    <form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
      <ReactButton variant={variant} type={type} > Submit Type </ReactButton>
    </form>
  ),
};

export const FormReset: Story = {
  args: { variant: 'primary', type: 'reset' },
  render: ({ variant, type }) => (
    <form onReset={() => console.log('Form reset')}>
      <input type="text" defaultValue="Test" />
      <ReactButton variant={variant} type={type} > Reset Type </ReactButton>
    </form>
  ),
};

// Accessibility Story
export const Accessible: Story = {
  args: { variant: 'primary', ariaLabel: 'Custom button label', ariaDescribedby: 'description-id' },
  render: ({ variant, ariaLabel, ariaDescribedby }) => (
    <div>
      <p id="description-id" > This button performs an action</ p >
      <ReactButton variant={variant} ariaLabel={ariaLabel} ariaDescribedby={ariaDescribedby} >
        Accessible Button
      </ReactButton>
    </div>
  ),
};

export default meta;
