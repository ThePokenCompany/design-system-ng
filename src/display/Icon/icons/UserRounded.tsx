import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const UserRounded = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM10 2.75C11.795 2.75 13.25 4.205 13.25 6C13.25 7.795 11.795 9.25 10 9.25C8.205 9.25 6.75 7.795 6.75 6C6.75 4.205 8.205 2.75 10 2.75ZM10 18C7.562 18 5.379 16.909 3.912 15.188C3.531 14.741 3.616 14.07 4.085 13.717C5.602 12.576 8.366 12 10 12C11.634 12 14.398 12.576 15.916 13.717C16.385 14.07 16.47 14.742 16.089 15.188C14.621 16.909 12.438 18 10 18Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}
