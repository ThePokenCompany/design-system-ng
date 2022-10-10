import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const ChevronLeft = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M5.89504 12C7.10276 12 7.8234 11.0127 7.15365 10.2753L3.26876 6L7.15365 1.72467C7.8234 0.987333 7.10276 0 5.89504 0C5.38977 0 4.91723 0.185333 4.63642 0.494L0.305339 5.26067C-0.10178 5.70867 -0.10178 6.292 0.305339 6.74L4.63642 11.5067C4.91723 11.8147 5.38977 12 5.89504 12Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}
