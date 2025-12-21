import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueEmptyState } from 'agnosticui-core/empty-state/vue';
import VueButton from 'agnosticui-core/button/vue';
import { VueIcon } from 'agnosticui-core/icon/vue';
import { action } from 'storybook/actions';

const meta: Meta = {
  title: 'AgnosticUI Vue/EmptyState',
  component: VueEmptyState,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Main title text displayed in the empty state' },
    subtitle: { control: 'text', description: 'Subtitle or description text' },
    buttonText: { control: 'text', description: 'Text for the default action button' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Size variant' },
    bordered: { control: 'boolean', description: 'Adds a border' },
    rounded: { control: 'boolean', description: 'Adds rounded corners' },
  },
  parameters: {
    controls: { hideNoControlsWarning: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// === Custom SVGs (Lucide-inspired) ===

const personSvg = `
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#999" width="40" height="40" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"></path>
  </svg>
`;

const folderSvg = `
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#999" width="56" height="56" viewBox="0 0 24 24">
    <path d="M3 6a2 2 0 012-2h4l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"></path>
  </svg>
`;

const noSearchResultsSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x-icon lucide-search-x"><path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
`;

const shoppingCartSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
`;

const inboxSvg = `
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#999" width="40" height="40" viewBox="0 0 24 24">
    <path d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm2 0v12h14V6H5zm3 4h8a1 1 0 110 2H8a1 1 0 110-2z"></path>
  </svg>
`;

const chartSvg = `
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#999" width="56" height="56" viewBox="0 0 24 24">
    <path d="M3 3v16a2 2 0 002 2h16M8 15l4-4 4 4 4-4v6H8v-6z"></path>
  </svg>
`;

const heartSvg = `
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#999" width="32" height="32" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
  </svg>
`;

const alertSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert-icon lucide-circle-alert"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
`;

// Helper to inject styles
const injectStyles = (styleContent: string, styleId: string) => {
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = styleContent;
    document.head.appendChild(style);
  }
};

const sharedActionStyles = `
  .empty-state-with-button::part(ag-actions) {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .empty-state-with-button::part(ag-actions-button) {
    background: #09090b;
    color: white;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }
  .empty-state-with-button::part(ag-icon) {
    color: var(--ag-text-muted, #999);
  }
`;

const EmptyStateWithSharedActionStyles = (args: any) => ({
  components: { VueEmptyState },
  setup() {
    injectStyles(sharedActionStyles, 'shared-action-styles');
    const className = args.buttonText ? 'empty-state-with-button' : '';
    return { args, className };
  },
  template: `<VueEmptyState v-bind="args" :class="className" />`,
});

// === Stories ===

export const Default: Story = {
  args: {
    title: 'No items found',
    subtitle: 'Get started by creating your first item',
    buttonText: 'Create Item',
    size: 'md',
  },
  render: EmptyStateWithSharedActionStyles,
};

export const Basic: Story = {
  args: {
    title: 'No results',
    subtitle: 'Try adjusting your search or filter criteria',
  },
  render: (args) => ({
    components: { VueEmptyState },
    setup() { return { args }; },
    template: `<VueEmptyState v-bind="args" />`,
  }),
};

export const Small: Story = {
  args: {
    title: 'No notifications',
    subtitle: 'You\'re all caught up!',
    size: 'sm',
  },
  render: (args) => ({
    components: { VueEmptyState },
    setup() { return { args }; },
    template: `<VueEmptyState v-bind="args" />`,
  }),
};

export const Medium: Story = {
  args: {
    title: 'No projects yet',
    subtitle: 'Create your first project to get started',
    buttonText: 'New Project',
    size: 'md',
  },
  render: EmptyStateWithSharedActionStyles,
};

export const Large: Story = {
  args: {
    title: 'Welcome to Your Dashboard',
    subtitle: 'Start by adding some content to see it appear here',
    buttonText: 'Get Started',
    size: 'lg',
  },
  render: EmptyStateWithSharedActionStyles,
};

export const Bordered: Story = {
  args: {
    title: 'No data available',
    subtitle: 'Upload a file to see your data visualized',
    buttonText: 'Upload File',
    bordered: true,
  },
  render: EmptyStateWithSharedActionStyles,
};

export const Rounded: Story = {
  args: {
    title: 'Empty folder',
    subtitle: 'This folder contains no files yet',
    buttonText: 'Add Files',
    rounded: true,
  },
  render: EmptyStateWithSharedActionStyles,
};

export const BorderedAndRounded: Story = {
  args: {
    title: 'No messages',
    subtitle: 'Send your first message to start a conversation',
    buttonText: 'New Message',
    bordered: true,
    rounded: true,
  },
  render: EmptyStateWithSharedActionStyles,
};

export const CustomIcon: Story = {
  args: {
    title: 'No Connections',
    subtitle: 'Click below to add some friends',
    buttonText: 'Add Friends',
  },
  render: (args) => ({
    components: { VueEmptyState, VueIcon },
    setup() {
      injectStyles(sharedActionStyles, 'shared-action-styles');
      return { args, personSvg };
    },
    template: `
      <VueEmptyState v-bind="args" class="empty-state-with-button">
        <template #icon>
          <VueIcon size="48" v-html="personSvg"></VueIcon>
        </template>
      </VueEmptyState>
    `,
  }),
};

export const CustomIconFolder: Story = {
  args: {
    title: 'No files',
    subtitle: 'Drag and drop files here to upload',
    size: 'lg',
    bordered: true,
    rounded: true,
  },
  render: (args) => ({
    components: { VueEmptyState, VueIcon },
    setup() { return { args, folderSvg }; },
    template: `
      <VueEmptyState v-bind="args">
        <template #icon>
          <VueIcon size="56" :noFill="true" v-html="folderSvg"></VueIcon>
        </template>
      </VueEmptyState>
    `,
  }),
};

export const CustomIconSearch: Story = {
  args: {
    title: 'No search results',
    subtitle: 'Try different keywords or remove filters',
    size: 'md',
  },
  render: (args) => ({
    components: { VueEmptyState, VueIcon },
    setup() { return { args, noSearchResultsSvg }; },
    template: `
      <VueEmptyState v-bind="args">
        <template #icon>
          <VueIcon size="40" :noFill="true" v-html="noSearchResultsSvg"></VueIcon>
        </template>
      </VueEmptyState>
    `,
  }),
};

export const CustomActions: Story = {
  args: {
    title: 'No team members',
    subtitle: 'Invite people to collaborate on this project',
    size: 'sm',
  },
  render: (args) => ({
    components: { VueEmptyState, VueButton },
    setup() {
      return { args, action };
    },
    template: `
      <div style="max-width: 325px">
        <VueEmptyState v-bind="args">
          <template #actions>
            <div style="display: flex; gap: 0.5rem; justify-content: center;">
              <VueButton variant="primary" size="sm" shape="rounded" @click="action('Invite clicked')">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M19 16v6"/><path d="M16 19h6"/></svg>
                <span style="margin-inline-start: 4px;">Invite Members</span>
              </VueButton>
              <VueButton variant="secondary" size="sm" shape="rounded" @click="action('Learn more clicked')">
                Learn More
              </VueButton>
            </div>
          </template>
        </VueEmptyState>
      </div>
    `,
  }),
};

export const CustomActionsMultiple: Story = {
  args: {
    title: 'Start your journey',
    subtitle: 'Choose how you want to begin',
    size: 'lg',
    bordered: true,
    rounded: true,
  },
  render: (args) => ({
    components: { VueEmptyState, VueButton, VueIcon },
    setup() { return { args, folderSvg, action }; },
    template: `
      <VueEmptyState v-bind="args">
        <template #icon>
          <VueIcon size="56" :noFill="true" v-html="folderSvg"></VueIcon>
        </template>
        <template #actions>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
            <VueButton variant="primary" :isGhost="true" size="md" @click="action('Create clicked')">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              Create New
            </VueButton>
            <VueButton variant="primary" :isBordered="true" shape="rounded" size="md" @click="action('Import clicked')">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m8 11 4 4 4-4"/><path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"/></svg>
              <span style="margin-inline-start: 4px;">Import Data</span>
            </VueButton>
            <VueButton variant="primary" :isBordered="true" shape="rounded" size="md" @click="action('Template clicked')">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>
              <span style="margin-inline-start: 4px;">Use Template</span>
            </VueButton>
          </div>
        </template>
      </VueEmptyState>
    `,
  }),
};

export const ShoppingCart: Story = {
  args: {
    title: 'Your cart is empty',
    subtitle: 'Add items to your cart to see them here',
    buttonText: 'Continue Shopping',
    size: 'md',
    bordered: true,
    rounded: true,
  },
  render: (args) => ({
    components: { VueEmptyState, VueButton, VueIcon },
    setup() { return { args, shoppingCartSvg, action }; },
    template: `
      <VueEmptyState v-bind="args">
        <template #icon>
          <VueIcon size="48" :noFill="true" v-html="shoppingCartSvg"></VueIcon>
        </template>
        <template #actions>
          <VueButton variant="primary" shape="rounded" size="md" @click="action('Continue shopping clicked')">
            Continue Shopping
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </VueButton>
        </template>
      </VueEmptyState>
    `,
  }),
};

export const Inbox: Story = {
  args: {
    title: 'Inbox Zero! 🎉',
    subtitle: 'All caught up. No new messages.',
    size: 'md',
  },
  render: (args) => ({
    components: { VueEmptyState, VueIcon },
    setup() { return { args, inboxSvg }; },
    template: `
      <VueEmptyState v-bind="args">
        <template #icon>
          <VueIcon size="40" :noFill="true" type="info" v-html="inboxSvg"></VueIcon>
        </template>
      </VueEmptyState>
    `,
  }),
};

export const Dashboard: Story = {
  args: {
    title: 'No analytics data yet',
    subtitle: 'Data will appear here once you start tracking events',
    buttonText: 'View Documentation',
    bordered: true,
    rounded: true,
  },
  render: (args) => ({
    components: { VueEmptyState, VueButton, VueIcon },
    setup() { return { args, chartSvg, action }; },
    template: `
      <VueEmptyState v-bind="args">
        <template #icon>
          <VueIcon type="primary" size="56" :noFill="true" v-html="chartSvg"></VueIcon>
        </template>
        <template #actions>
          <VueButton variant="primary" :isGhost="true" @click="action('View docs clicked')">
            View Documentation
          </VueButton>
        </template>
      </VueEmptyState>
    `,
  }),
};

export const Favorites: Story = {
  args: {
    title: 'No favorites yet',
    subtitle: 'Mark items as favorites to see them here',
    size: 'sm',
  },
  render: (args) => ({
    components: { VueEmptyState, VueIcon },
    setup() { return { args, heartSvg }; },
    template: `
      <VueEmptyState v-bind="args">
        <template #icon>
          <VueIcon size="32" type="error" v-html="heartSvg"></VueIcon>
        </template>
      </VueEmptyState>
    `,
  }),
};

export const Customization: Story = {
  args: {
    title: 'Customized Empty State',
    subtitle: 'This uses CSS parts to customize the icon color',
    buttonText: 'Try It',
    bordered: true,
    rounded: true,
  },
  render: (args) => ({
    components: { VueEmptyState },
    setup() {
      const customStyles = `
        .custom-empty::part(ag-icon) {
          color: #7a69e3;
        }
        .custom-empty::part(ag-actions) {
          display: flex;
          justify-content: center;
        }
        .custom-empty::part(ag-actions-button) {
          background: #4a37bc;
          color: white;
          border-radius: 0.25rem;
          padding: 0.5rem 1rem;
          border: none;
        }
      `;
      injectStyles(customStyles, 'custom-empty-styles');
      return { args };
    },
    template: `<VueEmptyState class="custom-empty" v-bind="args" />`,
  }),
};

export const MultipleStates: Story = {
  render: () => ({
    components: { VueEmptyState },
    setup() {
      injectStyles(sharedActionStyles, 'shared-action-styles-multiple');
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
        <VueEmptyState class="empty-state-with-button" title="No tasks" subtitle="Create a task to get started" buttonText="New Task" size="sm" :isBordered="true" :isRounded="true" />
        <VueEmptyState class="empty-state-with-button" title="No tasks" subtitle="Create a task to get started" buttonText="New Task" size="sm" :isBordered="true" :isRounded="true" />
        <VueEmptyState class="empty-state-with-button" title="No events" subtitle="Schedule your first event" buttonText="Add Event" size="sm" :isBordered="true" :isRounded="true" />
        <VueEmptyState class="empty-state-with-button" title="No contacts" subtitle="Add contacts to your list" buttonText="Add Contact" size="sm" :isBordered="true" :isRounded="true" />
      </div>
    `,
  }),
};

export const Minimal: Story = {
  args: { title: 'Nothing here yet', size: 'sm' },
  render: (args) => ({
    components: { VueEmptyState },
    setup() { return { args }; },
    template: `<VueEmptyState v-bind="args" />`,
  }),
};

export const MinimalWithSubtitle: Story = {
  args: { title: 'No activity', subtitle: 'Recent activity will appear here', size: 'md' },
  render: (args) => ({
    components: { VueEmptyState },
    setup() { return { args }; },
    template: `<VueEmptyState v-bind="args" />`,
  }),
};

export const IconAndTitle: Story = {
  args: { title: 'Empty', size: 'md' },
  render: (args) => ({
    components: { VueEmptyState },
    setup() { return { args }; },
    template: `<VueEmptyState v-bind="args" />`,
  }),
};

export const WithButtonVariants: Story = {
  args: {
    title: 'Choose your action',
    subtitle: 'Different button styles for different purposes',
    size: 'md',
    bordered: true,
    rounded: true,
  },
  render: (args) => ({
    components: { VueEmptyState, VueButton, VueIcon },
    setup() { return { args, alertSvg, action }; },
    template: `
      <VueEmptyState v-bind="args">
        <template #icon>
          <VueIcon size="32" :noFill="true" v-html="alertSvg"></VueIcon>
        </template>
        <template #actions>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
            <VueButton variant="primary" size="sm" shape="rounded" @click="action('Primary clicked')">Primary Action</VueButton>
            <VueButton variant="secondary" size="sm" shape="rounded" :isBordered="true" @click="action('Secondary clicked')">Secondary</VueButton>
            <VueButton size="sm" shape="rounded" :isBordered="true" @click="action('Default clicked')">Default</VueButton>
          </div>
        </template>
      </VueEmptyState>
    `,
  }),
};

export const WithButtonSizes: Story = {
  args: {
    title: 'Different Button Sizes',
    subtitle: 'Choose the right size for your empty state',
    size: 'md',
    bordered: true,
  },
  render: (args) => ({
    components: { VueEmptyState, VueButton, VueIcon },
    setup() { return { args, folderSvg, action }; },
    template: `
      <VueEmptyState v-bind="args">
        <template #icon>
          <VueIcon size="48" :noFill="true" v-html="folderSvg"></VueIcon>
        </template>
        <template #actions>
          <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: center;">
            <VueButton variant="primary" size="sm" shape="rounded" :isBordered="true" @click="action('Small clicked')">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></svg>
              Small
            </VueButton>
            <VueButton variant="primary" size="md" shape="rounded" :isBordered="true" @click="action('Medium clicked')">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></svg>
              Medium
            </VueButton>
            <VueButton variant="primary" size="lg" shape="rounded" :isBordered="true" @click="action('Large clicked')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></svg>
              Large
            </VueButton>
          </div>
        </template>
      </VueEmptyState>
    `,
  }),
};

export const WithWarningState: Story = {
  args: {
    title: 'Action Required',
    subtitle: 'This action cannot be undone',
    size: 'md',
    bordered: true,
    rounded: true,
  },
  render: (args) => ({
    components: { VueEmptyState, VueButton, VueIcon },
    setup() { return { args, alertSvg, action }; },
    template: `
      <VueEmptyState v-bind="args">
        <template #icon>
          <VueIcon size="48" type="warning" :noFill="true" v-html="alertSvg"></VueIcon>
        </template>
        <template #actions>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
            <VueButton variant="warning" size="md" @click="action('Proceed clicked')">Proceed Anyway</VueButton>
            <VueButton variant="secondary" size="md" @click="action('Cancel clicked')">Cancel</VueButton>
          </div>
        </template>
      </VueEmptyState>
    `,
  }),
};

export const WithErrorState: Story = {
  args: {
    title: 'Something went wrong',
    subtitle: 'Please try again or contact support',
    size: 'md',
    bordered: true,
  },
  render: (args) => ({
    components: { VueEmptyState, VueButton, VueIcon },
    setup() { return { args, alertSvg, action }; },
    template: `
      <VueEmptyState v-bind="args">
        <template #icon>
          <VueIcon size="48" :noFill="true" v-html="alertSvg"></VueIcon>
        </template>
        <template #actions>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
            <VueButton variant="danger" shape="rounded" :isBordered="true" size="md" @click="action('Retry clicked')">Try Again</VueButton>
            <VueButton variant="secondary" shape="rounded" :isBordered="true" size="md" @click="action('Support clicked')">
              <span style="margin-inline-end: 0.125rem;">Contact Support</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
            </VueButton>
          </div>
        </template>
      </VueEmptyState>
    `,
  }),
};
