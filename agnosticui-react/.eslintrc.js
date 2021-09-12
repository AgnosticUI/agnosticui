module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['react', 'import'],
  overrides: [],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-eval': 'error',
    'import/first': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  settings: {
    react: {
      version: 'detect', // React version
    },
  },
};
