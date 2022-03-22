// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import { Menu, MenuTrigger, MenuItems, MenuItem } from '../Menu';

const actionsData = {
  click: action('click'),
};

export default {
  title: 'AG—React (Beta)/Menu',
  component: Menu,
  on: {
    ...actionsData,
  },
} as Meta;

export const Default = () => (
  <Menu>
    <MenuTrigger menuTitle="My Menu" />
    <MenuItems menuId="players1">
      <MenuItem>Andre Agassi</MenuItem>
      <MenuItem>Serena Williams</MenuItem>
      <MenuItem isDisabled>Rafael Nadal</MenuItem>
      <MenuItem isSelected>Roger Federer</MenuItem>
      <MenuItem>Althea Gibson</MenuItem>
      <MenuItem isSelected>Bjorn Borg</MenuItem>
    </MenuItems>
  </Menu>
);
