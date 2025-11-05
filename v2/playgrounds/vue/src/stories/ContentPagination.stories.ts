import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { VueContentPagination } from "agnosticui-core/content-pagination/vue";
import type { VueContentPaginationProps } from "agnosticui-core/content-pagination/vue";
import { action } from 'storybook/actions';

const meta = {
  title: "AgnosticUI Vue/ContentPagination",
  component: VueContentPagination,
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
  args: {
    previous: { title: "Introduction", href: "/introduction" },
    next: { title: "Getting Started", href: "/getting-started" },
    parent: { title: "Documentation", href: "/documentation" },
    ariaLabel: "Content navigation",
  } as VueContentPaginationProps,
} satisfies Meta<typeof VueContentPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    previous: { title: "Introduction", href: "/introduction" },
    next: { title: "Getting Started", href: "/getting-started" },
    parent: { title: "Documentation", href: "/documentation" },
    ariaLabel: "Content navigation",
  } as VueContentPaginationProps,
  render: (args) => ({
    components: { VueContentPagination },
    setup() {
      return { args, onNavigate: (e: any) => action("navigate")(e) };
    },
    template: `<VueContentPagination v-bind="args" @navigate="onNavigate" />`,
  }),
};

export const NoHrefs: Story = {
    args: {
        previous: { title: "Introduction" },
        next: { title: "Getting Started" },
        parent: { title: "Documentation" },
        ariaLabel: "Content navigation",
    } as VueContentPaginationProps,
    render: (args) => ({
        components: { VueContentPagination },
        setup() {
          return { args, onNavigate: (e: any) => action("navigate")(e) };
        },
        template: `<VueContentPagination v-bind="args" @navigate="onNavigate" />`,
    }),
};

export const PreviousNextOnly: Story = {
    args: {
        previous: { title: "Introduction", href: "/introduction" },
        next: { title: "Getting Started", href: "/getting-started" },
    } as VueContentPaginationProps,
    render: (args) => ({
        components: { VueContentPagination },
        setup() {
            return { args, onNavigate: (e: any) => action("navigate")(e) };
        },
        template: `<VueContentPagination v-bind="args" @navigate="onNavigate" />`,
    }),
};

export const ParentOnly: Story = {
    args: {
        parent: { title: "Documentation", href: "/documentation" },
    } as VueContentPaginationProps,
    render: (args) => ({
        components: { VueContentPagination },
        setup() {
            return { args, onNavigate: (e: any) => action("navigate")(e) };
        },
        template: `<VueContentPagination v-bind="args" @navigate="onNavigate" />`,
    }),
};

export const Customization: Story = {
    args: {
        previous: { title: "Introduction", href: "/introduction" },
        next: { title: "Getting Started", href: "/getting-started" },
        parent: { title: "Documentation", href: "/documentation" },
    } as VueContentPaginationProps,
    render: (args) => ({
        components: { VueContentPagination },
        setup() {
            const styles = `
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
            `;
            return { args, styles, onNavigate: (e: any) => action("navigate")(e) };
        },
        template: `
            <div>
                <div v-html="styles"></div>
                <VueContentPagination v-bind="args" class="custom-content-pagination" @navigate="onNavigate">
                    <template #previous-icon><span>⬅️</span></template>
                    <template #next-icon><span>➡️</span></template>
                    <template #parent-icon><span>⬆️</span></template>
                </VueContentPagination>
            </div>
        `,
    }),
};
