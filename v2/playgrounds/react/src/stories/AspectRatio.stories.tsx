import { type Meta, type StoryObj } from '@storybook/react';
import { ReactAspectRatio, type ReactAspectRatioProps } from 'agnosticui-core/aspect-ratio/react';

const meta: Meta = {
  title: 'AgnosticUI React/AspectRatio',
  component: ReactAspectRatio,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    maxWidth: { control: 'number' },
  },
  args: {
    width: 16,
    height: 9,
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    width: 16,
    height: 9,
    maxWidth: 500
  },
  render: ({ width, height, maxWidth }: ReactAspectRatioProps) => (
    <ReactAspectRatio width={width} height={height} maxWidth={maxWidth}>
      <div style={{ background: '#ddd', width: '100%', height: '100%' }}>Aspect ratio box</div>
    </ReactAspectRatio>
  ),
};
