import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Accordion';

const meta: Meta = {
  title: 'AgnosticUI/Accordion',
  component: 'ag-accordion',
  tags: ['autodocs'],
  render: () => html`
    <ag-accordion style="max-width: 600px;">
      <ag-accordion-item .open=${true}>
        <span slot="header">Getting Started</span>
        <div slot="content">
          <p>AgnosticUI is a component library that works across React, Vue, and Lit. Install it with the CLI and add components to your project.</p>
        </div>
      </ag-accordion-item>
      <ag-accordion-item>
        <span slot="header">Configuration</span>
        <div slot="content">
          <p>Configure your project by editing the agnosticui.config.json file in your project root. Add components as needed.</p>
        </div>
      </ag-accordion-item>
      <ag-accordion-item>
        <span slot="header">Theming</span>
        <div slot="content">
          <p>Customize the appearance using CSS custom properties. Override tokens in your stylesheet to match your brand.</p>
        </div>
      </ag-accordion-item>
    </ag-accordion>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Bordered: Story = {
  render: () => html`
    <ag-accordion style="max-width: 600px;">
      <ag-accordion-item .open=${true} .bordered=${true}>
        <span slot="header">Section One</span>
        <div slot="content"><p>Content for section one goes here.</p></div>
      </ag-accordion-item>
      <ag-accordion-item .bordered=${true}>
        <span slot="header">Section Two</span>
        <div slot="content"><p>Content for section two goes here.</p></div>
      </ag-accordion-item>
    </ag-accordion>
  `,
};
