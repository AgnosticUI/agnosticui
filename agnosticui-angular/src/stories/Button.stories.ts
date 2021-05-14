// See https://github.com/storybookjs/storybook/issues/10272#issuecomment-840935470
import { Meta, Story } from '@storybook/angular/types-6-0';
import ButtonComponent from './button.component';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    propInput: {
      size: args.size || "medium",
      primary: args.primary || false,
    }
  },
  template: `<ag-button [primary]="propInput.primary" [size]="propInput.size"> Hello World </ag-button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: "large",
};

export const Secondary = Template.bind({});
Secondary.args = {
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
