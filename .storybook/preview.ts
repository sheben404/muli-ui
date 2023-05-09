import type { Preview } from '@storybook/react'
import '../src/styles/index.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}

export default preview
