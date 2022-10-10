import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const Arrowleft = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 16 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6.03202 0C5.80015 0 5.56803 0.090094 5.39132 0.267252L0.265737 5.39283C-0.0885791 5.74715 -0.0885791 6.32082 0.265737 6.67423L5.39132 11.7998C5.74564 12.1541 6.31931 12.1541 6.67272 11.7998L6.75059 11.7219C7.10491 11.3676 7.10491 10.794 6.75059 10.4405L3.24976 6.93971H15.0938C15.594 6.93971 16 6.53374 16 6.03353C16 5.53332 15.594 5.12735 15.0938 5.12735H3.24976L6.75059 1.62652C7.10491 1.27221 7.10491 0.698538 6.75059 0.345127L6.67272 0.267252C6.49556 0.090094 6.26389 0 6.03202 0Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}
