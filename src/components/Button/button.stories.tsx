import type { Meta, StoryObj } from '@storybook/react'
import Button from './index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: '通用/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'defult button',
  },
}

export const ButtonType: Story = {
  render: ({ ...props }) => {
    return (
      <>
        <Button btnType='primary' {...props}>
          primary button
        </Button>
        <Button btnType='danger' {...props}>
          danger button
        </Button>
        <Button btnType='link' href='https://google.com' {...props}>
          link button
        </Button>
      </>
    )
  },
}

export const ButtonSize: Story = {
  render: ({ ...props }) => {
    return (
      <>
        <Button size='large' {...props}>
          large button
        </Button>
        <Button size='medium' {...props}>
          medium button
        </Button>
        <Button size='small' {...props}>
          small button
        </Button>
      </>
    )
  },
}

export const ButtonStatus: Story = {
  render: ({ ...props }) => {
    return (
      <>
        <Button disabled {...props}>
          large button
        </Button>
      </>
    )
  },
}
