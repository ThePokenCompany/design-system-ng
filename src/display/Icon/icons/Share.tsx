import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Share = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M12.97 14.81C13.5 14.31 14.21 14 15 14C16.66 14 18 15.34 18 17C18 18.66 16.66 20 15 20C13.34 20 12 18.66 12 17C12 16.76 12.04 16.53 12.09 16.31L5.04 12.19C4.5 12.69 3.79 13 3 13C1.34 13 0 11.66 0 10C0 8.34 1.34 7 3 7C3.79 7 4.5 7.31 5.04 7.81L12.09 3.7C12.04 3.48 12 3.24 12 3C12 1.34 13.34 0 15 0C16.66 0 18 1.34 18 3C18 4.66 16.66 6 15 6C14.21 6 13.49 5.69 12.96 5.19L5.91 9.3C5.96 9.53 6 9.76 6 10C6 10.24 5.96 10.47 5.91 10.7L12.97 14.81ZM16 3C16 2.45 15.55 2 15 2C14.45 2 14 2.45 14 3C14 3.55 14.45 4 15 4C15.55 4 16 3.55 16 3ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM14 17C14 17.55 14.45 18 15 18C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16C14.45 16 14 16.45 14 17Z'
          fill='white'
        />
      </svg>
    </Icon>
  )
}
