import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const SendNotif = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M22 2.5L2 9.77148L7.4375 15.2109L18 6.5L9.28906 17.0625L14.7285 22.5L22 2.5Z' fill={color} />
        <circle cx='14' cy='4.5' r='4' fill='#FF495C' />
      </svg>
    </Icon>
  )
}
