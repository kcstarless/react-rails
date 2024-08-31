import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jest from 'eslint-plugin-jest';

export default {
  root: true,
  ignorePatterns: ['dist', '.eslintrc.js'], // Adjusted to match the new filename
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          ecmaFeatures: { jsx: true },
        },
      },
      settings: { react: { version: '18.2' } },
      plugins: {
        react,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        jest, // Added Jest plugin
      },
      rules: {
        ...js.configs.recommended.rules,
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
        ...reactHooks.configs.recommended.rules,
        ...jest.configs.recommended.rules, // Added Jest rules
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    },
    {
      files: ['**/__tests__/**/*.{js,jsx}'], // Specific config for test files
      env: {
        jest: true, // Set Jest environment for test files
      },
      rules: {
        // Override or add specific rules for test files here
      },
    },
  ],
};
