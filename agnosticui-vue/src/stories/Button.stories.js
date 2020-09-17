import AgnosticButton from './Button.vue';
import ButtonsDisabled from './ButtonsDisabled.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: AgnosticButton,
  argTypes: {
    label: { control: 'text' },
    mode: { control: 'text' },
    isBordered: { control: 'boolean' },
    isBlock: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isRaised: { control: 'boolean' },
    isRounded: { control: 'boolean' },
    isSkinned: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'large'] },
    },
  },
};

// TODO -- see if I can get this working
// export const ButtonsDisabledTest = (args) => ({
//   title: 'Buttons Disabled',
//   components: { ButtonsDisabled },
//   template: `<buttons-disabled />`,
// });

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AgnosticButton },
  template: '<agnostic-button @click="onClick" v-bind="$props" />',
  methods: {
    onClick: action('onClick'),
  },
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  mode: 'primary',
};

export const PrimaryBordered = Template.bind({});
PrimaryBordered.args = {
  label: 'Primary Bordered',
  mode: 'primary',
  isBordered: true,
};

export const PrimaryBlock = Template.bind({});
PrimaryBlock.args = {
  mode: 'primary',
  label: 'Block (aka Stacked)',
  isBlock: true,
};

export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = {
  label: 'Primary Rounded',
  mode: 'primary',
  isRounded: true,
};

export const PrimaryRoundedRaised = Template.bind({});
PrimaryRoundedRaised.args = {
  label: 'Primary Rounded',
  mode: 'primary',
  isRounded: true,
  isRaised: true,
};

export const PrimaryBorderedRounded = Template.bind({});
PrimaryBorderedRounded.args = {
  label: 'Primary Borded Rounded',
  mode: 'primary',
  isBordered: true,
  isRounded: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  mode: 'secondary',
};

export const SecondaryBordered = Template.bind({});
SecondaryBordered.args = {
  label: 'Secondary Bordered',
  mode: 'secondary',
  isBordered: true,
};

export const SecondaryRounded = Template.bind({});
SecondaryRounded.args = {
  label: 'Secondary Rounded',
  mode: 'secondary',
  isRounded: true,
};

export const SecondaryRoundedRaised = Template.bind({});
SecondaryRoundedRaised.args = {
  label: 'Secondary Rounded',
  mode: 'secondary',
  isRounded: true,
  isRaised: true,
};

export const SecondaryBorderedRounded = Template.bind({});
SecondaryBorderedRounded.args = {
  label: 'Secondary Borded Rounded',
  mode: 'secondary',
  isBordered: true,
  isRounded: true,
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};

export const DefaultRaised = Template.bind({});
DefaultRaised.args = {
  label: 'Default Raised',
  isRaised: true,
};

export const DefaultBordered = Template.bind({});
DefaultBordered.args = {
  label: 'Default Bordered',
  isBordered: true,
};

export const DefaultRounded = Template.bind({});
DefaultRounded.args = {
  label: 'Default Rounded',
  isRounded: true,
};

export const DefaultBorderedRounded = Template.bind({});
DefaultBorderedRounded.args = {
  label: 'Default Bordered Rounded',
  isBordered: true,
  isRounded: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  isDisabled: true,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
};

export const ButtonBlank = Template.bind({});
ButtonBlank.args = {
  label: 'Cancel',
  isBlank: true,
};

export const ButtonBase = Template.bind({});
ButtonBase.args = {
  label: 'Button Base Only (no skin)',
  isSkinned: false,
};
