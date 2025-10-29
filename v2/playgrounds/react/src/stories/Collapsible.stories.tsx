import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ReactCollapsible } from 'agnosticui-core/collapsible/react';
import type { ReactCollapsibleProps } from 'agnosticui-core/collapsible/react';

const meta: Meta<typeof ReactCollapsible> = {
  title: 'AgnosticUI React/Collapsible',
  component: ReactCollapsible,
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
  } as ReactCollapsibleProps,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ReactCollapsible {...args}>
      <span slot="summary">Click to expand</span>
      <p>This is the collapsible content that can be shown or hidden.</p>
    </ReactCollapsible>
  ),
};

export const Open: Story = {
  args: {
    isOpen: true,
  },
  render: (args) => (
    <ReactCollapsible {...args}>
      <span slot="summary">Already expanded</span>
      <p>This collapsible starts in an open state.</p>
    </ReactCollapsible>
  ),
};

export const Unskinned: Story = {
  args: {
    isSkinned: false,
  },
  render: (args) => (
    <ReactCollapsible {...args}>
      <span slot="summary">Unskinned collapsible</span>
      <p>This collapsible has no border-radius applied.</p>
    </ReactCollapsible>
  ),
};

export const Bordered: Story = {
  args: {
    isBordered: true,
  },
  render: (args) => (
    <ReactCollapsible {...args}>
      <span slot="summary">Bordered collapsible</span>
      <p>This collapsible has a border around it.</p>
    </ReactCollapsible>
  ),
};

export const Shadow: Story = {
  args: {
    isShadow: true,
  },
  render: (args) => (
    <ReactCollapsible {...args}>
      <span slot="summary">Collapsible with shadow</span>
      <p>This collapsible has a box-shadow applied.</p>
    </ReactCollapsible>
  ),
};

export const CombinedFeatures: Story = {
  args: {
    isBordered: true,
    isShadow: true,
  },
  render: (args) => (
    <ReactCollapsible {...args}>
      <span slot="summary">Bordered with shadow</span>
      <p>This collapsible combines both border and shadow styling.</p>
    </ReactCollapsible>
  ),
};

export const CustomIndicator: Story = {
  args: {
    isBordered: true,
  },
  render: (args) => (
    <ReactCollapsible {...args}>
      <span slot="summary">Custom indicator</span>
      <span slot="indicator">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </span>
      <p>This collapsible uses a custom chevron indicator that rotates when opened.</p>
    </ReactCollapsible>
  ),
};

export const RichContent: Story = {
  args: {
    isBordered: true,
    isShadow: true,
  },
  render: (args) => (
    <ReactCollapsible {...args}>
      <strong slot="summary">Product Details</strong>
      <div>
        <h4 style={{ marginTop: 0 }}>Technical Specifications</h4>
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
    </ReactCollapsible>
  ),
};

export const FAQ: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0 }}>Frequently Asked Questions</h3>

      <ReactCollapsible isBordered>
        <span slot="summary">What is AgnosticUI?</span>
        <p>
          AgnosticUI is a framework-agnostic component library built with web
          components. It works seamlessly with React, Vue, Svelte, Angular, and
          vanilla JavaScript.
        </p>
      </ReactCollapsible>

      <ReactCollapsible isBordered>
        <span slot="summary">How do I install it?</span>
        <p>You can install AgnosticUI via npm:</p>
        <pre style={{ background: '#f3f4f6', padding: '1rem', borderRadius: '4px', overflowX: 'auto' }}>
          npm install agnosticui-core
        </pre>
      </ReactCollapsible>

      <ReactCollapsible isBordered>
        <span slot="summary">Is it accessible?</span>
        <p>
          Yes! All AgnosticUI components are built with accessibility in mind,
          following WAI-ARIA best practices and ensuring keyboard navigation and
          screen reader support.
        </p>
      </ReactCollapsible>

      <ReactCollapsible isBordered>
        <span slot="summary">Can I customize the styling?</span>
        <p>
          Absolutely! AgnosticUI uses CSS Shadow Parts to allow deep customization
          of component internals while maintaining encapsulation. You can also use
          design tokens for consistent theming across your application.
        </p>
      </ReactCollapsible>
    </div>
  ),
};

export const NestedCollapsibles: Story = {
  args: {
    isBordered: true,
  },
  render: (args) => (
    <div style={{ maxWidth: '600px' }}>
      <ReactCollapsible {...args}>
        <span slot="summary">Level 1 - Main Topic</span>
        <div>
          <p>This is the main content area.</p>

          <ReactCollapsible isBordered style={{ marginTop: '1rem' }}>
            <span slot="summary">Level 2 - Subtopic A</span>
            <p>Nested collapsible content for subtopic A.</p>
          </ReactCollapsible>

          <ReactCollapsible isBordered style={{ marginTop: '0.5rem' }}>
            <span slot="summary">Level 2 - Subtopic B</span>
            <p>Nested collapsible content for subtopic B.</p>
          </ReactCollapsible>
        </div>
      </ReactCollapsible>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    isBordered: true,
    isShadow: true,
  },
  render: (args) => {
    const [status, setStatus] = useState('Closed');

    return (
      <ReactCollapsible
        {...args}
        onToggle={(e: CustomEvent) => {
          console.log('Toggle event:', e.detail);
          setStatus(e.detail.isOpen ? 'Open' : 'Closed');
        }}
      >
        <span slot="summary">Click to toggle (watch console)</span>
        <div>
          <p>The collapsible dispatches a <code>toggle</code> event when opened or closed.</p>
          <p>
            Current status: <strong style={{ color: status === 'Open' ? 'green' : 'red' }}>{status}</strong>
          </p>
        </div>
      </ReactCollapsible>
    );
  },
};

export const ControlledComponent: Story = {
  args: {
    isBordered: true,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <div style={{ marginBottom: '1rem' }}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ padding: '0.5rem 1rem', marginRight: '0.5rem' }}
          >
            Toggle Externally
          </button>
          <button
            onClick={() => setIsOpen(true)}
            style={{ padding: '0.5rem 1rem', marginRight: '0.5rem' }}
          >
            Open
          </button>
          <button
            onClick={() => setIsOpen(false)}
            style={{ padding: '0.5rem 1rem' }}
          >
            Close
          </button>
        </div>

        <ReactCollapsible
          {...args}
          isOpen={isOpen}
          onToggle={(e: CustomEvent) => setIsOpen(e.detail.isOpen)}
        >
          <span slot="summary">Controlled collapsible</span>
          <p>This collapsible's state is controlled by external buttons and React state.</p>
          <p>Current state: <strong>{isOpen ? 'Open' : 'Closed'}</strong></p>
        </ReactCollapsible>
      </div>
    );
  },
};

export const CSSPartsCustomization: Story = {
  render: () => (
    <>
      <style>{`
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
      `}</style>

      <div style={{ padding: '50px', maxWidth: '800px' }}>
        <h3 style={{ marginTop: 0 }}>Styled with CSS Shadow Parts</h3>
        <p style={{ marginBottom: '2rem', color: '#6b7280' }}>
          Collapsible can be customized using CSS Shadow Parts:
          <code>::part(ag-collapsible-details)</code>,
          <code>::part(ag-collapsible-summary)</code>,
          <code>::part(ag-collapsible-indicator)</code>,
          <code>::part(ag-collapsible-content)</code>
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h4>Gradient Style</h4>
            <ReactCollapsible className="custom-gradient">
              <span slot="summary">🎨 Vibrant gradient background</span>
              <p>This collapsible uses a gradient background with white text and custom styling.</p>
            </ReactCollapsible>
          </div>

          <div>
            <h4>Minimal with Left Accent</h4>
            <ReactCollapsible className="custom-minimal">
              <span slot="summary">💡 Clean, minimal design</span>
              <p>This style uses a subtle background with a colored left border accent.</p>
            </ReactCollapsible>
          </div>

          <div>
            <h4>Elevated Card Style</h4>
            <ReactCollapsible className="custom-card">
              <span slot="summary">📋 Card-style with elevation</span>
              <p>This collapsible looks like a card with elevation and hover effects.</p>
            </ReactCollapsible>
          </div>
        </div>
      </div>
    </>
  ),
};
