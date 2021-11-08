import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { AgModule } from './ag.module';
import { SwitchComponent } from './switch.component';

const actionsData = {
  selected: action('selected'),
};

export default {
  title: 'AG—Angular (Beta)/Switch',
  component: SwitchComponent,
  decorators: [
    // Cannot get preview.js or global decorator solutions to work.
    // https://storybook.js.org/tutorials/intro-to-storybook/angular/en/composite-component/
    componentWrapperDecorator(
      (story) =>
        `<div style="font-family: var(--agnostic-font-family)">${story}</div>`
    ),
    moduleMetadata({
      imports: [AgModule],
    }),
  ],
} as Meta;

const Template: Story<SwitchComponent> = (args: SwitchComponent) => ({
  props: {
    propInput: {
      selected: actionsData.selected,
    },
  },
  template: `<div>
    <ag-switch label="Small" size="small" labelPosition="right" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Switch default" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Large" size="large" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Prechecked" size="large" [isChecked]="true" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Disabled" size="large" [isDisabled]="true"></ag-switch>
    <ag-switch label="Action" [isAction]="true" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Bordered" [isBordered]="true" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Bordered Action" [isAction]="true" [isBordered]="true" (selected)="propInput.selected($event)"></ag-switch>
    <ag-switch label="Right Bordered Action" labelPosition="right" [isAction]="true" [isBordered]="true" (selected)="propInput.selected($event)"></ag-switch>
  </div>`,
});

export const SwitchExample = Template.bind({});
