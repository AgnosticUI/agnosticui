import React from 'react';

import Button from './Button';

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
    isSkinned: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mode: 'primary',
  label: 'Button',
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
export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  mode: 'primary',
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

export const ButtonTypeSubmit = Template.bind({});
ButtonTypeSubmit.args = {
  label: 'Button Type Attribute Set To Submit',
  type: 'submit',
};

export const ButtonTypeReset = Template.bind({});
ButtonTypeReset.args = {
  label: 'Button Type Attribute Set To Reset',
  type: 'reset',
};

export const ButtonOverrides = Template.bind({});
ButtonOverrides.args = {
  label: 'Custom CSS Override',
  css: 'my-custom-css-klass',
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
