import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { SwitchModule } from './switch.module';
import { SwitchComponent } from './switch.component';

const actionsData = {
  change: action('change'),
};

export default {
  title: 'AG/Switch',
  component: SwitchComponent,
  decorators: [
    moduleMetadata({
      imports: [SwitchModule],
    }),
  ],
  on: {
    ...actionsData,
  },
} as Meta;

const Template: Story<SwitchComponent> = (args: SwitchComponent) => ({
  template: `<div>
    <ag-switch label="Switch small" size="small" labelPosition="right"></ag-switch>
    <ag-switch label="Switch default"></ag-switch>
  </div>`
})

export const SwitchExample = Template.bind({})
