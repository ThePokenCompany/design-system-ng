import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const Star = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M10.8691 0.571999L13.3065 5.511L18.757 6.303C19.5518 6.4185 19.8698 7.39567 19.2942 7.95667L15.3498 11.8012L16.2811 17.2297C16.4168 18.0217 15.5863 18.6248 14.8749 18.2518L10.0001 15.6888L5.12526 18.2518C4.41393 18.6257 3.58343 18.0217 3.71909 17.2297L4.65043 11.8012L0.705095 7.95667C0.130345 7.39567 0.447512 6.41942 1.24226 6.30392L6.69276 5.51192L9.13018 0.572915C9.48676 -0.148501 10.5134 -0.148501 10.8691 0.571999Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}
