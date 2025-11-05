import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { fn } from "storybook/test";
import { useArgs } from "storybook/preview-api";
import "agnosticui-core/pagination";
import type { PaginationProps, PageChangeEvent } from "agnosticui-core/pagination";

const meta: Meta<PaginationProps> = {
  title: "AgnosticUI Lit/Pagination",
  component: "ag-pagination",
  tags: ["autodocs"],
  argTypes: {
    current: {
      control: "number",
      description: "Current active page (1-indexed).",
    },
    totalPages: {
      control: "number",
      description: "Total number of pages.",
    },
    offset: {
      control: "select",
      options: [1, 2],
      description: "Number of page buttons to show on each side of current page.",
    },
    justify: {
      control: "select",
      options: ["", "start", "center", "end"],
      description: "Horizontal alignment of pagination controls.",
    },
    ariaLabel: {
      control: "text",
      description: "ARIA label for the navigation.",
    },
    bordered: {
      control: "boolean",
      description: "Show bordered style.",
    },
    firstLastNavigation: {
      control: "boolean",
      description: "Show first/last page navigation buttons.",
    },
  },
  args: {
    current: 1,
    totalPages: 10,
    offset: 2,
    justify: "",
    ariaLabel: "pagination",
    bordered: false,
    firstLastNavigation: true,
    onPageChange: fn(),
  },
};

export default meta;
type Story = StoryObj<PaginationProps>;

export const Default: Story = {
  args: {
    current: 1,
    totalPages: 10,
  },
  render: ({ current, totalPages, onPageChange }) => html`
    <ag-pagination
      .current=${current}
      .totalPages=${totalPages}
      @page-change=${(e: CustomEvent) => onPageChange(e.detail)}
    ></ag-pagination>
  `,
};

export const Centered: Story = {
  args: {
    current: 1,
    totalPages: 10,
    justify: "center",
  },
  render: ({ current, totalPages, justify, onPageChange }) => html`
    <ag-pagination
      .current=${current}
      .totalPages=${totalPages}
      justify=${justify}
      @page-change=${(e: CustomEvent) => onPageChange(e.detail)}
    ></ag-pagination>
  `,
};

export const EndAligned: Story = {
  args: {
    current: 1,
    totalPages: 10,
    justify: "end",
  },
  render: ({ current, totalPages, justify, onPageChange }) => html`
    <ag-pagination
      .current=${current}
      .totalPages=${totalPages}
      justify=${justify}
      @page-change=${(e: CustomEvent) => onPageChange(e.detail)}
    ></ag-pagination>
  `,
};

export const Bordered: Story = {
  args: {
    current: 5,
    totalPages: 10,
    bordered: true,
  },
  render: ({ current, totalPages, bordered, onPageChange }) => html`
    <ag-pagination
      .current=${current}
      .totalPages=${totalPages}
      ?bordered=${bordered}
      @page-change=${(e: CustomEvent) => onPageChange(e.detail)}
    ></ag-pagination>
  `,
};

export const OffsetOne: Story = {
  args: {
    current: 5,
    totalPages: 20,
    offset: 1,
  },
  render: ({ current, totalPages, offset, onPageChange }) => html`
    <ag-pagination
      .current=${current}
      .totalPages=${totalPages}
      .offset=${offset}
      @page-change=${(e: CustomEvent) => onPageChange(e.detail)}
    ></ag-pagination>
  `,
};

export const OffsetTwo: Story = {
  args: {
    current: 10,
    totalPages: 20,
    offset: 2,
  },
  render: ({ current, totalPages, offset, onPageChange }) => html`
    <ag-pagination
      .current=${current}
      .totalPages=${totalPages}
      .offset=${offset}
      @page-change=${(e: CustomEvent) => onPageChange(e.detail)}
    ></ag-pagination>
  `,
};

export const NoFirstLast: Story = {
  args: {
    current: 5,
    totalPages: 10,
    firstLastNavigation: false,
  },
  render: ({ current, totalPages, firstLastNavigation, onPageChange }) => html`
    <ag-pagination
      .current=${current}
      .totalPages=${totalPages}
      ?first-last-navigation=${firstLastNavigation}
      @page-change=${(e: CustomEvent) => onPageChange(e.detail)}
    ></ag-pagination>
  `,
};

export const CustomLabels: Story = {
  args: {
    current: 5,
    totalPages: 10,
  },
  render: ({ current, totalPages, onPageChange }) => html`
    <ag-pagination
      .current=${current}
      .totalPages=${totalPages}
      .navigationLabels=${{
        first: 'Erste',
        previous: 'Zurück',
        next: 'Weiter',
        last: 'Letzte',
      }}
      @page-change=${(e: CustomEvent) => onPageChange(e.detail)}
    ></ag-pagination>
  `,
};

export const LargeDataset: Story = {
  args: {
    current: 50,
    totalPages: 100,
    offset: 2,
  },
  render: ({ current, totalPages, offset, onPageChange }) => html`
    <ag-pagination
      .current=${current}
      .totalPages=${totalPages}
      .offset=${offset}
      @page-change=${(e: CustomEvent) => onPageChange(e.detail)}
    ></ag-pagination>
  `,
};

export const SmallDataset: Story = {
  args: {
    current: 3,
    totalPages: 5,
    offset: 2,
  },
  render: ({ current, totalPages, offset, onPageChange }) => html`
    <ag-pagination
      .current=${current}
      .totalPages=${totalPages}
      .offset=${offset}
      @page-change=${(e: CustomEvent) => onPageChange(e.detail)}
    ></ag-pagination>
  `,
};

export const SinglePage: Story = {
  args: {
    current: 1,
    totalPages: 1,
  },
  render: ({ current, totalPages, onPageChange }) => html`
    <ag-pagination
      .current=${current}
      .totalPages=${totalPages}
      @page-change=${(e: CustomEvent) => onPageChange(e.detail)}
    ></ag-pagination>
  `,
};

export const EventTesting: Story = {
  args: {
    totalPages: 10,
  },
  render: () => {
    const [args, updateArgs] = useArgs();
    const handlePageChange = (e: PageChangeEvent) => {
      updateArgs({ current: e.detail.page });
      args.onPageChange?.(e.detail);
    };
    return html`
      <p>Current Page: ${args.current ?? 1}</p>
      <ag-pagination
        .current=${args.current}
        .totalPages=${args.totalPages}
        @page-change=${handlePageChange}
      ></ag-pagination>
    `;
  },
};

export const EventListenerPattern: Story = {
  args: {
    totalPages: 10,
  },
  render: ({ totalPages }) => {
    const handlePageChange = (e: PageChangeEvent) => {
      console.log('page-change event (addEventListener):', e.detail);
      const logElement = document.querySelector('#event-log-listener');
      if (logElement) {
        logElement.textContent = `Page: ${e.detail.page}, Pages: ${JSON.stringify(e.detail.pages)}`;
      }
    };

    setTimeout(() => {
      const pagination = document.querySelector('#pagination-listener');
      if (pagination) {
        pagination.addEventListener('page-change', handlePageChange as EventListener);
      }
    }, 0);

    return html`
      <div>
        <p><strong>addEventListener Pattern:</strong></p>
        <p id="event-log-listener">Click a page to see event details...</p>
        <ag-pagination
          id="pagination-listener"
          .totalPages=${totalPages}
        ></ag-pagination>
      </div>
    `;
  },
};

export const CallbackPropPattern: Story = {
  args: {
    totalPages: 10,
  },
  render: ({ totalPages }) => {
    const handlePageChange = (e: PageChangeEvent) => {
      console.log('page-change event (callback prop):', e.detail);
      const logElement = document.querySelector('#event-log-callback');
      if (logElement) {
        logElement.textContent = `Page: ${e.detail.page}, Pages: ${JSON.stringify(e.detail.pages)}`;
      }
    };

    setTimeout(() => {
      const pagination = document.querySelector('#pagination-callback') as any;
      if (pagination) {
        pagination.onPageChange = handlePageChange;
      }
    }, 0);

    return html`
      <div>
        <p><strong>Callback Prop Pattern:</strong></p>
        <p id="event-log-callback">Click a page to see event details...</p>
        <ag-pagination
          id="pagination-callback"
          .totalPages=${totalPages}
        ></ag-pagination>
      </div>
    `;
  },
};

export const DualDispatchPattern: Story = {
  args: {
    totalPages: 10,
  },
  render: ({ totalPages }) => {
    const handlePageChangeListener = (e: PageChangeEvent) => {
      console.log('page-change event (addEventListener):', e.detail);
      const logElement = document.querySelector('#event-log-listener-dual');
      if (logElement) {
        logElement.textContent = `Listener - Page: ${e.detail.page}`;
      }
    };

    const handlePageChangeCallback = (e: PageChangeEvent) => {
      console.log('page-change event (callback prop):', e.detail);
      const logElement = document.querySelector('#event-log-callback-dual');
      if (logElement) {
        logElement.textContent = `Callback - Page: ${e.detail.page}`;
      }
    };

    setTimeout(() => {
      const pagination = document.querySelector('#pagination-dual') as any;
      if (pagination) {
        pagination.addEventListener('page-change', handlePageChangeListener as EventListener);
        pagination.onPageChange = handlePageChangeCallback;
      }
    }, 0);

    return html`
      <div>
        <p><strong>Dual Dispatch Pattern (Both patterns work simultaneously):</strong></p>
        <p id="event-log-listener-dual">addEventListener: Click a page...</p>
        <p id="event-log-callback-dual">Callback prop: Click a page...</p>
        <ag-pagination
          id="pagination-dual"
          .totalPages=${totalPages}
        ></ag-pagination>
      </div>
    `;
  },
};

export const CSSPartsCustomization: Story = {
  args: {
    current: 5,
    totalPages: 10,
  },
  render: ({ current, totalPages, onPageChange }) => html`
    <style>
      .custom-pagination::part(ag-pagination-container) {
        gap: 0.5rem;
      }
      .custom-pagination::part(ag-pagination-button) {
        font-family: "Comic Sans MS", cursive, sans-serif;
        font-size: 1.1rem;
        background-color: #f0f0f0;
        border-radius: 50%;
        min-width: 2.5rem;
        min-height: 2.5rem;
      }
      .custom-pagination::part(ag-pagination-button):hover {
        background-color: #e0e0e0;
      }
      .custom-pagination .pagination-item-active .pagination-button {
        background-color: #bada55 !important;
        color: #fff;
      }
    </style>
    <ag-pagination
      class="custom-pagination"
      .current=${current}
      .totalPages=${totalPages}
      @page-change=${(e: CustomEvent) => onPageChange?.(e.detail)}
    ></ag-pagination>
  `,
};
