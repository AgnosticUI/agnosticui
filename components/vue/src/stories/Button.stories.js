import AgnosticButton from './Button.vue';
/*
import MyButton from './Buttons.vue';

export default {
  title: 'Buttons',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

*/




export default {
  title: 'Button',
  component: AgnosticButton,
  argTypes: {
    label: { control: 'text' },
    mode: { control: 'text' },
    // isBordered: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    // isRaised: { control: 'boolean' },
    // isRounded: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'large'] },
    },
    onClick: { action: 'onClick' }
  },
};

const Template = (args, { argTypes }) => ({
  // const Template = ({ onClick, ...args }) => ({
  props: Object.keys(argTypes),
  // props: args,
  components: { AgnosticButton },
  template: '<agnostic-button @onClick="onClick" v-bind="$props" />',
  on: {
    click: args.onClick,
  }
});


export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  mode: 'primary',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  label: 'Primary Large',
  mode: 'primary',
  size: 'large',
};
