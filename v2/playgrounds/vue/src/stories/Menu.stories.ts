import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { action } from 'storybook/actions';
import VueMenu, { VueMenuItem, VueMenuSeparator } from 'agnosticui-core/menu/vue';
import type { VueMenuProps } from 'agnosticui-core/menu/vue';

const meta = {
  title: 'AgnosticUI Vue/Menu',
  component: VueMenu,
  tags: ['autodocs'],
  argTypes: {
    menuVariant: {
      control: 'select',
      options: ['chevron', 'button', 'icon'],
      description: 'Structural variant of the menu button',
    },
    buttonVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'monochrome', ''],
      description: 'Button color variant (from AgButton)',
    },
    size: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the menu button',
    },
    shape: {
      control: 'select',
      options: ['capsule', 'rounded', 'circle', 'square', 'rounded-square', ''],
      description: 'Shape of the button',
    },
    bordered: {
      control: 'boolean',
      description: 'Use bordered button style',
    },
    ghost: {
      control: 'boolean',
      description: 'Use ghost button style',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the menu button',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for the menu button',
    },
    unicode: {
      control: 'text',
      description: 'Unicode character for icon variant',
    },
    additionalGutter: {
      control: 'text',
      description: 'Additional vertical spacing beyond the trigger button height when positioning the menu (e.g., "10px", "1rem")',
    },
    open: {
      control: 'boolean',
      description: 'Whether the menu is open',
    },
    placement: {
      control: 'select',
      options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
      description: 'Placement of the menu',
    },
    menuAriaLabel: {
      control: 'text',
      description: 'ARIA label for the menu',
    },
    menuAriaLabelledBy: {
      control: 'text',
      description: 'ARIA labelledby for the menu',
    },
  },
  args: {
    menuVariant: 'chevron',
    buttonVariant: '',
    size: 'md',
    shape: 'rounded',
    bordered: false,
    ghost: false,
    disabled: false,
    loading: false,
    open: false,
    placement: 'bottom-start',
  },
} satisfies Meta<typeof VueMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuAriaLabel: 'Menu options',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem, VueMenuSeparator },
    setup() {
      return { args };
    },
    template: `
      <VueMenu v-bind="args">
        Menu
        <template #menu>
          <VueMenuItem value="edit">Edit</VueMenuItem>
          <VueMenuItem value="copy">Copy</VueMenuItem>
          <VueMenuItem value="paste">Paste</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="delete">Delete</VueMenuItem>
        </template>
      </VueMenu>
    `,
  }),
};

export const WithLinks: Story = {
  args: {
    menuAriaLabel: 'Navigation menu',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem, VueMenuSeparator },
    setup() {
      return { args };
    },
    template: `
      <VueMenu v-bind="args">
        Navigation
        <template #menu>
          <VueMenuItem value="home" href="#home">Home</VueMenuItem>
          <VueMenuItem value="about" href="#about">About</VueMenuItem>
          <VueMenuItem value="contact" href="#contact">Contact</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="external" href="https://example.com" target="_blank">
            External Link
          </VueMenuItem>
        </template>
      </VueMenu>
    `,
  }),
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
    menuAriaLabel: 'Disabled menu',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem },
    setup() {
      return { args };
    },
    template: `
      <VueMenu v-bind="args">
        Disabled Menu
        <template #menu>
          <VueMenuItem value="item1">Item 1</VueMenuItem>
          <VueMenuItem value="item2">Item 2</VueMenuItem>
        </template>
      </VueMenu>
    `,
  }),
};

export const DisabledItems: Story = {
  args: {
    menuAriaLabel: 'Menu with disabled items',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem, VueMenuSeparator },
    setup() {
      return { args };
    },
    template: `
      <VueMenu v-bind="args">
        Mixed States
        <template #menu>
          <VueMenuItem value="enabled1">Enabled Item</VueMenuItem>
          <VueMenuItem value="disabled1" :disabled="true">Disabled Item</VueMenuItem>
          <VueMenuItem value="enabled2">Another Enabled</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="disabled2" :disabled="true">Another Disabled</VueMenuItem>
        </template>
      </VueMenu>
    `,
  }),
};

export const MenuAlignRight: Story = {
  args: {
    menuVariant: 'chevron',
    size: 'md',
    menuAlign: 'right',
    menuAriaLabel: 'Options menu',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 50px;">
        <p style="margin-bottom: 1rem;">
          Menu is aligned to the right edge of the button
        </p>
        <VueMenu v-bind="args">
          Options
          <template #menu>
            <VueMenuItem value="option1">Option 1</VueMenuItem>
            <VueMenuItem value="option2">Option 2</VueMenuItem>
            <VueMenuItem value="option3">Option 3</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    `,
  }),
};

export const ComplexMenu: Story = {
  args: {
    menuAriaLabel: 'File menu',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem, VueMenuSeparator },
    setup() {
      return { args };
    },
    template: `
      <VueMenu v-bind="args">
        File
        <template #menu>
          <VueMenuItem value="new">New</VueMenuItem>
          <VueMenuItem value="open">Open...</VueMenuItem>
          <VueMenuItem value="recent">Open Recent</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="save">Save</VueMenuItem>
          <VueMenuItem value="save-as">Save As...</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="export">Export</VueMenuItem>
          <VueMenuItem value="import">Import</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="print">Print</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="close">Close</VueMenuItem>
        </template>
      </VueMenu>
    `,
  }),
};

export const Accessible: Story = {
  args: {
    ariaLabel: 'Main menu',
    menuAriaLabel: 'Main menu options',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem },
    setup() {
      return { args };
    },
    template: `
      <div>
        <p id="menu-description">This menu provides various actions you can perform.</p>
        <VueMenu v-bind="args">
          Actions
          <template #menu>
            <VueMenuItem value="action1">Action 1</VueMenuItem>
            <VueMenuItem value="action2">Action 2</VueMenuItem>
            <VueMenuItem value="action3">Action 3</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    `,
  }),
};

export const WithSections: Story = {
  args: {
    menuAriaLabel: 'Menu with sections',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem, VueMenuSeparator },
    setup() {
      return { args };
    },
    template: `
      <VueMenu v-bind="args">
        Sections
        <template #menu>
          <VueMenuItem value="profile">Profile</VueMenuItem>
          <VueMenuItem value="settings">Settings</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="help">Help</VueMenuItem>
          <VueMenuItem value="feedback">Send Feedback</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="logout">Logout</VueMenuItem>
        </template>
      </VueMenu>
    `,
  }),
};

export const PlacementBottomEnd: Story = {
  args: {
    placement: 'bottom-end',
    menuAlign: 'right',
    menuAriaLabel: 'Bottom end menu',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: flex-end;">
        <VueMenu v-bind="args">
          Menu
          <template #menu>
            <VueMenuItem value="item1">Item 1</VueMenuItem>
            <VueMenuItem value="item2">Item 2</VueMenuItem>
            <VueMenuItem value="item3">Item 3</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    `,
  }),
};

export const EventTesting: Story = {
  args: {
    menuAriaLabel: 'Event testing menu',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem, VueMenuSeparator },
    setup() {
      const lastEvent = ref<string>('');

      const onMenuOpen = () => {
        lastEvent.value = 'Menu opened';
      };

      const onMenuClose = () => {
        lastEvent.value = 'Menu closed';
      };

      const onMenuSelect = (detail: { value: string }) => {
        lastEvent.value = `Selected: ${detail.value}`;
      };

      return { args, lastEvent, onMenuOpen, onMenuClose, onMenuSelect };
    },
    template: `
      <div>
        <p v-if="lastEvent" style="margin-top: 1rem;">{{ lastEvent }}</p>
        <VueMenu
          v-bind="args"
          @menu-open="onMenuOpen"
          @menu-close="onMenuClose"
          @menu-select="onMenuSelect"
        >
          Event Test
          <template #menu>
            <VueMenuItem value="option1">Option 1</VueMenuItem>
            <VueMenuItem value="option2">Option 2</VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="option3">Option 3</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    `,
  }),
};

// Vue Event Handlers (using @event syntax)
export const VueEventHandlers: Story = {
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem, VueMenuSeparator },
    setup() {
      return {
        args,
        onMenuOpen: action('menu-open'),
        onMenuClose: action('menu-close'),
        onClick: action('click'),
        onFocus: action('focus'),
        onBlur: action('blur'),
        onItemClick: action('item-click'),
        onMenuSelect: action('menu-select'),
      };
    },
    template: `
      <div style="padding: 50px;">
        <p style="margin-bottom: 1rem;">
          <strong>Vue Event Handlers:</strong>
          <br />
          This demonstrates Vue event handlers using the @event syntax.
          <br />
          Menu component emits: @menu-open, @menu-close, @click, @focus, @blur
          <br />
          MenuItem component emits: @menu-select, @click
          <br />
          Events are logged to the Actions panel below.
        </p>
        <VueMenu
          v-bind="args"
          menuAriaLabel="Interactive menu"
          @menu-open="onMenuOpen"
          @menu-close="onMenuClose"
          @click="onClick"
          @focus="onFocus"
          @blur="onBlur"
        >
          Interactive Menu
          <template #menu>
            <VueMenuItem
              value="item1"
              @click="onItemClick"
              @menu-select="onMenuSelect"
            >
              Item 1 (Select me!)
            </VueMenuItem>
            <VueMenuItem
              value="item2"
              @menu-select="onMenuSelect"
            >
              Item 2
            </VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem
              value="item3"
              @menu-select="onMenuSelect"
            >
              Item 3
            </VueMenuItem>
          </template>
        </VueMenu>
      </div>
    `,
  }),
};

export const MonochromeSelected: Story = {
  args: {
    menuAriaLabel: 'Monochrome menu',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 50px;">
        <VueMenu v-bind="args">
          Monochrome Menu
          <template #menu>
            <VueMenuItem value="option1" variant="monochrome">Option 1</VueMenuItem>
            <VueMenuItem value="option2" variant="monochrome" :selected="true">Option 2 (Selected)</VueMenuItem>
            <VueMenuItem value="option3" variant="monochrome">Option 3</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    `,
  }),
};

export const CSSPartsCustomization: Story = {
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem, VueMenuSeparator },
    setup() {
      const styles = `
        <style>
          .custom-menu-button::part(ag-menu-trigger-chevron-button) {
            background-color: #4a5568;
            color: white;
            border: 2px solid #2d3748;
            border-radius: 8px;
          }
          .custom-menu-button::part(ag-menu-label) {
            font-weight: bold;
          }
          .custom-menu-button::part(ag-menu-chevron-icon) {
            color: #a0aec0;
          }
          .custom-menu-button ag-menu::part(ag-menu) {
            background-color: #2d3748;
            border: 1px solid #4a5568;
            border-radius: 8px;
          }
          .custom-menu-button ag-menu::part(ag-menu-item) {
            color: #e2e8f0;
          }
          .custom-menu-button ag-menu::part(ag-menu-item):hover {
            background-color: #4a5568;
          }
          .custom-menu-button ag-menu::part(ag-menu-separator) {
            background-color: #4a5568;
          }
        </style>
      `;
      return { args, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <VueMenu v-bind="args" class="custom-menu-button" menuAriaLabel="Custom styled menu">
          Custom Menu
          <template #menu>
            <VueMenuItem value="one">Option 1</VueMenuItem>
            <VueMenuItem value="two">Option 2</VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="three">Option 3</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    `,
  }),
};

// New Feature: Additional Gutter Example
export const AdditionalGutter: Story = {
  args: {
    menuVariant: 'chevron',
    size: 'sm',
    additionalGutter: '20px',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 100px 50px; background: #f3f4f6;">
        <p style="margin-bottom: 1rem;">
          This menu has <code>additionalGutter="20px"</code> which adds extra vertical spacing
          beyond the button height when positioning the menu.
        </p>
        <VueMenu v-bind="args" menuAriaLabel="Menu with additional gutter">
          Menu with Extra Gutter
          <template #menu>
            <VueMenuItem value="option1">Option 1</VueMenuItem>
            <VueMenuItem value="option2">Option 2</VueMenuItem>
            <VueMenuItem value="option3">Option 3</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    `,
  }),
};

// Menu Types: Default (Navigation) vs Single-Select
export const MenuTypes: Story = {
  args: {
    menuVariant: 'chevron',
    size: 'md',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem, VueMenuSeparator },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 50px; display: flex; gap: 2rem; flex-wrap: wrap;">
        <div>
          <h3 style="margin-bottom: 0.5rem;">Navigation Menu (type="default")</h3>
          <p style="margin-bottom: 1rem; font-size: 0.875rem; color: #6b7280; max-width: 300px;">
            Selection clears when menu closes. Use for navigation and actions.
          </p>
          <VueMenu v-bind="args" menuAriaLabel="User navigation">
            User Menu
            <template #menu>
              <VueMenuItem value="profile">Profile</VueMenuItem>
              <VueMenuItem value="settings">Settings</VueMenuItem>
              <VueMenuSeparator />
              <VueMenuItem value="logout">Logout</VueMenuItem>
            </template>
          </VueMenu>
        </div>

        <div>
          <h3 style="margin-bottom: 0.5rem;">Selection Menu (type="single-select")</h3>
          <p style="margin-bottom: 1rem; font-size: 0.875rem; color: #6b7280; max-width: 300px;">
            Selection persists when menu closes. Use for filters, sorting, etc.
          </p>
          <VueMenu v-bind="args" menuType="single-select" selectedValue="date" menuAriaLabel="Sort options">
            Sort by
            <template #menu>
              <VueMenuItem value="date">Date</VueMenuItem>
              <VueMenuItem value="name">Name</VueMenuItem>
              <VueMenuItem value="size">Size</VueMenuItem>
            </template>
          </VueMenu>
        </div>
      </div>
    `,
  }),
};

// New Feature: Dynamic Icon Switching
export const DynamicIconSwitching: Story = {
  args: {
    menuVariant: 'icon',
    size: 'sm',
    ghost: true,
    ariaLabel: 'Toggle menu',
  },
  render: (args: VueMenuProps) => ({
    components: { VueMenu, VueMenuItem, VueMenuSeparator },
    setup() {
      const styles = `
        <style>
          .dynamic-icon-menu .icon-container {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 1.25rem;
            height: 1.25rem;
          }
          .dynamic-icon-menu .menu-icon,
          .dynamic-icon-menu .close-icon {
            position: absolute;
            transition: opacity var(--ag-motion-medium) ease-in-out;
          }
          .dynamic-icon-menu[data-menu-open="false"] .close-icon {
            opacity: 0;
            pointer-events: none;
          }
          .dynamic-icon-menu[data-menu-open="true"] .menu-icon {
            opacity: 0;
            pointer-events: none;
          }
        </style>
      `;
      return { args, styles };
    },
    template: `
      <div style="padding: 100px 50px;">
        <div v-html="styles"></div>
        <p style="margin-bottom: 1rem;">
          This example shows dynamic icon switching based on menu state.
          The icon changes from a hamburger menu (☰) when closed to an X (✕) when open.
        </p>
        <VueMenu
          v-bind="args"
          class="dynamic-icon-menu"
          menuAriaLabel="Navigation menu"
        >
          <span class="icon-container">
            <span class="menu-icon" style="font-size: 1.25rem;">☰</span>
            <span class="close-icon" style="font-size: 0.875rem;">✕</span>
          </span>
          <template #menu>
            <VueMenuItem value="home">Home</VueMenuItem>
            <VueMenuItem value="about">About</VueMenuItem>
            <VueMenuItem value="contact">Contact</VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="logout">Logout</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    `,
  }),
};

