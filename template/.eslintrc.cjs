module.exports = {
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  root: true,
  rules: {
    'react-refresh/only-export-components': [
      {"allowConstantExport": true},
      `warn`,
    ],
  },
}
