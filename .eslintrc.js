// .eslintrc.js
module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
    ignorePatterns: ['.next/', 'node_modules/', 'generated/**'],

  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'prettier/prettier': 'off',
    // add more rules to disable here
  },
};