import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import VueMenu, { VueMenuItem, VueMenuSeparator } from 'agnosticui-core/menu/vue';
import type { VueMenuProps } from 'agnosticui-core/menu/vue';

const meta = {
  title: 'AgnosticUI Vue/Menu',
  component: VueMenu,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the menu button',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for the menu button',
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
    disabled: false,
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
        <VueMenu v-bind="args" class="custom-menu-button">
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
