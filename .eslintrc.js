module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:perfectionist/recommended-natural',
    'prettier'
  ],
  ignorePatterns: ["node_modules", "dist"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  plugins: ['perfectionist'],
  rules: {
    'object-shorthand': 'error',
    'perfectionist/sort-objects': [
      'error',
      {
        order: 'asc',
        type: 'natural',
      }
    ],
    'perfectionist/sort-union-types': [
      'error',
      {
        'nullable-last': true,
        order: 'asc',
        type: 'natural',
      }
    ],
    'react/jsx-curly-brace-presence': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      }
    ],
    'tailwindcss/no-custom-classname': 'off',
  }
};
