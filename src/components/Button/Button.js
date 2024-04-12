import React from 'react'
import Style from './Button.module.css'

export const Button = ({style, children, href, className}) => {
  return (
    // <a href={href} className={Style.baptismButton} style={style}>{children}</a>
    <a href={href} className={`${Style.baptismButton} ${className}`} style={style}>{children}</a>
  )
}
