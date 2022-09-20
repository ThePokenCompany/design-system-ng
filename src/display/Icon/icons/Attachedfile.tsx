import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const AttachedFile = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9.5 4V14.5C9.5 16.71 7.71 18.5 5.5 18.5C3.29 18.5 1.5 16.71 1.5 14.5V4C1.5 2.62 2.62 1.5 4 1.5C5.38 1.5 6.5 2.62 6.5 4V13.5C6.5 14.05 6.05 14.5 5.5 14.5C4.95 14.5 4.5 14.05 4.5 13.5V4H3V13.5C3 14.88 4.12 16 5.5 16C6.88 16 8 14.88 8 13.5V4C8 1.79 6.21 0 4 0C1.79 0 0 1.79 0 4V14.5C0 17.54 2.46 20 5.5 20C8.54 20 11 17.54 11 14.5V4H9.5Z'
          fill='white'
        />
      </svg>
    </Icon>
  )
}
