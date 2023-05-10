import type { FC } from 'react'
import classNames from 'classnames'
import type {
  IconProp,
} from '@fortawesome/fontawesome-svg-core'
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { COMMON_CLS_PREFIX } from '../utils/constants'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  /** <a href="https://fontawesome.com/search?o=r&m=free&s=regular%2Csolid" target="_blank" >icon name</a>  */
  icon: IconProp
  /** icon style */
  iconStyle?: 'solid' | 'regular'
  /** 支持框架主题 根据主题显示不同的颜色 */
  theme?: ThemeProps
}

/**
 * 提供了一套常用的图标集合 基于 react-fontawesome。
 *
 * 支持 react-fontawesome的所有属性 可以在这里查询 https://github.com/FortAwesome/react-fontawesome#basic
 *
 * 支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标 https://fontawesome.com/icons?d=gallery&s=solid&m=free
 *
 * 支持 fontawesome 所有 free-regular-icons，可以在这里查看所有图标 https://fontawesome.com/icons?d=gallery&s=regular&m=free
 * ### 引用方法
 *
 * ~~~js
 * import { Icon } from 'muli-ui'
 * ~~~
 */
export const Icon: FC<IconProps> = ({ icon, iconStyle = 'solid', className, theme, ...restProps }) => {
  const classes = classNames(`${COMMON_CLS_PREFIX}-icon`, className, {
    [`${COMMON_CLS_PREFIX}-icon-${theme}`]: theme,
  })
  const iconPrefix = iconStyle === 'solid' ? 'fas' : 'far'
  const formatedIcon: any = Array.isArray(icon) ? icon : [iconPrefix, icon]
  return (
    <FontAwesomeIcon icon={formatedIcon} className={classes} {...restProps} />
  )
}

export default Icon
