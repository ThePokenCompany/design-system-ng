import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Send = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M20 0L0 7.27148L5.4375 12.7109L16 4L7.28906 14.5625L12.7285 20L20 0Z' fill='white' />
      </svg>
    </Icon>
  )
}
