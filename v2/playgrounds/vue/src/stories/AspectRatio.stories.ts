import type { Meta } from '@storybook/vue3';
import { VueAspectRatio } from 'agnosticui-core/aspect-ratio/vue';

const meta: Meta = {
  title: 'AgnosticUI Vue/AspectRatio',
  component: VueAspectRatio,
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

export const Default = (args: any) => ({
  components: { VueAspectRatio },
  setup() { return { args }; },
  template: `<VueAspectRatio :width="args.width" :height="args.height" :max-width="args.maxWidth"><div style="background:#ddd;width:100%;height:100%">Aspect ratio box</div></VueAspectRatio>`,
});
