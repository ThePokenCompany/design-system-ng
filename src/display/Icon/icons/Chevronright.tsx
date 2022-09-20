import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const ChevronRight = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1.51436 0C0.306516 0 -0.413284 0.987333 0.25653 1.72467L4.14182 6L0.25653 10.2753C-0.413284 11.0127 0.306516 12 1.51436 12C2.01968 12 2.49227 11.8147 2.7731 11.506L7.10463 6.73933C7.51179 6.29133 7.51179 5.708 7.10463 5.26L2.7731 0.493333C2.49227 0.185333 2.02059 0 1.51436 0Z'
          fill='white'
        />
      </svg>
    </Icon>
  )
}
