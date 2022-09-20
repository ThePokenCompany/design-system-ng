import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  orientation?: 'horizontal' | 'vertical'
}

export const Dots = ({ className, style, orientation = 'horizontal' }: Props) => {
  return (
    <Icon className={className} style={style}>
      {orientation === 'horizontal' && (
        <svg width='100%' height='100%' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2ZM6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2ZM14 4C12.9 4 12 3.1 12 2C12 0.9 12.9 0 14 0C15.1 0 16 0.9 16 2C16 3.1 15.1 4 14 4Z'
            fill='white'
          />
        </svg>
      )}
      {orientation === 'vertical' && (
        <svg width='100%' height='100%' viewBox='0 0 4 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z'
            fill='white'
          />
        </svg>
      )}
    </Icon>
  )
}
