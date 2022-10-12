import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
  color?: string
}

export const Bra = ({ className, style, color = 'white' }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M2.56171 0.218718C2.29918 0.227935 2.0733 0.419535 2.02777 0.687285C1.88602 1.52457 1.5998 2.26505 1.03955 3.2438L1.0401 3.24435C1.03682 3.25006 1.03276 3.25498 1.02966 3.26083C0.475319 4.31327 0.0507812 5.20809 0.0507812 6.33591C0.0507812 8.59969 1.54112 10.0625 3.84766 10.0625C4.96928 10.0625 5.81369 9.53103 6.35144 9.13138C6.66222 8.90047 6.93989 8.90047 7.25067 9.13138C7.78814 9.53103 8.63228 10.0625 9.75391 10.0625C12.0604 10.0625 13.5508 8.59969 13.5508 6.33591C13.5508 5.20809 13.1262 4.31327 12.5719 3.26083C12.5689 3.25512 12.5646 3.25047 12.5615 3.2449L12.5626 3.24435C12.002 2.2656 11.7161 1.52512 11.5743 0.687834C11.5223 0.381272 11.2344 0.174377 10.9261 0.226409C10.6199 0.27844 10.4132 0.56887 10.4653 0.875151C10.5981 1.66024 10.8367 2.36414 11.2513 3.18118C10.3138 3.4981 8.59239 4.24278 6.99689 5.84262C6.92629 5.91321 6.84353 5.92392 6.80078 5.92392C6.75803 5.92392 6.67527 5.91321 6.60468 5.84262C5.00924 4.24305 3.28841 3.49819 2.35077 3.18118C2.76558 2.36396 3.00397 1.65983 3.13684 0.874602C3.18859 0.568321 2.98279 0.27844 2.67651 0.226409C2.63795 0.219975 2.59921 0.217401 2.56171 0.218718ZM1.81683 4.18808C2.57818 4.43052 4.28068 5.10496 5.80872 6.63693C6.07365 6.90243 6.42614 7.04892 6.80133 7.04892C7.17652 7.04892 7.52846 6.90243 7.7934 6.63693C9.32143 5.10468 11.0251 4.43052 11.7853 4.18808C12.1697 4.94745 12.4258 5.59172 12.4258 6.33591C12.4258 7.11806 12.1653 8.93747 9.75391 8.93747C8.97456 8.93747 8.3652 8.55876 7.92139 8.22885C7.56532 7.96419 7.183 7.83169 6.80078 7.83169C6.41856 7.83169 6.03652 7.96419 5.68018 8.22885C5.23636 8.55876 4.627 8.93747 3.84766 8.93747C1.43622 8.93747 1.17578 7.11806 1.17578 6.33591C1.17578 5.59172 1.43236 4.94745 1.81683 4.18808Z'
          fill={color}
        />
      </svg>
    </Icon>
  )
}