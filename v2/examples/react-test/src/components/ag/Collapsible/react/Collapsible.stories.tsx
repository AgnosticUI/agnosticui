import type { Meta, StoryObj } from '@storybook/react';
import { ReactCollapsible } from './ReactCollapsible';

const meta = {
  title: 'AgnosticUI/Collapsible',
  component: ReactCollapsible,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactCollapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ReactCollapsible>
      <span slot="summary">Toggle details</span>
      <div>Collapsible content goes here.</div>
    </ReactCollapsible>
  ),
};
