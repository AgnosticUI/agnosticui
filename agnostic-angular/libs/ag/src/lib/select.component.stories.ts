import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { AgModule } from 'agnostic-angular';
import { action } from '@storybook/addon-actions';

const actionsData = {
  changed: action('changed'),
};

export default {
  title: 'AG—Angular (Beta)/Select',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      imports: [AgModule],
    }),
  ],
} as Meta;

export const Default = () => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<ag-select
    uniqueId="sel1"
    name="select1"
    (changed)="propInput.changed($event)"
    labelCopy="Select the best tennis player of all time"
    [options]="[
      { value: 'andre', label: 'Andre Agassi' },
      { value: 'serena', label: 'Serena Williams' },
      { value: 'mac', label: 'John McEnroe' },
      { value: 'borg', label: 'Bjorn Borg' },
      { value: 'althea', label: 'Althea Gibson' },
      { value: 'roger', label: 'Roger Federer' },
    ]"
  ></ag-select>`,
});

export const FirstOptionLabel = () => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<p class="mbe24">You can pass in <code>defaultOptionLabel</code> to specify the first option's text copy (e.g. as we've done here with: &ldquo;Select your favorite tennis player&rdquo;)</p>
  <ag-select
    uniqueId="sel2"
    name="select2"
    (changed)="propInput.changed($event)"
    defaultOptionLabel="Select your favorite tennis player"
    labelCopy="Select the best tennis player of all time"
    [options]="[
      { value: 'andre', label: 'Andre Agassi' },
      { value: 'serena', label: 'Serena Williams' },
      { value: 'mac', label: 'John McEnroe' },
      { value: 'borg', label: 'Bjorn Borg' },
      { value: 'althea', label: 'Althea Gibson' },
      { value: 'roger', label: 'Roger Federer' },
    ]"
  ></ag-select>`,
});

export const Disabled = () => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<p class="mbe24">You can pass in <code>defaultOptionLabel</code> to specify the first option's text copy (e.g. as we've done here with: &ldquo;Select your favorite tennis player&rdquo;)</p>
  <ag-select
    uniqueId="sel3"
    name="select3"
    isDisabled="true"
    labelCopy="Select the best tennis player of all time"
    [options]="[
      { value: 'andre', label: 'Andre Agassi' },
    ]"
  ></ag-select>`,
});

export const Small = () => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<ag-select
    uniqueId="sel4"
    name="select4"
    size="small"
    (changed)="propInput.changed($event)"
    labelCopy="Select the best tennis player of all time"
    [options]="[
      { value: 'andre', label: 'Andre Agassi' },
      { value: 'serena', label: 'Serena Williams' },
      { value: 'mac', label: 'John McEnroe' },
      { value: 'borg', label: 'Bjorn Borg' },
      { value: 'althea', label: 'Althea Gibson' },
      { value: 'roger', label: 'Roger Federer' },
    ]"
  ></ag-select>`,
});

export const Large = () => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<ag-select
    uniqueId="sel5"
    name="select5"
    size="large"
    (changed)="propInput.changed($event)"
    labelCopy="Select the best tennis player of all time"
    [options]="[
      { value: 'andre', label: 'Andre Agassi' },
      { value: 'serena', label: 'Serena Williams' },
      { value: 'mac', label: 'John McEnroe' },
      { value: 'borg', label: 'Bjorn Borg' },
      { value: 'althea', label: 'Althea Gibson' },
      { value: 'roger', label: 'Roger Federer' },
    ]"
  ></ag-select>`,
});

export const Multi = () => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<ag-select
    uniqueId="sel6"
    name="select6"
    isMultiple="true"
    multipleSize="4"
    (changed)="propInput.changed($event)"
    labelCopy="Select the best tennis player of all time"
    [options]="[
      { value: 'andre', label: 'Andre Agassi' },
      { value: 'serena', label: 'Serena Williams' },
      { value: 'mac', label: 'John McEnroe' },
      { value: 'borg', label: 'Bjorn Borg' },
      { value: 'althea', label: 'Althea Gibson' },
      { value: 'roger', label: 'Roger Federer' },
    ]"
  ></ag-select>`,
});
