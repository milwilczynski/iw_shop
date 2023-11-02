module.exports = {
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-empty-pattern': 'off',
    'react/function-component-definition': 'off',
  },
};
