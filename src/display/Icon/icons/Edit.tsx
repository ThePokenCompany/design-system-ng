import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Edit = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16.0578 0.585162L17.4076 1.93554C18.1975 2.71575 18.1975 3.98611 17.4076 4.76632L4.17942 18H0V13.8188L10.3986 3.40595L13.2282 0.585162C14.0081 -0.195054 15.2779 -0.195054 16.0578 0.585162ZM1.99972 15.9994L3.40953 16.0595L13.2282 6.22673L11.8184 4.81634L1.99972 14.6391V15.9994Z'
          fill='white'
        />
      </svg>
    </Icon>
  )
}
