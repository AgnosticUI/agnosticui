module.exports = {
  "plugins": ['@babel/plugin-proposal-export-default-from'],
  "presets": [
    [
      '@babel/preset-env',
    ],
    ['@babel/preset-react']
  ],
  "env": {
    "es": {
      "presets": [
        [
          '@babel/preset-env',
          {
            "modules": false,
          },
        ],
        ['@babel/preset-react']
      ],
    },
  },
};
