import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const UserVerified = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 18 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6.75 0C5.0918 0 3.75 1.3418 3.75 3C3.75 4.6582 5.0918 6 6.75 6C8.4082 6 9.75 4.6582 9.75 3C9.75 1.3418 8.4082 0 6.75 0ZM16.7109 2.10938L13.2656 5.67188L11.6953 4.125L10.6406 5.17969L13.2891 7.82812L13.8047 7.26562L17.7891 3.14062L16.7109 2.10938ZM6.75 7.5C2.17383 7.5 0.75 10.5 0.75 10.5V12H12.75V10.5C12.75 10.5 11.3262 7.5 6.75 7.5Z'
          fill='white'
        />
      </svg>
    </Icon>
  )
}
