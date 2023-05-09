import type { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react'
import classNames from 'classnames'
import { COMMON_CLS_PREFIX } from '../utils/constants'

export type ButtonSize = 'large' | 'medium' | 'small'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string
  /** 设置 Button 的禁用 */
  disabled?: boolean
  /** 设置 Button 的尺寸 */
  size?: ButtonSize
  /** 设置 Button 的类型 */
  btnType?: ButtonType
  href?: string
  children?: React.ReactNode
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = ({ btnType = 'default', className, disabled = false, size = 'medium', children, href, ...restProps }) => {
  const classes = classNames(`${COMMON_CLS_PREFIX}-btn`, className, {
    [`${COMMON_CLS_PREFIX}-btn-${btnType}`]: btnType,
    [`${COMMON_CLS_PREFIX}-btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  })
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  }
  else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

export default Button
