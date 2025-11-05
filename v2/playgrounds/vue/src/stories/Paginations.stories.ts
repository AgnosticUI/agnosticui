import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { fn } from "storybook/test";
import VuePagination from "agnosticui-core/pagination/vue";
import type { VuePaginationProps, VuePaginationPropsWithEvents } from "agnosticui-core/pagination/vue";
import { ref } from 'vue';

const meta = {
  title: "AgnosticUI Vue/Pagination",
  component: VuePagination as any,
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
    firstLastNavigation: false,
    onPageChange: fn(),
  },
} satisfies Meta<VuePaginationPropsWithEvents>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base render function to reduce repetition for simple variants
const renderPagination = (args: VuePaginationProps) => ({
  components: { VuePagination },
  setup() {
    return { args };
  },
  template: `
    <VuePagination
      :current="args.current"
      :total-pages="args.totalPages"
      :offset="args.offset"
      :justify="args.justify"
      :aria-label="args.ariaLabel"
      :bordered="args.bordered"
      :first-last-navigation="args.firstLastNavigation"
      :navigation-labels="args.navigationLabels"
      @page-change="args.onPageChange"
    />
  `,
});

export const Default: Story = {
  args: {
    current: 1,
    totalPages: 10,
  },
  render: (args) => ({
    components: { VuePagination },
    setup() {
      return { args };
    },
    template: `
      <VuePagination
        :current="args.current"
        :total-pages="args.totalPages"
        @page-change="args.onPageChange"
      />
    `,
  }),
};

export const Centered: Story = {
  args: {
    current: 1,
    totalPages: 10,
    justify: 'center',
  },
  render: renderPagination,
};

export const EndAligned: Story = {
  args: {
    current: 1,
    totalPages: 10,
    justify: 'end',
  },
  render: renderPagination,
};

export const Bordered: Story = {
  args: {
    current: 5,
    totalPages: 10,
    bordered: true,
  },
  render: renderPagination,
};

export const OffsetOne: Story = {
  args: {
    current: 5,
    totalPages: 20,
    offset: 1,
  },
  render: renderPagination,
};

export const OffsetTwo: Story = {
  args: {
    current: 10,
    totalPages: 20,
    offset: 2,
  },
  render: renderPagination,
};

export const FirstLast: Story = {
  args: {
    current: 5,
    totalPages: 10,
    firstLastNavigation: true,
  },
  render: renderPagination,
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
  render: renderPagination,
};

export const LargeDataset: Story = {
  args: {
    current: 50,
    totalPages: 100,
    offset: 2,
  },
  render: renderPagination,
};

export const SmallDataset: Story = {
  args: {
    current: 3,
    totalPages: 5,
    offset: 2,
  },
  render: renderPagination,
};

export const SinglePage: Story = {
  args: {
    current: 1,
    totalPages: 1,
  },
  render: renderPagination,
};

export const EventTesting: Story = {
  args: {
    totalPages: 10,
  },
  render: (args: VuePaginationPropsWithEvents) => ({
    components: { VuePagination },
    setup() {
      const currentPage = ref(args.current || 1);
      const eventMessage = ref('');
      const onPageChange = (detail: { page: number; pages: (number | '...')[] }) => {
        currentPage.value = detail.page;
        eventMessage.value = `Page changed to ${detail.page}`;
        args.onPageChange?.(detail);
      };
      return { args, currentPage, onPageChange, eventMessage };
    },
    template: `
      <div>
        <p>Current Page: {{ currentPage }}</p>
        <VuePagination
          :current="currentPage"
          :total-pages="args.totalPages"
          @page-change="onPageChange"
        />
        <p v-if="eventMessage" style="margin-top: 1rem; color: green;">{{ eventMessage }}</p>
      </div>
    `,
  }),
};

export const VModelCurrent: Story = {
  args: {
    totalPages: 10,
  },
  render: (args: VuePaginationProps) => ({
    components: { VuePagination },
    setup() {
      const currentPage = ref(1);
      return { args, currentPage };
    },
    template: `
      <div>
        <p><strong>v-model:current Pattern:</strong></p>
        <div style="margin-bottom: 1rem">
          <button @click="currentPage = 1">Go to Page 1</button>
          <button @click="currentPage = 5">Go to Page 5</button>
          <button @click="currentPage = 10">Go to Page 10</button>
        </div>
        <p>Current Page: {{ currentPage }}</p>
        <VuePagination
          v-model:current="currentPage"
          :total-pages="args.totalPages"
        />
      </div>
    `,
  }),
};

export const PageChangeEvent: Story = {
  args: {
    totalPages: 10,
  },
  render: (args: VuePaginationPropsWithEvents) => ({
    components: { VuePagination },
    setup() {
      const eventLog = ref('Click a page to see events...');
      const onPageChange = (detail: { page: number; pages: (number | '...')[] }) => {
        console.log('@page-change event:', detail);
        eventLog.value = `Page: ${detail.page}, Pages: ${JSON.stringify(detail.pages)}`;
        args.onPageChange?.(detail);
      };
      return { args, eventLog, onPageChange };
    },
    template: `
      <div>
        <p><strong>@page-change Event Handler:</strong></p>
        <p>{{ eventLog }}</p>
        <VuePagination
          :total-pages="args.totalPages"
          @page-change="onPageChange"
        />
      </div>
    `,
  }),
};

export const BothPatterns: Story = {
  args: {
    totalPages: 10,
  },
  render: (args: VuePaginationPropsWithEvents) => ({
    components: { VuePagination },
    setup() {
      const currentPage = ref(1);
      const eventLog = ref('Click a page or button...');
      const onPageChange = (detail: { page: number; pages: (number | '...')[] }) => {
        console.log('@page-change event:', detail);
        eventLog.value = `Event fired! Page: ${detail.page}`;
        args.onPageChange?.(detail);
      };
      return { args, currentPage, eventLog, onPageChange };
    },
    template: `
      <div>
        <p><strong>Combined v-model:current + @page-change:</strong></p>
        <div style="margin-bottom: 1rem">
          <button @click="currentPage = 1">Go to Page 1</button>
          <button @click="currentPage = 5">Go to Page 5</button>
          <button @click="currentPage = 10">Go to Page 10</button>
        </div>
        <p>Current Page: {{ currentPage }}</p>
        <p>{{ eventLog }}</p>
        <VuePagination
          v-model:current="currentPage"
          :total-pages="args.totalPages"
          @page-change="onPageChange"
        />
      </div>
    `,
  }),
};

export const CSSPartsCustomization: Story = {
  args: {
    current: 5,
    totalPages: 10,
  },
  render: (args: VuePaginationProps) => ({
    components: { VuePagination },
    setup() {
      const styles = `
        <style>
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
        </style>
      `;
      return { args, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <VuePagination
          class="custom-pagination"
          :current="args.current"
          :total-pages="args.totalPages"
          @page-change="args.onPageChange"
        />
      </div>
    `,
  }),
};
