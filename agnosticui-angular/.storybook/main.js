module.exports = {
  stories: ["../src/stories/ag/**/*.stories.mdx", "../src/stories/ag/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
  ],
};
