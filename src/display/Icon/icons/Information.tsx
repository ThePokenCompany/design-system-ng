import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const Alert = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2ZM10 4C9.4 4 9 4.5 9 5C9 5.6 9.5 6 10 6C10.6 6 11 5.5 11 5C11 4.4 10.6 4 10 4ZM10 7.02539C9.5 7.02539 9 7.35 9 8V15C9 16.3 11 16.3 11 15V8C11 7.35 10.5 7.02539 10 7.02539Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}
