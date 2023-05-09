import type { Meta, StoryObj } from '@storybook/react'
import Button from './index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: '通用/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: props => (
      <Button {...props}>
        default button
      </Button>
  ),
}

export const ButtonType: Story = {
  render: (props) => {
    return (
      <>
        <Button btnType='primary' >
          primary button
        </Button>
        <Button btnType='danger' >
          danger button
        </Button>
        <Button btnType='link' href='https://google.com' >
          link button
        </Button>
      </>
    )
  },
}

export const ButtonSize: Story = {
  render: (props) => {
    return (
      <>
        <Button size='large'>
          large button
        </Button>
        <Button size='medium'>
          medium button
        </Button>
        <Button size='small'>
          small button
        </Button>
      </>
    )
  },
}

export const ButtonStatus: Story = {
  render: (props) => {
    return (
      <>
        <Button disabled>
          disabled button
        </Button>
      </>
    )
  },
}
