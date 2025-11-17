import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ReactMenuButton, ReactMenu, ReactMenuItem, ReactMenuSeparator } from 'agnosticui-core/react';
import { action } from 'storybook/actions';
import type { MenuButtonProps as ReactMenuButtonProps } from 'agnosticui-core/menu/react';
import type { ButtonProps } from 'agnosticui-core/button/react';
import React from 'react';

const meta: Meta<ReactMenuButtonProps> = {
  title: 'AgnosticUI React/Menu',
  component: ReactMenuButton,
  tags: ['autodocs'],
  argTypes: {
    menuVariant: {
      control: 'select',
      options: ['chevron', 'button', 'icon'],
      description: 'The structural variant of the menu button.',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'monochrome', ''] as ButtonProps['variant'][],
      description: 'The color variant, inherited from AgnosticUI Button.',
    },
    size: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'] as ButtonProps['size'][],
      description: 'The size of the button, inherited from AgnosticUI Button.',
    },
    bordered: {
      control: 'boolean',
      description: 'Use bordered button style. Inherited from AgnosticUI Button.',
    },
    ghost: {
      control: 'boolean',
      description: 'Use ghost button style. Inherited from AgnosticUI Button.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the menu button',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    unicode: {
      control: 'text',
      description: 'Unicode character for icon',
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
    menuVariant: 'chevron',
    size: 'md',
    disabled: false,
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      Menu
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
    menuVariant: 'button',
    size: 'md',
    variant: 'primary',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      Actions
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
    menuVariant: 'icon',
    size: 'md',
    ghost: true,
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

// Icon button variant menu
const HamburgerIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const IconButtonVariant: Story = {
  args: {
    menuVariant: 'icon',
    size: 'md',
    ariaLabel: 'More options',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p>
          Icon buttons with <code>ghost</code> (no border)
        </p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <ReactMenuButton {...args} ghost onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
            <HamburgerIcon size={24} />
            <ReactMenu slot="menu" ariaLabel="More options menu">
              <ReactMenuItem value="settings">Settings</ReactMenuItem>
              <ReactMenuItem value="profile">Profile</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="logout">Logout</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
          <ReactMenuButton {...args} ghost size="sm" ariaLabel="More options (small)">
            <HamburgerIcon size={18} />
            <ReactMenu slot="menu" ariaLabel="More options menu">
              <ReactMenuItem value="settings">Settings</ReactMenuItem>
              <ReactMenuItem value="profile">Profile</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="logout">Logout</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
          <ReactMenuButton {...args} ghost size="x-sm" ariaLabel="More options (extra small)">
            <HamburgerIcon size={14} />
            <ReactMenu slot="menu" ariaLabel="More options menu">
              <ReactMenuItem value="settings">Settings</ReactMenuItem>
              <ReactMenuItem value="profile">Profile</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="logout">Logout</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>
      </div>
      <div>
        <p>
          Icon buttons with <code>bordered</code>
        </p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <ReactMenuButton
            {...args}
            bordered
            onMenuOpen={action('menu-open')}
            onMenuClose={action('menu-close')}
          >
            <HamburgerIcon size={24} />
            <ReactMenu slot="menu" ariaLabel="More options menu">
              <ReactMenuItem value="settings">Settings</ReactMenuItem>
              <ReactMenuItem value="profile">Profile</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="logout">Logout</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
          <ReactMenuButton {...args} bordered size="sm" ariaLabel="More options (small)">
            <HamburgerIcon size={18} />
            <ReactMenu slot="menu" ariaLabel="More options menu">
              <ReactMenuItem value="settings">Settings</ReactMenuItem>
              <ReactMenuItem value="profile">Profile</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="logout">Logout</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
          <ReactMenuButton {...args} bordered size="x-sm" ariaLabel="More options (extra small)">
            <HamburgerIcon size={14} />
            <ReactMenu slot="menu" ariaLabel="More options menu">
              <ReactMenuItem value="settings">Settings</ReactMenuItem>
              <ReactMenuItem value="profile">Profile</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="logout">Logout</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>
      </div>
    </div>
  ),
};

// Size variations
export const SmallSize: Story = {
  args: {
    menuVariant: 'button',
    size: 'sm',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      Small Menu
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
    menuVariant: 'button',
    size: 'lg',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      Large Menu
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
    menuVariant: 'button',
    size: 'md',
    variant: 'secondary',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      Secondary Menu
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
    menuVariant: 'button',
    size: 'md',
    variant: 'danger',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      Danger Actions
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
    menuVariant: 'chevron',
    size: 'md',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      Navigation
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
    menuVariant: 'button',
    size: 'md',
    disabled: true,
  },
  render: (args) => (
    <ReactMenuButton {...args}>
      Disabled Menu
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
    menuVariant: 'button',
    size: 'md',
  },
  render: (args) => (
    <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
      Mixed States
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
    menuVariant: 'button',
    size: 'md',
  },
  render: (args) => (
    <ReactMenuButton
      {...args}
      onMenuOpen={action('menu-open')}
      onMenuClose={action('menu-close')}
    >
      File
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

// Callback Props Pattern (React)
export const CallbackPropsPattern: Story = {
  args: {
    menuVariant: 'chevron',
    size: 'md',
  },
  render: (args) => (
    <div style={{ padding: '50px' }}>
      <p style={{ marginBottom: '1rem' }}>
        <strong>React Callback Props:</strong>
        <br />
        This demonstrates React event handlers for Menu components.
        <br />
        All events use the onEventName callback pattern and log to the Actions panel below.
      </p>
      <ReactMenuButton
        {...args}
        onMenuOpen={(e) => action('menu-open')(e.detail)}
        onMenuClose={(e) => action('menu-close')(e.detail)}
        onClick={() => action('click')('Button clicked')}
        onFocus={() => action('focus')('Button focused')}
        onBlur={() => action('blur')('Button blurred')}
      >
        Interactive Menu
        <ReactMenu slot="menu" ariaLabel="Interactive menu">
          <ReactMenuItem
            value="item1"
            onClick={() => action('item-click')('Item 1 clicked')}
            onMenuSelect={(e) => action('menu-select')(e.detail)}
          >
            Item 1 (Select me!)
          </ReactMenuItem>
          <ReactMenuItem
            value="item2"
            onClick={() => action('item-click')('Item 2 clicked')}
            onMenuSelect={(e) => action('menu-select')(e.detail)}
          >
            Item 2
          </ReactMenuItem>
          <ReactMenuSeparator />
          <ReactMenuItem
            value="item3"
            onClick={() => action('item-click')('Item 3 clicked')}
            onMenuSelect={(e) => action('menu-select')(e.detail)}
          >
            Item 3
          </ReactMenuItem>
        </ReactMenu>
      </ReactMenuButton>
    </div>
  ),
};

// Monochrome selected variant
export const MonochromeSelected: Story = {
  args: {
    menuVariant: 'chevron',
    size: 'md',
  },
  render: (args) => (
    <div style={{ padding: '50px' }}>
      <ReactMenuButton {...args} onMenuOpen={action('menu-open')} onMenuClose={action('menu-close')}>
        Monochrome Menu
        <ReactMenu slot="menu" ariaLabel="Monochrome menu">
          <ReactMenuItem value="option1" variant="monochrome" onMenuSelect={action('menu-select')}>
            Option 1
          </ReactMenuItem>
          <ReactMenuItem value="option2" variant="monochrome" selected onMenuSelect={action('menu-select')}>
            Option 2 (Selected)
          </ReactMenuItem>
          <ReactMenuItem value="option3" variant="monochrome" onMenuSelect={action('menu-select')}>
            Option 3
          </ReactMenuItem>
        </ReactMenu>
      </ReactMenuButton>
    </div>
  ),
};

// CSS Parts Customization with styling
export const CSSPartsCustomization: Story = {
  render: () => (
    <>
      <style>
        {`
          .custom-menu-button ag-button::part(ag-button) {
            background-color: #4a5568;
            color: white;
            border: 2px solid #2d3748;
            border-radius: 8px;
          }
          .custom-menu-button .label {
            font-weight: bold;
          }
          .custom-menu-button .chevron-icon {
            color: #a0aec0;
          }
          .custom-menu::part(ag-menu) {
            background-color: #2d3748;
            border: 1px solid #4a5568;
            border-radius: 8px;
          }
          .custom-menu::part(ag-menu-item) {
            color: #e2e8f0;
          }
          .custom-menu::part(ag-menu-item):hover {
            background-color: #4a5568;
          }
          .custom-menu::part(ag-menu-separator) {
            background-color: #4a5568;
          }
        `}
      </style>
      <ReactMenuButton className="custom-menu-button">
        Custom Menu
        <ReactMenu slot="menu" className="custom-menu" ariaLabel="Custom Menu">
          <ReactMenuItem value="one">Option 1</ReactMenuItem>
          <ReactMenuItem value="two">Option 2</ReactMenuItem>
          <ReactMenuSeparator />
          <ReactMenuItem value="three">Option 3</ReactMenuItem>
        </ReactMenu>
      </ReactMenuButton>
    </>
  ),
};

