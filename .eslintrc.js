module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.ts', '.tsx'],
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'import/extensions': [
      1,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  env: {
    browser: true,
    node: true,
  },
};
