module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: "@typescript-eslint/parser", // Use the TypeScript parser
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended" // Add TypeScript plugin
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: { version: "detect" }
  },
  plugins: ["react-refresh", "@typescript-eslint"], // Add TypeScript plugin
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: ["return", "if", "export", "try"] }
    ],
    "semi": ["warn", "never"],
    "quotes": ["warn", "single"],
    "object-curly-spacing": ["warn", "always"],
    "@typescript-eslint/no-unused-vars": ["warn"] // Example TypeScript-specific rule
  }
};
