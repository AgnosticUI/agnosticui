import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ChoiceInputModule } from './choice-input.module';
import { ChoiceInputComponent } from './choice-input.component';

export default {
  title: 'AG/ChoiceInput',
  component: ChoiceInputComponent,
  decorators: [
    moduleMetadata({
      imports: [ChoiceInputModule],
    }),
  ],
} as Meta;

const Template: Story<ChoiceInputComponent> = (args: ChoiceInputComponent) => ({
  template: `<ag-choice></ag-choice>`
})

export const ChoiceInputExample = Template.bind({})
