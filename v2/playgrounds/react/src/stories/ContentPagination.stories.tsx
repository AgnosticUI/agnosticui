import type { Meta, StoryObj } from "@storybook/react";
import { ReactContentPagination } from "agnosticui-core/content-pagination/react";
import type { ReactContentPaginationProps, NavigateEvent } from "agnosticui-core/content-pagination/react";
import { action } from 'storybook/actions';

const meta: Meta<ReactContentPaginationProps> = {
  title: "AgnosticUI React/ContentPagination",
  component: ReactContentPagination,
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
    bordered: {
      control: "boolean",
      description: "Whether to display borders around navigation links",
    },
  },
} satisfies Meta<ReactContentPaginationProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    previous: { title: "Introduction", href: "/introduction" },
    next: { title: "Getting Started", href: "/getting-started" },
    parent: { title: "Documentation", href: "/documentation" },
    ariaLabel: "Content navigation",
    onNavigate: (e: NavigateEvent) => action("navigate")(e.detail),
  } as ReactContentPaginationProps,
  render: (args) => <ReactContentPagination {...args} />,
};

export const NoHrefs: Story = {
    args: {
        previous: { title: "Introduction" },
        next: { title: "Getting Started" },
        parent: { title: "Documentation" },
        ariaLabel: "Content navigation",
        onNavigate: (e: NavigateEvent) => action("navigate")(e.detail),
    } as ReactContentPaginationProps,
    render: (args) => <ReactContentPagination {...args} />,
};

export const PreviousNextOnly: Story = {
    args: {
        previous: { title: "Introduction", href: "/introduction" },
        next: { title: "Getting Started", href: "/getting-started" },
        onNavigate: (e: NavigateEvent) => action("navigate")(e.detail),
    } as ReactContentPaginationProps,
    render: (args) => <ReactContentPagination {...args} />,
};

export const ParentOnly: Story = {
    args: {
        parent: { title: "Documentation", href: "/documentation" },
        onNavigate: (e: NavigateEvent) => action("navigate")(e.detail),
    } as ReactContentPaginationProps,
    render: (args) => <ReactContentPagination {...args} />,
};

export const Bordered: Story = {
    args: {
        previous: { title: "Introduction", href: "/introduction" },
        next: { title: "Getting Started", href: "/getting-started" },
        parent: { title: "Documentation", href: "/documentation" },
        bordered: true,
        onNavigate: (e: NavigateEvent) => action("navigate")(e.detail),
    } as ReactContentPaginationProps,
    render: (args) => <ReactContentPagination {...args} />,
};

export const CustomIcons: Story = {
    args: {
        previous: { title: "Introduction", href: "/introduction" },
        next: { title: "Getting Started", href: "/getting-started" },
        parent: { title: "Documentation", href: "/documentation" },
        onNavigate: (e: NavigateEvent) => action("navigate")(e.detail),
    } as ReactContentPaginationProps,
    render: (args) => (
        <ReactContentPagination {...args}>
            <span slot="previous-icon">◀️</span>
            <span slot="next-icon">▶️</span>
            <span slot="parent-icon">⬆️</span>
        </ReactContentPagination>
    ),
};

export const Customization: Story = {
    args: {
        previous: { title: "Introduction", href: "/introduction" },
        next: { title: "Getting Started", href: "/getting-started" },
        parent: { title: "Documentation", href: "/documentation" },
        onNavigate: (e: NavigateEvent) => action("navigate")(e.detail),
    } as ReactContentPaginationProps,
    render: (args) => (
        <>
            <style>{`
                .custom-content-pagination::part(ag-content-pagination-container) {
                    padding: 1rem;
                }
                .custom-content-pagination::part(ag-content-pagination-parent):hover {
                    background-color: #dbeafe;
                }
                .custom-content-pagination::part(ag-content-pagination-link) {
                    color: #1d4ed8;
                    border-color: #93c5fd;
                }
                .custom-content-pagination::part(ag-content-pagination-link):hover {
                    background-color: #dbeafe;
                    border-color: #3b82f6;
                }
            `}</style>
            <ReactContentPagination {...args} className="custom-content-pagination">
                <span slot="previous-icon">‹️</span>
                <span slot="next-icon">›️</span>
                <span slot="parent-icon">⬆️</span>
            </ReactContentPagination>
        </>
    ),
};
