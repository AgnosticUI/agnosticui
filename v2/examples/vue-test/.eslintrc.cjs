module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // Vue 3 supports v-model arguments, so this should be off
    'vue/no-v-model-argument': 'off',

    // Allow any component name style
    'vue/multi-word-component-names': 'off',

    // TypeScript handles this
    '@typescript-eslint/no-explicit-any': 'off',

    // Allow unused vars with underscore prefix
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
