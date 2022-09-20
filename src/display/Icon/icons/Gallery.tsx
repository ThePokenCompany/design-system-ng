import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Gallery = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M15.95 6.05V0H20.9C21.5072 0 22 0.4928 22 1.1V6.05H15.95ZM8.25 0H13.75V6.05H8.25V0ZM6.05 6.05H0V1.1C0 0.4928 0.4928 0 1.1 0H6.05V6.05ZM0 13.75V8.25H6.05V13.75H0ZM6.05 15.95V22H1.1C0.4928 22 0 21.5072 0 20.9V15.95H6.05ZM13.75 22H8.25V15.95H13.75V22ZM15.95 15.95H22V20.9C22 21.5072 21.5072 22 20.9 22H15.95V15.95ZM22 8.25V13.75H15.95V8.25H22ZM13.75 8.25V13.75H8.25V8.25H13.75Z'
          fill='white'
        />
      </svg>
    </Icon>
  )
}
