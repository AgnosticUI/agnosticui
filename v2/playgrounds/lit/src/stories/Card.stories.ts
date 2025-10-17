import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/card';
import type { CardProps } from 'agnosticui-core/card';

const meta: Meta<CardProps> = {
  title: 'AgnosticUI Lit/Card',
  component: 'ag-card',
  argTypes: {
    isSkinned: {
      control: 'boolean',
      description: 'Applies background color and border',
      defaultValue: true,
    },
    isStacked: {
      control: 'boolean',
      description: 'Applies vertical stacking with margin between slotted children',
      defaultValue: false,
    },
    isShadow: {
      control: 'boolean',
      description: 'Applies box-shadow with hover enhancement',
      defaultValue: false,
    },
    isAnimated: {
      control: 'boolean',
      description: 'Enables smooth transitions on hover (translateY + box-shadow)',
      defaultValue: false,
    },
    isRounded: {
      control: 'boolean',
      description: 'Applies border-radius',
      defaultValue: false,
    },
    variant: {
      control: 'select',
      options: ['', 'success', 'info', 'error', 'warning'],
      description: 'Color variant for semantic meaning',
      defaultValue: '',
    },
  },
  args: {
    isSkinned: true,
    isStacked: false,
    isShadow: false,
    isAnimated: false,
    isRounded: false,
    variant: '',
  },
};

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <h3>Card Title</h3>
      <p>This is a basic card with default styling.</p>
    </ag-card>
  `,
};

export const Unskinned: Story = {
  args: {
    isSkinned: false,
  },
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <h3>Unskinned Card</h3>
      <p>No background or border applied.</p>
    </ag-card>
  `,
};

export const Shadow: Story = {
  args: {
    isShadow: true,
  },
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <h3>Card with Shadow</h3>
      <p>Hover over this card to see the enhanced shadow effect.</p>
    </ag-card>
  `,
};

export const Animated: Story = {
  args: {
    isAnimated: true,
    isShadow: true,
  },
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <h3>Animated Card</h3>
      <p>Hover over this card to see the smooth animation (translateY with shadow enhancement).</p>
    </ag-card>
  `,
};

export const Rounded: Story = {
  args: {
    isRounded: true,
  },
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <h3>Rounded Card</h3>
      <p>This card has rounded corners.</p>
    </ag-card>
  `,
};

export const Stacked: Story = {
  args: {
    isStacked: true,
  },
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <h3>Stacked Content</h3>
      <p>First paragraph with automatic margin.</p>
      <p>Second paragraph with automatic margin.</p>
      <p>Third paragraph with automatic margin.</p>
    </ag-card>
  `,
};

export const SuccessVariant: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <h3>Success</h3>
      <p>Operation completed successfully!</p>
    </ag-card>
  `,
};

export const InfoVariant: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <h3>Information</h3>
      <p>Here's some helpful information for you.</p>
    </ag-card>
  `,
};

export const ErrorVariant: Story = {
  args: {
    variant: 'error',
  },
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <h3>Error</h3>
      <p>Something went wrong. Please try again.</p>
    </ag-card>
  `,
};

export const WarningVariant: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <h3>Warning</h3>
      <p>Please review this information carefully before proceeding.</p>
    </ag-card>
  `,
};

export const WithSlots: Story = {
  args: {
    isShadow: true,
  },
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <div slot="header" style="padding: 1rem; background: #f5f5f5; border-bottom: 1px solid #ddd;">
        <h3 style="margin: 0;">Card Header</h3>
      </div>

      <div>
        <h4>Main Content</h4>
        <p>This card demonstrates the header, default, and footer slots.</p>
      </div>

      <div slot="footer" style="padding: 1rem; background: #f5f5f5; border-top: 1px solid #ddd; display: flex; gap: 0.5rem;">
        <button style="padding: 0.5rem 1rem;">Cancel</button>
        <button style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px;">Confirm</button>
      </div>
    </ag-card>
  `,
};

export const ClickableCard: Story = {
  args: {
    isShadow: true,
    isAnimated: true,
  },
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <a href="#" class="card-primary-action" style="text-decoration: none; color: inherit;">
        <h3>Clickable Card</h3>
      </a>
      <p>The entire card is clickable via the primary action link.</p>
      <p>You can still select this text without triggering navigation.</p>
    </ag-card>
  `,
};

export const WithSecondaryActions: Story = {
  args: {
    isShadow: true,
    isAnimated: true,
  },
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <a href="#" class="card-primary-action" style="text-decoration: none; color: inherit;">
        <h3>Product Title</h3>
      </a>
      <p>This card has both a primary action (entire card) and secondary actions (buttons below).</p>
      <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
        <button
          class="card-secondary-action"
          style="padding: 0.5rem 1rem; background: white; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;"
          onclick="event.preventDefault(); alert('Details clicked');"
        >
          Details
        </button>
        <button
          class="card-secondary-action"
          style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
          onclick="event.preventDefault(); alert('Add to Cart clicked');"
        >
          Add to Cart
        </button>
      </div>
    </ag-card>
  `,
};

export const CombinedFeatures: Story = {
  args: {
    isShadow: true,
    isAnimated: true,
    isRounded: true,
    variant: 'success',
  },
  render: (args) => html`
    <ag-card
      .isSkinned=${args.isSkinned}
      .isStacked=${args.isStacked}
      .isShadow=${args.isShadow}
      .isAnimated=${args.isAnimated}
      .isRounded=${args.isRounded}
      .variant=${args.variant}
    >
      <h3>Premium Card</h3>
      <p>This card combines multiple features: shadow, animation, rounded corners, and success variant.</p>
      <p>Hover to see the smooth animation effect!</p>
    </ag-card>
  `,
};

export const Gallery: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
      <ag-card isshadow isanimated>
        <h4>Card 1</h4>
        <p>Standard card with shadow and animation.</p>
      </ag-card>

      <ag-card isshadow isanimated variant="success">
        <h4>Card 2</h4>
        <p>Success variant with shadow and animation.</p>
      </ag-card>

      <ag-card isshadow isanimated variant="info">
        <h4>Card 3</h4>
        <p>Info variant with shadow and animation.</p>
      </ag-card>

      <ag-card isshadow isanimated variant="error">
        <h4>Card 4</h4>
        <p>Error variant with shadow and animation.</p>
      </ag-card>

      <ag-card isshadow isanimated variant="warning">
        <h4>Card 5</h4>
        <p>Warning variant with shadow and animation.</p>
      </ag-card>

      <ag-card isshadow isanimated isrounded>
        <h4>Card 6</h4>
        <p>Rounded corners with shadow and animation.</p>
      </ag-card>
    </div>
  `,
};
