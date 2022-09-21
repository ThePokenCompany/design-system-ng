import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Google = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.0338 20.4106 18.2644 22.5 15 22.5C10.8581 22.5 7.5 19.1419 7.5 15C7.5 10.8581 10.8581 7.5 15 7.5C16.9119 7.5 18.6513 8.22125 19.9756 9.39937L23.5112 5.86375C21.2787 3.78312 18.2925 2.5 15 2.5C8.09688 2.5 2.5 8.09688 2.5 15C2.5 21.9031 8.09688 27.5 15 27.5C21.9031 27.5 27.5 21.9031 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z'
          fill='#FFC107'
        />
        <path
          d='M3.94141 9.18188L8.04828 12.1938C9.15953 9.4425 11.8508 7.5 15.0002 7.5C16.912 7.5 18.6514 8.22125 19.9758 9.39937L23.5114 5.86375C21.2789 3.78312 18.2927 2.5 15.0002 2.5C10.1989 2.5 6.03516 5.21062 3.94141 9.18188Z'
          fill='#FF3D00'
        />
        <path
          d='M15.0002 27.4999C18.2289 27.4999 21.1627 26.2643 23.3808 24.2549L19.5121 20.9812C18.2571 21.9318 16.6971 22.4999 15.0002 22.4999C11.7489 22.4999 8.98832 20.4268 7.94832 17.5337L3.87207 20.6743C5.94082 24.7224 10.1421 27.4999 15.0002 27.4999Z'
          fill='#4CAF50'
        />
        <path
          d='M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.5694 18.8981 20.67 20.1037 19.51 20.9819C19.5106 20.9812 19.5113 20.9812 19.5119 20.9806L23.3806 24.2544C23.1069 24.5031 27.5 21.25 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z'
          fill='#1976D2'
        />
      </svg>
    </Icon>
  )
}