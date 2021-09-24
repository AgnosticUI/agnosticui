module.exports = {
  plugins: ['@babel/plugin-proposal-export-default-from'],
  presets: [['@babel/preset-env'], ['@babel/preset-react']],
  env: {
    module: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
        ['@babel/preset-react'],
      ],
    },
    browser: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: 'last 2 versions',
            },
            modules: false,
          },
        ],
      ],
    },
  },
};
