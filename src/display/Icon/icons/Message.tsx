import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Message = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M10 0C4.486 0 0 4.038 0 9C0 14.259 5.04 18.508 11 17.953V20C11.02 19.993 11 21 12 20.451L12.54 20.105C13.672 19.379 19.347 15.477 19.943 9.955C19.98 9.641 20 9.322 20 9C20 4.038 15.514 0 10 0ZM6.5 10H5.5C5.224 10 5 9.776 5 9.5V8.5C5 8.224 5.224 8 5.5 8H6.5C6.776 8 7 8.224 7 8.5V9.5C7 9.776 6.776 10 6.5 10ZM10.5 10H9.5C9.224 10 9 9.776 9 9.5V8.5C9 8.224 9.224 8 9.5 8H10.5C10.776 8 11 8.224 11 8.5V9.5C11 9.776 10.776 10 10.5 10ZM14.5 10H13.5C13.224 10 13 9.776 13 9.5V8.5C13 8.224 13.224 8 13.5 8H14.5C14.776 8 15 8.224 15 8.5V9.5C15 9.776 14.776 10 14.5 10Z'
          fill='white'
        />
      </svg>
    </Icon>
  )
}
