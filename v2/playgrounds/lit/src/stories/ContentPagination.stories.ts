import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import "agnosticui-core/content-pagination";
import type { ContentPaginationProps } from "agnosticui-core/content-pagination";
import { fn } from "storybook/test";

const meta: Meta<ContentPaginationProps> = {
  title: 'AgnosticUI Lit/ContentPagination',
  component: 'ag-content-pagination',
  tags: ['autodocs'],
  argTypes: {
    previous: { control: 'object', description: 'Previous content item' },
    next: { control: 'object', description: 'Next content item' },
    parent: { control: 'object', description: 'Parent/overview content item' },
    ariaLabel: { control: 'text', description: 'Alternative aria-label for the navigation' },
    bordered: { control: 'boolean', description: 'Whether to display borders around navigation links' },
    onNavigate: { action: 'navigate', description: 'Event fired when a navigation item is clicked' },
  },
  args: {
    previous: undefined,
    next: undefined,
    parent: undefined,
    ariaLabel: 'Content navigation',
    bordered: false,
    onNavigate: fn(),
  },
};

export default meta;
type Story = StoryObj<ContentPaginationProps>;

// ──────────────────────────────────────────────
// Template
// ──────────────────────────────────────────────
const Template = (args: ContentPaginationProps) => html`
  <ag-content-pagination
    .previous=${args.previous}
    .next=${args.next}
    .parent=${args.parent}
    aria-label=${args.ariaLabel ?? 'content navigation'}
    ?bordered=${args.bordered ?? false}
    @navigate=${(e: CustomEvent) => args.onNavigate?.(e.detail)}
  ></ag-content-pagination>
`;

// ──────────────────────────────────────────────
// Stories
// ──────────────────────────────────────────────

export const Default: Story = {
  render: Template,
  args: {
    previous: { title: 'Introduction', href: '/introduction' },
    next: { title: 'Getting Started', href: '/getting-started' },
    parent: { title: 'Documentation', href: '/documentation' },
  },
};

export const ParentOnly: Story = {
  render: Template,
  args: {
    parent: { title: 'Documentation', href: '/documentation' },
  },
};

export const PreviousOnly: Story = {
  render: Template,
  args: {
    previous: { title: 'Introduction', href: '/introduction' },
  },
};

export const NextOnly: Story = {
  render: Template,
  args: {
    next: { title: 'Getting Started', href: '/getting-started' },
  },
};

export const Bordered: Story = {
  render: Template,
  args: {
    previous: { title: 'Introduction', href: '/introduction' },
    next: { title: 'Getting Started', href: '/getting-started' },
    parent: { title: 'Documentation', href: '/documentation' },
    bordered: true,
  },
};

export const EventTesting: Story = {
  args: {
    previous: { title: 'Introduction' },
    next: { title: 'Getting Started' },
    parent: { title: 'Documentation' },
  },
  render: (args) => {
    const handleNavigate = (e: CustomEvent) => {
      e.preventDefault();
      const detail = e.detail;
      // Update Storybook Actions
      args.onNavigate?.(detail);

      // Update visible log in the page
      const log = document.querySelector('#navigate-log');
      if (log) {
        log.textContent = `Clicked: ${detail?.title || detail?.href || 'unknown'}`;
      }
    };

    return html`
      <div>
        <p><strong>Navigate Event:</strong></p>
        <p id="navigate-log">Click a link to see event details...</p>
        <ag-content-pagination
          .previous=${args.previous}
          .next=${args.next}
          .parent=${args.parent}
          aria-label=${args.ariaLabel ?? 'content navigation'}
          ?bordered=${args.bordered ?? false}
          @navigate=${handleNavigate}
        ></ag-content-pagination>
      </div>
    `;
  },
};
