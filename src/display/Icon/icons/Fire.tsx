import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const Fire = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 19 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M5.7 9.13902C9.975 7.75618 10.6537 3.74744 10.1112 0.1527C10.1112 0.1527 10.1112 -0.054834 10.2473 0.0139855C14.3862 2.08825 19 6.44323 19 13.1488C19 18.1253 15.1324 22.619 9.5 22.619C3.39256 22.619 0 18.2641 0 13.08C0 9.96916 2.03617 6.8583 4.41117 5.47653C4.41117 5.47653 4.61489 5.47653 4.61489 5.61525C4.61489 6.30667 4.88617 8.03469 5.63244 9.07128L5.7 9.13902Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}
