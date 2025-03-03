import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'unicorn/error-message': 'off',
    'no-console': 'off',
    'node/prefer-global/process': 'off',
    'node/prefer-global/buffer': 'off',
  },
})
