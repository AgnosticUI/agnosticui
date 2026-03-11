import type { Meta, StoryObj } from '@storybook/react';
import { ReactAccordion } from './ReactAccordion';

const meta = {
  title: 'AgnosticUI/Accordion',
  component: ReactAccordion,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
