
import yourTheme from './yourTheme';

// or global addParameters
export const parameters = {
  docs: {
    theme: yourTheme,
  },
  actions: { argTypesRegex: "^on.*" },
};

require('!style-loader!css-loader!../src/css/common.min.css')
