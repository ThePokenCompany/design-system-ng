import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Apple = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 25 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M25 21.277C24.3181 22.7866 23.9895 23.4613 23.1124 24.7936C21.8846 26.6554 20.1526 28.9801 18.0131 28.9948C16.1082 29.0121 15.6166 27.7561 13.0299 27.7783C10.4456 27.7906 9.90701 29.0195 7.99969 28.9998C5.85766 28.9801 4.21965 26.8868 2.99175 25.0276C-0.442407 19.8142 -0.805587 13.702 1.31667 10.4513C2.81881 8.14633 5.19307 6.7919 7.42404 6.7919C9.697 6.7919 11.125 8.03552 13.0027 8.03552C14.826 8.03552 15.9353 6.78943 18.564 6.78943C20.5504 6.78943 22.6504 7.86806 24.1526 9.7298C19.241 12.414 20.039 19.4054 25 21.277ZM16.5678 4.70852C17.5239 3.4846 18.2503 1.75831 17.9859 0C16.427 0.105893 14.6036 1.09833 13.5388 2.38381C12.5728 3.55602 11.7723 5.29462 12.0836 6.97659C13.7859 7.03077 15.5474 6.01863 16.5678 4.70852Z'
          fill='white'
        />
      </svg>
    </Icon>
  )
}