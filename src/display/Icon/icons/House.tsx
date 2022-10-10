import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  variant?: 'outlined' | 'filled'
  color?: string
}

export const House = ({ className, style, variant = 'filled', color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      {variant === 'filled' && (
        <svg width='100%' height='100%' viewBox='0 0 22 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M11 0C10.8678 1.69636e-05 10.7368 0.0262645 10.6148 0.0772233C10.4928 0.128182 10.382 0.20284 10.2891 0.296875L0.203125 9.09766C0.140134 9.14414 0.088937 9.20476 0.0536563 9.27464C0.0183756 9.34453 -3.00769e-06 9.42172 3.69191e-10 9.5C3.69192e-10 9.63261 0.0526784 9.75979 0.146447 9.85355C0.240215 9.94732 0.367392 10 0.5 10H3V18C3 18.552 3.448 19 4 19H8C8.552 19 9 18.552 9 18V12H13V18C13 18.552 13.448 19 14 19H18C18.552 19 19 18.552 19 18V10H21.5C21.6326 10 21.7598 9.94732 21.8536 9.85355C21.9473 9.75979 22 9.63261 22 9.5C22 9.42172 21.9816 9.34453 21.9463 9.27464C21.9111 9.20476 21.8599 9.14414 21.7969 9.09766L11.7168 0.302734C11.7149 0.300773 11.7129 0.29882 11.7109 0.296875C11.618 0.20284 11.5072 0.128182 11.3852 0.0772233C11.2632 0.0262645 11.1322 1.69636e-05 11 0Z'
            fill={color}
          />
        </svg>
      )}
      {variant === 'outlined' && (
        <svg width='100%' height='100%' viewBox='0 0 22 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M11 0L0 9.90039H3V18.9004H10V12.9004H12V18.9004H19V9.90039H22L11 0ZM11 2.69141L17 8.0918V8.90039V16.9004H14V10.9004H8V16.9004H5V8.0918L11 2.69141Z'
            fill={color}
          />
        </svg>
      )}
    </Icon>
  )
}
