import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactPagination, type ReactPaginationProps } from 'agnosticui-core/pagination/react';

const meta: Meta<ReactPaginationProps> = {
  title: 'AgnosticUI React/Pagination',
  component: ReactPagination,
  tags: ['autodocs'],
  argTypes: {
    current: {
      control: 'number',
      description: 'Current active page (1-indexed).',
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages.',
    },
    offset: {
      control: 'select',
      options: [1, 2],
      description: 'Number of page buttons to show on each side of current page.',
    },
    justify: {
      control: 'select',
      options: ['', 'start', 'center', 'end'],
      description: 'Horizontal alignment of pagination controls.',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for the navigation.',
    },
    bordered: {
      control: 'boolean',
      description: 'Show bordered style (outline instead of solid background for active page).',
    },
    firstLastNavigation: {
      control: 'boolean',
      description: 'Show first/last page navigation buttons.',
    },
    onPageChange: {
      action: 'page-change',
      description: 'Emitted when the page changes, with { page, pages } payload.',
    },
    className: {
      control: 'text',
      description: 'CSS class for additional styling.',
    },
    id: {
      control: 'text',
      description: 'ID for the pagination element.',
    },
  },
  args: {
    current: 1,
    totalPages: 10,
    offset: 2,
    justify: '',
    ariaLabel: 'pagination',
    bordered: false,
    firstLastNavigation: false,
    className: '',
    id: '',
    onPageChange: fn(),
  },
  parameters: {
    actions: {
      handles: ['page-change'],
    },
  },
} satisfies Meta<ReactPaginationProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    current: 1,
    totalPages: 10,
  },
  render: (args: ReactPaginationProps) => (
    <ReactPagination {...args} />
  ),
};

export const Centered: Story = {
  args: {
    current: 1,
    totalPages: 10,
    justify: 'center',
  },
  render: (args: ReactPaginationProps) => (
    <ReactPagination {...args} />
  ),
};

export const EndAligned: Story = {
  args: {
    current: 1,
    totalPages: 10,
    justify: 'end',
  },
  render: (args: ReactPaginationProps) => (
    <ReactPagination {...args} />
  ),
};

export const Bordered: Story = {
  args: {
    current: 5,
    totalPages: 10,
    bordered: true,
  },
  render: (args: ReactPaginationProps) => (
    <ReactPagination {...args} />
  ),
};

export const OffsetOne: Story = {
  args: {
    current: 5,
    totalPages: 20,
    offset: 1,
  },
  render: (args: ReactPaginationProps) => (
    <ReactPagination {...args} />
  ),
};

export const OffsetTwo: Story = {
  args: {
    current: 10,
    totalPages: 20,
    offset: 2,
  },
  render: (args: ReactPaginationProps) => (
    <ReactPagination {...args} />
  ),
};

export const FirstLast: Story = {
  args: {
    current: 5,
    totalPages: 10,
    firstLastNavigation: true,
  },
  render: (args: ReactPaginationProps) => (
    <ReactPagination {...args} />
  ),
};

export const CustomLabels: Story = {
  args: {
    current: 5,
    totalPages: 10,
    firstLastNavigation: true,
    navigationLabels: {
      first: 'Erste',
      previous: 'Zurück',
      next: 'Weiter',
      last: 'Letzte',
    },
  },
  render: (args: ReactPaginationProps) => (
    <ReactPagination {...args} />
  ),
};

export const LargeDataset: Story = {
  args: {
    current: 50,
    totalPages: 100,
    offset: 2,
  },
  render: (args: ReactPaginationProps) => (
    <ReactPagination {...args} />
  ),
};

export const SmallDataset: Story = {
  args: {
    current: 3,
    totalPages: 5,
    offset: 2,
  },
  render: (args: ReactPaginationProps) => (
    <ReactPagination {...args} />
  ),
};

export const SinglePage: Story = {
  args: {
    current: 1,
    totalPages: 1,
  },
  render: (args: ReactPaginationProps) => (
    <ReactPagination {...args} />
  ),
};

export const EventTesting: Story = {
  args: {
    current: 1,
    totalPages: 10,
  },
  render: (args: ReactPaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <div>
        <p>Current Page: {currentPage}</p>
        <ReactPagination
          {...args}
          current={currentPage}
          onPageChange={(event) => {
            setCurrentPage(event.detail.page);
            args.onPageChange?.(event);
          }}
        />
      </div>
    );
  },
};

export const ControlledPagination: Story = {
  args: {
    totalPages: 10,
  },
  render: (args: ReactPaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
      <div>
        <p><strong>Controlled Pagination Example:</strong></p>
        <div style={{ marginBottom: '1rem' }}>
          <button onClick={() => setCurrentPage(1)}>Go to Page 1</button>{' '}
          <button onClick={() => setCurrentPage(5)}>Go to Page 5</button>{' '}
          <button onClick={() => setCurrentPage(10)}>Go to Page 10</button>
        </div>
        <p>Current Page: {currentPage}</p>
        <ReactPagination
          {...args}
          current={currentPage}
          onPageChange={(event) => {
            setCurrentPage(event.detail.page);
            args.onPageChange?.(event);
          }}
        />
      </div>
    );
  },
};

export const OnPageChangeWithState: Story = {
  args: {
    totalPages: 10,
  },
  render: (args: ReactPaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [eventLog, setEventLog] = useState<string>('Click a page to see events...');

    return (
      <div>
        <p><strong>onPageChange Event Handler:</strong></p>
        <p>{eventLog}</p>
        <ReactPagination
          {...args}
          current={currentPage}
          onPageChange={(event) => {
            console.log('page-change event:', event.detail);
            setCurrentPage(event.detail.page);
            setEventLog(`Page: ${event.detail.page}, Pages array: ${JSON.stringify(event.detail.pages)}`);
            args.onPageChange?.(event);
          }}
        />
      </div>
    );
  },
};

export const CSSPartsCustomization: Story = {
  args: {
    current: 5,
    totalPages: 10,
    className: 'custom-pagination',
  },
  render: (args: ReactPaginationProps) => (
    <div>
      <style>{`
        .custom-pagination::part(ag-pagination-container) {
          gap: 0.5rem;
        }
        .custom-pagination::part(ag-pagination-button) {
          font-family: 'Comic Sans MS', cursive, sans-serif;
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
      `}</style>
      <ReactPagination {...args} />
    </div>
  ),
};
