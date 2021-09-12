const path = require('path');

module.exports = {
  stories: ["../src/stories/ag/**/*.stories.mdx", "../src/stories/ag/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          test: [/\.stories\.ts?$/],
          include: [path.resolve(__dirname, '../src/stories/ag/src/lib')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    }
  ],
};
