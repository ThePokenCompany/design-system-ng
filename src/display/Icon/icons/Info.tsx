import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const Info = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M10 0C4.47696 0 0 4.47696 0 10C0 15.523 4.47696 20 10 20C15.523 20 20 15.523 20 10C20 4.47696 15.523 0 10 0ZM10 3.91304C10.7204 3.91304 11.3043 4.49696 11.3043 5.21739C11.3043 5.93783 10.7204 6.52174 10 6.52174C9.27956 6.52174 8.69565 5.93783 8.69565 5.21739C8.69565 4.49696 9.27956 3.91304 10 3.91304ZM11.7391 15.6522H10.8696H9.13043H8.26087V14.7826H9.13043V9.13043H8.26087V8.26087H9.13043H10.8696V9.13043V14.7826H11.7391V15.6522Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}
