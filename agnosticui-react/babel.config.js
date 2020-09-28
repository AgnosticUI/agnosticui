module.exports = {
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
      "plugins": ['@babel/plugin-proposal-export-default-from'],
    },
    "cjs": {
      "presets": [
        [
          '@babel/preset-env',
        ],
        ['@babel/preset-react']
      ],
      "plugins": ['@babel/plugin-proposal-export-default-from'],
    }
  },
};
