module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },

  rules: {
    quotes: ["error", "double"],
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "no-extra-semi": "error",
    "no-cond-assign": ["error", "always"],
    "arrow-parens": ["warn", "always"],
  },
};
