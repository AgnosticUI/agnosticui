import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { SwitchModule } from './switch.module';
import { SwitchComponent } from './switch.component';

const actionsData = {
  selected: action('selected'),
};

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
  props: {
    propInput: {
      selected: actionsData.selected,
    }
  },
  template: `<div>
    <ag-switch label="Small" size="small" labelPosition="right" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Switch default" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Large" size="large" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Prechecked" size="large" [isChecked]="true" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Disabled" size="large" [disabled]="true"></ag-switch>
    <ag-switch label="Action" [isAction]="true" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Bordered" [isBordered]="true" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Bordered Action" [isAction]="true" [isBordered]="true" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Right Bordered Action" labelPosition="right" [isAction]="true" [isBordered]="true" (selected)="propInput.selected($event)"></ag-switch>
  </div>`
})

export const SwitchExample = Template.bind({})
