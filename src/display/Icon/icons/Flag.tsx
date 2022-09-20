import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Flag = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0 0V1V11V18H2V11H9.38281L10.3828 13H18V2H11.6172L10.6172 0H0ZM2 2H9.38281L10.3828 4H11H16V11H11.6172L10.6172 9H2V2Z'
          fill='white'
        />
      </svg>
    </Icon>
  )
}
