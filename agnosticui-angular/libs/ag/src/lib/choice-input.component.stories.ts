import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ChoiceInputModule } from './choice-input.module';
import { ChoiceInputComponent } from './choice-input.component';

const actionsData = {
  selected: action('selected'),
};

export default {
  title: 'AG—Angular/ChoiceInput',
  component: ChoiceInputComponent,
  decorators: [
    moduleMetadata({
      imports: [ChoiceInputModule],
    }),
  ],
} as Meta;

export const All: Story<ChoiceInputComponent> = (
  args: ChoiceInputComponent
) => ({
  props: {
    propInput: {
      selected: actionsData.selected,
    },
    disabledOptions: ['weekly', 'monthly'],
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
    ],
  },
  template: `<div>
    <h1 style="margin: 1rem 0;">Checkboxes</h1>
    <ag-choice-input type="checkbox" [options]="reusableOptions" legendLabel="Legend" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input type="checkbox" [isDisabled]="true" [options]="reusableOptions" legendLabel="Disabled" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input type="checkbox" [options]="reusableOptions" [disabledOptions]="disabledOptions" legendLabel="Specific options disabled" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input type="checkbox" [options]="reusableOptions" [disabledOptions]="disabledOptions" [isFieldset]="false" legendLabel="Fieldset hidden" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input type="checkbox" [options]="reusableOptions" [isInline]="true" legendLabel="Inline" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input type="checkbox" [options]="reusableOptions" [isInline]="true" size="small" legendLabel="Small" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input type="checkbox" [options]="reusableOptions" [isInline]="true" size="large" legendLabel="Large" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input type="checkbox" [options]="reusableOptions" checkedOptions="['daily', 'weekly']" [isInline]="true" size="large" legendLabel="Prechecked options" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input [options]="reusableOptions" [isSkinned]="false" [isInline]="true" legendLabel="Checkbox unskinned (fieldset and legend unstyled)" (selected)="propInput.selected($event)"></ag-choice-input>
    <h1 style="margin: 1rem 0;">Radios</h1>
    <ag-choice-input type="radio" [options]="reusableOptions" legendLabel="Radio legend" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input type="radio" [options]="reusableOptions" [isDisabled]="true" legendLabel="Disabled" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input type="radio" [options]="[{ name: 'numbers', value: 'one', label: 'one'}, { name: 'numbers', value: 'two', label: 'two' }, { name: 'numbers', value: 'three', label: 'three' }]"
      [disabledOptions]="['two']" legendLabel="Specific options disabled" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input type="radio" [options]="[{ name: 'es', value: 'uno', label: 'uno'}, { name: 'es', value: 'dos', label: 'dos' }, { name: 'es', value: 'tres', label: 'tres' }]"
      legendLabel="Fieldset hidden" [isFieldset]="false" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input type="radio" [options]="[{ name: 'colors', value: 'blue', label: 'Blue'}, { name: 'colors', value: 'red', label: 'Red' }, { name: 'colors', value: 'silver', label: 'Silver' }]"
      legendLabel="Inline" [isInline]="true" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input type="radio" [options]="[{ name: 'bands', value: 'bonjovi', label: 'Bon Jovi'}, { name: 'bands', value: 'stones', label: 'Rolling Stones' }, { name: 'bands', value: 'isleybros', label: 'Isley Brothers' }]"
      legendLabel="Large" size="large" [isInline]="true" (selected)="propInput.selected($event)"></ag-choice-input>

    <ag-choice-input type="radio" [options]="[{ name: 'solo', value: 'stevie', label: 'Stevie Wonder'}, { name: 'solo', value: 'whitney', label: 'Whitney Houston' }, { name: 'solo', value: 'charlie', label: 'Charlie Wilson' }]"
      [checkedOptions]="['charlie']" legendLabel="Prechecked option" size="large" [isInline]="true" (selected)="propInput.selected($event)"></ag-choice-input>
    <ag-choice-input type="radio" [options]="[{ name: 'solo', value: 'stevie', label: 'Stevie Wonder'}, { name: 'solo', value: 'whitney', label: 'Whitney Houston' }, { name: 'solo', value: 'charlie', label: 'Charlie Wilson' }]"
      [isSkinned]="false" [isInline]="true" legendLabel="Radio unskinned (fieldset and legend unstyled)" (selected)="propInput.selected($event)"></ag-choice-input>
  </div>`,
});
