import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  variant?: 'outlined' | 'filled'
}

export const Bookmark = ({ className, style, variant = 'filled' }: Props) => {
  return (
    <Icon className={className} style={style}>
      {variant === 'filled' && (
        <svg width='100%' height='100%' viewBox='0 0 14 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M12 0H2C0.9 0 0 0.9 0 2V18L7 15L14 18V2C14 0.9 13.1 0 12 0Z' fill='white' />
        </svg>
      )}
      {variant === 'outlined' && (
        <svg width='100%' height='100%' viewBox='0 0 14 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M2 0H12C13.1 0 14 0.9 14 2V18L7 15L0 18V2C0 0.9 0.9 0 2 0ZM7 12.82L12 15V2H2V15L7 12.82Z'
            fill='white'
          />
        </svg>
      )}
    </Icon>
  )
}
