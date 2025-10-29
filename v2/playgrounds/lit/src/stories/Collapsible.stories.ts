import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/collapsible';
import type { CollapsibleProps } from 'agnosticui-core/collapsible';

const meta: Meta<CollapsibleProps> = {
  title: 'AgnosticUI Lit/Collapsible',
  component: 'ag-collapsible',
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the collapsible is expanded or collapsed',
      defaultValue: false,
    },
    isSkinned: {
      control: 'boolean',
      description: 'Applies border-radius styling',
      defaultValue: true,
    },
    isBordered: {
      control: 'boolean',
      description: 'Adds a border around the collapsible',
      defaultValue: false,
    },
    isShadow: {
      control: 'boolean',
      description: 'Applies box-shadow',
      defaultValue: false,
    },
  },
  args: {
    isOpen: false,
    isSkinned: true,
    isBordered: false,
    isShadow: false,
  },
};

export default meta;
type Story = StoryObj<CollapsibleProps>;

export const Default: Story = {
  render: (args) => html`
    <ag-collapsible
      .isOpen=${args.isOpen}
      .isSkinned=${args.isSkinned}
      .isBordered=${args.isBordered}
      .isShadow=${args.isShadow}
    >
      <span slot="summary">Click to expand</span>
      <p>This is the collapsible content that can be shown or hidden.</p>
    </ag-collapsible>
  `,
};

export const Open: Story = {
  args: {
    isOpen: true,
  },
  render: (args) => html`
    <ag-collapsible
      .isOpen=${args.isOpen}
      .isSkinned=${args.isSkinned}
      .isBordered=${args.isBordered}
      .isShadow=${args.isShadow}
    >
      <span slot="summary">Already expanded</span>
      <p>This collapsible starts in an open state.</p>
    </ag-collapsible>
  `,
};

export const Unskinned: Story = {
  args: {
    isSkinned: false,
  },
  render: (args) => html`
    <ag-collapsible
      .isOpen=${args.isOpen}
      .isSkinned=${args.isSkinned}
      .isBordered=${args.isBordered}
      .isShadow=${args.isShadow}
    >
      <span slot="summary">Unskinned collapsible</span>
      <p>This collapsible has no border-radius applied.</p>
    </ag-collapsible>
  `,
};

export const Bordered: Story = {
  args: {
    isBordered: true,
  },
  render: (args) => html`
    <ag-collapsible
      .isOpen=${args.isOpen}
      .isSkinned=${args.isSkinned}
      .isBordered=${args.isBordered}
      .isShadow=${args.isShadow}
    >
      <span slot="summary">Bordered collapsible</span>
      <p>This collapsible has a border around it.</p>
    </ag-collapsible>
  `,
};

export const Shadow: Story = {
  args: {
    isShadow: true,
  },
  render: (args) => html`
    <ag-collapsible
      .isOpen=${args.isOpen}
      .isSkinned=${args.isSkinned}
      .isBordered=${args.isBordered}
      .isShadow=${args.isShadow}
    >
      <span slot="summary">Collapsible with shadow</span>
      <p>This collapsible has a box-shadow applied.</p>
    </ag-collapsible>
  `,
};

export const CombinedFeatures: Story = {
  args: {
    isBordered: true,
    isShadow: true,
  },
  render: (args) => html`
    <ag-collapsible
      .isOpen=${args.isOpen}
      .isSkinned=${args.isSkinned}
      .isBordered=${args.isBordered}
      .isShadow=${args.isShadow}
    >
      <span slot="summary">Bordered with shadow</span>
      <p>This collapsible combines both border and shadow styling.</p>
    </ag-collapsible>
  `,
};

export const CustomIndicator: Story = {
  args: {
    isBordered: true,
  },
  render: (args) => html`
    <ag-collapsible
      .isOpen=${args.isOpen}
      .isSkinned=${args.isSkinned}
      .isBordered=${args.isBordered}
      .isShadow=${args.isShadow}
    >
      <span slot="summary">Custom indicator</span>
      <span slot="indicator">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </span>
      <p>This collapsible uses a custom chevron indicator that rotates when opened.</p>
    </ag-collapsible>
  `,
};

export const RichContent: Story = {
  args: {
    isBordered: true,
    isShadow: true,
  },
  render: (args) => html`
    <ag-collapsible
      .isOpen=${args.isOpen}
      .isSkinned=${args.isSkinned}
      .isBordered=${args.isBordered}
      .isShadow=${args.isShadow}
    >
      <strong slot="summary">Product Details</strong>
      <div>
        <h4 style="margin-top: 0;">Technical Specifications</h4>
        <ul>
          <li>Processor: Octa-core 2.8 GHz</li>
          <li>Memory: 8GB RAM</li>
          <li>Storage: 256GB SSD</li>
          <li>Display: 15.6" Full HD</li>
        </ul>
        <p>
          <strong>Warranty:</strong> 2 years manufacturer warranty with optional
          extended coverage available.
        </p>
      </div>
    </ag-collapsible>
  `,
};

export const FAQ: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 600px;">
      <h3 style="margin-top: 0;">Frequently Asked Questions</h3>

      <ag-collapsible isBordered>
        <span slot="summary">What is AgnosticUI?</span>
        <p>
          AgnosticUI is a framework-agnostic component library built with web
          components. It works seamlessly with React, Vue, Svelte, Angular, and
          vanilla JavaScript.
        </p>
      </ag-collapsible>

      <ag-collapsible isBordered>
        <span slot="summary">How do I install it?</span>
        <p>You can install AgnosticUI via npm:</p>
        <pre style="background: #f3f4f6; padding: 1rem; border-radius: 4px; overflow-x: auto;">npm install agnosticui-core</pre>
      </ag-collapsible>

      <ag-collapsible isBordered>
        <span slot="summary">Is it accessible?</span>
        <p>
          Yes! All AgnosticUI components are built with accessibility in mind,
          following WAI-ARIA best practices and ensuring keyboard navigation and
          screen reader support.
        </p>
      </ag-collapsible>

      <ag-collapsible isBordered>
        <span slot="summary">Can I customize the styling?</span>
        <p>
          Absolutely! AgnosticUI uses CSS Shadow Parts to allow deep customization
          of component internals while maintaining encapsulation. You can also use
          design tokens for consistent theming across your application.
        </p>
      </ag-collapsible>
    </div>
  `,
};

export const NestedCollapsibles: Story = {
  args: {
    isBordered: true,
  },
  render: (args) => html`
    <div style="max-width: 600px;">
      <ag-collapsible
        .isOpen=${args.isOpen}
        .isSkinned=${args.isSkinned}
        .isBordered=${args.isBordered}
        .isShadow=${args.isShadow}
      >
        <span slot="summary">Level 1 - Main Topic</span>
        <div>
          <p>This is the main content area.</p>

          <ag-collapsible isBordered style="margin-top: 1rem;">
            <span slot="summary">Level 2 - Subtopic A</span>
            <p>Nested collapsible content for subtopic A.</p>
          </ag-collapsible>

          <ag-collapsible isBordered style="margin-top: 0.5rem;">
            <span slot="summary">Level 2 - Subtopic B</span>
            <p>Nested collapsible content for subtopic B.</p>
          </ag-collapsible>
        </div>
      </ag-collapsible>
    </div>
  `,
};

export const Interactive: Story = {
  args: {
    isBordered: true,
    isShadow: true,
  },
  render: (args) => html`
    <ag-collapsible
      .isOpen=${args.isOpen}
      .isSkinned=${args.isSkinned}
      .isBordered=${args.isBordered}
      .isShadow=${args.isShadow}
      @toggle=${(e: CustomEvent) => {
        console.log('Toggle event:', e.detail);
        const status = document.getElementById('toggle-status');
        if (status) {
          status.textContent = e.detail.isOpen ? 'Open' : 'Closed';
          status.style.color = e.detail.isOpen ? 'green' : 'red';
        }
      }}
    >
      <span slot="summary">Click to toggle (watch console)</span>
      <div>
        <p>The collapsible dispatches a <code>toggle</code> event when opened or closed.</p>
        <p>Current status: <strong id="toggle-status" style="color: red;">Closed</strong></p>
      </div>
    </ag-collapsible>
  `,
};

export const CSSPartsCustomization: Story = {
  render: () => html`
    <style>
      /* Gradient style */
      .custom-gradient::part(ag-collapsible-details) {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 12px;
        overflow: hidden;
      }

      .custom-gradient::part(ag-collapsible-summary) {
        color: white;
        font-weight: 600;
        padding: 1.5rem;
      }

      .custom-gradient::part(ag-collapsible-indicator) {
        filter: brightness(0) invert(1);
      }

      .custom-gradient::part(ag-collapsible-content) {
        color: white;
        background: rgba(0, 0, 0, 0.1);
      }

      /* Minimal style */
      .custom-minimal::part(ag-collapsible-summary) {
        background: var(--ag-background-secondary);
        border-left: 4px solid var(--ag-primary);
        padding: 1rem 1rem 1rem 1.5rem;
      }

      .custom-minimal::part(ag-collapsible-content) {
        background: var(--ag-background-primary);
        padding: 1rem 1rem 1rem 1.5rem;
      }

      /* Card style */
      .custom-card::part(ag-collapsible-details) {
        border: 2px solid var(--ag-border);
        border-radius: 16px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .custom-card::part(ag-collapsible-details):hover {
        transform: translateY(-2px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }

      .custom-card::part(ag-collapsible-summary) {
        background: var(--ag-background-secondary);
        font-weight: 600;
        font-size: 1.1rem;
      }
    </style>

    <div style="padding: 50px; max-width: 800px;">
      <h3 style="margin-top: 0;">Styled with CSS Shadow Parts</h3>
      <p style="margin-bottom: 2rem; color: #6b7280;">
        Collapsible can be customized using CSS Shadow Parts:
        <code>::part(ag-collapsible-details)</code>,
        <code>::part(ag-collapsible-summary)</code>,
        <code>::part(ag-collapsible-indicator)</code>,
        <code>::part(ag-collapsible-content)</code>
      </p>

      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h4>Gradient Style</h4>
          <ag-collapsible class="custom-gradient">
            <span slot="summary">🎨 Vibrant gradient background</span>
            <p>This collapsible uses a gradient background with white text and custom styling.</p>
          </ag-collapsible>
        </div>

        <div>
          <h4>Minimal with Left Accent</h4>
          <ag-collapsible class="custom-minimal">
            <span slot="summary">💡 Clean, minimal design</span>
            <p>This style uses a subtle background with a colored left border accent.</p>
          </ag-collapsible>
        </div>

        <div>
          <h4>Elevated Card Style</h4>
          <ag-collapsible class="custom-card">
            <span slot="summary">📋 Card-style with elevation</span>
            <p>This collapsible looks like a card with elevation and hover effects.</p>
          </ag-collapsible>
        </div>
      </div>
    </div>
  `,
};
