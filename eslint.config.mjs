import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'public',
    'build',
    'dist',
    'node_modules',
    'coverage',
    'src/assets/**',
  ],
  extends: [
    'next/core-web-vitals',
  ],
  stylistic: {
    indent: 2,
    quotes: 'single',
    overrides: {
      'antfu/top-level-function': 'off',
      'style/arrow-parens': 'off',
      'curly': 'off',
    },
  },
  jsonc: true,
  rules: {
    'node/prefer-global/buffer': 'off',
    'node/prefer-global/process': 'off',
    'no-console': 'off',
  },
})
