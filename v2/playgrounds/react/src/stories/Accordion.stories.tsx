import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactAccordion, AccordionItem, ItemHeader, ItemContent, type ReactAccordionItemProps } from 'agnosticui-core/accordion/react';

const meta: Meta<ReactAccordionItemProps> = {
  title: 'AgnosticUI React/Accordion',
  component: AccordionItem,
  tags: ['autodocs'],
  argTypes: {
    // Component props
    open: {
      control: 'boolean',
      description: 'Whether the accordion item is open',
    },
    headingLevel: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level for semantic HTML (h1-h6)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    indicator: {
      control: 'boolean',
      description: 'Show expand/collapse indicator',
    },
    bordered: {
      control: 'boolean',
      description: 'Add border to header',
    },
    background: {
      control: 'boolean',
      description: 'Add background color to header',
    },

    // Event handlers
    onToggle: {
      action: 'toggle',
      description: 'Emitted when accordion item is toggled',
    },
  },
  args: {
    open: false,
    headingLevel: 3,
    disabled: false,
    indicator: true,
    bordered: false,
    background: false,
    onToggle: fn(),
  },
} satisfies Meta<ReactAccordionItemProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ReactAccordion>
      <AccordionItem {...args}>
        <ItemHeader>Accordion Item 1</ItemHeader>
        <ItemContent>
          <p>This is the content of the first accordion item.</p>
        </ItemContent>
      </AccordionItem>
      <AccordionItem {...args}>
        <ItemHeader>Accordion Item 2</ItemHeader>
        <ItemContent>
          <p>This is the content of the second accordion item.</p>
        </ItemContent>
      </AccordionItem>
      <AccordionItem {...args}>
        <ItemHeader>Accordion Item 3</ItemHeader>
        <ItemContent>
          <p>This is the content of the third accordion item.</p>
        </ItemContent>
      </AccordionItem>
    </ReactAccordion>
  ),
};

export const WithIndicator: Story = {
  args: {
    indicator: true,
  },
  render: (args) => (
    <ReactAccordion>
      <AccordionItem {...args}>
        <ItemHeader>Section 1</ItemHeader>
        <ItemContent>
          <p>Content with expand/collapse indicator</p>
        </ItemContent>
      </AccordionItem>
      <AccordionItem {...args}>
        <ItemHeader>Section 2</ItemHeader>
        <ItemContent>
          <p>Another section with indicator</p>
        </ItemContent>
      </AccordionItem>
    </ReactAccordion>
  ),
};

export const Bordered: Story = {
  args: {
    bordered: true,
    indicator: true,
  },
  render: (args) => (
    <ReactAccordion>
      <AccordionItem {...args}>
        <ItemHeader>Bordered Item 1</ItemHeader>
        <ItemContent>
          <p>This accordion has borders on the headers</p>
        </ItemContent>
      </AccordionItem>
      <AccordionItem {...args}>
        <ItemHeader>Bordered Item 2</ItemHeader>
        <ItemContent>
          <p>Another bordered item</p>
        </ItemContent>
      </AccordionItem>
    </ReactAccordion>
  ),
};

export const WithBackground: Story = {
  args: {
    background: true,
    indicator: true,
  },
  render: (args) => (
    <ReactAccordion>
      <AccordionItem {...args}>
        <ItemHeader>Background Item 1</ItemHeader>
        <ItemContent>
          <p>This accordion has background color on headers</p>
        </ItemContent>
      </AccordionItem>
      <AccordionItem {...args}>
        <ItemHeader>Background Item 2</ItemHeader>
        <ItemContent>
          <p>Another item with background</p>
        </ItemContent>
      </AccordionItem>
    </ReactAccordion>
  ),
};

export const OneOpen: Story = {
  args: {
    indicator: true,
  },
  render: (args) => (
    <ReactAccordion>
      <AccordionItem {...args}>
        <ItemHeader>Closed Item</ItemHeader>
        <ItemContent>
          <p>This item starts closed</p>
        </ItemContent>
      </AccordionItem>
      <AccordionItem {...args} open={true}>
        <ItemHeader>Open Item</ItemHeader>
        <ItemContent>
          <p>This item starts open</p>
        </ItemContent>
      </AccordionItem>
      <AccordionItem {...args}>
        <ItemHeader>Another Closed Item</ItemHeader>
        <ItemContent>
          <p>This item also starts closed</p>
        </ItemContent>
      </AccordionItem>
    </ReactAccordion>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    indicator: true,
  },
  render: (args) => (
    <ReactAccordion>
      <AccordionItem indicator={true}>
        <ItemHeader>Enabled Item</ItemHeader>
        <ItemContent>
          <p>This item can be toggled</p>
        </ItemContent>
      </AccordionItem>
      <AccordionItem {...args}>
        <ItemHeader>Disabled Item</ItemHeader>
        <ItemContent>
          <p>This item cannot be toggled</p>
        </ItemContent>
      </AccordionItem>
      <AccordionItem indicator={true}>
        <ItemHeader>Another Enabled Item</ItemHeader>
        <ItemContent>
          <p>This item can also be toggled</p>
        </ItemContent>
      </AccordionItem>
    </ReactAccordion>
  ),
};

export const CustomHeadingLevel: Story = {
  args: {
    headingLevel: 2,
    indicator: true,
  },
  render: (args) => (
    <div>
      <h1>Page Title</h1>
      <ReactAccordion>
        <AccordionItem {...args}>
          <ItemHeader>Section (H2)</ItemHeader>
          <ItemContent>
            <p>This uses h2 for semantic hierarchy</p>
          </ItemContent>
        </AccordionItem>
        <AccordionItem {...args}>
          <ItemHeader>Another Section (H2)</ItemHeader>
          <ItemContent>
            <p>Also uses h2</p>
          </ItemContent>
        </AccordionItem>
      </ReactAccordion>
    </div>
  ),
};

export const RichContent: Story = {
  args: {
    indicator: true,
    bordered: true,
  },
  render: (args) => (
    <ReactAccordion>
      <AccordionItem {...args}>
        <ItemHeader>Features</ItemHeader>
        <ItemContent>
          <ul>
            <li>Accessible by default with ARIA attributes</li>
            <li>Keyboard navigation support</li>
            <li>Customizable heading levels</li>
            <li>Multiple styling options</li>
          </ul>
        </ItemContent>
      </AccordionItem>
      <AccordionItem {...args}>
        <ItemHeader>Code Example</ItemHeader>
        <ItemContent>
          <pre>
{`<AccordionItem indicator={true}>
  <ItemHeader>Title</ItemHeader>
  <ItemContent>Content</ItemContent>
</AccordionItem>`}
          </pre>
        </ItemContent>
      </AccordionItem>
      <AccordionItem {...args}>
        <ItemHeader>More Information</ItemHeader>
        <ItemContent>
          <p>Accordions are great for:</p>
          <ul>
            <li>FAQ sections</li>
            <li>Feature lists</li>
            <li>Documentation</li>
            <li>Progressive disclosure</li>
          </ul>
        </ItemContent>
      </AccordionItem>
    </ReactAccordion>
  ),
};

// Event testing story
export const EventTesting: Story = {
  args: {
    indicator: true,
  },
  render: (args) => {
    const [toggleCounts, setToggleCounts] = useState<Record<number, number>>({
      0: 0,
      1: 0,
      2: 0,
    });
    const [lastToggled, setLastToggled] = useState<string>('None');

    const handleToggle = (index: number, itemName: string) => (event: any) => {
      setToggleCounts(prev => ({ ...prev, [index]: prev[index] + 1 }));
      setLastToggled(`${itemName} (${event.detail.open ? 'opened' : 'closed'})`);
      args.onToggle?.(event);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '20px' }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <p>Item 1 toggles: {toggleCounts[0]}</p>
          <p>Item 2 toggles: {toggleCounts[1]}</p>
          <p>Item 3 toggles: {toggleCounts[2]}</p>
        </div>
        <p>Last toggled: {lastToggled}</p>

        <ReactAccordion>
          <AccordionItem {...args} onToggle={handleToggle(0, 'Item 1')}>
            <ItemHeader>Item 1</ItemHeader>
            <ItemContent>
              <p>Click the header or press Space/Enter to toggle</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem {...args} onToggle={handleToggle(1, 'Item 2')}>
            <ItemHeader>Item 2</ItemHeader>
            <ItemContent>
              <p>Use arrow keys to navigate between items</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem {...args} onToggle={handleToggle(2, 'Item 3')}>
            <ItemHeader>Item 3</ItemHeader>
            <ItemContent>
              <p>Home/End keys jump to first/last item</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>

        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Click headers or use keyboard (Space/Enter to toggle, Arrow keys to navigate)
        </p>
      </div>
    );
  },
};

// CSS Parts customization
export const CSSPartsCustomization: Story = {
  render: () => (
    <>
      <style>{`
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
      `}</style>

      <div style={{ padding: '50px', maxWidth: '800px' }}>
        <h3 style={{ marginTop: 0 }}>Styled with CSS Shadow Parts</h3>
        <p style={{ marginBottom: '2rem', color: '#6b7280' }}>
          Accordion items can be fully customized using CSS Shadow Parts:
          <code>::part(ag-accordion-header-wrapper)</code>,
          <code>::part(ag-accordion-heading)</code>,
          <code>::part(ag-accordion-header)</code>,
          <code>::part(ag-accordion-indicator)</code>, and
          <code>::part(ag-accordion-content)</code>
        </p>

        <div style={{ marginBottom: '3rem' }}>
          <h4>Gradient Style</h4>
          <ReactAccordion>
            <AccordionItem className="custom-accordion" indicator={true}>
              <ItemHeader>Custom Styled Header</ItemHeader>
              <ItemContent>
                This accordion uses CSS Shadow Parts to apply a gradient background,
                custom padding, border radius, and hover effects.
              </ItemContent>
            </AccordionItem>

            <AccordionItem className="custom-accordion" indicator={true}>
              <ItemHeader>Another Custom Item</ItemHeader>
              <ItemContent>
                All styling is done through CSS Shadow Parts, allowing full control
                over the component's appearance without modifying the component itself.
              </ItemContent>
            </AccordionItem>

            <AccordionItem className="custom-accordion" indicator={true}>
              <ItemHeader>Third Custom Item</ItemHeader>
              <ItemContent>
                This demonstrates the power of CSS Shadow Parts for component customization
                while maintaining encapsulation and accessibility.
              </ItemContent>
            </AccordionItem>
          </ReactAccordion>
        </div>

        <div>
          <h4>Minimal Style</h4>
          <ReactAccordion>
            <AccordionItem className="minimal-accordion" indicator={true}>
              <ItemHeader>Minimal Styled Header</ItemHeader>
              <ItemContent>
                This variant uses a minimal border-left design with subtle styling.
              </ItemContent>
            </AccordionItem>

            <AccordionItem className="minimal-accordion" indicator={true}>
              <ItemHeader>Another Minimal Item</ItemHeader>
              <ItemContent>
                Clean and simple styling focused on content hierarchy.
              </ItemContent>
            </AccordionItem>

            <AccordionItem className="minimal-accordion" indicator={true}>
              <ItemHeader>Third Minimal Item</ItemHeader>
              <ItemContent>
                Demonstrates alternative styling approach using the same CSS Shadow Parts API.
              </ItemContent>
            </AccordionItem>
          </ReactAccordion>
        </div>
      </div>
    </>
  ),
};
