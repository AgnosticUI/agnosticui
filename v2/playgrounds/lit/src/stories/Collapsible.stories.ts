import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/collapsible';
import type { CollapsibleProps } from 'agnosticui-core/collapsible';

const meta: Meta<CollapsibleProps> = {
  title: 'AgnosticUI Lit/Collapsible',
  component: 'ag-collapsible',
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the collapsible is expanded or collapsed',
    },
    isBordered: {
      control: 'boolean',
      description: 'Adds a border around the collapsible',
    },
    isShadow: {
      control: 'boolean',
      description: 'Applies box-shadow',
    },
    useChevron: {
      control: 'boolean',
      description: 'Use chevron indicator (default)',
    },
    useX: {
      control: 'boolean',
      description: 'Use X/plus indicator (rotates from upside-down plus to 45deg X)',
    },
    useMinus: {
      control: 'boolean',
      description: 'Use plus/minus indicator (swaps icon when toggled)',
    },
    noIndicator: {
      control: 'boolean',
      description: 'Hide the indicator completely',
    },
  },
  args: {
    open: false,
    isBordered: false,
    isShadow: false,
    useChevron: true,
    useX: false,
    useMinus: false,
    noIndicator: false,
  },
};

export default meta;
type Story = StoryObj<CollapsibleProps>;

export const Default: Story = {
  render: (args) => html`
    <ag-collapsible
      ?open=${args.open}
      ?isBordered=${args.isBordered}
      ?isShadow=${args.isShadow}
      ?use-chevron=${args.useChevron}
      ?use-x=${args.useX}
      ?use-minus=${args.useMinus}
      ?no-indicator=${args.noIndicator}
    >
      <span slot="summary">Click to expand</span>
      <p>This is the collapsible content that can be shown or hidden.</p>
    </ag-collapsible>
  `,
};

export const Open: Story = {
  args: {
    open: true,
  },
  render: (args) => html`
    <ag-collapsible
      ?open=${args.open}
      ?isBordered=${args.isBordered}
      ?isShadow=${args.isShadow}
      ?use-chevron=${args.useChevron}
      ?use-x=${args.useX}
      ?use-minus=${args.useMinus}
      ?no-indicator=${args.noIndicator}
    >
      <span slot="summary">Already expanded</span>
      <p>This collapsible starts in an open state.</p>
    </ag-collapsible>
  `,
};

export const Bordered: Story = {
  args: {
    isBordered: true,
  },
  render: (args) => html`
    <ag-collapsible
      ?open=${args.open}
      ?isBordered=${args.isBordered}
      ?isShadow=${args.isShadow}
      ?use-chevron=${args.useChevron}
      ?use-x=${args.useX}
      ?use-minus=${args.useMinus}
      ?no-indicator=${args.noIndicator}
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
      ?open=${args.open}
      ?isBordered=${args.isBordered}
      ?isShadow=${args.isShadow}
      ?use-chevron=${args.useChevron}
      ?use-x=${args.useX}
      ?use-minus=${args.useMinus}
      ?no-indicator=${args.noIndicator}
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
      ?open=${args.open}
      ?isBordered=${args.isBordered}
      ?isShadow=${args.isShadow}
      ?use-chevron=${args.useChevron}
      ?use-x=${args.useX}
      ?use-minus=${args.useMinus}
      ?no-indicator=${args.noIndicator}
    >
      <span slot="summary">Bordered with shadow</span>
      <p>This collapsible combines both border and shadow styling.</p>
    </ag-collapsible>
  `,
};

export const ChevronIndicator: Story = {
  args: {
    isBordered: true,
    useChevron: true,
  },
  render: (args) => html`
    <ag-collapsible
      ?open=${args.open}
      ?isBordered=${args.isBordered}
      ?isShadow=${args.isShadow}
      ?use-chevron=${args.useChevron}
      ?use-x=${args.useX}
      ?use-minus=${args.useMinus}
      ?no-indicator=${args.noIndicator}
    >
      <span slot="summary">Chevron indicator (default)</span>
      <p>This collapsible uses the default chevron indicator that rotates 180° when opened.</p>
    </ag-collapsible>
  `,
};

export const UseXIndicator: Story = {
  args: {
    isBordered: true,
    useChevron: false,
    useX: true,
  },
  render: (args) => html`
    <ag-collapsible
      ?open=${args.open}
      ?isBordered=${args.isBordered}
      ?isShadow=${args.isShadow}
      ?use-chevron=${args.useChevron}
      ?use-x=${args.useX}
      ?use-minus=${args.useMinus}
      ?no-indicator=${args.noIndicator}
    >
      <span slot="summary">X/Plus indicator</span>
      <p>This collapsible uses the X/plus indicator. It starts as an upside-down plus (closed) and rotates to form an X shape (open).</p>
    </ag-collapsible>
  `,
};

export const UseMinusIndicator: Story = {
  args: {
    isBordered: true,
    useChevron: false,
    useMinus: true,
  },
  render: (args) => html`
    <ag-collapsible
      ?open=${args.open}
      ?isBordered=${args.isBordered}
      ?isShadow=${args.isShadow}
      ?use-chevron=${args.useChevron}
      ?use-x=${args.useX}
      ?use-minus=${args.useMinus}
      ?no-indicator=${args.noIndicator}
    >
      <span slot="summary">Plus/Minus indicator</span>
      <p>This collapsible swaps between a plus icon (closed) and a minus icon (open). No rotation, just icon swap.</p>
    </ag-collapsible>
  `,
};

export const NoIndicator: Story = {
  args: {
    isBordered: true,
    noIndicator: true,
  },
  render: (args) => html`
    <ag-collapsible
      ?open=${args.open}
      ?isBordered=${args.isBordered}
      ?isShadow=${args.isShadow}
      ?use-chevron=${args.useChevron}
      ?use-x=${args.useX}
      ?use-minus=${args.useMinus}
      ?no-indicator=${args.noIndicator}
    >
      <span slot="summary">No indicator</span>
      <p>This collapsible has no indicator icon at all.</p>
    </ag-collapsible>
  `,
};

export const IndicatorComparison: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 600px;">
      <h3 style="margin-top: 0;">Indicator Variants Comparison</h3>
      <p style="color: #6b7280; margin-bottom: 1rem;">
        Toggle each collapsible to see how the different indicators behave.
      </p>

      <ag-collapsible isbordered use-chevron>
        <span slot="summary">🔽 Chevron (default) - Rotates 180°</span>
        <p>The chevron points down when closed and up when open via rotation.</p>
      </ag-collapsible>

      <ag-collapsible isbordered use-x>
        <span slot="summary">✖️ X Indicator - Rotates from upside-down plus to X</span>
        <p>Starts as an upside-down plus sign and rotates 45° to form an X when open.</p>
      </ag-collapsible>

      <ag-collapsible isbordered use-minus>
        <span slot="summary">➕ Plus/Minus - Swaps icons</span>
        <p>Shows a plus icon when closed and swaps to a minus icon when open.</p>
      </ag-collapsible>

      <ag-collapsible isbordered no-indicator>
        <span slot="summary">⚪ No Indicator - Completely hidden</span>
        <p>No indicator is shown at all.</p>
      </ag-collapsible>
    </div>
  `,
};

export const RichContent: Story = {
  args: {
    isBordered: true,
    isShadow: true,
  },
  render: (args) => html`
    <ag-collapsible
      ?open=${args.open}
      ?isBordered=${args.isBordered}
      ?isShadow=${args.isShadow}
      ?use-chevron=${args.useChevron}
      ?use-x=${args.useX}
      ?use-minus=${args.useMinus}
      ?no-indicator=${args.noIndicator}
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

      <ag-collapsible isbordered>
        <span slot="summary">What is AgnosticUI?</span>
        <p>
          AgnosticUI is a framework-agnostic component library built with web
          components. It works seamlessly with React, Vue, Svelte, Angular, and
          vanilla JavaScript.
        </p>
      </ag-collapsible>

      <ag-collapsible isbordered>
        <span slot="summary">How do I install it?</span>
        <p>You can install AgnosticUI via npm:</p>
        <pre style="background: #f3f4f6; padding: 1rem; border-radius: 4px; overflow-x: auto;">npm install agnosticui-core</pre>
      </ag-collapsible>

      <ag-collapsible isbordered>
        <span slot="summary">Is it accessible?</span>
        <p>
          Yes! All AgnosticUI components are built with accessibility in mind,
          following WAI-ARIA best practices and ensuring keyboard navigation and
          screen reader support.
        </p>
      </ag-collapsible>

      <ag-collapsible isbordered>
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
        ?open=${args.open}
        ?isBordered=${args.isBordered}
        ?isShadow=${args.isShadow}
        ?use-chevron=${args.useChevron}
        ?use-x=${args.useX}
        ?use-minus=${args.useMinus}
        ?no-indicator=${args.noIndicator}
      >
        <span slot="summary">Level 1 - Main Topic</span>
        <div>
          <p>This is the main content area.</p>

          <ag-collapsible isbordered use-minus style="margin-top: 1rem;">
            <span slot="summary">Level 2 - Subtopic A</span>
            <p>Nested collapsible content for subtopic A. Note the different indicator style.</p>
          </ag-collapsible>

          <ag-collapsible isbordered use-minus style="margin-top: 0.5rem;">
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
      ?open=${args.open}
      ?isBordered=${args.isBordered}
      ?isShadow=${args.isShadow}
      ?use-chevron=${args.useChevron}
      ?use-x=${args.useX}
      ?use-minus=${args.useMinus}
      ?no-indicator=${args.noIndicator}
      @toggle=${(e: Event) => {
        const newOpenState = (e.target as HTMLElement & { open: boolean }).open;
        const status = document.getElementById('toggle-status');
        if (status) {
          status.textContent = newOpenState ? 'Open' : 'Closed';
          status.style.color = newOpenState ? 'green' : 'red';
        }
      }}
    >
      <span slot="summary">Click to toggle (watch console)</span>
      <div>
        <p>The collapsible dispatches a <code>toggle</code> event when opened or closed.</p>
      </div>
    </ag-collapsible>
    <p styl="margin-top: 2rem;">Current status: <strong id="toggle-status" style="color: red;">Closed</strong></p>
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
        background: #f9fafb;
        border-left: 4px solid #3b82f6;
        padding: 1rem 1rem 1rem 1.5rem;
      }

      .custom-minimal::part(ag-collapsible-content) {
        background: #ffffff;
        padding: 1rem 1rem 1rem 1.5rem;
      }
    </style>

    <div style="padding: 2rem; max-width: 800px;">
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
          <ag-collapsible class="custom-minimal" use-minus>
            <span slot="summary">💡 Clean, minimal design</span>
            <p>This style uses a subtle background with a colored left border accent and plus/minus indicators.</p>
          </ag-collapsible>
        </div>
      </div>
    </div>
  `,
};
