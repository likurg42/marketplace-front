module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:functional/recommended',
    'plugin:perfectionist/recommended-natural',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react', 'react-refresh', 'functional', 'perfectionist'],
  rules: {
    'functional/prefer-immutable-types': 0,
    'functional/functional-parameters': 0,
    'functional/immutable-data': 0,
    'functional/no-conditional-statements': 0,
    'functional/no-expression-statements': 0,
    'functional/no-throw-statement': 0,
    'functional/no-try-statement': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-console': 'warn',
    'no-underscore-dangle': [2, { allow: ['__filename', '__dirname'] }],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react-refresh/only-export-components': 'warn',
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: ['then'],
      },
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: [
          'type',
          'react',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown',
        ],
        'custom-groups': {
          value: {
            react: ['react', 'react-*'],
          },
          type: {
            react: 'react',
          },
        },
        'newlines-between': 'always',
        'internal-pattern': [
          '@store/**',
          '@features/**',
          '@components/**',
          '@routes/**',
          '@pages/**',
        ],
        'read-tsconfig': false,
      },
    ],
  },
  ignorePatterns: ['vite.config.ts'],
};
