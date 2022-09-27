import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const ThumbUp = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6.3 0L5.75723 2.5185L3.85957 4.73766C3.62787 5.00809 3.5 5.35948 3.5 5.72348V12.5263C3.5 13.3405 4.1265 14 4.9 14H10.5219C11.0406 14 11.5102 13.6785 11.7209 13.1797L13.8223 8.20169C13.9392 7.92611 14 7.62735 14 7.32525V6.63158C14 5.82105 13.37 5.15789 12.6 5.15789H7.7C7.7 5.15789 8.4 3.41105 8.4 2.10979C8.4 0.0893652 6.3 0 6.3 0ZM0 5.15789V14H2.1V5.15789H0Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}
