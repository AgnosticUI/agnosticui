import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Select';

const meta: Meta = {
  title: 'AgnosticUI/Select',
  component: 'ag-select',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['', 'small', 'large'] },
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    invalid: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  render: (args: any) => html`
    <div style="max-width: 300px;">
      <label for="player-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Greatest Tennis Player
      </label>
      <ag-select
        id="player-select"
        name="tennis"
        .size=${args.size || ''}
        ?disabled=${args.disabled}
        ?multiple=${args.multiple}
        ?invalid=${args.invalid}
        ?required=${args.required}
      >
        <option value="">- Select a player -</option>
        <option value="federer">Roger Federer</option>
        <option value="nadal">Rafael Nadal</option>
        <option value="djokovic">Novak Djokovic</option>
        <option value="agassi">Andre Agassi</option>
        <option value="sampras">Pete Sampras</option>
      </ag-select>
    </div>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Multiple: Story = {
  render: () => html`
    <div style="max-width: 300px;">
      <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Multiple Select</label>
      <ag-select name="players" .multiple=${true} .multipleSize=${4}>
        <option value="federer">Roger Federer</option>
        <option value="nadal">Rafael Nadal</option>
        <option value="djokovic">Novak Djokovic</option>
        <option value="agassi">Andre Agassi</option>
      </ag-select>
    </div>
  `,
};
