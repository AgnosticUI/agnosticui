module.exports = {
  env: {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true,
    'vue/setup-compiler-macros': true
  },
  extends: ["plugin:vue/vue3-strongly-recommended", "eslint:recommended", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'vue/no-unused-vars': 'error',
    "semi": [2, "always"]
  }
};