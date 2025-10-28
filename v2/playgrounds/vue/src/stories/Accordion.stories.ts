import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import VueAccordion, { VueAccordionItem, VueAccordionHeader, VueAccordionContent, type VueAccordionItemProps } from 'agnosticui-core/accordion/vue';

const meta = {
  title: 'AgnosticUI Vue/Accordion',
  component: VueAccordion,
  tags: ['autodocs'],
  argTypes: {
    headingLevel: {
      control: 'number',
      description: 'Heading level for accordion items (1-6)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the accordion item',
    },
    useChevron: {
      control: 'boolean',
      description: 'Uses chevron indicator (default, rotates 180° when open)',
    },
    useX: {
      control: 'boolean',
      description: 'Uses X indicator (plus rotated 180°, becomes X at 45° when open)',
    },
    useMinus: {
      control: 'boolean',
      description: 'Uses plus/minus indicator (plus transitions to minus when open)',
    },
    noIndicator: {
      control: 'boolean',
      description: 'Hides the indicator completely',
    },
    bordered: {
      control: 'boolean',
      description: 'Applies bordered style to the header',
    },
    background: {
      control: 'boolean',
      description: 'Applies background color to the header',
    },
    onToggle: {
      action: 'toggled',
      description: 'Emitted when the accordion item is toggled',
    },
  },
  // Define default args for VueAccordionItem, not VueAccordion
  args: {
    headingLevel: 3,
    disabled: false,
    useChevron: true,
    useX: false,
    useMinus: false,
    noIndicator: false,
    bordered: false,
    background: false,
    onToggle: fn(),
  },
} satisfies Meta<typeof VueAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args: VueAccordionItemProps) => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    setup() {
      return { args };
    },
    template: `
      <VueAccordion>
        <VueAccordionItem v-bind="args">
          <VueAccordionHeader>Accordion Item 1</VueAccordionHeader>
          <VueAccordionContent>
            This is the content of the first accordion item.
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem v-bind="args">
          <VueAccordionHeader>Accordion Item 2</VueAccordionHeader>
          <VueAccordionContent>
            This is the content of the second accordion item.
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    `,
  }),
};

export const OpenByDefault: Story = {
  args: {},
  render: (args: VueAccordionItemProps) => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    setup() {
      return { args };
    },
    template: `
      <VueAccordion>
        <VueAccordionItem v-bind="args" open>
          <VueAccordionHeader>Accordion Item 1 (Open)</VueAccordionHeader>
          <VueAccordionContent>
            This is the content of the first accordion item, open by default.
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem v-bind="args">
          <VueAccordionHeader>Accordion Item 2</VueAccordionHeader>
          <VueAccordionContent>
            This is the content of the second accordion item.
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args: VueAccordionItemProps) => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    setup() {
      return { args };
    },
    template: `
      <VueAccordion>
        <VueAccordionItem v-bind="args" disabled>
          <VueAccordionHeader>Disabled Accordion Item</VueAccordionHeader>
          <VueAccordionContent>
            This content cannot be toggled because the item is disabled.
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem v-bind="args">
          <VueAccordionHeader>Enabled Accordion Item</VueAccordionHeader>
          <VueAccordionContent>
            This is the content of an enabled accordion item.
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    `,
  }),
};

export const PlusMinusIndicator: Story = {
  args: {
    useMinus: true,
  },
  render: () => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    template: `
      <div style="padding: 50px; max-width: 600px;">
        <h4 style="margin-top: 0;">Plus/Minus Indicator</h4>
        <p style="margin-bottom: 1rem; color: #6b7280;">
          Plus transitions to minus when open with smooth animation.
        </p>
        <VueAccordion>
          <VueAccordionItem :use-minus="true">
            <VueAccordionHeader>Accordion with Plus/Minus</VueAccordionHeader>
            <VueAccordionContent>
              <p>This shows a plus when closed and a minus when open.</p>
            </VueAccordionContent>
          </VueAccordionItem>

          <VueAccordionItem :use-minus="true">
            <VueAccordionHeader>Another Plus/Minus Item</VueAccordionHeader>
            <VueAccordionContent>
              <p>The plus rotates while swapping to minus.</p>
            </VueAccordionContent>
          </VueAccordionItem>

          <VueAccordionItem :use-minus="true">
            <VueAccordionHeader>Third Plus/Minus Item</VueAccordionHeader>
            <VueAccordionContent>
              <p>A classic expand/collapse indicator style.</p>
            </VueAccordionContent>
          </VueAccordionItem>
        </VueAccordion>
      </div>
    `,
  }),
};

export const XIndicator: Story = {
  args: {
    useX: true,
  },
  render: () => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    template: `
      <div style="padding: 50px; max-width: 600px;">
        <h4 style="margin-top: 0;">X Indicator</h4>
        <p style="margin-bottom: 1rem; color: #6b7280;">
          Plus rotated 180° (upside down) when closed, rotates to 45° forming an X when open.
        </p>
        <VueAccordion>
          <VueAccordionItem :use-x="true">
            <VueAccordionHeader>Accordion with X Indicator</VueAccordionHeader>
            <VueAccordionContent>
              <p>This uses a plus icon that transforms into an X when opened.</p>
            </VueAccordionContent>
          </VueAccordionItem>

          <VueAccordionItem :use-x="true">
            <VueAccordionHeader>Another X Item</VueAccordionHeader>
            <VueAccordionContent>
              <p>Watch the smooth transition from plus to X.</p>
            </VueAccordionContent>
          </VueAccordionItem>

          <VueAccordionItem :use-x="true">
            <VueAccordionHeader>Third X Item</VueAccordionHeader>
            <VueAccordionContent>
              <p>The X indicator provides a different visual style.</p>
            </VueAccordionContent>
          </VueAccordionItem>
        </VueAccordion>
      </div>
    `,
  }),
};

export const WithIndicator: Story = {
  args: {
    useChevron: true,
  },
  render: (args: VueAccordionItemProps) => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    setup() {
      return { args };
    },
    template: `
      <VueAccordion>
        <VueAccordionItem v-bind="args" indicator>
          <VueAccordionHeader>Accordion Item with Indicator</VueAccordionHeader>
          <VueAccordionContent>
            This accordion item has a visible expand/collapse indicator.
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem v-bind="args" indicator>
          <VueAccordionHeader>Another Item with Indicator</VueAccordionHeader>
          <VueAccordionContent>
            This is another accordion item with an indicator.
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    `,
  }),
};

export const Bordered: Story = {
  args: {
    bordered: true,
  },
  render: (args: VueAccordionItemProps) => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    setup() {
      return { args };
    },
    template: `
      <VueAccordion>
        <VueAccordionItem v-bind="args" bordered>
          <VueAccordionHeader>Bordered Accordion Item</VueAccordionHeader>
          <VueAccordionContent>
            This accordion item has a bordered header.
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem v-bind="args" bordered>
          <VueAccordionHeader>Another Bordered Item</VueAccordionHeader>
          <VueAccordionContent>
            This is another accordion item with a bordered header.
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    `,
  }),
};

export const WithBackground: Story = {
  args: {
    background: true,
  },
  render: (args: VueAccordionItemProps) => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    setup() {
      return { args };
    },
    template: `
      <VueAccordion>
        <VueAccordionItem v-bind="args" background>
          <VueAccordionHeader>Accordion Item with Background</VueAccordionHeader>
          <VueAccordionContent>
            This accordion item has a background color on the header.
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem v-bind="args" background>
          <VueAccordionHeader>Another Item with Background</VueAccordionHeader>
          <VueAccordionContent>
            This is another accordion item with a background header.
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    `,
  }),
};

export const CustomHeadingLevel: Story = {
  args: {
    headingLevel: 2,
  },
  render: (args: VueAccordionItemProps) => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    setup() {
      return { args };
    },
    template: `
      <VueAccordion>
        <VueAccordionItem v-bind="args" heading-level="2">
          <VueAccordionHeader>Accordion Item (H2)</VueAccordionHeader>
          <VueAccordionContent>
            This accordion item uses an H2 heading.
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem v-bind="args" heading-level="2">
          <VueAccordionHeader>Another Item (H2)</VueAccordionHeader>
          <VueAccordionContent>
            This is another accordion item with an H2 heading.
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    `,
  }),
};

export const Accessible: Story = {
  args: {},
  render: (args: VueAccordionItemProps) => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    setup() {
      return { args };
    },
    template: `
      <div>
        <p id="accordion-description">This is an accessible accordion for screen readers.</p>
        <VueAccordion>
          <VueAccordionItem v-bind="args" aria-describedby="accordion-description">
            <VueAccordionHeader>Accessible Accordion Item</VueAccordionHeader>
            <VueAccordionContent>
              This accordion item is accessible with ARIA attributes.
            </VueAccordionContent>
          </VueAccordionItem>
          <VueAccordionItem v-bind="args" aria-describedby="accordion-description">
            <VueAccordionHeader>Another Accessible Item</VueAccordionHeader>
            <VueAccordionContent>
              This is another accessible accordion item.
            </VueAccordionContent>
          </VueAccordionItem>
        </VueAccordion>
      </div>
    `,
  }),
};

export const CSSPartsCustomization: Story = {
  render: () => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    setup() {
      // Inject global styles for CSS Shadow Parts
      const styleId = 'accordion-css-parts-demo';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
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
        `;
        document.head.appendChild(style);
      }
    },
    template: `
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
          <VueAccordion>
            <VueAccordionItem class="custom-accordion" :use-chevron="true">
              <VueAccordionHeader>Custom Styled Header</VueAccordionHeader>
              <VueAccordionContent>
                This accordion uses CSS Shadow Parts to apply a gradient background,
                custom padding, border radius, and hover effects.
              </VueAccordionContent>
            </VueAccordionItem>

            <VueAccordionItem class="custom-accordion" :use-chevron="true">
              <VueAccordionHeader>Another Custom Item</VueAccordionHeader>
              <VueAccordionContent>
                All styling is done through CSS Shadow Parts, allowing full control
                over the component's appearance without modifying the component itself.
              </VueAccordionContent>
            </VueAccordionItem>

            <VueAccordionItem class="custom-accordion" :use-chevron="true">
              <VueAccordionHeader>Third Custom Item</VueAccordionHeader>
              <VueAccordionContent>
                This demonstrates the power of CSS Shadow Parts for component customization
                while maintaining encapsulation and accessibility.
              </VueAccordionContent>
            </VueAccordionItem>
          </VueAccordion>
        </div>

        <div>
          <h4>Minimal Style</h4>
          <VueAccordion>
            <VueAccordionItem class="minimal-accordion" :use-chevron="true">
              <VueAccordionHeader>Minimal Styled Header</VueAccordionHeader>
              <VueAccordionContent>
                This variant uses a minimal border-left design with subtle styling.
              </VueAccordionContent>
            </VueAccordionItem>

            <VueAccordionItem class="minimal-accordion" :use-chevron="true">
              <VueAccordionHeader>Another Minimal Item</VueAccordionHeader>
              <VueAccordionContent>
                Clean and simple styling focused on content hierarchy.
              </VueAccordionContent>
            </VueAccordionItem>

            <VueAccordionItem class="minimal-accordion" :use-chevron="true">
              <VueAccordionHeader>Third Minimal Item</VueAccordionHeader>
              <VueAccordionContent>
                Demonstrates alternative styling approach using the same CSS Shadow Parts API.
              </VueAccordionContent>
            </VueAccordionItem>
          </VueAccordion>
        </div>
      </div>
    `,
  }),
};
