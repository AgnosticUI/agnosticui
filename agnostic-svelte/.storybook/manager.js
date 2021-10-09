import { addons } from '@storybook/addons';
// import { themes } from '@storybook/theming';
import yourTheme from './yourTheme';

addons.setConfig({
  theme: yourTheme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: false
});

// addons.setConfig({
//   theme: themes.dark,
// });

// addons.setConfig({
//   isFullscreen: false,
//   showNav: true,
//   showPanel: true,
//   panelPosition: 'bottom',
//   sidebarAnimations: true,
//   enableShortcuts: true,
//   isToolshown: true,
//   theme: undefined,
//   selectedPanel: undefined,
//   initialActive: 'sidebar',
//   showRoots: false,
// });