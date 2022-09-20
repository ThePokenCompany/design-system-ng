import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const ChevronDown = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 1.51496C12 0.307238 11.0127 -0.413398 10.2753 0.256348L6 4.14215L1.72467 0.257257C0.987333 -0.412489 0 0.307238 0 1.51496C0 2.02023 0.185333 2.49277 0.494 2.77358L5.26067 7.10466C5.70867 7.51178 6.292 7.51178 6.74 7.10466L11.5067 2.77358C11.8147 2.49277 12 2.02113 12 1.51496Z'
          fill='white'
        />
      </svg>
    </Icon>
  )
}
