module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'better-styled-components',
    'simple-import-sort',
    'sort-destructure-keys',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }], // Allow JSX in files with these extensions.
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/consistent-type-imports': ['error', { 'prefer': 'type-imports' }],
    'better-styled-components/sort-declarations-alphabetically': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/prefer-default-export': 0,
    'no-empty-pattern': 0,
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': ['error', {
      'ignoreCase': true,
      'reservedFirst': true,
    }],
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': ['error', {
      'groups': [[
        // React package.
        '^react$',
        // Packages.
        // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
        "^@?\\w",
        // Absolute imports and other imports such as Vue-style `@/foo`.
        // Anything not matched in another group.
        "^",
        // Aliased imports.
        "^@assets(/)?",
        "^@common(/)?",
        "^@global(/)?",
        // Relative imports.
        // Anything that starts with a dot.
        "^\\.",
        // Side effect imports.
        "^\\u0000",
      ]],
    }],
    'sort-destructure-keys/sort-destructure-keys': ['error', {
      'caseSensitive': false
    }],
    'sort-imports': 'off',
    "react/function-component-definition": 0,
  },
  ignorePatterns: ["/*.*"],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
