import React from 'react'
import Style from './Button.module.css'

export const Button = ({style,children,href}) => {
  return (
    <a href={href} className={Style.baptismButton} style={style}>{children}</a>
  )
}
