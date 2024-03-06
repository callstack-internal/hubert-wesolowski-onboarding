module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:import/recommended'],
  plugins: ['simple-import-sort', '@tanstack/query'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/order': 2,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/stable-query-client': 'error',
  },
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
};
