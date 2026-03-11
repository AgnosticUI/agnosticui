import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Image';

const meta: Meta = {
  title: 'AgnosticUI/Image',
  component: 'ag-image',
  tags: ['autodocs'],
  render: () => html`
    <ag-image
      .src=${'https://picsum.photos/800/400'}
      .alt=${'Sample landscape photo'}
      .width=${800}
      .height=${400}
    ></ag-image>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const WithFade: Story = {
  render: () => html`
    <ag-image
      .src=${'https://picsum.photos/600/400?random=2'}
      .alt=${'Fading image'}
      .width=${600}
      .height=${400}
      .fade=${true}
      .duration=${500}
    ></ag-image>
  `,
};

export const WithAspectRatio: Story = {
  render: () => html`
    <ag-image
      .src=${'https://picsum.photos/1200/675?random=3'}
      .alt=${'Wide image'}
      .aspectRatio=${'16/9'}
      .fit=${'cover'}
      style="width: 100%; max-width: 800px; display: block;"
    ></ag-image>
  `,
};
