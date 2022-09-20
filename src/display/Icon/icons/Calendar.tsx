import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Calendar = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16 2H15V0H13V2H5V0H3V2H2C0.89 2 0 2.9 0 4V18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V7H16V18ZM3.5 11C3.5 9.62 4.62 8.5 6 8.5C7.38 8.5 8.5 9.62 8.5 11C8.5 12.38 7.38 13.5 6 13.5C4.62 13.5 3.5 12.38 3.5 11Z'
          fill='white'
        />
      </svg>
    </Icon>
  )
}
