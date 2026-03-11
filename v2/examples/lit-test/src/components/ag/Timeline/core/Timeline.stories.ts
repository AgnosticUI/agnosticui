import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Timeline';
import '../../Icon/core/Icon';

const CHECK_SVG = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;
const INFO_SVG = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;

const meta: Meta = {
  title: 'AgnosticUI/Timeline',
  component: 'ag-timeline',
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    variant: { control: 'select', options: ['', 'primary', 'success', 'warning', 'danger'] },
    compact: { control: 'boolean' },
  },
  args: { orientation: 'horizontal', variant: '', compact: false },
  render: (args: any) => html`
    <ag-timeline
      orientation=${args.orientation}
      variant=${args.variant}
      ?compact=${args.compact}
    >
      <ag-timeline-item>
        <div slot="ag-start">Jan 2024</div>
        <div slot="ag-marker">
          <ag-icon type="success" size="18">${CHECK_SVG}</ag-icon>
        </div>
        <div slot="ag-end">Project Kickoff</div>
      </ag-timeline-item>
      <ag-timeline-item>
        <div slot="ag-start">Mar 2024</div>
        <div slot="ag-marker">
          <ag-icon type="info" size="18">${INFO_SVG}</ag-icon>
        </div>
        <div slot="ag-end">Beta Release</div>
      </ag-timeline-item>
      <ag-timeline-item>
        <div slot="ag-start">Jun 2024</div>
        <div slot="ag-marker">
          <ag-icon type="success" size="18">${CHECK_SVG}</ag-icon>
        </div>
        <div slot="ag-end">v1.0 Launch</div>
      </ag-timeline-item>
    </ag-timeline>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Vertical: Story = { args: { orientation: 'vertical' } };
