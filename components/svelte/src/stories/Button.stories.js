import Button from './Button.svelte';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    mode: { control: 'text' },
    isBordered: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isRaised: { control: 'boolean' },
    isRounded: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: Button,
  props: args,
  on: {
    click: onClick,
  },
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  mode: 'primary',
};

export const PrimaryBordered = Template.bind({});
PrimaryBordered.args = {
  label: 'Primary Bordered',
  mode: 'primary',
  isBordered: true,
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
