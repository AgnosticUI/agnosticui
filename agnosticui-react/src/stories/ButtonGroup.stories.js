import React from 'react';
import Button, { ButtonGroup } from './Button';

export default {
  title: 'Button Groups',
  component: ButtonGroup,
};

const Template = (args) => (
  <ButtonGroup>
    <Button label="One"  {...args} />
    <Button label="Two" {...args} />
    <Button label="Three" {...args} />
  </ButtonGroup>
)

export const ButtonGroupPrimary = Template.bind({});
ButtonGroupPrimary.args = {
  mode: "primary"
};

export const ButtonGroupPrimaryBordered = Template.bind({});
ButtonGroupPrimaryBordered.args = {
  isBordered: true,
  mode: "primary"
};

export const ButtonGroupSecondary = Template.bind({});
ButtonGroupSecondary.args = {
  mode: "secondary"
}

export const ButtonGroupSecondaryBordered = Template.bind({});
ButtonGroupSecondaryBordered.args = {
  isBordered: true,
  mode: "secondary"
};

export const ButtonGroupDefault = Template.bind({});

export const ButtonGroupDefaultBordered = Template.bind({});
ButtonGroupDefaultBordered.args = {
  isBordered: true,
};
