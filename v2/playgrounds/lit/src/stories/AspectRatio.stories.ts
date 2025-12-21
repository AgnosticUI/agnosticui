import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/aspect-ratio';

const meta: Meta = {
  title: 'AgnosticUI Lit/AspectRatio',
  component: 'ag-aspect-ratio',
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    maxWidth: { control: 'number' },
  },
  args: {
    width: 16,
    height: 9,
    maxWidth: 500,
  },
};

export default meta;

export const Default: StoryObj = {
  render: (args) => html`
    <ag-aspect-ratio .width=${args.width} .height=${args.height} .maxWidth=${args.maxWidth}>
      <iframe style="background:#ddd;width:100%;height:100%;" srcdoc="<p style='font-family: sans-serif; '>Aspect ratio box</p>" frameborder="0"></iframe>
    </ag-aspect-ratio>
  `,
};
