import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const Minus = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M15.2344 11.4375H8.76562C8.68828 11.4375 8.625 11.5008 8.625 11.5781V12.4219C8.625 12.4992 8.68828 12.5625 8.76562 12.5625H15.2344C15.3117 12.5625 15.375 12.4992 15.375 12.4219V11.5781C15.375 11.5008 15.3117 11.4375 15.2344 11.4375Z'
          fill={color}
        />
        <path
          d='M12 4.125C7.65117 4.125 4.125 7.65117 4.125 12C4.125 16.3488 7.65117 19.875 12 19.875C16.3488 19.875 19.875 16.3488 19.875 12C19.875 7.65117 16.3488 4.125 12 4.125ZM12 18.5391C8.38945 18.5391 5.46094 15.6105 5.46094 12C5.46094 8.38945 8.38945 5.46094 12 5.46094C15.6105 5.46094 18.5391 8.38945 18.5391 12C18.5391 15.6105 15.6105 18.5391 12 18.5391Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}
