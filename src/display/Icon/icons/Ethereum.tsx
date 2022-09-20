import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Ethereum = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 20 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M10.0001 0L9.78076 0.7275V21.8913L10.0001 22.1019L19.8195 16.2981L10.0001 0Z' fill='#343434' />
        <path d='M10 0L0.171875 16.2981L10 22.1019V11.8356V0Z' fill='#8C8C8C' />
        <path
          d='M9.99994 23.9605L9.87744 24.1092V31.6492L9.99994 31.9999L19.8281 18.1567L9.99994 23.9605Z'
          fill='#3C3C3B'
        />
        <path d='M10 31.9999V23.9605L0.171875 18.1567L10 31.9999Z' fill='#8C8C8C' />
        <path d='M10 22.1017L19.8194 16.2979L10 11.8354V22.1017Z' fill='#141414' />
        <path d='M0.171875 16.2979L10 22.1017V11.8354L0.171875 16.2979Z' fill='#393939' />
      </svg>
    </Icon>
  )
}
