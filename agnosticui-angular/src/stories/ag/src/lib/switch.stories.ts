import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { SwitchModule } from './switch.module';
import { SwitchComponent } from './switch.component';

export default {
  title: 'AG/Switch',
  component: SwitchComponent,
  decorators: [
    moduleMetadata({
      imports: [SwitchModule],
    }),
  ],
} as Meta;

const Template: Story<SwitchComponent> = (args: SwitchComponent) => ({
  template: `<ag-switch></ag-switch>`
})

export const SwitchExample = Template.bind({})
