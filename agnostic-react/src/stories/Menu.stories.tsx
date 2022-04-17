// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import { Menu, MenuItem } from '../Menu';

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
  <Menu
    id="mymenu1"
    buttonLabel="Players"
    menuItems={[
      <MenuItem>Andre Agassi</MenuItem>,
      <MenuItem>Serena Williams</MenuItem>,
      <MenuItem isDisabled>Rafael Nadal</MenuItem>,
      <MenuItem>Roger Federer</MenuItem>,
      <MenuItem>Althea Gibson</MenuItem>,
      <MenuItem>Bjorn Borg</MenuItem>,
    ]}
  />
);

export const Kebab = () => (
  <Menu
    id="kebab1"
    type="kebab"
    menuItems={[
      <MenuItem>Andre Agassi</MenuItem>,
      <MenuItem>Serena Williams</MenuItem>,
      <MenuItem isDisabled>Rafael Nadal</MenuItem>,
      <MenuItem>Roger Federer</MenuItem>,
      <MenuItem>Althea Gibson</MenuItem>,
      <MenuItem>Bjorn Borg</MenuItem>,
    ]}
  />
);

export const KebabRight = () => (
  <div className="flex justify-end">
    <Menu
      id="kebab2"
      type="kebab"
      isItemsRight
      menuItems={[
        <MenuItem>Andre Agassi</MenuItem>,
        <MenuItem>Serena Williams</MenuItem>,
        <MenuItem isDisabled>Rafael Nadal</MenuItem>,
        <MenuItem>Roger Federer</MenuItem>,
        <MenuItem>Althea Gibson</MenuItem>,
        <MenuItem>Bjorn Borg</MenuItem>,
      ]}
    />
  </div>
);

export const NoCloseOnClickOutside = () => (
  <Menu
    closeOnClickOutside={false}
    id="mymenu2"
    buttonLabel="Players"
    menuItems={[
      <MenuItem>Andre Agassi</MenuItem>,
      <MenuItem>Serena Williams</MenuItem>,
      <MenuItem isDisabled>Rafael Nadal</MenuItem>,
      <MenuItem>Roger Federer</MenuItem>,
      <MenuItem>Althea Gibson</MenuItem>,
      <MenuItem>Bjorn Borg</MenuItem>,
    ]}
  />
);

export const NoCloseOnSelect = () => (
  <Menu
    closeOnSelect={false}
    id="mymenu3"
    buttonLabel="Players"
    menuItems={[
      <MenuItem>Andre Agassi</MenuItem>,
      <MenuItem>Serena Williams</MenuItem>,
      <MenuItem isDisabled>Rafael Nadal</MenuItem>,
      <MenuItem>Roger Federer</MenuItem>,
      <MenuItem>Althea Gibson</MenuItem>,
      <MenuItem>Bjorn Borg</MenuItem>,
    ]}
  />
);

export const NoCloseOnSelectOrClickOutside = () => (
  <Menu
    closeOnSelect={false}
    closeOnClickOutside={false}
    id="mymenu4"
    buttonLabel="Players"
    menuItems={[
      <MenuItem>Andre Agassi</MenuItem>,
      <MenuItem>Serena Williams</MenuItem>,
      <MenuItem isDisabled>Rafael Nadal</MenuItem>,
      <MenuItem>Roger Federer</MenuItem>,
      <MenuItem>Althea Gibson</MenuItem>,
      <MenuItem>Bjorn Borg</MenuItem>,
    ]}
  />
);

export const Small = () => (
  <Menu
    id="mymenu5"
    size="small"
    buttonLabel="Players"
    menuItems={[
      <MenuItem>Andre Agassi</MenuItem>,
      <MenuItem>Serena Williams</MenuItem>,
      <MenuItem isDisabled>Rafael Nadal</MenuItem>,
      <MenuItem>Roger Federer</MenuItem>,
      <MenuItem>Althea Gibson</MenuItem>,
      <MenuItem>Bjorn Borg</MenuItem>,
    ]}
  />
);

export const Large = () => (
  <Menu
    id="mymenu6"
    size="large"
    buttonLabel="Players"
    menuItems={[
      <MenuItem>Andre Agassi</MenuItem>,
      <MenuItem>Serena Williams</MenuItem>,
      <MenuItem isDisabled>Rafael Nadal</MenuItem>,
      <MenuItem>Roger Federer</MenuItem>,
      <MenuItem>Althea Gibson</MenuItem>,
      <MenuItem>Bjorn Borg</MenuItem>,
    ]}
  />
);

export const Rounded = () => (
  <Menu
    isRounded
    id="mymenu7"
    size="large"
    buttonLabel="Players"
    menuItems={[
      <MenuItem>Andre Agassi</MenuItem>,
      <MenuItem>Serena Williams</MenuItem>,
      <MenuItem isDisabled>Rafael Nadal</MenuItem>,
      <MenuItem>Roger Federer</MenuItem>,
      <MenuItem>Althea Gibson</MenuItem>,
      <MenuItem>Bjorn Borg</MenuItem>,
    ]}
  />
);

export const Bordered = () => (
  <Menu
    isBordered
    id="mymenu8"
    size="large"
    buttonLabel="Players"
    menuItems={[
      <MenuItem>Andre Agassi</MenuItem>,
      <MenuItem>Serena Williams</MenuItem>,
      <MenuItem isDisabled>Rafael Nadal</MenuItem>,
      <MenuItem>Roger Federer</MenuItem>,
      <MenuItem>Althea Gibson</MenuItem>,
      <MenuItem>Bjorn Borg</MenuItem>,
    ]}
  />
);
