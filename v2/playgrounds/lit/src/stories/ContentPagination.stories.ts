import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/content-pagination";
import type { ContentPaginationProps } from "agnosticui-core/content-pagination";
import { action } from "@storybook/addon-actions";

const meta: Meta<ContentPaginationProps> = {
  title: "AgnosticUI Lit/ContentPagination",
  component: "ag-content-pagination",
  argTypes: {
    previous: {
      control: "object",
      description: "Previous content item",
    },
    next: {
      control: "object",
      description: "Next content item",
    },
    parent: {
      control: "object",
      description: "Parent/overview content item",
    },
    ariaLabel: {
      control: "text",
      description: "Alternative aria-label for the navigation",
    },
  },
};

export default meta;
type Story = StoryObj<ContentPaginationProps>;

export const Default: Story = {
  args: {
    previous: { title: "Introduction", href: "/introduction" },
    next: { title: "Getting Started", href: "/getting-started" },
    parent: { title: "Documentation", href: "/documentation" },
    ariaLabel: "Content navigation",
  },
  render: (args) => html`
    <ag-content-pagination
      .previous=${args.previous}
      .next=${args.next}
      .parent=${args.parent}
      .ariaLabel=${args.ariaLabel}
      @navigate=${(e: CustomEvent) => action("navigate")(e.detail)}
    ></ag-content-pagination>
  `,
};

export const NoHrefs: Story = {
    args: {
      previous: { title: "Introduction" },
      next: { title: "Getting Started" },
      parent: { title: "Documentation" },
      ariaLabel: "Content navigation",
    },
    render: (args) => html`
      <ag-content-pagination
        .previous=${args.previous}
        .next=${args.next}
        .parent=${args.parent}
        .ariaLabel=${args.ariaLabel}
        @navigate=${(e: CustomEvent) => action("navigate")(e.detail)}
      ></ag-content-pagination>
    `,
  };

export const PreviousNextOnly: Story = {
  args: {
    previous: { title: "Introduction", href: "/introduction" },
    next: { title: "Getting Started", href: "/getting-started" },
  },
  render: (args) => html`
    <ag-content-pagination
      .previous=${args.previous}
      .next=${args.next}
      @navigate=${(e: CustomEvent) => action("navigate")(e.detail)}
    ></ag-content-pagination>
  `,
};

export const ParentOnly: Story = {
  args: {
    parent: { title: "Documentation", href: "/documentation" },
  },
  render: (args) => html`
    <ag-content-pagination
      .parent=${args.parent}
      @navigate=${(e: CustomEvent) => action("navigate")(e.detail)}
    ></ag-content-pagination>
  `,
};

export const Customization: Story = {
    args: {
        previous: { title: "Introduction", href: "/introduction" },
        next: { title: "Getting Started", href: "/getting-started" },
        parent: { title: "Documentation", href: "/documentation" },
      },
    render: (args) => html`
    <style>
      .custom-content-pagination::part(ag-content-pagination-container) {
        border: 2px solid #1e40af;
        border-radius: 0.5rem;
        padding: 1rem;
      }
      .custom-content-pagination::part(ag-content-pagination-parent) {
        background-color: #dbeafe;
      }
      .custom-content-pagination::part(ag-content-pagination-link) {
        background-color: #eff6ff;
        color: #1d4ed8;
        border-color: #93c5fd;
      }
      .custom-content-pagination::part(ag-content-pagination-link):hover {
        background-color: #dbeafe;
        border-color: #3b82f6;
      }
    </style>
    <ag-content-pagination
      class="custom-content-pagination"
      .previous=${args.previous}
      .next=${args.next}
      .parent=${args.parent}
      @navigate=${(e: CustomEvent) => action("navigate")(e.detail)}
    >
        <span slot="previous-icon">⬅️</span>
        <span slot="next-icon">➡️</span>
        <span slot="parent-icon">⬆️</span>
    </ag-content-pagination>
  `,
};