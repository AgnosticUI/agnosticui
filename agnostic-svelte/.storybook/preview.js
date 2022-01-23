import '../src/app.css'
import yourTheme from './yourTheme';

export const parameters = {
  docs: {
    theme: yourTheme,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

require('!style-loader!css-loader!../src/lib/css/common.resets.min.css')
require('!style-loader!css-loader!../src/lib/css/common.properties.min.css')
require('!style-loader!css-loader!../src/lib/css/common.utilities.min.css')
