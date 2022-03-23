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

// tabButtons: JSX.Element[];
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

// export const Small = () => (
//   <Menu id="mymenu2" buttonLabel="Players" size="small">
//     <MenuItem>Andre Agassi</MenuItem>
//     <MenuItem>Serena Williams</MenuItem>
//     <MenuItem isDisabled>Rafael Nadal</MenuItem>
//     <MenuItem isSelected>Roger Federer</MenuItem>
//     <MenuItem>Althea Gibson</MenuItem>
//     <MenuItem>Bjorn Borg</MenuItem>
//   </Menu>
// );

// export const Large = () => (
//   <Menu id="mymenu3" buttonLabel="Players" size="large">
//     <MenuItem>Andre Agassi</MenuItem>
//     <MenuItem>Serena Williams</MenuItem>
//     <MenuItem isDisabled>Rafael Nadal</MenuItem>
//     <MenuItem isSelected>Roger Federer</MenuItem>
//     <MenuItem>Althea Gibson</MenuItem>
//     <MenuItem>Bjorn Borg</MenuItem>
//   </Menu>
// );

// export const Rounded = () => (
//   <Menu isRounded id="mymenu4" buttonLabel="Players">
//     <MenuItem>Andre Agassi</MenuItem>
//     <MenuItem>Serena Williams</MenuItem>
//     <MenuItem isDisabled>Rafael Nadal</MenuItem>
//     <MenuItem>Roger Federer</MenuItem>
//     <MenuItem>Althea Gibson</MenuItem>
//     <MenuItem isSelected>Bjorn Borg</MenuItem>
//   </Menu>
// );

// export const Bordered = () => (
//   <Menu isBordered id="mymenu5" buttonLabel="Players">
//     <MenuItem>Andre Agassi</MenuItem>
//     <MenuItem>Serena Williams</MenuItem>
//     <MenuItem isDisabled>Rafael Nadal</MenuItem>
//     <MenuItem>Roger Federer</MenuItem>
//     <MenuItem>Althea Gibson</MenuItem>
//     <MenuItem isSelected>Bjorn Borg</MenuItem>
//   </Menu>
// );
