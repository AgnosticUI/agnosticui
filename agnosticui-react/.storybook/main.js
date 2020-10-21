module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource"
  ],
  webpackFinal: async (config, { configType }) => {
    // Stole this from: https://github.com/storybookjs/storybook/issues/6055#issuecomment-606870009
    // Suprisingly, storybook needs to hijack the webpack like this if we're not in a full blown
    // create react app type of setup. But this appears to work ¯\_(ツ)_/¯
    // https://github.com/storybookjs/presets/tree/master/packages/preset-scss is also worth keeping
    // an eye out for.

    // get index of css rule
    const ruleCssIndex = config.module.rules.findIndex(rule => rule.test.toString() === '/\\.css$/');

    // map over the 'use' array of the css rule and set the 'module' option to true
    config.module.rules[ruleCssIndex].use.map(item => {
      if (item.loader && item.loader.includes('/css-loader/')) {
        item.options.modules = {
          mode: 'local',
          localIdentName: configType === 'PRODUCTION' ? '[local]--[hash:base64:5]' : '[name]__[local]--[hash:base64:5]',
        };
      }
      return item;
    })

    // Return the altered config
    return config;
  }
}
