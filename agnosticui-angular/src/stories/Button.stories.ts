// See https://github.com/storybookjs/storybook/issues/10272#issuecomment-840935470
import { Meta, Story } from '@storybook/angular/types-6-0';
import ButtonComponent from './button.component';

// TODO: setup actions and expose the onClick @Output

export default {
  title: 'Example/Button',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    propInput: {
      type: args.type || "button",
      size: args.size || "medium",
      mode: args.mode || undefined,
      isBordered: args.isBordered || false,
      isBlank: args.isBlank || false,
      // Literally look if false otherwise it's true ¯\_(ツ)_/¯
      isSkinned: args.isSkinned === false ? args.isSkinned : true,
      isRounded: args.isRounded || false,
    }
  },
  template: `<ag-button
    [type]="propInput.type"
    [size]="propInput.size"
    [mode]="propInput.mode"
    [isBordered]="propInput.isBordered"
    [isBlank]="propInput.isBlank"
    [isSkinned]="propInput.isSkinned"
    [isRounded]="propInput.isRounded"
  >Go</ag-button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  mode: 'primary',
  size: 'large',
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Bordered = Template.bind({});
Bordered.args = {
  isBordered: true,
};

export const NoSkin = Template.bind({});
NoSkin.args = {
  isSkinned: false,
};

export const Rounded = Template.bind({});
Rounded.args = {
  isRounded: true,
  mode: 'primary',
  size: 'large',
};

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  type: 'submit',
};

export const ResetButton = Template.bind({});
ResetButton.args = {
  type: 'reset',
};

export const BlankButton = Template.bind({});
BlankButton.args = {
  isBlank: true,
};
