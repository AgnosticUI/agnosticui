import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ReactMenuButton, ReactMenu, ReactMenuItem, ReactMenuSeparator } from 'agnosticui-core/react';
import { action } from 'storybook/actions';
import type { ReactMenuButtonProps } from 'agnosticui-core/menu/react';

const meta: Meta<ReactMenuButtonProps> = {
  title: 'AgnosticUI/Menu',
  component: ReactMenuButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['chevron', 'button', 'icon'],
      description: 'Visual style of the menu button',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the menu button',
    },
    buttonVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Button color variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the menu button',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    icon: {
      control: 'text',
      description: 'Icon to display',
    },
    unicode: {
      control: 'text',
      description: 'Unicode character for icon',
    },
    label: {
      control: 'text',
      description: 'Label text for the button',
    },
    onMenuOpen: {
      action: 'menu-open',
      description: 'Emitted when menu is opened',
    },
    onMenuClose: {
      action: 'menu-close',
      description: 'Emitted when menu is closed',
    },
  },
  args: {
    onMenuOpen: fn(),
    onMenuClose: fn(),
  },
  parameters: {
    actions: {
      handles: ['menu-open', 'menu-close', 'menu-select'],
    },
    controls: {
      hideNoControlsWarning: false,
    },
    docs: {
      source: {
        state: 'open',
      },
    },
  },
} satisfies Meta<ReactMenuButtonProps>;

type Story = StoryObj<typeof meta>;

export default meta;

// Default menu with basic items
export const Default: Story = {
  args: {
    variant: 'chevron',
    size: 'md',
    buttonVariant: 'primary',
    label: 'Menu',
    disabled: false,
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      {args.label || 'Menu'}
      <ReactMenu slot="menu" ariaLabel="Menu options">
        <ReactMenuItem value="edit" onMenuSelect={action('menu-select')}>
          Edit
        </ReactMenuItem>
        <ReactMenuItem value="copy" onMenuSelect={action('menu-select')}>
          Copy
        </ReactMenuItem>
        <ReactMenuItem value="paste" onMenuSelect={action('menu-select')}>
          Paste
        </ReactMenuItem>
        <ReactMenuSeparator />
        <ReactMenuItem value="delete" onMenuSelect={action('menu-select')}>
          Delete
        </ReactMenuItem>
      </ReactMenu>
    </ReactMenuButton>
  ),
};

// Button variant menu
export const ButtonVariant: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'primary',
    label: 'Actions',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      {args.label || 'Actions'}
      <ReactMenu slot="menu" ariaLabel="Action menu">
        <ReactMenuItem value="new" onMenuSelect={action('menu-select')}>
          New File
        </ReactMenuItem>
        <ReactMenuItem value="open" onMenuSelect={action('menu-select')}>
          Open File
        </ReactMenuItem>
        <ReactMenuItem value="save" onMenuSelect={action('menu-select')}>
          Save
        </ReactMenuItem>
        <ReactMenuSeparator />
        <ReactMenuItem value="exit" onMenuSelect={action('menu-select')}>
          Exit
        </ReactMenuItem>
      </ReactMenu>
    </ReactMenuButton>
  ),
};

// Icon variant menu
export const IconVariant: Story = {
  args: {
    variant: 'icon',
    size: 'md',
    buttonVariant: 'ghost',
    unicode: '⋮',
    ariaLabel: 'More options',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      <ReactMenu slot="menu" ariaLabel="More options menu">
        <ReactMenuItem value="settings" onMenuSelect={action('menu-select')}>
          Settings
        </ReactMenuItem>
        <ReactMenuItem value="profile" onMenuSelect={action('menu-select')}>
          Profile
        </ReactMenuItem>
        <ReactMenuSeparator />
        <ReactMenuItem value="logout" onMenuSelect={action('menu-select')}>
          Logout
        </ReactMenuItem>
      </ReactMenu>
    </ReactMenuButton>
  ),
};

// Size variations
export const SmallSize: Story = {
  args: {
    variant: 'button',
    size: 'sm',
    buttonVariant: 'secondary',
    label: 'Small Menu',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      {args.label || 'Small Menu'}
      <ReactMenu slot="menu" ariaLabel="Small menu">
        <ReactMenuItem value="item1" onMenuSelect={action('menu-select')}>
          Item 1
        </ReactMenuItem>
        <ReactMenuItem value="item2" onMenuSelect={action('menu-select')}>
          Item 2
        </ReactMenuItem>
      </ReactMenu>
    </ReactMenuButton>
  ),
};

export const LargeSize: Story = {
  args: {
    variant: 'button',
    size: 'lg',
    buttonVariant: 'primary',
    label: 'Large Menu',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      {args.label || 'Large Menu'}
      <ReactMenu slot="menu" ariaLabel="Large menu">
        <ReactMenuItem value="item1" onMenuSelect={action('menu-select')}>
          Item 1
        </ReactMenuItem>
        <ReactMenuItem value="item2" onMenuSelect={action('menu-select')}>
          Item 2
        </ReactMenuItem>
      </ReactMenu>
    </ReactMenuButton>
  ),
};

// Button variants
export const SecondaryButton: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'secondary',
    label: 'Secondary Menu',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      {args.label || 'Secondary Menu'}
      <ReactMenu slot="menu" ariaLabel="Secondary menu">
        <ReactMenuItem value="option1" onMenuSelect={action('menu-select')}>
          Option 1
        </ReactMenuItem>
        <ReactMenuItem value="option2" onMenuSelect={action('menu-select')}>
          Option 2
        </ReactMenuItem>
        <ReactMenuItem value="option3" onMenuSelect={action('menu-select')}>
          Option 3
        </ReactMenuItem>
      </ReactMenu>
    </ReactMenuButton>
  ),
};

export const DangerButton: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'danger',
    label: 'Danger Actions',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      {args.label || 'Danger Actions'}
      <ReactMenu slot="menu" ariaLabel="Danger actions menu">
        <ReactMenuItem value="clear" onMenuSelect={action('menu-select')}>
          Clear All
        </ReactMenuItem>
        <ReactMenuItem value="reset" onMenuSelect={action('menu-select')}>
          Reset Settings
        </ReactMenuItem>
        <ReactMenuSeparator />
        <ReactMenuItem value="delete-account" onMenuSelect={action('menu-select')}>
          Delete Account
        </ReactMenuItem>
      </ReactMenu>
    </ReactMenuButton>
  ),
};

// Menu with links
export const MenuWithLinks: Story = {
  args: {
    variant: 'chevron',
    size: 'md',
    buttonVariant: 'primary',
    label: 'Navigation',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      {args.label || 'Navigation'}
      <ReactMenu slot="menu" ariaLabel="Navigation menu">
        <ReactMenuItem value="home" href="#home" onMenuSelect={action('menu-select')}>
          Home
        </ReactMenuItem>
        <ReactMenuItem value="about" href="#about" onMenuSelect={action('menu-select')}>
          About
        </ReactMenuItem>
        <ReactMenuItem value="contact" href="#contact" onMenuSelect={action('menu-select')}>
          Contact
        </ReactMenuItem>
        <ReactMenuSeparator />
        <ReactMenuItem value="external" href="https://example.com" target="_blank" onMenuSelect={action('menu-select')}>
          External Link
        </ReactMenuItem>
      </ReactMenu>
    </ReactMenuButton>
  ),
};

// Disabled state
export const Disabled: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'primary',
    label: 'Disabled Menu',
    disabled: true,
  },
  render: (args) => (
    <ReactMenuButton {...args}>
      {args.label || 'Disabled Menu'}
      <ReactMenu slot="menu" ariaLabel="Disabled menu">
        <ReactMenuItem value="item1">Item 1</ReactMenuItem>
        <ReactMenuItem value="item2">Item 2</ReactMenuItem>
      </ReactMenu>
    </ReactMenuButton>
  ),
};

// Menu with disabled items
export const DisabledItems: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'primary',
    label: 'Mixed States',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      {args.label || 'Mixed States'}
      <ReactMenu slot="menu" ariaLabel="Menu with disabled items">
        <ReactMenuItem value="enabled1" onMenuSelect={action('menu-select')}>
          Enabled Item
        </ReactMenuItem>
        <ReactMenuItem value="disabled1" disabled onMenuSelect={action('menu-select')}>
          Disabled Item
        </ReactMenuItem>
        <ReactMenuItem value="enabled2" onMenuSelect={action('menu-select')}>
          Another Enabled
        </ReactMenuItem>
        <ReactMenuSeparator />
        <ReactMenuItem value="disabled2" disabled onMenuSelect={action('menu-select')}>
          Another Disabled
        </ReactMenuItem>
      </ReactMenu>
    </ReactMenuButton>
  ),
};

// Complex menu with multiple sections
export const ComplexMenu: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'primary',
    label: 'File',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      {args.label || 'File'}
      <ReactMenu slot="menu" ariaLabel="File menu">
        <ReactMenuItem value="new" onMenuSelect={action('menu-select')}>
          New
        </ReactMenuItem>
        <ReactMenuItem value="open" onMenuSelect={action('menu-select')}>
          Open...
        </ReactMenuItem>
        <ReactMenuItem value="recent" onMenuSelect={action('menu-select')}>
          Open Recent
        </ReactMenuItem>
        <ReactMenuSeparator />
        <ReactMenuItem value="save" onMenuSelect={action('menu-select')}>
          Save
        </ReactMenuItem>
        <ReactMenuItem value="save-as" onMenuSelect={action('menu-select')}>
          Save As...
        </ReactMenuItem>
        <ReactMenuSeparator />
        <ReactMenuItem value="export" onMenuSelect={action('menu-select')}>
          Export
        </ReactMenuItem>
        <ReactMenuItem value="import" onMenuSelect={action('menu-select')}>
          Import
        </ReactMenuItem>
        <ReactMenuSeparator />
        <ReactMenuItem value="print" onMenuSelect={action('menu-select')}>
          Print
        </ReactMenuItem>
        <ReactMenuSeparator />
        <ReactMenuItem value="close" onMenuSelect={action('menu-select')}>
          Close
        </ReactMenuItem>
      </ReactMenu>
    </ReactMenuButton>
  ),
};
