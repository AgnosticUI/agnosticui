// See https://github.com/storybookjs/storybook/issues/10272#issuecomment-840935470
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import ButtonComponent from './button.component';
import ButtonGroupComponent from './buttongroup.component';

export default {
  title: 'AG/ButtonGroup',
  component: ButtonGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;


const Template: Story<ButtonGroupComponent> = (args: ButtonGroupComponent) => ({
  props: {
    propInput: {
      css: args.css || undefined,
      ariaLabel: args.ariaLabel || undefined,
    }
  },
  template: `<ag-button-group [css]="propInput.css" [ariaLabel]="propInput.ariaLabel">
    <ag-button>Button 1</ag-button>
    <ag-button>Button 2</ag-button>
    <ag-button>Button 3</ag-button>
  </ag-button-group>`,
});

export const Triplets = Template.bind({});
export const CssAndAria = Template.bind({});
CssAndAria.args = {
  css: 'foo bar',
  ariaLabel: 'this is a good aria label that describes the button group',
};