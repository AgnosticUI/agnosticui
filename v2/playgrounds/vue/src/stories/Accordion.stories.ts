import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent, type VueAccordionItemProps } from 'agnosticui-core/accordion/vue';

const meta = {
  title: 'AgnosticUI/Accordion',
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
    onToggle: {
      action: 'toggled',
      description: 'Emitted when the accordion item is toggled',
    },
  },
  // Define default args for VueAccordionItem, not VueAccordion
  args: {
    headingLevel: 3,
    disabled: false,
    indicator: false,
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

export const WithIndicator: Story = {
  args: {
    indicator: true,
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
