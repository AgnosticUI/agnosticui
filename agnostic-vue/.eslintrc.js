module.exports = {
  env: {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: [
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'vue/no-unused-vars': 'error',
    // indentation: 2,
    "semi": [2, "always"],
    // 'at-rule-no-unknown': [
    //     true,
    //     {
    //         ignoreAtRules: [
    //             'tailwind',
    //             'apply',
    //             'variants',
    //             'responsive',
    //             'screen'
    //         ]
    //     }
    // ],
    // 'declaration-block-trailing-semicolon': null,
    // 'no-descending-specificity': null
}
};
