// See https://github.com/storybookjs/storybook/issues/10272#issuecomment-840935470
import { Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import ButtonComponent from './button.component';
import { ButtonModule } from './button.module';

export default {
  title: 'AG—Angular/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    })
  ]
};

const actions = {
  onClicked: action('onClicked')
}

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    propInput: {
      onClicked: actions.onClicked,
      type: args.type || "button",
      size: args.size || "medium",
      css: args.css || undefined,
      mode: args.mode || undefined,
      isBordered: args.isBordered || false,
      isBlock: args.isBlock || false,
      isBlank: args.isBlank || false,
      isRaised: args.isRaised|| false,
      isCircle: args.isCircle || false,
      // Literally look if false otherwise it's true ¯\_(ツ)_/¯
      isSkinned: args.isSkinned === false ? args.isSkinned : true,
      isRounded: args.isRounded || false,
      isDisabled: args.isDisabled || false,
    }
  },
  template: `<ag-button
    [mode]="propInput.mode"
    [isBlank]="propInput.isBlank"
    [type]="propInput.type"
    [size]="propInput.size"
    [css]="propInput.css"
    [isBordered]="propInput.isBordered"
    [isRaised]="propInput.isRaised"
    [isDisabled]="propInput.isDisabled"
    [isCircle]="propInput.isCircle"
    [isBlock]="propInput.isBlock"
    [isSkinned]="propInput.isSkinned"
    [isRounded]="propInput.isRounded"
    (handleClick)="propInput.onClicked($event)"
  >Go</ag-button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  mode: 'primary',
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

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  isDisabled: true,
};

export const RaisedButton = Template.bind({});
RaisedButton.args = {
  isRaised: true,
};

export const RaisedPrimaryButton = Template.bind({});
RaisedPrimaryButton.args = {
  isRaised: true,
  isRounded: true,
  mode: 'primary',
  size: 'large',
};

export const BlankButton = Template.bind({});
BlankButton.args = {
  isBlank: true,
};

export const BlockButton = Template.bind({});
BlockButton.args = {
  isBlock: true,
};

export const BlockPrimaryButton= Template.bind({});
BlockPrimaryButton.args = {
  isBlock: true,
  mode: 'primary',
};

export const BlockSecondaryButton= Template.bind({});
BlockSecondaryButton.args = {
  isBlock: true,
  mode: 'secondary',
};

export const CircleButton= Template.bind({});
CircleButton.args = {
  isCircle: true,
};

export const CssPropButton= Template.bind({});
CssPropButton.args = {
  css: 'foo bar baz',
};
