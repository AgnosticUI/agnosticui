import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // blue primary
  colorPrimary: '#077acb',
  colorSecondary: '#aaaaaa',

  // UI
  appBg: 'white',
  appContentBg: '#ffffff',
  appBorderColor: '#d8d8d8',
  appBorderRadius: 3,

  // Typography
  fontBase: '"Open Sans", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#333333',
  barSelectedColor: '#d8d8d8',
  barBg: 'transparent',

  // Form colors
  inputBg: 'white',
  inputBorder: '#d8d8d8',
  inputTextColor: '#333333',
  inputBorderRadius: 3,

  brandTitle: 'AgnosticUI',
  brandUrl: 'https://agnosticui.com',
  brandImage: 'https://placehold.it/350x150',
});
