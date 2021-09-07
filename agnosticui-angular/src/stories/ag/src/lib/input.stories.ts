import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { InputModule } from './input.module';
import { InputComponent } from './input.component';

export default {
  title: 'AG/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [InputModule],
    }),
  ],
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  template: `<ag-input></ag-input>`
})

export const InputExample = Template.bind({})
