export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/*
import { app } from '@storybook/vue3';

app.use(MyPlugin);
app.component('my-component', MyComponent);
app.mixin({
  // My mixin
});
*/
require('!style-loader!css-loader!../src/css/common.min.css')
