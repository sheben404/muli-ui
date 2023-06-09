import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { COMMON_CLS_PREFIX } from '../utils/constants'
import type { ButtonProps } from './button'
import Button from './button'

const defaultProps = {
  onClick: vi.fn(),
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'large',
  className: 'custom_class',
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: vi.fn(),
}
describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass(`${COMMON_CLS_PREFIX}-btn ${COMMON_CLS_PREFIX}-btn-default`)
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass(`${COMMON_CLS_PREFIX}-btn-primary ${COMMON_CLS_PREFIX}-btn-large custom_class`)
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Button btnType='link' href='http://dummyurl'>
        Link
      </Button>,
    )
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass(`${COMMON_CLS_PREFIX}-btn ${COMMON_CLS_PREFIX}-btn-link`)
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
