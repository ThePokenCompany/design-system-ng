import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const Arrowright = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 16 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9.96798 0C9.73611 0 9.50399 0.090094 9.32729 0.267252L9.24941 0.345127C8.89509 0.699444 8.89509 1.27311 9.24941 1.62652L12.7502 5.12735H0.90618C0.405969 5.12735 0 5.53332 0 6.03353C0 6.53374 0.405969 6.93971 0.90618 6.93971H12.7502L9.24941 10.4405C8.89509 10.7949 8.89509 11.3685 9.24941 11.7219L9.32729 11.7998C9.6816 12.1541 10.2553 12.1541 10.6087 11.7998L15.7343 6.67423C16.0886 6.31991 16.0886 5.74624 15.7343 5.39283L10.6087 0.267252C10.4315 0.090094 10.1999 0 9.96798 0Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}
