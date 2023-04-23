import { StoryFn } from '@storybook/react'
import { Button } from '../../index'

export default {
  title: 'Button',
  component: Button,
}

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const ADefault = Template.bind({})
ADefault.args = {
  children: 'Default Button',
}
ADefault.storyName = '默认按钮样式'

export const BButtonWithSize = () => (
  <>
    <Button size='lg'> large button </Button>
    <Button size='sm'> small button </Button>
  </>
)
BButtonWithSize.storyName = '不同尺寸的按钮'

export const CButtonWithType = () => (
  <>
    <Button btnType='primary'> primary button </Button>
    <Button btnType='danger'> danger button </Button>
    <Button btnType='link' href='https://google.com'>
      link button
    </Button>
  </>
)

CButtonWithType.storyName = '不同类型的按钮'
