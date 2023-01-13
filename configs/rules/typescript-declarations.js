'use strict';

const rule = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
  },
};

module.exports = { rule };
