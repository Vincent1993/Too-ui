module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
  },
};
