module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:import/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/order': 2,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
  },
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
};
