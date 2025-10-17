import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/accordion';
import type { AccordionItemProps } from 'agnosticui-core/accordion';

const meta: Meta<AccordionItemProps> = {
  title: 'AgnosticUI Lit/Accordion',
  component: 'ag-accordion-item',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the accordion item is open',
    },
    headingLevel: {
      control: 'number',
      description: 'Heading level for accordion items (1-6)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the accordion item',
    },
    indicator: {
      control: 'boolean',
      description: 'Shows the expand/collapse indicator',
    },
    bordered: {
      control: 'boolean',
      description: 'Applies bordered style to the header',
    },
    background: {
      control: 'boolean',
      description: 'Applies background color to the header',
    },
  },
  args: {
    open: false,
    headingLevel: 3,
    disabled: false,
    indicator: false,
    bordered: false,
    background: false,
    onToggle: fn(),
  },
  parameters: {
    actions: {
      handles: ['toggle'],
    },
  },
};

export default meta;
type Story = StoryObj<AccordionItemProps>;

// Default story
export const Default: Story = {
  args: {},
  render: ({ open, headingLevel, disabled, indicator, bordered, background, onToggle }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-accordion-item
        .open=${open}
        .headingLevel=${headingLevel}
        .disabled=${disabled}
        .indicator=${indicator}
        .bordered=${bordered}
        .background=${background}
        @toggle=${(e: CustomEvent) => onToggle(e.detail)}
      >
        <span slot="header">Accordion Item 1</span>
        <div slot="content">
          This is the content of the first accordion item.
        </div>
      </ag-accordion-item>

      <ag-accordion-item
        .open=${open}
        .headingLevel=${headingLevel}
        .disabled=${disabled}
        .indicator=${indicator}
        .bordered=${bordered}
        .background=${background}
        @toggle=${(e: CustomEvent) => onToggle(e.detail)}
      >
        <span slot="header">Accordion Item 2</span>
        <div slot="content">
          This is the content of the second accordion item.
        </div>
      </ag-accordion-item>

      <ag-accordion-item
        .open=${open}
        .headingLevel=${headingLevel}
        .disabled=${disabled}
        .indicator=${indicator}
        .bordered=${bordered}
        .background=${background}
        @toggle=${(e: CustomEvent) => onToggle(e.detail)}
      >
        <span slot="header">Accordion Item 3</span>
        <div slot="content">
          This is the content of the third accordion item.
        </div>
      </ag-accordion-item>
    </div>
  `,
};

// Open by default
export const OpenByDefault: Story = {
  args: {},
  render: () => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-accordion-item .open=${true}>
        <span slot="header">Accordion Item 1 (Open)</span>
        <div slot="content">
          This is the content of the first accordion item, open by default.
        </div>
      </ag-accordion-item>

      <ag-accordion-item>
        <span slot="header">Accordion Item 2</span>
        <div slot="content">
          This is the content of the second accordion item.
        </div>
      </ag-accordion-item>

      <ag-accordion-item>
        <span slot="header">Accordion Item 3</span>
        <div slot="content">
          This is the content of the third accordion item.
        </div>
      </ag-accordion-item>
    </div>
  `,
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: () => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-accordion-item .disabled=${true}>
        <span slot="header">Disabled Accordion Item</span>
        <div slot="content">
          This content cannot be toggled because the item is disabled.
        </div>
      </ag-accordion-item>

      <ag-accordion-item>
        <span slot="header">Enabled Accordion Item</span>
        <div slot="content">
          This is the content of an enabled accordion item.
        </div>
      </ag-accordion-item>

      <ag-accordion-item>
        <span slot="header">Another Enabled Item</span>
        <div slot="content">
          This is another enabled accordion item.
        </div>
      </ag-accordion-item>
    </div>
  `,
};

// With indicator
export const WithIndicator: Story = {
  args: {
    indicator: true,
  },
  render: () => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-accordion-item .indicator=${true}>
        <span slot="header">Accordion Item with Indicator</span>
        <div slot="content">
          This accordion item has a visible expand/collapse indicator.
        </div>
      </ag-accordion-item>

      <ag-accordion-item .indicator=${true}>
        <span slot="header">Another Item with Indicator</span>
        <div slot="content">
          This is another accordion item with an indicator.
        </div>
      </ag-accordion-item>

      <ag-accordion-item .indicator=${true}>
        <span slot="header">Third Item with Indicator</span>
        <div slot="content">
          This is a third accordion item with an indicator.
        </div>
      </ag-accordion-item>
    </div>
  `,
};

// Bordered style
export const Bordered: Story = {
  args: {
    bordered: true,
  },
  render: () => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-accordion-item .bordered=${true}>
        <span slot="header">Bordered Accordion Item</span>
        <div slot="content">
          This accordion item has a bordered header.
        </div>
      </ag-accordion-item>

      <ag-accordion-item .bordered=${true}>
        <span slot="header">Another Bordered Item</span>
        <div slot="content">
          This is another accordion item with a bordered header.
        </div>
      </ag-accordion-item>

      <ag-accordion-item .bordered=${true}>
        <span slot="header">Third Bordered Item</span>
        <div slot="content">
          This is a third accordion item with a bordered header.
        </div>
      </ag-accordion-item>
    </div>
  `,
};

// With background
export const WithBackground: Story = {
  args: {
    background: true,
  },
  render: () => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-accordion-item .background=${true}>
        <span slot="header">Accordion Item with Background</span>
        <div slot="content">
          This accordion item has a background color on the header.
        </div>
      </ag-accordion-item>

      <ag-accordion-item .background=${true}>
        <span slot="header">Another Item with Background</span>
        <div slot="content">
          This is another accordion item with a background header.
        </div>
      </ag-accordion-item>

      <ag-accordion-item .background=${true}>
        <span slot="header">Third Item with Background</span>
        <div slot="content">
          This is a third accordion item with a background header.
        </div>
      </ag-accordion-item>
    </div>
  `,
};

// Custom heading level
export const CustomHeadingLevel: Story = {
  args: {
    headingLevel: 2,
  },
  render: () => html`
    <div style="padding: 50px; max-width: 600px;">
      <h1>Main Page Title</h1>
      <ag-accordion-item .headingLevel=${2}>
        <span slot="header">Accordion Item (H2)</span>
        <div slot="content">
          This accordion item uses an H2 heading to maintain proper document outline.
        </div>
      </ag-accordion-item>

      <ag-accordion-item .headingLevel=${2}>
        <span slot="header">Another Item (H2)</span>
        <div slot="content">
          This is another accordion item with an H2 heading.
        </div>
      </ag-accordion-item>

      <ag-accordion-item .headingLevel=${2}>
        <span slot="header">Third Item (H2)</span>
        <div slot="content">
          This is a third accordion item with an H2 heading.
        </div>
      </ag-accordion-item>
    </div>
  `,
};

// Event testing
export const EventTesting: Story = {
  args: {},
  render: ({ onToggle }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <p style="margin-bottom: 1rem;">Click on accordion headers to test toggle events</p>
      <ag-accordion-item
        .indicator=${true}
        @toggle=${(e: CustomEvent) => onToggle(e.detail)}
      >
        <span slot="header">Click to Test Events</span>
        <div slot="content">
          Click the header above to trigger a toggle event. Check the Actions panel below for event logs.
        </div>
      </ag-accordion-item>

      <ag-accordion-item
        .indicator=${true}
        @toggle=${(e: CustomEvent) => onToggle(e.detail)}
      >
        <span slot="header">Another Test Item</span>
        <div slot="content">
          This is another accordion item for testing events.
        </div>
      </ag-accordion-item>

      <p style="font-size: 0.875rem; color: #6b7280; margin-top: 1rem;">
        Check the Actions panel below for event logs (shows open/closed state)
      </p>
    </div>
  `,
};

// Keyboard navigation
export const KeyboardNavigation: Story = {
  args: {},
  render: ({ onToggle }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <p style="margin-bottom: 1rem;">
        <strong>Keyboard Navigation:</strong>
        <br />• Arrow Up/Down: Navigate between accordion items
        <br />• Home/End: Jump to first/last item
        <br />• Enter/Space: Toggle the focused item
      </p>
      <ag-accordion-item .indicator=${true} @toggle=${(e: CustomEvent) => onToggle(e.detail)}>
        <span slot="header">First Accordion Item</span>
        <div slot="content">
          Focus this item and use arrow keys to navigate to other items.
        </div>
      </ag-accordion-item>

      <ag-accordion-item .indicator=${true} @toggle=${(e: CustomEvent) => onToggle(e.detail)}>
        <span slot="header">Second Accordion Item</span>
        <div slot="content">
          Press Space or Enter to toggle this item when focused.
        </div>
      </ag-accordion-item>

      <ag-accordion-item .indicator=${true} @toggle=${(e: CustomEvent) => onToggle(e.detail)}>
        <span slot="header">Third Accordion Item</span>
        <div slot="content">
          Try pressing Home to jump to the first item, or End to jump to this last item.
        </div>
      </ag-accordion-item>

      <ag-accordion-item .indicator=${true} @toggle=${(e: CustomEvent) => onToggle(e.detail)}>
        <span slot="header">Fourth Accordion Item</span>
        <div slot="content">
          Test full keyboard navigation across all accordion items.
        </div>
      </ag-accordion-item>
    </div>
  `,
};

// All style combinations
export const AllStyleCombinations: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; padding: 50px; max-width: 800px;">
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Default</p>
        <ag-accordion-item>
          <span slot="header">Default Accordion</span>
          <div slot="content">
            Default styling without any modifiers.
          </div>
        </ag-accordion-item>
      </div>

      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">With Indicator</p>
        <ag-accordion-item .indicator=${true}>
          <span slot="header">Accordion with Indicator</span>
          <div slot="content">
            Shows a chevron icon that rotates when opened.
          </div>
        </ag-accordion-item>
      </div>

      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Bordered</p>
        <ag-accordion-item .bordered=${true}>
          <span slot="header">Bordered Accordion</span>
          <div slot="content">
            Has a border on the header button.
          </div>
        </ag-accordion-item>
      </div>

      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">With Background</p>
        <ag-accordion-item .background=${true}>
          <span slot="header">Accordion with Background</span>
          <div slot="content">
            Has a background color on the header.
          </div>
        </ag-accordion-item>
      </div>

      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Combined: Indicator + Bordered + Background</p>
        <ag-accordion-item .indicator=${true} .bordered=${true} .background=${true}>
          <span slot="header">Fully Styled Accordion</span>
          <div slot="content">
            Combines indicator, border, and background styling.
          </div>
        </ag-accordion-item>
      </div>

      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Disabled</p>
        <ag-accordion-item .disabled=${true} .indicator=${true}>
          <span slot="header">Disabled Accordion</span>
          <div slot="content">
            This content cannot be toggled.
          </div>
        </ag-accordion-item>
      </div>
    </div>
  `,
};

// Rich content
export const RichContent: Story = {
  render: () => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-accordion-item .indicator=${true} .bordered=${true}>
        <span slot="header">FAQ: What is AgnosticUI?</span>
        <div slot="content" style="padding: 1rem;">
          <p>AgnosticUI is a design system and component library that works across multiple frameworks.</p>
          <ul>
            <li>Framework agnostic core components</li>
            <li>React, Vue, and Lit bindings</li>
            <li>Accessible by default</li>
            <li>Themeable with CSS custom properties</li>
          </ul>
        </div>
      </ag-accordion-item>

      <ag-accordion-item .indicator=${true} .bordered=${true}>
        <span slot="header">FAQ: How do I install it?</span>
        <div slot="content" style="padding: 1rem;">
          <p>Install via npm:</p>
          <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto;"><code>npm install agnosticui-core</code></pre>
          <p>Then import the components you need:</p>
          <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto;"><code>import 'agnosticui-core/accordion';</code></pre>
        </div>
      </ag-accordion-item>

      <ag-accordion-item .indicator=${true} .bordered=${true}>
        <span slot="header">FAQ: Is it accessible?</span>
        <div slot="content" style="padding: 1rem;">
          <p>Yes! All components follow WAI-ARIA guidelines:</p>
          <ul>
            <li>Proper ARIA attributes</li>
            <li>Keyboard navigation support</li>
            <li>Focus management</li>
            <li>Screen reader tested</li>
          </ul>
          <p><a href="#" style="color: var(--ag-primary);">Learn more about accessibility</a></p>
        </div>
      </ag-accordion-item>
    </div>
  `,
};

// Multiple accordions groups
export const MultipleGroups: Story = {
  render: () => html`
    <div style="padding: 50px; display: flex; gap: 2rem;">
      <div style="flex: 1;">
        <h3 style="margin-top: 0;">Product Features</h3>
        <ag-accordion-item .indicator=${true} .background=${true}>
          <span slot="header">Performance</span>
          <div slot="content">
            Built for speed and efficiency with minimal overhead.
          </div>
        </ag-accordion-item>

        <ag-accordion-item .indicator=${true} .background=${true}>
          <span slot="header">Accessibility</span>
          <div slot="content">
            WCAG 2.1 AA compliant components out of the box.
          </div>
        </ag-accordion-item>

        <ag-accordion-item .indicator=${true} .background=${true}>
          <span slot="header">Customization</span>
          <div slot="content">
            Fully customizable through CSS custom properties.
          </div>
        </ag-accordion-item>
      </div>

      <div style="flex: 1;">
        <h3 style="margin-top: 0;">Support Options</h3>
        <ag-accordion-item .indicator=${true} .background=${true}>
          <span slot="header">Community Support</span>
          <div slot="content">
            Free support through GitHub discussions and Discord.
          </div>
        </ag-accordion-item>

        <ag-accordion-item .indicator=${true} .background=${true}>
          <span slot="header">Premium Support</span>
          <div slot="content">
            Priority support with guaranteed response times.
          </div>
        </ag-accordion-item>

        <ag-accordion-item .indicator=${true} .background=${true}>
          <span slot="header">Enterprise</span>
          <div slot="content">
            Custom solutions and dedicated support team.
          </div>
        </ag-accordion-item>
      </div>
    </div>
  `,
};

// CSS Parts customization
export const CSSPartsCustomization: Story = {
  render: () => html`
    <style>
      /* Customize accordion using CSS Shadow Parts */
      .custom-accordion::part(ag-accordion-header-wrapper) {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 8px;
        margin-bottom: 8px;
        padding: 4px;
      }

      .custom-accordion::part(ag-accordion-heading) {
        font-size: 1.125rem;
        font-weight: 600;
      }

      .custom-accordion::part(ag-accordion-header) {
        color: white;
        padding: 16px 20px;
        border-radius: 6px;
        transition: background 0.2s ease;
      }

      .custom-accordion::part(ag-accordion-header):hover {
        background: rgba(255, 255, 255, 0.1);
      }

      .custom-accordion::part(ag-accordion-indicator) {
        color: white;
        font-weight: bold;
      }

      .custom-accordion::part(ag-accordion-content) {
        background: #f9fafb;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 8px;
        border: 2px solid #e5e7eb;
      }

      /* Alternative styling */
      .minimal-accordion::part(ag-accordion-header-wrapper) {
        border-left: 4px solid var(--ag-primary);
        padding-left: 12px;
      }

      .minimal-accordion::part(ag-accordion-header) {
        font-weight: 500;
        color: var(--ag-text-primary);
      }

      .minimal-accordion::part(ag-accordion-content) {
        padding-left: 16px;
        border-left: 2px solid #e5e7eb;
        margin-left: 2px;
      }

      .minimal-accordion::part(ag-accordion-indicator) {
        color: var(--ag-primary);
      }
    </style>

    <div style="padding: 50px; max-width: 800px;">
      <h3 style="margin-top: 0;">Styled with CSS Shadow Parts</h3>
      <p style="margin-bottom: 2rem; color: #6b7280;">
        Accordion items can be fully customized using CSS Shadow Parts:
        <code>::part(ag-accordion-header-wrapper)</code>,
        <code>::part(ag-accordion-heading)</code>,
        <code>::part(ag-accordion-header)</code>,
        <code>::part(ag-accordion-indicator)</code>, and
        <code>::part(ag-accordion-content)</code>
      </p>

      <div style="margin-bottom: 3rem;">
        <h4>Gradient Style</h4>
        <ag-accordion-item class="custom-accordion" .indicator=${true}>
          <span slot="header">Custom Styled Header</span>
          <div slot="content">
            This accordion uses CSS Shadow Parts to apply a gradient background,
            custom padding, border radius, and hover effects.
          </div>
        </ag-accordion-item>

        <ag-accordion-item class="custom-accordion" .indicator=${true}>
          <span slot="header">Another Custom Item</span>
          <div slot="content">
            All styling is done through CSS Shadow Parts, allowing full control
            over the component's appearance without modifying the component itself.
          </div>
        </ag-accordion-item>

        <ag-accordion-item class="custom-accordion" .indicator=${true}>
          <span slot="header">Third Custom Item</span>
          <div slot="content">
            This demonstrates the power of CSS Shadow Parts for component customization
            while maintaining encapsulation and accessibility.
          </div>
        </ag-accordion-item>
      </div>

      <div>
        <h4>Minimal Style</h4>
        <ag-accordion-item class="minimal-accordion" .indicator=${true}>
          <span slot="header">Minimal Styled Header</span>
          <div slot="content">
            This variant uses a minimal border-left design with subtle styling.
          </div>
        </ag-accordion-item>

        <ag-accordion-item class="minimal-accordion" .indicator=${true}>
          <span slot="header">Another Minimal Item</span>
          <div slot="content">
            Clean and simple styling focused on content hierarchy.
          </div>
        </ag-accordion-item>

        <ag-accordion-item class="minimal-accordion" .indicator=${true}>
          <span slot="header">Third Minimal Item</span>
          <div slot="content">
            Demonstrates alternative styling approach using the same CSS Shadow Parts API.
          </div>
        </ag-accordion-item>
      </div>
    </div>
  `,
};
