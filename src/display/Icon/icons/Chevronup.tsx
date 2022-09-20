import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const ChevronUp = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M11.5067 4.63642L6.74 0.305339C6.292 -0.10178 5.70867 -0.10178 5.26067 0.305339L0.494 4.63642C0.185333 4.91723 0 5.38977 0 5.89504C0 7.10276 0.987333 7.82249 1.72467 7.15274L6 3.26785L10.2753 7.15365C11.0127 7.8234 12 7.10276 12 5.89504C12 5.38887 11.8147 4.91723 11.5067 4.63642Z'
          fill='white'
        />
      </svg>
    </Icon>
  )
}
