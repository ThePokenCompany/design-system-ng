import React from 'react'
import { Icon } from '../Icon'

interface Props {
  className?: string
  style?: object
}

export const Binance = ({ className, style }: Props) => {
  return (
    <Icon className={className} style={style}>
      <svg width='100%' height='100%' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_9641_110272)'>
          <path
            d='M15.9857 7.5061L22.0527 13.5731L25.5377 10.074C25.5377 10.074 15.887 0.57841 15.887 0.521973L6.43369 9.97523L9.97514 13.5167L15.9857 7.5061ZM15.9857 24.522L9.9187 18.455L6.43369 21.94C6.43369 21.94 16.0845 31.4356 16.0845 31.492L25.5377 22.0387L21.9963 18.4973L15.9857 24.522ZM0.468262 16.0389L3.98008 12.5271L7.49189 16.0389L3.98008 19.5507L0.468262 16.0389Z'
            fill='white'
          />
          <path
            d='M12.4897 16.0398L16.0016 12.528L19.5134 16.0398L16.0016 19.5516L12.4897 16.0398ZM24.5106 16.0396L28.0224 12.5278L31.5343 16.0396L28.0224 19.5515L24.5106 16.0396Z'
            fill='white'
          />
        </g>
        <defs>
          <clipPath id='clip0_9641_110272'>
            <rect width='100%' height='100%' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </Icon>
  )
}
