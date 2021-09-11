// See https://github.com/storybookjs/storybook/issues/10272#issuecomment-840935470
import { Story, Meta } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import ButtonComponent from './button.component';
import ButtonGroupComponent from './buttongroup.component';
import { ButtonModule } from './button.module';
import { ButtonGroupModule } from './buttongroup.module';

export default {
  title: 'AG—Angular/ButtonGroup',
  component: ButtonGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule, ButtonGroupModule],
    }),
  ],
} as Meta;

const actions = {
  onClicked: action('onClicked')
}

const Template: Story<ButtonGroupComponent> = (args: ButtonGroupComponent) => ({
  props: {
    propInput: {
      css: args.css || undefined,
      ariaLabel: args.ariaLabel || undefined,
      onClicked: actions.onClicked,
    }
  },
  template: `<ag-button-group [css]="propInput.css" [ariaLabel]="propInput.ariaLabel">
    <ag-button (onClick)="propInput.onClicked($event)">Button 1</ag-button>
    <ag-button (onClick)="propInput.onClicked($event)">Button 2</ag-button>
    <ag-button (onClick)="propInput.onClicked($event)">Button 3</ag-button>
  </ag-button-group>`,
});

export const Triplets = Template.bind({});
export const CssAndAria = Template.bind({});
CssAndAria.args = {
  css: 'foo bar',
  ariaLabel: 'this is a good aria label that describes the button group',
};
