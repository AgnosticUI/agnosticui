import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ChoiceInputModule } from './choice-input.module';
import { ChoiceInputComponent } from './choice-input.component';

const actionsData = {
  selected: action('selected'),
};

export default {
  title: 'AG/ChoiceInput',
  component: ChoiceInputComponent,
  decorators: [
    moduleMetadata({
      imports: [ChoiceInputModule],
    }),
  ],
  props: {
    propInput: {
      selected: actionsData.selected,
    },
  },
} as Meta;

const disabledOptions = ['weekly', 'monthly'];

export const All: Story<ChoiceInputComponent> = (args: ChoiceInputComponent) => ({
  props: {
    reusableOptions: [
      {
        name: 'frequency',
        value: 'daily',
        label: 'Daily',
      },
      {
        name: 'frequency',
        value: 'weekly',
        label: 'Weekly',
      },
      {
        name: 'frequency',
        value: 'monthly',
        label: 'Monthly',
      },
    ]
  },
  template: `<div>
    <ag-choice type="checkbox" [options]="reusableOptions" legendLabel="Checkbox legend" (selected)="propInput.selected($event)"></ag-choice>
    <ag-choice type="checkbox" [isDisabled]="true" [options]="reusableOptions" legendLabel="Checkbox disabled" (selected)="propInput.selected($event)"></ag-choice>
  </div>` 
});
