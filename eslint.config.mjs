import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import * as mdx from 'eslint-plugin-mdx'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
  ),
  {
    ...mdx.flat,
  },
  {
    files: ['**/*.mdx'],
    rules: {
      'react/jsx-no-undef': 'off',
    },
  },
]

export default eslintConfig
