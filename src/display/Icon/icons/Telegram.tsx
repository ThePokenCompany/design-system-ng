import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const Telegram = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 24 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M22.0517 0.229592L0.78878 8.47146C-0.0668675 8.85525 -0.356277 9.6239 0.581933 10.041L6.03682 11.7835L19.2259 3.59024C19.946 3.07586 20.6833 3.21303 20.0489 3.77884L8.72124 14.0883L8.3654 18.4512C8.69499 19.1249 9.29847 19.128 9.68339 18.7932L12.8174 15.8125L18.1848 19.8525C19.4314 20.5943 20.1097 20.1156 20.3779 18.7559L23.8985 1.9995C24.264 0.32578 23.6407 -0.411655 22.0517 0.229592Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}
