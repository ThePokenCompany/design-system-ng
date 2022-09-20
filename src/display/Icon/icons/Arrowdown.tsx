import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Arrowdown = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 13 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6.03202 0C5.53181 0 5.12584 0.405969 5.12584 0.90618V12.7502L1.62501 9.24941C1.27069 8.89509 0.697023 8.89509 0.343612 9.24941L0.265737 9.32729C-0.0885791 9.6816 -0.0885791 10.2553 0.265737 10.6087L5.39132 15.7343C5.74564 16.0886 6.31931 16.0886 6.67272 15.7343L11.7983 10.6087C12.1526 10.2544 12.1526 9.6807 11.7983 9.32729L11.7204 9.24941C11.3661 8.89509 10.7924 8.89509 10.439 9.24941L6.9382 12.7502V0.90618C6.9382 0.405969 6.53223 0 6.03202 0Z'
          fill='white'
        />
      </svg>
    </Icon>
  )
}
