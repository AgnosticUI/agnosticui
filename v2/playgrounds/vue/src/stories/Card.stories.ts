import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueCard } from 'agnosticui-core/card/vue';
import type { VueCardProps } from 'agnosticui-core/card/vue';

const meta = {
  title: 'AgnosticUI Vue/Card',
  component: VueCard,
  argTypes: {
    stacked: {
      control: 'boolean',
      description: 'Applies vertical stacking with margin between slotted children',
      defaultValue: false,
    },
    shadow: {
      control: 'boolean',
      description: 'Applies box-shadow with hover enhancement',
      defaultValue: false,
    },
    animated: {
      control: 'boolean',
      description: 'Enables smooth transitions on hover (translateY + box-shadow)',
      defaultValue: false,
    },
    rounded: {
      control: 'boolean',
      description: 'Applies border-radius',
      options: ["", "sm", "md", "lg"],
      defaultValue: "",
    },
    variant: {
      control: 'select',
      options: ['', 'success', 'info', 'error', 'warning'],
      description: 'Color variant for semantic meaning',
      defaultValue: '',
    },
  },
  args: {
    stacked: false,
    shadow: false,
    animated: false,
    rounded: "",
    variant: '',
  } as VueCardProps,
} satisfies Meta<typeof VueCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueCard },
    setup() {
      return { args };
    },
    template: `
      <VueCard v-bind="args">
        <h3>Card Title</h3>
        <p>This is a basic card with default styling.</p>
      </VueCard>
    `,
  }),
};

export const Shadow: Story = {
  args: {
    shadow: true,
  },
  render: (args) => ({
    components: { VueCard },
    setup() {
      return { args };
    },
    template: `
      <VueCard v-bind="args">
        <template #header>
          <h3 style="margin: 0;">Product Details</h3>
        </template>
        <p>Hover over this card to see the enhanced shadow effect.</p>
      </VueCard>
    `,
  }),
};

export const Animated: Story = {
  args: {
    animated: true,
    shadow: true,
  },
  render: (args) => ({
    components: { VueCard },
    setup() {
      return { args };
    },
    template: `
      <VueCard v-bind="args">
        <h3>Animated Card</h3>
        <p>Hover over this card to see the smooth animation (translateY with shadow enhancement).</p>
        <template #footer>
          <button style="padding: 0.5rem 1rem;">View Details</button>
        </template>
      </VueCard>
    `,
  }),
};

export const Rounded: Story = {
  args: {
    rounded: "md",
  },
  render: (args) => ({
    components: { VueCard },
    setup() {
      return { args };
    },
    template: `
      <VueCard v-bind="args">
        <h3>Rounded Card</h3>
        <p>This card has rounded corners.</p>
      </VueCard>
    `,
  }),
};

export const Stacked: Story = {
  args: {
    stacked: true,
  },
  render: (args) => ({
    components: { VueCard },
    setup() {
      return { args };
    },
    template: `
      <VueCard v-bind="args">
        <h3>Stacked Content</h3>
        <p>First paragraph with automatic margin.</p>
        <p>Second paragraph with automatic margin.</p>
        <p>Third paragraph with automatic margin.</p>
      </VueCard>
    `,
  }),
};

export const SuccessVariant: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => ({
    components: { VueCard },
    setup() {
      return { args };
    },
    template: `
      <VueCard v-bind="args">
        <h3>Success</h3>
        <p>Operation completed successfully!</p>
      </VueCard>
    `,
  }),
};

export const InfoVariant: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => ({
    components: { VueCard },
    setup() {
      return { args };
    },
    template: `
      <VueCard v-bind="args">
        <template #header>
          <h3 style="margin: 0;">Information</h3>
        </template>
        <p>Here's some helpful information for you.</p>
      </VueCard>
    `,
  }),
};

export const ErrorVariant: Story = {
  args: {
    variant: 'error',
  },
  render: (args) => ({
    components: { VueCard },
    setup() {
      return { args };
    },
    template: `
      <VueCard v-bind="args">
        <h3>Error</h3>
        <p>Something went wrong. Please try again.</p>
      </VueCard>
    `,
  }),
};

export const WarningVariant: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => ({
    components: { VueCard },
    setup() {
      return { args };
    },
    template: `
      <VueCard v-bind="args">
        <h3>Warning</h3>
        <p>Please review this information carefully before proceeding.</p>
        <template #footer>
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <button style="padding: 0.5rem 1rem;">Dismiss</button>
            <button style="padding: 0.5rem 1rem;">Acknowledge</button>
          </div>
        </template>
      </VueCard>
    `,
  }),
};

export const WithSlots: Story = {
  args: {
    shadow: true,
  },
  render: (args) => ({
    components: { VueCard },
    setup() {
      return { args };
    },
    template: `
      <VueCard v-bind="args">
        <template #header>
          <h3 style="margin: 0;">Card Header</h3>
        </template>

        <div>
          <h4>Main Content</h4>
          <p>This card demonstrates the header, default, and footer slots.</p>
        </div>

        <template #footer>
          <div style="display: flex; gap: 0.5rem;">
            <button style="padding: 0.5rem 1rem;">Cancel</button>
            <button style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px;">
              Confirm
            </button>
          </div>
        </template>
      </VueCard>
    `,
  }),
};

export const ClickableCard: Story = {
  args: {
    shadow: true,
    animated: true,
  },
  render: (args) => ({
    components: { VueCard },
    setup() {
      return { args };
    },
    template: `
      <VueCard v-bind="args">
        <template #header>
          <h3 style="margin: 0;">
            <a href="#" class="card-primary-action" style="text-decoration: none; color: inherit;">
              Clickable Card
            </a>
          </h3>
        </template>
        <p>The entire card is clickable via the primary action link.</p>
        <p>You can still select this text without triggering navigation.</p>
      </VueCard>
    `,
  }),
};

export const WithSecondaryActions: Story = {
  args: {
    shadow: true,
    animated: true,
  },
  render: (args) => ({
    components: { VueCard },
    setup() {
      const handleDetailsClick = (e: Event) => {
        e.preventDefault();
        alert('Details clicked');
      };
      const handleAddToCartClick = (e: Event) => {
        e.preventDefault();
        alert('Add to Cart clicked');
      };
      return { args, handleDetailsClick, handleAddToCartClick };
    },
    template: `
      <VueCard v-bind="args">
        <template #header>
          <h3 style="margin: 0;">
            <a href="#" class="card-primary-action" style="text-decoration: none; color: inherit;">
              Product Title
            </a>
          </h3>
        </template>
        <p>This card has both a primary action (entire card) and secondary actions (buttons in footer).</p>
        <template #footer>
          <div style="display: flex; gap: 0.5rem;">
            <button
              class="card-secondary-action"
              style="padding: 0.5rem 1rem; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;"
              @click="handleDetailsClick"
            >
              Details
            </button>
            <button
              class="card-secondary-action"
              style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
              @click="handleAddToCartClick"
            >
              Add to Cart
            </button>
          </div>
        </template>
      </VueCard>
    `,
  }),
};

export const CombinedFeatures: Story = {
  args: {
    shadow: true,
    animated: true,
    rounded: "md",
    variant: 'success',
  },
  render: (args) => ({
    components: { VueCard },
    setup() {
      return { args };
    },
    template: `
      <VueCard v-bind="args">
        <h3>Premium Card</h3>
        <p>This card combines multiple features: shadow, animation, rounded corners, and success variant.</p>
        <p>Hover to see the smooth animation effect!</p>
      </VueCard>
    `,
  }),
};

export const Gallery: Story = {
  render: () => ({
    components: { VueCard },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
        <VueCard :is-shadow="true" :is-animated="true">
          <template #header>
            <h4 style="margin: 0;">Card 1</h4>
          </template>
          <p>Standard card with header, shadow and animation.</p>
        </VueCard>

        <VueCard :is-shadow="true" :is-animated="true" variant="success">
          <h4>Card 2</h4>
          <p>Success variant with shadow and animation.</p>
        </VueCard>

        <VueCard :is-shadow="true" :is-animated="true" variant="info">
          <template #header>
            <h4 style="margin: 0;">Card 3</h4>
          </template>
          <p>Info variant with header, shadow and animation.</p>
          <template #footer>
            <button style="padding: 0.25rem 0.75rem; font-size: 0.875rem;">Learn More</button>
          </template>
        </VueCard>

        <VueCard :is-shadow="true" :is-animated="true" variant="error">
          <h4>Card 4</h4>
          <p>Error variant with shadow and animation.</p>
        </VueCard>

        <VueCard :is-shadow="true" :is-animated="true" variant="warning">
          <template #header>
            <h4 style="margin: 0;">Card 5</h4>
          </template>
          <p>Warning variant with header.</p>
        </VueCard>

        <VueCard :is-shadow="true" :is-animated="true" :is-rounded="true">
          <h4>Card 6</h4>
          <p>Rounded corners with shadow and animation.</p>
          <template #footer>
            <button style="padding: 0.25rem 0.75rem; font-size: 0.875rem;">Action</button>
          </template>
        </VueCard>
      </div>
    `,
  }),
};

export const Customization: Story = {
  args: {
    shadow: true,
  },
  render: (args) => ({
    components: { VueCard },
    setup() {
      // Inject styles dynamically
      const styleId = 'custom-card-styles';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          .custom-card::part(ag-card-wrapper) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 2rem;
          }
          .custom-card::part(ag-card-header) {
            border-bottom: 2px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 1rem;
            margin-bottom: 1rem;
          }
          .custom-card::part(ag-card-content) {
            color: white;
            font-size: 1.1rem;
          }
          .custom-card::part(ag-card-footer) {
            border-top: 2px solid rgba(255, 255, 255, 0.3);
            padding-top: 1rem;
            margin-top: 1rem;
          }
        `;
        document.head.appendChild(style);
      }
      return { args };
    },
    template: `
      <VueCard v-bind="args" class="custom-card">
        <template #header>
          <h3 style="margin: 0; color: white;">Customized with CSS Parts</h3>
        </template>

        <p>This card demonstrates CSS Shadow Parts customization.</p>
        <p>The wrapper, header, content, and footer are all styled using ::part() selectors.</p>

        <template #footer>
          <button style="padding: 0.5rem 1rem; background: white; color: #667eea; border: none; border-radius: 4px; cursor: pointer;">
            Learn More
          </button>
        </template>
      </VueCard>
    `,
  }),
};
