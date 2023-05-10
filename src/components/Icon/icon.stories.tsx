import type { Meta, StoryObj } from '@storybook/react'
import Icon from './index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: '通用/Icon',
  component: Icon,
  argTypes: {
    icon: {
      type: { name: 'string', required: true },
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// @ts-expect-error next-line
export const Default: Story = {
  // @ts-expect-error next-line
  render: props => <Icon icon='hand' {...props}/>,
}

// @ts-expect-error next-line
export const Icons: Story = {
  render: (props) => {
    return (
      <>
        <Icon icon='user'/>
        <Icon icon='house'/>
        <Icon icon='hand'/>
      </>
    )
  },
}

// @ts-expect-error next-line
export const IconStyle: Story = {
  render: (props) => {
    return (
      <>
        <Icon icon='hand' iconStyle='solid'/>
        <Icon icon='hand' iconStyle='regular'/>
      </>
    )
  },
}

// @ts-expect-error next-line
export const IconTheme: Story = {
  render: (props) => {
    return (
      <>
        <Icon icon='hand' theme='info'/>
        <Icon icon='hand' theme='warning'/>
        <Icon icon='hand' theme='primary'/>
        <Icon icon='hand' theme='secondary'/>
        <Icon icon='hand' theme='success'/>
        <Icon icon='hand' theme='danger'/>
        <Icon icon='hand' theme='dark'/>
        <Icon icon='hand' theme='light'/>
      </>
    )
  },
}

// @ts-expect-error next-line
export const IconSize: Story = {
  render: (props) => {
    return (
      <>
        <Icon icon='hand' size='1x'/>
        <Icon icon='hand' size='2x'/>
        <Icon icon='hand' size='3x'/>
      </>
    )
  },
}
