/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      tsx: true,
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['/@', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
      // does not work with type definitions
      'no-unused-vars': 'off',
    },
  }],
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/no-absolute-path': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'Target', // 装饰器
        'state', // for vuex state
        'e', // for e.returnvalue
      ],
    }],
    'max-len': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'arrow-body-style': 'off',
  },
};

module.exports = eslintConfig;
