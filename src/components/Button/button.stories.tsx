import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: '通用/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'test',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    btnType: 'primary',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const Small: Story = {
  render: () => {
    return (
      <>
        <Button btnType='primary'> primary button </Button>
        <Button btnType='danger'> danger button </Button>
        <Button btnType='link' href='https://google.com'>
          link button
        </Button>
      </>
    )
  },
}
