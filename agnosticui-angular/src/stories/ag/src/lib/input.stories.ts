import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { InputModule } from './input.module';
import { InputComponent } from './input.component';
import {v4 as uuid} from 'uuid';

const actionsData = {
  changed: action('changed'),
};

export default {
  title: 'AG—Angular/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [InputModule],
    }),
  ],
} as Meta;

export const All: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      uniqueId="aginput-${uuid()}"
      placeholder="Enter name…"
      label="Default input"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>
    <ag-input
      uniqueId="aginput-${uuid()}"
      label="Rounded input"
      placeholder="Rounded input…"
      [isRounded]="true"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>
    <ag-input
      uniqueId="aginput-${uuid()}"
      label="Underlined input"
      placeholder="Underlined input…"
      [isUnderlined]="true"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>
    <ag-input
      uniqueId="aginput-${uuid()}"
      label="Inline input"
      placeholder="Inline input…"
      [isInline]="true"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>
    <ag-input
      uniqueId="aginput-${uuid()}"
      label="Small input"
      placeholder="Small input…"
      size="small"
      [isRounded]="true"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>
    <ag-input
      uniqueId="aginput-${uuid()}"
      label="Large input"
      placeholder="Large input…"
      size="large"
      [isRounded]="true"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>
    <ag-input
      uniqueId="aginput-${uuid()}"
      label="Underlined with background"
      placeholder="Underlined with background…"
      size="large"
      [isUnderlinedWithBackground]="true"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>
    <ag-input
      uniqueId="aginput-${uuid()}"
      label="Textarea"
      placeholder="Textarea…"
      type="textarea"
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`
});
