import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ReactRating, type ReactRatingProps, type RatingChangeEvent } from 'agnosticui-core/rating/react';

const meta: Meta<ReactRatingProps> = {
  title: 'AgnosticUI React/Rating',
  component: ReactRating,
  argTypes: {
    value: { control: 'number', description: 'Current rating value' },
    max: { control: 'number', description: 'Total number of stars' },
    precision: {
      control: 'select',
      options: ['whole', 'half'],
      description: 'Precision mode: whole or half stars',
    },
    readonly: { control: 'boolean', description: 'Disables interaction' },
    allowClear: { control: 'boolean', description: 'Allows clearing rating' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the rating component',
    },
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Visual variant (not used for colors here)',
    },
  },
  args: {
    value: 3,
    max: 5,
    precision: 'whole',
    readonly: false,
    allowClear: false,
    size: 'md',
    variant: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ReactRating {...args} />,
};

export const HalfPrecision: Story = {
  args: {
    value: 2.5,
    precision: 'half',
  },
  render: (args) => <ReactRating {...args} />,
};

export const Readonly: Story = {
  args: {
    value: 4,
    readonly: true,
  },
  render: (args) => <ReactRating {...args} />,
};

export const AllowClear: Story = {
  render: (args) => {
    const [value, setValue] = useState(3);
    return (
      <ReactRating
        {...args}
        allowClear
        value={value}
        onRatingChange={(e: RatingChangeEvent) => setValue(e.detail.newValue)}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <ReactRating size="sm" value={3} />
      <ReactRating size="md" value={3} />
      <ReactRating size="lg" value={3} />
    </div>
  ),
};

export const EventHandling: Story = {
  render: () => {
    const [value, setValue] = useState(3);
    const [hoverValue, setHoverValue] = useState(0);
    const [lastEvent, setLastEvent] = useState('');

    return (
      <div>
        <ReactRating
          value={value}
          onRatingChange={(e) => {
            setValue(e.detail.newValue);
            setLastEvent(`rating-change: ${e.detail.newValue}`);
          }}
          onRatingHover={(e) => {
            setHoverValue(e.detail.value);
            setLastEvent(`rating-hover: phase=${e.detail.phase}, value=${e.detail.value}`);
          }}
        />
        <div style={{ marginTop: '1rem' }}>
          <p>Current Value: {value}</p>
          <p>Hover Value: {hoverValue}</p>
          <p>Last Event: {lastEvent}</p>
        </div>
      </div>
    );
  },
};