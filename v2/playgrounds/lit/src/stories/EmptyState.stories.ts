import type { Meta, StoryObj } from '@storybook/web-components';
import { html, svg } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import 'agnosticui-core/empty-state';
import 'agnosticui-core/button';
import 'agnosticui-core/icon';
import { action } from 'storybook/actions';
import type { EmptyStateProps } from 'agnosticui-core/empty-state';

const meta: Meta<EmptyStateProps> = {
  title: 'AgnosticUI Lit/EmptyState',
  component: 'ag-empty-state',
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
} satisfies Meta<EmptyStateProps>;

export default meta;
type Story = StoryObj<EmptyStateProps>;

// === Custom SVGs (Lucide-inspired) ===

const personSvg = svg`
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#999" width="40" height="40" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"></path>
  </svg>
`;

const folderSvg = svg`
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#999" width="56" height="56" viewBox="0 0 24 24">
    <path d="M3 6a2 2 0 012-2h4l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"></path>
  </svg>
`;

const noSearchResultsSvg = svg`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x-icon lucide-search-x"><path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
`;

const shoppingCartSvg = svg`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
`;

const inboxSvg = svg`
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#999" width="40" height="40" viewBox="0 0 24 24">
    <path d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm2 0v12h14V6H5zm3 4h8a1 1 0 110 2H8a1 1 0 110-2z"></path>
  </svg>
`;

const chartSvg = svg`
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#999" width="56" height="56" viewBox="0 0 24 24">
    <path d="M3 3v16a2 2 0 002 2h16M8 15l4-4 4 4 4-4v6H8v-6z"></path>
  </svg>
`;

const heartSvg = svg`
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#999" width="32" height="32" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
  </svg>
`;

const alertSvg = svg`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert-icon lucide-circle-alert"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
`;

// ---------------------------------------------------
// 1. One-time inline CSS (put it once, near the top)
// ---------------------------------------------------
const sharedActionStyles = html`
  <style>
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
  </style>
`;

// ---------------------------------------------------
// 2. Tiny render-wrapper that adds the class when needed
// ---------------------------------------------------
const renderEmptyStateWithSharedActionStyles = (args: EmptyStateProps) => {
  const hasButton = !!args.buttonText;
  return html`
    ${sharedActionStyles}
    <ag-empty-state
      class=${hasButton ? 'empty-state-with-button' : ''}
      .title=${args.title}
      .subtitle=${args.subtitle}
      .buttonText=${args.buttonText}
      .size=${args.size}
      .bordered=${args.bordered}
      .rounded=${args.rounded}
    >
      <slot></slot>
    </ag-empty-state>
  `;
};

// === Stories ===

export const Default: Story = {
  args: {
    title: 'No items found',
    subtitle: 'Get started by creating your first item',
    buttonText: 'Create Item',
    size: 'md',
  },
  render: (args) => renderEmptyStateWithSharedActionStyles(args),
};

export const Basic: Story = {
  args: {
    title: 'No results',
    subtitle: 'Try adjusting your search or filter criteria',
  },
  render: (args) => html`<ag-empty-state .title=${args.title} .subtitle=${args.subtitle}></ag-empty-state>`,
};

export const Small: Story = {
  args: {
    title: 'No notifications',
    subtitle: 'You\'re all caught up!',
    size: 'sm',
  },
  render: (args) => html`<ag-empty-state .title=${args.title} .subtitle=${args.subtitle} .size=${args.size}></ag-empty-state>`,
};

export const Medium: Story = {
  args: {
    title: 'No projects yet',
    subtitle: 'Create your first project to get started',
    buttonText: 'New Project',
    size: 'md',
  },
  render: (args) => renderEmptyStateWithSharedActionStyles(args),
};

export const Large: Story = {
  args: {
    title: 'Welcome to Your Dashboard',
    subtitle: 'Start by adding some content to see it appear here',
    buttonText: 'Get Started',
    size: 'lg',
  },
  render: (args) => renderEmptyStateWithSharedActionStyles(args),
};

export const Bordered: Story = {
  args: {
    title: 'No data available',
    subtitle: 'Upload a file to see your data visualized',
    buttonText: 'Upload File',
    bordered: true,
  },
  render: (args) => renderEmptyStateWithSharedActionStyles(args),
};

export const Rounded: Story = {
  args: {
    title: 'Empty folder',
    subtitle: 'This folder contains no files yet',
    buttonText: 'Add Files',
    rounded: true,
  },
  render: (args) => renderEmptyStateWithSharedActionStyles(args),
};

export const BorderedAndRounded: Story = {
  args: {
    title: 'No messages',
    subtitle: 'Send your first message to start a conversation',
    buttonText: 'New Message',
    bordered: true,
    rounded: true,
  },
  render: (args) => renderEmptyStateWithSharedActionStyles(args),
};

// === Fixed: Custom Icon Stories with Proper SVGs ===

export const CustomIcon: Story = {
  args: {
    title: 'No Connections',
    subtitle: 'Click below to add some friends',
    buttonText: 'Add Friends',
  },
  render: (args) => html`
    ${sharedActionStyles}
    <ag-empty-state
      class="empty-state-with-button"
      .title=${args.title}
      .subtitle=${args.subtitle}
      .buttonText=${args.buttonText}
    >
      <ag-icon slot="icon" size="48">${personSvg}</ag-icon>
    </ag-empty-state>
  `,
};

export const CustomIconFolder: Story = {
  args: {
    title: 'No files',
    subtitle: 'Drag and drop files here to upload',
    size: 'lg',
    bordered: true,
    rounded: true,
  },
  render: (args) => html`
    <ag-empty-state
      .title=${args.title}
      .subtitle=${args.subtitle}
      .size=${args.size}
      .bordered=${args.bordered}
      .rounded=${args.rounded}
    >
      <ag-icon slot="icon" size="56" .noFill=${true}>${folderSvg}</ag-icon>
    </ag-empty-state>
  `,
};

export const CustomIconSearch: Story = {
  args: {
    title: 'No search results',
    subtitle: 'Try different keywords or remove filters',
    size: 'md',
  },
  render: (args) => html`
    <ag-empty-state .title=${args.title} .subtitle=${args.subtitle} .size=${args.size}>
      <ag-icon slot="icon" size="40" .noFill=${true}>${noSearchResultsSvg}</ag-icon>
    </ag-empty-state>
  `,
};

export const CustomActions: Story = {
  args: {
    title: 'No team members',
    subtitle: 'Invite people to collaborate on this project',
    size: 'sm',
  },
  render: (args) => html`
    <div style=${styleMap({ maxWidth: '325px' }) }>
      <ag-empty-state .title=${args.title} .subtitle=${args.subtitle} .size=${args.size}>
        <div slot="actions" style=${styleMap({ display: 'flex', gap: '0.5rem', justifyContent: 'center' }) }>
          <ag-button variant="primary" size="sm" shape="rounded" @click=${action('Invite clicked')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-plus-icon lucide-mail-plus"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M19 16v6"/><path d="M16 19h6"/></svg>
            <span style=${styleMap({ marginInlineStart: '4px' }) }>Invite Members</span>
          </ag-button>
          <ag-button variant="secondary" size="sm" shape="rounded" @click=${action('Learn more clicked')}>
            Learn More
          </ag-button>
        </div>
      </ag-empty-state>
    </div>
  `,
};

export const CustomActionsMultiple: Story = {
  args: {
    title: 'Start your journey',
    subtitle: 'Choose how you want to begin',
    size: 'lg',
    bordered: true,
    rounded: true,
  },
  render: (args) => html`
    <ag-empty-state
      .title=${args.title}
      .subtitle=${args.subtitle}
      .size=${args.size}
      .bordered=${args.bordered}
      .rounded=${args.rounded}
    >
      <ag-icon slot="icon" size="56" .noFill=${true}>${folderSvg}</ag-icon>
      <div slot="actions" style=${styleMap({ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }) }>
        <ag-button variant="primary" .ghost=${true} size="md" @click=${action('Create clicked')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Create New
        </ag-button>
        <ag-button variant="primary" .bordered=${true} shape="rounded" size="md" @click=${action('Import clicked')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-import-icon lucide-import"><path d="M12 3v12"/><path d="m8 11 4 4 4-4"/><path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"/></svg>
          <span style=${styleMap({ marginInlineStart: '4px' }) }>Import Data</span>
        </ag-button>
        <ag-button variant="primary" .bordered=${true} shape="rounded" size="md" @click=${action('Template clicked')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-icon lucide-file"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>
          <span style=${styleMap({ marginInlineStart: '4px' }) }>Use Template</span>
        </ag-button>
      </div>
    </ag-empty-state>
  `,
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
  render: (args) => html`
    <ag-empty-state
      .title=${args.title}
      .subtitle=${args.subtitle}
      .buttonText=${args.buttonText}
      .size=${args.size}
      .bordered=${args.bordered}
      .rounded=${args.rounded}
    >
      <ag-icon slot="icon" size="48" .noFill=${true}>${shoppingCartSvg}</ag-icon>
      <div slot="actions">
        <ag-button variant="primary" shape="rounded" size="md" @click=${action('Continue shopping clicked')}>
          Continue Shopping
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </ag-button>
      </div>
    </ag-empty-state>
  `,
};

export const Inbox: Story = {
  args: {
    title: 'Inbox Zero! 🎉',
    subtitle: 'All caught up. No new messages.',
    size: 'md',
  },
  render: (args) => html`
    <ag-empty-state .title=${args.title} .subtitle=${args.subtitle} .size=${args.size}>
      <ag-icon slot="icon" size="40" .noFill=${true} type="info">${inboxSvg}</ag-icon>
    </ag-empty-state>
  `,
};

export const Dashboard: Story = {
  args: {
    title: 'No analytics data yet',
    subtitle: 'Data will appear here once you start tracking events',
    buttonText: 'View Documentation',
    bordered: true,
    rounded: true,
  },
  render: (args) => html`
    <ag-empty-state
      .title=${args.title}
      .subtitle=${args.subtitle}
      .buttonText=${args.buttonText}
      .bordered=${args.bordered}
      .rounded=${args.rounded}
    >
      <ag-icon slot="icon" type="primary" size="56" .noFill=${true}>${chartSvg}</ag-icon>
      <div slot="actions">
        <ag-button variant="primary" .ghost=${true} @click=${action('View docs clicked')}>
          View Documentation
        </ag-button>
      </div>
    </ag-empty-state>
  `,
};

export const Favorites: Story = {
  args: {
    title: 'No favorites yet',
    subtitle: 'Mark items as favorites to see them here',
    size: 'sm',
  },
  render: (args) => html`
    <ag-empty-state .title=${args.title} .subtitle=${args.subtitle} .size=${args.size}>
      <ag-icon slot="icon" size="32" type="error">${heartSvg}</ag-icon>
    </ag-empty-state>
  `,
};

export const Customization: Story = {
  args: {
    title: 'Customized Empty State',
    subtitle: 'This uses CSS parts to customize the icon color',
    buttonText: 'Try It',
    bordered: true,
    rounded: true,
  },
  render: (args) => html`
    <style>
      .custom-empty::part(ag-icon) {
        color: #7a69e3;
      }
      /* style the whole actions area */
      .custom-empty::part(ag-actions) {
        display: flex;
        justify-content: center;
      }

      /* style the button itself */
      .custom-empty::part(ag-actions-button) {
        background: #4a37bc;
        color: white;
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        border: none;
      }
    </style>
    <ag-empty-state
      class="custom-empty"
      .title=${args.title}
      .subtitle=${args.subtitle}
      .buttonText=${args.buttonText}
      .bordered=${args.bordered}
      .rounded=${args.rounded}
    ></ag-empty-state>
  `,
};

export const MultipleStates: Story = {
  render: () => html`
    ${sharedActionStyles}
    <div style=${styleMap({ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }) }>
      <ag-empty-state class="empty-state-with-button" title="No tasks" subtitle="Create a task to get started" buttonText="New Task" size="sm" .bordered=${true} .rounded=${true}></ag-empty-state>
      <ag-empty-state class="empty-state-with-button" title="No tasks" subtitle="Create a task to get started" buttonText="New Task" size="sm" .bordered=${true} .rounded=${true}></ag-empty-state>
      <ag-empty-state class="empty-state-with-button" title="No events" subtitle="Schedule your first event" buttonText="Add Event" size="sm" .bordered=${true} .rounded=${true}></ag-empty-state>
      <ag-empty-state class="empty-state-with-button" title="No contacts" subtitle="Add contacts to your list" buttonText="Add Contact" size="sm" .bordered=${true} .rounded=${true}></ag-empty-state>
    </div>
  `,
};

export const Minimal: Story = {
  args: { title: 'Nothing here yet', size: 'sm' },
  render: (args) => html`<ag-empty-state .title=${args.title} .size=${args.size}></ag-empty-state>`,
};

export const MinimalWithSubtitle: Story = {
  args: { title: 'No activity', subtitle: 'Recent activity will appear here', size: 'md' },
  render: (args) => html`<ag-empty-state .title=${args.title} .subtitle=${args.subtitle} .size=${args.size}></ag-empty-state>`,
};

export const IconAndTitle: Story = {
  args: { title: 'Empty', size: 'md' },
  render: (args) => html`<ag-empty-state .title=${args.title} .size=${args.size}></ag-empty-state>`,
};

export const WithButtonVariants: Story = {
  args: {
    title: 'Choose your action',
    subtitle: 'Different button styles for different purposes',
    size: 'md',
    bordered: true,
    rounded: true,
  },
  render: (args) => html`
    <ag-empty-state
      .title=${args.title}
      .subtitle=${args.subtitle}
      .size=${args.size}
      .bordered=${args.bordered}
      .rounded=${args.rounded}
    >
      <ag-icon slot="icon" size="32" .noFill=${true}>${alertSvg}</ag-icon>
      <div slot="actions" style=${styleMap({ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }) }>
        <ag-button variant="primary" size="sm" shape="rounded" @click=${action('Primary clicked')}>Primary Action</ag-button>
        <ag-button variant="secondary" size="sm" shape="rounded" .bordered=${true} @click=${action('Secondary clicked')}>Secondary</ag-button>
        <ag-button size="sm" shape="rounded" .bordered=${true} @click=${action('Default clicked')}>Default</ag-button>
      </div>
    </ag-empty-state>
  `,
};

export const WithButtonSizes: Story = {
  args: {
    title: 'Different Button Sizes',
    subtitle: 'Choose the right size for your empty state',
    size: 'md',
    bordered: true,
  },
  render: (args) => html`
    <ag-empty-state
      .title=${args.title}
      .subtitle=${args.subtitle}
      .size=${args.size}
      .bordered=${args.bordered}
    >
      <ag-icon slot="icon" size="48" .noFill=${true}>${folderSvg}</ag-icon>
      <div slot="actions" style=${styleMap({ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }) }>
        <ag-button variant="primary" size="sm" shape="rounded" .bordered=${true} @click=${action('Small clicked')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic-icon lucide-mic"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></svg>
          Small
        </ag-button>
        <ag-button variant="primary" size="md" shape="rounded" .bordered=${true} @click=${action('Medium clicked')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic-icon lucide-mic"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></svg>
          Medium
        </ag-button>
        <ag-button variant="primary" size="lg" shape="rounded" .bordered=${true} @click=${action('Large clicked')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic-icon lucide-mic"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></svg>
          Large
        </ag-button>
      </div>
    </ag-empty-state>
  `,
};

export const WithWarningState: Story = {
  args: {
    title: 'Action Required',
    subtitle: 'This action cannot be undone',
    size: 'md',
    bordered: true,
    rounded: true,
  },
  render: (args) => html`
    <ag-empty-state
      .title=${args.title}
      .subtitle=${args.subtitle}
      .size=${args.size}
      .bordered=${args.bordered}
      .rounded=${args.rounded}
    >
      <ag-icon slot="icon" size="48" type="warning" .noFill=${true}>${alertSvg}</ag-icon>
      <div slot="actions" style=${styleMap({ display: 'flex', gap: '0.5rem', justifyContent: 'center' }) }>
        <ag-button variant="warning" size="md" @click=${action('Proceed clicked')}>Proceed Anyway</ag-button>
        <ag-button variant="secondary" size="md" @click=${action('Cancel clicked')}>Cancel</ag-button>
      </div>
    </ag-empty-state>
  `,
};

export const WithErrorState: Story = {
  args: {
    title: 'Something went wrong',
    subtitle: 'Please try again or contact support',
    size: 'md',
    bordered: true,
  },
  render: (args) => html`
    <ag-empty-state
      .title=${args.title}
      .subtitle=${args.subtitle}
      .size=${args.size}
      .bordered=${args.bordered}
    >
      <ag-icon slot="icon" size="48" .noFill=${true}>${alertSvg}</ag-icon>
      <div slot="actions" style=${styleMap({ display: 'flex', gap: '0.5rem', justifyContent: 'center' }) }>
        <ag-button variant="danger" shape="rounded" .bordered=${true} size="md" @click=${action('Retry clicked')}>Try Again</ag-button>
        <ag-button variant="secondary" shape="rounded" .bordered=${true} size="md" @click=${action('Support clicked')}>
          <span style=${styleMap({ marginInlineEnd: '0.125rem' }) }>Contact Support</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
        </ag-button>
      </div>
    </ag-empty-state>
  `,
};
