module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'double'],
    'comma-dangle': ['error', 'never'],
  },
}
