import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/card";
import type { CardProps } from "agnosticui-core/card";

const meta: Meta<CardProps> = {
  title: "AgnosticUI Lit/Card",
  component: "ag-card",
  argTypes: {
    skinned: {
      control: "boolean",
      description: "Applies background color and border",
      defaultValue: true,
    },
    stacked: {
      control: "boolean",
      description:
        "Applies vertical stacking with margin between slotted children",
      defaultValue: false,
    },
    shadow: {
      control: "boolean",
      description: "Applies box-shadow with hover enhancement",
      defaultValue: false,
    },
    animated: {
      control: "boolean",
      description:
        "Enables smooth transitions on hover (translateY + box-shadow)",
      defaultValue: false,
    },
    rounded: {
      control: "select",
      description: "Border radius variant (sm, md, lg)",
      options: ["", "sm", "md", "lg"],
      defaultValue: "",
    },
    variant: {
      control: "select",
      options: ["", "success", "info", "error", "warning"],
      description: "Color variant for semantic meaning",
      defaultValue: "",
    },
  },
  args: {
    skinned: true,
    stacked: false,
    shadow: false,
    animated: false,
    rounded: "",
    variant: "",
  },
};

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <h3>Card Title</h3>
      <p>This is a basic card with default styling.</p>
    </ag-card>
  `,
};

export const Unskinned: Story = {
  args: {
    skinned: false,
  },
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <h3>Unskinned Card</h3>
      <p>No background or border applied.</p>
    </ag-card>
  `,
};

export const Shadow: Story = {
  args: {
    shadow: true,
  },
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <h3 slot="header" style="margin: 0;">Product Details</h3>
      <p>Hover over this card to see the enhanced shadow effect.</p>
    </ag-card>
  `,
};

export const Animated: Story = {
  args: {
    animated: true,
    shadow: true,
  },
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <h3>Animated Card</h3>
      <p>
        Hover over this card to see the smooth animation (translateY with shadow
        enhancement).
      </p>
      <button slot="footer" style="padding: 0.5rem 1rem;">View Details</button>
    </ag-card>
  `,
};

export const Rounded: Story = {
  args: {
    rounded: "md",
  },
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <h3>Rounded Card</h3>
      <p>This card has rounded corners.</p>
    </ag-card>
  `,
};

export const Stacked: Story = {
  args: {
    stacked: true,
  },
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
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
    variant: "success",
  },
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <h3>Success</h3>
      <p>Operation completed successfully!</p>
    </ag-card>
  `,
};

export const InfoVariant: Story = {
  args: {
    variant: "info",
  },
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <h3 slot="header" style="margin: 0;">Information</h3>
      <p>Here's some helpful information for you.</p>
    </ag-card>
  `,
};

export const ErrorVariant: Story = {
  args: {
    variant: "error",
  },
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <h3>Error</h3>
      <p>Something went wrong. Please try again.</p>
    </ag-card>
  `,
};

export const WarningVariant: Story = {
  args: {
    variant: "warning",
  },
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <h3>Warning</h3>
      <p>Please review this information carefully before proceeding.</p>
      <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <button style="padding: 0.5rem 1rem;">Dismiss</button>
        <button style="padding: 0.5rem 1rem;">Acknowledge</button>
      </div>
    </ag-card>
  `,
};

export const WithSlots: Story = {
  args: {
    shadow: true,
  },
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <h3
        slot="header"
        style="margin: 0;"
      >
        Card Header
      </h3>

      <div>
        <h4>Main Content</h4>
        <p>This card demonstrates the header, default, and footer slots.</p>
      </div>

      <div
        slot="footer"
        style="display: flex; gap: 0.5rem;"
      >
        <button style="padding: 0.5rem 1rem;">Cancel</button>
        <button
          style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px;"
        >
          Confirm
        </button>
      </div>
    </ag-card>
  `,
};

export const ClickableCard: Story = {
  args: {
    shadow: true,
    animated: true,
  },
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <h3 slot="header" style="margin: 0;">
        <a
          href="#"
          class="card-primary-action"
          style="text-decoration: none; color: inherit;"
        >
          Clickable Card
        </a>
      </h3>
      <p>The entire card is clickable via the primary action link.</p>
      <p>You can still select this text without triggering navigation.</p>
    </ag-card>
  `,
};

export const WithSecondaryActions: Story = {
  args: {
    shadow: true,
    animated: true,
  },
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <h3 slot="header" style="margin: 0;">
        <a
          href="#"
          class="card-primary-action"
          style="text-decoration: none; color: inherit;"
        >
          Product Title
        </a>
      </h3>
      <p>
        This card has both a primary action (entire card) and secondary actions
        (buttons in footer).
      </p>
      <div slot="footer" style="display: flex; gap: 0.5rem;">
        <button
          class="card-secondary-action"
          style="padding: 0.5rem 1rem; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;"
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
    shadow: true,
    animated: true,
    rounded: "md",
    variant: "success",
  },
  render: (args) => html`
    <ag-card
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <h3>Premium Card</h3>
      <p>
        This card combines multiple features: shadow, animation, rounded
        corners, and success variant.
      </p>
      <p>Hover to see the smooth animation effect!</p>
    </ag-card>
  `,
};

export const Gallery: Story = {
  render: () => html`
    <div
      style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;"
    >
      <ag-card shadow animated>
        <h4 slot="header" style="margin: 0;">Card 1</h4>
        <p>Standard card with header, shadow and animation.</p>
      </ag-card>

      <ag-card shadow animated variant="success">
        <h4>Card 2</h4>
        <p>Success variant with shadow and animation.</p>
      </ag-card>

      <ag-card shadow animated variant="info">
        <h4 slot="header" style="margin: 0;">Card 3</h4>
        <p>Info variant with header, shadow and animation.</p>
        <button slot="footer" style="padding: 0.25rem 0.75rem; font-size: 0.875rem;">Learn More</button>
      </ag-card>

      <ag-card shadow animated variant="error">
        <h4>Card 4</h4>
        <p>Error variant with shadow and animation.</p>
      </ag-card>

      <ag-card shadow animated variant="warning">
        <h4 slot="header" style="margin: 0;">Card 5</h4>
        <p>Warning variant with header.</p>
      </ag-card>

      <ag-card shadow animated rounded>
        <h4>Card 6</h4>
        <p>Rounded corners with shadow and animation.</p>
        <button slot="footer" style="padding: 0.25rem 0.75rem; font-size: 0.875rem;">Action</button>
      </ag-card>
    </div>
  `,
};

export const Customization: Story = {
  args: {
    shadow: true,
  },
  render: (args) => html`
    <style>
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
    </style>
    <ag-card
      class="custom-card"
      .skinned=${args.skinned}
      .stacked=${args.stacked}
      .shadow=${args.shadow}
      .animated=${args.animated}
      rounded=${args.rounded || ""}
      .variant=${args.variant}
    >
      <div slot="header">
        <h3 style="margin: 0; color: white;">Customized with CSS Parts</h3>
      </div>

      <p>This card demonstrates CSS Shadow Parts customization.</p>
      <p>
        The wrapper, header, content, and footer are all styled using ::part()
        selectors.
      </p>

      <div slot="footer">
        <button
          style="padding: 0.5rem 1rem; background: white; color: #667eea; border: none; border-radius: 4px; cursor: pointer;"
        >
          Learn More
        </button>
      </div>
    </ag-card>
  `,
};
