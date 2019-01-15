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
  overrides: [
    {
      files: ['src/components/**/*.js'],
      excludedFiles: [
        '.eslintrc.js',
        'commitlint.config.js',
        'vue.config.js',
        'tsconfig.json',
        'index.js',
      ],
    },
  ],
};
