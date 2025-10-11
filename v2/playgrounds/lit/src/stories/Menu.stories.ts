import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/menu';

// Define props interface for MenuButton
interface MenuButtonProps {
  variant?: 'chevron' | 'button' | 'icon';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  buttonVariant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  disabled?: boolean;
  ariaLabel?: string;
  icon?: string;
  unicode?: string;
  label?: string;
  onMenuOpen?: (e: Event) => void;
  onMenuClose?: (e: Event) => void;
  onMenuSelect?: (e: CustomEvent) => void;
}

const meta: Meta<MenuButtonProps> = {
  title: 'AgnosticUI/Menu',
  component: 'ag-menu-button',
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
  },
  args: {
    variant: 'chevron',
    size: 'md',
    buttonVariant: 'ghost',
    disabled: false,
    label: 'Menu',
    onMenuOpen: fn(),
    onMenuClose: fn(),
    onMenuSelect: fn(),
  },
  parameters: {
    actions: {
      handles: ['menu-open', 'menu-close', 'menu-select'],
    },
  },
};

export default meta;
type Story = StoryObj<MenuButtonProps>;

// Default story with all controls
export const Default: Story = {
  args: {
    variant: 'chevron',
    size: 'md',
    label: 'Menu',
  },
  render: ({ variant, size, buttonVariant, disabled, ariaLabel, label, onMenuOpen, onMenuClose, onMenuSelect }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
        .disabled=${disabled}
        .ariaLabel=${ariaLabel}
        @menu-open=${(e: Event) => onMenuOpen(e)}
        @menu-close=${(e: Event) => onMenuClose(e)}
      >
        ${label || 'Menu'}
        <ag-menu slot="menu" .ariaLabel=${'Menu options'}>
          <ag-menu-item .value=${'edit'} @menu-select=${(e: CustomEvent) => onMenuSelect(e.detail)}>
            Edit
          </ag-menu-item>
          <ag-menu-item .value=${'copy'} @menu-select=${(e: CustomEvent) => onMenuSelect(e.detail)}>
            Copy
          </ag-menu-item>
          <ag-menu-item .value=${'paste'} @menu-select=${(e: CustomEvent) => onMenuSelect(e.detail)}>
            Paste
          </ag-menu-item>
          <ag-menu-separator></ag-menu-separator>
          <ag-menu-item .value=${'delete'} @menu-select=${(e: CustomEvent) => onMenuSelect(e.detail)}>
            Delete
          </ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

// Chevron variant (default)
export const ChevronVariant: Story = {
  args: {
    variant: 'chevron',
    size: 'md',
    buttonVariant: 'ghost',
    label: 'Options',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Options menu'}>
          <ag-menu-item .value=${'option1'}>Option 1</ag-menu-item>
          <ag-menu-item .value=${'option2'}>Option 2</ag-menu-item>
          <ag-menu-item .value=${'option3'}>Option 3</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

// Button variant
export const ButtonVariant: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'primary',
    label: 'Actions',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Action menu'}>
          <ag-menu-item .value=${'new'}>New File</ag-menu-item>
          <ag-menu-item .value=${'open'}>Open File</ag-menu-item>
          <ag-menu-item .value=${'save'}>Save</ag-menu-item>
          <ag-menu-separator></ag-menu-separator>
          <ag-menu-item .value=${'exit'}>Exit</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

// Icon variant
export const IconVariant: Story = {
  args: {
    variant: 'icon',
    size: 'md',
    buttonVariant: 'ghost',
    unicode: '⋮',
    ariaLabel: 'More options',
  },
  render: ({ variant, size, buttonVariant, unicode, ariaLabel }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
        .unicode=${unicode}
        .ariaLabel=${ariaLabel}
      >
        <ag-menu slot="menu" .ariaLabel=${'More options menu'}>
          <ag-menu-item .value=${'settings'}>Settings</ag-menu-item>
          <ag-menu-item .value=${'profile'}>Profile</ag-menu-item>
          <ag-menu-separator></ag-menu-separator>
          <ag-menu-item .value=${'logout'}>Logout</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

// Size variants
export const SizeXS: Story = {
  args: {
    variant: 'button',
    size: 'xs',
    buttonVariant: 'secondary',
    label: 'XS Menu',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Extra small menu'}>
          <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
          <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

export const SizeSM: Story = {
  args: {
    variant: 'button',
    size: 'sm',
    buttonVariant: 'secondary',
    label: 'Small Menu',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Small menu'}>
          <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
          <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

export const SizeMD: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'primary',
    label: 'Medium Menu',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Medium menu'}>
          <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
          <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

export const SizeLG: Story = {
  args: {
    variant: 'button',
    size: 'lg',
    buttonVariant: 'primary',
    label: 'Large Menu',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Large menu'}>
          <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
          <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

export const SizeXL: Story = {
  args: {
    variant: 'button',
    size: 'xl',
    buttonVariant: 'primary',
    label: 'XL Menu',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Extra large menu'}>
          <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
          <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

// Button variant styles
export const PrimaryButton: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'primary',
    label: 'Primary Menu',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Primary menu'}>
          <ag-menu-item .value=${'option1'}>Option 1</ag-menu-item>
          <ag-menu-item .value=${'option2'}>Option 2</ag-menu-item>
          <ag-menu-item .value=${'option3'}>Option 3</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

export const SecondaryButton: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'secondary',
    label: 'Secondary Menu',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Secondary menu'}>
          <ag-menu-item .value=${'option1'}>Option 1</ag-menu-item>
          <ag-menu-item .value=${'option2'}>Option 2</ag-menu-item>
          <ag-menu-item .value=${'option3'}>Option 3</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

export const GhostButton: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'ghost',
    label: 'Ghost Menu',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Ghost menu'}>
          <ag-menu-item .value=${'option1'}>Option 1</ag-menu-item>
          <ag-menu-item .value=${'option2'}>Option 2</ag-menu-item>
          <ag-menu-item .value=${'option3'}>Option 3</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

export const DangerButton: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'danger',
    label: 'Danger Actions',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Danger actions menu'}>
          <ag-menu-item .value=${'clear'}>Clear All</ag-menu-item>
          <ag-menu-item .value=${'reset'}>Reset Settings</ag-menu-item>
          <ag-menu-separator></ag-menu-separator>
          <ag-menu-item .value=${'delete-account'}>Delete Account</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

// Menu with links
export const MenuWithLinks: Story = {
  args: {
    variant: 'chevron',
    size: 'md',
    buttonVariant: 'primary',
    label: 'Navigation',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Navigation menu'}>
          <ag-menu-item .value=${'home'} .href=${'#home'}>Home</ag-menu-item>
          <ag-menu-item .value=${'about'} .href=${'#about'}>About</ag-menu-item>
          <ag-menu-item .value=${'contact'} .href=${'#contact'}>Contact</ag-menu-item>
          <ag-menu-separator></ag-menu-separator>
          <ag-menu-item .value=${'external'} .href=${'https://example.com'} .target=${'_blank'}>
            External Link
          </ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
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
  render: ({ variant, size, buttonVariant, label, disabled }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
        .disabled=${disabled}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Disabled menu'}>
          <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
          <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

// Menu with disabled items
export const DisabledItems: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'primary',
    label: 'Mixed States',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Menu with disabled items'}>
          <ag-menu-item .value=${'enabled1'}>Enabled Item</ag-menu-item>
          <ag-menu-item .value=${'disabled1'} .disabled=${true}>Disabled Item</ag-menu-item>
          <ag-menu-item .value=${'enabled2'}>Another Enabled</ag-menu-item>
          <ag-menu-separator></ag-menu-separator>
          <ag-menu-item .value=${'disabled2'} .disabled=${true}>Another Disabled</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

// Complex menu with multiple sections
export const ComplexMenu: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'primary',
    label: 'File',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'File menu'}>
          <ag-menu-item .value=${'new'}>New</ag-menu-item>
          <ag-menu-item .value=${'open'}>Open...</ag-menu-item>
          <ag-menu-item .value=${'recent'}>Open Recent</ag-menu-item>
          <ag-menu-separator></ag-menu-separator>
          <ag-menu-item .value=${'save'}>Save</ag-menu-item>
          <ag-menu-item .value=${'save-as'}>Save As...</ag-menu-item>
          <ag-menu-separator></ag-menu-separator>
          <ag-menu-item .value=${'export'}>Export</ag-menu-item>
          <ag-menu-item .value=${'import'}>Import</ag-menu-item>
          <ag-menu-separator></ag-menu-separator>
          <ag-menu-item .value=${'print'}>Print</ag-menu-item>
          <ag-menu-separator></ag-menu-separator>
          <ag-menu-item .value=${'close'}>Close</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

// Event testing
export const EventTesting: Story = {
  args: {
    variant: 'chevron',
    size: 'md',
    buttonVariant: 'primary',
    label: 'Event Testing',
  },
  render: ({ variant, size, buttonVariant, label, onMenuOpen, onMenuClose, onMenuSelect }) => html`
    <div style="padding: 50px;">
      <p style="margin-bottom: 1rem;">Open the menu and select items to test events</p>
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
        @menu-open=${(e: Event) => onMenuOpen(e)}
        @menu-close=${(e: Event) => onMenuClose(e)}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Event testing menu'}>
          <ag-menu-item
            .value=${'option1'}
            @menu-select=${(e: CustomEvent) => onMenuSelect(e.detail)}
          >
            Option 1
          </ag-menu-item>
          <ag-menu-item
            .value=${'option2'}
            @menu-select=${(e: CustomEvent) => onMenuSelect(e.detail)}
          >
            Option 2
          </ag-menu-item>
          <ag-menu-item
            .value=${'option3'}
            @menu-select=${(e: CustomEvent) => onMenuSelect(e.detail)}
          >
            Option 3
          </ag-menu-item>
        </ag-menu>
      </ag-menu-button>
      <p style="font-size: 0.875rem; color: #6b7280; margin-top: 1rem;">
        Check the Actions panel below for event logs (shows selected item details)
      </p>
    </div>
  `,
};

// Keyboard navigation
export const KeyboardNavigation: Story = {
  args: {
    variant: 'button',
    size: 'md',
    buttonVariant: 'primary',
    label: 'Keyboard Navigation',
  },
  render: ({ variant, size, buttonVariant, label }) => html`
    <div style="padding: 50px;">
      <p style="margin-bottom: 1rem;">
        <strong>Keyboard Navigation:</strong>
        <br />• Click or press Enter/Space to open menu
        <br />• Arrow Up/Down: Navigate menu items
        <br />• Home/End: Jump to first/last item
        <br />• Enter: Select the focused item
        <br />• Escape/Tab: Close the menu
      </p>
      <ag-menu-button
        .variant=${variant}
        .size=${size}
        .buttonVariant=${buttonVariant}
      >
        ${label}
        <ag-menu slot="menu" .ariaLabel=${'Keyboard navigation menu'}>
          <ag-menu-item .value=${'first'}>First Item</ag-menu-item>
          <ag-menu-item .value=${'second'}>Second Item</ag-menu-item>
          <ag-menu-item .value=${'third'}>Third Item</ag-menu-item>
          <ag-menu-item .value=${'fourth'} .disabled=${true}>Disabled Item (skipped)</ag-menu-item>
          <ag-menu-item .value=${'fifth'}>Fifth Item</ag-menu-item>
          <ag-menu-item .value=${'sixth'}>Sixth Item (Last)</ag-menu-item>
        </ag-menu>
      </ag-menu-button>
    </div>
  `,
};

// All variants comparison
export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; padding: 50px; flex-wrap: wrap;">
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Chevron Variant</p>
        <ag-menu-button .variant=${'chevron'} .size=${'md'}>
          Options
          <ag-menu slot="menu" .ariaLabel=${'Options menu'}>
            <ag-menu-item .value=${'edit'}>Edit</ag-menu-item>
            <ag-menu-item .value=${'copy'}>Copy</ag-menu-item>
            <ag-menu-item .value=${'paste'}>Paste</ag-menu-item>
          </ag-menu>
        </ag-menu-button>
      </div>

      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Button Variant</p>
        <ag-menu-button .variant=${'button'} .size=${'md'} .buttonVariant=${'primary'}>
          Actions
          <ag-menu slot="menu" .ariaLabel=${'Actions menu'}>
            <ag-menu-item .value=${'new'}>New</ag-menu-item>
            <ag-menu-item .value=${'open'}>Open</ag-menu-item>
            <ag-menu-item .value=${'save'}>Save</ag-menu-item>
          </ag-menu>
        </ag-menu-button>
      </div>

      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Icon Variant</p>
        <ag-menu-button .variant=${'icon'} .size=${'md'} .unicode=${'⋮'} .ariaLabel=${'More options'}>
          <ag-menu slot="menu" .ariaLabel=${'More menu'}>
            <ag-menu-item .value=${'settings'}>Settings</ag-menu-item>
            <ag-menu-item .value=${'profile'}>Profile</ag-menu-item>
            <ag-menu-item .value=${'logout'}>Logout</ag-menu-item>
          </ag-menu>
        </ag-menu-button>
      </div>
    </div>
  `,
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; padding: 50px;">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="width: 100px;">Extra Small:</span>
        <ag-menu-button .variant=${'button'} .size=${'xs'} .buttonVariant=${'primary'}>
          XS Menu
          <ag-menu slot="menu" .ariaLabel=${'XS menu'}>
            <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
            <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
          </ag-menu>
        </ag-menu-button>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="width: 100px;">Small:</span>
        <ag-menu-button .variant=${'button'} .size=${'sm'} .buttonVariant=${'primary'}>
          SM Menu
          <ag-menu slot="menu" .ariaLabel=${'SM menu'}>
            <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
            <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
          </ag-menu>
        </ag-menu-button>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="width: 100px;">Medium:</span>
        <ag-menu-button .variant=${'button'} .size=${'md'} .buttonVariant=${'primary'}>
          MD Menu
          <ag-menu slot="menu" .ariaLabel=${'MD menu'}>
            <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
            <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
          </ag-menu>
        </ag-menu-button>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="width: 100px;">Large:</span>
        <ag-menu-button .variant=${'button'} .size=${'lg'} .buttonVariant=${'primary'}>
          LG Menu
          <ag-menu slot="menu" .ariaLabel=${'LG menu'}>
            <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
            <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
          </ag-menu>
        </ag-menu-button>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="width: 100px;">Extra Large:</span>
        <ag-menu-button .variant=${'button'} .size=${'xl'} .buttonVariant=${'primary'}>
          XL Menu
          <ag-menu slot="menu" .ariaLabel=${'XL menu'}>
            <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
            <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
          </ag-menu>
        </ag-menu-button>
      </div>
    </div>
  `,
};

// All button variants comparison
export const AllButtonVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; padding: 50px;">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="width: 100px;">Primary:</span>
        <ag-menu-button .variant=${'button'} .size=${'md'} .buttonVariant=${'primary'}>
          Primary
          <ag-menu slot="menu" .ariaLabel=${'Primary menu'}>
            <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
            <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
          </ag-menu>
        </ag-menu-button>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="width: 100px;">Secondary:</span>
        <ag-menu-button .variant=${'button'} .size=${'md'} .buttonVariant=${'secondary'}>
          Secondary
          <ag-menu slot="menu" .ariaLabel=${'Secondary menu'}>
            <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
            <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
          </ag-menu>
        </ag-menu-button>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="width: 100px;">Ghost:</span>
        <ag-menu-button .variant=${'button'} .size=${'md'} .buttonVariant=${'ghost'}>
          Ghost
          <ag-menu slot="menu" .ariaLabel=${'Ghost menu'}>
            <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
            <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
          </ag-menu>
        </ag-menu-button>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="width: 100px;">Danger:</span>
        <ag-menu-button .variant=${'button'} .size=${'md'} .buttonVariant=${'danger'}>
          Danger
          <ag-menu slot="menu" .ariaLabel=${'Danger menu'}>
            <ag-menu-item .value=${'item1'}>Item 1</ag-menu-item>
            <ag-menu-item .value=${'item2'}>Item 2</ag-menu-item>
          </ag-menu>
        </ag-menu-button>
      </div>
    </div>
  `,
};
