import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const Arrowup = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 13 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6.03145 0C5.7996 0 5.56795 0.0900855 5.39081 0.267227L0.265712 5.39232C-0.0885707 5.7457 -0.0885708 6.31931 0.265712 6.6736L0.34358 6.75147C0.696957 7.10575 1.27057 7.10575 1.62485 6.75147L5.12535 3.25097V15.0939C5.12535 15.5941 5.53128 16 6.03145 16C6.53161 16 6.93754 15.5941 6.93754 15.0939V3.25097L10.438 6.75147C10.7914 7.10575 11.365 7.10575 11.7193 6.75147L11.7972 6.6736C12.1515 6.32022 12.1515 5.74661 11.7972 5.39232L6.67208 0.267227C6.49539 0.0900855 6.26329 0 6.03145 0Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}
