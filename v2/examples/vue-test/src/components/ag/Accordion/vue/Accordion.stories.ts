import type { Meta, StoryObj } from '@storybook/vue3';
import { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent } from './index';

const meta = {
  title: 'AgnosticUI/Accordion',
  component: VueAccordionItem,
  tags: ['autodocs'],
  argTypes: {
    useChevron: { control: 'boolean' },
    useX: { control: 'boolean' },
    useMinus: { control: 'boolean' },
    noIndicator: { control: 'boolean' },
    bordered: { control: 'boolean' },
    background: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { useChevron: true },
  render: (args: any) => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    setup() { return { args }; },
    template: `
      <VueAccordion>
        <VueAccordionItem v-bind="args">
          <VueAccordionHeader>What is AgnosticUI?</VueAccordionHeader>
          <VueAccordionContent>
            AgnosticUI is a framework-agnostic UI component library that works with React, Vue, and Lit.
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem v-bind="args">
          <VueAccordionHeader>How do I install it?</VueAccordionHeader>
          <VueAccordionContent>
            Run <code>npx agnosticui-cli init</code> to set up your project, then use <code>npx agnosticui-cli add Button</code> to add components.
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem v-bind="args">
          <VueAccordionHeader>Is it accessible?</VueAccordionHeader>
          <VueAccordionContent>
            Yes — all components are built with accessibility in mind, following WAI-ARIA patterns.
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    `,
  }),
} satisfies Meta<typeof VueAccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OpenByDefault: Story = {
  render: (args: any) => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    setup() { return { args }; },
    template: `
      <VueAccordion>
        <VueAccordionItem v-bind="args" :open="true">
          <VueAccordionHeader>Open by default</VueAccordionHeader>
          <VueAccordionContent>This item starts open.</VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem v-bind="args">
          <VueAccordionHeader>Closed by default</VueAccordionHeader>
          <VueAccordionContent>Click to expand.</VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    `,
  }),
};
export const Bordered: Story = { args: { bordered: true } };
export const PlusMinusIndicator: Story = { args: { useMinus: true, useChevron: false } };
