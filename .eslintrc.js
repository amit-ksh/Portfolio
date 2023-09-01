module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],

  plugins: ['@typescript-eslint', 'prettier'],

  rules: {
    'vue/script-setup-no-uses-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'no-unused-expressions': 'off',
    'vue/no-v-html': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
  },
}
