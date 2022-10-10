import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const Bin = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M11 0V1H16V3H15V16C15 17.1 14.1 18 13 18H3C1.9 18 1 17.1 1 16V3H0V1H5V0H11ZM3 16H13V3H3V16ZM5 5H7V14H5V5ZM11 5H9V14H11V5Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}
