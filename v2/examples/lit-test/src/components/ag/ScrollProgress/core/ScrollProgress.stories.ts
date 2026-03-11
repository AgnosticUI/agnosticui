import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './ScrollProgress';

const LOREM = Array.from({ length: 40 }, (_, i) =>
  `<p style="margin: 1rem 0; line-height: 1.6; max-width: 700px;">Paragraph ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>`
).join('');

const meta: Meta = {
  title: 'AgnosticUI/ScrollProgress',
  component: 'ag-scroll-progress',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    mode: { control: 'select', options: ['bar', 'dot-trail', 'badge', 'ring'] },
    orientation: { control: 'select', options: ['top', 'bottom'] },
  },
  args: { mode: 'bar', orientation: 'top' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const BarTop: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => html`
    <ag-scroll-progress .mode=${'bar'} .orientation=${'top'}></ag-scroll-progress>
    <div style="padding: 2rem;">
      <h2>Bar — Top</h2>
      <p>Scroll down. The progress bar fills along the <strong>top</strong> of the page.</p>
      <div .innerHTML=${LOREM}></div>
    </div>
  `,
};

export const BarBottom: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => html`
    <ag-scroll-progress .mode=${'bar'} .orientation=${'bottom'}></ag-scroll-progress>
    <div style="padding: 2rem;">
      <h2>Bar — Bottom</h2>
      <p>Scroll down. The progress bar fills along the <strong>bottom</strong> of the page.</p>
      <div .innerHTML=${LOREM}></div>
    </div>
  `,
};

export const DotTrail: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => html`
    <div style="position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%); z-index: 100;
                background: var(--ag-background, white); border-radius: 2rem; padding: 0.5rem 1rem;
                box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
      <ag-scroll-progress .mode=${'dot-trail'} .dots=${7}></ag-scroll-progress>
    </div>
    <div style="padding: 2rem;">
      <h2>Dot Trail</h2>
      <p>Scroll down. The dots at the bottom of the page fill in to show progress.</p>
      <div .innerHTML=${LOREM}></div>
    </div>
  `,
};

export const Badge: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => html`
    <div style="position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 100;">
      <ag-scroll-progress .mode=${'badge'} .badgeVariant=${'info'}></ag-scroll-progress>
    </div>
    <div style="padding: 2rem;">
      <h2>Badge</h2>
      <p>Scroll down. The percentage badge in the bottom-right updates as you scroll.</p>
      <div .innerHTML=${LOREM}></div>
    </div>
  `,
};

export const Ring: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => html`
    <div style="position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 100;">
      <ag-scroll-progress .mode=${'ring'} .ringSize=${48} .ringVariant=${'primary'}></ag-scroll-progress>
    </div>
    <div style="padding: 2rem;">
      <h2>Ring</h2>
      <p>Scroll down. The progress ring in the bottom-right fills as you scroll.</p>
      <div .innerHTML=${LOREM}></div>
    </div>
  `,
};
