
// import { themes } from '@storybook/theming';
import yourTheme from './yourTheme';

// or global addParameters
export const parameters = {
  docs: {
    theme: yourTheme,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
};
